import React from "react";
import LandingPage from "./pages/LandingPage";
import MusicPage from "./pages/MusicPage";

const routes = {};

routes["/search"] = () => <LandingPage />;
routes["/search/:search/:filter"] = ({ search, filter }) => (
  <MusicPage search={search} filter={filter} />
);
routes["/search/:search/:filter/:explicit"] = ({ search, filter, explicit }) => (
  <MusicPage search={search} filter={filter} explicit={explicit} />
);
routes["/search/:search/:filter/:explicit/:yearfrom/:yearto"] = ({
  search,
  filter,
  explicit,
  yearfrom,
  yearto,
}) => (
  <MusicPage
    search={search}
    filter={filter}
    explicit={explicit}
    yearFrom={yearfrom}
    yearTo={yearto}
  />
);

export default routes;
