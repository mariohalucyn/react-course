import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from './assets/themes/theme.js'
import UsersList from './components/organisms/UsersList.jsx'
import Form from './components/organisms/Form.jsx'

const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1200px;
    margin: 0 auto;
    color: ${({ theme }) => theme.colors.black700};
`

const Root = () => (
    <ThemeProvider theme={theme}>
        <StyledWrapper>
            <Form />
            <UsersList />
        </StyledWrapper>
    </ThemeProvider>
)

export default Root
