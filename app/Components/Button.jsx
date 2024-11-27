import React from "react";

const Button = ({children,style,onClick}) => {
  return (
    <div>
      <button onClick={onClick} className={style}>{children}</button>
    </div>
  );
};

export default Button;