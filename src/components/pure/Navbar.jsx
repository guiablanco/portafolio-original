import React, {useState} from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from 'react-router-dom';

//images
import taskIco from '../../assets/images/taskico.png';

//style
import '../../styles/navbar.scss'

const Navbar = () => {

    const navigate = useNavigate();

const [logged, setLogged] = useState(true)

    return (
        <div>
            <div className='headTitle'>


            </div>
            <ButtonGroup variant="text" aria-label="text button group" color='warning'>
                <Button style={{color:'white', fontWeight:'600'}} href='#' onClick={()=> navigate(-1)} >Back</Button>
                <Button style={{color:'white', fontWeight:'600'}} href='/' >Home</Button>
                <Button style={{color:'white', fontWeight:'600'}} href='proyectos'>Proyectos</Button>
                {
                    logged ? <Button style={{color:'white', fontWeight:'600'}} href='tasks'>Tasks</Button> : <Button style={{color:'white'}} href='Login'>Login</Button> 
                }
                <Button style={{color:'white', fontWeight:'600'}} href='canales'>Canales</Button>
                <Button style={{color:'white', fontWeight:'600'}} href='linkedin'>LinkedIn y CV</Button>
            </ButtonGroup>
        </div>
    );
}

export default Navbar;
