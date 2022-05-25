import React, { FC } from 'react'

const text =
    // eslint-disable-next-line max-len
    'This over-engineered vanity site is a work in progress.'

const AboutText: FC = () => {
    return (
        <span className="span-text__light" style={{ fontSize: '1.5em' }}>
            {text}
        </span>
    )
}

export default AboutText
