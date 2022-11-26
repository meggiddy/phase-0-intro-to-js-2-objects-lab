// Write your solution in this file!
var employee = { 
    name : "Meg",
    streetAddress : "124 Broadway",
 };

 function updateEmployeeWithKeyAndValue(employee,key,value) {
    return  {...employee ,[key]:value};
 }
 function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
 }
function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee;
}