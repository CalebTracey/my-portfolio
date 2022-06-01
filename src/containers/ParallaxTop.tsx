import React, { FC } from 'react'
import { Theme } from '@mui/material'
import { ParallaxLayer } from '@react-spring/parallax'
import AnimatedHeader from '../components/animations/AnimatedHeader'
import PortraitCard from './PortraitCard'
import ParallaxButtonDown from '../components/ParallaxButtonDown'
import TopWave from '../components/TopWaveSVG'
import AnimatedText from '../components/animations/AnimatedText'

const landingText =
    // eslint-disable-next-line max-len
    "I'm a software engineer with a degree in Computer Science based in Portland, Maine."

type Props = {
    scrollDown: () => void
    handlePageChange: (link: string) => void
    handleWindowLocationHref: (link: string) => void
    buttonTheme: Theme
}

const ParallaxTop: FC<Props> = ({
    scrollDown,
    handlePageChange,
    handleWindowLocationHref,
    buttonTheme,
}) => {
    return (
        <ParallaxLayer className="top-layer" offset={0} speed={2.5}>
            <TopWave />
            <div className="parallax__wrap-left">
                <PortraitCard
                    handlePageChange={handlePageChange}
                    handleWindowLocationHref={handleWindowLocationHref}
                    buttonTheme={buttonTheme}
                />
            </div>
            <div className="parallax__wrap-right">
                <AnimatedHeader
                    text="Hi There!"
                    startX={-100}
                    endX={10}
                    fontSize="1.5rem"
                    usePaddingBottom
                />
                <AnimatedText
                    text={landingText}
                    fontSize="1.25rem"
                    fontColor="__dark"
                />
            </div>
            <ParallaxButtonDown
                scrollDown={scrollDown}
                buttonTheme={buttonTheme}
            />
        </ParallaxLayer>
    )
}

export default ParallaxTop
