import {Avatar, Button, Flex, Table} from "@ui";
import styled from "styled-components";
import {Delete, Edit} from "@icons";
import {useState} from "react";
import {AddGroup} from "./AddGroup.tsx";
import {EditGroup} from "./EditGroup.tsx";

const Social = () => {
    return (
        <Flex gap={'10px'} align={'center'}>
            <Avatar width={60} height={60}><img src="/user_avatar.png" alt="Avatar"/></Avatar>
            <User direction={'column'} align={'flex-start'}>
                <p>Alfateam - Head Hunters</p>
                <span>9 Участников \ 48 аккаунтов</span>
            </User>
        </Flex>
    )
}

export const CompanyGroups = () => {
    const [isAddGroup, setGroup] = useState(false)
    const [isEditGroup, setEditGroup] = useState(false)

    return (
        <MainBoard>
            { isAddGroup && <AddGroup onClose={() => setGroup(false)} /> }
            { isEditGroup && <EditGroup onClose={() => setEditGroup(false)} /> }
            <Header>
                <h5>Группы</h5>
                <Button onClick={() => setGroup(true)} size={'small'} text={'Добавить'} />
            </Header>
            <Table
                data={[{ name: 'Hello' }, { name: 'Hello' }, { name: 'Hello' }, { name: 'Hello' }, { name: 'Hello' }]}
                columns={[ { dataIndex: 'name', title: 'Имя', render: Social } ]}
                actions={() => (
                    <Flex gap={'20px'} align={'center'} justify={'flex-end'}>
                        <button onClick={() => setEditGroup(true)}>
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
        color: ${({ theme }) => theme.colors.text};
        font-size: 16px;
        font-weight: 500;
    }
    span {
        color: ${({ theme }) => theme.colors.textSecondary};
        font-size: 14px;
        font-weight: 500;
    }
`
