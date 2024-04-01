import React from "react";

import styled from "@emotion/styled";

const Banner = styled.div`
display: flex;
flex-direction: row;
  grid-pad: 2;
  font-family: Cormorant;
  padding: 1rem;
`;

const Name = styled.a`
  text-decoration: none;
  width: 50%;
  font-weight: bold;
  text-align: left;
  font-size: 1.4rem;
  grid-pad: 2;
  padding: 1rem;
  color: rgba(0,0,0,0.75);
`;

const Menu = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
    align-content: right;
    font-size: 1.2rem;
    grid-pad: 2;
    width: 50%;
    padding: 1rem;
    line-height: 1.3;
`;

const MenuItem = styled.a`
text-align: right;
  text-decoration: none;
  color: rgba(0,0,0,0.75);
`;

const ActiveMenuItem = styled(MenuItem)`
  color: rgba(30, 26, 26, 0.66);
`;

export default function Header(props: { page: string }): JSX.Element {
  return (
    <Banner>
      <Name href={"/"}>Merlin May</Name>
      <Menu>
        {props.page === "About" ? (
          <ActiveMenuItem href="/">About</ActiveMenuItem>
        ) : (
          <MenuItem href="/">About</MenuItem>
        )}
        {props.page === "Books" ? (
          <ActiveMenuItem href="/">Books</ActiveMenuItem>
        ) : (
          <MenuItem href="/books/">Books</MenuItem>
        )}
        {props.page === "Short Stories" ? (
          <ActiveMenuItem href="/">Short Stories</ActiveMenuItem>
        ) : (
          <MenuItem href="/shortStories/">Short Stories</MenuItem>
        )}
        {props.page === "Contact" ? (
          <ActiveMenuItem href="/">Contact</ActiveMenuItem>
        ) : (
          <MenuItem href="/contact/">Contact</MenuItem>
        )}
      </Menu>
    </Banner>
  );
}
