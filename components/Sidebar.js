import { useContext } from 'react'
import { VscTwitter } from 'react-icons/vsc'
import { AiFillHome } from 'react-icons/ai'
import SidebarOption from '../components/SidebarOption'
import { useState } from 'react'
import { BsChatRightTextFill, BsBellFill, BsFillBookmarkFill, BsListNested, BsPersonFill, BsThreeDots } from "react-icons/bs"
import { FaCompass} from 'react-icons/fa'
import Link from 'next/link'
import { TwitterContext } from '../context/TwitterContext'
import { useRouter } from 'next/router'
import Modal from "react-modal"
import ProfileImageMinter from './mintingModal/ProfileImageMinter'
import { customStyles } from '../lib/constants'


const style = {
    wrapper: ` flex-[0.7]  px-5 flex flex-col bg-[#191d20] rounded-3xl `,
    twitterIconContainer: `text-4xl m-5 text-[#1da1f2]`,
    tweetButton: `bg-[#1da1f2] font-medium hover:bg-[#32abf2] flex items-center justify-center rounded-3xl h-[45px] mb-24 m-5 mt-12 cursor-pointer`,
    navContainer: `flex-1 mt-20`,
}



function Sidebar({initialSelectedIcon = 'Home'}) {
    const [selected, setSelected] = useState(initialSelectedIcon)
    const {currentAccount, currentUser} = useContext(TwitterContext)
    const router = useRouter()
    return(
        <div className={style.wrapper}>
            <div className={style.twitterIconContainer}>
                <VscTwitter />
            </div>
            <div className={style.navContainer}>
                <SidebarOption Icon={selected === 'Home' ? AiFillHome : AiFillHome}
                  text= 'Home'
                  isActive={Boolean(selected === 'Home')}
                  setSelected={setSelected}
                  redirect={'/'}
                />
                <SidebarOption
                    Icon={selected === 'Explore' ? FaCompass : FaCompass}
                    text='Explore'
                    isActive={Boolean(selected === 'Explore')}
                    setSelected={setSelected}
                />
                <SidebarOption
                    Icon={selected === 'Notification' ? BsBellFill : BsBellFill}
                    text='Notification'
                    isActive={Boolean(selected === 'Notification')}
                    setSelected={setSelected}
                />
                <SidebarOption
                    Icon={selected === 'Messages' ? BsChatRightTextFill : BsChatRightTextFill}
                    text='Messages'
                    isActive={Boolean(selected === 'Messages')}
                    setSelected={setSelected}
                />
                <SidebarOption
                    Icon={selected === 'Bookmarks' ? BsFillBookmarkFill : BsFillBookmarkFill}
                    text='Bookmarks'
                    isActive={Boolean(selected === 'Bookmarks')}
                    setSelected={setSelected}
                />
                <SidebarOption
                    Icon={selected === 'Lists' ? BsListNested : BsListNested}
                    text='Lists'
                    isActive={Boolean(selected === 'Lists')}
                    setSelected={setSelected}
                />
                <SidebarOption
                    Icon={selected === 'Profile' ? BsPersonFill : BsPersonFill}
                    text='Profile'
                    isActive={Boolean(selected === 'Profile')}
                    setSelected={setSelected}
                    redirect={'/profile'}
                />
                <SidebarOption Icon={BsThreeDots} text='More' />
            </div>
                <div
                onClick={() => {router.push(`${router.pathname}/?mint=${currentAccount}`)}} 
                className={style.tweetButton}>
                    Mint
                </div>

        <Modal
                isOpen={Boolean(router.query.mint)}
                onRequestClose={() => router.back()}
                style={customStyles}
        >
            <ProfileImageMinter/>
        </Modal>
        </div>
        
    )

}

export default Sidebar