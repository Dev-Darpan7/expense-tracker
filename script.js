const addExpenseBtn = document.getElementById("addExpense");
const totalAmount = document.getElementById("totalAmount");
const amountInput = document.getElementById("amount");
const descriptionInput = document.getElementById("expense-description");
const expenseList = document.getElementById("expenses");
const clearExpenseBtn = document.getElementById("clearExpense");

let expenses = [
  { name: "Groceries", amount: 500 },
  {
    name: "Pizza",
    amount: 300,
  },
  {
    name: "Netflix",
    amount: 199,
  },
];

let total = 0;
const updateTotal = () => {
  total = 0;
  expenses.forEach((expense) => {
    total = total + expense.amount;
  });
  totalAmount.value = total; // will update the total amount in the input field
};

// Function to add a new expense
const addExpense = (event) => {
  event.preventDefault(); // Prevent the default form submission behavior
  const description = descriptionInput.value;
  const amount = parseFloat(amountInput.value);
    if (description.trim() === "" || isNaN(amount) || amount <= 0) {
    alert("Please enter a valid expense.");
    return;
  }

  expenses.push({ name: description, amount: amount });
  updateTotal();
  displayExpenses();
  descriptionInput.value = "";
  amountInput.value = "";
};

// add event listener to the add expense button
addExpenseBtn.addEventListener("click", addExpense);

const displayExpenses = () => {
  expenseList.innerHTML = ""; // Clear the list before displaying expenses
  expenses.forEach((expense, index) => {
    expenseList.innerHTML =
      expenseList.innerHTML +
      `<li><span>${expense.name}</span><span>₹${expense.amount}</span><span><button  data-index="${index}">Delete</button></span></li>`;
  });
  const deleteButtons = document.querySelectorAll("button[data-index]");

  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      expenses.splice(Number(button.dataset.index), 1);
      updateTotal();
      displayExpenses();
    });
  });
};

clearExpenseBtn.addEventListener("click", () => {
  expenses = [];
  updateTotal();
  displayExpenses();
});
displayExpenses();
updateTotal();
