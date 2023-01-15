// Exemple d'utilisation d'une fonction de notre fichier api.js

import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../utils/api';
import Header from './Header';
import styles from '../css/home.module.css'

const Home = () => {

  const [data, setData] = useState([]);
  
  useEffect(() => {
    api.getData().then((data) => {
      setData(data);
    });
  }, []);

  console.log(data)

  return (
    <div>
      
      < Header/>

      <div className= {styles.image}>
        <p className= {styles.title}>Chez vous, partout et ailleurs</p>
      </div>

      <div className= {styles.container}>

          {data.map((item) => (
            <div id={item.id} className= {styles.item}>
              <Link to={`/logement/${item.id}`}>
              <img src={item.pictures[1]} className= {styles.itemImage} alt='description'/>
              <h3 className= {styles.itemTitle}>{item.title}</h3>
              </Link>
            </div>
          ))}
      
        </div>

    
    </div>
  );
};

export default Home;
