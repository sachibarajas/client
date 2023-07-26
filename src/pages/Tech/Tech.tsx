import { Container } from '@mui/material';
import React from 'react';

import s from './Tech.module.css';


export const Tech: React.FC<{}> = () => {
    return(
        <Container maxWidth='xl' className={s.Tech} >
            <h1>vista de Tech</h1>
        </Container>
    )
}