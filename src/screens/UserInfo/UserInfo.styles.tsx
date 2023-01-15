import { Badge as BadgeChakra, Link } from '@chakra-ui/react';
import styled from 'styled-components';

export const Group = styled(Link)`
   display: flex;
`;

export const Badge = styled(BadgeChakra).attrs({
   variant: 'outline',
   m: 4,
   p: 4,
   h: 10,
   display: 'flex',
   alignItems: 'center',
})``;
