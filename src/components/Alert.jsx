import React from 'react';

export const Alert = (props) => {
  const { children } = props;
  const alertStyle = {
    backgroundColor: 'rgb(252 165 165)',
    color: 'rgb(220 38 38)',
    minHeight: '75px',
    fontSize: '1.25rem',
    borderRadius: '0.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '1.5rem',
  };
  return (
    <div style={alertStyle}>
      <span>
        {children}
      </span>
    </div>
  );
};
