import Bannerimg from '../../assets/man.png';

const About3 = () => {
    return (
        <div className='py-16 dark:bg-black bg-slate-100 duration-200 dark:text-white'>
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
                    {/* { image section } */}
                    <div>
                        <img src={Bannerimg} alt="banner" className='sm:scale-105 max-h-[300px] drop-shadow-md mx-auto'></img>
                    </div>
                    {/* { text section } */}
                    <div className=' space-y-4 px-2'>
                        {/* Heading Section */}
                        <div className='flex items-center gap-4'>
                            <div className='text-primary text-7xl '>
                                <h1 className='font-bold'>03</h1>
                            </div>
                            <div className='items-center gap-4'>
                                <p className=' text-primary'>Global Fitness</p>
                                <h1 className='text-2xl sm:text-4xl font-bold'>About Us</h1>
                            </div>
                        </div>
                        {/* Bottom Section */}
                        <div >
                            <p >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quidem.
                                asprenatur, magnam tenetur odio quo et molestias
                                Lorem {" "}
                                <br/>
                                <br/>
                                dolor sit amet consectetur adipisicing elit.
                                sequi, tempora
                            </p>
                        </div>
                            <button className='outline-btn '> Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About3