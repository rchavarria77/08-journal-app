import { Navigate, Route, Routes } from 'react-router-dom';
import { JournalPage } from '../pages/JournalPage';

export const JournalRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<JournalPage />} />

      {/* Default Route */}
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
