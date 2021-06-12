function renderOrganisationSection (inputInfo) {
    let insertionSite = document.getElementById('mark4organisations')
    let imputDiv = document.createElement("div")
    imputDiv.className = ("fbHorizontal")
    for (i=0; i<inputInfo.length;i++) {

        let infoLink = document.createElement("a")
        let clubDiv = document.createElement("div")
        let nameDiv = document.createElement("div")
        let logoDiv = document.createElement("div")

        let namePar = document.createElement("p")
        let logoImg = document.createElement("img")

        logoImg.className = ("fbInlinePhoto")
        nameDiv.className = ("fbCenterdText")
        infoLink.className = ("fbVertical")

        infoLink.setAttribute("href", `${inputInfo[i].about}`)
        namePar.innerText = `${inputInfo[i].fullName}`
        logoImg.setAttribute("src", `https://historycznesztukiwalki.pl/wp-content/uploads/2020/09/Logo${inputInfo[i].img}`)

        logoDiv.append(logoImg)
        nameDiv.append(namePar)
        
        infoLink.append(logoDiv)
        infoLink.append(nameDiv)

        clubDiv.append(infoLink)

        imputDiv.append(clubDiv)
        }
    insertionSite.append(imputDiv)
};
function renderPricingTable(inputInfo, className) {
    let insertionSite = document.getElementById('mark4pricingDetails_'+className);
    let subsection = document.createElement('div')
    subsection.className="pricingSection " + className 
  
    for (let i=0;i<inputInfo.length;i++){
        let priceTag = document.createElement('div')
        priceTag.className = "price-card"

        let tagName = document.createElement('div') 
        let tagPrice= document.createElement('div') 
        let tagEntries= document.createElement('div')
        let tagDesc = document.createElement('div')

        tagName.className="price-Card-Name"
        tagPrice.className="price-Card-Price"
        tagEntries.className="price-Card-Entries"
        tagDesc.className="price-Card-Desc"

        if (className == `Svinfylking`) {
tagName.textContent=`Pojedynczy trening ${inputInfo[i][0]}`
 tagPrice.textContent=`${inputInfo[i][1]} PLN/trening`
} else { 
tagName.textContent=`Karnet ${inputInfo[i][0]}` 
tagPrice.textContent=`${inputInfo[i][1]} PLN/mies.`
}
        let foo = document.createElement('strong')
        foo.textContent =`${inputInfo[i][2]}`
        tagEntries.textContent=`Liczba wejść na salę tygodniowo: `
        tagEntries.append(foo)

        tagDesc.textContent=inputInfo[i][3]
        
        priceTag.append(tagName)
        priceTag.append(tagPrice)
        priceTag.append(tagEntries)
        priceTag.append(tagDesc)

        subsection.appendChild(priceTag)
        insertionSite.appendChild(subsection)
        };
};
function renderTrainingTable(inputData) {
    let insertionSite = document.getElementById("mark4TrainingDescriptions")
    let trainingOverview = document.createElement("div")
    trainingOverview.className = "training_overview"
    
    for (let i=0; i<inputData.length-1; i++) {
        let trainingDetails = document.createElement("div")
        let trainingNameField = document.createElement("div")
        let trainingDescriptionField = document.createElement("div")

        trainingDetails.className="training_details"
        trainingNameField.className="training_name_field"
        trainingDescriptionField.className="training_description_field"

        trainingNameFieldText = document.createElement("p")
        trainingDescriptionFieldText = document.createElement("p")

        trainingNameFieldText.innerText = `${inputData[i].name}`
        trainingDescriptionFieldText.innerHTML  =JSON.parse(JSON.stringify(`${inputData[i].desc}`))

        trainingNameField.appendChild(trainingNameFieldText)
        trainingDescriptionField.appendChild(trainingDescriptionFieldText)

        trainingDetails.append(trainingNameField)
        trainingDetails.append(trainingDescriptionField)
        trainingOverview.append(trainingDetails)
    };
    insertionSite.append(trainingOverview)
};
function renderInstructorsSection(inputData){
    let insertionSite = document.getElementById("mark4instructorDetails")
    for (i=0; i<inputData.length;i++){
        let InstrName = document.createElement('h5')
        let descriptionSection = document.createElement('div')  
        let InstrChart = document.createElement('p')
        let InstrPhoto = document.createElement("img")
        let photoDiv = document.createElement("div")

        insertionSite.className ="instructor_section_styles"

        InstrChart.className = "fbInlineText"
        photoDiv.className = "fbInlinePhoto"
        descriptionSection.className = "fbInlineTable"

        InstrName.textContent = inputData[i].name
        InstrChart.innerHTML = JSON.parse(JSON.stringify(inputData[i].desc))
      
        InstrPhoto.setAttribute("src",`https://historycznesztukiwalki.pl/wp-content/uploads/2020/09/${inputData[i].photo}`)
        
        photoDiv.append(InstrPhoto)
        descriptionSection.append(photoDiv)
        descriptionSection.append(InstrChart)
        
        let subsection = document.createElement('div')

        subsection.append(InstrName)
        subsection.append(descriptionSection)
        
        insertionSite.append(subsection)
    };  
};
function alertOnce(alertText){
var alerted = localStorage.getItem('alerted') || '';
    if (alerted != 'yes') {
     alert(`${alertText}`);
     localStorage.setItem('alerted','yes');
    }};
renderOrganisationSection(listOfOrganisations);
renderTrainingTable(listOfTrainings);
renderPricingTable(priceTagsLS,"fundamental");
renderPricingTable(priceTagsAdditionall,"additional");
renderPricingTable(priceTagsSaS,"Svinfylking");
renderInstructorsSection(listOfInstructors);