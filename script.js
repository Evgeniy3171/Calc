//Кнопка Рассчитать через id
const start = document.getElementById('start');

//Кнопка + по тегу
const buttonPlus1 = document.getElementsByTagName('button')[0];
const buttonPlus2 = document.getElementsByTagName('button')[1];

//Чекбокс по id через querySelector
const depositCheck = document.querySelector('#deposit-check');

//Поля для ввода возможных доходов (additional_income-item) при помощи querySelectorAll
const additionalIncomeItem = document.querySelectorAll('.additional_income-item');

//Каждый элемент в правой части программы через класс(не через querySelector), которые имеют в имени класса "-value", начиная с class="budget_day-value" и заканчивая class="target_month-value">
const budgetDay = document.getElementsByClassName('result-total budget_day-value')[0];
const expensesMonth = document.getElementsByClassName('result-total expenses_month-value')[0];
const addIncome = document.getElementsByClassName('result-total additional_income-value')[0];
const addExpenses = document.getElementsByClassName('result-total additional_expenses-value')[0];
const period = document.getElementsByClassName('result-total income_period-value')[0];
const target = document.getElementsByClassName('result-total target_month-value')[0];

//Оставшиеся поля через querySelector каждый в отдельную переменную: поля ввода (input) с левой стороны и не забудьте про range
const money = document.querySelector('.salary-amount');
const incomeTitle = document.querySelector('.income-title');
const incomeAmount = document.querySelector('.income-amount');
const expensesTitle = document.querySelector('.expenses-title');
const expensesAmount = document.querySelector('.expenses-amount');
const additionalExpensesItem = document.querySelector('.additional_expenses-item');
const targetAmount = document.querySelector('.target-amount');
const periodSelect = document.querySelector('.period-select');
const budgetMonthValue = document.querySelector('.budget_month-value');






console.log(periodSelect);
