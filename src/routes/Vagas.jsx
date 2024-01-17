import React from "react";
import '../Styles/Vagas.css';

const Vagas = () => {
  return (
    
    <div className="contain-main">

        <div class="contain-main__title">
            <h1>Vagas Intervalo</h1>
        </div>

    <div id="counter">
        <div>
            <span id="value">
                0
            </span>
            <span id="division">
                /
            </span>
            <span id="limit">
                5
            </span>
        </div>

        <button id="ocupar" onclick="">
           Ocupar Vaga
        </button>

        <button id="liberar" onclick="">
            Liberar Vaga 
        </button>
    </div>

    <button id="linkAdmin"  class="hidden" onclick="alterar()"> <i class="fa-solid fa-sliders"></i> Ajustar Limite De Vagas</button>

  </div>
    );
};

export default Vagas;