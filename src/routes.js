import React from "react";
import LandingPage from "./pages/LandingPage";
import MusicPage from "./pages/MusicPage";

const routes = {};

routes["/search/"] = () => <LandingPage />;
routes["/search/:search/:filter"] = ({ search, filter }) => (
  <MusicPage search={search} filter={filter} />
);

export default routes;
