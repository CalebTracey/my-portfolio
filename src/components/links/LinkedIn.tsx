import React, { FC } from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import IconButton from '@mui/material/IconButton'
import { Theme } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

interface Props {
    handlePageChange: (link: string) => void
    buttonTheme: Theme
}

const LinkedIn: FC<Props> = ({ handlePageChange, buttonTheme }) => {
    const link = 'https://www.linkedin.com/in/caleb-tracey/'

    return (
        <ThemeProvider theme={buttonTheme}>
            <IconButton
                aria-label="linkedin"
                size="large"
                color="primary"
                onClick={() => handlePageChange(link)}
            >
                <LinkedInIcon fontSize="large" />
            </IconButton>
        </ThemeProvider>
    )
}

export default LinkedIn
