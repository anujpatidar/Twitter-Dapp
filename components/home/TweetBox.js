import { useState} from 'react'
import { BsCardImage, BsEmojiSmile } from 'react-icons/bs'
import { RiFileGifLine, RiBarChartHorizontalFill } from 'react-icons/ri'
import { IoMdCalendar } from 'react-icons/io'
import { MdOutlineLocationOn } from 'react-icons/md'
import {client} from '../../lib/client'
import { useContext } from 'react'
import { TwitterContext } from '../../context/TwitterContext'
import { useRouter } from 'next/router'

const style = {
    wrapper: `p-4 my-5 mx-3 rounded-3xl  bg-[#191d20] flex flex-row `,
    tweetBoxLeft: `m-4`,
    tweetBoxRight:`flex-1 mr-2 mb-2 mt-4`,
    profileImage: `h-[48px] w-[48px] object-cover rounded-full flex`,
    inputField: `w-full h-full outline-none bg-transparent ml-3 mt-2`,
    formLowerContainer: `flex`,
    iconsContainer: `text-[#f2f2f2] flex flex-1 px-2 items-center`,
    icon: `mr-2`,
    submitGeneral: `px-8 py-3 rounded-xl text-sm font-medium`,
    inactiveSubmit: `bg-[#1da1f2] text[#95999e]`,
    activeSubmit: `bg-[#1b8cd8] text-white`,
    fileInput: `hidden`,
}
const TweetBox = () => {
    const [tweetMessage, setTweetMessage] = useState('')
    const {currentAccount, currentUser} = useContext(TwitterContext)

    const postTweet = async (event) => {
        event.preventDefault()
    

        if (!tweetMessage) return
        const tweetId = `${currentAccount}_${Date.now()}`

        const tweetDoc = {
            _type: 'tweets',
            _id: tweetId,
         
            tweetImage: tweetImage,
            timestamp: new Date(Date.now()).toISOString(),
            author: {
                _key: tweetId,
                _ref: currentAccount,
                _type: 'reference',
            },
        }

        await client.createIfNotExists(tweetDoc)

        await client
            .patch(currentAccount)
            .setIfMissing({ tweets: [] })
            .insert('after', 'tweets[-1]', [
                {
                    _key: tweetId,
                    _ref: tweetId,
                    _type: 'reference',
                },
            ])
            .commit()

        setTweetMessage('')
    }
   return (
    <div className={style.wrapper}>
        <div className={style.tweetBoxLeft}>
            
              <img src={currentUser.profileImage} alt="profile image"
                className={currentUser.isProfileImageNft ? `${style.profileImage} smallHex` : style.profileImage} />
            
        </div>
          <div className={style.tweetBoxRight}>
              <form>
                  <textarea
                      onChange={(e) => setTweetMessage(e.target.value)}
                      value={tweetMessage}
                      placeholder="What's happening?"
                      className={style.inputField}
                  />
                  <div className={style.formLowerContainer}>
                      <div className={style.iconsContainer}>
                           <label
                               htmlFor='image-upload'
                           >
                               <input
                                   type='file'
                                   id='image-upload'
                                   accept='.jpg, .jpeg, .png'
                                   className={style.fileInput}
                                   placeholder='Image URL'
                                   onChange={e => setTweetImage(e.target.value)}
                               />
                        
                                <BsCardImage className={style.icon} />
                           </label>
                          <RiFileGifLine className={style.icon} />
                          <RiBarChartHorizontalFill className={style.icon} />
                          <BsEmojiSmile className={style.icon} />
                          <IoMdCalendar className={style.icon} />
                          <MdOutlineLocationOn className={style.icon} />
                         
                      </div>
                      <button
                          type='submit'
                          onClick={(event) => postTweet(event)}
                          className={`${style.submitGeneral} ${tweetMessage ? style.activeSubmit : style.inactiveSubmit
                              }`}
                      >
                          Tweet
                           
                      </button>
                  </div>
              </form>
          
          </div>
        
    </div>
  )
}

export default TweetBox