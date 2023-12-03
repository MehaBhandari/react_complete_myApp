// export function addEmployeesToStore(employeeList) {
//     return {
//         type: "ADD_EMPLOYEE",
//         payload: employeeList
//     }
// }

// export function deleteEmployeesFromStore() {
//     return {
//         type: "DELETE_ALL"
//     }
// }

// export function deleteEmployeeFromStore(employeeId) {
//     return {
//         type: "DELETE_EMPLOYEE",
//         payload: employeeId
//     }
// }

export function incrementNumber() {
    return {
        type: "INCREMENT"
    }
}

export function decrementNumber() {
    return {
        type: "DECREMENT"
    }
}