import React, { useRef, useState } from 'react';
import Add from './components/Add';
import Header from './components/Header';
import Quote from './components/Quote';
import Wishes from './components/Wishes';
import './css/style.css';
import Particles from 'react-tsparticles';

function App() {
  let set = useRef();
  let [wishes, setWishes] = useState([
    {
      id: 1,
      type: 'achievement',
      name: 'Reading 100 Books',
      deadLine: 2010,
      good: 0,
      bad: 0,
    },
    {
      id: 2,
      type: 'travel',
      name: 'Visiting Africa',
      deadLine: 2010,
      good: 0,
      bad: 0,
    },
    {
      id: 3,
      type: 'achievement',
      name: 'Buying Mac Book',
      deadLine: 2010,
      good: 0,
      bad: 0,
    },
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
    const arr = [
      ...wishes,
      {
        id: Math.random(),
        type: type,
        name: wish,
        deadLine: deadLine,
        good: 0,
        bad: 0,
      },
    ];
    setWishes(arr);
  };

  return (
    <>
      <Particles
        params={{
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
            },
          },
          particles: {
            color: {
              value: '#fff',
              animation: {
                h: {
                  enable: true,
                  speed: 20,
                },
              },
            },
            links: {
              color: {
                value: '#ffffff',
              },
              enable: true,
              opacity: 0.4,
            },
            move: {
              enable: true,
              outModes: {
                bottom: 'out',
                left: 'out',
                right: 'out',
                top: 'out',
              },
              speed: 1,
            },
            number: {
              density: {
                enable: true,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            size: {
              value: {
                min: 0.1,
                max: 3,
              },
            },
          },
        }}
      />

      <Header total={wishes.length} set={set}></Header>
      <div className='set' ref={set}>
        <Wishes
          wishes={wishes}
          plus={Plus}
          minus={Minus}
          delete={Delete}
        ></Wishes>
        <Quote></Quote>
        <Add adding={Adding}></Add>
      </div>
    </>
  );
}

export default App;
