import styled from 'styled-components';
import ComponentInfoContext from '@utils/context/ComponentInfoContext';
import { componentType, contentType } from '@constants/identifier';
import { Cookies } from 'react-cookie';
import { useEffect } from 'react';
import ComponentInfoWrapper from '@utils/context/ComponentInfoWrapper';
import Button from '@components/atoms/Button';
import NaverLoginButton from '@components/atoms/NaverLoginButton';
import LoginForm from '@components/molecules/LoginForm';
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

const Login = () => {
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
                    <LoginForm />
                </ComponentInfoWrapper>
                <ComponentInfoWrapper componentId={contentType.naverLogin}>
                    <NaverLoginButton />
                </ComponentInfoWrapper>
                <ComponentInfoWrapper componentId={contentType.join}>
                    <Link href="/join">
                        <Button icon={HeadsetIcon} variant="primary" width="231.19" height="50">
                            <a>miniVIBE 회원가입</a>
                        </Button>
                    </Link>
                </ComponentInfoWrapper>
            </LoginContainer>
        </ComponentInfoContext.Provider>
    );
};

export default Login;
