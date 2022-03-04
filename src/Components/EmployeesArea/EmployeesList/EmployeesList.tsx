import { useEffect, useState } from "react";
import EmployeeModel from "../../../Models/EmployeeModel";
import notify from "../../../Services/NotifyService";
import Loading from "../../SharedArea/Loading/Loading";
import "./EmployeesList.css";
import employeesService from "../../../Services/EmployeesService";
import { NavLink } from "react-router-dom";
import EmployeeCard from '../EmployeeCard/EmployeeCard'

function EmployeesList(): JSX.Element {



    const [employees, setEmployees] = useState<EmployeeModel[]>([])

    useEffect(() => {
        try {
            (async function () {
                const employees = await employeesService.getAllEmployees()
                setEmployees(employees)

            })()
        } catch (err: any) {
            notify.error(err)
        }

    }, [])



    return (
        <div className="EmployeesList">

            {employees.length === 0 && <Loading />}

            <NavLink to="/employees/new">➕</NavLink>
            {/* //pass props  */}
            {employees.map(e => <EmployeeCard key={e.id} employee={e} />)}

        </div>
    );
}

export default EmployeesList;
