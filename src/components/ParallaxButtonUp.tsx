import React, { FC } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import Fab from '@mui/material/Fab'
import { Theme } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { useSpring, animated } from '@react-spring/web'

interface Props {
    scrollUp: () => void
    buttonTheme: Theme
}

const ParallaxButtonUp: FC<Props> = ({ scrollUp, buttonTheme }) => {
    const [icon, setIcon] = useSpring(() => ({
        scale: '1',
        config: {
            tension: 250,
            friction: 10,
        },
    }))

    const handleMouseEnter = (): void => {
        setIcon({ scale: '1.15' })
    }

    const handleMouseLeave = (): void => {
        setIcon({ scale: '1' })
    }

    return (
        <animated.div
            className="button-wrapper__up"
            style={{ scale: icon.scale }}
        >
            <ThemeProvider theme={buttonTheme}>
                <Fab
                    aria-label="up"
                    size="large"
                    color="primary"
                    onClick={() => scrollUp()}
                    onMouseEnter={() => handleMouseEnter()}
                    onMouseLeave={() => handleMouseLeave()}
                >
                    <ArrowUpwardIcon fontSize="large" />
                </Fab>
            </ThemeProvider>
        </animated.div>
    )
}

export default ParallaxButtonUp
