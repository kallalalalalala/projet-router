// FilmDescription.js
import React from 'react';
import { Box, Heading, Text, Image } from '@chakra-ui/react';
import { useParams, Link } from 'react-router-dom';
import filmsList from './Mouvies'; 
import { Button } from '@chakra-ui/react'

const FilmDescription = () => {
    const { id } = useParams(); // Récupérer l'ID du film à partir de l'URL
    const film = filmsList[id]; // Obtenez le film correspondant à l'ID

    return (
        <Box p={5}>
            <Link to="/"><Button colorScheme='teal' variant='outline'>
    Back to Home
  </Button></Link>
            {film ? (
                <>
                    <Heading>{film.title}</Heading>
                    <Image src={film.posterURL} alt={film.title} borderRadius="md" />
                    <Text mt={4}>{film.description}</Text>
                    <Text mt={2}>Rating: {film.rating}</Text>
                </>
            ) : (
                <Text>Film non trouvé</Text>
            )}
        </Box>
    );
};

export default FilmDescription;
