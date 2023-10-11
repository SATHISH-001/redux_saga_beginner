import React from 'react';
import './App.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCatsFetch } from './catState';

const App = () => {
  const cats = useSelector(state => state.cats.cats);
  console.log(cats);

  const dispatch = useDispatch();

  //Once the getCatsFetch was completed it will call the saga function
  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch]);



  return (
    <div className='App'>
      <h1>CATS SPECIES GALLERY</h1>
      <p>Image of different species of cats. Lots of cats for your viewing pleasure.</p>
      <hr />
      <div className='Gallery'>
        {cats.map(cat =>
          <div key={cat.id} className='row'>
            <div className='column column-left'>
              <img src={cat.url} width='200' height='200' alt='Cat' />
            </div>
            <div className='column column-right'>
              <h2>{cat.name}</h2>
              <h5>Temperament: {cat.temperament}</h5>
              <p>{cat.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
