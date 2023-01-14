import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
   const navigate = useNavigate();
   const back = () => {
      navigate(-1);
   };
   return (
      <IconButton
         aria-label="Voltar"
         onClick={back}
         w={50}
         borderRadius={100}
         h={50}>
         <ArrowBackIcon w={25} h={25} />
      </IconButton>
   );
};

export { BackButton };
