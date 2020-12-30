import React from "react";
import { CenterWrapper } from "./wrappers/CenterWrapper";
import Spinner from "react-bootstrap/Spinner";

export const CenteredSpinner: React.FC = () => {
  return (
    <CenterWrapper>
      <Spinner animation="border" variant="primary" />
    </CenterWrapper>
  );
};
