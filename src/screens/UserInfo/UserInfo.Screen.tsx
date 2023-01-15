import {
   EditIcon,
   EmailIcon,
   HamburgerIcon,
   InfoIcon,
   LinkIcon,
} from '@chakra-ui/icons';
import {
   Avatar,
   Box,
   Button,
   Container,
   Flex,
   Text,
   Tooltip,
} from '@chakra-ui/react';
import React from 'react';
import { Twitter } from 'react-feather';
import { BackButton } from 'src/components/BackButton';
import { Group, Badge } from './UserInfo.styles';

const UserInfoScreen: React.FC = () => {
   return (
      <Flex p={5}>
         <Flex flexDirection="column" w="100%" h="100%">
            <BackButton />
            <Box
               h="100%"
               display="flex"
               flexDirection="column"
               justifyContent="space-between">
               <Box display="flex" flexDirection="column" alignItems="center">
                  <Flex
                     p={2}
                     alignItems="center"
                     justifyContent="space-evenly"
                     maxWidth={1000}>
                     <Avatar m={5} h={75} w={75} />
                     <Flex flexDirection="column" m={5}>
                        <Text>Nome</Text>
                        <Text marginTop={1}>Nome2</Text>
                     </Flex>
                     <Badge>10 seguidores</Badge>
                     <Badge>10 seguindo</Badge>

                     <Button variant="none">
                        <Badge>
                           10 repositórios <HamburgerIcon marginLeft={5} />
                        </Badge>
                     </Button>

                     <Button variant="none">
                        <Tooltip
                           color="white"
                           label="Alterar para este usuário"
                           bg="black">
                           <EditIcon h={25} w={25} />
                        </Tooltip>
                     </Button>
                  </Flex>

                  <Flex flexDirection="column" marginTop={10}>
                     <Container maxW="3xl">
                        <Text fontSize="2xl" as="b">
                           Bio
                        </Text>
                        <Text
                           fontSize="2xl"
                           marginTop={5}
                           marginBottom={10}
                           textAlign="justify">
                           Lorem ipsum dolor sit, amet consectetur adipisicing
                           elit. Delectus, optio officiis. Soluta impedit
                           molestiae unde autem minima et quae. Tempore Lorem
                           ipsum dolor sit, amet consectetur adipisicing elit.
                           Delectus, optio officiis. Soluta impedit molestiae
                           unde autem minima et quae. Tempore Lorem ipsum dolor
                           sit, amet consectetur adipisicing elit. Delectus,
                           optio officiis. Soluta impedit molestiae unde autem
                           minima et quae. Tempore Lorem ipsum dolor sit, amet
                           consectetur adipisicing elit. Delectus, optio
                           officiis. Soluta impedit molestiae unde autem minima
                           et quae. Tempore Lorem ipsum dolor sit, amet
                           consectetur adipisicing elit. Delectus, optio
                           officiis. Soluta impedit molestiae unde autem minima
                           et quae. Tempore Lorem ipsum dolor sit, amet
                           consectetur adipisicing elit. Delectus, optio
                           officiis. Soluta impedit molestiae unde autem minima
                           et quae. Tempore Lorem ipsum dolor sit, amet
                           consectetur adipisicing elit. Delectus, optio
                           officiis. Soluta impedit molestiae unde autem minima
                           et quae. Tempore Lorem ipsum dolor sit, amet
                           consectetur adipisicing elit. Delectus, optio
                           officiis. Soluta impedit molestiae unde autem minima
                           et quae. Tempore Lorem ipsum dolor sit, amet
                           consectetur adipisicing elit. Delectus, optio
                           officiis. Soluta impedit molestiae unde autem minima
                           et quae. Tempore
                        </Text>
                     </Container>
                  </Flex>
               </Box>

               <Container maxW="2xl" centerContent paddingBottom={5}>
                  <Flex
                     w="100%"
                     display="flex"
                     justifyContent="space-between"
                     alignItems="center">
                     <Group>
                        <EmailIcon w={25} h={25} />
                        <Text marginLeft={5}>Email</Text>
                     </Group>
                     <Group>
                        <Twitter size={25} />
                        <Text marginLeft={5}>Email</Text>
                     </Group>
                     <Group>
                        <InfoIcon w={25} h={25} />
                        <Text marginLeft={5}>Company</Text>
                     </Group>
                     <Group>
                        <LinkIcon w={25} h={25} />
                        <Text marginLeft={5}>Email</Text>
                     </Group>
                  </Flex>
               </Container>
            </Box>
         </Flex>
      </Flex>
   );
};

export { UserInfoScreen };
