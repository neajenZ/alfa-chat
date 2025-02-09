import {Avatar, Flex} from "@ui";
import {Edit} from "@icons";
import styled from "styled-components";
import {size} from "@styles/size.ts";

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

    @media (${size.notebook}) {
        gap: 2px;
        
        p {
            font-size: 14px;
        }
    }
`