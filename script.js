const birthDateInput = document.getElementById('birth-date');
const birthMonthInput = document.getElementById('birth-month');
const birthYearInput = document.getElementById('birth-year');
const resultParagraph = document.getElementById('result');

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const birthDate = parseInt(birthDateInput.value);
        const birthMonth = parseInt(birthMonthInput.value);
        const birthYear = parseInt(birthYearInput.value);

        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1;
        const currentDay = currentDate.getDate();

        let age = currentYear - birthYear;

        if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDate)) {
            age--;
        }

        resultParagraph.textContent = `You are ${age} years old 😊🤍.`;
    });
});