import { CardMedia, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function CardFlower({flor}) {
    return(
        <Card sx={{minHeight: 250, minWidth: 350, width: 350, height: 350}}>
            <CardMedia sx={{height:'60%', border: 1}} >Imagem</CardMedia>
            <CardContent>
                <Typography gutterBottom variant='h5'>{flor.nome}</Typography>                
                <Typography variant='body2' sx={{color: 'text.secondary'}}>{flor.variety}</Typography>                
                <Typography variant='body2' sx={{color: 'text.secondary'}}>{flor.Preço}</Typography>                
            </CardContent>
        </Card>
    )
}