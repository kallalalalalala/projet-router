// App.js
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Main';
import FilmDescription from './Description'; // Nouveau composant pour la description

const App = () => {
    return (
        <ChakraProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/film/:id" element={<FilmDescription />} />
                </Routes>
            </Router>
        </ChakraProvider>
    );
};

export default App;
