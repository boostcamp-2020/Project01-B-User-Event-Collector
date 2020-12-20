import { withNextRouter } from 'storybook-addon-next-router';
import { addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Provider } from 'react-redux';

const store = {
    getState: () => {
        return {
            user: { id: 1 },
            musicPlayer: {
                nowPlaying: { id: 1 },
                playTime: 120,
            },
        };
    },
    subscribe: () => 0,
    dispatch: action('dispatch'),
};

const ProviderWrapper = ({ children, store }) => <Provider store={store}>{children}</Provider>;

export const withProvider = (story) => <ProviderWrapper store={store}>{story()}</ProviderWrapper>;

addDecorator(withNextRouter({}));

addDecorator(withProvider);

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
};
