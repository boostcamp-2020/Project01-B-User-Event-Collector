import React, { ReactNode } from 'react';
import StyledText from './Text.styles';

interface TextProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'regularStrong';
}

const Text = ({ children, variant }: TextProps) => (
  <StyledText variant={variant}>
    {children}
  </StyledText>
);

export default Text;
