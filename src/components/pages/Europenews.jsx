import React from "react";
import Newscards from "./Newscards";

const Europenews = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center justify-center mt-10 gap-y-10 antialiased">
      <Newscards country="Europe" />
    </div>
  );
};

export default Europenews;
