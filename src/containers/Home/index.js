import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Searcher from '../../components/Searcher';
import PokemonList from '../../components/PokemonList';
import Loader from '../../components/Loader';
import { fetchPokemons } from '../../slices/pokemon';
import './styles.css';

function Home() {
  const pokemons = useSelector((state) => state.pokemon.list);
  const loading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemons());
    // eslint-disable-next-line
  }, []);
  return (
    <div className='Home'>
      <Searcher />
      {loading && <Loader />}
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default Home;
