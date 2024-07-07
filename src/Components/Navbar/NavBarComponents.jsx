import { BiPhoneCall } from 'react-icons/bi';
import DarkMode from './Darkmode';
import ball from '../../assets/ball1.png';

// eslint-disable-next-line react-refresh/only-export-components
export const Navlinks = [
  {
    id: 1,
    name: "SERVICES",
    link: "/services",
  },
  {
    id: 2,
    name: "ABOUT",
    link: "/services",
  },
  {
    id: 3,
    name: "JOIN",
    link: "/services",
  },
];

const NavBarComponents = () => {
  return (
    <>
      <nav className="shadow-md w-full dark:bg-dark dark:text-white">
        <div className="container mx-auto h-20">
          <div className="flex items-center justify-between py-4 h-full">
            <div className="items-center gap-2 hidden md:flex">
              <BiPhoneCall className="mr-2 text-2xl text-primary animate-pulse group-hover:scale-105 duration" />
              <span>+628123456789</span>
            </div>
            <div className="flex items-center justify-center flex-grow">
              <img src={ball} alt="ball" className="w-16 sm:w-24" />
            </div>
            <div className="items-center gap-2 hidden md:flex">
              <ul className="flex gap-4">
                {Navlinks.map(({ id, name, link }) => (
                  <li key={id}>
                    <a
                      href={link}
                      className="inline-block text-lg font-semibold hover:text-primary duration-200"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className='cursor-pointer p-5'>
                <DarkMode />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBarComponents;
