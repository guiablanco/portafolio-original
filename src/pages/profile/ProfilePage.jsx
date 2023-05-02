import React from 'react';
import { useNavigate } from 'react-router-dom';

//images
import profileImage from '../../assets/images/profile.jpg';

//style
import '../../styles/profile.scss';
import TecnologiasIconos from '../../components/pure/TecnologiasIconos';

const ProfilePage = ({user}) => {

    const navigate = useNavigate();

    return (
        <div>
            <h1>Profile Page</h1>
            <div>
                <img src={profileImage} alt='profileImage' className='profileImage'/>
                <div className='datos'>
                    <h3>Sebastián Aguirre Fernández</h3>
                    <h4>Profesor de Matemática e Informática</h4>
                    <h4>Programador Jr</h4>
                </div>
                <h1 style={{marginTop:'4rem'}}>Tecnologías de Dearrollo</h1>
                <TecnologiasIconos/>
            </div>
        </div>
    );
}

export default ProfilePage;
