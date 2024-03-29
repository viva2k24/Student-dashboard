import { useState } from "react";
import Record from "../../Data/Record.json";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [registerNumber, setRegisterNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const student = Record.find(
      (student) =>
        student.register_number === registerNumber &&
        student.password === password
    );
    if (student) {
      navigate(`/dashboard/${student.register_number}`);
      
    } else {
      alert("Login Failed");
    }
  };

  return (
    <div className="page">
      <div className="cover">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={registerNumber} placeholder="Register Number"
              onChange={(e) => setRegisterNumber(e.target.value)} required
            />
            <input
              type="password"
              value={password} placeholder="Password"
              onChange={(e) => setPassword(e.target.value)} required
            />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
