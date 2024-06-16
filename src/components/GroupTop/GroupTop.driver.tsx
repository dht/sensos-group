import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { GroupTop, GroupTopProps } from './GroupTop';
import { BaseComponentDriver } from 'testing-base';

export class GroupTopDriver extends BaseComponentDriver {
    private props: Partial<GroupTopProps> = {};

    constructor() {
        super('GroupTop');
    }

    when: any = {
        rendered: () => {
            render(<GroupTop {...(this.props as GroupTopProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<GroupTop {...(this.props as GroupTopProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<GroupTopProps>) => {
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
