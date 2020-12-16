import styled from 'styled-components';
import A from '@components/atoms/A';
import apiUrl from '@constants/apiUrl';

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

const NaverLogin = styled(A)`
    display: block;
    margin-top: 40px;
`;
const Login = () => {
    const onChange = () => {};
    return (
        <LoginContainer>
            <From action="" method="POST">
                <LoginInput type="text" name="id" placeholder="아이디를 입력해주세요" onChange={onChange} />
                <LoginInput
                    id="pw"
                    type="password"
                    name="pw"
                    placeholder="비밀번호를 입력해주세요"
                    onChange={onChange}
                />
                <LoginInput id="submit" type="submit" value="로그인하기" />
            </From>
            <NaverLogin href={apiUrl.login}>
                <img
                    height="50"
                    src="https://user-images.githubusercontent.com/60503734/102323140-717b2300-3fc3-11eb-886d-e124e75d3169.PNG"
                    alt="네이버로 로그인"
                />
            </NaverLogin>
        </LoginContainer>
    );
};

export default Login;
