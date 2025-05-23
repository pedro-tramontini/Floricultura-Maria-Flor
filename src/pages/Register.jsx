import { Box, Button, Chip, Divider, Grid, InputAdornment, Link, Stack, TextField, ThemeProvider } from '@mui/material'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl';
import { useNavigate } from 'react-router-dom';

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


export default function Register() {
    const navigate = useNavigate()



    return(
        <>
        <Box  sx={{backgroundColor: '#FBB2CB', height: "100%", minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

            <Container sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
                <Box sx={{boxShadow: 10, margin: '5%',display: 'flex', justifyContent: 'center', padding: 2 ,backgroundColor: '#E6EBEC', height: '100%', width: 480, borderRadius: 2}}>
                    <Box sx={{padding: 1}}>
                        <form onSubmit={handleSubmit} id='form-new'>
                            <FormControl>
                                <Typography variant='h5' color='terciary' sx={{paddingBlock: 1}}>Cadastro Cliente</Typography>
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
                            
                            <FormControl>
                                <Typography variant='body1' color='terciary' sx={{paddingBlock: 1}}>Telefone</Typography>
                            </FormControl>

                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid size={{md: 3, xs: 12}}>
                                    <FormControl variant='filled' sx={{width: '100%'}} >
                                        <TextField
                                            name='ddd'
                                            slotProps={{htmlInput: { maxLength: 3 }}}
                                            required
                                            variant='filled'
                                            color='terciary'
                                            label="DDD"
                                            id="outlined-start-adornment"
                                            sx={{width: '100%'}}
                                            />              
                                    </FormControl>
                                </Grid>
                                <Grid size={{md: 9, xs: 12}}>
                                    <FormControl variant='filled' sx={{width: '100%'}} >
                                        <TextField
                                            name='telefone'
                                            slotProps={{htmlInput: { maxLength: 11, minLength: 11 }}}
                                            required
                                            variant='filled'
                                            color='terciary'
                                            label="Telefone"
                                            id="outlined-start-adornment"
                                            sx={{width: '100%'}}
                                            
                                            />              
                                    </FormControl>
                                </Grid>
                            </Grid>

                            <FormControl>
                                <Typography variant='body1' color='terciary' sx={{paddingBlock: 1}}>Email</Typography>
                            </FormControl>

                            <FormControl variant='filled' sx={{width: '100%'}} >
                                <TextField
                                    slotProps={{htmlInput: { maxLength: 60 }}}
                                    name='email'
                                    required
                                    variant='filled'
                                    color='terciary'
                                    label="Email"
                                    id="outlined-start-adornment"
                                    sx={{width: '100%'}}
                                    
                                    />              
                            </FormControl>

                            <FormControl>
                                <Typography variant='body1' color='terciary' sx={{paddingBlock: 1}}>Endereço</Typography>
                            </FormControl>

                            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid size={{md: 8.5, xs: 12}}>
                                    <FormControl variant='filled' sx={{width: '100%'}} >
                                    <TextField
                                        slotProps={{htmlInput: { maxLength: 60 }}}
                                        name='rua'
                                        required
                                        variant='filled'
                                        color='terciary'
                                        label="Rua"
                                        id="outlined-start-adornment"
                                        sx={{width: '100%'}}
                                        />              
                                    </FormControl>                           
                                </Grid>
                                <Grid size={{md: 3.5, xs: 12}}>
                                    <FormControl variant='filled' sx={{width: '100%'}} >
                                    <TextField
                                        slotProps={{htmlInput: { maxLength: 10 }}}
                                        name='número'
                                        required
                                        variant='filled'
                                        color='terciary'
                                        label="Número"
                                        id="outlined-start-adornment"
                                        sx={{width: '100%'}}
                                        />              
                                    </FormControl>                           
                                </Grid>
                                <Grid size={{md: 7, xs: 12}}>
                                    <FormControl variant='filled' sx={{width: '100%'}} >
                                    <TextField
                                        slotProps={{htmlInput: { maxLength: 60 }}}
                                        name='bairro'
                                        required
                                        variant='filled'
                                        color='terciary'
                                        label="Bairro"
                                        id="outlined-start-adornment"
                                        sx={{width: '100%'}}
                                        />              
                                    </FormControl>                           
                                </Grid>
                                <Grid size={{md: 5, xs: 12}}>
                                    <FormControl variant='filled' sx={{width: '100%'}} >
                                    <TextField
                                        name='cep'
                                        slotProps={{htmlInput: { maxLength: 8, minLength: 8 }}}
                                        required
                                        variant='filled'
                                        color='terciary'
                                        label="CEP"
                                        id="outlined-start-adornment"
                                        sx={{width: '100%'}}
                                        />              
                                    </FormControl>                           
                                </Grid>
                            </Grid>

                            <FormControl sx={{width: '100%', paddingBlock: 2}}>
                                <Button onClick={() =>navigate('/login')} type='submit' variant="contained" color='secondary' sx={{borderRadius: 0}}>Cadastrar</Button>
                            </FormControl>

                                <Divider sx={{paddingBottom: 2}}>
                                    <Chip  label="OU" sx={{border: 0, color: 'terciary.ligth'}} variant='outlined'/>
                                </Divider>

                            <FormControl sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                                <Typography variant='body1' color='terciary.ligth' sx={{marginRight: .5}}>Já possui uma conta?</Typography>
                                <Link href='#' color='terciary.ligth'>
                                <Typography onClick={() =>navigate('/login')} variant='body1' color='terciary.ligth'>Faça login</Typography>
                                </Link>
                            </FormControl>
                        </form>
                        
                    </Box>
                </Box>
            </Container>
        </Box>
        </>

    )
}