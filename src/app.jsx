import React, { useState } from 'react';
import Add from './components/Add';
import Header from './components/Header';
import Quote from './components/Quote';
import Wishes from './components/Wishes';
import './css/style.css';

function App() {
  const [wishes, setWishes] = useState([
    { id: 1, name: 'Reading 100 Books / 2022', good: 0, bad: 0 },
    { id: 2, name: 'Visiting Africa / 2050', good: 0, bad: 0 },
    { id: 3, name: 'Buying Mac Book / 2030 ', good: 0, bad: 0 },
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
  const Adding = (name) => {
    const arr = [...wishes, { id: Math.random(), name: name, good: 0, bad: 0 }]
    setWishes(arr);
  }


  return (
    <>
      <Header></Header>
      <Wishes wishes={wishes} plus={Plus} minus={Minus} delete={Delete}></Wishes>
      <Quote></Quote>
      <Add adding={Adding}></Add>
    </>
  )


}

export default App;
