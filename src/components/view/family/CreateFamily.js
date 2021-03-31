import React from 'react'
import FadeIn from 'react-fade-in'
import { TextInput,Checkbox,Button } from 'react-materialize'
const CreateFamily = (props) => {
    return(
        <FadeIn>
            <div className="main-container">
                <h2>패밀리 생성</h2>
                <form method="post">
                    <div className="login-container">
                        <div className="form-area">
                            <TextInput id="form-family-name" label="패밀리 이름"  />
                            <div className="button-submit">
                                <Button  large node="a" style={{ marginRight: '5px',backgroundColor: "#5a3ca5"}} waves="light"  >
                                    패밀리 생성 !
                                </Button>
                            </div>
                        </div>    
                    </div>
                </form>
            </div>
        </FadeIn>
    )
}

export default CreateFamily