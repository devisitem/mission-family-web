import React from 'react'
import FadeIn from 'react-fade-in'
import { Collection,CollectionItem,Icon,Navbar } from 'react-materialize'

const FindUser = (props) => {
    return (
        <FadeIn>
            <div className="main-container">
                <h2>유저 찾기</h2>
                <Navbar
                alignLinks="right"
                id="mobile-nav"
                menuIcon={<Icon>menu</Icon>}
                options={{
                    draggable: true,
                    edge: 'left',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 200,
                    preventScrolling: true
                }}
                search
                >
                </Navbar>
                <div className="user-list" >
                    <Collection>
                        <CollectionItem className="avatar">
                            <img alt="" className="circle" src="https://materializecss.com/images/yuna.jpg" />
                            <span className="title">
                                Title
                            </span>
                            <p>
                                First Line
                            <br />
                                Second Line
                            </p>
                            {/* <a className="secondary-content" href="javascript:void(0)" >
                                <Icon>
                                    grade
                                </Icon>
                            </a> */}
                        </CollectionItem>
                        <CollectionItem className="avatar">
                            <Icon className="circle">
                                folder
                            </Icon>
                            <span className="title">
                                Title
                            </span>
                            <p>
                                First Line
                            <br />
                                Second Line
                            </p>
                            {/* <a className="secondary-content" href="javascript:void(0)" >
                                <Icon>
                                    grade
                                </Icon>
                            </a> */}
                        </CollectionItem>
                        <CollectionItem className="avatar">
                            <Icon className="circle green">
                                insert_chart
                            </Icon>
                            <span className="title">
                                Title
                            </span>
                            <p>
                                First Line
                            <br />
                                Second Line
                            </p>
                            {/* <a className="secondary-content" href="javascript:void(0)" >
                                <Icon>
                                    grade
                                </Icon>
                            </a> */}
                        </CollectionItem>
                        <CollectionItem className="avatar">
                            <Icon className="circle red">
                                play_arrow
                            </Icon>
                            <span className="title">
                                Title
                            </span>
                            <p>
                                First Line
                            <br />
                                Second Line
                            </p>
                            {/* <a className="secondary-content" href="javascript:void(0)" >
                                <Icon>
                                    grade
                                </Icon>
                            </a> */}
                        </CollectionItem>
                    </Collection>
                </div>
            </div>
        </FadeIn>
    )
}

export default FindUser