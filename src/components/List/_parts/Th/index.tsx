import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Th = lazy(() => import('./Th.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.th',
  name: 'Th',
  description: 'Th',
  component: (instance: IElement) => <Th {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
