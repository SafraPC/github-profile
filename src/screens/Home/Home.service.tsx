import api from 'src/service/api';
import { validateError } from 'src/utils/validateAxiosError';
import { UserInfoDTO } from './application/Home.dto';

type RequestUserResponse =
   | {
        data: UserInfoDTO;
        error: false;
     }
   | {
        error: true;
        message: string;
     };

export const requestUser = async (
   username: string
): Promise<RequestUserResponse> => {
   try {
      const response = await api.get(
         `https://api.github.com/users/${username}`
      );
      return {
         data: response.data as UserInfoDTO,
         error: false,
      };
   } catch (error) {
      const message = validateError({
         error,
         genericMessage:
            'Houve um problema ao buscar o usuário, tente novamente mais tarde',
      });

      const messageFormatted = message.includes('Not Found')
         ? 'Usuário não encontrado'
         : message;

      return {
         error: true,
         message: messageFormatted,
      };
   }
};
