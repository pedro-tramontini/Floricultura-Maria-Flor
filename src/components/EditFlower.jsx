import { Box, Button, Grid, InputAdornment, MenuItem, Select, TextField} from '@mui/material'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


export default function EditFlower() {

    //pega os dados da fakeApi para ter como "cache"
    const {id} = useParams()

    const [nome, setNome] = useState("");
    const [variedadeRec, setVariedadeRec] = useState("");
    const [preço, setPreço] = useState();
    
    useEffect(() => {
        axios.get(`http://localhost:3000/listar-produto/${id}`)
        .then(response => {
            const data = response.data
            console.log(data)
            setNome(data.nome)
            setVariedadeRec(data.tipo)
            setPreço(data.preco)
            })
            .catch(function (error) {
                console.log(error)
            })              
    }, [])

    const handleChangeState = (event) => {setVariedadeRec(event.target.value) }



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
            axios.put(`http://localhost:3000/atualizar-produto/${id}`, {
            "nome": data.get('nome'),
            "tipo": data.get('variedade'),
            "preco": data.get('preco')
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
                                <Typography variant='h5' color='terciary' sx={{paddingBlock: 1}}>Edição Cadastro de Flores</Typography>
                            </FormControl>
                            
                            <FormControl variant='filled' sx={{width: '100%'}} >
                                <Typography variant='body1' color='terciary' sx={{paddingBlock: 1}}>Nome</Typography>
                                <TextField
                                    name='nome'
                                    error={errorName}
                                    defaultValue={nome}
                                    slotProps={{htmlInput: { maxLength: 60 }, inputLabel: { shrink: true }}}                         
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
                                       
                                        <Select name='variedade' defaultValue={variedadeRec} value={variedadeRec} onChange={handleChangeState}>
                                        {tipos_flores.map((estado) => (
                                            <MenuItem key={estado.value} value={estado.value}>
                                                {estado.label}
                                            </MenuItem>
                                        ))}
                                        </Select>
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
                                            defaultValue={preço}
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