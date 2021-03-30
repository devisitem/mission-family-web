import React,{ useState } from 'react'
import { TextInput,Checkbox,Button } from 'react-materialize'
import axios from 'axios'

import FadeIn from 'react-fade-in'
const LoginPage = (props) => {

    const [Id , setId] = useState("")
    const [Password, setPassword] = useState("")

    const SubmitHandler = (e) => {
        let user = {
            id: Id,
            passowrd: Password
        }

    }

    


    return (
        <FadeIn>
            <div>
                <h2>LOGIN</h2>
                <form onSubmit={ SubmitHandler } method="post">
                    <div className="login-container">
                        <div className="form-area">
                            <TextInput id="form-user-id" label="아이디" onChange={e => setId(e.target.value) } />
                            <TextInput id="form-user-password" label="비밀번호" onChange={e => setPassword(e.target.value)} password />
                            <Checkbox id="user-allow-info" label="로그인 정보 저장" value="save"  />
                            <div className="button-submit">
                                <Button  large node="a" style={{ marginRight: '5px',backgroundColor: "#5a3ca5"}} waves="light" onClick={ SubmitHandler } >
                                    LOGIN
                                </Button>
                            </div>
                        </div>    
                    </div>
                </form>
            </div>
        </FadeIn>
    )
}

export default LoginPage