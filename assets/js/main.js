// fetch(url)
//     .then(function (response) {
//         response.json().then(function (responseBody) {
//             console.log(responseBody)
//         })
//     })
//     .catch(function (error) {
//         consolo.log(error)
//     })

//Coverte os typos de pokemon em uma lista
// function convertPokemonDetailsToLi(pokemonTypes) {
//     return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
// }


const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
let offset = 0 
const limit = 10
const maxRecords = 151

// function convertPokemonToLi(pokemon) {
//     return `
//         <li class="pokemon ${pokemon.type}">
//             <span class="number">#${pokemon.number}</span>
//             <span class="name">${pokemon.name}</span>

//             <div class="detail">
//                 <ol class="types">
//                     <!--{convertPokemonDetailsToLi(pokemon.types).join('')}-->
//                     ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
//                 </ol>

//                 <img src="${pokemon.photo}"
//                      alt="${pokemon.name}">
//             </div>
//         </li>
//     `
// }


function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHTML = pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        <!--{convertPokemonDetailsToLi(pokemon.types).join('')}-->
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>

                    <img src="${pokemon.photo}"
                        alt="${pokemon.name}">
                </div>
            </li>
        `).join('')
        pokemonList.innerHTML += newHTML
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})

// pokeApi.getPokemons().then((pokemons = []) => {
    //Modelo main novo e Apelão
    // const newHTML = pokemons.map(convertPokemonToLi).join('')
    // pokemonList.innerHTML = newHTML
    
    // Modelo mais Novo
    // const newList = pokemons.map((pokemon) => convertPokemonToLi(pokemon)) Antigo
    // const newList = pokemons.map(convertPokemonToLi) 
    // const newHTML = newList.join('')
    // pokemonList.innerHTML += newHTML
    
    // MOdelo antigo 2
    // const newList = pokemons.map((pokemon) => {
    //     return convertPokemonToLi(pokemon)
    // })
    // const newHTML = newList.join('')
    // pokemonList.innerHTML += newHTML


    // Modelo antigo 1
    // const listItems = []
    //     for (let i = 0; i < pokemons.length; i++){
    //         const pokemon = pokemons[i];
    //         listItems.push(convertPokemonToLi(pokemon))
    //     }
    //     console.log(listItems)
    // })
    // .catch((error) => consolo.log(error))

// })
