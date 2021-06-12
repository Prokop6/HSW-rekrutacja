export function renderPricingTable(inputInfo) {
    let anchor = document.querySelector("#pricingAnchor");
    let subsection = document.createElement('div');
    subsection.className = "pricingSection";

    for (let i = 0; i < inputInfo.length; i++) {
        let priceTag = document.createElement('div');
        priceTag.className = "price-card";

        let tagName = document.createElement('div');
        let tagPrice = document.createElement('div');
        let tagDesc = document.createElement('div');

        tagName.className = "price-Card-Name";
        tagPrice.className = "price-Card-Price";
        tagDesc.className = "price-Card-Desc";

        tagName.textContent = `Wejście na ${inputInfo[i][0]}`;
        tagPrice.textContent = `${inputInfo[i][1]} PLN`;
        
        tagDesc.textContent = inputInfo[i][3];

        priceTag.append(tagName);
        priceTag.append(tagPrice);

        subsection.appendChild(priceTag);
        anchor.appendChild(subsection);
    };
};
