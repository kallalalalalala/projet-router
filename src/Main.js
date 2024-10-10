// Main.js
import React from 'react';
import { SimpleGrid, Box, Heading, Center } from '@chakra-ui/react';
import filmsList from './Mouvies'; // Importez la liste de films
import FilmCard from './Card';

const Main = () => {
    // Récupérez les cinq premiers films de la liste
    const fiveFilms = filmsList.slice(0, 8);

    return (
        <Center>
        <Box p={5}>
            <Heading textAlign={'center'} mb={5}>Liste des Films</Heading>
            <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={5}>
                {fiveFilms.map((film, index) => (
                    <FilmCard key={index} film={film} index={index} />
                ))}
            </SimpleGrid>
        </Box>
        </Center>
    );
};

export default Main;
