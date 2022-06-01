import React, { FC, ReactElement, useEffect } from 'react'
import IconButton from '@mui/material/IconButton'
import { Theme } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { useSpring, animated } from '@react-spring/web'

interface Props {
    handlePageChange?: (link: string) => void
    handleWindowLocationHref?: (link: string) => void
    component: ReactElement
    iconLabel: string
    buttonTheme: Theme
    link: string
    timeoutStart: number
    timeoutEnd: number
}

const Icon: FC<Props> = (props: Props) => {
    const {
        handlePageChange,
        handleWindowLocationHref,
        component,
        iconLabel,
        buttonTheme,
        link,
        timeoutStart,
        timeoutEnd,
    } = props
    const [icon, setIcon] = useSpring(() => ({
        scale: '1',
        config: {
            tension: 250,
            friction: 10,
        },
    }))

    const clickHandler = (): void => {
        if (handlePageChange) {
            handlePageChange(link)
        } else if (handleWindowLocationHref) {
            handleWindowLocationHref(link)
        }
    }

    const handleMouseEnter = (): void => {
        setIcon({ scale: '1.15' })
    }

    const handleMouseLeave = (): void => {
        setIcon({ scale: '1' })
    }

    useEffect(() => {
        setTimeout(() => setIcon({ scale: '1.15' }), timeoutStart)
        setTimeout(() => setIcon({ scale: '1' }), timeoutEnd)
    }, [setIcon, timeoutStart, timeoutEnd])
    return (
        <animated.div style={{ scale: icon.scale }}>
            <ThemeProvider theme={buttonTheme}>
                <IconButton
                    aria-label={iconLabel}
                    size="large"
                    color="primary"
                    onClick={() => clickHandler()}
                    onMouseEnter={() => handleMouseEnter()}
                    onMouseLeave={() => handleMouseLeave()}
                >
                    {component}
                </IconButton>
            </ThemeProvider>
        </animated.div>
    )
}

Icon.defaultProps = {
    handlePageChange: undefined,
    handleWindowLocationHref: undefined,
}

export default Icon
