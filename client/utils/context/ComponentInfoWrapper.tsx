import { useContext, ReactNode } from 'react';
import ComponentInfoContext from './ComponentInfoContext';

interface IProps {
    children: ReactNode;
    componentId?: string;
    data?: {
        type: string;
        id: number;
    };
}

const ComponentInfoWrapper = ({ children, componentId, data }: IProps) => {
    const componentInfo = useContext(ComponentInfoContext);
    const newComponentInfo = { ...componentInfo };
    if (componentId) newComponentInfo.componentId += `_${componentId}`;
    if (data) newComponentInfo.data = data;

    return <ComponentInfoContext.Provider value={newComponentInfo}>{children}</ComponentInfoContext.Provider>;
};

export default ComponentInfoWrapper;
