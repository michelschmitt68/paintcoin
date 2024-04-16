import React, { useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

interface ColorPaletteProps {
  onColorChange: (color: number | null) => void; // Définir le type de la fonction de rappel
}

const ColorPalette: React.FC<ColorPaletteProps> = ({ onColorChange }) => {
  const [mainBoxColor, setMainBoxColor] = useState(""); // Couleur de fond de la boîte principale

  // Fonction pour gérer le clic sur une couleur de la palette
  const handleColorClick = (color: number | null) => {
    onColorChange(color); // Appeler la fonction de rappel avec le nombre de la couleur ou null
  };

  return (
    <Flex 
      alignItems="center"
      direction="column"
      padding="10px"
      height="100%"
      margin="50px"
      width="20vh"
      className='colorPalette'
    > 
    <br></br>
    <Box 
        w="50px" 
        h="50px" 
        bg="white" 
        borderRadius="50%" 
        border= "5px solid rgb(119 90 54)"
        onClick={() => handleColorClick(0)} // Gérer le clic sur la couleur verte
        style={{ cursor: 'pointer' }} // Définir le curseur sur pointer pour indiquer que la boîte est cliquable
      />
    <br></br>
      <Box 
        w="50px" 
        h="50px" 
        bg="blue"  
        borderRadius="50%" 
        border= "5px solid rgb(119 90 54)"
        onClick={() => handleColorClick(1)} // Gérer le clic sur la couleur bleue
        style={{ cursor: 'pointer' }} // Définir le curseur sur pointer pour indiquer que la boîte est cliquable
      />
      <br></br>
      <Box 
        w="50px" 
        h="50px" 
        bg="red" 
        borderRadius="50%" 
        border= "5px solid rgb(119 90 54)"
        onClick={() => handleColorClick(2)} // Gérer le clic sur la couleur rouge
        style={{ cursor: 'pointer' }} // Définir le curseur sur pointer pour indiquer que la boîte est cliquable
      />
      <br></br>      
      <Box 
        w="50px" 
        h="50px" 
        bg="green" 
        borderRadius="50%" 
        border= "5px solid rgb(119 90 54)"
        onClick={() => handleColorClick(3)} // Gérer le clic sur la couleur verte
        style={{ cursor: 'pointer' }} // Définir le curseur sur pointer pour indiquer que la boîte est cliquable
      />

    </Flex>
  );
};

export default ColorPalette;