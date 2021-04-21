function addPokemon() { 
  const pokemonList = document.getElementById('pokemonList');
  const pokemonName = document.getElementById('item');

  const pokemonNameValue = document.getElementById('item').value;

  document.getElementById('item').value = "";

  const newPokemonListItem = document.createElement('li');
  
  const newPokemonListItemName = document.createElement('span');
  newPokemonListItemName.innerText = pokemonNameValue;

  const newPokemonListItemDeleteButton = document.createElement('button');
  newPokemonListItemDeleteButton.innerText = "Excluir";

  newPokemonListItem.appendChild(newPokemonListItemName);
  newPokemonListItem.appendChild(newPokemonListItemDeleteButton);

  newPokemonListItemDeleteButton.addEventListener('click', function () { 
    pokemonList.removeChild(newPokemonListItem);
  })

  pokemonList.appendChild(newPokemonListItem);

  pokemonName.focus();
};
