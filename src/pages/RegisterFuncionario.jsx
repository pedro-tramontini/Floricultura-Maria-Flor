 import { Box, Button, Chip, Divider, Grid, InputAdornment, Link, Stack, TextField, ThemeProvider } from '@mui/material'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';




export default function RegisterFuncionario() {
    const navigate = useNavigate()
    const [errorNome, setErrorNome] = useState(false)
    const [errorTelefone, setErrorTelefone] = useState(false)
    const [errorEmail, setErrorEmail] = useState(false)
    const [errorRua, setErrorRua] = useState(false)
    const [errorNumero, setErrorNumero] = useState(false)
    const [errorBairro, setErrorBairro] = useState(false)
    const [errorCep, setErrorCep] = useState(false)

    
    const handleSubmit = async (evento) => {
        evento.preventDefault()
        setErrorNome()
        setErrorTelefone()
        setErrorEmail()
        setErrorRua()
        setErrorNumero()
        setErrorBairro()
        setErrorCep()
        const data = new FormData(evento.currentTarget)

        if (data.get('nome') == "") {
                setErrorNome(true)
            }
            
            
        if (data.get('telefone') == "") {
                setErrorTelefone(true)
            }
            
        if (data.get('email') == "") {
                setErrorEmail(true)
            }
        if (data.get('rua') == "") {
                setErrorRua(true)
            }
            
        if (data.get('número') == "") {
                setErrorNumero(true)
            }
        if (data.get('bairro') == "") {
                setErrorBairro(true)
            }
            
        if (data.get('cep') == "") {
                setErrorCep(true)
            }
        
        if (data.get('nome') && data.get('telefone') && data.get('email') && data.get('rua') && data.get('número') && data.get('bairro') && data.get('cep')) {
            axios.post('http://localhost:3000/cadastrar-funcionario', {
                pessoa: {
                    nome: data.get('nome'),
                    email: data.get('email')
                },
                funcionario: {
                    cargo: data.get('cargo') // supondo que tenha esse campo
                },
                telefone: {
                    numero: data.get('telefone') // ou ddd + telefone, se quiser juntar
                },
                cidade: {
                    nome: data.get('cidade'),
                    uf: data.get('uf')
                },
                endereco: {
                    rua: data.get('rua'),
                    numero: Number(data.get('numero')),
                    bairro: data.get('bairro'),
                    cep: data.get('cep')
                }
            })
            location.reload()
        }
    }



    return(
        <>
        <Box  sx={{backgroundColor: '#FBB2CB', height: "100%", minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

            <Container sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
                <Box sx={{boxShadow: 10, margin: '5%',display: 'flex', justifyContent: 'center', padding: 2 ,backgroundColor: '#E6EBEC', height: '100%', width: 480, borderRadius: 2}}>
                    <Box sx={{padding: 1}}>
                        <form noValidate onSubmit={handleSubmit} id='form-new'>
                            <FormControl>
                                <Typography variant='h5' color='terciary' sx={{paddingBlock: 1}}>Cadastro Funcionário</Typography>
                            </FormControl>
                            
                            <FormControl variant='filled' sx={{width: '100%'}} >
                                <Typography variant='body1' color='terciary' sx={{paddingBlock: 1}}>Nome</Typography>
                                <TextField
                                    name='nome'
                                    error={errorNome}           
                                    slotProps={{htmlInput: { maxLength: 60 }}}                         
                                    required
                                    variant='filled'
                                    color='terciary'
                                    label="Nome"
                                    id="outlined-start-adornment"
                                    sx={{width: '100%'}}
                                    
                                    />                    
                            </FormControl>

                            <FormControl variant='filled' sx={{width: '100%'}} >
                                <Typography variant='body1' color='terciary' sx={{paddingBlock: 1}}>Cargo</Typography>
                                <TextField
                                    name='cargo'
                                    error={errorNome}           
                                    slotProps={{htmlInput: { maxLength: 60 }}}                         
                                    required
                                    variant='filled'
                                    color='terciary'
                                    label="Cargo"
                                    id="outlined-start-adornment"
                                    sx={{width: '100%'}}
                                    
                                    />                    
                            </FormControl>
                            
                            <FormControl>
                                <Typography variant='body1' color='terciary' sx={{paddingBlock: 1}}>Telefone</Typography>
                            </FormControl>

                                <Grid size={{md: 9, xs: 12}}>
                                    <FormControl variant='filled' sx={{width: '100%'}} >
                                        <TextField
                                            name='telefone'
                                            error={errorTelefone}
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

                            <FormControl>
                                <Typography variant='body1' color='terciary' sx={{paddingBlock: 1}}>Email</Typography>
                            </FormControl>

                            <FormControl variant='filled' sx={{width: '100%'}} >
                                <TextField
                                    slotProps={{htmlInput: { maxLength: 60 }}}
                                    name='email'
                                    error={errorEmail}
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
                            <Grid sx={{paddingBottom: 2}} container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                             
                                <Grid size={{md: 3.5, xs: 12}}>
                                    <TextField
                                        name='uf'
                                        error={errorNome}           
                                        slotProps={{htmlInput: { maxLength: 60 }}}                         
                                        required
                                        variant='filled'
                                        color='terciary'
                                        label="Uf"
                                        id="outlined-start-adornment"
                                        sx={{width: '100%'}}
                                        
                                        />      
                                </Grid>
                                <Grid size={{md: 8.5, xs: 12}}>
                                    <TextField
                                        name='cidade'
                                        error={errorNome}           
                                        slotProps={{htmlInput: { maxLength: 60 }}}                         
                                        required
                                        variant='filled'
                                        color='terciary'
                                        label="Cidade"
                                        id="outlined-start-adornment"
                                        sx={{width: '100%'}}
                                        
                                        />      
                                </Grid>
                            </Grid>

                            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid size={{md: 8.5, xs: 12}}>
                                    <FormControl variant='filled' sx={{width: '100%'}} >
                                    <TextField
                                        slotProps={{htmlInput: { maxLength: 60 }}}
                                        name='rua'
                                        error={errorRua}
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
                                        error={errorNumero}
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
                                        error={errorBairro}
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
                                        error={errorCep}
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
                                <Button  type='submit' variant="contained" color='secondary' sx={{borderRadius: 0}}>Cadastrar</Button>
                                {/* onClick={() =>navigate('/login')} */}
                            </FormControl>

                                <Divider sx={{paddingBottom: 2}}>
                                    <Chip  label="OU" sx={{border: 0, color: 'terciary.ligth'}} variant='outlined'/>
                                </Divider>

                            <FormControl sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                                <Typography variant='body1' color='terciary.ligth' sx={{marginRight: .5}}>Já possui uma conta?</Typography>
                                <Link href='#' color='terciary.ligth'>
                                <Typography variant='body1' color='terciary.ligth'>Faça login</Typography>
                                {/* onClick={() =>navigate('/login')} */}
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