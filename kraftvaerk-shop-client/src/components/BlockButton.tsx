import React from "react";
import Button from "react-bootstrap/Button";

interface BlockButtonProps {
  text: string;
}

export const BlockButton: React.FC<BlockButtonProps> = ({ text }) => {
  return (
    <Button variant="primary" block>
      {text}
    </Button>
  );
};
