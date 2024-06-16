import { useDispatch, useSelector } from 'react-redux';
import React, { useMemo } from 'react';
import { List } from './List';
import * as selectors from '../../store/selectors';

export type ListContainerProps = {};

export function ListContainer(_props: ListContainerProps) {
  const dispatch = useDispatch();
  const groups = useSelector(selectors.$groups);

  const callbacks = useMemo(
    () => ({
      onClick: () => {},
    }),
    []
  );

  return <List groups={groups} />;
}

export default ListContainer;
