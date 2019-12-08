import React from 'react';

function Button(label) {
  return (
    <>
      <style type='text/css'>
        {`
            .btn-blue {
            background-color: blue;
            color: white;
            }
    `}
      </style>
      <button variant='primary'>{label.title}</button>
    </>
  );
}

export default Button;
