import { Box, Grid} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import CardFlower from "./CardFlower";
import DeleteIcon from '@mui/icons-material/Delete';

export default function Home() {


    const[flores, setFlores] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/Cards")
            .then(response => {
                setFlores(response.data)                
            })
            .catch(function (error) {
                console.log(error)
            })
    })

        const deleteCard = (id) => {
        axios.delete(`https://localhost:8000/Cards/${id}`)
            .then(() => {
                setFlores(flores.filter(id => flor.id !== id))
            })
            .catch((error) => {
                console.log('Erro ao deletar', error)
            })
        }


    return(
    <Box component="section" sx={{minHeight: "100vh", display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Box sx={{maxWidth: '80%'}}>
            <Grid size={{xs: 12, md: 6}} container spacing={2} sx={{display: "flex", alignItems: 'center', justifyContent: 'center', padding: 2, paddingTop: 10}}>
                {flores.map(flor => (
                    <Grid  sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} key={flor.id}>
                        <CardFlower flor={flor} deleteCard={deleteCard} icone={<DeleteIcon fontSize="large" color="secondary"/>}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    </Box>
    )
}