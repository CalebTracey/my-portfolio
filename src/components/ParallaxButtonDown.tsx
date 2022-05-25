import React, { FC } from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import Fab from '@mui/material/Fab'
import { Theme } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

interface Props {
    scrollDown: () => void
    buttonTheme: Theme
}

const ParallaxButtonDown: FC<Props> = ({ scrollDown, buttonTheme }) => {
    return (
        <div className="button-wrapper__down">
            <ThemeProvider theme={buttonTheme}>
                <Fab
                    aria-label="down"
                    size="large"
                    color="primary"
                    onClick={() => scrollDown()}
                >
                    <ArrowDownwardIcon fontSize="large" />
                </Fab>
            </ThemeProvider>
        </div>
    )
}

export default ParallaxButtonDown
