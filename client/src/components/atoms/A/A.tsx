import React from 'react';
import { func, node, string } from 'prop-types';

import StyledA from './A.styles.tsx';

const A = ({
  children, href, onClick, variant,
}) => <StyledA variant={variant} href={href} onClick={onClick}>{children}</StyledA>;

// Expected prop values
A.propTypes = {
  children: node.isRequired,
  href: string,
  onClick: func,
  variant: string,
};

// Default prop values
A.defaultProps = {
  children: 'A text',
};

export default A;
