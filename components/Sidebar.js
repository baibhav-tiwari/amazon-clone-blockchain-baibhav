import React, { useContext } from 'react'
import logo from '../assets/amazon_logo.png'
import logoFull from '../assets/amazon_logo_full.png'
import Image from 'next/image'
import { FaBox } from 'react-icons/fa'
import { BsFillBookmarkFill } from 'react-icons/bs'
import { BsFillPersonFill } from 'react-icons/bs'
import { AmazonContext } from '../context/AmazonContext'
import { ConnectButton } from 'web3uikit'
import { AiOutlineHistory } from 'react-icons/ai'
import Link from 'next/link'

const isAuthenticated = true
const username = 'baibhav'

const Sidebar = () => {
    const styles = {
        container: `h-full w-[300px] flex flex-col bg-[#fff] static`,
        profile: ` w-full py-16 flex flex-col justify-center items-center rounded-r-3xl bg-gradient-to-t from-[#0d141c] to-[#42667e] mt-[40px] mb-[50px] border-2 border-[#fb9701]`,
        profilePicContainer: `flex  rounded-xl items-center justify-center w-full h-full mb-5`,
        profilePic: `rounded-3xl object-cover`,
        welcome: ` text-md mb-2 font-bold text-2xl text-white`,
        usernameInput: `bg-transparent border-white border-2 rounded-lg w-[80%] py-2 px-4 text-lg mt-[20px] placeholder:text-white focus:outline-none flex justify-center items-center text-white`,
        username: `flex items-center w-full justify-center`,
        setNickname: `text-lg font-bold flex flex-1 items-center mt-[20px] mb-[20px] text-white`,
        companyName: `text-lg font-bold flex flex-1 pl-10 items-center mt-[20px]`,
    }
    return (
        <div className={styles.container}>
            <div className={styles.profile}>
                {
                    isAuthenticated && (
                        <>
                            <div className={styles.profilePicContainer}>
                                <Image
                                    src={`https://avatars.dicebear.com/api/pixel-art/${username}.svg`}
                                    alt='profile'
                                    className={styles.profilePic}
                                    height={100}
                                    width={100}
                                />
                            </div>
                            {!username ? (
                                <>
                                    <div className={styles.username}>
                                        <input
                                            type="text"
                                            placeholder="Username"
                                            className={styles.usernameInput}
                                        // value={nickname}
                                        // onChange={e=> setNickname(e.target.value)} 
                                        />
                                    </div>
                                    <button
                                        className={styles.setNickname}
                                    // onClick={handleSetUsername}
                                    >
                                        set Nickname
                                    </button>
                                </>
                            ) : (
                                <div>
                                    <div className={styles.welcome}>Welcome {username}</div>
                                </div>

                            )}
                        </>
                    )}
                <div className={styles.ConnectButton}>
                    <ConnectButton />
                </div>
            </div>
            <div className={styles.menu}>
                <link href='/'>
                    <div className={styles.menuItem}>
                        <Image
                            src={logo}
                            height={30}
                            width={30}
                            className={styles.amazonlogo}
                        />
                        My Amazon
                        <br /> board
                    </div>
                </link>
                <div className={styles.menuItem}>
                    <FaBox />
                    Collections
                </div>
                <div className={styles.menuItem}>
                    <BsFillBookmarkFill />
                    Saved
                </div>
                <div className={styles.menuItem}>
                    <BsFillPersonFill />
                    Saved
                </div>
                <link href='/history'>
                    <div className={styles.menuItem}>
                        <AiOutlineHistory />
                        Transaction History
                    </div>
                </link>
            </div>
            <div className={styles.companyName}>
                <Image src={logoFull} alt='amazon' height={100} width={100} />
            </div>
        </div>
    )
}
export default Sidebar