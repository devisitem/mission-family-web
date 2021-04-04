import React,{ useState } from 'react'
import { useDispatch } from 'react-redux'
import { TextInput,Checkbox,Button } from 'react-materialize'
import { Link } from 'react-router-dom'
import FadeIn from 'react-fade-in'
import $ from 'jquery'
import { dupCheckUser } from '../../_action/user_action'
const RegisterPage = (props) => {

    const dispatch = useDispatch();

    const [Id , setId] = useState("")
    const [Password, setPassword] = useState("")
    // const [PasswordCheck, setPasswordCheck] = useState("")
    // const [Phone, setPhone] = useState("")
    const  [IdErrorMsg, setIdErrorMsg] = useState("")
    const SubmitHandler = (e) => {
        
        let user = {
            id: Id,
            passowrd: Password
        }

    }
    const validateIdHandler = (e) => {
        let input = $("#form-user-id")
        let body = {
            checkId: Id
        }
        const idValid = /^[a-z0-9]{4,20}$/
        if(!idValid.test(Id)){
            setIdErrorMsg("아이디는 영문 또는 숫자 4 ~ 20 자리 가능합니다.")
            input.removeClass("valid")
            input.addClass("invalid")
            return
        }
        dispatch(dupCheckUser(body))
            .then(response => {
                switch(response.payload.serviceCode){
                    case "code_no_user": {
                        input.removeClass("invalid")
                        input.addClass("valid")
                    }
                        break
                    case "already_exist_user": {
                        input.removeClass("valid")
                        input.addClass("invalid")
                        setIdErrorMsg("이미 존재하는 아이디입니다.")
                        break
                    }
                }
            })
    }

    const passwordHandler = (e) => {
        setPassword(e.currentTarget.value)

        console.log("password = ",Password)
        let input = $("#form-user-password")
        const passwordValid = /^[A-Za-z0-9]{6,12}$/


        if(!passwordValid.test(Password)){
            input.removeClass("valid")
            input.addClass("invalid")
            return
        }else{
            input.removeClass("invalid")
            input.addClass("valid")
        }
    }

    


    return (
        <FadeIn>
            <div>
                <h2>회원가입</h2>
                <form onSubmit={ SubmitHandler } method="post">
                    <div className="login-container">
                        <div className="form-area">
                            <TextInput id="form-user-id" onBlur={ validateIdHandler } label="아이디"  onChange={e => setId(e.target.value) } success="사용 가능한 아이디입니다." error={ IdErrorMsg }   />
                            <TextInput id="form-user-password" label="비밀번호" onChange={ passwordHandler } password  error="비밀번호는 영문 및 숫자 6 ~ 12 자리 가능합니다." success="사용가능" />
                            <TextInput id="form-user-passwordCheck" label="비밀번호 확인" onChange={e => setPassword(e.target.value)} password />
                            <TextInput  label="이름"  />
                            <TextInput  label="생년월일"  />
                            <TextInput id="form-user-phone" label="전화번호" onChange={e => setPassword(e.target.value)} password />
                            <Checkbox id="user-allow-info" label={
                                <div>
                                    <Link to="/legal/privacy">개인정보</Link>
                                    <span> 수집•이용 동의 </span>
                                </div>
                            } value="allowed"  />
                            <div className="recognize-info">
                                <span>정보를 잊으셨나요 ? <Link to="/findAccount" >계정 찾기</Link></span>
                            </div>
                            <div className="button-submit">
                                <Button  large node="a" style={{backgroundColor: "#5a3ca5"}} waves="light" onClick={ SubmitHandler } >
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