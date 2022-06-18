/* eslint-disable max-len */
import React, { FC } from 'react'
import { animated, config, useTransition } from '@react-spring/web'
import { Container, Stack } from '@mui/material'
import AnimatedText from '../animations/AnimatedText'
import portrait from '../portraitbw.jpeg'
import AnimatedLink from '../animations/AnimatedLink'
import AnimatedHeader from '../animations/AnimatedHeader'

const text1 =
    'Hello! My name is Caleb and I enjoy building things. My interest in software began during my time in construction. I have a passion for hands-on team based environments and enjoy the process of seeing a project through. Coding is a way to combine my favorite aspects of construction with my interest in technology.'
const text2 =
    "I was born and raised in Maine and I'm still based out of Portland."
const text3 =
    "I'm currently an API developer specializing in Go and Java. I also have experience with Angular, React, Kubernetes, and GitLab CI."
const text4 =
    'Besides coding I enjoy playing the guitar, writing/recording music, doing carpentry projects, and getting outside!'

interface Props {
    aboutMeSelected: boolean
}

const AboutMe: FC<Props> = ({ aboutMeSelected }) => {
    const transition = useTransition(aboutMeSelected, {
        from: { x: -1000, y: 0, opacity: 0 },
        enter: { x: 0, y: 0, opacity: 1 },
        leave: { x: 1000, y: 0, opacity: 0 },
        reverse: aboutMeSelected,
        config: config.molasses,
        delay: 300,
    })

    return transition((style, item) => {
        return item ? (
            <animated.div style={style}>
                <Container maxWidth="xl">
                    <div className="about-me">
                        <div className="portrait__content__bot">
                            <div className="bottom-title">
                                <Stack
                                    spacing={2}
                                    direction="row"
                                    sx={{
                                        marginBottom: '1rem',
                                        textTransform: 'uppercase',
                                    }}
                                >
                                    <AnimatedHeader
                                        text="Caleb"
                                        delay={1500}
                                        fontColor="__primary"
                                        usePaddingBottom
                                        endX={0}
                                    />
                                    <AnimatedHeader
                                        text="Tracey"
                                        delay={1000}
                                        fontColor="__light"
                                        usePaddingBottom
                                        endX={0}
                                    />
                                </Stack>
                            </div>
                            <img src={portrait} alt="portrait" />
                            <Stack
                                spacing={2}
                                sx={{ marginTop: '2rem', alignItems: 'center' }}
                            >
                                <AnimatedLink
                                    text="caleb.tracey@gmail.com"
                                    href="mailto:caleb.tracey@gmail.com"
                                    delay={400}
                                />
                                <AnimatedHeader
                                    text="207-332-0452"
                                    delay={350}
                                    fontSize="1rem"
                                    fontColor="__light"
                                />
                            </Stack>
                        </div>

                        <div className="animated-text-container bottom-text">
                            <Stack
                                spacing={2}
                                sx={{ marginTop: '2rem', marginBottom: '2rem' }}
                            >
                                <AnimatedText
                                    text={text1}
                                    delay={800}
                                    fontColor="__light"
                                />
                                <AnimatedText
                                    text={text2}
                                    delay={1600}
                                    fontColor="__light"
                                />
                                <AnimatedText
                                    text={text3}
                                    delay={2400}
                                    fontColor="__light"
                                />
                                <AnimatedText
                                    text={text4}
                                    delay={3200}
                                    fontColor="__light"
                                />
                            </Stack>
                        </div>
                    </div>
                </Container>
            </animated.div>
        ) : (
            ''
        )
    })
}

export default AboutMe
