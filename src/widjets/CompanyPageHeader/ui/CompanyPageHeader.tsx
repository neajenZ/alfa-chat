import {Avatar, Flex} from "@ui";
import {Edit} from "@icons";
import styled from "styled-components";

export const CompanyPageHeader = () => {
    return (
        <Flex gap={'20px'} align={'center'}>
            <Avatar>
                <img src="/logotype.png" alt="Company Logo"/>
            </Avatar>

            <CompanyData align={'flex-start'} direction={'column'} gap={'8px'}>
                <Flex gap={'20px'} align={'center'}>
                    <p>Alfateam</p>
                    <button><Edit /></button>
                </Flex>
                <p>Приватная</p>
            </CompanyData>
        </Flex>
    )
}


const CompanyData = styled(Flex)`
    p {
        color: ${({ theme }) => theme.colors.text};
        font-size: 16px;
        font-weight: 500;
        
    }
`