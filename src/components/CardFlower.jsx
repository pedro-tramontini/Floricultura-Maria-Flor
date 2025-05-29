import { Box, CardMedia, IconButton, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


//modo é se é modo administrador ou modo cliente (administrador): pode apagar as flores, (cliente): pode adicionar flores ao carrinho
export default function CardFlower({flor, icone, deleteCard, modoAdmin}) {
    return(
        <Card sx={{minHeight: 250, minWidth: 350, width: 350, height: 350}}>
            <CardMedia sx={{height:'60%', border: 1}} >Imagem</CardMedia>
            <CardContent sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Box>
                    <Typography gutterBottom variant='h5'>{flor.nome}</Typography>                
                    <Typography variant='body2' sx={{color: 'text.secondary'}}>{flor.variety}</Typography>                
                    <Typography variant='body2' sx={{color: 'text.secondary'}}>{flor.Preço}</Typography>
                </Box>
                <Box>
                    {modoAdmin ? (
                    <IconButton onClick={() => deleteCard(flor.id)}>
                        {icone}
                    </IconButton>
                    ) : (
                    <IconButton >
                        {icone}
                    </IconButton>
                    )}
                </Box>
            </CardContent>
        </Card>
    )
}