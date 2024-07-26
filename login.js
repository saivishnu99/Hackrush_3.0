document.addEventListener('DOMContentLoaded', function() {
  const incomeForm = document.getElementById('income-form');
  const expenseForm = document.getElementById('expense-form');
  const incomeTableBody = document.getElementById('income-table-body');
  const expenseTableBody = document.getElementById('expense-table-body');
  const balanceValue = document.getElementById('balance-value');

  let balance = 0.00;
  // Function to add income
  incomeForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const date = incomeForm['income-date'].value;
      const incomeHead = incomeForm['income-head'].value;
      const amount = parseFloat(incomeForm['income-amount'].value);
      const description = incomeForm['income-description'].value;

      if (date && incomeHead && amount) {
          // Add row to income table
          const newRow = document.createElement('tr');
          newRow.innerHTML = `
              <td>${date}</td>
              <td>${incomeHead}</td>
              <td>${amount.toFixed(2)}</td>
              <td>${description}</td>
          `;
          incomeTableBody.appendChild(newRow);

          // Update balance
          balance += amount;
          balanceValue.textContent = balance.toFixed(2);

          // Clear form fields
          incomeForm.reset();
      } else {
          alert('Please fill in all fields.');
      }
  });

  // Function to add expense
  expenseForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const date = expenseForm['expense-date'].value;
      const expenseHead = expenseForm['expense-head'].value;
      const amount = parseFloat(expenseForm['expense-amount'].value);
      const description = expenseForm['expense-description'].value;

      if (date && expenseHead && amount) {
          // Add row to expense table
          const newRow = document.createElement('tr');
          newRow.innerHTML = `
              <td>${date}</td>
              <td>${expenseHead}</td>
              <td>${amount.toFixed(2)}</td>
              <td>${description}</td>
          `;
          expenseTableBody.appendChild(newRow);

          // Update balance
          balance -= amount;
          balanceValue.textContent = balance.toFixed(2);

          // Clear form fields
          expenseForm.reset();
      } else {
          alert('Please fill in all fields.');
      }
  });

});
document.getElementById('logout-btn').addEventListener('click', function() {
    window.location.href = 'C:/src/Projects/WebDev%20Projects/repos/Hackathon_3.0/src/pages/form.html'; // replace with your login page URL
  });
function logoutUser() {
    // Clear any user data or session storage
    localStorage.clear();
    sessionStorage.clear();
  
    // Redirect the user to the login page
    window.location.href = "C:/src/Projects/WebDev%20Projects/repos/Hackathon_3.0/src/pages/form.html";
}


