import React from 'react'
import { Icon,
    SideNav,SideNavItem} from 'react-materialize'
const MFSideNav = (props) => {
    return (

        <SideNav
            id="SideNav-10"
            options={{
                draggable: true
            }}
            trigger={
                <span style={{cursor:"pointer"}}>
                    MY INFO 
                </span>}
        >
            <SideNavItem
                user={{
                    background: 'https://placeimg.com/640/480/tech',
                    email: '로그인이 필요합니다.',
                    image: 'static/media/react-materialize-logo.824c6ea3.svg',
                    name: 'Guest'
                }}
                userView
            />
            <SideNavItem
                href="#!icon"
                icon={<Icon>cloud</Icon>}
            >
                First Link With Icon
            </SideNavItem>
            <SideNavItem href="#!second">
                Second Link
            </SideNavItem>
            <SideNavItem divider />
            <SideNavItem subheader>
                Subheader
            </SideNavItem>
            <SideNavItem
                href="#!third"
                waves
            >
                Third Link With Waves
            </SideNavItem>
        </SideNav>
    )
}

export default MFSideNav