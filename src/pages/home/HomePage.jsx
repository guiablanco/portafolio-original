import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import tasklogo from '../../assets/images/tasklogo.png';

//styles
import '../../styles/home.scss';
import HomeList from '../../components/pure/HomeList';



const HomePage = () => {

    const navigate = useNavigate();
    const logged = true;

    return (
        <div>
            <h1 style={{marginTop:'1rem', marginBottom:'1rem'}}>(App en construcción)</h1>
            <div>
                <img src={tasklogo} alt='logo' className='logo'/>
            </div>
            <HomeList></HomeList>
        </div>
    );
}

export default HomePage;
