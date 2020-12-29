import React, { useState } from "react";

import "./App.css";

const tacos = [
  {
    tacoId: 0,
    src: "/images/krisztian-tabori-ZQf4jzkpz1k-unsplash.jpg",
    alt: "NOT Taco Bell tacos",
    isTacoBell: false,
  },
  {
    tacoId: 1,
    src: "/images/cheesy-double-decker.jpg",
    alt: "Taco Bell cheesy double decker taco",
    isTacoBell: true,
  },
  {
    tacoId: 2,
    src: "/images/cheesy-thing.jpg",
    alt: "Taco Bell cheesy taco thing",
    isTacoBell: true,
  },
  {
    tacoId: 3,
    src: "/images/doritos-locos.jpg",
    alt: "Taco Bell Doritos Locos taco",
    isTacoBell: true,
  },
  {
    tacoId: 4,
    src: "/images/taco-bell-tacos.jpg",
    alt: "Taco Bell tacos",
    isTacoBell: true,
  },
  {
    tacoId: 5,
    src: "/images/fidel-fernando-OKJlJn5smek-unsplash.jpg",
    alt: "NOT Taco Bell tacos",
    isTacoBell: false,
  },
  {
    tacoId: 6,
    src: "/images/jeswin-thomas-z_PfaGzeN9E-unsplash.jpg",
    alt: "NOT Taco Bell tacos",
    isTacoBell: false,
  },
  {
    tacoId: 7,
    src: "/images/jordan-nix-61wG5-SAF_Y-unsplash.jpg",
    alt: "NOT Taco Bell tacos",
    isTacoBell: false,
  },
];

function App() {
  const [responses, setResponses] = useState([]);
  const [activeTaco, setActiveTaco] = useState(0);
  const [tastiness, setTastiness] = useState(3);

  const taco = tacos[activeTaco];
  function handleSubmit(event) {
    event.preventDefault();
    //1 save the current taco ID and its rating
    // setResponses((currentResponses) => [
    //   ...currentResponses,
    //   { id: tacos[activeTaco].id, tastiness },
    // ]);
    // ersetzt durch
    const taco = tacos[activeTaco];
    //Schlechte Lösung! useEffect wäre besser
    const newResponses = [
      ...responses,
      {
        tacoId: taco.tacoId,
        tastinessScore: tastiness,
        isTacoBell: taco.isTacoBell,
      },
    ];

    setResponses(newResponses);

    //2 check if this the last taco
    if (activeTaco === tacos.length - 1) {
      //TODO implement submission
      console.log("Saving your responses");
      console.log(newResponses);
      return;
    }
    setActiveTaco(activeTaco + 1);
    setTastiness(3);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>We Need to Taco 'Bout Your Choice</h1>
      </header>
      <main>
        <div className="current-vote">
          <img src={taco.src} alt={taco.alt} />
          <form onSubmit={handleSubmit}>
            <h2>How is this Taco</h2>
            <label htmlFor="amoun">
              Choose 1 for "garbage" and 5 for "I would die for this taco"
              <input
                id="amount"
                type="range"
                min={1}
                max={5}
                onChange={(event) => setTastiness(parseInt(event.target.value))}
                value={tastiness}
                list="tickmarks"
              />
              <datalist id="tickmarks">
                <option value={1} label="1"></option>
                <option value={2}></option>
                <option value={3} label="3"></option>
                <option value={4}></option>
                <option value={5} label="5"></option>
              </datalist>
            </label>
            <button>Save and Rate Next</button>
          </form>
        </div>
      </main>
    </div>
  );
}

// {tacos.map((taco) => (
//   <img key={taco.tacoId} src={taco.src} alt={taco.alt} />
// ))}
export default App;
