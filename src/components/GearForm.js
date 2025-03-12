import React, { useState } from 'react';
import axios from 'axios';

const GearForm = () => {
  const [realm, setRealm] = useState('');
  const [characterName, setCharacterName] = useState('');
  const [gearData, setGearData] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.get(
        `http://localhost:5000/get-gear?realm=${realm}&character_name=${characterName}`
      );
      setGearData(response.data);
    } catch (err) {
      setError('Failed to fetch gear data');
    }
  };

  return (
    <div>
      <h2>Add WoW Character</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Realm:</label>
          <input
            type="text"
            value={realm}
            onChange={(e) => setRealm(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Character Name:</label>
          <input
            type="text"
            value={characterName}
            onChange={(e) => setCharacterName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Get Gear Data</button>
      </form>

      {error && <div style={{ color: 'red' }}>{error}</div>}

      {gearData && (
        <div>
          <h2>Gear Data for {characterName}</h2>
          <pre>{JSON.stringify(gearData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default GearForm;
