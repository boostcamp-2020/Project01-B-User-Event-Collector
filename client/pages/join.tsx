import styled from 'styled-components';
import apiUrl from '@constants/apiUrl';
import ComponentInfoContext from '@utils/context/ComponentInfoContext';
import { componentType, contentType } from '@constants/identifier';
import useClickEventLog from '@hooks/useClickEventLog';
import { Cookies } from 'react-cookie';
import { useEffect } from 'react';
import ComponentInfoWrapper from '@utils/context/ComponentInfoWrapper';
import Button from '@components/atoms/Button';
import { useDispatch, useSelector } from 'react-redux';
import { joinRequestAction } from '@reducers/user';
import { useRouter } from 'next/router';
import { useInput } from '@hooks/useInput';

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
    color: white;
    border: 1px solid #FF1150;
    background-color: #FF1150;
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

const Join = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const localClick = useClickEventLog({ userId: null, href: `${apiUrl.login}/join` });

    const { signUpSucces, signUpFail, id } = useSelector((state) => state.user);

    useEffect(() => {
        if (id ) {
            router.push('/')
        }
    }, [id]);

    useEffect(() => {
        if (signUpSucces) {
            router.push('/login')
        }
    }, [signUpSucces]);

    useEffect(() => {
        if (signUpFail) {
        alert('이미 존재하는 아이디입니다.');
        }
    }, [signUpFail]);

    const [email, onChangeEmail] = useInput('');
    const [name, onChangeName] = useInput('');
    const [pw, onChangePassword] = useInput('');

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(joinRequestAction({ email, pw, name }));
        //localClick();
    };
 
    const cookies = new Cookies();

    return (
        <ComponentInfoContext.Provider value={{ componentId: componentType.join }}>
            <LoginContainer>
                <ComponentInfoWrapper componentId={contentType.join}>
                    <Form>
                        <Title>miniVIBE 회원가입</Title>
                        <LoginInput type="text" name="name" value={name} required onChange={onChangeName} placeholder="이름을 입력해주세요" />
                        <LoginInput type="email" name="email" value={email} required onChange={onChangeEmail} placeholder="이메일을 입력해주세요" />
                        <LoginInput id="pw" type="password" name="pw" value={pw} required onChange={onChangePassword} placeholder="비밀번호를 입력해주세요" />
                        <Button id="join" variant = "primary" onClick={onSubmit}>회원가입</Button>
                    </Form>
                </ComponentInfoWrapper>
            </LoginContainer>
        </ComponentInfoContext.Provider>
    );
};

export default Join;
