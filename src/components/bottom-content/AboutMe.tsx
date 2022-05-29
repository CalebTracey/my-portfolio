/* eslint-disable max-len */
import React, { FC } from 'react'
import { animated, config, useTransition } from '@react-spring/web'
import { Container } from '@mui/material'
import AnimatedTextLight from '../AnimatedTextLight'

const text2 =
    'Besides coding I enjoy playing guitar, writing/recording music, doing carpentry projects, and getting outside!'

const text1 =
    "I'm currently an API developer working mostly with Go. \nI also am experienced with Spring Boot, Kubernetes, GitLab CI/CD, Angular, and React."

interface Props {
    aboutMeSelected: boolean
}

const AboutMe: FC<Props> = ({ aboutMeSelected }) => {
    const transition = useTransition(aboutMeSelected, {
        from: { x: -1000, y: 0, opacity: 0 },
        enter: { x: 0, y: 0, opacity: 1 },
        leave: { x: 1000, y: 0, opacity: 0 },
        reverse: aboutMeSelected,
        config: config.stiff,
        delay: 300,
    })

    return transition((style, item) => {
        return item ? (
            <animated.div
                className="span-text__light text-align-center"
                style={style}
            >
                <span
                    style={{
                        fontSize: '1.5em',
                        textAlign: 'center',
                    }}
                >
                    <span
                        className="span-header__light"
                        style={{ fontSize: '2rem' }}
                    >
                        About Me
                    </span>
                    <Container>
                        <div
                            style={{
                                fontSize: '65%',
                                paddingTop: '2rem',
                                textAlign: 'initial',
                            }}
                        >
                            <AnimatedTextLight text={text1} delay={800} />
                            <div style={{ marginTop: '2rem' }}>
                                <AnimatedTextLight text={text2} delay={2000} />
                            </div>
                        </div>
                    </Container>
                </span>
            </animated.div>
        ) : (
            ''
        )
    })
}

export default AboutMe
