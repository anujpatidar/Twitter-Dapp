import { useContext, useEffect, useState } from 'react'
import { TwitterContext } from '../../context/TwitterContext'
import { useRouter } from 'next/router'
import { BsArrowLeftShort } from 'react-icons/bs'
import { MdVerified } from "react-icons/md"

const style = {
    wrapper: ``,
    header: `py-1 px-3 mt-2 flex items-center`,
    primary: `bg-transparent outline-none font-medium`,
    primary2: `bg-transparent flex justify-between text-lg outline-none font-medium`,
    secondary: `text-[#8899a6] text-xs`,
    backButton: `text-3xl cursor-pointer mr-2 rounded-full hover:bg-[#313b44] p-1`,
    coverPhotoContainer: `flex items-center justify-center rounded-3xl mx-3 mt-3 overflow-hidden`,
    coverPhoto: `object-cover h-full w-full`,
    profileImageContainer: ` h-[8rem] rounded-full my-[-2.5rem] mb-1 flex align-text-bottom  items-center px-3 `,
    profileImage: `object-cover rounded-full h-full`,
    profileImageNft: `object-cover h-full`,
    profileImageMint: `bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
    details: `px-3 `,
    details2: `px-5 mt-8 flex items-center justify-between`,
    nav: `flex justify-around mt-4 mb-2 text-sm font-medium text-[#8899a6]`,
    activeNav: `text-[#1da1f2]`,
    verfied: `text-md px-3 py-1 text-[#32abf2]`,
}

const ProfileHeader = () => {
    const router = useRouter();
    const { currentAccount, currentUser } = useContext(TwitterContext)
    
  return (
      <div className={style.wrapper}>
          <div className={style.header}>
              <div onClick={() => router.push('/')} className={style.backButton}>
                  <BsArrowLeftShort />
              </div>
              <div className={style.details}>
                  <div className={style.primary}>{currentUser.name}</div>
                  <div className={style.secondary}>
                      {currentUser.tweets?.length} Tweets
                  </div>
              </div>
          </div>
          <div className={style.coverPhotoContainer}>
              <img
                  src={currentUser.coverImage}
                  alt={currentUser.walletAddress}
                  className={style.coverPhoto}
              />
          </div>
          <div className={style.profileImageContainer}>
              <div className={currentUser.isProfileImageNft ? 'hex' : style.profileImageContainer}>
                  <img
                      src={currentUser.profileImage}
                      alt='profile pic'
                      className={currentUser.isProfileImageNft
                          ? style.profileImageNft
                          : style.profileImage}
                  />
              </div>

          <div className={style.details2}>
              <div>
                      <div className={style.primary2}>{currentUser.name}
                      <span className={style.verfied}>
                          <MdVerified />
                      </span>
                      </div>
                  <div className={style.secondary}>
                          @{currentAccount.slice(0, 8)}...{currentAccount.slice(37)}
                  </div>
              </div>
      </div>
          </div>
          <div className={style.details}>
          <div className={style.nav}>
              <div className={style.activeNav}>Tweets</div>
              <div>Tweets & Replies</div>
              <div>Media</div>
              <div>Likes</div>
          </div>
          </div>
      </div>
  )
}

export default ProfileHeader