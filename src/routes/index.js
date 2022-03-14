import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/** Pages */
import Calendar from '../pages/Calendar';

const RoutesComponent = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Calendar />} />
    </Routes>
  </BrowserRouter>
);

export default RoutesComponent;
