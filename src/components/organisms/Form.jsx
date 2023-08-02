import React from 'react'
import FormField from '../molecules/FormField.jsx'
import styled from 'styled-components'
import { RegularButton } from '../atoms/RegularButton.js'

const StyledWrapper = styled.div`
    background: ${({ theme }) => theme.colors.black100};
    width: 500px;
    border-radius: 12px;
    padding: 8px 32px 32px 32px;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 16px;
`

const StyledButton = styled.button`
    font-size: 18px;
    background: ${({ theme }) => theme.colors.black200};
    border: none;
    border-radius: 4px;
    padding: 12px 24px;
    color: ${({ theme }) => theme.colors.black700};
    font-weight: bold;
`

const Form = () => {
    return (
        <StyledWrapper>
            <RegularButton>content</RegularButton>
            <h1>add new student</h1>
            <FormField label="name" id="name" name="name" />
            <FormField label="name" id="name" name="name" />
            <FormField label="name" id="name" name="name" />
            <StyledButton>submit</StyledButton>
        </StyledWrapper>
    )
}

export default Form
