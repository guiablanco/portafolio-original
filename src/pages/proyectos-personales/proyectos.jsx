import {useState, useEffect} from 'react';

import Card1 from '../../components/pure/card1';
import Card2 from '../../components/pure/card2';
import Card3 from '../../components/pure/card3';
import Card4 from '../../components/pure/card4';
import Card5 from '../../components/pure/card5';
import Card6 from '../../components/pure/card6';
import Card7 from '../../components/pure/card7';
import Card8 from '../../components/pure/card8';



const Proyectos = () => {

    const [isColumn, setIsColumn] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsColumn(window.innerWidth < 1100); // Cambia a dirección de columna si el ancho de la ventana es menor que 768px
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Comprobar el tamaño de la ventana al cargar el componente

    return () => {
      window.removeEventListener('resize', handleResize); // Limpiar el event listener al desmontar el componente
    };
  }, []);


    return (
        <div>
            <div style={{margin:'2rem'}}>
                <h1 style={{margin:'3rem'}}>Proyectos Personales</h1>
                
                <div className='proyect-cards' style={{display:'flex', flexWrap:'wrap', flexDirection:isColumn ? 'column' : 'row' , justifyContent:'center', alignItems:'center'}}>
                <Card3/>
                <Card4/>
                <Card8/>
                <Card2/>
                <Card5/>
                <Card6/>
                <Card7/>
                <Card1/>
                </div>
            </div>
        </div>
    );
}

export default Proyectos;
