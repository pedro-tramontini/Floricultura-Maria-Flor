import { AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { handleClick } from "../aafunctions/navigate";
//import Footer from "../components/Footer";


export default function HomePage() {
    const navigate = useNavigate()
    

    return(
    <Box>
        <Box>
            <AppBar position="fixed">
                <Toolbar sx={{display: 'flex', justifyContent: 'space-around', bgcolor: 'pink.main'}}>
                    <Box component="img" sx={{height: 50}} alt="Logo" src={logo}/>
                    <Box>
                    <Typography  type="button" variant="h6" color='grey.main' onClick={() =>navigate("/login", useNavigate)}>Flores</Typography>
                    </Box>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: 3}}>
                            <AccountCircleOutlinedIcon color="grey" onClick={() => handleClick('login', navigate)} sx={{cursor: 'pointer'}}/>
                            <ShoppingCartOutlinedIcon color="grey" onClick={() => handleClick('shopingcart/shoppingcartflowers', navigate)} sx={{cursor: 'pointer'}}/>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
        <Outlet />
        <Box boxShadow={15} sx={{minHeight: '10vh', bgcolor: 'pink.main', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Typography color="grey.main" variant="h6">Todos os direitos reservados à &copy;Maria FLor</Typography>
        </Box>
    </Box>
    )
}