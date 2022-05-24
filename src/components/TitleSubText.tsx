import React, { useEffect, FC } from 'react'
import { useSpring, animated } from '@react-spring/web'

const text =
    // eslint-disable-next-line max-len
    "I'm a software engineer with a degree in Computer Science based in Portland, Maine."

const TitleSubText: FC = (): JSX.Element => {
    const [styles, api] = useSpring(() => ({
        from: { x: -100, opacity: 0 },
        config: { frequency: 1 },
    }))
    useEffect(() => {
        api.start({ config: { velocity: 0 } })
        api.start({ config: { friction: 20 } })
        api({
            x: 100,
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

export default TitleSubText
