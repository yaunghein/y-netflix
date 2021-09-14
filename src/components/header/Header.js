import { useState, useEffect, useRef } from 'react';
import {
  Background,
  Frame,
  Group,
  Logo,
  ButtonLink,
  Link,
  Feature,
  FeatureCallOut,
  PlayButton,
  Text,
  Search,
  SearchIcon,
  SearchInput,
  Profile,
  Dropdown,
  Picture,
} from './header-styles';
import { Link as ReachRouterLink } from 'react-router-dom';

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReachRouterLink to={to}>
      <Logo {...restProps} />
    </ReachRouterLink>
  );
};

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
  const [searchActive, setSearchActive] = useState(false);
  const inputRef = useRef(null);

  const searchToggle = () => {
    if (searchActive) {
      setSearchActive(false);
      setSearchTerm('');
    } else {
      setSearchActive(true);
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    if (searchActive) {
      document.addEventListener('click', searchToggle);
    }
    return () => document.removeEventListener('click', searchToggle);
  });

  return (
    <Search {...restProps}>
      <SearchIcon
        onClick={e => {
          e.stopPropagation();
          searchToggle();
        }}>
        <img src='./images/icons/search.png' alt='Search' />
      </SearchIcon>
      <SearchInput
        placeholder='Search films and series'
        value={searchTerm}
        ref={inputRef}
        onClick={e => e.stopPropagation()}
        onChange={({ target }) => setSearchTerm(target.value)}
        active={searchActive}
      />
    </Search>
  );
};

Header.Link = function HeaderLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
  return <PlayButton {...restProps}>{children}</PlayButton>;
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.Picture = function HeaderPicture({ src, ...restProps }) {
  return <Picture src={`./images/users/${src}.png`} {...restProps} />;
};
