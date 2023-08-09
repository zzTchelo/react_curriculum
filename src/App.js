import {BrowserRouter, Route, Routes } from 'react-router-dom'

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
              <Routes>
                <Route 
                  path='/Formacoes'
                  element={formacoes.map(formacao => 
                  <Formacao 
                    curso = {formacao.curso}
                    faculdade = {formacao.faculdade}
                    cidade = {formacao.cidade}
                    ano = {formacao.ano}
                  />
                  )} 
                />

                <Route
                  path='/Experiencias'
                  element={ experiencias.map(experiencia =>
                    <Experiencia 
                      empresa = {experiencia.empresa}
                      ano = {experiencia.ano}
                      cargo = {experiencia.cargo}
                      cidade = {experiencia.cidade}
                      tecnologias = {experiencia.tecnologias}
                    />
                  )}
                />
              </Routes>    
        </div>
      </div>
    );
  }
  
export default App;