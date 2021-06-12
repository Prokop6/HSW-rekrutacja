export function renderTrainingTable(inputData) {
    const anchor = document.getElementById("mark4TrainingDescriptions");
    const trainingOverview = document.createElement("div");
    trainingOverview.className = "training_overview";

    for (let i = 0; i < inputData.length; i++) {
        const trainingDetails = document.createElement("div");
        const trainingNameField = document.createElement("div");
        const trainingDescriptionField = document.createElement("div");
        
        trainingDetails.className = "training_details";
        trainingNameField.className = "training_name_field";
        trainingDescriptionField.className = "training_description_field";

        const trainingNameFieldText = document.createElement("p");
        const trainingDescriptionFieldText = document.createElement("p");

        trainingNameFieldText.innerText = `${inputData[i].name}`;
        trainingDescriptionFieldText.innerHTML = JSON.parse(JSON.stringify(`${inputData[i].desc}`));
        trainingDescriptionFieldText.innerHTML += " <br/>Treningi odbędą się w dniach: "
        trainingDescriptionFieldText.innerHTML += JSON.parse(
          JSON.stringify(`${inputData[i].dates}. `)
        );

        trainingNameField.appendChild(trainingNameFieldText);
        trainingDescriptionField.appendChild(trainingDescriptionFieldText);

        trainingDetails.append(trainingNameField);
        trainingDetails.append(trainingDescriptionField);
        trainingOverview.append(trainingDetails);
    };
    anchor.append(trainingOverview);
};
