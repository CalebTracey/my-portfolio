import React, { useEffect, FC } from 'react'
import { useSpring, animated } from '@react-spring/web'

const Title: FC = (): JSX.Element => {
    const [styles, api] = useSpring(() => ({
        from: { x: -100, opacity: 0 },
        config: { frequency: 1 },
    }))
    useEffect(() => {
        api.start({ config: { velocity: 0 } })
        api.start({ config: { friction: 20 } })
        api({
            x: 50,
            opacity: 1,
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
            <div
                className="span-header body-text"
                style={{ fontSize: '2em', paddingBottom: '.5em' }}
            >
                Hi there!
            </div>
        </animated.div>
    )
}

export default Title
