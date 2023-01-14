import React from 'react';
import { Box, Link, Heading, Text, Stack, Tag, Badge } from '@chakra-ui/react';

interface RepoCardProps {
   name: string;
   id: string;
   description: string;
   language?: string;
   lastUpdate: string;
}

const RepoCard = ({
   description,
   id,
   language,
   lastUpdate,
   name,
}: RepoCardProps) => (
   <Box p={5} shadow="md" borderWidth="1px" marginTop="4">
      <Link href={`https://github.com/${id}/${name}`} isExternal>
         <Heading as="h3" size="lg">
            {name}
         </Heading>
      </Link>
      <Text mt={2}>{description}</Text>
      <Stack isInline align="center" mt={2}>
         <Tag size="sm">{language}</Tag>
      </Stack>
      <Badge mt={2}>Atualizado em: {lastUpdate}</Badge>
   </Box>
);

export { RepoCard };
