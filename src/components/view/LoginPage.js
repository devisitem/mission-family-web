import React,{ useState } from 'react'
import { TextInput,Checkbox,Button } from 'react-materialize'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../_action/user_action'

import FadeIn from 'react-fade-in'
const LoginPage = (props) => {
    const dispatch = useDispatch()
    const [Id , setId] = useState("")
    const [Password, setPassword] = useState("")

    const SubmitHandler = (e) => {
        let user = {
            id: Id,
            password: Password
        }
        dispatch(loginUser(user))
            .then(res => {


                if(res.payload === 'ok'){
                    console.log('login success')
                    props.history.push('/') 
                } else {
                    alert('등록된 정보가 존재하지 않습니다.')
                }
            })

    }

    


    return (
        <FadeIn>
            <div>
                <h2>로그인</h2>
                <form onSubmit={ SubmitHandler } method="post">
                    <div className="login-container">
                        <div className="form-area">
                            <TextInput id="form-user-id" label="아이디" onChange={e => setId(e.target.value) } />
                            <TextInput id="form-user-password" label="비밀번호" onChange={e => setPassword(e.target.value)} password />
                            <Checkbox id="user-allow-info" label="로그인 정보 저장" value="save"  />
                            <div className="recognize-info">
                                <span>아직 미션패밀리 회원이 아닌가요 ? <Link to="/register" >가입하기</Link></span>
                            </div>
                            <div className="button-submit">
                                <Button  large node="a" style={{ marginRight: '5px',backgroundColor: "#5a3ca5"}} waves="light" onClick={ SubmitHandler } >
                                    로그인
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