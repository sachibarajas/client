import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import React from "react";


type ThemeProp = {
    children: JSX.Element
}

export enum themePalette {
    BG = '#CFBFA8',
    TITLE1 = '#7C5851',
    TITLE2 = 'white',
    TEXT = '#5B403C',
    FONT_TITLES = "'JetBrains Mono', monospace"
}

const theme = createTheme({
    palette:{
        mode:'light',
        background:{
            default: themePalette.BG
        },
        primary:{
            main: themePalette.TITLE1
        }
    },
    typography:{
        fontFamily: themePalette.FONT_TITLES,
    },
    components:{
        MuiButton:{
            defaultProps:{
                style:{
                    textTransform: 'none',
                    boxShadow: 'none',
                    borderRadius: '0.5em'
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