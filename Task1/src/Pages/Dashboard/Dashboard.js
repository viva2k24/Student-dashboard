
import React, { useState } from "react";
import Record from "../../Data/Record.json";
import { ResponsiveContainer } from "recharts";
import SelectStudent from "../../Componenets/Main/Selection";
import GradeChart from "../../Componenets/Main/BasedonRegisterno";
import Header from "../../Componenets/Header/Header";
import { PieChart, Pie, Tooltip } from "recharts";
import "./Dashboard.css";
import DataFilter from "../../Componenets/Main/BasedonSemester";
import Records from '../../Data/Record.json'
import ChartComponent from "../../Componenets/Main/BaesdonGPA";

const Dashboard = () => {
  const [studentData] = useState(Record);
  const [selectedRegisterNumber, setSelectedRegisterNumber] = useState("0");
 

  const handleSelectChange = (event) => {
    setSelectedRegisterNumber(event.target.value);
  };


  const getGradeChartData = () => {
    const gradeColors = {
      A: "#8884d8", 
      B: "#82ca9d", 
      C: "#ffc658", 
      O: "#ff7f50", 
    };

    const gradeData = Record.reduce((acc, student) => {
      const grade = student.grade;
      acc[grade] = acc[grade] ? acc[grade] + 1 : 1;
      return acc;
    }, {});

    return Object.keys(gradeData).map((grade) => ({
      name: grade,
      value: gradeData[grade],
      fill: gradeColors[grade], 
    }));
  };

  const gradeChartData = getGradeChartData();
  return (
    <div className="main-container">
      <div className="grid-container">
        <Header />
        <div class="outer-box">
          <div className="compare">
            <div>
              <div>
                <DataFilter data={Records}/>
              </div>
              <h2>Filtering based on Register number</h2>
              <SelectStudent
                students={studentData}
                selectedRegisterNumber={selectedRegisterNumber}
                handleSelectChange={handleSelectChange}
              />
              <GradeChart
                students={studentData}
                selectedRegisterNumber={selectedRegisterNumber}
              />
              <ChartComponent data={Records} />
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <div className="charts">
                <h1>Grade Probability</h1>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart width={400} height={400}>
                    <Pie
                      dataKey="value"
                      isAnimationActive={false}
                      data={gradeChartData}
                      outerRadius={120}
                      fill="#fff"
                      label
                    />
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
