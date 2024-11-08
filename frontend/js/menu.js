// menu.js
function showMenu() {
    document.getElementById('start-container').style.display = 'none';
    document.getElementById('menu-container').style.display = 'flex';
}

function showMatrixInput() {
    const dataInput = document.getElementById('data-input').value;
    const calculationType = document.getElementById('calculation-type').value;

    if (dataInput === 'manual') {
        if (calculationType === 'polynomial') {
            setupPolynomialMode();
        } else if (calculationType === 'linear-form') {
            setupLinearFormMode();
        }
    }
}

// Экспортируем функции в window, чтобы они были доступны глобально
window.showMenu = showMenu;
window.showMatrixInput = showMatrixInput;
