import {Container, Typography } from '@mui/material';
import React from 'react';
import s from './AboutMe.module.css';
//import of images
import diagram from '../../assets/AboutMe.svg';
import astronaut from '../../assets/astronaut.svg';
import textBG from '../../assets/BARRA MINI-26.png';
import { Link } from 'react-router-dom';

export const AboutMe: React.FC<{}> = () => {
    return(
        <Container maxWidth='xl' className={s.AboutMe}> 
            <img src= {diagram} alt='aboutMe diagram' className={s.diagram}/>
                <img src={astronaut} alt='astronaut' className={s.astronaut} />
                <img src={textBG} alt='textBG' className={s.textBG}/>
                <Link to='https://drive.google.com/file/d/185zYHzVyzwvFbmuwVyADN_3b2-DXuC1u/view?usp=drive_link'><Typography className={s.textDownload}>¡Hey, download my CV!</Typography></Link>
        </Container>
    )
}