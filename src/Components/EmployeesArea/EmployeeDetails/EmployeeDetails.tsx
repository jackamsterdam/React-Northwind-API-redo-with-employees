import { Button, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeModel from "../../../Models/EmployeeModel";
import notify from "../../../Services/NotifyService";
import config from "../../../Utils/Config";
import employeesService from '../../../Services/EmployeesService'
import Loading from "../../SharedArea/Loading/Loading";
import { NavLink } from "react-router-dom";
import { Clear } from "@material-ui/icons";

//!so in employeecard we for sure have the object but in employeedetails we may or may not have the object on the start so we need to make sure to deal with undefined crashes

function EmployeeDetails(): JSX.Element {
    const [employee, setEmployee] = useState<EmployeeModel>()

    const params = useParams()
    const id = +params.id

    const navigate = useNavigate()

    useEffect(() => {

        (async function () {
            try {
                const employee = await employeesService.getOneEmployee(id)
                setEmployee(employee)
            } catch (err: any) {
                notify.error(err)
            }
        })()


    }, [])

    async function deleteEmployee() {
        try {
            const confirmDelete = window.confirm('Are you sure?')
            if (!confirmDelete) return

            await employeesService.deleteEmployee(id)
            notify.success('Employee Deleted!')
            navigate('/employees')
        } catch (err: any) {
            notify.error(err)
        }

    }

    return (
        <div className="EmployeeDetails">

            {!employee && <Loading />}

            {employee &&
                <>
                    <Typography variant="h4">EmployeeDetails</Typography>

                    <Typography variant="h5">title: {employee.title}</Typography>
                    <Typography variant="h5">First name: {employee.firstName}</Typography>
                    <Typography variant="h5">Last name: {employee.lastName}</Typography>
                    <Typography variant="h5">city: {employee.city}</Typography>
                    <Typography variant="h5">country: {employee.country}</Typography>
                    <Typography variant="h5">BirthDate: {employee.birthDate}</Typography>


                    <img src={config.employeesImageUrl + employee.imageName} />

                    <br />
                    <br />

                    <Button variant="contained" color="primary" onClick={() => navigate(-1)}>Go back</Button>
                    <br />
                    <NavLink to='/employees'>Go Back</NavLink>



                    <Button variant="contained" color="secondary" startIcon={<Clear/>} onClick={deleteEmployee}>Delete Employee</Button>


                    <Button variant="contained" color="primary" fullWidth onClick={() => navigate('/employees/edit/' + employee.id)}>Edit Employee</Button>
                </>





            }
        </div>
    );
}

export default EmployeeDetails;
