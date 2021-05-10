import React, { useState } from 'react'
import { 
Autocomplete,Icon,Button, Collapsible, CollapsibleItem, TextInput,
} from 'react-materialize'
import $ from 'jquery'
import FadeIn from 'react-fade-in'
import MFDatePicker from '../../fix/MFDatePicker'
import ZoomImage from '../../ZoomImage'
import { useDispatch } from 'react-redux'
import { createMission } from '../../../_action/mission_actions'


const CreateMission = (props) => {

    const dispatch = useDispatch()

    //mission type
    const BASIC = 'BASIC'
    const DETAIL = 'DETAIL'
    const MISSIONPACK = 'MISSIONPACK'

    const dateformat = require('dateformat')
    const [Title,setTitle] = useState('간편미션')
    const [Selected,setSelected] = useState(BASIC)


    const [ DetailMent ,setDetailMent ] =useState('상세미션 작성하기')
    const [ MissionPackMent ,setMissionPackMent ] =useState('미션팩 생성하기')

    //페이지 로드시 사용자가 입력했던 자동완성 데이터
    let autoCompleteData;

    const FormHandler = (e) => {
        var title = $('#create-input').val();
        var content;
        var startDate;
        var endDate;

        if($('#create-input').val() === ''){
            alert('미션명을 입력 해주세요.')
            return
        }

        switch(Selected){
            case BASIC: {

                content = undefined
                startDate = undefined
                endDate = undefined
                
                break
            }
            case DETAIL: {
                content = $('#detailContent').val()
                startDate = undefined
                endDate = $("#detailEndDate").val()
                if(endDate == ''){
                    alert('상세 미션은 종료날짜를 선택해야 합니다.')
                    return
                }
                break
            }
            case MISSIONPACK: {
                
                content = $('#packContent').val()
                startDate = $("#packStartDate").val()
                endDate = $("#packEndDate").val()
                if(startDate == '' || endDate == ''){
                    alert('미션 팩의 유효날짜를 선택해주세요.')
                    return
                }

                break
            }
            default:
                break
        }


        let missionBody = {

            missionTitle: title,
            missionContent: content,
            missionStartDate: startDate,
            missionEndDate: endDate,
            missionType: Selected
        }

        dispatch(createMission(missionBody))
            .then(res => {
                console.log(res)
            })
            .catch(e => {
                console.error(e)
            })



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

    const detailEndDateHandler = (e) => {

    }

    const startPickerHandler = (date) => {

        let startDate = new Date(dateformat(date,'isoDate'))
        let endDate = new Date($('#packEndDate').val())
        if(endDate != '') {

            if(startDate > endDate){
                alert('시작일은 종료일보다 먼저이어야 합니다. 시작 날짜를 초기화 해주세요.')
                
                return
            }

        }
    }
    const endPickerHandler = (date) => {
        let startDate = new Date($('#packStartDate').val())
        let endDate = new Date(dateformat(date,'isoDate'))
        if(endDate != '') {

            if(startDate > endDate){
                alert('종료일은 시작일보다 먼저일 수 없습니다. 종료 날짜를 초기화 해주세요.')
                
                return
            }

        }
    }

    return(
        <FadeIn>
            <div className='main-container'>

                <h2>{Title} 생성</h2>
                <ZoomImage imageAlt='kind of mission' imageLink='images/kind_of_mission.png' imageWidth='50em' ></ZoomImage>
                <div className='create-mission'>
                    <Autocomplete
                    icon={<Icon>add</Icon>}
                    id='create-input'
                    options={{
                        data: {
                        '마트 에서 장보기': null,
                        '김장 재료구매': null,
                        '깃랩관련 부분': null,
                        '강아지': null,
                        '강자': null,
                        '강형욱': null,
                        '강에서 피는 꽃': null,
                        '강앞': null,
                        '강쥐': null
                        }
                    }}
                    placeholder='미션명 예) 김장 재료구매'
                    />
                    <Collapsible accordion popout >
                        <CollapsibleItem
                            expanded={false}
                            header={ DetailMent }
                            onClick={ detailHandler }
                            icon={<Icon>create</Icon>}
                            node='div' >
                            <TextInput id='detailContent' label='상세 미션내용' placeholder="예) 배추, 고추가루, 소금" />
                            <MFDatePicker pickerId='detailEndDate' labelName='종료날짜' handleOnPicked={ detailEndDateHandler } />
                        </CollapsibleItem>
                        <CollapsibleItem
                            expanded={false}
                            header={MissionPackMent}
                            onClick={ missionPackHandler }
                            icon={<Icon>card_giftcard</Icon>}
                            node='div' >
                            <TextInput id='packContent' label='미션팩 미션내용' placeholder="어떤 미션들이 들어갈 미션팩인가요?" />
                            <MFDatePicker pickerId='packStartDate' labelName='시작날짜' handleOnPicked={ startPickerHandler } />
                            <MFDatePicker pickerId='packEndDate' labelName='종료날짜' handleOnPicked={ endPickerHandler } />
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