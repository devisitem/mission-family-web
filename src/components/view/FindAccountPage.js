import React from 'react'
import { TextInput,Checkbox,Button } from 'react-materialize'
import FadeIn from 'react-fade-in'

const FindAccountPage = (props) => {
    return(
        <FadeIn>
            <div>
                <h2>계정찾기</h2>
                <form method="post">
                    <div className="login-container">
                        <div className="form-area">
                            <TextInput id="form-user-phone" label="전화번호"  password />
                            <div className="button-submit">
                                <Button  large node="a" style={{ marginRight: '5px',backgroundColor: "#5a3ca5"}} waves="light"  >
                                    계정 찾기
                                </Button>
                            </div>
                        </div>    
                    </div>
                </form>
            </div>
        </FadeIn>
    )
}

export default FindAccountPage
