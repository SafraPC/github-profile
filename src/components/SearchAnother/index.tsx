import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi';

const SearchAnother = () => {
   const navigate = useNavigate();
   const goToSearch = () => {
      navigate('/search');
   };
   return (
      <IconButton
         aria-label="Pesquisar outro"
         onClick={goToSearch}
         w={50}
         marginLeft={5}
         borderRadius={100}
         h={50}>
         <BiSearchAlt size={25} color="white" />
      </IconButton>
   );
};

export { SearchAnother };
