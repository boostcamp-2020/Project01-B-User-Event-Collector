import { withNextRouter } from 'storybook-addon-next-router';
import { addDecorator } from '@storybook/react';
 
addDecorator(
  withNextRouter({})
);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}