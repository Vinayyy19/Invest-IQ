
let searchResult = document.querySelector('input');
let stockInfoBtn = document.querySelector('.stock-info-btn');
let searchResultContainer = document.querySelector('.search-result-container');

let api = `https://financialmodelingprep.com/api/v3/quote/`;
let buyBtn = 0;
async function getData(stockDetails) {
    const response = await fetch(`https://financialmodelingprep.com/api/v3/quote/${stockDetails}?apikey=YyAaQml1a2XFb0vpBOtSv1p7sOPJlspH`);
    const data = response.json();
    data.then(result=>{
        const ap = result[0];
        let stockContainer = document.createElement('li');
        stockContainer.classList.add('stock-list-container');
        searchResultContainer.appendChild(stockContainer);
        let stockName = document.createElement('p');
        stockName.classList.add('stock-name');
        stockName.innerText = ap.name;
        stockContainer.appendChild(stockName);
        let stockPrice = document.createElement('p');
        stockPrice.classList.add('stock-price');
        stockPrice.innerText = `$${ap.price}`;

        stockContainer.appendChild(stockPrice);
         buyBtn = document.createElement('button');
        buyBtn.classList.add('buy');
        buyBtn.innerText = 'Buy';
        stockContainer.appendChild(buyBtn);
        let sellBtn = document.createElement('button');
        sellBtn.classList.add('sell');
        sellBtn.innerText = 'Sell'
        stockContainer.appendChild(sellBtn);
    })

}

stockInfoBtn.addEventListener('click', () => {
    
    let stockRealName = searchResult.value;
    if (stockRealName.trim() === "") {
        alert("Please input a field to proceed");
        return;
    }
    searchResultContainer.innerHTML = "";
    getData(stockRealName);

});


