import { EditIcon, EmailIcon, HamburgerIcon } from '@chakra-ui/icons';
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
import { UserInfoController } from './UserInfo.controller';
import { Group, Badge } from './UserInfo.styles';
import { GiFactory } from 'react-icons/gi';
import { CgWebsite } from 'react-icons/cg';

const UserInfoScreen: React.FC<UserInfoController> = ({
   user,
   handleChangeUser,
   goToRepositories,
}) => {
   return (
      <Flex p={5} h="100vh">
         <Flex flexDirection="column" w="100%" h="100%">
            <BackButton />
            <Box
               h="100%"
               display="flex"
               flexWrap="wrap"
               flexDirection="column"
               justifyContent="space-between">
               <Box display="flex" flexDirection="column" alignItems="center">
                  <Flex
                     p={2}
                     flexWrap="wrap"
                     alignItems="center"
                     justifyContent="space-evenly"
                     maxWidth={1000}>
                     <Flex
                        flexWrap="wrap"
                        flexDirection="column"
                        alignItems="center"
                        marginRight={10}>
                        <Avatar m={5} h={75} w={75} src={user?.avatar_url} />
                        <Text fontSize="lg" as="b">
                           {user?.name || '-'}
                        </Text>
                        <Text fontSize="lg" as="b" marginTop={1}>
                           {user?.login || '-'}
                        </Text>
                     </Flex>
                     <Badge>{user?.followers} Seguidores</Badge>
                     <Badge>{user?.following} seguindo</Badge>

                     <Button variant="none" p={0} onClick={goToRepositories}>
                        <Badge>
                           {user?.public_repos} repositórios
                           <HamburgerIcon marginLeft={2} />
                        </Badge>
                     </Button>

                     <Button variant="none" onClick={handleChangeUser}>
                        <Tooltip
                           color="white"
                           label="Alterar para este usuário"
                           bg="black">
                           <EditIcon h={25} w={25} />
                        </Tooltip>
                     </Button>
                  </Flex>

                  {user?.bio && (
                     <Flex flexDirection="column" marginTop={20}>
                        <Container maxW="3xl">
                           <Text fontSize="2xl" as="b">
                              Bio
                           </Text>
                           <Text
                              fontSize="2xl"
                              marginTop={5}
                              marginBottom={10}
                              textAlign="justify">
                              {user?.bio}
                           </Text>
                        </Container>
                     </Flex>
                  )}
               </Box>

               <Container maxW="2xl" centerContent paddingBottom={5}>
                  <Flex
                     w="100%"
                     display="flex"
                     justifyContent="space-between"
                     alignItems="center">
                     {user?.email && (
                        <Group>
                           <EmailIcon w={25} h={25} />
                           <Text marginLeft={5}>{user.email}</Text>
                        </Group>
                     )}
                     {user?.twitter_username && (
                        <Group>
                           <Twitter size={25} />
                           <Text marginLeft={5}>{user.twitter_username}</Text>
                        </Group>
                     )}
                     {user?.company && (
                        <Group>
                           <GiFactory size={25} color="white" />
                           <Text marginLeft={5}>{user.company}</Text>
                        </Group>
                     )}
                     {user?.blog && (
                        <Group>
                           <CgWebsite size={25} color="white" />
                           <Text marginLeft={5}>{user.blog}</Text>
                        </Group>
                     )}
                  </Flex>
               </Container>
            </Box>
         </Flex>
      </Flex>
   );
};

export { UserInfoScreen };
