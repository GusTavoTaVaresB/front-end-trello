import { Routes, Route } from "react-router-dom";
import Trello from "./pages/trello";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { UserProvider } from "./contexts/userContext";



export function Router() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="trello" element={<Trello />} />
        </Route>
      </Routes>
    </UserProvider>
  );
}
