import { Button, ButtonProps, Input as ChakraInput } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import styled from 'styled-components';

interface SubmitButtonProps extends ButtonProps {
   enabled: boolean;
   loading: boolean;
}

export const Container = styled.main`
   height: 100vh;
   width: 100vw;
   display: flex;
   padding: ${({ theme }) => theme.spacing.xl}px;
   align-items: center;
   justify-content: center;
`;

export const SubmitLabel = styled(Text).attrs({
   fontSize: 'xl',
   color: 'white',
})``;

export const SubmitButton = styled(Button).attrs<SubmitButtonProps>(
   ({ theme, enabled, loading }) => ({
      isLoading: loading,
      isDisabled: !enabled,
      backgroundColor: theme.colors.button,
   })
)<SubmitButtonProps>`
   margin-top: ${({ theme }) => theme.spacing.xl}px;
`;

export const Input = styled(ChakraInput).attrs(({ theme }) => ({
   size: 'md',
   backgroundColor: theme.colors.input,
   focusBorderColor: theme.colors.input,
   borderColor: theme.colors.input,
   textColor: 'white',
   _placeholder: { color: theme.colors.placeholder },
}))`
   width: 50%;
   margin-top: ${({ theme }) => theme.spacing.xl}px;
`;

export const Label = styled(Text).attrs(({ theme }) => ({
   fontSize: '2xl',
   color: theme.colors.text,
}))`
   text-align: center;
`;
