import React from 'react'
import DeleteButton from '../atoms/DeleteButton.jsx'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledWrapper = styled.li`
    display: flex;
    background: ${({ theme }) => theme.colors.white};
    align-items: center;
    justify-content: space-between;
    border-radius: 12px;
    padding: 24px;
`

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
`

const StyledAverage = styled.span`
    width: 42px;
    height: 42px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ average }) => {
        if (average > 4) return ({ theme }) => theme.colors.teal500
        if (average > 3) return ({ theme }) => theme.colors.blue600
        if (average > 2) return ({ theme }) => theme.colors.yellow500
        if (average < 2) return ({ theme }) => theme.colors.red500
    }};
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
`

const StyledUserData = styled.div`
    display: flex;
    flex-direction: column;
    span:first-child {
        font-weight: bold;
    }
`

const UsersListItem = ({
    user: { name, attendance = '0%', average = '0' },
    deleteUser,
}) => (
    <StyledWrapper>
        <StyledContainer>
            <StyledAverage average={average}>{average}</StyledAverage>
            <StyledUserData>
                <span>{name}</span>
                <span>attendance: {attendance}</span>
            </StyledUserData>
        </StyledContainer>
        <DeleteButton onClick={() => deleteUser(name)} />
    </StyledWrapper>
)

UsersListItem.propTypes = {
    user: PropTypes.objectOf(PropTypes.string.isRequired),
    deleteUser: PropTypes.func,
}
export default UsersListItem
