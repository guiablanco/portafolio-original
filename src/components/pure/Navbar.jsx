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
                <img src={taskIco} alt='taskLogo' className='taskLogo'/>
                <h1>Task App</h1>
            </div>
            <ButtonGroup variant="text" aria-label="text button group" color='warning'>
                <Button href='#' onClick={()=> navigate(-1)} >Back</Button>
                <Button href='/' >Home</Button>
                <Button href='profile'>Profile</Button>
                {
                    logged ? <Button href='tasks'>Tasks</Button> : <Button href='Login'>Login</Button> 
                }
                <Button href='about'>About US</Button>
            </ButtonGroup>
        </div>
    );
}

export default Navbar;
