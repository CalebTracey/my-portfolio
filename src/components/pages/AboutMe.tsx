/* eslint-disable max-len */
import React, { FC, useEffect, useState } from 'react'
import { animated, config, useTransition } from '@react-spring/web'
import { Container, Stack } from '@mui/material'
// import { fontStyle } from '@mui/system'
import AnimatedText from '../animations/AnimatedText'
import portrait from '../portraitbw.jpeg'
import AnimatedLink from '../animations/AnimatedLink'
import AnimatedHeader from '../animations/AnimatedHeader'

const text1 =
    "Hello! My name is Caleb and I enjoy building things both on and offline. My interest in software development began during my time working construction. I've always had a passion for hands-on team based environments and enjoy the process of seeing a project through to completion. Coding presented a way for me to combine my favorite aspects of construction with my interest in technology, all the while presenting new and interesting challenges."
const text2 =
    "I was born and raised in Portland, Maine. I've lived elsewhere but I always find myself back in vacationland. I'm still based out of Portland and don't see that changing anytime soon."
const text3 =
    "I'm currently an API developer working mostly with Go and Java. I also have experience with Angular, React, Kubernetes, and GitLab CI"
const text4 =
    'Besides coding I enjoy playing the guitar, writing/recording music, doing carpentry projects, and getting outside!'

interface Props {
    aboutMeSelected: boolean
}

const AboutMe: FC<Props> = ({ aboutMeSelected }) => {
    const [direction, setDirection] = useState<'row' | 'column'>('row')
    const transition = useTransition(aboutMeSelected, {
        from: { x: -1000, y: 0, opacity: 0 },
        enter: { x: 0, y: 0, opacity: 1 },
        leave: { x: 1000, y: 0, opacity: 0 },
        reverse: aboutMeSelected,
        config: config.stiff,
        delay: 300,
    })

    useEffect(() => {
        if (direction !== 'column' && window.innerWidth <= 900) {
            setDirection('column')
        } else if (direction !== 'row' && window.innerWidth >= 900) {
            setDirection('row')
        }
    }, [direction])

    return transition((style, item) => {
        return item ? (
            <animated.div style={style}>
                <Container maxWidth="xl">
                    <div style={{ display: 'flex', flexDirection: direction }}>
                        <div className="portrait__content__bot">
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                }}
                            >
                                <Stack
                                    spacing={2}
                                    direction="row"
                                    sx={{
                                        marginBottom: '1rem',
                                        // fontStyle: 'italic',
                                        textTransform: 'uppercase',
                                    }}
                                >
                                    <AnimatedHeader
                                        text="Caleb"
                                        delay={1500}
                                        fontSize="2rem"
                                        fontColor="__primary"
                                        usePaddingBottom
                                        endX={0}
                                    />
                                    <AnimatedHeader
                                        text="Tracey"
                                        delay={1000}
                                        fontSize="2rem"
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

                        <div className="animated-text-container">
                            <Stack spacing={2} sx={{ marginTop: '2rem' }}>
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
