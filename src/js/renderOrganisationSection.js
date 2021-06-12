export function renderOrganisationSection(inputInfo) {
    let insertionSite = document.getElementById('mark4organisations');
    let imputDiv = document.createElement("div");
    imputDiv.className = ("fbHorizontal");
    for (i = 0; i < inputInfo.length; i++) {

        let infoLink = document.createElement("a");
        let clubDiv = document.createElement("div");
        let nameDiv = document.createElement("div");
        let logoDiv = document.createElement("div");

        let namePar = document.createElement("p");
        let logoImg = document.createElement("img");

        logoImg.className = ("fbInlinePhoto");
        nameDiv.className = ("fbCenterdText");
        infoLink.className = ("fbVertical");

        infoLink.setAttribute("href", `${inputInfo[i].about}`);
        namePar.innerText = `${inputInfo[i].fullName}`;
        logoImg.setAttribute("src", `https://historycznesztukiwalki.pl/wp-content/uploads/2020/09/Logo${inputInfo[i].img}`);

        logoDiv.append(logoImg);
        nameDiv.append(namePar);

        infoLink.append(logoDiv);
        infoLink.append(nameDiv);

        clubDiv.append(infoLink);

        imputDiv.append(clubDiv);
    }
    insertionSite.append(imputDiv);
};
