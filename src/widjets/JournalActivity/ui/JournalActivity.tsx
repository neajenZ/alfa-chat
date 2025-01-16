import styled from "styled-components";
import {Flex} from "@ui";
import {Link} from "react-router-dom";

export const JournalActivity = () => {
    return (
        <MainBoard>
            <h5>Журнал активности</h5>

            <Flex direction={'column'} gap={'20px'}>
                <Item>
                    <Icon />
                    <Flex direction={'column'} align={'flex-start'}>
                        <span>17 Nov 2021</span>
                        <p>Добавлено 19 аккаунтов в список аккаунтов</p>
                    </Flex>
                </Item>
                <Item>
                    <Icon />
                    <Flex direction={'column'} align={'flex-start'}>
                        <span>21 Nov 2021</span>
                        <p>Добавлено 19 аккаунтов в список аккаунтов</p>
                    </Flex>
                </Item>
            </Flex>

            <LoadMore to={'/company'}>
                Load more
            </LoadMore>
        </MainBoard>
    )
}

const LoadMore = styled(Link)`
    color: #514EF3;
    font-weight: 500;
    font-size: 14px;
    text-decoration: none;
    margin: 15px auto 0 auto;
`

const MainBoard = styled(Flex)`
    flex-direction: column;
    width: 100%;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.background};
    padding: 24px;
    grid-column: 2;
    h5 {
        font-size: 20px;
        font-weight: 500;
        margin-right: auto;
        color: ${({ theme }) => theme.colors.text};
        margin-bottom: 24px;
    }
`

const Icon = styled.div`
    min-width: 32px;
    height: 32px;
    position: relative;
    border-radius: 50%;
    background: #514EF3;
    
    &::before {
        content: "";
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`


const Item = styled(Flex)`
    align-items: center;
    gap: 20px;
    
    span {
        color: ${({ theme }) => theme.colors.textSecondary};
        font-size: 14px;
        font-weight: 500;
    }

    p {
        color: ${({ theme }) => theme.colors.text};
        font-size: 16px;
        font-weight: 500;
    }
`