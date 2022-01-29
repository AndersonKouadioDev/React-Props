import { Component } from "react/cjs/react.production.min";
import "jquery/dist/jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import "./App.css";
import Profil from "./profil/Profil";
import img from "./profil.jpg";

const handleName = (name) => alert(name);

class App extends Component {
  render() {
    return (
      <div className="container">
        <Profil
          fullName={"Anderson Kouadio"}
          bio={"Développeur Fullstrack depuis 3 ans, Développeur MERN"}
          profession={"Etudiant"}
          handleName={handleName}
        >
          {img}
        </Profil>
      </div>
    );
  }
}

export default App;
