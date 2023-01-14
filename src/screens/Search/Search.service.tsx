import api from 'src/service/api';
import { validateError } from 'src/utils/validateAxiosError';
import { RepositoriesDTO } from './application/Search.dto';

type RequestReposResponse =
   | {
        data: RepositoriesDTO;
        error: false;
     }
   | {
        error: true;
        message: string;
     };

export const requestRepositories = async (
   username: string
): Promise<RequestReposResponse> => {
   try {
      const response = await api.get(`/users/${username}/repos`);
      return {
         data: response.data as RepositoriesDTO,
         error: false,
      };
   } catch (error) {
      const message = validateError({
         error,
         genericMessage:
            'Houve um problema ao buscar os repositórios, tente novamente mais tarde',
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
