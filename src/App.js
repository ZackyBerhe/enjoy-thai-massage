import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Datenschutz from './pages/Datenschutz';
import Home from './pages/Home';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="datenschutzerklärung" element={<Datenschutz />} />
        <Route
          path="datenschutzerklaerung"
          element={<Navigate to="/datenschutzerklärung" replace />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
