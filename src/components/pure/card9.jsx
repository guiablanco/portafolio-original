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
import { yellow, blue } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

//images
import marketPlaceImg from '../../assets/images/market-place.png';



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




const Card9 = () => {

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
            <Card className='card1' style={{margin:'1rem', width:'18rem', height: !expanded ? '35rem': '63rem'}} sx={{ maxWidth: 345 }}>
                    <CardHeader
                        avatar={
                        <Avatar style={{cursor:'pointer'}} sx={{ bgcolor: blue[300] }} aria-label="recipe">
                            MP
                        </Avatar>
                        }
                        title="Market Place Reactivo"
                        subheader="Sitio de compras de productos"
                    />
                    <CardMedia
                        style={{cursor:'pointer'}} onClick={() => window.open('https://marketplace-orcin.vercel.app/')}
                        component="img"
                        height="300"
                        image={marketPlaceImg}
                        alt="Market Place"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                        Market place con filtros por productos y precios. Diseño de carrito de compras, cantidades de productos y totales parciales (por tipo de producto) y globales. 
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
                            Se usaron elementos de ReactJs como el hook useState y useContext para estados globales y locales. También se diseñaron Hooks para mejorar la especificidad de los archivos.
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

export default Card9;
