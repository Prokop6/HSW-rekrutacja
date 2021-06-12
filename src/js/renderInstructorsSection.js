export function renderInstructorsSection(inputData) {
    let anchor = document.getElementById("mark4instructorDetails");
    for (i = 0; i < inputData.length; i++) {
        let InstrName = document.createElement("h5");
        let descriptionSection = document.createElement("div");
        let InstrChart = document.createElement("p");
        let InstrPhoto = document.createElement("img");
        let photoDiv = document.createElement("div");

        anchor.className = "instructor_section_styles";

        InstrChart.className = "fbInlineText";
        photoDiv.className = "fbInlinePhoto";
        descriptionSection.className = "fbInlineTable";

        InstrName.textContent = inputData[i].name;
        InstrChart.innerHTML = JSON.parse(JSON.stringify(inputData[i].desc));

        InstrPhoto.setAttribute(
            "src",
            inputData[i].photo
        );

        photoDiv.append(InstrPhoto);
        descriptionSection.append(photoDiv);
        descriptionSection.append(InstrChart);

        let subsection = document.createElement("div");

        subsection.append(InstrName);
        subsection.append(descriptionSection);

        anchor.append(subsection);
    }
}
