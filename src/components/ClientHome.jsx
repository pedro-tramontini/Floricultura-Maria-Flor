import { Box, Grid} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import CardFlower from "./CardFlower";
import AddIcon from '@mui/icons-material/Add';

export default function ClientHome() {
    
    const[flores, setFlores] = useState([]);


    useEffect(() => {
    axios.get("http://localhost:3000/listar-produto")
        .then(response => {
        setFlores(response.data);
        })
        .catch(error => {
        console.error("Erro ao buscar dados", error);
        });
    }, []);

    return(
    <Box component="section" sx={{minHeight: "100vh", display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Box sx={{maxWidth: '80%'}}>
            <Grid size={{xs: 12, md: 6}} container spacing={2} sx={{display: "flex", alignItems: 'center', justifyContent: 'center', padding: 3, paddingTop: 10}}>
                {flores.map(flor => (
                    <Grid  sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} key={flor.id}>
                        <CardFlower flor={flor} modoAdmin={false} iconeAdd={<AddIcon fontSize="large" color="success"/>}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    </Box>
    )
}