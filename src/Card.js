// FilmCard.js
import React from 'react';
import { Box, Image, Text, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const FilmCard = ({ film, index }) => {
    return (
        <Box borderWidth={2} borderRadius="md" p={4} width="300px">
            <Link to={`/film/${index}`}> {/* Ajout du lien ici */}
                <Image src={film.posterURL} alt={film.title} borderRadius="md" />
            </Link>
            <Heading size="md" mt={2}>{film.title}</Heading>
            <Text mt={2}>{film.description}</Text>
            <Text mt={2}>Rating: {film.rating}</Text>
        </Box>
    );
};

export default FilmCard;
