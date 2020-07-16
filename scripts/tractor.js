import {createPotato} from "./seeds/potato.js"
import {createAsparagus} from "./seeds/asparagus.js"
import {createCorn} from "./seeds/corn.js"
import {createSoybean} from "./seeds/soybean.js"
import {createSunflower} from "./seeds/sunflower.js"
import {createWheat} from "./seeds/wheat.js"
import {addPlant} from "./field.js"

//

export const plantSeeds = (yearlyPlantingArr) => {
    for(const row of yearlyPlantingArr) {
        for(const plant of row){

            if (plant === "potato") {
                addPlant(createPotato())
            }
            else if (plant === "Corn") {
                addPlant(createCorn())
            } 
            else if (plant === "Asparagus") {
                addPlant(createAsparagus())
            }
            else if (plant === "Soybean") {
                addPlant(createSoybean())
            }
            else if (plant === "Sunflower") { 
                addPlant(createSunflower())
            }
            else if (plant === "Wheat") {
                addPlant(createWheat())
            }
        }
    }
}