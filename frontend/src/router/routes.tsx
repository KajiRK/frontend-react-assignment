import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AddTicketsPage } from "../app/pages/add-tickets/AddTicketsPages";
import { TicketsListPage } from "../app/pages/tickets-list/TicketsListPage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AddTicketsPage />} />
      <Route path="/tickets" element={<TicketsListPage />} />
    </Routes>
  );
};

export default AppRoutes;
