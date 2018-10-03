import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import styled, { injectGlobal } from "styled-components";

import { Home, About, Contact, ToContact, Articles } from "./scenes";

injectGlobal`
  body {
    font-family: sans-serif;
  }
  a {
    text-decoration: none;
  }
`;

const StyledNav = styled.nav`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  background: #333;
  margin-bottom: 20px;
  > a {
    color: #fff;
    padding: 5px 10px;
  }
`;
const menuarray = [
  { name: "menu1", url: "/", active: true, count: 200 },
  { name: "menu2", url: "/about", active: false, count: 2300 }
];

const App = () => (
  <BrowserRouter>
    <div>
      {menuarray.map(menu => {
        return (
          <NavLink to={menu.url} activeClassName={menu.active ? "active" : ""}>
            {menu.name} {menu.count}
          </NavLink>
        );
      })}
      <StyledNav>
        <NavLink to="/" activeClassName="selected">
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <Link to="/contact">Contact</Link>
        <Link to="/tocontact">To Contact</Link>
        <Link to="/articles">Articles</Link>
      </StyledNav>
      <Route path="/" exact="true" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/tocontact" component={ToContact} />
      <Route path="/articles" component={Articles} />
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById("root"));
