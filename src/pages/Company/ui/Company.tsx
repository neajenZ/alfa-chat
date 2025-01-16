import styled from "styled-components";
import {CompanyMainData} from "@widjets/CompanyMainData";
import {JournalActivity} from "@widjets/JournalActivity";
import {CompanyLinks} from "@widjets/CompanyLinks";
import {Flex} from "@ui";

export const CompanyPage = () => {
    return (
        <GridContainer>
            <CompanyMainData />
            <Flex direction={'column'} gap={'25px'}>
                <CompanyLinks />
                <JournalActivity />
            </Flex>
        </GridContainer>
    )
}

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 25px;
    flex-grow: 1;
`