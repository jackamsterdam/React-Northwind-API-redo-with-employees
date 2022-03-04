import { StringLiteralType } from "typescript"

class EmployeeModel {
  id: number = 0
  firstName: string  = ''
  lastName: string = ''
  title: string = ''
  country: string = ''
  city: string = ''
  birthDate: string =''
  imageName: string = '' 
  image: FileList = null
}

export default EmployeeModel