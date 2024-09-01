import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useNavigate } from "react-router-dom";
import Linkedin from '../../../../public/linkedin.png'
import Github from '../../../../public/github.png'
import Whatsapp from '../../../../public/Whatsapp.png'

const navigation = [
  { name: 'Inicio', href: '/', current: false },
  { name: 'Tecnologias', href: '/Tecnologys', current: false },
  { name: 'Proyectos', href: '/Projects', current: false },
  { name: 'Cotizaciones', href: '/Budget', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  return (
      <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link
              to="/"
              >
              <img
                alt="Your Company"
                src="../../../../public/DevAP.svg"
                className="h-8 w-auto"
              />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Contacto</span>
                  <img
                    alt=""
                    src="https://media.licdn.com/dms/image/v2/D4E35AQHFQoXK-q6_cA/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1718979281074?e=1725249600&v=beta&t=h1_2lU_2QjVmr8LyYjDlGMhr36zbiwDknLwCEGiFqPQ"
                    className="h-8 w-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                
                  <a href="https://www.linkedin.com/in/alan-g-parra-robledo-617a4a138/" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                  <img className="w-4 h-4" src={Linkedin}/> Linkedin
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="https://github.com/Alan250812GPR" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                  <img className="w-4 h-4" src={Github}/> Github
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="https://api.whatsapp.com/send?phone=5213334589543&text=Hola%20Alan%20vi%20tu%20portafolio%20y%20me%20intetesa%20tu%20perfil%20%F0%9F%A4%91%F0%9F%91%80" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                  <img className="w-4 h-4" src={Whatsapp}/> Whatsapp
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}

export default Navbar
  