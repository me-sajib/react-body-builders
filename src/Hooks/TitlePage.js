import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const TitlePage = ({ title }) => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{title}</title>
        </Helmet>
      </HelmetProvider>
    </>
  );
};

export default TitlePage;
