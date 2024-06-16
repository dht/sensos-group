import React from 'react';
import { Wrapper } from './Button.style';
import Icon from '../Icon/Icon';

export type ButtonProps = {
  title: string;
  iconName: string;
  onClick: () => void;
};

export function Button(props: ButtonProps) {
  const { iconName, title } = props;

  return (
    <Wrapper className='Button-wrapper' data-testid='Button-wrapper' onClick={props.onClick}>
      <Icon name={iconName} />
      {title}
    </Wrapper>
  );
}

export default Button;
