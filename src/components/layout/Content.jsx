import React from "react";
import './Content.css'
import { Routes , Route } from "react-router-dom";
import About from "../../views/examples/About";
import Home from "../../views/examples/Home";
import Param from "../../views/examples/Param";
import NotFound from "../../views/examples/NotFound";


const Content = props => (
    <main className="Content">

        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/param/:id" element={<Param />}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>

        {/*Na aula foi estudado a propriedade 'exact' que atualmente está deprecated.
        link para mais informações: https://medium.com/@igorfelipe/react-router-6-0-o-que-tem-de-novo-9f1c3f51bd9b*/}

    </main>
)

export default Content
