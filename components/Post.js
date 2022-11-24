import { MdVerified } from "react-icons/md"
import { format } from 'timeago.js'
import { TbMessageDots } from 'react-icons/tb'
import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai"
import { BiShare } from "react-icons/bi"

const style = 
{
    wrapper: ` mt-4 mx-3 flex p-3 bg-[#191d20] rounded-3xl `,
    profileImage: `rounded-full h-[40px] w-[40px] my-4 ml-4 mr-2 object-cover`,
    postMain: `flex-1 mt-3  px-4`,
    headerDetails: `flex items-center`,
    name: `font-medium text-sm mr-1`,
    verfied: `text-md px-2 text-[#32abf2]`,
    handleAndTimeAgo: `text-xs text-[#8899a6] ml-1`,
    tweet: `my-2 text-sm`,
    image: `rounded-3xl`,
    footer: `flex justify-between mr-15 ml-15 mt-4 text-[#8899a6]`,
    footerIcon: `text-lg p-2`,
    names: `text-sm`,
}

const Post =({
    displayName,
    userName,
    text,
    avatar,
    timestamp,
    isProfileImageNft,
}) => {
    return (
        <div className={style.wrapper}>
        <div>
              <img src={avatar} alt={userName} className={isProfileImageNft ? `${style.profileImage} smallHex` : style.profileImage} />
        </div>
        <div className={style.postMain}>
            
                <span className={style.headerDetails}>
                      <span className={style.name}>{displayName}</span>
                    {isProfileImageNft && (
                        <span className={style.verfied}>
                              <MdVerified />
                        </span>
                    )}
                <span className={style.handleAndTimeAgo}>
                      @{userName}    •    {format(new Date(timestamp).getTime())}
                </span>
                </span>
                <div className={style.tweet}>{text}</div>
                    
              
                <div className={style.footer}>
                      <div
                          className={`${style.footerIcon} hover:text-[#1d9bf0] `}
                      >
                       <TbMessageDots />
                      </div>
                      <div
                          className={`${style.footerIcon} hover:text-[#03ba7c] `}
                      >
                          <AiOutlineRetweet />
                      </div>
                      <div
                          className={`${style.footerIcon} hover:text-[#f91c80] `}
                      >
                          <AiOutlineHeart/>
                      </div>
                      <div
                          className={`${style.footerIcon} hover:text-[#1d9bf0]`}
                      >
                          <BiShare />
                      </div>  
                </div>
           
        </div>
    </div>
  )
}

export default Post