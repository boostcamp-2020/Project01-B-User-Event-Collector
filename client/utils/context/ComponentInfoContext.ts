import { createContext } from 'react';

interface ComponentInfo {
    componentId: string;
    data?: {
        type: string;
        id: number;
    };
}

const ComponentInfoContext = createContext<ComponentInfo | null>(null);

export default ComponentInfoContext;
