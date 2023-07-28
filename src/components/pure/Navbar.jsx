import React, {useState} from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from 'react-router-dom';

//images
import taskIco from '../../assets/images/taskico.png';

//style
import '../../styles/navbar.scss';


const Navbar = () => {

    const navigate = useNavigate();

const [logged, setLogged] = useState(true)

    return (
        <div>
            <div className='head-title'>
            <ButtonGroup variant="text" aria-label="text button group" color='warning'>
                <Button style={{color:'white', fontWeight:'600', fontSize:'0.8rem'}} href='#' onClick={()=> navigate(-1)} >Back</Button>
                <Button style={{color:'white', fontWeight:'600', fontSize:'0.8rem'}} href='/' >Home</Button>
                <Button style={{color:'white', fontWeight:'600', fontSize:'0.8rem'}} href='proyectos'>Proyectos</Button>
                {
                    logged ? <Button style={{color:'white', fontWeight:'600', fontSize:'0.8rem'}} href='tasks'>Tasks</Button> : <Button style={{color:'white', fontSize:'0.5rem'}} href='Login'>Login</Button> 
                }
                <Button style={{color:'white', fontWeight:'600', fontSize:'0.8rem'}} href='canales'>Canales</Button>
                <Button style={{color:'white', fontWeight:'600', fontSize:'0.8rem'}} href='linkedin'>LinkedIn y CV</Button>
            </ButtonGroup>
        </div>
            </div>
    );
}

export default Navbar;
