import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

//style
import '../../styles/home.scss';

//icons
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';

const HomeList = () => {
    return (

    <ListGroup variant="flush" className='listGroup'>
      <ListGroup.Item className='listGroup listElement'><DensityMediumIcon className='icon'/> <p>Ordena tus tareas en un solo lugar, donde podrás detallar la prioridad que debes darle.</p> </ListGroup.Item>
      <ListGroup.Item className='listGroup listElement'><AssignmentTurnedInIcon className='icon'/> <p>Verifica si las tareas ya fueron terminadas o entán en proceso de desarrollo.</p> </ListGroup.Item>
      <ListGroup.Item className='listGroup listElement'><MobileScreenShareIcon className='icon'/> <p>Comparte tus tareas con tus contactos de redes sociales o tus compañeros de trabajo a través de correo electrónico.</p> </ListGroup.Item>
      <ListGroup.Item className='listGroup listElement'> <MarkEmailReadIcon className='icon'/> <p>Programa el envío automático de correo electrónico a tu grupo una ez que la tarea haya sido terminada y confirmada (para evitar errores).</p>     </ListGroup.Item>
    </ListGroup>
  );

}

export default HomeList;
