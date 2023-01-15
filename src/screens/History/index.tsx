import React from 'react';
import { historyController } from './History.controller';
import { HistoryScreen } from './History.screen';

const History: React.FC = () => {
   const { handleDelete, history } = historyController();
   return <HistoryScreen handleDelete={handleDelete} history={history} />;
};

export { History };
