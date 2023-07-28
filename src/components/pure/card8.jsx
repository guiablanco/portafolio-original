/*eslint-disable */
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { yellow } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

//images
import styledIA from '../../assets/images/styled-IA.jpg';



const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));




const Card8 = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const [corazon, setCorazon] = useState('action')

    const redheart = () => {
        if(corazon === 'action'){
            setCorazon('error')
        } else {
            setCorazon('action')
        }
    }

    const navigate = useNavigate();

    return (
        <div>
            <Card className='card1' style={{margin:'1rem', width:'18rem', height: !expanded ? '35rem': '60rem'}} sx={{ maxWidth: 345 }}>
                    <CardHeader
                        avatar={
                        <Avatar style={{cursor:'pointer'}} onClick={() => navigate('/')} sx={{ bgcolor: yellow[800] }} aria-label="recipe">
                            AI
                        </Avatar>
                        }
                        title="Deep Art Effect AI"
                        subheader="Dale estilo a tus imágenes"
                    />
                    <CardMedia
                        style={{cursor:'pointer'}} onClick={() => window.open('https://deep-art.vercel.app/')}
                        component="img"
                        height="300"
                        image={styledIA}
                        alt="AI image"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                        Si buscas añadirle estilo a una de tus imágenes usando Inteligencia Artificial, este proyecto te ayudará. Solo disponible hasta el 11 de agosto. 
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton onClick={redheart} aria-label="add to favorites">
                            <FavoriteIcon color={corazon} />
                        </IconButton>
                        <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        >
                        <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                        <Typography variant="h6" gutterBottom style={{margin:'2rem 0'}}>Elementos para su desarrollo</Typography>
                        <Typography paragraph>
                            Proyecto desarrollado usando NextJs, en su última versión.
                        </Typography>
                        <Typography paragraph>
                            Se usaron elementos de ReactJs como el hook useState y useEffect. También se añadió Axios para los métodos HTML
                        </Typography>
                        <Typography paragraph>
                            Tiene una base de HTML5, CSS3 y Javascript para sus animaciones.
                        </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
        </div>
    );
}

export default Card8;
