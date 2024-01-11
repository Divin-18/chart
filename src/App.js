import React, { useState } from 'react';
import './App.css';
import BarChart from './Components/BarChart';
import { AllData } from './Data';

function App() {
  const [userData, setUserData] = useState({
    labels: AllData.map((data) => data.year),
    datasets: [{
      label: "Gold Rate",
      data: AllData.map((data) => data.goldRate),
      backgroundColor:["gray","yellow"],
    }]
  });

  return (
    <div className="App">
      <div style={{width:700}}>
      <BarChart chartData={userData} />
      </div>
    </div>
  );
}

export default App;
