import React, { useEffect, FC } from 'react'
import { useSpring, animated } from '@react-spring/web'

interface Props {
    text: string
    fontSize?: string
    fontColor?: string
    delay?: number
    startX?: number
    endX?: number
}
const AnimatedText: FC<Props> = (props: Props): JSX.Element => {
    const { text, fontSize, fontColor, delay, startX, endX } = props
    const [styles, api] = useSpring(() => ({
        from: { x: startX, opacity: 0 },
        config: { frequency: 1 },
    }))

    const className = `span-text${fontColor}`

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
                width: 'auto',
                height: 'auto',
                borderRadius: 16,
                ...styles,
            }}
        >
            <span className={className} style={{ fontSize }}>
                {text}
            </span>
        </animated.div>
    )
}

AnimatedText.defaultProps = {
    fontSize: '1rem',
    fontColor: '',
    startX: -200,
    endX: 0,
    delay: 300,
}

export default AnimatedText
