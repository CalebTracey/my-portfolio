import React, { FC } from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import IconButton from '@mui/material/IconButton'
import { Theme } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

interface Props {
    handlePageChange: (link: string) => void
    buttonTheme: Theme
}

const Instagram: FC<Props> = ({ handlePageChange, buttonTheme }) => {
    const link = 'https://www.instagram.com/caleb.tracey/'

    return (
        <ThemeProvider theme={buttonTheme}>
            <IconButton
                aria-label="instagram"
                size="large"
                color="primary"
                onClick={() => handlePageChange(link)}
            >
                <InstagramIcon fontSize="large" />
            </IconButton>
        </ThemeProvider>
    )
}

export default Instagram
