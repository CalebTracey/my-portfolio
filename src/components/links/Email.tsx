import React, { FC } from 'react'
import EmailIcon from '@mui/icons-material/Email'
import IconButton from '@mui/material/IconButton'
import { Theme } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

interface Props {
    buttonTheme: Theme
}
const Email: FC<Props> = ({ buttonTheme }) => {
    const clickHandler = (): void => {
        window.location.href = 'mailto:yourmail@domain.com'
    }
    return (
        <ThemeProvider theme={buttonTheme}>
            <IconButton
                aria-label="email"
                size="large"
                color="primary"
                onClick={() => clickHandler()}
            >
                <EmailIcon fontSize="large" />
            </IconButton>
        </ThemeProvider>
    )
}

export default Email
