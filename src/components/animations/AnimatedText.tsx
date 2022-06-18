import React, { useEffect, useState, FC } from 'react'
import { useSpring, animated } from '@react-spring/web'

interface Props {
    text: string
    fontSize?: string
    fontColor?: string
    delay?: number
    startX?: number
    endX?: number
    usePaddingBottom?: boolean
}
const AnimatedText: FC<Props> = ({
    text,
    fontSize,
    fontColor,
    usePaddingBottom,
    delay,
    startX,
    endX,
}): JSX.Element => {
    const [paddingBottom, setPaddingBottom] = useState<'0' | '.5em'>('0')
    const [styles, api] = useSpring(() => ({
        from: { x: startX, opacity: 0 },
        config: { frequency: 1 },
    }))
    const className = `span-text${fontColor}`

    useEffect(() => {
        if (usePaddingBottom) {
            setPaddingBottom('.5em')
        } else if (paddingBottom === '.5em') {
            setPaddingBottom('0')
        }
    }, [paddingBottom, usePaddingBottom, setPaddingBottom])

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
            <span className={className} style={{ fontSize, paddingBottom }}>
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
    usePaddingBottom: false,
}

export default AnimatedText
