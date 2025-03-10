let boughtCandyPrices = []; 

function addCandy(candyType, weight) {
    let pricePerGram;
    
    switch (candyType) {
        case "sweet":
            pricePerGram = 0.5;
            break;
        case "chocolate":
            pricePerGram = 0.7;
            break;
        case "toffee":
            pricePerGram = 1.1;
            break;
        case "chewing-gum":
            pricePerGram = 0.03;
            break;
        default:
            console.log("Invalid candy type!");
            return; 
    }

    let candyPrice = pricePerGram * weight;
    boughtCandyPrices.push(candyPrice);
}


function canBuyMoreCandy() {
    let amountToSpend = Math.random() * 100;

    let totalSpent = 0;
    for (let i = 0; i < boughtCandyPrices.length; i++) {
        totalSpent += boughtCandyPrices[i];
    }

    if (totalSpent < amountToSpend) {
        console.log("You can buy more, so please do!");
    } else {
        console.log("Enough candy for you!");
    }
}
