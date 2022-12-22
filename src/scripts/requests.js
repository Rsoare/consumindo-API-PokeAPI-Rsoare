
async function getAllPokemons() {
    const pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(res => {
            const ulList = document.querySelector('.list__container')
            const liLoading = createLoadingScreen()
            ulList.appendChild(liLoading)
            setTimeout(() => {
                liLoading.remove()

                renderListPokemon(res)
            }, 5000)
        })
}


async function searchPokemon(pokemonName) {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(res => {
            renderSearchPokemon(res)
        })

}

getAllPokemons()
