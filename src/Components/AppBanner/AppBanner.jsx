
import { BiLogoPlayStore } from 'react-icons/bi';
import Bannerimg from '../../assets/AppBanner.png';
import AppStoreImg from '../../assets/AppStore.png';
import PlayStoreImg from '../../assets/PlayStore.png';

const bannerImg = {
  backgroundImage: `url(${Bannerimg})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100%',
  width: '100%',
}


const AppBanner = () => {
  return (
    <div>
      <div className="container text-white mb-4" > 
        <div style={bannerImg}>
          <div className='sm:min-h-[400px] sm:flex justify-end sm:items-center rounded-xl'>
            <div className=' space-y-6 max-w-xl mx-auto'>
              <h1 className='text-2xl text-center sm:text-4xl font-semibold'>Download The App</h1>
              <p className='text-center sm:px-20 '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quasi, quidem. asprenatur, magnam tenetur odio quo et molestias
                Lorem ipsum dolor sit amet consectetur adipisicing elit{""}
              </p>

              <div>
                <a href='#'>
                  <div className='flex justify-center items-center gap-2 pb-3'>
                    <img src={Bannerimg} alt='banner' className='max-w-[150px] sm:max-w-[200px]' />
                  </div>
                  <div className='items-center flex justify-center gap-2 '>
                    <img src={AppStoreImg} alt='AppStore' className='max-w-[150px] sm:max-w-[120px] md:200 bg-white/50 dark:bg-black/50 duration-200' />
                    <img src={PlayStoreImg} alt='PlayStore' className='max-w-[150px] sm:max-w-[120px] md:200 bg-white/50 dark:bg-black/50 duration-200' />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppBanner