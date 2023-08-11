import { Route, Routes } from "react-router-dom";
import Formacao from "./main/formacao";
import Experiencia from "./main/experiencia";
import Projetos from "./main/projetos";
import Habilidades from "./main/habilidades";
import Certificados from "./main/certificados";

const Router = () => {
    return (
        <Routes>
            <Route 
                path='/Formacoes'
                element= {<Formacao />} 
            />

            <Route
                path='/Experiencias'
                element={<Experiencia />}
            />

            <Route 
                path='/Certificados' 
                element={<Certificados />}
            />

            <Route 
                path='/Habilidades' 
                element={<Habilidades />}
            />

            <Route 
                path='/Projetos' 
                element={<Projetos />}
            />
        </Routes>  
    )
}

export default Router;