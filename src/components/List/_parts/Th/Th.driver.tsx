import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Th, ThProps } from './Th';
import { BaseComponentDriver } from 'testing-base';

export class ThDriver extends BaseComponentDriver {
    private props: Partial<ThProps> = {};

    constructor() {
        super('Th');
    }

    when: any = {
        rendered: () => {
            render(<Th {...(this.props as ThProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Th {...(this.props as ThProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ThProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        WrapperClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
