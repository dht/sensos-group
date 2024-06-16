import { useState } from 'react';
import { IGroup } from '../../store/types';
import { Json } from '../../types';
import Row from './_parts/Row/Row';
import Th from './_parts/Th/Th';
import { Columns } from './List.data';
import { ListContent, ListHeader, Wrapper } from './List.style';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

export type ListProps = {
  groups: IGroup[];
};

export function List(props: ListProps) {
  const { groups } = props;

  const [items, setItems] = useState([1, 2, 3]);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function renderGroup(group: IGroup, index: number) {
    return <Row key={group.id} item={group} index={index} />;
  }

  function renderGroups() {
    return groups.map((group: IGroup, index) => renderGroup(group, index));
  }

  function renderTh(column: Json) {
    const { title } = column;

    return <Th key={column.id}>{title}</Th>;
  }

  function renderThs() {
    return Columns.map((column: Json) => renderTh(column));
  }

  return (
    <Wrapper>
      <ListHeader>
        <Th />
        <Th />
        {renderThs()}
      </ListHeader>
      <ListContent>
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={() => {}}>
          <SortableContext items={items} strategy={verticalListSortingStrategy}>
            {renderGroups()}
          </SortableContext>
        </DndContext>
      </ListContent>
    </Wrapper>
  );
}

export default List;
