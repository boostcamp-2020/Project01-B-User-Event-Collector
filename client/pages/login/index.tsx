import styled from 'styled-components';
import apiUrl from '@constants/apiUrl';
import ComponentInfoContext from '@utils/context/ComponentInfoContext';
import { componentType } from '@constants/identifier';
import useClickEventLog from '@hooks/useClickEventLog';

const LoginContainer = styled.div`
    padding-top: 50px;
    padding-left: 225px;
    text-align: center;
`;
const From = styled.form``;
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
    const onChange = () => {};
    const localClick = useClickEventLog({ userId: null, href: `${apiUrl.login}/$local-login` });
    const naverClick = useClickEventLog({ userId: null, href: `${apiUrl.login}/naver-login` });
    return (
        <ComponentInfoContext.Provider value={{ componentId: componentType.loginForm }}>
            <LoginContainer>
                <From action={`${apiUrl.login}/local-login`} method="POST">
                    <LoginInput type="text" name="email" placeholder="이메일을 입력해주세요" onChange={onChange} />
                    <LoginInput
                        id="pw"
                        type="password"
                        name="pw"
                        placeholder="비밀번호를 입력해주세요"
                        onChange={onChange}
                    />
                    <LoginInput id="local-login" type="submit" value="로그인하기" onClick={localClick} />
                </From>
                <NaverLogin id="naver-login" href={`${apiUrl.login}/naver-login`} onClick={naverClick}>
                    <img
                        height="50"
                        src="https://user-images.githubusercontent.com/60503734/102323140-717b2300-3fc3-11eb-886d-e124e75d3169.PNG"
                        alt="네이버로 로그인"
                    />
                </NaverLogin>
            </LoginContainer>
        </ComponentInfoContext.Provider>
    );
};

export default Login;
