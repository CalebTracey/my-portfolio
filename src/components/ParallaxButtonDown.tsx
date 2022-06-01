import React, { FC } from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import Fab from '@mui/material/Fab'
import { Theme } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { useSpring, animated } from '@react-spring/web'

interface Props {
    scrollDown: () => void
    // setIsDownButtonVisible: (isDownButtonVisible: boolean) => void
    // isDownButtonVisible: boolean
    buttonTheme: Theme
    // windowScrollY: number
    // windowHeight: number
}

const ParallaxButtonDown: FC<Props> = ({
    scrollDown,
    // setIsDownButtonVisible,
    // isDownButtonVisible,
    buttonTheme,
    // windowScrollY,
    // windowHeight,
}): JSX.Element => {
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

    // useEffect(() => {
    //     const onScroll = (): void => {
    //         if (windowHeight + windowScrollY >= document.body.offsetHeight) {
    //             // console.log("you're at the bottom of the page")
    //             setIsDownButtonVisible(false)
    //         }
    //     }
    //     window.addEventListener('scroll', onScroll)
    //     return () => window.removeEventListener('scroll', onScroll)
    // }, [])

    return (
        <animated.div
            className="button-wrapper__down"
            style={{ scale: icon.scale }}
        >
            <ThemeProvider theme={buttonTheme}>
                <Fab
                    aria-label="down"
                    size="large"
                    color="primary"
                    onClick={() => scrollDown()}
                    onMouseEnter={() => handleMouseEnter()}
                    onMouseLeave={() => handleMouseLeave()}
                >
                    <ArrowDownwardIcon fontSize="large" />
                </Fab>
            </ThemeProvider>
        </animated.div>
    )
    // ) : (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    // <></>
    // )
}

export default ParallaxButtonDown
