const shoppingCart = {
    items: [], // массив товаров  item => name, price, quantity
    totalCost: 0, // итогова стоимость всех продуктов
    addItem(item) {
        const existingItem = this.items.find((e) => e.name === item.name);
        if (existingItem) {
            existingItem.quantity += item.quantity;
            existingItem.price =
                existingItem.price < item.price
                    ? item.price
                    : existingItem.price;
        } else {
            this.items.push(item);
        }
        this.updateTotalCost();
    },
    removeItem(itemName) {
        const index = this.items.findIndex((elem) => elem.name === itemName);
        if (index !== -1) {
            this.items.splice(index, 1);
            this.updateTotalCost();
        }
    },
    updateTotalCost() {
        this.totalCost = this.items.reduce((acc, item) => {
            return acc + item.price * item.quantity;
        }, 0);
    },
};

// const add = document.getElementById('add');
// '     555     '.trim() => '555'

add.onclick = addHandler;
stats.onclick = statsHandler;

// Кол-во позиций;
// Итоговая стоимость всех продуктов;
// Итоговое кол-во всех продуктов;
// Максимальная цена
// Минимальная цена
// Средняя цена

function getStats(productName) {
    const itemWisGivenName = shoppingCart.items.filter(
        (item) => item.name === productName
    );
    const numberOfItems =
        itemWisGivenName.length > 0 ? itemWisGivenName.length : "Nan";
    const sumtotalCost = itemWisGivenName.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const totalQuantity = itemWisGivenName.reduce(
        (acc, item) => acc + item.quantity,
        0
    );

    const avgSum = sumtotalCost / totalQuantity;

    itemWisGivenName.sort((a, b) => (a.price > b.price ? 1 : -1));
    const minPrice =
        itemWisGivenName.length > 0 ? itemWisGivenName[0].price : "Nan";
    const maxPrice =
        itemWisGivenName.length > 0
            ? itemWisGivenName[itemWisGivenName.length - 1].price
            : "Nan";
    return {
        numberOfItems,
        sumtotalCost,
        totalQuantity,
        avgSum,
        minPrice,
        maxPrice,
    };
}

function addHandler() {
    shoppingCart.addItem({
        name: productName.value.trim(),
        price: +price.value.trim(),
        quantity: +quantity.value.trim(),
    });

    productList.innerHTML = "";

    shoppingCart.items.forEach((e) => {
        const li = document.createElement("li");
        li.textContent = `
            Product name: ${e.name},
            Product price: ${e.price},
            Quantity of product: ${e.quantity}
        `;
        productList.appendChild(li);
    });
}

function statsHandler() {
    const productNameInput = document.getElementById("productName");
    const statsOur = document.getElementById("statsOur");
    if (productNameInput) {
        const productName = productNameInput.value.trim();
        const stats = getStats(productName);

        statsOur.innerHTML = `
        <li>Number of Items:${stats.numberOfItems}
        <li>Total quantity:${stats.totalQuantity}
        <li>Total cost:${stats.sumtotalCost}
        <li>AVG Sum:${stats.avgSum}
        <li>Max price:${stats.maxPrice}
        <li>Min price:${stats.minPrice}
         `;
    }
}

const item = {
    name: "Alice",
};
