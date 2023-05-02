import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {

    const navigate = useNavigate();

    return (
        <div>
            <h1>Error 404: Page Not Found</h1>
            <h3>You shouldn't be here...</h3>
        </div>
    );
}

export default NotFoundPage;
