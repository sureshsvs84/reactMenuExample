import React from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";

import ContactData from "./ContactData";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const StyledNav = styled.nav`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
`;

const Contact = ({ match }) => (
  <div>
    <StyledNav>
      <Link to={`${match.url}/data`}>Contact Data</Link>
      <Link to={`${match.url}/form`}>Contact Form</Link>
      <Link to={`${match.url}/info`}>Contact Info</Link>
    </StyledNav>
    <Route path={`${match.path}/data`} component={ContactData} />
    <Route path={`${match.path}/form`} component={ContactForm} />
    <Route path={`${match.path}/info`} component={ContactInfo} />
  </div>
);

export default Contact;
