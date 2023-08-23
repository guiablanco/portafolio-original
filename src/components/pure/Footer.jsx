import {useRef} from 'react';
import emailjs from '@emailjs/browser';
import emailConfig from '../../services/emailjs.config';

//style
import '../../styles/footer.scss';

const Footer = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(emailConfig.SERVICE_ID, emailConfig.TEMPLATE_ID, form.current, emailConfig.PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };



    return (
        <footer className='footer'>
            <div className='text-footer'>
                <p className='title-footer'>Contáctame</p>
                <p className='text1'>Si requiere mis servicios escríbeme a </p>
                <p className='text1'><a href="mailto:seb.aguirre.f@gmail.com" target="_blank" rel="noopener noreferrer">
                        seb.aguirre.f@gmail.com
                    </a></p>
                <p className='to-form'>O completa el siguiente formulario : </p>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <div className='name-form form-element'>
                    <label>Nombre</label>
                    <input type="text" name="user_name" className='user_name input-text' />
                </div>
                <div className='email-form form-element'>
                    <label>Email</label>
                    <input type="email" name="user_email" className='user_email input-text' />
                </div>
                <div className='message-form form-element'>
                    <label>Mensaje</label>
                    <textarea name="message" className='message input-text' />
                    <input className='submit-button' type="submit" value="Enviar email" />
                </div>
            </form>
        </footer>
    );
}

export default Footer;
