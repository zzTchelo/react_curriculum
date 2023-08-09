import './App.css';
import Formacao from './main/formacao';
import Navbar from './navbar';
import Sidebar from './sidebar';
import formacoes from './dados/formacoes';
import Experiencia from './main/experiencia';
import experiencias from './dados/experiencias';

function App() {
  return (
      <div className='main'>
        <aside>
          <Sidebar />
        </aside>
        <div className='main-content'>
          <Navbar />
            { experiencias.map(experiencia =>
              <Experiencia 
                empresa = {experiencia.empresa}
                ano = {experiencia.ano}
                cargo = {experiencia.cargo}
                cidade = {experiencia.cidade}
                tecnologias = {experiencia.tecnologias}
              />
            )}




            {/* {formacoes.map(formacao => 
              <Formacao 
                curso = {formacao.curso}
                faculdade = {formacao.faculdade}
                cidade = {formacao.cidade}
                ano = {formacao.ano}
              />
            )} */}
        </div>
      </div>
    );
  }
  
export default App;