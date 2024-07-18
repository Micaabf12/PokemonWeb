const pokeCard = document.querySelector('[data-poke-card]');
const pokeName = document.querySelector('[data-poke-name]');
const pokeImg = document.querySelector('[data-poke-img]');
const pokeImgContainer = document.querySelector('[data-poke-img-container]');
const pokeId = document.querySelector('[data-poke-id]');
const pokeTypes = document.querySelector('[data-poke-types]');
const pokeStats = document.querySelector('[data-poke-stats]');

const typeColors = {
    electric: '#eed535',
    normal: '#a4acaf',
    fire: '#fd7d24',
    water: '#4592c4',
    ice: '#51c4e7',
    rock: '#a38c21',
    flying: '#3dc7ef',
    grass: '#729f3f',
    psychic: '#f366b9',
    ghost: '#7b62a3',
    bug: '#51c4e7',
    poison: '#b97fc9',
    ground: '#ab9842',
    dragon: '#f16e57',
    steel: '#1D8A99',
    fighting: '#2F2F2F',
    faisy: '#fdb9e9',
    dark: '#707070',
    default: '#2A1A1F',
};


const searchPokemon = event => {
    event.preventDefault();
    const { value } = event.target.pokemon;
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
        .then(data => data.json())
        .then(response => renderPokemonData(response))
        .catch(err => renderNotFound())
}

const renderPokemonData = data => {
    const sprite =  data.sprites.other.home.front_default;
    const { stats, types } = data;

    pokeName.textContent = data.name;
    pokeImg.setAttribute('src', sprite);
    pokeImg.style.borderRadius ="0%"
    pokeId.textContent = `Nº ${data.id}`;
    renderPokemonTypes(types);
    renderPokemonStats(stats);
}

const renderPokemonTypes = types => {
    pokeTypes.innerHTML = '';
    types.forEach(type => {
        const typeTextElement = document.createElement("div");
        typeTextElement.style.color = typeColors[type.type.name];
        typeTextElement.textContent = type.type.name;
        pokeTypes.appendChild(typeTextElement);
    });
}

const renderPokemonStats = stats => {
    pokeStats.innerHTML = '';
    stats.forEach(stat => {
        const statElement = document.createElement("div");
        const statElementName = document.createElement("div");
        const statElementAmount = document.createElement("div");
        statElementName.textContent = stat.stat.name;
        statElementAmount.textContent = stat.base_stat;
        statElement.appendChild(statElementName);
        statElement.appendChild(statElementAmount);
        pokeStats.appendChild(statElement);
    });
}


const renderNotFound = () => {
    pokeName.textContent = 'Pokémon No encontrado';
    pokeImg.setAttribute('src', '../img/pikachu-llorando-bw.gif');
    pokeImg.style.borderRadius = '50%';
    pokeTypes.innerHTML = 'No existe o está mal escrito.';
    pokeStats.innerHTML = 'Intenta de nuevo.';
    pokeId.textContent = ''; 
}