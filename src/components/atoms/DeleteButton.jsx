import React from 'react'
import { ReactComponent as Remove } from '../../assets/icons/remove.svg'
import styled from 'styled-components'

const StyledWrapper = styled.button`
    width: 38px;
    height: 38px;
    background: ${({ theme }) => theme.colors.black100};
    border: none;
    border-radius: 6px;
    display: flex;
    align-items: center;
    transition: 0.2s ease;

    &:hover {
        background: ${({ theme }) => theme.colors.black200};
    }
`

const DeleteButton = (props) => (
    <StyledWrapper {...props}>
        <Remove />
    </StyledWrapper>
)

export default DeleteButton
