import { NavLink } from 'react-router-dom';

interface ComponentNavLinkProp {
  navLinkColor: string;
  keyNavLink: string;
  valueNavLink: string;
}

const ComponentNavLink = (props: ComponentNavLinkProp): JSX.Element => {
  const { navLinkColor, keyNavLink, valueNavLink } = props;
  return (
    <div
      style={{
        height: '30px',
        width: '150px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEEEEE',
        borderRadius: '10px',
      }}
    >
      <NavLink to={keyNavLink} style={{ color: `${navLinkColor}` }}>
        {valueNavLink}
      </NavLink>
    </div>
  );
};

export default ComponentNavLink;
