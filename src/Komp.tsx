import React from 'react';

interface ComponentProps {
  text: string;
}

const Component:
React.FC<ComponentProps> = ({text}) => {
  return(
    <div>
      <h1>{text}</h1>
      </div>
  );
}
export default Component;