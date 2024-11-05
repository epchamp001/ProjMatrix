// polynomial.js

let coefficients = [];
let currentCoefficientIndex = 0;


// Инициализировать ввод коэффициентов
function initializeCoefficientInput() {
    const degree = parseInt(document.getElementById('polynomial-degree').value);
    const coefficientContainer = document.getElementById('coefficient-entry-container');
    const coefficientDisplayContainer = document.getElementById('coefficient-display-container');

    if (degree >= 1) {
        coefficientContainer.style.display = 'block';
        coefficientDisplayContainer.style.display = 'none';
        currentCoefficientIndex = 0;
        coefficients = [];
        updateCoefficientLabel();
    }
}

// Экспортируем функцию в window
window.initializeCoefficientInput = initializeCoefficientInput;


// Обработчик для ввода коэффициента
// polynomial.js

function handleCoefficientEnter(event) {
    if (event.key === 'Enter') {
        const input = document.getElementById('coefficient-input');
        const value = parseInt(input.value);

        if (!isNaN(value)) {
            coefficients.push(value);
            currentCoefficientIndex++;

            if (currentCoefficientIndex <= parseInt(document.getElementById('polynomial-degree').value)) {
                input.value = '';
                updateCoefficientLabel();
            } else {
                displayCoefficients();
            }
        }
    }
}

// Экспортируем функцию для глобального доступа
window.handleCoefficientEnter = handleCoefficientEnter;


// Обновить текст метки для коэффициента
function updateCoefficientLabel() {
    const label = document.getElementById('coefficient-label');
    label.textContent = `Введите a${currentCoefficientIndex}:`;
}

// Показать введенные коэффициенты
function displayCoefficients() {
    const coefficientDisplayContainer = document.getElementById('coefficient-display-container');
    const coefficientContainer = document.getElementById('coefficient-entry-container');

    coefficientContainer.style.display = 'none';
    coefficientDisplayContainer.style.display = 'block';
    coefficientDisplayContainer.textContent = `Коэффициенты: [${coefficients.join(', ')}]`;
}

// polynomial.js
function setupPolynomialMode() {
    document.getElementById('menu-container').style.display = 'none';
    document.getElementById('matrix-input-container').style.display = 'flex';
    document.getElementById('linear-form-next-button').style.display = 'none';

    document.getElementById('matrix-rows').value = "3";
    document.getElementById('matrix-columns').value = "3";

    createMatrixInputs();

    document.getElementById('polynomial-degree-container').style.display = 'block';
    document.getElementById('coefficient-entry-container').style.display = 'block';
    document.getElementById('coefficient-display-container').style.display = 'none';

    // Инициализация ввода коэффициентов
    initializeCoefficientInput();
}

window.setupPolynomialMode = setupPolynomialMode;
