// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');


// Collect employee data
const collectEmployees = function () {

  // Declared and initialized an employee array
  const employeesArray = [];
  console.log(`employeesArray ${employeesArray}`);

  // TODO: Get user input to create and return an array of employee objects

  let keepAddingEmployee = true;
  let addEmployee = true;

  /* keepAddingEmployee keeps the loop till user chooses to exit 7*/
  while (keepAddingEmployee) {
    // Declared and initialized an employee object
    let employee = {
      // Properties are made up of key-value pairs
      firstName: "",
      lastName: "",
      salary: 0,
    };

    /* addEmployee will keep track of the addition of new employee */
    if (addEmployee) {
      let userInputFirstName = window.prompt("Enter first name:");
      console.log(`userInputFirstName --> ${userInputFirstName}`);
      let userInputLastName = window.prompt("Enter last name:");
      console.log(`userInputLastName --> ${userInputLastName}`);
      let userInputSalary = window.prompt("Enter salary:");
      console.log(`userInputSalary --> ${userInputSalary} and ${typeof (userInputSalary)}`);

      if (userInputFirstName != null && userInputLastName != null && userInputSalary != null) {

        console.log(`If firstName/lastName/salary are not null`);
        if (userInputFirstName != "") {
          employee.firstName = userInputFirstName;
        }

        if (userInputLastName != "") {
          employee.lastName = userInputLastName;
        }

        if (!isNaN(userInputSalary) && Number.parseInt(userInputSalary)) {
          console.log(`!isNaN(userInputSalary) --> ${!isNaN(userInputSalary)} `);
          console.log(`Number.parseInt(userInputSalary)--> ${Number.parseInt(userInputSalary)} and ${typeof (Number.parseInt(userInputSalary))}`);
          employee.salary = Number.parseInt(userInputSalary);
        }
        employeesArray.push(employee);
        console.log(employeesArray[0]);
        addEmployee = window.confirm("Do you want to add another employee");
        console.log(addEmployee);

      } else {
        window.alert("The employee details were incomplete due to cancel action");
        addEmployee = window.confirm("Do you want to add another employee");
      }
    }
    else {
      /* On cancel exit the flow by returning the employees array */
      return employeesArray;
    }
  }



}

// Display the average salary
const displayAverageSalary = function (employeesArray) {

  // TODO: Calculate and display the average salary
  if (Array.isArray(employeesArray) && employeesArray.length > 0){
  console.log(employeesArray);

  let totalEmployeeSalary = 0;
  let avgEmployeeSalary = 0;

  for (const employee of employeesArray) {
    totalEmployeeSalary += employee.salary;
    avgEmployeeSalary = totalEmployeeSalary / employeesArray.length;
  }

  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is ${avgEmployeeSalary.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  })}`);
}

}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee 

  //Generate a random index 
  if (Array.isArray(employeesArray) && employeesArray.length > 0){
    const randomIndex = Math.floor(Math.random() * employeesArray.length);  
    // Get a random employee from within the employee array
   const randomSelectedEmployee = employeesArray[randomIndex];
   
   console.log(`Congratulations to ${randomSelectedEmployee.firstName} ${randomSelectedEmployee.lastName}, our random drawing winner!`);
 
  }
    
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
