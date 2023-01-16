import { Button, ButtonProps, Input as ChakraInput } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import styled from 'styled-components';

interface SubmitButtonProps extends ButtonProps {
   enabled: boolean;
   loading: boolean;
}

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

export const Content = styled.div`
   display: absolute;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
`;

export const Input = styled(ChakraInput).attrs(({ theme }) => ({
   size: 'md',
   backgroundColor: theme.colors.input,
   focusBorderColor: theme.colors.input,
   borderColor: theme.colors.input,
   textColor: 'white',
   maxWidth: 750,
   _placeholder: { color: theme.colors.placeholder },
}))`
   width: 50% !important;
   margin-top: ${({ theme }) => theme.spacing.xl}px;
`;

export const Label = styled(Text).attrs(({ theme }) => ({
   fontSize: '2xl',
   color: theme.colors.text,
}))`
   text-align: center;
`;
