import React from 'react';
import { Header } from "semantic-ui-react";


export const DoubleHeader = (props) => {
    return(
        <div>
            <Header as='H1'>{props.date}</Header>
            <Header as='H2'>{props.title}</Header>
        </div>
    )
}
