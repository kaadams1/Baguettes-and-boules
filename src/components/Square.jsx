import Baguettes from '../images/crossed-baguettes.png';
import Boule from '../images/round-boule.png';

const styleSquare = {
  background: "lightblue",
  border: "2px solid black",
  fontSize: "30px",
  fontWeight: "800",
  cursor: "pointer",
  outline: "none",
};


const Square = ({ value, onClick }) => {
  function getImage() {
    if (value === "X") {
      return <img src={Baguettes} width="120px" alt="X" />
    }

    if (value === "O") {
      return <img src={Boule} width="120px" alt="O" />
    }

    return null;

  }



  return <button style={styleSquare} onClick={onClick}>
    {getImage()}
  </button>
};

export default Square;