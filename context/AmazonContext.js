import { createContext, useState, useEffect } from 'react'
import { useMoralis } from 'react-moralis'

export const AmazonContext = createContext()

export const AmazonProvider = ({ children }) => {
    const [username, setUsername] = useState('')
    const [nickname, setNickname] = useState('')

    const {
        Authenticate,
        isAuthenticated,
        enableWeb3,
        Moralis,
        user,
        isWeb3Enabled,
    } = useMoralis

    useEffect(() => {
        ; (async () => {
            if (isAuthenticated) {
                const currentUsername = await user?.get('nickname')
                setUsername(currentUsername)
            }
        })()
    }, [isAuthenticated, user, username]);

    const handleSetUsername = (username) => {
        if (user) {
            if (nickname) {
                user.set('nickname', nickname)
                user.save()
                setNickname('')
            } else {
                console.log("can't set empty nicknames")
            }
        } else {
            console.log('No user')
        }
    }

    return (
        <AmazonContext.Provider
            value={{
                isAuthenticated,
                nickname,
                setNickname,
                username,
                setUsername,
                handleSetUsername,
            }}
        >
            {children}
        </AmazonContext.Provider>
    )
}