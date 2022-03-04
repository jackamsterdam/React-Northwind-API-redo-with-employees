import { Button, TextField, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import EmployeeModel from "../../../Models/EmployeeModel";
import notify from "../../../Services/NotifyService";
import "./UpdateEmployee.css";
import employeesService from "../../../Services/EmployeesService";
import { useEffect } from "react";

function UpdateEmployee(): JSX.Element {


    const params = useParams()
    const id = +params.id

    const { register, handleSubmit, formState, setValue } = useForm<EmployeeModel>()
    const navigate = useNavigate()

    useEffect(() => {
        (async function () {
            try {
                const employee = await employeesService.getOneEmployee(id)
                setValue('title', employee.title)
                setValue('firstName', employee.firstName)
                setValue('lastName', employee.lastName)
                setValue('city', employee.city)
                setValue('country', employee.country)
                setValue('birthDate', employee.birthDate)



            } catch (err: any) {
                notify.error(err)
            }
        })()


    }, [])

    async function submit(employee: EmployeeModel) {
        try {

            employee.id = id
       await employeesService.updateEmployee(employee)
       notify.success('Employee updated')
       navigate('/employees')


        } catch (err: any) {
            notify.error(err)
        }
    }







    return (
        <div className="UpdateEmployee Box">

            <form onSubmit={handleSubmit(submit)}>

                <Typography variant="h5">Edit Employee</Typography>

                <TextField InputLabelProps={{shrink: true,}} className="TextBox"  type="text" label="title" variant="outlined" {...register('title', {
                    required: {value: true, message: 'Please enter title'}
                })}/>
                <Typography variant="caption">{formState.errors.title?.message}</Typography>
                
                <TextField InputLabelProps={{shrink: true,}} className="TextBox"   type="text" label="First name" variant="outlined" {...register('firstName', {
                    required: {value: true, message: 'Please enter firstName'}
                })}/>
                <Typography variant="caption">{formState.errors.firstName?.message}</Typography>

                <TextField InputLabelProps={{shrink: true,}} className="TextBox"   type="text" label="Last name" variant="outlined" {...register('lastName', {
                    required: {value: true, message: 'Please enter lastName'}
                })}/>
                <Typography variant="caption">{formState.errors.lastName?.message}</Typography>

                <TextField InputLabelProps={{shrink: true,}} className="TextBox"   type="text" label="city" variant="outlined" {...register('city', {
                    required: {value: true, message: 'Please enter city'}
                })}/>
                <Typography variant="caption">{formState.errors.city?.message}</Typography>

                <TextField InputLabelProps={{shrink: true,}} className="TextBox"   type="text" label="country" variant="outlined" {...register('country', {
                    required: {value: true, message: 'Please enter country'}
                })}/>
                <Typography variant="caption">{formState.errors.country?.message}</Typography>

                <TextField InputLabelProps={{shrink: true,}} className="TextBox"   type="date" label="birthdate" variant="outlined" {...register('birthDate', {
                    required: {value: true, message: 'Please enter birthDate'}
                })}/>
                <Typography variant="caption">{formState.errors.birthDate?.message}</Typography>

                <label>Image:</label>
                <input className="TextBox" type="file" accept="image/*" {...register('image',{
                    required: {value: true, message: 'Please enter image'}
                })}/>
                <span>{formState.errors.image?.message}</span>



                <Button fullWidth type="submit" variant="contained" color="primary">Update Employee</Button>
            </form>


            <br />
            <br />
            <Button variant="contained" color="primary" onClick={() => navigate(-1)}>Go Back</Button>
            <br />
            <br />
            <NavLink to="/employees">Go back</NavLink>

        </div>
    );
}

export default UpdateEmployee;
