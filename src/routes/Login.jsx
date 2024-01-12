import '../Styles/Login.css';
import { FaUserAlt } from "react-icons/fa";
import { FaKey } from "react-icons/fa";

function logar() { // Inicio Login
  var matricula = document.getElementById('Matricula').value;
  var senha = document.getElementById('Senha').value;

  if ((matricula === 'admin' || matricula === 'user') && senha === matricula) {
    alert('Login bem-sucedido!');
    window.location.href = "Vagas.jsx"; 
    localStorage.setItem('Matricula', matricula);
  } else {
    alert('Matrícula ou senha incorretos');
  }
}

function exibirLinkAdmin() {
  const matricula = localStorage.getItem('Matricula');
  if (matricula === 'admin') {
    const linkAdmin = document.getElementById('linkAdmin');
    if (linkAdmin) {
      linkAdmin.classList.remove('hidden');
    }
  }
}

exibirLinkAdmin() // Fim login



function App() {
  return (

    <body>
    
    <main id="container">

      <form id="login_form">

        <div id="form_header">

        <h1>Login</h1>

          <div id="inputs">

            <div className="input-box">

              <label htmlFor="Matricula">
                Matrícula
                <div className="input-field">

                <FaUserAlt />
                  
                  <input type="text" id="Matricula" name="Matricula" />

                </div>

              </label>

            </div>

          </div>

          <div id="inputs">

            <div className="input-box">

              <label htmlFor="Senha">
                Senha
                <div className="input-field">

                <FaKey />

                  <input type="password" id="Senha" name="Senha" />
                </div>

              </label>

            </div>

          </div>

        </div>

        <button type="submit" id="login-button" onClick={() => logar()}>
          Login
        </button>

      </form>

    </main>

    </body>
  );
}

export default App;
