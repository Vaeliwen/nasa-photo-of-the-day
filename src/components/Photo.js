import React from 'react';
import { Image } from 'semantic-ui-react'

export const PhotoOfTheDay = (props) => {
    return(
            <Image src={props.hdurl} />
    )
}