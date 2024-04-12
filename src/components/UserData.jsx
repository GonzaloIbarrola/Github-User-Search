/* eslint-disable no-unused-vars */
/* eslint-disable no-func-assign */
/* eslint-disable react/prop-types */
import functions from '../controllers/functions';

import {CompanyIcon, LocationIcon, TwitterIcon, WebsiteIcon} from '../assets/'

export default function UserData({data}) {

  const items = [
  {
    'title' : `${data.location}`,
    'icon' : LocationIcon,
    'alt' : 'Location icon'
  },
  {
    'title' : `${data.blog}`,
    'icon' : WebsiteIcon,
    'alt' : 'Blog icon'
  },
  {
    'title' : `${data.twitter_username}`,
    'icon' : TwitterIcon,
    'alt' : 'Twitter icon'
  },
  {
    'title' : `${data.company}`,
    'icon' : CompanyIcon,
    'alt' : 'Company icon'
  }
  ]

  return(
  <section className="userDataContainer">
      <section className='hidden lg:flex  lg:w-[117px]'>
        <div className=''>
          <img src={data.avatar_url} alt="Profile picture" className='w-[70px] md:w-[117px] rounded-full' />
        </div>
      </section>

      <section className='lg:w-[480px]'>
        {/* Main data */}
      <section>
        <article className='flex md:gap-[41px] gap-[19px] mb-[34px]'>
          <div className='lg:hidden'>
            <img src={data.avatar_url} alt="Profile picture" className='w-[70px] md:w-[117px] rounded-full' />
          </div>

          <div className="md:flex md:flex-col md:justify-center lg:flex-row lg:justify-between lg:w-full">
            <div>
              <h2 className='text-gunmetal md:text-[26px] dark:text-pure-white font-bold text-base md:leading-[39px]'>{data.name}</h2>
              <h3 className='text-azure text-[13px] md:text-base md:mb-1 mb-[6px]'>@{data.login}</h3>
            </div>
            <div>
              <p className='text-[13px] md:text-[15px] dark:text-pure-white'>Joined {functions.formatDate(data)}</p>
            </div>
          </div>
        </article>

        {/* Bio */}
        <p className='text-[13px] md:text-[15px] leading-[25px] mb-[23px] dark:text-pure-white'>{data.bio}</p>
      </section>

      {/* Repos + Followers + Following */}
      <article>
        <section className='mb-6 flex justify-around md:px-8 px-[14px] py-[18px] rounded-[10px] dark:bg-dark-gunmetal bg-ghost-white'>
          <div className='md:w-full flex flex-col md:items-start items-center gap-2'>
            <span className='md:text-[13px] text-[11px] dark:text-pure-white '>Repos</span>
            <p className=' md:text-[22px] dark:text-pure-white text-base font-bold uppercase text-gunmetal'>{data.public_repos}</p>
          </div>
          <div className='md:w-full flex flex-col md:items-start items-center gap-2'>
            <span className='md:text-[13px] dark:text-pure-white text-[11px]'>Followers</span>
            <p className=' md:text-[22px] dark:text-pure-white text-base font-bold uppercase text-gunmetal'>{data.followers}</p>
          </div>
          <div className='md:w-full flex flex-col md:items-start items-center gap-2'>
            <span className='md:text-[13px] dark:text-pure-white text-[11px]'>Following</span>
            <p className=' md:text-[22px] dark:text-pure-white text-base font-bold uppercase text-gunmetal'>{data.following}</p>
          </div>
        </section>

        {/* Location + Links */}
        <section className='flex md:grid md:grid-flow-col md:grid-rows-2 flex-col gap-4 lg:text-[15px] text-[13px] lg:flex-wrap'>
          {items.map((item,i) =>
          <div className='text-queen-blue dark:text-pure-white' key={i}>
            {
              (item.title === '' || item.title === 'null') ? 
                (
                  <div className='flex gap-[13px] md:gap-4'>
                    <img src={item.icon} alt={item.alt} className={`dark:brightness-0 opacity-50 dark:invert dark:opacity-50 h-5`} />
                    <span className='opacity-50'>Not available</span>
                  </div>
                ) : (
                <div className='flex gap-[13px] md:gap-4'>
                  <img src={item.icon} alt={item.alt} className={`dark:brightness-0 dark:invert h-5`} />
                  <span className=''>{item.title}</span>
                </div>
              )
            }
          </div>
          )}
        </section>
      </article>
    </section>
  </section>
  )
}
