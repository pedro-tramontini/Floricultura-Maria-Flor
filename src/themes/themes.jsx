import { createTheme } from "@mui/material";

export const theme = createTheme({
    typography: {
        fontFamily: [
            'Inter',
        ]
    },
    palette: {
        primary: {
            main: '#E6EBEC',
        },
        secondary: {
            main: '#D2507C'
        },
        terciary: {
            main: '#393A3B',
            ligth: '#818385'
        },
        },
    
    customColors: {
        customRed: {
            main: '#DB4437'
        }
    }
})