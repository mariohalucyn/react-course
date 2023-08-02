import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledWrapper = styled.div`
    background: ${({ theme }) => theme.colors.white};
    border-radius: 12px;
    padding: 24px;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: start;
`

const Label = styled.label`
    font-weight: bold;
`

const Input = styled.input`
    padding: 5px 8px;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.black200};
`

const FormField = ({ label, name, id, type = 'text' }) => {
    return (
        <StyledWrapper>
            <Label htmlFor={id}>{label}</Label>
            <Input name={name} type={type} id={id} />
        </StyledWrapper>
    )
}

FormField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.string,
}

export default FormField
