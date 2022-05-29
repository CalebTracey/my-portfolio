import React, { useEffect, FC } from 'react'
import { useSpring, animated } from '@react-spring/web'

interface Props {
    text: string
    startX: number
    endX: number
}
const AnimatedHeaderDark: FC<Props> = ({ text, startX, endX }) => {
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
        })
    }, [api, endX])

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
                className="span-header body-text"
                style={{ fontSize: '2em', paddingBottom: '.5em' }}
            >
                {text}
            </div>
        </animated.div>
    )
}

export default AnimatedHeaderDark
