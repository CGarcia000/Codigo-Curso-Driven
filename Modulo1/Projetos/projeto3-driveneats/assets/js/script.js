const buttonOrder = document.getElementById('get-order-btn');
const options = document.querySelectorAll('.option');
const modal = document.getElementById('modal');
options.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.toggle('selected');
        selectOption(element.parentNode.id, element);
    });
});

function selectOption (idParent, elementSelected) {
    const childNodes = document.getElementById(idParent).children;
    
    for (let i=0; i < childNodes.length; i++) {
        if (childNodes[i].classList.contains('selected') && childNodes[i] != elementSelected) childNodes[i].classList.remove('selected');
    }

    const cont = checkSelected();
    if (cont === 3) {
        getOrderReady(true);
        return;
    }
    getOrderReady();
}

function checkSelected () {
    let cont = 0;

    for (let i=0; i < options.length; i++) {
        if (options[i].classList.contains('selected')) cont++;
    }

    return cont;
}

function getOrderReady (ready=false) {
    if (ready) {
        buttonOrder.classList.add('order-ready');
        buttonOrder.setAttribute("onclick","finishOrder();");
        buttonOrder.innerText = 'Fechar pedido';
        return;
    }
    buttonOrder.classList.remove('order-ready');
    buttonOrder.setAttribute("onclick","");
    buttonOrder.innerText = 'Selecione os 3 itens para fechar o pedido';
}

function finishOrder() {
    const total = calculatePrice();
    console.log(total);
}

function calculatePrice() {
    const arrPrice = [];
    for (let i=0; i < options.length; i++) {
        if (options[i].classList.contains('selected')) {
            // Obtém o valor de cada item
            const price = options[i].getElementsByClassName('price-value');
            arrPrice.push(Number(price[0].innerText.replace(',', '.')));
        }
    }
    return arrPrice.reduce((a, b) => a + b, 0);
}

function removeModal() {
    modal.classList.add('remove');
}
