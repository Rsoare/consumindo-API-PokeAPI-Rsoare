function renderListPokemon(pokemons) {
    const ulList = document.querySelector('.list__container')
    pokemons.results.forEach(pokemon => {
        const pokemonId = pokemon.url.slice(34, -1)
        const pokemonData = createListPokemon(pokemon, pokemonId)
        ulList.appendChild(pokemonData)
    });
}


function renderSearchPokemon({ name, id }) {
    const ulList = document.querySelector('.list__container')
    const pokemonRender = createSearchPokemon(name, id)
    ulList.appendChild(pokemonRender)
}


function createListPokemon(pokemonData, cont) {
    const liList = document.createElement('li')
    const imgList = document.createElement('img')
    const pList = document.createElement('p')

    liList.classList.add("list__item--container")
    imgList.classList.add("list__item--image")
    pList.classList.add("list__item--text")

    imgList.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${cont}.gif`
    imgList.alt = pokemonData.name

    pList.innerText = pokemonData.name

    liList.append(imgList, pList)

    return liList
}

function createSearchPokemon(pokemonName, pokemonId) {
    const liList = document.createElement('li')
    const imgList = document.createElement('img')
    const pList = document.createElement('p')


    liList.classList.add("list__item--container")
    imgList.classList.add("list__item--image")
    pList.classList.add("list__item--text")

    imgList.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemonId}.gif`
    imgList.alt = pokemonName

    pList.innerText = pokemonName

    liList.append(imgList, pList)

    return liList
}

function buttonRenderPokemonSearch() {
    const ulList = document.querySelector('.list__container')
    const input = document.querySelector('.form__input--text')
    const button = document.querySelector('.form__button')

    button.addEventListener('click', () => {

        ulList.innerHTML = ""

        if (input.value.trim() == "") {
            return getAllPokemons()
        }
        searchPokemon(input.value.toLowerCase().trim())

    })
}

function createLoadingScreen() {
    const li = document.createElement('li')
    const name = document.createElement('p')
    const image = document.createElement('img')

    li.classList.add('loadingScreen')

    name.innerText = 'Carregando...'
    image.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif'
    image.alt = 'Pikachu'

    li.append(name,image)

    return li
}

function createMessageErro() {
    const li = document.createElement('li')
    const name = document.createElement('p')
    const image = document.createElement('img')

    li.classList.add('messageErro')

    name.innerText = 'Pokemon não encontrado'
    image.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/6.gif'
    image.alt = 'Mewtwo'

    li.append(name,image)

    return li
}
buttonRenderPokemonSearch()