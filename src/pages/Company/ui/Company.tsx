import styled from "styled-components";
import {CompanyMainData} from "@widjets/CompanyMainData";
import {JournalActivity} from "@widjets/JournalActivity";
import {CompanyLinks} from "@widjets/CompanyLinks";
import {Flex} from "@ui";
import {size} from "@styles/size.ts";

export const CompanyPage = () => {
    return (
        <GridContainer>
            <CompanyMainData />
            <GridRight direction={'column'} gap={'25px'}>
                <CompanyLinks />
                {
                    window.innerWidth >= 800 && <JournalActivity />
                }
            </GridRight>
            {
                window.innerWidth <= 800 && <JournalActivity />
            }
        </GridContainer>
    )
}

const GridRight = styled(Flex)`
    @media (${size.notebook}) {
        gap: 10px;
    }

    @media (max-width: 800px) {
        grid-row: 1;
    }
`

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 25px;
    flex-grow: 1;

    @media (${size.notebook}) {
        gap: 10px;
        grid-template-columns: 60% calc(50% - 10%);
    }

    @media (max-width: 800px) {
        gap: 10px;
        grid-template-columns: 1fr;
    }


    @media (max-width: 800px) {
        gap: 2px;
    }
`