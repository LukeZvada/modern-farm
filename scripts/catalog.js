export const catalog = (plant) => {
    // target the main html element
    const mainElement = document.querySelector(".plants")
    
    let allPlantsArr = []
    
    for (const plant of allPlantsArr) {
        console.log(plant)
        mainElement.innerHTML += `<section class="plant column">${plant.type}</section>`
    }
}