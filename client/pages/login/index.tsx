import styled from 'styled-components';
import apiUrl from '@constants/apiUrl';
import ComponentInfoContext from '@utils/context/ComponentInfoContext';
import { componentType, contentType } from '@constants/identifier';
import useClickEventLog from '@hooks/useClickEventLog';
import { Cookies } from 'react-cookie';
import { useEffect } from 'react';
import ComponentInfoWrapper from '@utils/context/ComponentInfoWrapper';
import Button from '@components/atoms/Button';
import Link from 'next/link';
import HeadsetIcon from '@material-ui/icons/Headset';

const LoginContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding-left: 225px;
    width: 100%;
    background-color: #f2f2f2;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 200px;
`;

const Form = styled.form`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
`;

const LoginInput = styled.input`
    background-color: transperant;
    display: block;
    margin: 0 auto;
    width: 231.19px;
    height: 40px;
    margin-bottom: 10px;
    &:focus{outline: none; }
`;

const LoginButton = styled.input`
    focus: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 9px 15px;
    color: black;
    border: 1px solid #D7D7D7;
    background-color: white;
    width: 231.19px;
    height: 50px;
    border-radius: 4px;
    box-shadow: none;
    cursor: pointer;
    font-size: 15px;
    line-height: 1;
    outline: none;
    -webkit-text-decoration: none;
    text-decoration: none;
    white-space: nowrap;
`;

const NaverLogin = styled.a`
    display: block;
    margin-top: 40px;
`;

const Title = styled.p`
    font-size: 20px;
    font-weight: 700;
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
                        <Title>miniVIBE 로그인</Title>
                        <LoginInput type="email" name="email" placeholder="이메일을 입력해주세요" />
                        <LoginInput id="pw" type="password" name="pw" placeholder="비밀번호를 입력해주세요" />
                        <LoginButton id="local-login" type="submit" value="로그인" onClick={localClick} />
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
                <ComponentInfoWrapper componentId={contentType.join}>
                    <Link href="/join"><Button icon={HeadsetIcon} variant="primary" width="231.19" height="50"><a>miniVIBE 회원가입</a></Button></Link>
                </ComponentInfoWrapper>
            </LoginContainer>
        </ComponentInfoContext.Provider>
    );
};

export default Login;
