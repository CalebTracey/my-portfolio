import React, { useEffect, FC } from 'react'
import { useSpring, animated } from '@react-spring/web'
import { Link } from '@mui/material'

type Props = {
    text: string
    href: string
    delay: number
}

const AnimatedLink: FC<Props> = ({ text, href, delay }) => {
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
            delay,
        })
    }, [api, delay])

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
                <span
                    className="span-text__light"
                    style={{ fontSize: '1.5em' }}
                >
                    <Link href={href}>
                        <span>{text}</span>
                    </Link>
                </span>
            </div>
        </animated.div>
    )
}

export default AnimatedLink
