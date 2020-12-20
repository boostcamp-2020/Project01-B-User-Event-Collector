import styled from 'styled-components';
import apiUrl from '@constants/apiUrl';
import useClickEventLog from '@hooks/useClickEventLog';

const NaverLogin = styled.a`
    display: block;
    margin-top: 40px;
`;

const NaverLoginButton = () => {
    const naverClick = useClickEventLog({ userId: null, href: `${apiUrl.login}/naver-login` });

    return (
        <NaverLogin id="naver-login" href={`${apiUrl.login}/naver-login`} onClick={naverClick}>
            <img
                height="50"
                src="https://user-images.githubusercontent.com/60503734/102323140-717b2300-3fc3-11eb-886d-e124e75d3169.PNG"
                alt="네이버로 로그인"
            />
        </NaverLogin>
    );
};

export default NaverLoginButton;
