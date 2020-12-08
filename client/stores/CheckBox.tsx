import React, { useState } from 'react';

export const CheckBoxContext = React.createContext(undefined);

export const CheckBoxContextProvider = ({ children }) => {
    const [checkState, setCheckState] = useState({
        checkedCnt: 0,
        isAllChecked: false,
    });
    const changeState = (checkCnt, isAllChecked) => {
        console.log('change!!');
        setCheckState({ checkedCnt: checkCnt, isAllChecked: isAllChecked });
    };
    return <CheckBoxContext.Provider value={{ ...checkState, changeState }}>{children}</CheckBoxContext.Provider>;
};
