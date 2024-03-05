// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

const employeesArray = [];
// Collect employee data
const collectEmployees = function () {



  // Declared and initialized an employee array
  
  
  console.log(`employeesArray ${employeesArray}`);

  // TODO: Get user input to create and return an array of employee objects

  let keepAddingEmployee = true;
  let addEmployee = true;

  while (keepAddingEmployee) {
    // Declared and initialized an employee object
    let employee = {
      // Properties are made up of key-value pairs
      firstName: "",
      lastName: "",
      salary: 0,
    };


    if (addEmployee) {
      let userInputFirstName = window.prompt("Enter first name:");
      console.log(`userInputFirstName --> ${userInputFirstName}`);
      let userInputLastName = window.prompt("Enter last name:");
      console.log(`userInputLastName --> ${userInputLastName}`);
      let userInputSalary = window.prompt("Enter salary:");
      console.log(userInputSalary);



      if (userInputFirstName == "" || userInputLastName == "" || userInputSalary == "") {

        window.alert("Invalid Entry");

      }

      if ((userInputFirstName == null) || (userInputLastName == null) || (userInputSalary == null)) {
        console.log(`employeesArray--> ${employeesArray}`);
        return employeesArray;
      } else if (userInputFirstName != "" && userInputLastName != "" && userInputSalary != "") {   


        console.log(`userInputFirstName 2222--> ${userInputFirstName}`);
        employee.firstName = userInputFirstName;
        employee.lastName = userInputLastName;
        employee.salary = userInputSalary;
        employeesArray.push(employee);
        console.log(employeesArray[0]);
        addEmployee = window.confirm("Do you want to add another employee");
        console.log(addEmployee);
       
      }
    }
    else {
      console.log(`employeesArraywhen add employee is false --> ${employeesArray}`);
      return employeesArray;
    }
  }



}

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.log(employees);

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });
  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
