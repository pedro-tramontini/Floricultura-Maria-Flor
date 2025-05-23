import { AppBar, Box, IconButton, Toolbar } from "@mui/material";

export default function HomePage() {
    return(
        <>
    <AppBar position="static" sx={{zIndex: 999}}>
        <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{mr: 2}}>

            </IconButton>
        </Toolbar>
    <Box component="section" sx={{backgroundColor: 'primary', minHeight: "100vh", display: 'flex'}}>
    </Box>
    </AppBar>
        </>
    )
}