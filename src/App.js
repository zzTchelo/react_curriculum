import './App.css';
import Formacao from './main/formacao';
import Navbar from './navbar';
import Sidebar from './sidebar';

const formacoes = [{
  curso : 'Análise e Desenvolvimento de Sistemas',
  faculdade : 'Fatec de Ourinhos',
  cidade : 'Ourinhos, SP',
  ano : '2023 - Atual'
},
{
  curso : 'Segurança da Informação',
  faculdade : 'Fatec de Ourinhos',
  cidade : 'Ourinhos, SP',
  ano : '2020 - 2022'
}]

function App() {
  return (
      <div className='main'>
        <aside>
          <Sidebar />
        </aside>
        <div className='main-content'>
          <Navbar />
            {formacoes.map(formacao => 
              <Formacao 
                curso = {formacao.curso}
                faculdade = {formacao.faculdade}
                cidade = {formacao.cidade}
                ano = {formacao.ano}
              />
            )}
        </div>
      </div>
    );
  }
  
export default App;