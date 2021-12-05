import React from 'react';
import fedBuilder from '../images/fed-builder.PNG';
import movieComparison from '../images/movie-comparison.PNG';
import pipeDreams from '../images/pipe-dreams.PNG';

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <p>
        See below for a list of my featured works:
      </p>
      <div>
        <a href="https://github.com/WTRIII/Homework-12-Federation-Team-Builder-WTRIII">
          <img class="fed builder screenshot" src={fedBuilder} alt="federation builder" />
          <h2>Federation Team Builder</h2>
        </a>
      </div>
      <div>
        <a href="https://pipe-dreams.herokuapp.com/">
          <img class="pipe dreams screenshot" src={pipeDreams} alt="pipe dreams screenshot" />
          <h2>Pipe Dreams</h2>
        </a>
      </div>
      <div>
        <a href="https://wtriii.github.io/Project-1-Movie-Comparison-Site/">
          <img src={movieComparison} alt="movie comparison screenshot" />
          <h2>Movie Comparison Site</h2>
        </a>
      </div>



    </div>

  );
}
