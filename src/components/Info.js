import React from 'react';
import { Container } from 'semantic-ui-react'

export const Info = (props) => {
    return(
        <Container textAlign='center' text>
            <p>{props.info}</p>
        </Container>
    )
}