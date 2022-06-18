import React, { FC } from 'react'
import { Theme } from '@mui/material'
import { ParallaxLayer } from '@react-spring/parallax'
import AnimatedHeader from '../components/animations/AnimatedHeader'
import PortraitCard from './PortraitCard'
import ParallaxButtonDown from '../components/ParallaxButtonDown'
import TopWave from '../components/TopWaveSVG'
import AnimatedText from '../components/animations/AnimatedText'

const landingText1 =
    // eslint-disable-next-line max-len
    "I'm a software engineer based in Portland, Maine."
const landingText2 =
    // eslint-disable-next-line max-len
    'I build business applications and enjoy solving problems.'

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
                    fontSize="1.65rem"
                    usePaddingBottom
                    delay={2000}
                />
                <AnimatedText
                    text={landingText1}
                    fontSize="1.15rem"
                    fontColor="__dark"
                    delay={3000}
                    usePaddingBottom
                />
                <AnimatedText
                    text={landingText2}
                    fontSize="1.15rem"
                    fontColor="__dark"
                    delay={3000}
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
