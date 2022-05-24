import React, { FC } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import IconButton from '@mui/material/IconButton'
import { Theme } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

interface Props {
    handlePageChange: (link: string) => void
    buttonTheme: Theme
}

const GitHub: FC<Props> = ({ handlePageChange, buttonTheme }) => {
    const link = 'https://github.com/CalebTracey'

    return (
        <ThemeProvider theme={buttonTheme}>
            <IconButton
                aria-label="github"
                size="large"
                color="primary"
                onClick={() => handlePageChange(link)}
            >
                <GitHubIcon fontSize="large" />
            </IconButton>
        </ThemeProvider>
    )
}

export default GitHub
