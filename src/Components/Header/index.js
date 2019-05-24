import React from "react";
import "./index.scss";

const Header = () => {
  const hamburger =
    '<svg height="32px" id="Layer_1" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="#ffffff" d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>';
  const menu = (
    <div className="header__menu">
      <button
        className="header__menu-trigger"
        aria-label="Click to open menu"
        dangerouslySetInnerHTML={{ __html: hamburger }}
      />
    </div>
  );

  const title = <h1 className="header__title">NY Times most popular</h1>;

  return (
    <header className="header">
      {menu}
      {title}
    </header>
  );
};

export default Header;
