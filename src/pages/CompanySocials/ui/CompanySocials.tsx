import {Button, Flex, Table} from "@ui";
import styled from "styled-components";
import {Delete, Edit, Facebook} from "@icons";
import {useState} from "react";
import {AddSocial} from "./AddSocial.tsx";
import {EditSocial} from "./EditSocial.tsx";

const Social = () => {
    return (
        <Flex gap={'10px'} align={'center'}>
            <Facebook />
            <User direction={'column'} align={'flex-start'}>
                <p>Название аккаунта</p>
                <span>Ссылка</span>
            </User>
        </Flex>
    )
}

export const CompanySocials = () => {
    const [isAddSocial, setSocial] = useState(false)
    const [isEditSocial, setEditSocial] = useState(false)

    return (
        <MainBoard>
            { isAddSocial && <AddSocial onClose={() => setSocial(false)}/> }
            { isEditSocial && <EditSocial onClose={() => setEditSocial(false)}/> }
            <Header>
                <h5>Аккаунты</h5>
                <Button onClick={() => setSocial(true)} size={'small'} text={'Добавить'} />
            </Header>
            <Table
                data={[{ name: 'Hello' }, { name: 'Hello' }, { name: 'Hello' }, { name: 'Hello' }, { name: 'Hello' }]}
                columns={[ { dataIndex: 'name', title: 'Имя', render: Social } ]}
                actions={() => (
                    <Flex gap={'20px'} align={'center'} justify={'flex-end'}>
                        <Role>
                            Alfateam - Head Hunters
                        </Role>
                        <Date>01.09.2001</Date>
                        <button onClick={() => setEditSocial(true)}>
                            <Edit />
                        </button>
                        <button>
                            <Delete />
                        </button>
                    </Flex>
                )}
            />
        </MainBoard>
    )
}

const Date = styled.p`
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 14px;
    padding: 10px 16px;
    font-weight: 500;
`

const Header = styled(Flex)`
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    
    button {
        width: 25%;
    }
    
    h5 {
        color: ${({ theme }) => theme.colors.text};
        font-size: 20px;
        font-weight: 600;
    }
    
`

const MainBoard = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    padding: 20px;
`

const Role = styled.div`
    color: ${({ theme }) => theme.colors.primary};
    padding: 10px 16px;
    font-size: 14px;
    font-weight: 600;
    text-decoration: underline;
`

const User = styled(Flex)`
    p {
        color: ${({ theme }) => theme.colors.primary};
        font-size: 16px;
        font-weight: 500;
    }
    span {
        color: ${({ theme }) => theme.colors.textSecondary};
        font-size: 14px;
        font-weight: 500;
    }
`
