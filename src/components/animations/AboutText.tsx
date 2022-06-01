import React, { FC } from 'react'

const text = 'Come back later!'

const AboutText: FC = () => {
    return (
        <span
            className="span-text__light"
            style={{ fontSize: '1.5em', padding: '3rem', textAlign: 'center' }}
        >
            {text}
        </span>
    )
}

export default AboutText
