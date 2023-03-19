// Definition of  constants for basic salary, tax rate NHIF and NSSF rates
const BASIC_SALARY = 250000;
const TAX_RATE = 0.3;
const NHIF_RATE = 0.025;
const NSSF_RATE = 0.06;

// Getting user input for basic salary and benefits
const basicSalary = parseFloat(prompt("Enter your basic salary: "));
const benefits = parseFloat(prompt("Enter the total amount of benefits received: "));

// Calculating the gross salary
const grossSalary = BASIC_SALARY + basicSalary + benefits;

// Calculating the  deductions
const taxDeduction = grossSalary * TAX_RATE;
const nhifDeduction = grossSalary * NHIF_RATE;
const nssfDeduction = grossSalary * NSSF_RATE;

// Calculating the  net salary
const netSalary = grossSalary - (taxDeduction + nhifDeduction + nssfDeduction);

// Displaying the results
console.log(`Your Gross Salary is: ${grossSalary.toFixed(2)}`);
console.log(`Your Tax deduction is: ${taxDeduction.toFixed(2)}`);
console.log(`Your NHIF deduction is: ${nhifDeduction.toFixed(2)}`);
console.log(`Your NSSF deduction is: ${nssfDeduction.toFixed(2)}`);
console.log(`Your Net salary is: ${netSalary.toFixed(2)}`);