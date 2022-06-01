import React, { FC, useEffect, ReactElement } from 'react'
import { useSpring, animated } from '@react-spring/web'
import { Theme } from '@mui/material'
import IconButton from '../IconButton'

interface Props {
    icon: ReactElement
    delay: number
    startX: number
    endX: number
    handlePageChange?: (link: string) => void
    handleWindowLocationHref?: (link: string) => void
    buttonTheme: Theme
    iconLabel: string
    link: string
    timeoutStart: number
    timeoutEnd: number
}

const AnimatedIcon: FC<Props> = (props: Props) => {
    const {
        icon,
        delay,
        startX,
        endX,
        buttonTheme,
        iconLabel,
        link,
        timeoutStart,
        timeoutEnd,
        handlePageChange,
        handleWindowLocationHref,
    } = props
    const [styles, api] = useSpring(() => ({
        from: { x: startX, opacity: 0 },
        config: { frequency: 1 },
    }))

    useEffect(() => {
        api.start({ config: { velocity: 0 } })
        api.start({ config: { friction: 20 } })
        api({
            x: endX,
            opacity: 1,
            delay,
        })
    }, [api, delay, endX])

    return (
        <animated.div
            style={{
                display: 'flex',
                width: 'auto',
                height: 'auto',
                borderRadius: 16,
                ...styles,
            }}
        >
            <IconButton
                handlePageChange={handlePageChange}
                handleWindowLocationHref={handleWindowLocationHref}
                component={icon}
                iconLabel={iconLabel}
                buttonTheme={buttonTheme}
                link={link}
                timeoutStart={timeoutStart}
                timeoutEnd={timeoutEnd}
            />
        </animated.div>
    )
}

AnimatedIcon.defaultProps = {
    handlePageChange: undefined,
    handleWindowLocationHref: undefined,
}

export default AnimatedIcon
