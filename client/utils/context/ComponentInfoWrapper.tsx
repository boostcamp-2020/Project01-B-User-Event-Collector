import { useContext, ReactNode } from 'react';
import ComponentInfoContext from './ComponentInfoContext';

interface IProps {
    children: ReactNode;
    componentId: string;
    data?: {
        type: string;
        id: number;
    };
}

const ComponentInfoWrapper = ({ children, componentId, data }: IProps) => {
    const componentInfo = useContext(ComponentInfoContext);
    componentInfo.componentId += `_${componentId}`;
    componentInfo.data = data ? data : componentInfo.data;

    return <ComponentInfoContext.Provider value={componentInfo}>{children}</ComponentInfoContext.Provider>;
};

export default ComponentInfoWrapper;
