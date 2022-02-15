// Problem-1 (anaToVori)

function anaToVori(ana) {
    var vori = ana / 16;
    return vori;
}


var bonerAna = 252;
var vori = anaToVori(bonerAna);
console.log(vori);



// Problem 2 ( Panda Cost)


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



// Problem 3

// picnicBudget

function picnicBudget(peoples) {
    const first100Ticket = 5000;
    const secend100Ticket = 4000;
    const restTicket = 3000;


    if (peoples <= 100) {
        const ticket = peoples * first100Ticket
        return ticket;
    }    
    else if (peoples <=200) {
        const first100People = 100 * first100Ticket;
        const restPeople = peoples - 100;
        const secend100People = restPeople * secend100Ticket;
        const totalPeople = first100People + secend100People;
        return totalPeople;
    }
    else {
        const first100People = 100 * first100Ticket;
        const secend100People = 100 * secend100Ticket;
        const restPeople = peoples - 200;
        const restThirdPeople = restPeople * restTicket;
        const totalPeople = first100People + secend100People + restThirdPeople;
        return totalPeople;
    }
}

const price = picnicBudget(201);
console.log(price);