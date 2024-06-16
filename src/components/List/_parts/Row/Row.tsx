import { IGroup } from '../../../../store/types';
import Icon from '../../../Icon/Icon';
import { Cell, Wrapper } from './Row.style';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export type RowProps = {
  index: number;
  item: IGroup;
};

export function Row(props: RowProps) {
  const { index, item } = props;
  const { id, name, description } = item;

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Wrapper
      className='Row-wrapper'
      data-testid='Row-wrapper'
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <Cell>{index + 1}</Cell>
      <Cell>
        <Icon name='menu' />
      </Cell>
      <Cell>{name}</Cell>
      <Cell>{description}</Cell>
      <Cell>
        <Icon name='edit' />
      </Cell>
    </Wrapper>
  );
}

export default Row;
