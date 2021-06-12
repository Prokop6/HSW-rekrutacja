import { listOfInstructors } from "./data"
import { listOfOrganisations } from "./data"
import { renderOrganisationSection } from "./renderOrganisationSection";
import { renderInstructorsSection } from "./renderInstructorsSection";

function alertOnce(alertText) {
  var alerted = localStorage.getItem("alerted") || "";
  if (alerted != "yes") {
    alert(`${alertText}`);
    localStorage.setItem("alerted", "yes");
  }
}
renderOrganisationSection(listOfOrganisations);
renderInstructorsSection(listOfInstructors);
