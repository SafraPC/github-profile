import React from 'react';
import {
   Box,
   Heading,
   Stack,
   Tag,
   Badge,
   Button,
   Flex,
   Center,
   Text,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

interface UserCardProps {
   name: string;
   position: number;
   success: boolean;
   time: Date;
   repositories: number;
   onDelete: () => void;
   description: string;
}

const UserCard = ({
   position,
   name,
   description,
   success,
   time,
   repositories,
   onDelete,
}: UserCardProps) => {
   const navigate = useNavigate();
   const handleRepositoriesNavigate = () => {
      navigate(`/search/${name}`);
   };

   return (
      <Box p={5} shadow="md" borderWidth="1px" marginTop="4">
         <Link to={`/user/${position}`}>
            <Heading as="h3" size="lg">
               {name}
            </Heading>
         </Link>
         <Text mt={2} fontSize="sm" color="gray.500">
            {description}
         </Text>
         <Flex justifyContent="space-between">
            <Flex flexDirection="column">
               <Box>
                  <Stack isInline align="center" mt={2}>
                     <Tag size="sm">{success ? 'Sucesso' : 'Falha'}</Tag>
                  </Stack>
                  <Badge mt={2}>
                     Pesquisado:{' '}
                     {time?.toLocaleDateString('pt-BR', {
                        hour: 'numeric',
                        minute: 'numeric',
                        second: 'numeric',
                        hour12: false,
                     })}
                  </Badge>
                  <Stack isInline align="center" mt={2}>
                     <Button
                        variant="none"
                        p={0}
                        h={5}
                        onClick={handleRepositoriesNavigate}>
                        <Tag size="sm">
                           Total de repositórios : {repositories}{' '}
                           <HamburgerIcon h={18} w={18} marginLeft={5} />
                        </Tag>
                     </Button>
                  </Stack>
               </Box>
            </Flex>
            <Center justifyContent="flex-end">
               <Button variant="outline" mr={2} onClick={onDelete}>
                  Excluir
               </Button>
            </Center>
         </Flex>
      </Box>
   );
};

export { UserCard };
