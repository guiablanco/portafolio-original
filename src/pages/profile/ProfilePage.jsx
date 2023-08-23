import React from 'react';
import TecnologiasIconos from '../../components/pure/TecnologiasIconos';

//images
import profileImage from '../../assets/images/profile.jpg';

//style
import '../../styles/profile.scss';

const ProfilePage = () => {

    return (
        <div>
            <img src={profileImage} alt='profileImage' className='profileImage'/>
            <div className='datos'>
                <h3 style={{fontSize: '1.5rem'}}>Sebastián Aguirre Fernández</h3>
                <h4>Profesor de Matemática e Informática</h4>
                <h4>Programador Jr</h4>
            </div>
            <h1 style={{marginTop:'4rem'}}>Tecnologías de Dearrollo</h1>
            <TecnologiasIconos/>
        </div>
    );
}

export default ProfilePage;
