
const bondPlans = [
    { name: 'Government Bond', coverage: '$1000', risk: 'Low', duration: '10 years', issuer: 'Federal Government' },
    { name: 'Corporate Bond', coverage: '$5000', risk: 'Medium', duration: '5 years', issuer: 'Private Corporation' },
    { name: 'Municipal Bond', coverage: '$3000', risk: 'Low', duration: '8 years', issuer: 'Local Government' },
    { name: 'High-Yield Bond', coverage: '$7000', risk: 'High', duration: '3 years', issuer: 'Private Corporation' },
    { name: 'Treasury Bond', coverage: '$2000', risk: 'Low', duration: '15 years', issuer: 'Federal Government' },
    { name: 'Convertible Bond', coverage: '$4000', risk: 'Medium', duration: '7 years', issuer: 'Private Corporation' },
    { name: 'Zero-Coupon Bond', coverage: '$6000', risk: 'High', duration: '12 years', issuer: 'Private Corporation' },
    { name: 'Floating Rate Bond', coverage: '$3500', risk: 'Medium', duration: '6 years', issuer: 'Private Corporation' },
    { name: 'Savings Bond', coverage: '$1500', risk: 'Low', duration: '20 years', issuer: 'Federal Government' },
    { name: 'Junk Bond', coverage: '$8000', risk: 'Very High', duration: '2 years', issuer: 'Private Corporation' },
    { name: 'Green Bond', coverage: '$2500', risk: 'Low', duration: '10 years', issuer: 'Environmental Organization' },
    { name: 'Infrastructure Bond', coverage: '$4500', risk: 'Medium', duration: '8 years', issuer: 'Government Agency' },
    { name: 'Social Impact Bond', coverage: '$3000', risk: 'Low', duration: '12 years', issuer: 'Non-Profit Organization' },
    { name: 'Perpetual Bond', coverage: '$5000', risk: 'High', duration: 'No Maturity', issuer: 'Private Corporation' },
    { name: 'War Bond', coverage: '$2000', risk: 'Medium', duration: '5 years', issuer: 'Federal Government' }
];

const bondInput = document.querySelector('.bond-input');
const bondSearch = document.querySelector('.bond-info-btn');
const bondContainer = document.querySelector('.search-result-container-bond');

bondSearch.addEventListener('click', () => {
    bondContainer.innerHTML = '';

    let userInput = bondInput.value.toLowerCase();
    let filteredPlans = bondPlans.filter(bondPlan =>
        bondPlan.name.toLowerCase().includes(userInput)
    );

    filteredPlans.forEach(bondPlan => {
        let bondList = document.createElement('li');
        bondList.classList.add('bond-list');
        bondContainer.appendChild(bondList);

        let bondName = document.createElement('p');
        bondName.classList.add('bond-name');
        bondList.appendChild(bondName);
        bondName.innerText = bondPlan.name;

        let bondPrice = document.createElement('p');
        bondPrice.classList.add('bond-price');
        bondList.appendChild(bondPrice);
        bondPrice.innerText = bondPlan.coverage;

        let buyBtn = document.createElement('button');
        buyBtn.classList.add('buy');
        buyBtn.innerText = 'Buy';
        bondList.appendChild(buyBtn);

        let sellBtn = document.createElement('button');
        sellBtn.classList.add('sell');
        sellBtn.innerText = 'Sell';
        bondList.appendChild(sellBtn);
    });

    if (filteredPlans.length === 0) {
        let noResults = document.createElement('p');
        noResults.classList.add('no-results');
        noResults.innerText = 'No bonds plans found.';
        bondContainer.appendChild(noResults);
    }
});
