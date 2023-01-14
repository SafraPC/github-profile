import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Page } from 'src/components/Page/intex';
import { SearchController } from './Search.controller';
import { Input, Label, SubmitButton, SubmitLabel } from './Search.styles';

const SearchScreen: React.FC<SearchController> = ({
   getRepositories,
   loading,
   isHistoryEnabled,
}) => {
   const [username, setUsername] = useState('');
   const isSearchButtonEnabled = username.length > 0;
   const navigate = useNavigate();

   const submit = () => {
      getRepositories(username);
   };

   const goToHistory = () => {
      navigate(`/history`);
   };

   return (
      <Page totalScreen>
         <Label>Busque um usuário do github!</Label>
         <Input
            placeholder="ex: SafraPC"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
               setUsername(e.target.value);
            }}
         />
         <SubmitButton
            loading={loading}
            enabled={isSearchButtonEnabled}
            onClick={submit}>
            <SubmitLabel>Buscar</SubmitLabel>
         </SubmitButton>
         <SubmitButton enabled={isHistoryEnabled} onClick={goToHistory}>
            <SubmitLabel>Histórico</SubmitLabel>
         </SubmitButton>
      </Page>
   );
};

export { SearchScreen };
