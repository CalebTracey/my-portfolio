import React, { useState, FC } from 'react'
import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import WorkIcon from '@mui/icons-material/Work'
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople'
import ContactMailIcon from '@mui/icons-material/ContactMail'
import { Theme } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

interface Props {
    bottomNavTheme: Theme
}

const BottomNavigationBar: FC<Props> = ({ bottomNavTheme }) => {
    const [value, setValue] = useState(0)

    return (
        <Box sx={{ width: '100%' }}>
            <ThemeProvider theme={bottomNavTheme}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue)
                    }}
                    style={{
                        backgroundColor: '#f8f9fa',
                    }}
                >
                    <BottomNavigationAction
                        label="Projects"
                        icon={<WorkIcon />}
                    />
                    <BottomNavigationAction
                        label="About me"
                        icon={<EmojiPeopleIcon />}
                    />
                    <BottomNavigationAction
                        label="Get in touch"
                        icon={<ContactMailIcon />}
                    />
                </BottomNavigation>
            </ThemeProvider>
        </Box>
    )
}

export default BottomNavigationBar
