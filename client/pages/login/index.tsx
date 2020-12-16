import styled from 'styled-components';
import apiUrl from '@constants/apiUrl';
import ComponentInfoContext from '@utils/context/ComponentInfoContext';
import { componentType, contentType } from '@constants/identifier';
import useClickEventLog from '@hooks/useClickEventLog';
import { loginRequest } from '@utils/apis';
import { Cookies } from 'react-cookie';
import { useEffect } from 'react';
import ComponentInfoWrapper from '@utils/context/ComponentInfoWrapper';
const LoginContainer = styled.div`
    padding-top: 50px;
    padding-left: 225px;
    text-align: center;
`;
const Form = styled.form``;
const LoginInput = styled.input`
    background-color: transperant;
    display: block;
    margin: 0 auto;
    width: 231.19px;
    height: 40px;
    margin-bottom: 10px;
`;

const NaverLogin = styled.a`
    display: block;
    margin-top: 40px;
`;
const Login = () => {
    const localClick = useClickEventLog({ userId: null, href: `${apiUrl.login}/$local-login` });
    const naverClick = useClickEventLog({ userId: null, href: `${apiUrl.login}/naver-login` });
    const cookies = new Cookies();
    useEffect(() => {
        if (cookies.get('fail')) {
            alert('아이디와 비밀번호를 확인해주세요');
            cookies.remove('fail');
        }
    }, []);

    return (
        <ComponentInfoContext.Provider value={{ componentId: componentType.loginForm }}>
            <LoginContainer>
                <ComponentInfoWrapper componentId={contentType.localLogin}>
                    <Form action={`${apiUrl.login}/local-login`} method="post">
                        <LoginInput type="text" name="email" placeholder="이메일을 입력해주세요" />
                        <LoginInput id="pw" type="password" name="pw" placeholder="비밀번호를 입력해주세요" />
                        <LoginInput id="local-login" type="submit" value="로그인하기" onClick={localClick} />
                    </Form>
                </ComponentInfoWrapper>
                <ComponentInfoWrapper componentId={contentType.naverLogin}>
                    <NaverLogin id="naver-login" href={`${apiUrl.login}/naver-login`} onClick={naverClick}>
                        <img
                            height="50"
                            src="https://user-images.githubusercontent.com/60503734/102323140-717b2300-3fc3-11eb-886d-e124e75d3169.PNG"
                            alt="네이버로 로그인"
                        />
                    </NaverLogin>
                </ComponentInfoWrapper>
            </LoginContainer>
        </ComponentInfoContext.Provider>
    );
};

export default Login;
