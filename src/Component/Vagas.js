
import React from 'react';

const value = document.getElementById('value');
const ocuparButton = document.getElementById ('ocupar');
const liberarButton = document.getElementById ('liberar');
const limitValue = document.getElementById("limit");
const linkAlterar = document.getElementById('linkAdmin');

var count = 0;
let contador = parseInt(localStorage.getItem('count')) || 0;
let contadorlimit = parseInt(localStorage.getItem('limit')) || 0;


limitValue.innerHTML = parseInt(contadorlimit)
value.innerHTML = contador;

ocuparButton.addEventListener('click', () => {
    count += 1;
    localStorage.setItem('count', count);

    if (count >= 1){
        ocuparButton.disabled = true;
    } {
        liberarButton.disabled = false;
    }
        updateValue2();
    });

liberarButton.addEventListener('click', () => {
    if (count == 0) {
        
    } else {count -= 1} 
        localStorage.setItem('count', count);

    if (count <= 1) {
        ocuparButton.disabled = null;
    } {
        liberarButton.disabled = true;
    }
        updateValue2();
});

linkAlterar.addEventListener('click', () => {
    location.href = "/Vagas-editar.html";
});

const updateValue2 = () => {
    value.innerHTML = count;
};

function Vagas() {
  return (
    <div className="contain-main">
      <div className="contain-main__title">
        <h1>Vagas Intervalo</h1>
      </div>

      <div id="counter">
        <div>
          <span id="value">0</span>
          <span id="division">/</span>
          <span id="limit">5</span>
        </div>

        <button id="ocupar" onClick={() => {/* Adicione lógica para a função ocupar */}}>
          <i className="fa-solid fa-lock"></i> Ocupar Vaga
        </button>

        <button id="liberar" onClick={() => {/* Adicione lógica para a função liberar */}}>
          <i className="fa-solid fa-lock-open"></i> Liberar Vaga
        </button>
      </div>

      <button id="linkAdmin" className="hidden" onClick={alterar}>
        <i className="fa-solid fa-sliders"></i> Ajustar Limite De Vagas
      </button>
    </div>
  );
}

export default Vagas;
