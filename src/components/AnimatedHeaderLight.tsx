import React, { useEffect, FC } from 'react'
import { useSpring, animated } from '@react-spring/web'

interface Props {
    text: string
    fontSize: string
    delay: number
    startX: number
    endX: number
}
const AnimatedHeaderLight: FC<Props> = ({
    text,
    fontSize,
    delay,
    startX,
    endX,
}) => {
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
    }, [api, endX, delay])

    return (
        <animated.div
            style={{
                width: 'auto',
                height: 'auto',
                borderRadius: 16,
                ...styles,
            }}
        >
            <div
                className="span-header__light body-text"
                style={{ fontSize, paddingBottom: '.5em' }}
            >
                {text}
            </div>
        </animated.div>
    )
}

export default AnimatedHeaderLight
