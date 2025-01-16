import { Sidebar } from "@widjets/Sidebar"
import styled from "styled-components";
import {Outlet} from "react-router-dom";

export const Layout = () => {
    
    return (
        <Wrapper>
            <Sidebar />
            <Outlet />
        </Wrapper>
    )
}

const Wrapper = styled.main`
    display: flex;
    align-items: flex-start;
    width: 100%;
    height: 100%;
`