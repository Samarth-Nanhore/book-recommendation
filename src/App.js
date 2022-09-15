import React from "react";
import "./styles.css";
import { useState } from "react";

const ourBooks = {
  Sciencefiction: [
    {
      bookName: "Dune",
      author: "Frank Herbert",
      rating: "5/5"
    },
    {
      bookName: "Project Hail Mary",
      author: "Andy Weir",
      rating: "5/5"
    },
    {
      bookName: "The Martian",
      author: "Andy Weir",
      rating: "4/5"
    }
  ],
  SelfHelp: [
    {
      bookName: "THE HEADSPACE GUIDE TO MEDITATION & MINDFULNESS",
      author: "Andy Puddicombe",
      rating: "5/5"
    },
    {
      bookName: "Zen: The Art of Simple Living",
      author: "Shunmyō Masuno",
      rating: "5/5"
    },
    {
      bookName: "Think Like a Monk",
      author: " Jay Shetty",
      rating: "5/5"
    }

 
   ],

  Nature: [
    {
      bookName: "The Blue Umbrella",
      author: "Ruskin Bond",
      rating: "5/5"
    },
    {
      bookName: "The Room on the Roof",
      author: "Ruskin Bond",
      rating: "4/5"
    },
    {
      bookName: "White Clouds, Green Mountains",
      author: "Ruskin Bond",
      rating: "5/5"
    }
  ]
};
var name = "Book By: ";
export default function App() {
  const [genere, setGenere] = useState("Sciencefiction");
  function clickHandler(genere) {
    setGenere(genere);
  }
  return (
    <div className="App">
      <h1>
        {" "}
        <span>📗</span> Books Recommendation
      </h1>
      <h4>Check Out these Books. Select a genere to get started</h4>
      <div>
        {Object.keys(ourBooks).map((genere) => (
          <button
            onClick={() => clickHandler(genere)}
            style={{ padding: "1rem", margin: "1rem" }}
          >
            {genere}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "3" }}>
          {ourBooks[genere].map((book) => (
            <li key={book.bookName}>
              {" "}
              <div style={{ fontSize: "x-large" }}>{book.bookName}</div>
              
              <div style={{ fontSize: "smaller" }}>
                {name}
                {book.author}
              </div>
              {/* <hr /> */}
              <div style={{ fontSize: "smaller" }}>{book.rating}</div>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}











// import React from 'react';
// import './App.css';
// import { useState } from 'react';
// import { animes } from './otaku';
// import { useEffect } from 'react';

// export default function App(){
//   const [animeName, setAnimeName] = useState("Shounen");

//   useEffect(() => {
//     alert("component rendered for the first time");
    
//     return () => {
//       alert("component is being removed from the DOM");
//     };
//   }, []); 

 

//   function handleClick(baka){
//   setAnimeName(baka)
//   }

//   return(
//     <div style={{textAlign:"center"}}>
//      <p><span>🎏</span>Anime watchlist</p>
//     <h1>Hey! Check out some of my favourite anime shows</h1>

//     {Object.keys(animes).map((baka) =>(
//       <button
//       onClick={() =>handleClick(baka)}
//       style={{ padding: "1rem", margin: "1rem" }}
//       >
//         {baka}
//       </button>
//     ))}
   
//     <hr/>
//     <ul>
//      {animes[animeName].map((kk) => (
//        <li key={kk.animeName} >
// <div>{kk.animeName}</div>
// <div>{kk.episodes}</div>
// <div>{kk.aboutAnime}</div>
//        </li>
//      ))}
//     </ul>
//     </div>
//   )
// } 

