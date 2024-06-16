import React from 'react';
import { Wrapper } from './Details.style';

export type DetailsProps = {};

export function Details(_props: DetailsProps) {
    return (
        <Wrapper className="Details-wrapper" data-testid="Details-wrapper">
            Details
        </Wrapper>
    );
}

export default Details;
