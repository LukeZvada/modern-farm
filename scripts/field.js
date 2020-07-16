const plantArr = []

export const addPlant = (seedObj) => {
    if (Array.isArray(seedObj)) {
        // if the seed object is corn, split 
        for (const seed of seedObj) {
            plantArr.push(seed)
        }
        
    } else {
        // if the seed object is not corn
        plantArr.push(seedObj)
    }
}

export const usePlants = () => {
    return plantArr
}