

import { RxShadowOuter } from 'react-icons/rx';
import Bannerimg from '/Images/banner1.png';

const BgStyle = {
    backgroundImage: `url(${Bannerimg})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
};

const Hero = () => {
    return (
      <div className="mr-10 ml-10">
        <div style={BgStyle} className="bg-white dark:bg-black duration-200 ">
          <div className="bg-white/20 dark:bg-black/20 duration-200">
            <div className="container min-h-[620px] flex items-center space-x-5">
              <div className="w-full md:w-[800px] mx-auto gap-2">
                {/* <p className=" text-4xl font-extrabold text-amber-300 drop-shadow-lg">
                  Start Your Sport Journey
                </p> */}
                <h1 className="text-7xl font-bold text-white drop-shadow-lg shadow-pink-600 dark:text-white mb-2">
                  Selamat Datang di SPORTIFY!
                </h1>
                <p className="dark:text-white font-serif mr-24 pr-6">
                  Kami memastikan untuk memenuhi kebutuhan Olahraga di bidang
                  VOLLY, FUTSAL dan BULUTANGKIS,nTerletak di Semarang dan
                  sekitarnya. Dapatkan Gratis Pengiriman & Ekstra 1 hari untuk
                  sewa 2 hari
                </p>
                <button className="primary-btn">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Hero