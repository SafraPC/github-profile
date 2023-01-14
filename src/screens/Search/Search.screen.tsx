import React, { useState } from 'react';
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

   const submit = () => {
      getRepositories(username);
   };

   return (
      <Page>
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
         <SubmitButton enabled={isHistoryEnabled}>
            <SubmitLabel>Histórico</SubmitLabel>
         </SubmitButton>
      </Page>
   );
};

export { SearchScreen };
