import styled from 'styled-components';
import ListContainer from './components/List/List.container';
import Page from './components/Page/Page';

export type AppProps = {};

const actions = [
  {
    id: 'new',
    title: 'New Group',
    iconName: 'add',
  },
];

export function App(_props: AppProps) {
  return (
    <Wrapper className='App-wrapper' data-testid='App-wrapper'>
      <Page header='Groups' actions={actions}>
        <ListContainer />
      </Page>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  background-color: #eee;
  display: flex;
  flex: 1;
`;

export default App;
