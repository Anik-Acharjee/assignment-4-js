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

const price = picnicBudget(200);
console.log(price);