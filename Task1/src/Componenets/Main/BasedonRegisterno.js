import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const GradeChart = ({
  students,
  selectedRegisterNumber,
}) => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    
    const filteredStudents = students.filter((student) => {
      return (
        (!selectedRegisterNumber ||
          student.register_number.toString() === selectedRegisterNumber)
      );
    });
    const gradeCounts = filteredStudents.reduce((counts, student) => {
      counts[student.grade] = (counts[student.grade] || 0) + 1;
      return counts;
    }, {});

    setChartData({
      labels: Object.keys(gradeCounts),
      datasets: [
        {
          label: "Grade Distribution",
          data: Object.values(gradeCounts),
          backgroundColor: [
            "rgba(255, 99, 132, 0.5)",
            "rgba(54, 162, 235, 0.5)",
            "rgba(255, 206, 86, 0.5)",
            "rgba(75, 192, 192, 0.5)",
            "rgba(153, 102, 255, 0.5)",
            "rgba(255, 159, 64, 0.5)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    });
    setChartOptions({
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            precision: 0,
          },
        },
        x: {
          title: {
            display: true,
            text: "Grades",
          },
        },
      },
      plugins: {
        legend: {
          display: true,
          position: "top",
        },
        title: {
          display: true,
        },
      },
      maintainAspectRatio: false,
    });
  }, [students, selectedRegisterNumber]);

  return (
    <div style={{ height: "400px", width: "100%", color: "white" }}>
      
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default GradeChart;
