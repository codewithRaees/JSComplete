const a = {
     name: 'Rais',
     age: 37,
     address:{
          city1: 'Tank',
          village:'Darraki'
     }
}
const city = a.address?.city?.streetNumber

if (city === undefined) {
     console.log("No City Address Found")
} else {
     console.log("Your city is " + city)
}