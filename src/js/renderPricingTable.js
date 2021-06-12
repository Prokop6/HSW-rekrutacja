export function renderPricingTable(inputInfo, className) {
  let insertionSite = document.getElementById(
    "mark4pricingDetails_" + className
  );
  let subsection = document.createElement("div");
  subsection.className = "pricingSection " + className;

  for (let i = 0; i < inputInfo.length; i++) {
    let priceTag = document.createElement("div");
    priceTag.className = "price-card";

    let tagName = document.createElement("div");
    let tagPrice = document.createElement("div");
    let tagEntries = document.createElement("div");
    let tagDesc = document.createElement("div");

    tagName.className = "price-Card-Name";
    tagPrice.className = "price-Card-Price";
    tagEntries.className = "price-Card-Entries";
    tagDesc.className = "price-Card-Desc";

    if (className == `Svinfylking`) {
      tagName.textContent = `Pojedynczy trening ${inputInfo[i][0]}`;
      tagPrice.textContent = `${inputInfo[i][1]} PLN/trening`;
    } else {
      tagName.textContent = `Karnet ${inputInfo[i][0]}`;
      tagPrice.textContent = `${inputInfo[i][1]} PLN/mies.`;
    }
    let foo = document.createElement("strong");
    foo.textContent = `${inputInfo[i][2]}`;
    tagEntries.textContent = `Liczba wejść na salę tygodniowo: `;
    tagEntries.append(foo);

    tagDesc.textContent = inputInfo[i][3];

    priceTag.append(tagName);
    priceTag.append(tagPrice);
    priceTag.append(tagEntries);
    priceTag.append(tagDesc);

    subsection.appendChild(priceTag);
    insertionSite.appendChild(subsection);
  }
}
