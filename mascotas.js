
function createPetit() {

    let mascotas =  []

    function agregarPetit(pet) {
        if (pet) {
            mascotas.push(pet)
        } else {
            return mascotas;
        }
    }

    return agregarPetit;
}

const myPetitList = createPetit()

console.log(myPetitList('michi'))
console.log(myPetitList('Firulais'))
console.log(myPetitList())


// function createPetList() {
//     const petList = []
//     return function(pet){
//         if(pet){
//           petList.push(pet)
//           return petList
//         }
//         return petList
//     }
//   }
  