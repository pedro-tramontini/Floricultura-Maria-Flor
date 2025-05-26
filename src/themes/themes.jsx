import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
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
        pink: {
            main: '#FBB2CB'
        },
        grey: {
            main: grey[50]
        }
        },
})
