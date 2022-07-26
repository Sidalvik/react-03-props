import React from 'react';
import './App.css';
import Separator from './components/Separator/Separator'
import Stars from './components/Stars/Stars';

function App() {

  const films = [{filmName: 'Фильм #1', stars: 2}, {filmName: 'Фильм #2', stars: 5}, {filmName: 'Фильм #3'}, {filmName: 'Фильм #4', stars: 15}];

  return (
    <div className="App">
      <h1>Курс React. Домашнее задание по&nbsp;теме "PROPS"</h1>
      <div className='task-1' id='task-1'>
        <h2>Задание 1. "Рейтинг фильмов"</h2>
          <div className='film-list'>
            {films.map((item, index) => 
              <div className='film' key = {index}>
                <p>{item.filmName}</p>
                <Stars count={item.stars}/>
              </div>)}
          </div>
      </div>
      <Separator/>
      <div className='task-2' id='task-2'>
        <h2>Задание 2. "Список предложений"</h2>
      </div>
      <Separator/>
      <div className='task-3' id='task-3'>
        <h2>Задание 3. "История сообщений в чате"</h2>
      </div>
      <Separator/>
    </div>
  );
}

export default App;
