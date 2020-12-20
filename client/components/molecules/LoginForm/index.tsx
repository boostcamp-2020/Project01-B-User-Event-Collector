import styled from 'styled-components';
import apiUrl from '@constants/apiUrl';
import useClickEventLog from '@hooks/useClickEventLog';

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
    &:focus {
        outline: none;
    }
`;

const LoginButton = styled.input`
    focus: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 9px 15px;
    color: black;
    border: 1px solid #d7d7d7;
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

const Title = styled.p`
    font-size: 20px;
    font-weight: 700;
`;

const LoginForm = () => {
    const localClick = useClickEventLog({ userId: null, href: `${apiUrl.login}/local-login` });

    return (
        <Form action={`${apiUrl.login}/local-login`} method="post">
            <Title>miniVIBE 로그인</Title>
            <LoginInput type="email" name="email" placeholder="이메일을 입력해주세요" />
            <LoginInput id="pw" type="password" name="pw" placeholder="비밀번호를 입력해주세요" />
            <LoginButton id="local-login" type="submit" value="로그인" onClick={localClick} />
        </Form>
    );
};

export default LoginForm;
