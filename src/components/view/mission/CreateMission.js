import React, { useState } from 'react'
import { 
Autocomplete,Icon,Button, Collapsible, CollapsibleItem, TextInput,
} from 'react-materialize'
import $ from 'jquery'
import FadeIn from 'react-fade-in'
import MFDatePicker from '../../fix/MFDatePicker'
const CreateMission = (props) => {
    

    //mission type
    const BASIC = 'BASIC'
    const DETAIL = 'DETAIL'
    const MISSIONPACK = 'MISSIONPACK'

    const dateformat = require('dateformat')
    const [Title,setTitle] = useState('간편미션')
    const [Selected,setSelected] = useState(BASIC)


    const [ DetailMent ,setDetailMent ] =useState('상세미션 작성하기')
    const [ MissionPackMent ,setMissionPackMent ] =useState('미션팩 생성하기')

    const FormHandler = (e) => {
        const title;
        const startDate;
        const endDate;

        switch(Selected){
            case BASIC: {
                if($('#create-input').val() == ''){
                    alert('미션명을 입력 해주세요.')
                    return
                }
                    

                break
            }
            case DETAIL: {
                title = $('#detailContent').val()
                

                break
            }
            case MISSIONPACK: {
                


                break
            }
        }


        let missionBody = {

            missionTitle: title,
            missionStartDate: startDate,
            missionEndDate: endDate,
            missionType: Selected

        }
    }

    const detailHandler = (e) => {
        let hasActive = $('ul.popout li:nth-child(1)').hasClass('active')
        if(hasActive){
            //상세 미션생성
            setDetailMent('한 번더 클릭 시 간편작성 !')
            setMissionPackMent('미션팩 생성하기')
            setTitle('상세미션')
            setSelected(DETAIL)
            
        }else{
            //간편 미션생성
            setDetailMent('상세미션 작성하기')
            setMissionPackMent('미션팩 생성하기')
            setTitle('간편미션')
            setSelected(BASIC)

        }
    }

    const missionPackHandler = (e) => {
        let hasActive = $('ul.popout li:nth-child(2)').hasClass('active')
        if(hasActive){
            //미션팩 생성
            setMissionPackMent('한 번더 클릭 시 간편작성 !')
            setDetailMent('상세미션 작성하기')
            setTitle('미션팩')
            setSelected(MISSIONPACK)
            
        }else{
            //간편 미션생성
            setMissionPackMent('미션팩 생성하기')
            setDetailMent('상세미션 작성하기')
            setTitle('간편미션')
            setSelected(BASIC)

        }
    }

    const startPickerHandler = (date) => {
        console.log(dateformat(date,'isoDate'))
    }
    const endPickerHandler = (date) => {
        console.log(dateformat(date,'isoDate'))
    }

    return(
        <FadeIn>
            <div className='main-container'>
                <h2>{Title} 생성</h2>
                <div className='create-mission'>
                    <Autocomplete
                    icon={<Icon>add</Icon>}
                    id='create-input'
                    options={{
                        data: {
                        '마트 에서 장보기': null
                        }
                    }}
                    placeholder='미션명을 작성해주세요 !'
                    />
                    <Collapsible accordion popout >
                        <CollapsibleItem
                            expanded={false}
                            header={ DetailMent }
                            onClick={ detailHandler }
                            icon={<Icon>create</Icon>}
                            node='div' >
                            <TextInput id='detailContent' label='상세 미션내용'  />
                            <MFDatePicker pickerId='detailEndDate' labelName='종료날짜' handleOnPicked={ endPickerHandler } />
                        </CollapsibleItem>
                        <CollapsibleItem
                            expanded={false}
                            header={MissionPackMent}
                            onClick={ missionPackHandler }
                            icon={<Icon>card_giftcard</Icon>}
                            node='div' >
                            <TextInput id='ds' label='미션내용'  />
                            <MFDatePicker pickerId='startDate' labelName='시작날짜' handleOnPicked={ startPickerHandler } />
                            <MFDatePicker pickerId='endDate' labelName='종료날짜' handleOnPicked={ endPickerHandler } />
                        </CollapsibleItem>
                    </Collapsible>
                    <div className='create-button-area'>
                        <Button className='add-mission-button' onClick={ FormHandler } >미션 생성</Button>
                    </div>
                </div>
            </div>
        </FadeIn>
    )
}

export default CreateMission