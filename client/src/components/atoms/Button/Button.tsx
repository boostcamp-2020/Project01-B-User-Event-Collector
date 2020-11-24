import React from 'react';
import { func, node, string } from 'prop-types';

import StyledButton from './Button.styles.tsx';

const Button = ({
  children, href, onClick, variant,
}) => {
  if (!href) return <StyledButton variant={variant} onClick={onClick}>{children}</StyledButton>;
  return <a href={href}>{children}</a>;
};

// Expected prop values
Button.propTypes = {
  children: node.isRequired,
  href: string,
  onClick: func,
  variant: string,
};

// Default prop values
Button.defaultProps = {
  children: 'Button text',
};

export default Button;
