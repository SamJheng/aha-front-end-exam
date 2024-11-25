import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import Showacse from "./pages/showcase";
import Home from "./pages/home";
import Search from "./pages/search";
import Result from "./pages/result";
import Tags from "./pages/tags";
import Profile from "./components/profile";
import { FollowProvider } from "./provider/follow";

export const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home />} >
      <Route index element={<Navigate to="search" replace />} />
      <Route path="search" element={<Search />} />
      <Route path="result" element={<Result/>}/>
    </Route>
    <Route path="/tags" element={<Tags />} />
    <Route path="/showcase" element={<Showacse />} />
    <Route path="/profile" element={
    <FollowProvider>
      <Profile/>
    </FollowProvider>} />
  </Route>
));
