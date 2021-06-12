import { renderTrainingTable } from "./renderTrainingTable";
import { listOfTrainings } from "./listOfTrainingsSummerCamp";

import { renderOrganisationSection } from "./renderOrganisationSection.js";
import { listOfOrganisations } from "./listOfOrganisations.js";

import { renderInstructorsSection } from "./renderInstructorsSection.js";
import { listOfInstructors } from "./listOfInstructorsSC.js";

import { renderPricingTable } from './renderPricingTableSC.js'
import { priceTagsSC } from "./priceTagsSC.js";

renderOrganisationSection(listOfOrganisations);
renderTrainingTable(listOfTrainings);
renderPricingTable(priceTagsSC);
renderInstructorsSection(listOfInstructors);
