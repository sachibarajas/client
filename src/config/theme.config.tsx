import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import React from "react";

type ThemeProp = {
    children: JSX.Element
}

export enum themePalette {
    BG = '#CFBFA8',
    TITLE1 = '#7C5851',
    TITLE2 = '#FFFFFF',
    TEXT = '#5B403C',
    FONT_TITLES = "daniel, danielbd, txt_IV25, txt_IV50"
}

const theme = createTheme({
    palette:{
        background:{
            default: themePalette.BG
        },
        primary:{
            main: themePalette.TITLE1
        },
        secondary:{
            main: themePalette.TITLE2
        }
    },
    typography:{
        fontFamily: themePalette.FONT_TITLES,

        h2: {
            fontFamily: 'txt_IV50',
            color: themePalette.TITLE1,
            fontSize: '0.8rem',
            fontWeight: 'bolder',
            letterSpacing: '0.5em'
            
        },
        h3: {
            fontFamily: 'txt_IV50',
            color: themePalette.TITLE1,
            fontSize: '1rem',
            fontWeight: 'bolder',
            letterSpacing: '0.5em'
            
        }
    },
    components:{
        MuiButton:{
            defaultProps:{
                style:{
                    textTransform: 'none',
                    boxShadow: 'none',
                    borderRadius: '0.5em',
                    color: themePalette.TEXT,
                    fontFamily: 'txt_IV50',
                    fontWeight: 'bolder',
                    width: 'fit-content',
                }
            }
        },
        MuiAppBar:{
            defaultProps:{
                style:{
                    backgroundColor: "transparent",
                    width: '50%',
                    boxShadow: 'none',
                }
            }
        },
        MuiSelect:{
            defaultProps:{
                style:{
                    border: 'none',
                    fontFamily: 'txt_IV50',
                    fontSize: '0.7rem'
                }
            }
        }
    }
})

export const ThemeConfig: React.FC<ThemeProp> = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}