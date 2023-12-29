import { useState } from "react";

const Logo = ({ theme }) => {
  return (
    <div className="flex flex-row">
      <div className={`header-logo header-logo-img${theme}`} />
      <div>
        <p className={`header-logo-text logo-main theme-colour${theme}`}>
          Ruardean Hill
        </p>
        <p className={`header-logo-text logo-sub theme-colour${theme}`}>
          Baptist Church
        </p>
      </div>
    </div>
  );
};

export default Logo;
