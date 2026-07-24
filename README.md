# Expense Tracker

A simple expense tracker built with HTML, CSS, and JavaScript.

## Demo
Open `index.html` in your browser (or serve the folder with a local static server) to view and use the app.

## Features
- Add expenses with a title, amount, and date
- Input validation for required fields and amount
- Persist expenses in browser (localStorage)
- Clear all expenses with a single button
- Responsive UI with CSS variables and subtle animations

## Files
- `index.html` — app markup
- `style.css` — styling, responsive layout and animations
- `script.js` — app logic, validation, localStorage handling

## Installation / Usage
1. Clone the repository:
   ```
   git clone https://github.com/Dev-Darpan7/expense-tracker.git
   ```
2. Open `index.html` in your browser:
   - Double-click the file, or
   - Serve with a local server, e.g.:
     ```
     npx serve .
     ```
3. Add an expense using the form. Use the "Clear expenses" button to remove all saved entries.

## Development notes
- The UI uses CSS variables for easy theming and includes responsive breakpoints for mobile and desktop.
- Validation was added to ensure title and amount are provided and that amount > 0.
- Recent commits added "clear expenses" functionality and UI improvements.

## Contributing
Contributions are welcome. Suggested workflow:
- Create a branch for your changes: `git checkout -b feat/your-feature`
- Make changes and open a pull request.

## Possible improvements
- Add editing for existing expenses
- Add categories and filtering
- Add export/import of expenses (CSV/JSON)
- Add unit/integration tests

## License
Add a LICENSE file if you want to specify a license (e.g., MIT).

## Contact
Maintainer: Dev-Darpan7
