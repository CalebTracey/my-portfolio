import React, { FC, useEffect } from 'react'
import EmailIcon from '@mui/icons-material/Email'
import IconButton from '@mui/material/IconButton'
import { Theme } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { useSpring, animated } from '@react-spring/web'

interface Props {
    buttonTheme: Theme
}
const Email: FC<Props> = ({ buttonTheme }) => {
    const clickHandler = (): void => {
        window.location.href = 'mailto:caleb.tracey@gmail.com'
    }
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
        setTimeout(() => setIcon({ scale: '1.25' }), 1650)
        setTimeout(() => setIcon({ scale: '1' }), 1900)
    }, [setIcon])

    return (
        <animated.div style={{ scale: icon.scale }}>
            <ThemeProvider theme={buttonTheme}>
                <IconButton
                    aria-label="email"
                    size="large"
                    color="primary"
                    onClick={() => clickHandler()}
                    onMouseEnter={() => handleMouseEnter()}
                    onMouseLeave={() => handleMouseLeave()}
                >
                    <EmailIcon fontSize="large" />
                </IconButton>
            </ThemeProvider>
        </animated.div>
    )
}

export default Email
