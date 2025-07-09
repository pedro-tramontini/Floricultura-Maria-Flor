import { Box, Button, Grid, InputAdornment, MenuItem, TextField} from '@mui/material'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import axios from 'axios';


export default function RegisterFlower() {
    const [errorName, setErrorName] = useState(false)
    const [errorPreco, setErrorPreco] = useState(false)

    const handleSubmit = async (evento) => {
        evento.preventDefault()
        setErrorName()
        setErrorPreco()
        const data = new FormData(evento.currentTarget)

        if (data.get('nome') == "") {
            setErrorName(true)
        }
        
        if (data.get('preco') == "") {
            setErrorPreco(true)
        }

        if (data.get('nome') && data.get('preco')) {
            axios.post('http://localhost:3000/cadastrar-produto', {
            "nome": data.get('nome'),
            "tipo": data.get('tipo'),
            "preco": parseInt(data.get('preco'))
           })
           
        }
    }
    
    const tipos_flores = [
        {
            value: 'Buquê',
            label: 'Buquê'
        },
        {
            value: 'Arranjo Florais',
            label: 'Arranjo Florais'
        },
        {
            value: 'Flores em Cachepô',
            label: 'Flores em Cachepô'
        },
        {
            value: 'Kit',
            label: 'Kit'
        },
    ]

    return(
        <>
        <Box  sx={{backgroundColor: '#FBB2CB', height: "100%", minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

            <Container sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} >

                {/* Nomes */}
                <Box sx={{boxShadow: 10, margin: '5%',display: 'flex', justifyContent: 'center', padding: 2 ,backgroundColor: '#E6EBEC', height: '100%', width: 480, borderRadius: 2}}>
                    <Box sx={{padding: 1}}>
                        <form noValidate onSubmit={handleSubmit} id='form-new'>
                            <FormControl>
                                <Typography variant='h5' color='terciary' sx={{paddingBlock: 1}}>Cadastro de Flores</Typography>
                            </FormControl>
                            
                            <FormControl variant='filled' sx={{width: '100%'}} >
                                <Typography variant='body1' color='terciary' sx={{paddingBlock: 1}}>Nome</Typography>
                                <TextField
                                    name='nome'
                                    error={errorName}
                                    slotProps={{htmlInput: { maxLength: 60 }}}                         
                                    required
                                    variant='filled'
                                    color='terciary'
                                    label="Nome"
                                    id="outlined-start-adornment"
                                    sx={{width: '100%'}}
                                    />                    
                            </FormControl>
                            
                            
                            {/* Tipo */}
                            <FormControl>
                                <Typography variant='body1' color='terciary' sx={{paddingBlock: 1}}>Variedade</Typography>
                            </FormControl>

                                <Grid size={{md: 9, xs: 12}}>
                                    <FormControl variant='filled' sx={{width: '100%'}} >
                                        <TextField
                                            name="tipo"
                                            label="Tipo"
                                            select defaultValue="Arranjo Florais"
                                            helperText="Por favor, selectione a categoria da flor"
                                            slotProps={{htmlInput: { maxLength: 11, minLength: 11 }}}
                                            required
                                            variant='filled'
                                            color='terciary'
                                            id="outlined-start-adornment"
                                            sx={{width: '100%'}}
                                            >
                                        {tipos_flores.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                        </TextField>              
                                    </FormControl>
                                </Grid>


                            {/* Preço */}
                            <FormControl>
                                <Typography variant='body1' color='terciary' sx={{paddingBlock: 1}}>Preço</Typography>
                            </FormControl>

                            <FormControl variant='filled' sx={{width: '100%'}} >
                                <TextField 
                                        error={errorPreco}
                                        name='preco'
                                    slotProps={{
                                        input: {
                                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                        },}}
                                        type='text'
                                        required
                                        variant='filled'
                                        color='terciary'
                                        label="Preço"
                                        id="outlined-start-adornment"
                                        sx={{width: '100%'}}
                                    />              
                            </FormControl>

                            <FormControl sx={{width: '100%', paddingBlock: 2}}>
                                <Button type='submit' variant="contained" color='secondary' sx={{borderRadius: 0}}>Cadastrar</Button>
                            </FormControl>
                        </form>
                        
                    </Box>
                </Box>
            </Container>
        </Box>
        </>

    )
}