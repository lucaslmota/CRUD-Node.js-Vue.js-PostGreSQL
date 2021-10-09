/**
 * file: src/services/Api.js
 * description: arquivo responsável por inicializar o 'axios' e as requisições da url base dos HTTP's
 */

import axios from 'axios';

export default () => axios.create({
    baseURL: 'http://localhost:3000/api',
});