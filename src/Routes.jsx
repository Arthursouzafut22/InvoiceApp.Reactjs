import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Pages/Main/Main";
import IvoiceId from "./Pages/IvoiceId/IvoiceId";

const Globalrouting = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="invoice/:id" element={<IvoiceId />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Globalrouting;
