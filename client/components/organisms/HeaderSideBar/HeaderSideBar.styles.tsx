import styled from 'styled-components';

interface SearchContainerProps {
    searching: boolean;
}

const LogoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    padding: 9px 6px;
    margin: 0px;
`;

const Logo = styled.h1`
    cursor: pointer;
    display: inline-flex;
    margin: 0 0 5px 0;
    z & > * {
        margin: 5px;
    }
`;

const SearchContainer = styled.div<SearchContainerProps>`
    overflow: hidden;
    position: fixed;
    height: ${(props) => (props.searching ? '67px' : '0')};
    top: 0;
    right: 0;
    left: 225px;
    z-index: 100;
    padding: 0 30px;
    border-bottom: ${(props) => (props.searching ? '1px solid rgba(0,0,0,.1)' : '0')};
    background-color: hsla(0, 0%, 100%, 0.98);
    transition: height 0.2s;
`;

const SectionContainer = styled.div`
    padding: 0 15px;
`;

const ProfileContainer = styled.div`
    cursor: pointer;
    border: 1px solid hsla(0, 0%, 84.7%, 0.13);
    border-width: 1px 0;
    padding: 11px 0;
`;
const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 81px;
    width: 225px;
    background-color: black;
    z-index: 50;
`;

const AdminContainer = styled.div`
    position: absolute;
    bottom: 10px;
    left: 15px;
    opacity: 0.5;
`;

export { LogoContainer, Logo, SearchContainer, SectionContainer, ProfileContainer, Header, AdminContainer };
