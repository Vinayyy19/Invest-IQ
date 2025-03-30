let insuranceInput = document.querySelector('.insurance-input');
let insuranceSearch = document.querySelector('.insurance-info-btn');
let insuranceContainer = document.querySelector('.search-result-container-insurance');


let insurancePlans = [
    { "id": 1, "name": "Health Secure Plan", "type": "Health Insurance", "provider": "ABC Insurance Co.", "coverage": "₹10,00,000", "premium": "₹8,500 per year" },
    { "id": 2, "name": "Safe Life Policy", "type": "Life Insurance", "provider": "XYZ Life Corp.", "coverage": "₹50,00,000", "premium": "₹12,000 per year" },
    { "id": 3, "name": "Comprehensive Car Shield", "type": "Car Insurance", "provider": "AutoProtect Ltd.", "coverage": "₹5,00,000", "premium": "₹6,200 per year" },
    { "id": 4, "name": "Travel Easy Plan", "type": "Travel Insurance", "provider": "GlobeSecure Insure", "coverage": "₹15,00,000", "premium": "₹3,500 per trip" },
    { "id": 5, "name": "Home Safety Plus", "type": "Home Insurance", "provider": "SecureNest Insurances", "coverage": "₹75,00,000", "premium": "₹5,800 per year" },
    { "id": 6, "name": "Golden Years Plan", "type": "Senior Citizen Insurance", "provider": "ElderCare Assurance", "coverage": "₹30,00,000", "premium": "₹20,000 per year" },
    { "id": 7, "name": "Bike Protection Policy", "type": "Two-Wheeler Insurance", "provider": "RoadSecure Ltd.", "coverage": "₹2,00,000", "premium": "₹2,500 per year" },
    { "id": 8, "name": "Corporate Health Shield", "type": "Group Health Insurance", "provider": "MediGroup Assurance", "coverage": "₹50,00,000", "premium": "₹35,000 per year" },
    { "id": 9, "name": "Pet Care Plus", "type": "Pet Insurance", "provider": "VetSecure Insure", "coverage": "₹5,00,000", "premium": "₹1,800 per year" },
    { "id": 10, "name": "Cyber Safety Shield", "type": "Cyber Insurance", "provider": "DataSecure Ltd.", "coverage": "₹10,00,000", "premium": "₹7,200 per year" },
    { "id": 11, "name": "Adventure Sports Cover", "type": "Travel Insurance", "provider": "ExtremeRisk Protect", "coverage": "₹10,00,000", "premium": "₹5,000 per trip" },
    { "id": 12, "name": "Luxury Car Coverage", "type": "Car Insurance", "provider": "Prestige AutoShield", "coverage": "₹20,00,000", "premium": "₹20,000 per year" },
    { "id": 13, "name": "Digital Nomad Plan", "type": "Remote Worker Insurance", "provider": "GlobeSecure Insure", "coverage": "₹15,00,000", "premium": "₹7,500 per year" },
    { "id": 14, "name": "Kid’s Education Security", "type": "Education Insurance", "provider": "EduSecure Ltd.", "coverage": "₹50,00,000", "premium": "₹10,000 per year" },
    { "id": 15, "name": "Farmers Protection Plan", "type": "Agriculture Insurance", "provider": "AgriSecure Ltd.", "coverage": "₹30,00,000", "premium": "₹5,500 per year" },
    { "id": 16, "name": "Freelancer Income Shield", "type": "Income Protection Insurance", "provider": "WorkSafe Assurance", "coverage": "₹20,00,000", "premium": "₹6,500 per year" },
    { "id": 17, "name": "International Student Health", "type": "Student Travel Insurance", "provider": "GlobeSecure Insure", "coverage": "₹5,00,000", "premium": "₹2,000 per trip" },
    { "id": 18, "name": "NRI Wealth Guard", "type": "NRI Health Insurance", "provider": "International Medisure", "coverage": "₹20,00,000", "premium": "₹10,500 per year" },
    { "id": 19, "name": "Smart Gadget Cover", "type": "Gadget Insurance", "provider": "TechProtect Ltd.", "coverage": "₹5,00,000", "premium": "₹1,000 per year" },
    { "id": 20, "name": "Luxury Home Protection", "type": "Home Insurance", "provider": "SecureNest Insurances", "coverage": "₹1,50,00,000", "premium": "₹25,000 per year" }

]


insuranceSearch.addEventListener('click', () => {
    insuranceContainer.innerHTML = '';

    let userInput = insuranceInput.value.toLowerCase();
    let filteredPlans = insurancePlans.filter(insurancePlan => 
        insurancePlan.name.toLowerCase().includes(userInput)
    );

    filteredPlans.forEach(insurancePlan => {
        let insuranceList = document.createElement('li');
        insuranceList.classList.add('insurance-list');
        insuranceContainer.appendChild(insuranceList);

        let insuranceName = document.createElement('p');
        insuranceName.classList.add('insurance-name');
        insuranceList.appendChild(insuranceName);
        insuranceName.innerText = insurancePlan.name;

        let insurancePrice = document.createElement('p');
        insurancePrice.classList.add('insurance-price');
        insuranceList.appendChild(insurancePrice);
        insurancePrice.innerText = insurancePlan.coverage;

        let buyBtn = document.createElement('button');
        buyBtn.classList.add('buy');
        buyBtn.innerText = 'Buy';
        insuranceList.appendChild(buyBtn);

        let sellBtn = document.createElement('button');
        sellBtn.classList.add('sell');
        sellBtn.innerText = 'Sell';
        insuranceList.appendChild(sellBtn);
    });

    if (filteredPlans.length === 0) {
        let noResults = document.createElement('p');
        noResults.classList.add('no-results');
        noResults.innerText = 'No insurance plans found.';
        insuranceContainer.appendChild(noResults);
    }
});