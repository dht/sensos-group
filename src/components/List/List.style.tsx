import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  // card
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 8px;
  padding: 16px;
  display: table;
  width: 100%;
`;

export const ListHeader = styled.div`
  display: table-header-group;
`;

export const ListContent = styled.div`
  display: table-row-group;
`;
