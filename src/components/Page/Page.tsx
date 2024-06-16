import React from 'react';
import { Action, Actions, H1, Header, Wrapper } from './Page.style';
import { IPageAction } from '../../types';

export type PageProps = {
  header: string;
  actions: IPageAction[];
  children: React.ReactNode;
};

export function Page(props: PageProps) {
  const { header, actions } = props;

  function renderAction(action: IPageAction) {
    return <Action key={action.id} className='action'></Action>;
  }

  function renderActions() {
    return actions.map((action: IPageAction) => renderAction(action));
  }
  return (
    <Wrapper className='Page-wrapper' data-testid='Page-wrapper'>
      <Header>
        <H1>{header}</H1>
        <Actions>{renderActions()}</Actions>
      </Header>
      {props.children}
    </Wrapper>
  );
}

export default Page;
