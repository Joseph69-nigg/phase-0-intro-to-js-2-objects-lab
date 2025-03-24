// Write your solution in this file!
// Create an employee object with name and streetAddress properties
const employee = {
    name: "Alice Johnson",
    streetAddress: "123 Main St"
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}