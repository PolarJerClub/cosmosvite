import React, { useState } from 'react';


interface Joke {
  type: string,
  setup: string,
  punchline: string,
  id: number
}

export const VirtualAssistant: React.FC = () => {
  const [joke, setJoke] = useState<Joke | null>(null);

  const fetchJoke = async () => {
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data: Joke = await response.json();
      setJoke(data);
      console.log(data)
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };

  return (
    <div>
      <div style={{ border: '1px solid black', padding: '10px', marginLeft: '500px', marginBottom: '20px', marginTop: '20px', maxWidth: '500px' }}>
        {(joke === null)?
          <p>Press the button to hear a joke!</p>
        :
        <><p>{joke?.setup}</p>
        <p>{joke?.punchline}</p></>

      }
      </div>
      <button onClick={fetchJoke}>Tell me a joke!</button>
    </div>
  );
};
