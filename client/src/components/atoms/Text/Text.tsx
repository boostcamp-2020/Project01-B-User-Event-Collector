import React from 'react';
import { func, node, string } from 'prop-types';

import StyledText from './Text.styles.tsx';

const Text = ({
  children, variant,
}) => <StyledText variant={variant}>{children}</StyledText>;

// Expected prop values
Text.propTypes = {
  children: node.isRequired,
  variant: string,
};

// Default prop values
Text.defaultProps = {
  children: 'Text text',
};

export default Text;
