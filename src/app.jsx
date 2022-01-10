import React, { useState } from 'react';
import Add from './components/Add';
import Header from './components/Header';
import Quote from './components/Quote';
import Wishes from './components/Wishes';
import './css/style.css';

function App() {
  let [wishes, setWishes] = useState([
    { id: 1, type: "가족", name: 'Reading 100 Books', deadLine: 2010, good: 0, bad: 0 },
    { id: 2, type: "건강", name: 'Visiting Africa', deadLine: 2010, good: 0, bad: 0 },
    { id: 3, type: "성취", name: 'Buying Mac Book', deadLine: 2010, good: 0, bad: 0 },
  ]);

  const Plus = (wish) => {
    const arr = [...wishes];
    const index = arr.indexOf(wish);
    arr[index].good++;
    setWishes(arr);
  };

  const Minus = (wish) => {
    const arr = [...wishes];
    const index = arr.indexOf(wish);
    arr[index].bad--;
    setWishes(arr);
  };

  const Delete = (wish) => {
    const arr = wishes.filter((item) => item.id !== wish.id);
    setWishes(arr);
  };
  const Adding = (type, wish, deadLine) => {
    const arr = [...wishes, { id: Math.random(), type: type, name: wish, deadLine: deadLine, good: 0, bad: 0 }];
    setWishes(arr);
  };

  return (
    <>
      <Header total={wishes.length}></Header>
      <Wishes
        wishes={wishes}
        plus={Plus}
        minus={Minus}
        delete={Delete}
      ></Wishes>
      <Quote></Quote>
      <Add adding={Adding}></Add>
    </>
  );
}

export default App;
