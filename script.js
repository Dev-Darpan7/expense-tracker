const addExpenseBtn = document.getElementById("addExpense");
const totalAmount = document.getElementById("totalAmount");
const amountInput = document.getElementById("amount");
const descriptionInput = document.getElementById("expense-description");
const expenseList = document.getElementById("expenses");

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

function addExpense(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  const description = descriptionInput.value;
  const amount = parseFloat(amountInput.value);
  expenses.push({ name: description, amount: amount });
    displayExpenses();
  descriptionInput.value = "";
  amountInput.value = "";

}
addExpenseBtn.addEventListener("click", addExpense);
const displayExpenses = () => {
  expenseList.innerHTML = ""; // Clear the list before displaying expenses
  expenses.forEach((expense) => {
     expenseList.innerHTML =
    expenseList.innerHTML + `<li><span>${expense.name}</span><span>₹${expense.amount}</span></li>`;

  });
}
displayExpenses();

