import "./Login.css";
import CredentialsModel from '../../../Models/CredentialsModel'
import { Button, TextField, Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import authService from "../../../Services/AuthService";
import notify from "../../../Services/NotifyService";
import { useForm } from "react-hook-form";

function Login(): JSX.Element {



    const { register, handleSubmit, formState } = useForm<CredentialsModel>()
    const navigate = useNavigate()

    async function submit(credentials: CredentialsModel) {
        try {
            console.log('credentials', credentials) 
            await authService.login(credentials)
            notify.success('You are now logged in.')
            navigate('/')
        } catch (err: any) {
            notify.error(err)

        }

    }





    return (
        <div className="Login Box">
            <form onSubmit={handleSubmit(submit)}>
                <Typography variant="h4">Login</Typography>

                <TextField type="text" label="User name:" className="TextBox" variant="outlined" {...register('username', {
                    required: { value: true, message: 'Please enter username' }
                })} />
                <Typography variant="caption">{formState.errors.username?.message}</Typography>
{/* dont forget type password  */}
                <TextField type="password" label="password:" className="TextBox" variant="outlined" {...register('password', {
                    required: { value: true, message: 'Please enter password.' }
                })} />
                <Typography>{formState.errors.password?.message}</Typography>


                <Button type="submit" fullWidth variant="contained" color="primary">Login</Button>
            </form>

        </div>
    );
}

export default Login;
