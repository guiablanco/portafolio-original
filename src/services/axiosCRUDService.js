import axios from 'axios';

/**
 * Login Method to ReqRes endpoint
 * @param {string} email 
 * @param {string} password 
 */
export const login = (email, password) => {

    let body = {
        email: "eve.holt@reqres.in",
        password: "cityslicka"
    }

    //Return the response with Promise 
    return axios.post('https://reqres.in/api/login', body)
}