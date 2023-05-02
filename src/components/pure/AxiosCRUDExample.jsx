import React from 'react';
import { login } from '../../services/axiosCRUDService';

const AxiosCRUDExample = () => {

    const authUser = () => {
        login("eve.holt@reqres.in",
            "password": "cityslicka")
    }


    return (
        <div>
            <button>Login</button>
        </div>
    );
}

export default AxiosCRUDExample;
