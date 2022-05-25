import React, { FC, useEffect } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import IconButton from '@mui/material/IconButton'
import { Theme } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { useSpring, animated } from '@react-spring/web'

interface Props {
    handlePageChange: (link: string) => void
    buttonTheme: Theme
}

const GitHub: FC<Props> = ({ handlePageChange, buttonTheme }) => {
    const link = 'https://github.com/CalebTracey'
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

    useEffect(() => {
        setTimeout(() => setIcon({ scale: '1.25' }), 900)
        setTimeout(() => setIcon({ scale: '1' }), 1150)
    }, [setIcon])

    return (
        <animated.div style={{ scale: icon.scale }}>
            <ThemeProvider theme={buttonTheme}>
                <IconButton
                    aria-label="github"
                    size="large"
                    color="primary"
                    onClick={() => handlePageChange(link)}
                    onMouseEnter={() => handleMouseEnter()}
                    onMouseLeave={() => handleMouseLeave()}
                >
                    <GitHubIcon fontSize="large" />
                </IconButton>
            </ThemeProvider>
        </animated.div>
    )
}

export default GitHub
