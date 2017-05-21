import React from 'react';
import ReactDOM from 'react-dom';
import Post from './App';
import './index.css';

ReactDOM.render(
  <Post title={'Cool Book about Boy'} author={'J-Sweet'} body={'my post is super cool and info filled'} comments={['ya great movie','groovy moovie','super cool ya']}/>,
  document.getElementById('root')
);
