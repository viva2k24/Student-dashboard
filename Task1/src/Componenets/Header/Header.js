import "./Header.css";
import {BsPersonCircle , BsBookmarkStarFill} from 'react-icons/bs'

const header = () => {
  return (
   <header className="header">
      <BsBookmarkStarFill />
      <h1>Welcome to student dashboard</h1>
      <BsPersonCircle/>
    </header>
  );
};

export default header;