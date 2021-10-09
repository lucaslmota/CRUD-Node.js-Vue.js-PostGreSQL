/**
 * file: src/services/EmployeeService.js
 * description: arquivo responsável pelos métodos de requisições das Apís via HTTP
 */

import Api from './Api';

export default {
    /**
     * Método responsável por criar um novo(a) 'Employee'
     * (POST): localhost:3000/api/employees
     */
    async createNewEmployee() {
        try {
            const response = await Api().post('/employees');
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },
    /**
     * Método responsável por listar todos os 'Employees'
     * (GET): localhost:3000/api/employees
     */
    async getEmployees() {
        try {
            const response = await Api().get('/employees');
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },

    /**
     * Método responsável por Listar por Id um determinado 'Employee'
     * (GET): localhost:3000/api/employees/:id
     */
    async getEmployeesId(id) {
        try {
            const response = await Api().get(`/employess/${id}`);
            return response.data
        } catch (error) {
            console.log(error);
        }
    },

    /**
     * Método responsável por atualizar um determinado 'Employee' por Id
     * (PUT): localhost:3000/api/employees/:id
     */

    async updateEmployeeId(id){
        try {
            const response = await Api().put(`/employess/${id}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },

    /**
     * Método responsável por excluir um determinado 'Employee' por Id
     * (DELETE): localhost:3000/api/employees/:id
     */

    async deleteEmployee(id){
        try {
            const response = await Api().delete(`/employees/${id}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }


};