import React,{ useState } from 'react'
import { TextInput,Checkbox,Button } from 'react-materialize'
import { Link } from 'react-router-dom'
import FadeIn from 'react-fade-in'
const RegisterPage = (props) => {

    const [Id , setId] = useState("")
    const [Password, setPassword] = useState("")
    const [PasswordCheck, setPasswordCheck] = useState("")
    const [Phone, setPhone] = useState("")

    const SubmitHandler = (e) => {
        
        let user = {
            id: Id,
            passowrd: Password
        }

    }

    


    return (
        <FadeIn>
            <div>
                <h2>회원가입</h2>
                <form onSubmit={ SubmitHandler } method="post">
                    <div className="login-container">
                        <div className="form-area">
                            <TextInput id="form-user-id" label="아이디" onChange={e => setId(e.target.value) } />
                            <TextInput id="form-user-password" label="비밀번호" onChange={e => setPassword(e.target.value)} password />
                            <TextInput id="form-user-passwordCheck" label="비밀번호 확인" onChange={e => setPassword(e.target.value)} password />
                            <TextInput id="form-user-phone" label="전화번호" onChange={e => setPassword(e.target.value)} password />
                            <Checkbox id="user-allow-info" label="개인정보 수집•이용 동의 " value="allowed"  />
                            <div className="recognize-info">
                                <span>정보를 잊으셨나요 ? <Link to="/findAccount" >계정 찾기</Link></span>
                            </div>
                            <div className="button-submit">
                                <Button  large node="a" style={{ marginRight: '5px',backgroundColor: "#5a3ca5"}} waves="light" onClick={ SubmitHandler } >
                                    회원가입
                                </Button>
                            </div>
                        </div>    
                    </div>
                </form>
            </div>
        </FadeIn>
    )
}

export default RegisterPage