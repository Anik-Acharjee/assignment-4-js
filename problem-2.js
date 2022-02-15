/*singgara = 7
somucha = 10
jilapi = 15

*/

function pandaCost(singgaraQuantity, somuchaQuantity, jilapiQuantity) {
    // Item Price 

    const singgaraPrice = 7;
    const somuchaPrice = 10;
    const jilapiPrice = 15;

    // Item Calculate

    const singgaraPerQuantity = singgaraQuantity * singgaraPrice;
    const somuchaPerQuantity = somuchaQuantity * somuchaPrice;
    const jilapiPerQuantity = jilapiQuantity * jilapiPrice;


    // Total price

    const total = singgaraPerQuantity + somuchaPerQuantity + jilapiPerQuantity; 

    return total;
}

const totalPrice = pandaCost(25, 15, 30);
console.log(totalPrice);