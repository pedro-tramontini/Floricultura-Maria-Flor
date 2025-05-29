import { Box, Button, Chip, Divider, InputAdornment, Stack, TextField } from '@mui/material'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FormControl from '@mui/material/FormControl';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import cover from "../assets/bk_flowers3.png"

export default function Login() {
    const navigate = useNavigate()

    const[cadastro, setCadastro] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8001/Cadasters")
            .then(response => {
                setCadastro(response.data)   
            })
            .catch(function (error) {
                console.log(error)
            })
        })


        const [errorLogin, setErrorLogin] = useState(false)
        const [errorPassword, setErrorPassword] = useState(false)
        const [login, setLogin] = useState('')
        const [password, setPassword] = useState('')

        const handleSubmit = async (evento) => {
        evento.preventDefault()
        setErrorLogin()
        setErrorPassword()

        const data = new FormData(evento.currentTarget)

        if (data.get('login') == "") {
                setErrorLogin(true)
            }
            
        if (data.get('password') == "") {
                setErrorPassword(true)
            }
            
        if (data.get('login') && data.get('password') ) {
            setLogin(data.get('login')),
            setPassword(data.get('password'))

        }
    }

    const[isMobile, setIsMobile] =useState(false);

    useEffect(() => {
        const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent); // Pode ajustar esse valor conforme necessário
        if (mobile) {
            setIsMobile(true);
        }
    }, []);

    //backgroundImage: `url(${cover})`,backgroundRepeat: 'no-repeat', backgroundSize: '79%',
    return(
        <>
        <Box  sx={{flexDirection: isMobile ? 'column' : 'row', backgroundColor: '#FBB2CB', minHeight: "100vh", display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            {!isMobile && (
            <Box sx={{boxShadow: 10,backgroundColor: '#E6EBEC', minHeight: "100vh",width: '120vh', display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '5%'}}>
                <Box sx={{display: 'flex',flexDirection: 'column', justifyContent: 'center', textAlign: 'center', height: 500, width: 380, gap: 2}}>
                    <Typography variant='h2' sx={{fontWeight: 400}}>Novo aqui?</Typography>
                    <Typography variant='h6'>Faça o seu cadastro para conhecer mais sobre a floricultura Maria Flor!</Typography>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                    <Button onClick={() =>navigate('/register')} variant="contained" color='secondary' sx={{height: 50, borderRadius: 6, width: '50%'}}>Cadastro</Button>
                    </Box>           
                </Box>
            </Box>

            )}
            <Container sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50%'}} >

            <form noValidate onSubmit={handleSubmit}>
                <Box sx={{boxShadow: 10,display: 'flex', justifyContent: 'center',padding: 2 ,backgroundColor: '#E6EBEC', height: 500, width: 400, borderRadius: 2}}>
                    <Box sx={{padding: 1}}>
                        <FormControl>
                            <Typography variant='h5' color='terciary' sx={{paddingBlock: 1}}>Login</Typography>
                        </FormControl>

                        <FormControl variant='filled' sx={{width: '100%'}} >
                            <Typography variant='body1' color='terciary' sx={{paddingBlock: 1}}>Email</Typography>
                            <TextField
                                name='login'
                                error={errorLogin}
                                variant='filled'
                                color='terciary'
                                label="Login"
                                id="outlined-start-adornment"
                                sx={{width: '100%'}}
                                slotProps={{
                                    input: {
                                        endAdornment: <InputAdornment > <AccountCircleIcon color='terciary'/></InputAdornment>,
                                    },
                                }}
                                />                    
                        </FormControl>
                        
                        <FormControl>
                            <Typography variant='body1' color='terciary' sx={{paddingBlock: 1}}>Senha</Typography>
                        </FormControl>

                        <FormControl variant='filled' sx={{width: '100%'}} >
                            <TextField
                                name='password'
                                error={errorPassword}
                                variant='filled'
                                color='terciary'
                                label="Password"
                                id="outlined-start-adornment"
                                sx={{width: '100%'}}
                                slotProps={{
                                    input: {
                                        endAdornment: <InputAdornment> <RemoveRedEyeIcon color='terciary'/></InputAdornment>,
                                    },
                                }}
                                />              
                        </FormControl>

                        <FormControl sx={{width: '100%', paddingBlock: 2}}>
                            <Button type='submit' variant="contained" color='secondary' sx={{borderRadius: 0}}>Login</Button>
                        </FormControl>

                            <Divider sx={{paddingBottom: 2}}>
                                <Chip  label="OU" sx={{border: 0, color: 'terciary.ligth'}} variant='outlined'/>
                            </Divider>

                            <Stack spacing={2} direction='row' sx={{justifyContent: 'center'}}>
                                <GoogleIcon fontSize='large' color='terciary'/>      
                                <LinkedInIcon fontSize='large' color='terciary'/>
                                <FacebookIcon fontSize='large' color='terciary'/>                                                           
                            </Stack>

                        <FormControl sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                            <Typography variant='body1' color='terciary.ligth' sx={{paddingBlock: 2, marginRight: .5}}>Não possui cadastro?</Typography>
                            <Typography onClick={() =>navigate('/register')} sx={{cursor: 'pointer'}} variant='body1' color='terciary.ligth'>Cadastre-se</Typography>
                        </FormControl>
                    </Box>
                </Box>
            </form>
            </Container>
        </Box>
        </>

    )
}