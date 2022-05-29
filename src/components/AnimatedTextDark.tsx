import React, { useEffect, FC } from 'react'
import { useSpring, animated } from '@react-spring/web'

interface Props {
    text: string
}
const AnimatedTextDark: FC<Props> = ({ text }): JSX.Element => {
    const [styles, api] = useSpring(() => ({
        from: { x: -200, opacity: 0 },
        config: { frequency: 1 },
    }))
    useEffect(() => {
        api.start({ config: { velocity: 0 } })
        api.start({ config: { friction: 20 } })
        api({
            x: 0,
            opacity: 1,
            delay: 300,
        })
    }, [api])

    return (
        <animated.div
            style={{
                width: 'auto',
                height: 'auto',
                borderRadius: 16,
                ...styles,
            }}
        >
            <div className="title__text body-text">
                <span className="span-text__dark" style={{ fontSize: '1.5em' }}>
                    {text}
                </span>
            </div>
        </animated.div>
    )
}

export default AnimatedTextDark
