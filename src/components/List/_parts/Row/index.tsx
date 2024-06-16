import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Row = lazy(() => import('./Row.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.row',
  name: 'Row',
  description: 'Row',
  component: (instance: IElement) => <Row {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
