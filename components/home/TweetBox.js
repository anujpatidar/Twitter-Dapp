import React, { useState, useRef} from 'react'
import { BsCardImage, BsEmojiSmile } from 'react-icons/bs'
import { RiFileGifLine, RiBarChartHorizontalFill } from 'react-icons/ri'
import { IoMdCalendar } from 'react-icons/io'
import { MdOutlineLocationOn } from 'react-icons/md'
import {client} from '../../lib/client'
import { useContext } from 'react'
import { TwitterContext } from '../../context/TwitterContext'


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
    const [tweetMessage, setTweetMessage] = useState()
    const [image,setImage] =useState('')
    const {currentAccount, currentUser} = useContext(TwitterContext)
    const [imageUrlBox, setImageUrlBox] = useState(false)
    const imageInputRef = useRef(null)

    const addImageToTweet = async(event) => {
        event.preventDefault()
        if(!imageInputRef.current?.value) return
        setImage(imageInputRef.current.value)
        imageInputRef.current.value = ''
        setImageUrlBox(false)

    }

    const postTweet = async (event) => {
        event.preventDefault()
    

        if (!tweetMessage) return
        const tweetId = `${currentAccount}_${Date.now()}`

        const tweetDoc = {
            _type: 'tweets',
            _id: tweetId,
            tweet: tweetMessage,
            tweetImage: image,
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
                          
                        
                          <BsCardImage onClick={() => setImageUrlBox(!imageUrlBox)}
                          className={style.icon} />
                           
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
                  {imageUrlBox &&(
                       <form className='mt-5 flex rounded-lg bg-[#334250a7] py-2 px-4'>
                           <input ref={imageInputRef}
                           className='flex-1 bg-transparent p-2 text-white outline-none placeholder:text-[#334250a]' type="text" placeholder='Enter Image URL...'/>
                        <button type='submit' onClick={(e) => addImageToTweet(e)}
                         className='font-medium text-[#dadada] '>Add Image</button>
                      </form>

                  )}
                  {image && (
                    <img className='mt-10 h-40 w-full rounded-xl object-contain shadow-lg' src={image} alt=''/>
                  )}
              </form>
          
          </div>
        
    </div>
  )
}

export default TweetBox