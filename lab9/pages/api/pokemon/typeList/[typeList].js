import getPokemon from 'json-pokemon/getPokemon';

export default (req, res) => {

    let result = {"error": "Could not find pokemon with this type. Remember to Capitalize the type name"};

    const type={type: req.query.typeList};

    let pokemon=getPokemon(type);

    if(pokemon !== null && pokemon.length !== 0) {
        result = pokemon;
    }

    res.json(result);

}