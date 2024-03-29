import React from "react";

const SelectStudent = ({ students, sel_reg, handleSelectChange }) => (
  <div>
    <select
      value={sel_reg}
      onChange={handleSelectChange}
    >
      <option value="">Select Student</option>
      {students.map((student) => (
        <option key={student.register_number} value={student.register_number}>
          {student.register_number}
        </option>
      ))}
    </select>
  </div>
);

export default SelectStudent;
