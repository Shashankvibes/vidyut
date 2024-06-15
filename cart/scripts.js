document.addEventListener('DOMContentLoaded', () => {
    const increaseButtons = document.querySelectorAll('.increase');
    const decreaseButtons = document.querySelectorAll('.decrease');
    const quantityInputs = document.querySelectorAll('.quantity input');

    increaseButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            quantityInputs[index].value = parseInt(quantityInputs[index].value) + 1;
            updateTotal(index);
        });
    });

    decreaseButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            if (quantityInputs[index].value > 1) {
                quantityInputs[index].value = parseInt(quantityInputs[index].value) - 1;
                updateTotal(index);
            }
        });
    });

    function updateTotal(index) {
        const rows = document.querySelectorAll('.cart-item');
        const price = parseFloat(rows[index].children[1].textContent.replace('$', ''));
        const quantity = parseInt(quantityInputs[index].value);
        const totalCell = rows[index].children[3];
        totalCell.textContent = `$${(price * quantity).toFixed(2)}`;
    }

});
