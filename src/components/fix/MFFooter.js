import React from 'react'
import { Footer } from 'react-materialize'
const MFFooter = (props) => {
    return (
        <Footer className="example" copyrights="ⓒ 2021 Copyright Mission Family" 
        links={
            <ul>
                <li>
                    <a className="grey-text text-lighten-3" href="https://github.com/kimchi-dev">Github</a>
                </li>
                <li>
                    <a className="grey-text text-lighten-3" href="https://kr.linkedin.com/in/%ED%83%9C%EA%B5%AC-%EC%A0%84-431566209">Linked In</a>
                </li>
            </ul>}
        >
        <h5 className="white-text">
            Mission Family
        </h5>
        <p className="grey-text text-lighten-4">
            모두의 미션을 해결하는 그날까지.
        </p>
        </Footer>
    )
}

export default MFFooter