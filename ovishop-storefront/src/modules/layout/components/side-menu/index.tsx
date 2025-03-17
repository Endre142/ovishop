// "use client"

// import { Popover, PopoverPanel, Transition } from "@headlessui/react"
// import { ArrowRightMini, XMark } from "@medusajs/icons"
// import { Text, clx, useToggleState } from "@medusajs/ui"
// import { Fragment } from "react"

// import LocalizedClientLink from "@modules/common/components/localized-client-link"
// import CountrySelect from "../country-select"
// import { HttpTypes } from "@medusajs/types"

// const SideMenuItems = {
//   Home: "/",
//   Store: "/store",
//   Category: "/categories",
//   Account: "/account",
//   //Cart: "/cart",
//   Search: "/search",
// }

// const SideMenu = ({ regions }: { regions: HttpTypes.StoreRegion[] | null }) => {
//   const toggleState = useToggleState()

//   return (
//     <div className="h-full">
//       <div className="flex items-center h-full">
//         <Popover className="h-full flex">
//           {({ open, close }) => (
//             <>
//               <div className="relative flex h-full ">
//                 <Popover.Button
//                   data-testid="nav-menu-button"
//                   className="relative h-full flex items-center transition-all ease-out duration-200 focus:outline-none bg-gray_combination-button_col px-4 sm:px-6  hover:bg-gray_combination-button_col_hover"
//                 >
//                   Menu
//                 </Popover.Button>
//               </div>

//               <Transition
//                 show={true}
//                 as={Fragment}
//                 enter="transition ease-out duration-150"
//                 enterFrom="opacity-0"
//                 enterTo="opacity-100 backdrop-blur-2xl"
//                 leave="transition ease-in duration-150"
//                 leaveFrom="opacity-100 backdrop-blur-2xl"
//                 leaveTo="opacity-0"
//               >
//                 <PopoverPanel className="flex flex-col absolute w-full pr-4 sm:pr-0 sm:w-1/3 2xl:w-1/4 sm:min-w-min h-[calc(100vh-1rem)] z-30 inset-x-0 text-sm text-ui-fg-on-color m-2 backdrop-blur-2xl">
//                   <div
//                     data-testid="nav-menu-popup"
//                     className="flex flex-col h-full bg-[rgba(3,7,18,0.5)] rounded-rounded justify-between p-6"
//                   >
//                     <div className="flex justify-end" id="xmark">
//                       <button data-testid="close-menu-button" onClick={close}>
//                         <XMark />
//                       </button>
//                     </div>
//                     <ul className="flex flex-col gap-6 items-start justify-start">
//                       {Object.entries(SideMenuItems).map(([name, href]) => {
//                         return (
//                           <li key={name}>
//                             <LocalizedClientLink
//                               href={href}
//                               className="text-3xl leading-10 hover:text-ui-fg-disabled"
//                               onClick={close}
//                               data-testid={`${name.toLowerCase()}-link`}
//                             >
//                               {name}
//                             </LocalizedClientLink>
//                           </li>
//                         )
//                       })}
//                     </ul>
//                     <div className="flex flex-col gap-y-6">
//                       <div
//                         className="flex justify-between"
//                         onMouseEnter={toggleState.open}
//                         onMouseLeave={toggleState.close}
//                       >
//                         {regions && (
//                           <CountrySelect
//                             toggleState={toggleState}
//                             regions={regions}
//                           />
//                         )}
//                         <ArrowRightMini
//                           className={clx(
//                             "transition-transform duration-150",
//                             toggleState.state ? "-rotate-90" : ""
//                           )}
//                         />
//                       </div>
//                       <Text className="flex justify-between txt-compact-small">
//                         © {new Date().getFullYear()} Ovi Store. Hight Quality
//                         reserved.
//                       </Text>
//                     </div>
//                   </div>
//                 </PopoverPanel>
//               </Transition>
//             </>
//           )}
//         </Popover>
//       </div>
//     </div>
//   )
// }

// export default SideMenu



"use client"

import { useEffect, useState } from "react"
import { ArrowRightMini, XMark, BarsThree } from "@medusajs/icons" // Hamburger ikon
import { Text, clx, useToggleState } from "@medusajs/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CountrySelect from "../country-select"
import { HttpTypes } from "@medusajs/types"

const SideMenuItems = {
  Home: "/",
  Store: "/store",
  Category: "/categories",
  Account: "/account",
  Search: "/search",
}

const SideMenu = ({ regions }: { regions: HttpTypes.StoreRegion[] | null }) => {
  const [open, setOpen] = useState(false) // Menü nyitva/zárva
  const toggleState = useToggleState()

  useEffect(() => {
    if (open) {
      document.body.classList.add('side-menu-open')
    } else {
      document.body.classList.remove('side-menu-open')
    }
  }, [open])

  return (
    <div className="relative h-full">
      {/* Menü gomb */}
      <button
        onClick={() => setOpen(!open)}
        // onMouseEnter={() => setOpen((prev) => !prev)}
        className="relative h-full flex items-center justify-center transition-all ease-out duration-200 focus:outline-none bg-gray_combination-button_col px-4 sm:px-4 hover:bg-gray_combination-button_col_hover z-40 gap-2"
      >
        {open ? "Menu" : <BarsThree className="items-center w-6 h-6 " />} {/* Ha nyitva, Menu szöveg, ha zárva, ikon */}
      </button>

      {/* Oldalsó menü BALRÓL */}
      <div
        className={clx(
          "fixed top-15 left-0 h-full w-[300px] bg-[rgba(3,7,18,0.95)] text-white z-50 p-6  shadow-lg",
          "transform transition-transform duration-300",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Bezáró gomb */}
        <div className="flex justify-end">
          <button onClick={() => setOpen(false)}>
            <XMark className="w-8 h-8" />
          </button>
        </div>

        {/* Menü elemek */}
        <ul className="flex flex-col gap-6 items-start mt-8">
          {Object.entries(SideMenuItems).map(([name, href]) => (
            <li key={name}>
              <LocalizedClientLink
                href={href}
                className="text-2xl leading-10 hover:text-gray-400"
                onClick={() => setOpen(false)} // Menü záródik linkre kattintva
              >
                {name}
              </LocalizedClientLink>
            </li>
          ))}
        </ul>

        {/* Országválasztó és copyright */}
        <div className="flex flex-col gap-y-6 mt-auto pt-10">
          <div
            className="flex justify-between items-center cursor-pointer"
            onMouseEnter={toggleState.open}
            onMouseLeave={toggleState.close}
          >
            {regions && (
              <CountrySelect toggleState={toggleState} regions={regions} />
            )}
            <ArrowRightMini
              className={clx(
                "transition-transform duration-150",
                toggleState.state ? "-rotate-90" : ""
              )}
            />
          </div>
          <Text className="flex justify-between txt-compact-small text-gray-400">
            © {new Date().getFullYear()} Ovi Store. High Quality reserved.
          </Text>
        </div>
      </div>
    </div>
  )
}

export default SideMenu
