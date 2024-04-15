import React from "react";
import { SearchContext } from "./searchProvider.jsx";

function useSearchContext() {
  return React.useContext(SearchContext);
}

export { useSearchContext };
