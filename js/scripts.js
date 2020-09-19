priceTagsLS = [
    ["BASIC", 120, 1, "Prawo do uczestnictwa w jednym treningu długiego miecza"], ["STANDARD", 150, 2, "Prawo do uczestnictwa w jednym treningu długiego miecza oraz jednym dowolnie wybranym treningu"],
    ["PREMIUM",180,3,"Prawo do uczestnictwa w jednym treningu długiego miecza oraz dwóch dowolnie wybranych treningach"],
    ["PREMIUM PLUS", 210, "4+", "Prawo do uczestnictwa we wszystkich treningach, w tym objętych karnetami dodatkowymi"]
]
priceTagsAdditionall = [
    ["RAPIER",90,1,"Prawo do uczestnictwa w treningu Rapiera"],
    ["SZTYLET/ PÓŁMIECZ",60,1,"Prawo do uczestnictwa w treningu Sztyletu lub Półmiecza"],
    ["MESSER",60,1,"Prawo do uczestnictwa w seminarium z Korda"],
    ["SZABLA",60,1,"Prawo do uczestnictwa w treningu Szabli"],
    ["TRENINGI DODATKOWE I",100,2,"Prawo do uczestnictwa w dwóch treningach objętych karnetami dodatkowymi"],
    ["TRENINGI DODATKOWE II",150,4,"Prawo do uczestnictwa we wszystkich treningach objętych karnetami dodatkowymi"]
]
priceTagsSaS = [
    ["MIECZ I TARCZA", 20, 1, "Wejście na salę raz w tygodniu | Prawo do uczestnictwa w treningu Miecza i Tarczy"],
    ["MIECZ I TARCZA, rabat", 10, 1, "Zniżka dla posiadaczy innych karnetów fundacji"],
]
listOfTrainings = [{
    name:"długi miecz, grupa początkująca", 
    desc:"Trening miecza długiego w konwencji <em>Blossfechten</em> (walka bez opancerzenia) według nauk niemieckiego mistrza Johannesa Lichtenauera i jego następców. Podczas rocznego kursu, trenujący opanowują podstawy poruszania się i pracy z bronią, w szczególności: postawy szermiercze, uderzenia oraz pchnięcia, elementy rozbrojeń i pięć technik mistrzowskich.", 
    img:"LongswordBeginner"}, {
    name:"długi miecz, grupa średniozaawansowana", 
    desc:"Trening miecza długiego w konwencji <em>Blossfechten</em> (walka bez opancerzenia) według nauk niemieckiego mistrza Johannesa Lichtenauera i jego następców. Podczas rocznego kursu trenujący rozwijają umiejętności nabyte podczas pierwszego roku ćwiczeń, poznając bardziej zaawansowane techniki szermiercze, a także bezpośrednio zapoznając się z naukami mistrzów zawartymi w traktatach.", 
    img:"LongswordIntermediate"}, {
    name:"długi miecz, grupa zaawansowana", 
    desc:"Trening miecza długiego w konwencji <em>Blossfechten</em> (walka bez opancerzenia) według nauk niemieckiego mistrza Johannesa Lichtenauera i jego następców. W grupie zaawansowanej znacząco zostaje rozszerzony wątek <em>Ringen am Schwert</em> (zapasy na mieczu). Ponadto ćwiczący przenoszą umiejeności nabyte podczas wcześniejszych lat do konkretnych sytuacji i działań taktycznych, ucząc się wykorzystywać znane techniki w pełnokontaktowej walce.", 
    img:"LongswordAdvanced"}, {
    name:"długi miecz, trening sportowy", 
    desc:"Trening miecza długiego dla zaawansowanych, poświęcony praktycznemu wykorzystaniu technik szermierczych w wybranych sytuacjach taktycznych. Techniki pochodzą z traktatów, a sytuacje taktyczne z analizy istniejących walk. Nauczanie wsparte jest metodyką szermierki sportowej. Podczas treningów ćwiczący rozwijają umiejętności doboru właściwej techniki do sytuacji oraz odpowiednie wyczucie tempa i dystansu.", 
    img:"LongswordSport"}, {
    name:"miecz z tarczą, grupa początkująca", 
    desc:"Trening wprowadzający w walkę z użyciem okragłej dużej tarczy i miecza z okresu wczesnego średniowiecza. Podczas kursu trenujący zapoznają się z podstawowymi działaniami oraz zasadami prowadzenia broni, a także różnicami w jej użyciu względem konwencji sportowej. Zajęcia przygotowują do walki pełnokontaktowej i koncentrują się na budowaniu podstaw.", 
    img:"SwordShieldBeginner"}, {
    name:"miecz z tarczą, grupa zaawansowana", 
    desc:"Trening dla osób dysponujących pełnym sprzętem ochronnym i posiadających podstawowe umiejętności władania mieczem i tarczą. Ćwiczący koncentrują się na walkach sparingowych oraz rozwijaniu poznanych w grupie początkującej technik. Uczą się władać również innymi rodzajami wczesnośredniowiecznej broni: toporami, saksami, bronią drzewcową, a także trenują cięcia bronią ostrą.", 
    img:""}, {
    name:"rapier", 
    desc:"Trening rapiera według hiszpańskiej szkoły <em>La Verdadera Destreza</em> (prawdziwa sztuka). Podczas zajęć trenujący zapoznają się z technikami i naukami przekazywanymi przez hiszpańskich mistrzów fechtunku w XVI-XVII w.: Jerónimo Sánchez'a de Carranza, jego ucznia Luis'a Pacheco de Narváez oraz Francisco Lórenz'a de Rada. Poznają nie tylko postawy szkoły, akcje ataku i obrony, ale też bardzo istotną w tej szkole teorię.", 
    img:""}, {
    name:"kord", 
    desc:"Trening <em>messera</em> (kord) w tradycji niemieckiej, w szczególności według nauk mistrza ks. Johannes'a Lecküchner'a. Zajęcia są połączeniem klasycznego treningu i seminarium. Uczestnicy nie tylko uczą się technik władania bronią, ale też - pod przewodnictwem prowadzącego - analizują źródła i opracowują własne interpretacje zawartych w nich działań.", 
    img:"Messer"}, {
    name:"sztylet", 
    desc:"Trening sztyletu według tradycji niemieckiej i włoskiej. Podczas zajęć uczestnicy poznają techniki właściwe dla konwencji <em>Blossfechten</em> (walka bez opancerzenia) oraz <em>Harnischfechten</em> (walka w opancerzeniu). Nauczanie jest prowadzone w oparciu o przekaz takich mistrzów jak Hans Talhoffer, Fiore dei Liberi, czy traktaty z <em>grupy Gladiatoria</em>.", 
    img:"Dagger"}, {
    name:"techniki półmieczowe", 
    desc:"Trening półmiecza według przekazu traktatów z <em>grupy Gladiatoria</em>, <em>Codex Wallerstein</em> oraz innych źródeł tradycji niemieckiej. Podczas zajęć uczestnicy poznają techniki pozwalające na skuteczne wykorzystanie miecza długiego podczas starcia w konwencji <em>Harnischfechten</em> (walka w opancerzeniu). Do nauki technik nie jest potrzebne ciężkie opancerzenie.", 
    img:"Halfsword"}, {
    name:`Treningi Młodzieżowego Klubu Szermierki Dawnej "Szampierz"`, 
    desc:`Treningi dla młodzieży poniżej 16 roku życia. Zajęcia prowadzone są przy użyciu miękkiej broni otulinowej. Wszystkie aktualne informacje odnośnie zapisów, charakteru zajęć oraz cennika, znajdują się na stronie <a href="https://www.szampierz.pl">Młodzieżowego Klubu Szermierki Dawnej "Szampierz"</a>.`, 
    img:"SzapmpierzTrainings"}, {
    name:"Zajęcia indywidualne", 
    desc:" ", 
    img:""},
]
listOfOrganisations = [
    {name:"ClubFundacja", 
    fullName:"Fundacja na Rzecz Historycznych Sztuk Walki", 
    desc:" ", 
    img:"Fundacja.png",
    about:"https://historycznesztukiwalki.pl/about/"},
    {name:"ClubARMA", 
    fullName:"Stowarzyszenie na rzecz Dawnych Europejskich Sztuk Walki ARMA-PL Warszawa", 
    desc:" ", 
    img:"ARMA_rob_500.png",
    about:"http://arma.lh.pl/waw/"},
    {name:"ClubSvinfylking", 
    fullName:"Projekt Svinfylking", 
    desc:" ", 
    img:"Svinfylking.png",
    about:"http://svinfylking.cba.pl/o-projekcie/"},
    {name:"ClubSzampierz", 
    fullName:`Młodzierzowy Klub Szermierki Dawnej "Szampierz"`, 
    desc:" ", 
    img:"Szampierz.jpg",
    about:"https://www.szampierz.pl/o-nas/"},
]
listOfInstructors = [
    {name:"Konrad Świderek", 
    desc:"Ze środowiskiem DESW związany od 2012 r. Instruktor prowadzący Warszawską Sekcję SDESW ARMA-PL. Instruktor sportu i badacz traktatów. Specjalizuje się w długim mieczu w konwencji <em>Blossfechten</em>, walce sztyletem, <em>Harnischfechten</em> (techniki półmieczowe) oraz rapierze według nauk szkoły <em>La Verdadera Destreza</em>. W nielicznych wolnych chwilach promotor i organizator wydarzeń związanych z DESW.", 
    photo:"InstructorPhotoKonrad.jpg"},
    {name:"Paweł Adamiec", 
    desc:"Pasjonat historii wczesnego średniowiecza zajmujący się od niemal 20 lat rekonstrukcją historyczną. Instruktor oraz badacz dawnych metod walki bronią białą m.in. sztyletem, rapierem, czy technikami półmieczowymi (<em>Harnischfechten</em>). Członek SDESW ARMA-PL. W szczególności w obrębie jego zainteresowań pozostaje wykorzystanie dużej tarczy w różnych epokach historycznych. W 2017 r. utworzył Projekt Svinfylking – grupę dedykowaną możliwie realistycznej rekonstrukcji walki z użyciem miecza i tarczy oraz innych broni znanych we wczesnym średniowieczu: toporów, włóczni, saksów itp. W Projekcie łączy teorię i badanie źródeł z praktyką opartą na pełnokontaktowej walce w konwencji DESW. ", 
    photo:"InstructorPawel.png"},
    {name:"Ireneusz Nowak", 
    desc:"Związany z DESW od 2008 r. Instruktor, badacz traktatów, sędzia na zawodach FEDER oraz organizator wydarzeń środowiskowych. Członek SDESW ARMA-PL. Interesuje się całościowym systemem Dawnych Europejskich Sztuk Walki, ze szczególnym uwzględnieniem fechtunku długim mieczem w konwencji <em>Blossfechten</em>, walki kordem (<em>Messer</em>), mieczem jednoręcznym z puklerzem oraz sztyletem. Jest również konstruktorem mieczy treningowych typu <em>fechtschwert</em>.", 
    photo:"InstructorPhotoIreneusz.jpg"},
    {name:"Jakub Wrzalik ", 
    desc:"Trenuje szermierkę od 2009 r., a od 2011 r. w konwencji DESW. Instruktor, badacz traktatów oraz liczny medalista na zawodach międzynarodowych i krajowych. Członek SDESW ARMA-PL. W kręgu jego zainteresowań znajduje się walka długim mieczem w konwencji <em>Blossfechten</em> oraz <em>Ringen</em> (zapasy historyczne). Jest również instruktorem Młodzieżowego Klubu Szermierki Dawnej „Szampierz”. Podczas zajęć przykłada dużą wagę do treningu ogólnorozwojowego i poprawy całości zdolności motorycznych ucznia.", 
    photo:"Kuba.jpg"},
    {name:"Krzysztof Janus", 
    desc:"Trenuje szermierkę historyczną od 2014 r. Instruktor, badacz traktatów oraz zawodnik na ogólnopolskich zawodach FEDER. Instruktor sportu i członek SDESW ARMA-PL. Uczestnik licznych warsztatów i szkoleń. Bada źródła z zakresu długiego miecza w konwencji <em>Blossfechten</em> oraz <em>Ringen</em> (zapasy historyczne). Jest również instruktorem Młodzieżowego Klubu Szermierki Dawnej „Szampierz”. W nauczaniu stawia na czerpanie radości z szermierki oraz stałe doskonalenie technik i charakteru.", 
    photo:"InstructorKrzysztof.png"},
    {name:"Aleksander Szczęsny", 
    desc:"Trenuje szermierkę od 2006 roku, a szermierkę europejską od 2010 roku. Ściśle związany z DESW od 2018 r. Członek SDESW ARMA-PL. Badacz traktatów i instruktor walki kordem (<em>Messer</em>) według tradycji mistrza ks. Joahanesa Leckuchnera. W nauczaniu stawia na dokładne odwzorowanie technik traktatowych.", 
    photo:"LogoARMA_rob_500.png"}
] 
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
} else { 
tagName.textContent=`Karnet ${inputInfo[i][0]}` }
        tagPrice.textContent=`${inputInfo[i][1]} PLN`
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
renderOrganisationSection(listOfOrganisations);
renderTrainingTable(listOfTrainings);
renderPricingTable(priceTagsLS,"fundamental");
renderPricingTable(priceTagsAdditionall,"additional");
renderPricingTable(priceTagsSaS,"Svinfylking");
renderInstructorsSection(listOfInstructors);