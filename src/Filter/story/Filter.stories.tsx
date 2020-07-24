import React from "react";
import { Filter } from "../Filter";

export default {
  title: "Filter",
};

export const identFilters = () => (
  <Filter
    onSubmitFn={(d) => console.log(d)}
    regions={["United Kindom", "France", "United States", "Middle East"]}
    statuses={["Consent Received", "Consent Revoked", "Previewed", "Encoded"]}
  />
);
