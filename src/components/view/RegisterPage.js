import React,{ useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TextInput,Checkbox,Button } from 'react-materialize'
import { Link } from 'react-router-dom'
import FadeIn from 'react-fade-in'
import $ from 'jquery'
import { dupCheckUser, registerUser } from '../../_action/user_action'
import { isElementOfType } from 'react-dom/cjs/react-dom-test-utils.development'
const RegisterPage = (props) => {

    const dispatch = useDispatch();

    const [Id , setId] = useState("")
    const [Password, setPassword] = useState("")
    const [UserName, setUserName] = useState("")
    const  [IdErrorMsg, setIdErrorMsg] = useState("")

    const [IdCheck,setIdCheck] = useState(false)
    const [Password2Check,setPassword2Check] = useState(false)
    const [PasswordCheck,setPasswordCheck] = useState(false)
    const [NameCheck,setNameCheck] = useState(false)
    const [InfoCheck,setInfoCheck] = useState(false)

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
            setIdCheck(false)
            return
        }
        dispatch(dupCheckUser(body))
            .then(response => {
                switch(response.payload.serviceCode){
                    case "code_no_user": {
                        input.removeClass("invalid")
                        input.addClass("valid")
                        setIdCheck(true)
                        break
                    }
                    case "already_exist_user": {
                        input.removeClass("valid")
                        input.addClass("invalid")
                        setIdErrorMsg("이미 존재하는 아이디입니다.")
                        setIdCheck(false)
                        break
                    }
                }
            }).catch(e => {
                
                setIdErrorMsg("서버 통신 실패")
                input.removeClass("valid")
                input.addClass("invalid")
                setIdCheck(false)
            })

    }

    const passwordHandler = (e) => {
        
        let input = $("#form-user-password")
        let password = e.target.value

        const passwordValid = /^[A-Za-z0-9]{6,12}$/


        if(!passwordValid.test(password)){
            input.removeClass("valid")
            input.addClass("invalid")
            setPasswordCheck(false)
        }else{
            input.removeClass("invalid")
            input.addClass("valid")
            setPasswordCheck(true)
        }
    }

    const passwordCheckHandler = (e) => {
        
        let input = $("#form-user-passwordCheck")
        let password = e.target.value



        if(Password != password){
            input.removeClass("valid")
            input.addClass("invalid")
            setPassword2Check(false)
            return
        }else{
            input.removeClass("invalid")
            input.addClass("valid")
            setPassword2Check(true)
        }
    }
    
    const validateNameHandler = (e) => {
        let currentName = e.target.value
        let input = $("#form-user-name")

        const nameValid = /^[가-힣]{2,4}$/

        if(!nameValid.test(currentName)){
            input.removeClass("valid")
            input.addClass("invalid")
            setNameCheck(false)
            return
        }else{
            input.removeClass("invalid")
            input.addClass("valid")
            setNameCheck(true)
        }
    }
    const infoCheckHandler = (e) => {
        setInfoCheck(e.target.checked)
    }
    
    const SubmitHandler = (e) => {
        

        if(!IdCheck){
            alert("아이디 중복체크는 필수 입니다.")
            return
        } else if(!PasswordCheck){
            alert("비밀번호를 확인 해주세요.")
            return
        } else if(!Password2Check){
            alert("비밀번호확인과 일치하지 않습니다.")
            return
        } else if (!NameCheck){
            alert("이름을 확인해주세요.")
            return
        } else if (!InfoCheck){
            alert("개인정보 수집 및 이용동의가 있어야 가입하실수 있습니다.")
            return
        }

        let user = {
            userId: Id,
            userPassword: Password,
            userName: UserName
        }

        dispatch(registerUser(user))
            .then(response => {
                switch(response.payload.serviceCode){
                    case "create_success": {
                        props.history.push("/")
                        break
                    }
                    case "create_fail": {
                        alert("가입에 실패 하였습니다. - 이미 사용중인 아이디입니다.")
                        $("#form-user-id").addEventListener("focusin", e => {
                            e.target.value = ""
                        })
                        break
                    }
                    
                }
            })
        
    }

    return (
        <FadeIn>
            <div>
                <h2>회원가입</h2>
                <form onSubmit={ SubmitHandler } method="post">
                    <div className="login-container">
                        <div className="form-area">
                            <TextInput id="form-user-id" onBlur={ validateIdHandler } label="아이디"  onChange={e => setId(e.target.value) } success="사용 가능한 아이디입니다." error={ IdErrorMsg }   />
                            <TextInput id="form-user-password" label="비밀번호" onBlur={e => setPassword(e.target.value)}  onChange={ passwordHandler } password  error="영문 및 숫자 6 ~ 12 자리 가능" success="사용가능" />
                            <TextInput id="form-user-passwordCheck" label="비밀번호 확인"  password  onChange={ passwordCheckHandler } error="불일치" success="일치" />
                            <TextInput id="form-user-name" label="이름"onBlur={e => setUserName(e.target.value)} onChange={ validateNameHandler } error="3 ~ 4 한글" success="가능"  />
                            <Checkbox id="user-allow-info"  label={
                                <div>
                                    <a href="/legal/privacy" target="_blank">개인정보</a>
                                    <span> 수집•이용 동의 </span>
                                </div>
                            } value="allowed" onChange={ infoCheckHandler } />
                            <div className="recognize-info">
                                <span>정보를 잊으셨나요 ? <Link to="/findAccount" target="_blank" >계정 찾기</Link></span>
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