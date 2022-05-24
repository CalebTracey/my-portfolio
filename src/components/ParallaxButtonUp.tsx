import React, { FC } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import IconButton from '@mui/material/IconButton'
import { Theme } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

interface Props {
    scrollUp: () => void
    buttonTheme: Theme
}

const ParallaxButtonUp: FC<Props> = ({ scrollUp, buttonTheme }) => {
    return (
        <div className="button-wrapper__up">
            <ThemeProvider theme={buttonTheme}>
                <IconButton
                    aria-label="up"
                    size="large"
                    color="primary"
                    onClick={() => scrollUp()}
                >
                    <ArrowUpwardIcon fontSize="large" color="primary" />
                </IconButton>
            </ThemeProvider>
        </div>
    )
}

export default ParallaxButtonUp
