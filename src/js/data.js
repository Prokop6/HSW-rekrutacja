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
    desc:"Trening miecza długiego w konwencji <em>Blossfechten</em> (walka bez opancerzenia) według nauk niemieckiego mistrza Johannesa Liechtenauera i jego następców. Podczas rocznego kursu, trenujący opanowują podstawy poruszania się i pracy z bronią, w szczególności: postawy szermiercze, uderzenia oraz pchnięcia, elementy rozbrojeń i pięć technik mistrzowskich.", 
    img:"LongswordBeginner"}, {
    name:"długi miecz, grupa średniozaawansowana", 
    desc:"Trening miecza długiego w konwencji <em>Blossfechten</em> (walka bez opancerzenia) według nauk niemieckiego mistrza Johannesa Liechtenauera i jego następców. Podczas rocznego kursu trenujący rozwijają umiejętności nabyte podczas pierwszego roku ćwiczeń, poznając bardziej zaawansowane techniki szermiercze, a także bezpośrednio zapoznając się z naukami mistrzów zawartymi w traktatach.", 
    img:"LongswordIntermediate"}, {
    name:"długi miecz, grupa zaawansowana", 
    desc:"Trening miecza długiego w konwencji <em>Blossfechten</em> (walka bez opancerzenia) według nauk niemieckiego mistrza Johannesa Liechtenauera i jego następców. W grupie zaawansowanej znacząco zostaje rozszerzony wątek <em>Ringen am Schwert</em> (zapasy na mieczu). Ponadto ćwiczący przenoszą umiejętności nabyte podczas wcześniejszych lat do konkretnych sytuacji i działań taktycznych, ucząc się wykorzystywać znane techniki w pełno-kontaktowej walce.", 
    img:"LongswordAdvanced"}, {
    name:"długi miecz, trening sportowy", 
    desc:"Trening miecza długiego dla zaawansowanych, poświęcony praktycznemu wykorzystaniu technik szermierczych w wybranych sytuacjach taktycznych. Techniki pochodzą z traktatów, a sytuacje taktyczne z analizy istniejących walk. Nauczanie wsparte jest metodyką szermierki sportowej. Podczas treningów ćwiczący rozwijają umiejętności doboru właściwej techniki do sytuacji oraz odpowiednie wyczucie tempa i dystansu.", 
    img:"LongswordSport"}, {
    name:"miecz z tarczą, grupa początkująca", 
    desc:"Trening wprowadzający w walkę z użyciem okrągłej dużej tarczy i miecza z okresu wczesnego średniowiecza. Podczas kursu trenujący zapoznają się z podstawowymi działaniami oraz zasadami prowadzenia broni, a także różnicami w jej użyciu względem konwencji sportowej. Zajęcia przygotowują do walki pełno-kontaktowej i koncentrują się na budowaniu podstaw.", 
    img:"SwordShieldBeginner"}, {
    name:"miecz z tarczą, grupa zaawansowana", 
    desc:"Trening dla osób dysponujących pełnym sprzętem ochronnym i posiadających podstawowe umiejętności władania mieczem i tarczą. Ćwiczący koncentrują się na walkach sparingowych oraz rozwijaniu poznanych w grupie początkującej technik. Uczą się władać również innymi rodzajami wczesnośredniowiecznej broni: toporami, saksami, bronią drzewcową, a także trenują cięcia bronią ostrą.", 
    img:""}, {
    name:'szabla', 
    desc:'Trening szabli polskiej w konwencji XVI-XVII wiecznej. Podczas zajęć trenujący zapoznają się z podstawami poruszania się i pracy bronią. Poznają motorykę podstawowych cięć, zasłon oraz innych działań szermierczych, ucząc się wykorzystywać je w określonych sytuacjach taktycznych.', 
    img:'polish-sabre'}, {
    name:"rapier", 
    desc:"Trening rapiera według hiszpańskiej szkoły <em>La Verdadera Destreza</em> (prawdziwa sztuka). Podczas zajęć trenujący zapoznają się z technikami i naukami przekazywanymi przez hiszpańskich mistrzów fechtunku w XVI-XVII w.: Jerónimo Sánchez'a de Carranza, jego ucznia Luis'a Pacheco de Narváez oraz Francisco Lórenz'a de Rada. Poznają nie tylko postawy szkoły, akcje ataku i obrony, ale też bardzo istotną w tej szkole teorię.", 
    img:""}, {
    name:"kord", 
    desc:"Trening <em>messera</em> (kord) w tradycji niemieckiej, w szczególności według nauk mistrza ks. Johannesa Lecküchnera. Zajęcia są połączeniem klasycznego treningu i seminarium. Uczestnicy nie tylko uczą się technik władania bronią, ale też - pod przewodnictwem prowadzącego - analizują źródła i opracowują własne interpretacje zawartych w nich działań.", 
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
listOfOrganisations = [{
    name:"ClubFundacja", 
    fullName:"Fundacja na Rzecz Historycznych Sztuk Walki", 
    desc:" ", 
    img:"Fundacja.png",
    about:"https://historycznesztukiwalki.pl/about/"}, {
    name:"ClubARMA", 
    fullName:"Stowarzyszenie na rzecz Dawnych Europejskich Sztuk Walki ARMA-PL Warszawa", 
    desc:" ", 
    img:"ARMA_rob_500.png",
    about:"http://arma.lh.pl/waw/"}, {
    name:"ClubSvinfylking", 
    fullName:"Projekt Svinfylking", 
    desc:" ", 
    img:"Svinfylking.png",
    about:"http://svinfylking.cba.pl/o-projekcie/"}, {
    name:"ClubSzampierz", 
    fullName:`Młodzierzowy Klub Szermierki Dawnej "Szampierz"`, 
    desc:" ", 
    img:"Szampierz.jpg",
    about:"https://www.szampierz.pl/o-nas/"},
]
listOfInstructors = [{
    name:"Konrad Świderek", 
    desc:"Ze środowiskiem DESW związany od 2012 r. Instruktor prowadzący Warszawską Sekcję SDESW ARMA-PL. Instruktor sportu i badacz traktatów. Specjalizuje się w długim mieczu w konwencji <em>Blossfechten</em>, walce sztyletem, <em>Harnischfechten</em> (techniki półmieczowe) oraz rapierze według nauk szkoły <em>La Verdadera Destreza</em>. W nielicznych wolnych chwilach promotor i organizator wydarzeń związanych z DESW.", 
    photo:"InstructorPhotoKonrad.jpg"}, {
    name:"Paweł Adamiec", 
    desc:"Pasjonat historii wczesnego średniowiecza zajmujący się od niemal 20 lat rekonstrukcją historyczną. Instruktor oraz badacz dawnych metod walki bronią białą m.in. sztyletem, rapierem, czy technikami półmieczowymi (<em>Harnischfechten</em>). Członek SDESW ARMA-PL. W szczególności w obrębie jego zainteresowań pozostaje wykorzystanie dużej tarczy w różnych epokach historycznych. W 2017 r. utworzył Projekt Svinfylking – grupę dedykowaną możliwie realistycznej rekonstrukcji walki z użyciem miecza i tarczy oraz innych broni znanych we wczesnym średniowieczu: toporów, włóczni, saksów itp. W Projekcie łączy teorię i badanie źródeł z praktyką opartą na pełno-kontaktowej walce w konwencji DESW. ", 
    photo:"InstructorPawel.png"}, {
    name:"Ireneusz Nowak", 
    desc:"Związany z DESW od 2008 r. Instruktor, badacz traktatów, sędzia na zawodach FEDER oraz organizator wydarzeń środowiskowych. Członek SDESW ARMA-PL. Interesuje się całościowym systemem Dawnych Europejskich Sztuk Walki, ze szczególnym uwzględnieniem fechtunku długim mieczem w konwencji <em>Blossfechten</em>, walki kordem (<em>Messer</em>), mieczem jednoręcznym z puklerzem oraz sztyletem. Jest również konstruktorem mieczy treningowych typu <em>fechtschwert</em>.", 
    photo:"InstructorPhotoIreneusz.jpg"}, {
    name:"Jakub Wrzalik ", 
    desc:"Trenuje szermierkę od 2009 r., a od 2011 r. w konwencji DESW. Instruktor, badacz traktatów oraz liczny medalista na zawodach międzynarodowych i krajowych. Członek SDESW ARMA-PL. W kręgu jego zainteresowań znajduje się walka długim mieczem w konwencji <em>Blossfechten</em> oraz <em>Ringen</em> (zapasy historyczne). Jest również instruktorem Młodzieżowego Klubu Szermierki Dawnej „Szampierz”. Podczas zajęć przykłada dużą wagę do treningu ogólnorozwojowego i poprawy całości zdolności motorycznych ucznia.", 
    photo:"Kuba.jpg"},
    {name:"Krzysztof Janus", 
    desc:"Trenuje szermierkę historyczną od 2014 r. Instruktor, badacz traktatów oraz zawodnik na ogólnopolskich zawodach FEDER. Instruktor sportu i członek SDESW ARMA-PL. Uczestnik licznych warsztatów i szkoleń. Bada źródła z zakresu długiego miecza w konwencji <em>Blossfechten</em> oraz <em>Ringen</em> (zapasy historyczne). Jest również instruktorem Młodzieżowego Klubu Szermierki Dawnej „Szampierz”. W nauczaniu stawia na czerpanie radości z szermierki oraz stałe doskonalenie technik i charakteru.", 
    photo:"InstructorKrzysztof.png"},
    {name:"Piotr Grygiel", 
    desc:"Od 1997 r. rekonstruktor  historyczny zainteresowany okresem XV-XVII w. Ze środowiskiem DESW związany od 2011 r. Badacz traktatów i innych źródłem kultury materialnej. Specjalizuje się w długim mieczu w konwencji <em>Blossfechten</em>, szabli, walce sztyletem, <em>Harnischfechten</em> (techniki półmieczowe), broni drzewcowej oraz rapierze według nauk szkoły La Verdadera Destreza.", 
    photo:"InstructorPhotoPiotr.jpg"},
    {name:"Aleksander Szczęsny", 
    desc:"Trenuje szermierkę od 2006 roku, a szermierkę europejską od 2010 roku. Ściśle związany z DESW od 2018 r. Członek SDESW ARMA-PL. Badacz traktatów i instruktor walki kordem (<em>Messer</em>) według tradycji mistrza ks. Johannesa Lecküchnera. W nauczaniu stawia na dokładne odwzorowanie technik traktatowych.", 
    photo:"LogoARMA_rob_500.png"}
] 