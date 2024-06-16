import React from 'react';
import { Wrapper } from './Icon.style';

export type IconProps = {
  name: string;
};

export function Icon(props: IconProps) {
  const { name } = props;

  return (
    <Wrapper className='Icon-wrapper material-symbols-outlined' data-testid='Icon-wrapper'>
      {name}
    </Wrapper>
  );
}

export default Icon;
