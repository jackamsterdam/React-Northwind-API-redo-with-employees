import { Button, TextField, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import UserModel from "../../../Models/UserModel";
import notify from "../../../Services/NotifyService";
import "./Register.css";
import authService from '../../../Services/AuthService'

function Register(): JSX.Element {


    const { register, handleSubmit, formState } = useForm<UserModel>()
    const navigate = useNavigate()

   async function submit(user: UserModel) {
        try {
            await authService.register(user)
            notify.success('Successfully Registered')
            navigate('/')
        } catch (err: any) {
            notify.error(err)
        }

    }


    return (
        <div className="Register Box">
            <form onSubmit={handleSubmit(submit)}>
                <Typography variant="h4">Register</Typography>

                <TextField label="first Name:" variant="outlined" type="text" className="TextBox"  {...register('firstName', {
                    required: { value: true, message: "Name required." }
                })} />
                <Typography variant="caption">{formState.errors.firstName?.message}</Typography>

                <TextField label="last Name:" type="text" variant="outlined" className="TextBox" {...register('lastName', {
                    required: {value: true, message: "Please enter last name."}
                })}/>
                <Typography variant="caption">{formState.errors.lastName?.message}</Typography>
                
                <TextField label="username:" type="text" variant="outlined" className="TextBox" {...register('username', {
                    required: {value: true, message: 'Please provide a username.'}
                })} />
                <Typography variant="caption">{formState.errors.username?.message}</Typography>

                <TextField label="password:" variant="outlined" type="password" className="TextBox" {...register('password', {
                    required: {value: true, message: 'Please provide a password.'}
                })} />
                <Typography variant="caption">{formState.errors.password?.message}</Typography>



                <Button type="submit" color="primary" fullWidth variant="contained" >Register</Button>
            </form>

        </div>
    );
}

export default Register;
