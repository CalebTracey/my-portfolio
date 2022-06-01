import React, { useState, FC } from 'react'
import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import WorkIcon from '@mui/icons-material/Work'
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople'
// import ContactMailIcon from '@mui/icons-material/ContactMail'
import { Theme } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

interface Props {
    bottomNavTheme: Theme
    projectsSelected: boolean
    aboutMeSelected: boolean
    getInTouchSelected: boolean
    setProjectsSelected: (projectsSelected: boolean) => void
    setAboutMeSelected: (aboutMeSelected: boolean) => void
    setGetInTouchSelected: (getInTouchSelected: boolean) => void
}

const BottomNavigationBar: FC<Props> = ({
    bottomNavTheme,
    projectsSelected,
    aboutMeSelected,
    getInTouchSelected,
    setProjectsSelected,
    setAboutMeSelected,
    setGetInTouchSelected,
}) => {
    const [value, setValue] = useState(0)

    const handleProjectsSelected = (): void => {
        setProjectsSelected(!projectsSelected)
        if (aboutMeSelected) {
            setAboutMeSelected(false)
        }
        if (getInTouchSelected) {
            setGetInTouchSelected(false)
        }
    }

    const handleAboutMeSelected = (): void => {
        setAboutMeSelected(!aboutMeSelected)
        if (projectsSelected) {
            setProjectsSelected(false)
        }
        if (getInTouchSelected) {
            setGetInTouchSelected(false)
        }
    }

    // const handleGetInTouchSelected = (): void => {
    //     setGetInTouchSelected(!getInTouchSelected)
    //     if (projectsSelected) {
    //         setProjectsSelected(false)
    //     }
    //     if (aboutMeSelected) {
    //         setAboutMeSelected(false)
    //     }
    // }

    return (
        <Box sx={{ width: '100%', zIndex: '20' }}>
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
                        label="About me"
                        icon={<EmojiPeopleIcon />}
                        onClick={() => handleAboutMeSelected()}
                    />
                    <BottomNavigationAction
                        label="Projects"
                        icon={<WorkIcon />}
                        onClick={() => handleProjectsSelected()}
                    />
                    {/* <BottomNavigationAction
                        label="Get in touch"
                        icon={<ContactMailIcon />}
                        onClick={() => handleGetInTouchSelected()}
                    /> */}
                </BottomNavigation>
            </ThemeProvider>
        </Box>
    )
}

export default BottomNavigationBar
