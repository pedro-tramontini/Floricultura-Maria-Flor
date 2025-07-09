import { Box, CardMedia, IconButton, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useNavigate, useParams } from 'react-router-dom';
import { handleClick } from '../aafunctions/navigate';

//modo é se é modo administrador ou modo cliente (administrador): pode apagar as flores, (cliente): pode adicionar flores ao carrinho
export default function CardFlower({flor, iconeDelete, iconeEdit, deleteCard, iconeAdd, modoAdmin}) {
    const navigate = useNavigate()

    return(
        <Card sx={{minHeight: 250, minWidth: 350, width: 350, height: 400}}>
            <CardMedia sx={{height:'60%', objectFit: 'scale-down'}} image="/flor_referencia.png" />
            <CardContent sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <Box>
                    <Typography gutterBottom variant='h5'>{flor.nome}</Typography>                
                    <Typography variant='body2' sx={{color: 'text.secondary'}}>{flor.tipo}</Typography>                
                    <Typography variant='body2' sx={{color: 'text.secondary'}}>R$ {flor.preco}</Typography>
                </Box>
                <Box>
                    {modoAdmin ? (
                    [<IconButton key={flor.nome} onClick={() => deleteCard(flor.id)}>
                        {iconeDelete}
                    </IconButton>,
                    //ICONE DE EDIÇÃO
                    <IconButton key={flor.id} onClick={() => handleClick(`editflower/${flor.id}`, navigate)}>
                        {iconeEdit}
                    </IconButton>]
                    ) : (
                    <IconButton >
                        {iconeAdd}
                    </IconButton>
                    )}
                </Box>
            </CardContent>
        </Card>
    )
}