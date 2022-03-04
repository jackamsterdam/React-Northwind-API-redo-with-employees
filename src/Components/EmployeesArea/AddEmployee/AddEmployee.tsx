import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import EmployeeModel from "../../../Models/EmployeeModel";
import "./AddEmployee.css";
import employeesService from "../../../Services/EmployeesService";
import notify from "../../../Services/NotifyService";
import { Button, TextField, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";

function AddEmployee(): JSX.Element {

    const { register, handleSubmit, formState } = useForm<EmployeeModel>()

    const navigate = useNavigate()


    async function submit(employee: EmployeeModel) {
        try {

            await employeesService.addEmployee(employee)
            notify.success('Employee has been added!')
            navigate('/employees')


        } catch (err: any) {
            notify.error(err)
        }
    }



    return (
        <div className="AddEmployee Box">
            <form onSubmit={handleSubmit(submit)}>

                <Typography variant="h4">Add Employee</Typography>


                <TextField className='TextBox' type="text" label="title" variant="outlined" {...register('title', {
                    required: { value: true, message: 'Please enter title' }
                })} />
                <Typography variant="caption">{formState.errors.title?.message}</Typography>

                <TextField className='TextBox'  type="text" label="firstName" variant="outlined" {...register('firstName', {
                    required: { value: true, message: 'Please enter first name' }
                })} />
                <Typography  variant="caption">{formState.errors.firstName?.message}</Typography>

                <TextField className='TextBox'  type="text" label="lastName" variant="outlined" {...register('lastName', {
                    required: { value: true, message: 'Please enter last name' }
                })} />
                <Typography variant="caption">{formState.errors.lastName?.message}</Typography>

                <TextField className='TextBox'  type="text" label="city" variant="outlined" {...register('city', {
                    required: { value: true, message: 'Please enter city' }
                })} />
                <Typography variant="caption">{formState.errors.city?.message}</Typography>

                <TextField className='TextBox'  type="text" label="country" variant="outlined" {...register('country', {
                    required: { value: true, message: 'Please enter country' }
                })} />
                <Typography variant="caption">{formState.errors.country?.message}</Typography>

                <TextField className='TextBox'  type="date" label="birthDate" variant="outlined" {...register('birthDate', {
                    required: { value: true, message: 'Please enter birthDate' }
                })} />
                <Typography variant="caption">{formState.errors.birthDate?.message}</Typography>

                <label>Pic:</label>
                <input className='TextBox'  type="file" accept="image/*" {...register('image', {
                    required: {value: true, message: 'Please attach photo'}
                })} />
                <span>{formState.errors.image?.message}</span>


                <Button type="submit" color="primary" variant="contained" fullWidth >Add Employee</Button>
            </form>



            <NavLink to="/employees">Go Back</NavLink>
            <br />
            <br />
            <Button color="primary" fullWidth variant="contained"  onClick={() => navigate(-1)}>Go Back</Button>
        </div>
    );
}

export default AddEmployee;
