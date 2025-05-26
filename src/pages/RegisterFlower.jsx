import { Box, Button, Chip, Divider, Grid, InputAdornment, Link, MenuItem, Stack, TextField, ThemeProvider } from '@mui/material'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl';
import { useNavigate } from 'react-router-dom';

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


    const handleSubmit = async (evento) => {
        evento.preventDefault();

        const data = new FormData(evento.currentTarget)
        const nome = data.get('nome')
        const ddd = data.get('ddd')
        const telefone = data.get('telefone')
        const email = data.get('email')
        const rua = data.get('rua')
        const número = data.get('número')
        const bairro = data.get('bairro')
        const cep = data.get('cep')

        const send = {
            nome: nome,
            ddd: ddd,
            telefone: telefone,
            email: email,
            rua: rua,
            número: número,
            bairro: bairro,
            cep: cep,
        }

        console.log(send)
    }


export default function RegisterFlower() {
    const navigate = useNavigate()



    return(
        <>
        <Box  sx={{backgroundColor: '#FBB2CB', height: "100%", minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

            <Container sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} >

                {/* Nomes */}
                <Box sx={{boxShadow: 10, margin: '5%',display: 'flex', justifyContent: 'center', padding: 2 ,backgroundColor: '#E6EBEC', height: '100%', width: 480, borderRadius: 2}}>
                    <Box sx={{padding: 1}}>
                        <form onSubmit={handleSubmit} id='form-new'>
                            <FormControl>
                                <Typography variant='h5' color='terciary' sx={{paddingBlock: 1}}>Cadastro de Flores</Typography>
                            </FormControl>
                            
                            <FormControl variant='filled' sx={{width: '100%'}} >
                                <Typography variant='body1' color='terciary' sx={{paddingBlock: 1}}>Nome</Typography>
                                <TextField
                                    name='nome'           
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
                                            name='tipo'
                                            select
                                            label="Tipo"
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
                                    slotProps={{
                                    input: {
                                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                    },}}
                                    pattern
                                    type='text'
                                    name='preco'
                                    required
                                    variant='filled'
                                    color='terciary'
                                    label="Preço"
                                    id="outlined-start-adornment"
                                    sx={{width: '100%'}}
                                    />              
                            </FormControl>

                            <FormControl sx={{width: '100%', paddingBlock: 2}}>
                                <Button onClick={() =>navigate('/login')} type='submit' variant="contained" color='secondary' sx={{borderRadius: 0}}>Cadastrar</Button>
                            </FormControl>
                        </form>
                        
                    </Box>
                </Box>
            </Container>
        </Box>
        </>

    )
}