import { AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import { Outlet } from "react-router-dom";
import logo from "../assets/logo.png"
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
//import Footer from "../components/Footer";


export default function HomePage() {
    return(
    <Box>
        <Box>
            <AppBar position="fixed">
                <Toolbar sx={{display: 'flex', justifyContent: 'space-around', bgcolor: 'pink.main'}}>
                    <Box component="img" sx={{height: 50}} alt="Logo" src={logo}/>
                    <Box>
                    <Typography variant="h6" color='grey.main'>Flores</Typography>
                    </Box>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: 3}}>
                        <AccountCircleOutlinedIcon color="grey"/>
                        <ShoppingCartOutlinedIcon color="grey"/>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
        <Outlet />
        <Box boxShadow={15} sx={{minHeight: '10vh', bgcolor: 'pink.main', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Typography color="grey.main" variant="h6">Todos os direitos reservados à &copy; Maria FLor</Typography>
        </Box>
    </Box>
    )
}