/*

Phase 1 -> GET
Updated March 14, 2024
Created May 25, 2023
by Sakib Rasul

Objectives
1. Make a GET request to an external API.

*/
// fetch
// Create = POST
// Read = GET
// Update = PATCH
// Delete = DELETE


// A synchronous request to https://cat-fact.herokuapp.com/facts/random.
fetch("https://cat-fact.herokuapp.com/facts/random")
// fetch is a promise, so we'll use .then() to handle its successful state
// Here, we'll convert our JSON response into usable JS
.then(response => response.json())
.then(fact => {
    document.querySelector("#cat").textContent = fact.text
})
// fetch is a promise, so we'll use .catch() to handle its unsuccessful state
.catch(error => console.log(error))

// A synchronous request to https://anapioficeandfire.com/api/books.
fetch("https://anapioficeandfire.com/api/books")
.then(promise => promise.json())
.then(fact => {
    for(item of fact){
        const list = document.createElement("li")
        list.textContent = item.name
        document.querySelector("#got").appendChild(list)
    }
})
.catch(error => console.log(error))

// An asynchronous request to https://pokeapi.co/api/v2/pokemon/[name]"
// Use async when you are executing a fetch request at a later point in time rather than on load.
async function getPokemon(name){
    // await is put to notify that the code to going to attempt a fetch request or some sort
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + name)
    const pokemon = await response.json()
    const pokemonFact = document.querySelector("#pokemon")
    pokemonFact.textContent = pokemon.height
}

getPokemon("ditto")

// ~ Challenge: Make a GET request to an API of your choice!

// fetch("https://dog-api.kinduff.com/api/facts")
// .then(promise => promise.json())
// .then(fact => {

// })