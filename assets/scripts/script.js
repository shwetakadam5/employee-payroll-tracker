// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');


// Collect employee data : This function will allow a user to add multiple employees to display on the page.
const collectEmployees = function () {

  // Declared and initialized an employee array
  const employeesArray = [];

  let keepAddingEmployee = true;
  let addEmployee = true;

  /* keepAddingEmployee : keeps the employee addition until user chooses to stop */
  while (keepAddingEmployee) {

    // Declared and initialized an employee object
    let employee = {
      firstName: "First name",
      lastName: "Last name",
      salary: 0,
    };

    // addEmployee keeps a check if user continues or stops  

    if (addEmployee) {

      // Get user input to create employee
      let userInputFirstName = window.prompt("Enter first name:", "First name");
      let userInputLastName = window.prompt("Enter last name:", "Last name");
      let userInputSalary = window.prompt("Enter salary:", "0");

      // Check to handle the cancel option of the input prompts for the firstname, lastname and salary.
      if (userInputFirstName != null && userInputLastName != null && userInputSalary != null) {
        4

        // The user provided values are set in the employee object fields
        if (userInputFirstName != "") {
          employee.firstName = userInputFirstName;
        }

        if (userInputLastName != "") {
          employee.lastName = userInputLastName;
        }
        
        // Check to ensure that the salary entered is a number, otherwise it should default to $0
        if (!isNaN(userInputSalary) && Number.parseInt(userInputSalary) || Number.parseFloat(userInputSalary)) {    
                
          employee.salary = Number.parseFloat(userInputSalary);

        }

        employeesArray.push(employee);

        //Confirmation to know if the user wants to add another employee or stop
        addEmployee = window.confirm("Do you want to add another employee?");

      } else {

        window.alert("Employee creation failed!! \n \n Reason: Cancel option was selected during input of employee values");
        addEmployee = window.confirm("Do you want to add another employee?");
      }
    }
    else {
      // On cancel exit the flow by returning the employees array
      return employeesArray;
    }
  }

}

// Display the average salary : This function will take in the generated array of employees and log the average salary and number of employees to the console using template literal. 
const displayAverageSalary = function (employeesArray) {

  //Check to ensure that the employees array is not empty
  if (Array.isArray(employeesArray) && employeesArray.length > 0) {

    console.log(employeesArray);

    let totalEmployeeSalary = 0;
    let avgEmployeeSalary = 0;

    // The block iterates through the employee array and calculates the average salary of the employees
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

// Select a random employee : his function will take in the generated array of employees, randomly select one employee, and use a template literal to log their full name to the console

const getRandomEmployee = function (employeesArray) {

  //Generate a random index for the employees array
  if (Array.isArray(employeesArray) && employeesArray.length > 0) {
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
