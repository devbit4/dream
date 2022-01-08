import React, { useState } from 'react';
import Add from './components/Add';
import Header from './components/Header';
import Wishes from './components/Wishes';
import './css/style.css';

function App() {
  const [wishes, setWishes] = useState([
    { id: 1, name: 'Reading', good: 0, bad: 0 },
    { id: 2, name: 'Running', good: 0, bad: 0 },
    { id: 3, name: 'Coding', good: 0, bad: 0 },
  ]);

  const Plus = (wish) => {

    const arr = [...wishes];
    const index = arr.indexOf(wish);
    arr[index].good++;
    setWishes(arr);
  }

  const Minus = (wish) => {
    const arr = [...wishes];
    const index = arr.indexOf(wish);
    arr[index].bad--;
    setWishes(arr);
  }

  const Delete = (wish) => {
    const arr = wishes.filter(item => item.id !== wish.id)
    setWishes(arr);
  }

  return (
    <>
      <Header></Header>
      <Wishes wishes={wishes} plus={Plus} minus={Minus} delete={Delete}></Wishes>
      <Add></Add>
    </>
  )


}

export default App;
