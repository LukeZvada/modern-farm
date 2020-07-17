export const harvestPlants = (plants) => {

let seedArr = []

for (const plants of seedArr) { 
    if (plants.type === "Corn" ) { 
        const splitCorn = plants.output / 2
            for (let i = 0; i < splitCorn; i++) {
                seedArr.push(plants)
    }
}
    else {
        for (let i=0; i <plants.output; i++) { 
            seedArr.push(plants)
            }
        }
        return seedArr
    }
}