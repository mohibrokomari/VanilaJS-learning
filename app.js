var animals = [
    { name: 'Fluffykins', species: 'rabbit'},
    { name: 'Caro', species: 'dog'},
    { name: 'Hamiltor', species: 'fish'},
    { name: 'Harold', species: 'cat'},
    { name: 'Jimmy', species: 'dog'},
    { name: 'Jiri', species: 'fish'}
]

// var result = animals.filter(value => value.species === 'dog')

var result = animals.map((value, i) => {
    return '#' + i + value.name.toLowerCase();
})



console.log(result);