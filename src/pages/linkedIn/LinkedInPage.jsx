//React-Bootstrap Elements
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

//Styles
import '../../styles/PDFViewer.scss';
import '../../styles/linkedin.scss'

//Images
import LinkedInLogo from '../../assets/images/Logo-LinkedIn-noir.webp';
import profileImage from '../../assets/images/profile.jpg';
import miniGithub from '../../assets/images/Github-logo.png';

//Documents
import CVSebastian from '../../assets/documents/CV-Sebatián-Aguirre-DevJr-2023.pdf';

const LinkedInPage = () => {

    

    return (
        <div>
            <div className='linkedin-card'>
                <>
                    {[
                      'Dark',
                    ].map((variant) => (
                        <Card
                          bg={variant.toLowerCase()}
                          key={variant}
                          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                          style={{ width: '27rem' }}
                          className="m-5"
                        >
                        <Card.Header style={{backgroundColor:'rgb(56,67,79)', display:'flex', justifyContent:'start'}}> 
                          <Card.Img variant="top" src={LinkedInLogo} style={{width:'10rem'}} />
                        </Card.Header>
                        <Card.Body style={{display:'flex', flexDirection:'column' , justifyContent:'left', alignItems:'start'}}>
                          <Card.Img className='mb-2' variant="top" src={profileImage} style={{width:'10rem', borderRadius:'100%'}} />
                          <Card.Title className='mb-2 mt-2'>Sebastián Aguirre </Card.Title>
                          <Card.Text className='mb-0'>
                              Desarrollador Jr Full Stack
                          </Card.Text>
                          <Card.Text className='mb-0'>
                              Magister en Educación y Gestión Universitaria
                          </Card.Text>
                          <Card.Text>
                              Universidad Metropolitana de Ciencias de la Educación
                          </Card.Text>
                          <div>
                            <Button href='https://www.linkedin.com/in/sebasti%C3%A1n-aguirre-b61669b9/' size="lg" style={{border:'solid', borderColor:'white', marginRight:'5px'}} variant="dark">Ver Perfil de LinkedIn</Button>
                            <Button href='https://github.com/guiablanco' size="lg" style={{border:'solid', borderColor:'white'}} variant="dark">
                            <Card.Img className='mb-2' variant="top" src={miniGithub} style={{width:'1.1rem', marginRight:'8px'}} />
                              Ver Github
                            </Button>
                          </div>
                        </Card.Body>
                      </Card>
                    ))}
                </>
            </div>
            <h1 style={{marginBottom:'2rem'}}>Currículum Vitae</h1>
            <div className="pdf-container">
              <embed
              src={CVSebastian} // Ruta al archivo PDF que deseas mostrar
              type="application/pdf"
              width="650px"
              height="900px"
              className='pdf-embed'
              />
            </div>
        </div>
    );
}

export default LinkedInPage;
