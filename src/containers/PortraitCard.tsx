import React, { useEffect, FC } from 'react'
import { useSpring, animated, config } from '@react-spring/web'
import { Theme } from '@mui/material'
import Portrait from '../components/Portrait'
import Links from './Links'

interface Props {
    buttonTheme: Theme
    handlePageChange: (link: string) => void
    handleWindowLocationHref: (link: string) => void
}

const PortraitCard: FC<Props> = ({
    buttonTheme,
    handlePageChange,
    handleWindowLocationHref,
}) => {
    const [menuIn, setMenuIn] = useSpring(() => ({
        left: '-300%',
        config: config.slow,
    }))

    useEffect(() => {
        setTimeout(() => setMenuIn({ left: '0px' }), 500)
    }, [setMenuIn])

    return (
        <animated.div
            className="portrait-card"
            style={{
                marginLeft: menuIn.left,
            }}
        >
            <div className="portrait__bg">
                <div className="portrait__inner">
                    <Portrait />
                </div>
                <div className="portrait__content">
                    <span className="span-header portrait__header">
                        Caleb Tracey
                    </span>
                    <span className="span-header portrait__subheader">
                        Software Engineer - Backend
                    </span>
                    <Links
                        handlePageChange={handlePageChange}
                        handleWindowLocationHref={handleWindowLocationHref}
                        buttonTheme={buttonTheme}
                    />
                </div>
            </div>
        </animated.div>
    )
}

export default PortraitCard
