import React from "react";
import { HomeStyled } from "../../styles/style";
import NavBar from "../NavBar/NavBar";
import html from "../../guideApp/languages/html.png";
import css from "../../guideApp/languages/css.png";
import figma from "../../guideApp/languages/figma.png";
import js from "../../guideApp/languages/js.png";
import ux from "../../guideApp/languages/ux.png";

const Home = () => {
  const value = {'--value':25}
  return (
    <HomeStyled>
      <h3>Practica tus conocimientos en la categoría que prefieras</h3>
      <div className="opciones">
        <div className="row1">
          <div className="item">
            <div className="fill"  role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={value}>
            <div className="progressRound">
            <img src={html} alt="logo"></img>
            </div>
              
              
            </div>
            <p>HTMl</p>
          </div>
        </div>
        <div className="row2">
          <div className="item">
          <div className="fill"  role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{'--value':3}}>
          <div className="progressRound">
            <img src={css} alt="logo"></img>
            </div>
            </div>
            <p>CSS</p>
          </div>
          
          <div className="item">
          <div className="fill"  role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{'--value':13}}>
          <div className="progressRound">
            <img src={figma} alt="logo"></img>
            </div>
            </div>
            <p>FIGMA</p>
          </div>
        </div>
        <div className="row3">
          <div className="item">
          <div className="fill"  role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{'--value':55}}>
          <div className="progressRound">
            <img src={js} alt="logo"></img>
            </div>
            </div>
            <p>JS</p>
          </div>
          <div className="item">
          <div className="fill"  role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{'--value':13}}>
          <div className="progressRound">
            <img src={ux} alt="logo"></img>
            </div>
            </div>
            <p>UX</p>
          </div>
        </div>
      </div>
      
      <NavBar />
    </HomeStyled>
  );
};

export default Home;
