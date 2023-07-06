import { Container } from '@mui/material';
import React from 'react';
import s from './Home.module.css';

export const Home: React.FC<{}> = () => {
    return(
        <Container maxWidth='xl' className={s.homeContainer}>
            <h1>Vista de Home</h1>
        </Container>
    )
}