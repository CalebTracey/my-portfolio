import React, { FC, useEffect } from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import IconButton from '@mui/material/IconButton'
import { Theme } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { useSpring, animated } from '@react-spring/web'

interface Props {
    handlePageChange: (link: string) => void
    buttonTheme: Theme
}

const LinkedIn: FC<Props> = ({ handlePageChange, buttonTheme }) => {
    const link = 'https://www.linkedin.com/in/caleb-tracey/'
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
        setTimeout(() => setIcon({ scale: '1.25' }), 1150)
        setTimeout(() => setIcon({ scale: '1' }), 1400)
    }, [setIcon])

    return (
        <animated.div style={{ scale: icon.scale }}>
            <ThemeProvider theme={buttonTheme}>
                <IconButton
                    aria-label="linkedin"
                    size="large"
                    color="primary"
                    onClick={() => handlePageChange(link)}
                    onMouseEnter={() => handleMouseEnter()}
                    onMouseLeave={() => handleMouseLeave()}
                >
                    <LinkedInIcon fontSize="large" />
                </IconButton>
            </ThemeProvider>
        </animated.div>
    )
}

export default LinkedIn
