import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';

const ChartComponent = ({ data }) => {
  const [minGPA, setMinGPA] = useState(0);
  const [maxGPA, setMaxGPA] = useState(10);

  const handleMinimum = (e) => {
    setMinGPA(e.target.value);
  };

  const handleMaximum = (e) => {
    setMaxGPA(e.target.value);
  };

  const filteredData = data.filter((item) => item.gpa >= minGPA && item.gpa <= maxGPA);

  
  const gpaCounts = {};
  filteredData.forEach((item) => {
    const gpa = Math.floor(item.gpa); 
    if (!gpaCounts[gpa]) {
      gpaCounts[gpa] = 0;
    }
    gpaCounts[gpa]++;
  });

  
  const chartData = {
    labels: Object.keys(gpaCounts),
    datasets: [
      {
        label: 'GPA ',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        data: Object.values(gpaCounts),
      },
    ],
  };

  return (
    <div>
      <h2>Filter Data by GPA Range</h2>
      <div>
        <label>Minimum GPA:</label>
        <input type="number" value={minGPA} onChange={handleMinimum} />
      </div>
      <div>
        <label>Maximum GPA:</label>
        <input type="number" value={maxGPA} onChange={handleMaximum} />
      </div>
      <br />
      <div>
        <Bar
          data={chartData}
          options={{
            scales: {
              yAxes: [{ ticks: { beginAtZero: true } }],
            },
          }}
        />
      </div>
    </div>
  );
};

export default ChartComponent;
