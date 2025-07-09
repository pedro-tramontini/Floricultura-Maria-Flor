import { Box, Grid} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import CardFlower from "./CardFlower";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function AdminHome() {

        const[floresAdmin, setFloresAdmin] = useState([]);

        
    useEffect(() => {
    axios.get("http://localhost:3000/listar-produto")
        .then(response => {
        setFloresAdmin(response.data);
        })
        .catch(error => {
        console.error("Erro ao buscar dados", error);
        });
    }, []);

        const deleteCard = (id) => {
        axios.delete(`http://localhost:3000/deletar-produto/${id}`)
            .then(() => {
                setFloresAdmin(floresAdmin.filter(id => flor.id !== id))
            })
            .catch((error) => {
                console.log('Erro ao deletar', error)
            })
        }


    return(
    <Box component="section" sx={{minHeight: "100vh", display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Box sx={{maxWidth: '80%'}}>
            <Grid size={{xs: 12, md: 6}} container spacing={2} sx={{display: "flex", alignItems: 'center', justifyContent: 'center', padding: 2, paddingTop: 10}}>
                {floresAdmin.map(flor => (
                    <Grid  sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} key={flor.id}>
                        <CardFlower flor={flor} modoAdmin={true} deleteCard={deleteCard} iconeEdit={<EditIcon fontSize="large"/>} iconeDelete={<DeleteIcon fontSize="large" color="secondary"/>}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    </Box>
    )
}