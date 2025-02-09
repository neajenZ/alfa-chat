import {CompanyPageHeader} from "@widjets/CompanyPageHeader";
import styled from "styled-components";
import {Divider, Flex} from "@ui";
import {Outlet} from "react-router-dom";
import {size} from "@styles/size.ts";

export const CompanyLayout = () => {
    return (
        <Wrapper>
            <CompanyPageHeader />
            <Divider />

            <Outlet />
        </Wrapper>
    )
}

const Wrapper = styled(Flex)`
    padding: 40px;
    flex-direction: column;
    width: 100%;

    @media (${size.notebook}) {
        padding: 20px 18px;
    }
`