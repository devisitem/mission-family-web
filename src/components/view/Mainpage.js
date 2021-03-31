import React from 'react'
import FadeIn from 'react-fade-in'
import { Table } from 'react-materialize'
import { Link } from 'react-router-dom'
const MainPage = (props) => {
    return (
        <FadeIn >
            <div className="main-container">
                <h3>SITE MAP</h3>
                <Table>
                    <thead>
                        <tr>
                            <th data-field="id">
                                Class
                            </th>
                            <th data-field="name">
                                Name
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan="6">
                                사용자
                            </td>
                            <td>
                                <Link to="/register" >회원가입</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="/login" >로그인</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="/findAccount" >계정찾기</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="/createMission" >미션 만들기</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="/createFamily" >패밀리 만들기</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="/findUser" >유저 찾기</Link>
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan="3">
                                관리자
                            </td>
                            <td>
                                <Link to="/" >전체 패밀리찾기</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="/" >패밀리찾기</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="/" >전체 미션목록</Link>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </FadeIn>

    )
}

export default MainPage
