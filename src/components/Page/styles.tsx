import styled from 'styled-components';

export const Container = styled.div<{ totalScreen?: boolean }>`
   display: flex;
   height: ${({ totalScreen }) => (totalScreen ? '100vh' : '100%')};
   flex-direction: column;
`;

export const Content = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`;
