import { AxiosError } from 'axios';

interface ValidateErrorProps {
   error: unknown;
   genericMessage: string;
}
const validateError = ({
   error,
   genericMessage,
}: ValidateErrorProps): string => {
   if (error instanceof AxiosError) {
      const message = error?.response?.data?.message;
      if (message) {
         return message;
      }
      return genericMessage;
   }

   return genericMessage;
};

export { validateError };
