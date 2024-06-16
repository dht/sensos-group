import React from 'react';
import { Wrapper } from './Th.style';

export type ThProps = {
  children?: React.ReactNode;
};

export function Th(props: ThProps) {
  return (
    <Wrapper className='Th-wrapper' data-testid='Th-wrapper'>
      {props.children}
    </Wrapper>
  );
}

export default Th;
