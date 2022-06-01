import React, { useEffect, useState, FC } from 'react'
import { useSpring, animated } from '@react-spring/web'

type TFontColor = '__light' | '__dark' | '__primary' | ''

interface Props {
    text: string
    usePaddingBottom?: boolean
    fontColor?: TFontColor
    fontSize?: string
    delay?: number
    startX?: number
    endX?: number
}
const AnimatedHeader: FC<Props> = ({
    text,
    fontSize,
    fontColor,
    usePaddingBottom,
    delay,
    startX,
    endX,
}) => {
    const [styles, api] = useSpring(() => ({
        from: { x: startX, opacity: 0 },
        config: { frequency: 1 },
    }))
    const className = `span-header${fontColor}`
    const [paddingBottom, setPaddingBottom] = useState<'0' | '.5em'>('0')

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
            <span className={className} style={{ fontSize, paddingBottom }}>
                {text}
            </span>
        </animated.div>
    )
}

AnimatedHeader.defaultProps = {
    fontSize: '1.25rem',
    delay: 0,
    fontColor: '',
    usePaddingBottom: false,
    startX: -200,
    endX: 0,
}
export default AnimatedHeader
