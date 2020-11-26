import React from 'react';
import styled from 'styled-components';
import Input from '../../atoms/Input/Input';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

const StyledSearchInput = styled.div`
    width: 90%;
    height: 55px;
    z-index: 10;
    display: flex;
    align-items: center;
    border-radius: 5px;
    box-shadow: 0 0 5px skyblue;
`;

const IconContainer = styled.div`
    width: 7%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ArtistName = styled.div`
    position: absolute;
    bottom: 0px;
    font-size: 14px;
    font-weight: 400;
`;

const SearchInput = () => (
    <StyledSearchInput>
        <IconContainer>
            <SearchIcon style={{ color: '#999' }}/>
        </IconContainer>
        <Input variant="search" />
        <IconContainer>
            <CloseIcon style={{ color: '#999' }}/>
        </IconContainer>
    </StyledSearchInput>
  );
  
  export default SearchInput;