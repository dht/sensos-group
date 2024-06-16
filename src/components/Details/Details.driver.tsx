import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Details, DetailsProps } from './Details';
import { BaseComponentDriver } from 'testing-base';

export class DetailsDriver extends BaseComponentDriver {
    private props: Partial<DetailsProps> = {};

    constructor() {
        super('Details');
    }

    when: any = {
        rendered: () => {
            render(<Details {...(this.props as DetailsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Details {...(this.props as DetailsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<DetailsProps>) => {
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
