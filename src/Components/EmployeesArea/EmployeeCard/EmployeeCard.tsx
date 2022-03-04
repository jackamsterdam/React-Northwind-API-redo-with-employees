import { Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import EmployeeModel from "../../../Models/EmployeeModel";
import config from "../../../Utils/Config";
import "./EmployeeCard.css";

//pay attention its an object not an array 
interface EmployeeCardProps {
    employee: EmployeeModel
}
//!so in employeecard we for sure have the object but in employeedetails we may or may not have the object on the start so we need to make sure to deal with undefined crashes

function EmployeeCard(props: EmployeeCardProps): JSX.Element {

    return (
        <div className="EmployeeCard Box">
            <div>
           {props.employee.title}
            <br/>
            First name: {props.employee.firstName}
            <br/>
            Last name: {props.employee.lastName}
            <br/>
            coutry: {props.employee.country}
            <br/>
            city: {props.employee.city}
             <br/>
            birthDate: {props.employee.birthDate}
                {/* <Typography variant="h4">Title: {props.employee.title}</Typography>
                <br/>
                <Typography variant="h4">First Name: {props.employee.firstName}</Typography>
                <br/>
                <Typography variant="h4">Last Name: {props.employee.lastName}</Typography>
                <br/>
                <Typography variant="h4">coutry: {props.employee.country}</Typography>
                <br/>
                <Typography variant="h4">city: {props.employee.city}</Typography>
                <br/>
                <Typography variant="h4">birthDate: {props.employee.birthDate}</Typography> */}

            </div>
            <div>
                <NavLink to={'/employees/details/' + props.employee.id}>
                    <img src={config.employeesImageUrl + props.employee.imageName} />

                </NavLink>

            </div>


        </div>
    );
}

export default EmployeeCard;
