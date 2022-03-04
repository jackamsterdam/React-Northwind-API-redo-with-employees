import axios from "axios";
import EmployeeModel from "../Models/EmployeeModel";
import { addEmployeeAction, deleteEmployeeAction, fetchEmployeesAction, updateEmployeeAction } from "../Redux/EmployeesState";
import store from "../Redux/Store";
import config from '../Utils/Config'

class EmployeesService {
  async getAllEmployees(): Promise<EmployeeModel[]> {
    if (store.getState().employeesState.employees.length === 0) {
      const response = await axios.get<EmployeeModel[]>(config.employeesUrl);
      const employees = response.data;
      store.dispatch(fetchEmployeesAction(employees));
    }
    return store.getState().employeesState.employees
  }

  async getOneEmployee(id: number): Promise<EmployeeModel> {
      let employee = store.getState().employeesState.employees.find(e => e.id === id)
      if (!employee) {
      const response = await axios.get<EmployeeModel>(config.employeesUrl + id)
      employee = response.data 
      }

    return employee
  }

  async addEmployee(employee: EmployeeModel):Promise<EmployeeModel> {
           const formData = new FormData()
//if you had number to .toString()
           formData.append('firstName', employee.firstName)
           formData.append('lastName', employee.lastName)
           formData.append('title', employee.title)
           formData.append('country', employee.country)
           formData.append('city', employee.city)
           formData.append('birthDate', employee.birthDate)
           formData.append('image', employee.image.item(0))



     const response =  await axios.post<EmployeeModel>(config.employeesUrl, formData)
       const addedEmployee = response.data
        store.dispatch(addEmployeeAction(addedEmployee))
       return addedEmployee
  }

  async updateEmployee(employee: EmployeeModel):Promise<EmployeeModel> {
      const formData = new FormData() 

      formData.append('title', employee.title)
      formData.append('firstName', employee.firstName)
      formData.append('lastName', employee.lastName)
      formData.append('city', employee.city)
      formData.append('country', employee.country)
      formData.append('birthDate', employee.birthDate)
      formData.append('image', employee.image.item(0))
//!dont forget to send add id to url!!
      const response = await axios.put<EmployeeModel>(config.employeesUrl +employee.id, formData)
      const updatedEmployee = response.data

      store.dispatch(updateEmployeeAction(updatedEmployee))
      return updatedEmployee
  }




  async deleteEmployee(id: number): Promise<void> {
      await axios.delete(config.employeesUrl + id)
      store.dispatch(deleteEmployeeAction(id))
  }
}

const employeeService = new EmployeesService();
export default employeeService;
