import React from "react";
import LandingPage from "./pages/LandingPage";
import MusicPage from "./pages/MusicPage";

const routes = {};

routes["/"] = () => <LandingPage />;
routes["/search/:search"] = ({ search }) => <MusicPage search={search} />;

export default routes;
