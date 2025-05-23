import { Box, Button, Chip, Divider, InputAdornment, Link, Stack, TextField, ThemeProvider } from '@mui/material'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl';


export default function Register() {
    return(
        <>
        <Box  sx={{backgroundColor: '#FBB2CB', height: "100%", minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

            <Container sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
                <Box sx={{boxShadow: 10, margin: '5%',display: 'flex', justifyContent: 'center', padding: 2 ,backgroundColor: '#E6EBEC', height: '100%', width: 400, borderRadius: 2}}>
                    <Box sx={{padding: 1}}>
                        <FormControl>
                            <Typography variant='h5' color='terciary' sx={{paddingBlock: 1}}>Cadastro Cliente</Typography>
                        </FormControl>

                        <FormControl variant='filled' sx={{width: '100%'}} >
                            <Typography variant='body1' color='terciary' sx={{paddingBlock: 1}}>Nome</Typography>
                            <TextField
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

                        <FormControl variant='filled' sx={{width: '100%'}} >
                            <TextField
                                variant='filled'
                                color='terciary'
                                label="Telefone"
                                id="outlined-start-adornment"
                                sx={{width: '100%'}}
                                
                            />              
                        </FormControl>

                         <FormControl>
                            <Typography variant='body1' color='terciary' sx={{paddingBlock: 1}}>Email</Typography>
                        </FormControl>

                        <FormControl variant='filled' sx={{width: '100%'}} >
                            <TextField
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

                        <FormControl variant='filled' sx={{width: '100%'}} >
                            <TextField
                                variant='filled'
                                color='terciary'
                                label="Endereço"
                                id="outlined-start-adornment"
                                sx={{width: '100%'}}
                                
                            />              
                        </FormControl>

                         <FormControl>
                            <Typography variant='body1' color='terciary' sx={{paddingBlock: 1}}>Cidade</Typography>
                        </FormControl>

                        <FormControl variant='filled' sx={{width: '100%'}} >
                            <TextField
                                variant='filled'
                                color='terciary'
                                label="Cidade"
                                id="outlined-start-adornment"
                                sx={{width: '100%'}}
                               
                            />              
                        </FormControl>

                         <FormControl>
                            <Typography variant='body1' color='terciary' sx={{paddingBlock: 1}}>Senha</Typography>
                        </FormControl>

                        <FormControl variant='filled' sx={{width: '100%'}} >
                            <TextField
                                variant='filled'
                                color='terciary'
                                label="Password"
                                id="outlined-start-adornment"
                                sx={{width: '100%'}}
                               
                            />              
                        </FormControl>

                        <FormControl sx={{width: '100%', paddingBlock: 2}}>
                            <Button variant="contained" color='secondary' sx={{borderRadius: 0}}>Cadastrar</Button>
                        </FormControl>
                        <FormControl sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                            <Typography variant='body1' color='terciary.ligth' sx={{paddingBlock: 2, marginRight: .5}}>Já tem uma conta?</Typography>
                            <Link href='#' color='terciary.ligth'>
                            <Typography variant='body1' color='terciary.ligth'>Fazer Login</Typography>
                            </Link>
                        </FormControl>
                    </Box>
                </Box>
            </Container>
        </Box>
        </>

    )
}