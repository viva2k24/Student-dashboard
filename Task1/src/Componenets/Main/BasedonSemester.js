import React, { useState } from 'react';
import './BasedonSemester.css'
import { Bar } from 'react-chartjs-2';
const DataFilter = ({ data }) => {
  const [semester, setSemester] = useState('0');

  const handleChange = (e) => {
    setSemester(e.target.value);
  };

  // Filter the data based on the selected semester
  const filteredData = data.filter((item) => item.semester === semester);

  // Count grades for each semester
  const gradeCount = {};
  filteredData.forEach((item) => {
    if (!gradeCount[item.grade]) {
      gradeCount[item.grade] = 0;
    }
    gradeCount[item.grade]++;
  });

  // Prepare data for chart
  const chartData = {
    labels: Object.keys(gradeCount),
    datasets: [
      {
        label: 'Grade Count',
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
        data: Object.values(gradeCount),
      },
    ],
  };

  return (
    <div>
      <h2>Filter Data by Semester</h2>
      <br />
      <select value={semester} onChange={handleChange}>
        <option value="">Select semester</option>
        <option value="1">Semester 1</option>
        <option value="2">Semester 2</option>
        <option value="3">Semester 3</option>
        <option value="4">Semester 4</option>
        <option value="5">Semester 5</option>
      </select>
      <br /><br />
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

export default DataFilter;
