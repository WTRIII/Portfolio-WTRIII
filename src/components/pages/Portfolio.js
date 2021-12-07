import React from 'react';
import fedBuilder from '../images/fed-builder.PNG';
import movieComparison from '../images/movie-comparison.PNG';
import pipeDreams from '../images/pipe-dreams.PNG';
import regexTutorial from '../images/regex-tutorial.PNG';
import workout from '../images/Main-page.PNG';
import techBlog from '../images/tech-blog-homepage.PNG';

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
      <div>
        <a href="https://gist.github.com/WTRIII/3a992ef519ac5fe01dac9071a6b9e785">
          <img src={regexTutorial} alt="regex tutorial" />
          <h2>Regular Expression Tutorial</h2>
        </a>
      </div>      
      <div>
        <a href="https://nosql-workout-tracker-wtriii.herokuapp.com/">
          <img src={workout} alt="workout tracker" />
          <h2>Movie Comparison Site</h2>
        </a>
      </div>      
      <div>
        <a href="https://mvc-tech-blog-wtriii.herokuapp.com/">
          <img src={techBlog} alt="tech blog" />
          <h2>Movie Comparison Site</h2>
        </a>
      </div>


    </div>

  );
}
