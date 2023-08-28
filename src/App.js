import React, { useState, useEffect } from 'react';

function App() {
  const [randomNumber, setRandomNumber] = useState(null);

  const fetchRandomNumber = async () => {
    try {
      const response = await fetch('https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new');
      const data = await response.text();
      setRandomNumber(data);
    } catch (error) {
      console.error('Error fetching random number:', error);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(fetchRandomNumber, 3000); // Fetch every 3 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="App">
      <h1>Random Number Polling</h1>
      <p>Random Number: {randomNumber}</p>
    </div>
  );
}

export default App;
