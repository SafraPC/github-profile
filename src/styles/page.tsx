import styled from 'styled-components';

export const Container = styled.main`
   height: 100vh;
   width: 100vw;
   display: flex;
   padding: ${({ theme }) => theme.spacing.xl}px;
   align-items: center;
   justify-content: center;
`;
