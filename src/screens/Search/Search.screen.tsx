import React from 'react';
import { Page } from 'src/components/Page/intex';
import { SearchController } from './Search.controller';
import { Input, Label, SubmitButton, SubmitLabel } from './Search.styles';

const SearchScreen: React.FC<SearchController> = () => {
   return (
      <Page>
         <Label>Busque um usuário do github!</Label>
         <Input placeholder="ex: SafraPC" />
         <SubmitButton>
            <SubmitLabel>Buscar</SubmitLabel>
         </SubmitButton>
         <SubmitButton>
            <SubmitLabel>Histórico</SubmitLabel>
         </SubmitButton>
      </Page>
   );
};

export { SearchScreen };
