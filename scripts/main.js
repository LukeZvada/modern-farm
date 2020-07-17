

import {createPlan} from "./plan.js"
import {addPlant, usePlants} from "./field.js"
import {plantSeeds} from "./tractor.js"
import {catalog} from "./catalog.js"
import {harvestPlants} from "./harvests.js"

const yearlyPlan = createPlan()
//console.log(yearlyPlan)

plantSeeds(yearlyPlan)
const allPlants = usePlants()
console.log(allPlants, "allPlants")
catalog(allPlants)

const seedArr = harvestPlants()
catalog(seedArr)

