import React from 'react'
import  {DatePicker } from 'react-materialize'
const MFDatePicker = ({ handleOnPicked,pickerId,labelName }) => {
    return(
        
        <DatePicker label={ labelName } id={ pickerId } options={{ autoClose: true, container: null, defaultDate: null, disableDayFn: null,
            disableWeekends: false, events: [], firstDay: 0, format: 'yyyy-mm-dd', i18n: { cancel: '취소', clear: '초기화',
            done: "확인", months: [ '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월' ],
            monthsShort: [ '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월' ],
            nextMonth: '›',
            previousMonth: '‹',
            weekdays: [ '일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일' ],
            weekdaysAbbrev: [ '일', '월', '화', '수', '목', '금', '토' ],
            weekdaysShort: [ '일', '월', '화', '수', '목', '금', '토' ] },
            isRTL: false,
            maxDate: null,
            minDate: null,
            onClose: null,
            onDraw: null,
            onOpen: null,
            onSelect: null,
            parse: null,
            setDefaultDate: false,
            showClearBtn: false,
            showDaysInNextAndPreviousMonths: false,
            showMonthAfterYear: false,
            yearRange: 0
            
            
            
        }}
        
        onChange={e =>handleOnPicked(e)}
        />
    )
}

export default MFDatePicker