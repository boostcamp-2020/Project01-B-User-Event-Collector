import React from 'react';
import styled from 'styled-components';
import Input from '../../atoms/Input/Input';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import useSearchEventLog from '@hooks/useSearchEventLog';
import { useSelector } from 'react-redux';

const StyledSearchInput = styled.div`
    width: 100%;
    z-index: 10;
    display: flex;
    align-items: center;
    border-radius: 5px;
    box-shadow: 0 0 5px skyblue;
    background-color: white;
    margin: 10px 0;
`;

const IconContainer = styled.div`
    width: 7%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

interface SearchInputProps {
    onClose?: () => void;
}

const SearchInput = ({ onClose }: SearchInputProps) => {
    const user = useSelector((state) => state.user);
    const logSearchEvent = useSearchEventLog({ userId: user.id });
    const handleSubmit = (e) => {
        e.preventDefault();
        logSearchEvent(e.target.search.value);
    };

    return (
        <form id="search" onSubmit={handleSubmit}>
            <StyledSearchInput>
                <IconContainer>
                    <SearchIcon style={{ color: '#999' }} />
                </IconContainer>
                <Input name="search" variant="search" />
                <IconContainer>
                    <CloseIcon style={{ color: '#999' }} onClick={onClose} />
                </IconContainer>
            </StyledSearchInput>
        </form>
    );
};

export default SearchInput;
