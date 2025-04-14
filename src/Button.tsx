import React, { useState } from 'react';

type ButtonProps = {
  label: string;
  onClick: () => Promise<void>;
  isdisabled: boolean;
};

export const Button: React.FC<ButtonProps> = ({ label, onClick, isdisabled = false}) => {
  const [disabled, setDisabled] = useState(isdisabled);

  const handleClick = async () => {
      setDisabled(true);
      await onClick();
      setDisabled(false);
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
