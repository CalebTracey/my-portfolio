import React, { useRef, useState, FC } from 'react'
import { useSpring, animated } from '@react-spring/web'
import portrait from './portrait.png'

const calc = (x: number, y: number, rect: any): number[] => [
    -(y - rect.top - rect.height / 2) / 5,
    (x - rect.left - rect.width / 2) / 5,
    1.2,
]
const trans = (x: number, y: number, s: number): string =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Portrait: FC = (): JSX.Element => {
    const ref = useRef<HTMLDivElement | null>(null)
    const [xys, set] = useState<any[]>([0, 0, 1])
    const props = useSpring({ xys })

    return (
        <animated.div
            className="portrait__animated"
            ref={ref}
            style={{ transform: props.xys.to(trans) }}
            onMouseLeave={() => set([0, 0, 1])}
            onMouseMove={(e) => {
                const rect = ref.current
                    ? ref.current.getBoundingClientRect()
                    : null
                set(calc(e.clientX, e.clientY, rect))
            }}
        >
            <img
                src={portrait}
                alt="portrait"
                style={{ borderRadius: '50%' }}
            />
        </animated.div>
    )
}

export default Portrait
