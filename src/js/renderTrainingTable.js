export function renderTrainingTable(inputData) {
    let insertionSite = document.getElementById("mark4TrainingDescriptions");
    let trainingOverview = document.createElement("div");
    trainingOverview.className = "training_overview";

    for (let i = 0; i < inputData.length - 1; i++) {
        let trainingDetails = document.createElement("div");
        let trainingNameField = document.createElement("div");
        let trainingDescriptionField = document.createElement("div");

        trainingDetails.className = "training_details";
        trainingNameField.className = "training_name_field";
        trainingDescriptionField.className = "training_description_field";

        trainingNameFieldText = document.createElement("p");
        trainingDescriptionFieldText = document.createElement("p");

        trainingNameFieldText.innerText = `${inputData[i].name}`;
        trainingDescriptionFieldText.innerHTML = JSON.parse(JSON.stringify(`${inputData[i].desc}`));

        trainingNameField.appendChild(trainingNameFieldText);
        trainingDescriptionField.appendChild(trainingDescriptionFieldText);

        trainingDetails.append(trainingNameField);
        trainingDetails.append(trainingDescriptionField);
        trainingOverview.append(trainingDetails);
    };
    insertionSite.append(trainingOverview);
};
