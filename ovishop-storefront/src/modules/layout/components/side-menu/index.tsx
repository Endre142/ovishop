"use client"

import { useEffect, useState, useRef } from "react"
import { ArrowRightMini, XMark, BarsThree, ChevronDown } from "@medusajs/icons"
import { Text, clx, useToggleState } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CountrySelect from "../country-select"
import { HttpTypes } from "@medusajs/types"
import menuData from "./menuItems.json"

// Típusdefiníciók
type LanguageCode = "hu" | "en" | "ro";

type Flags = Record<LanguageCode, string>;

type MenuData = {
  SideMenuItems: Record<string, string>;
  LanguegeMenuItems: Record<string, string>;
  flags: Flags;
};

const SideMenu = ({ regions }: { regions: HttpTypes.StoreRegion[] | null }) => {
  const [open, setOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [menuHeight, setMenuHeight] = useState(0)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [languege, setLanguege] = useState<LanguageCode>("hu")
  const [languegeMenuOpen, setLanguegeMenuOpen] = useState(false)
  const toggleState = useToggleState()

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768) // 768px alatt mobil, felette asztali
      const header = document.querySelector("header")
      const headerHeight = header ? header.offsetHeight : 16
      setMenuHeight(window.innerHeight - headerHeight)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Menü nyitása/zárása
  useEffect(() => {
    if (!isMobile) {
      if (open) {
        document.body.classList.add('side-menu-open')
      } else {
        document.body.classList.remove('side-menu-open')
      }
    }
  }, [open])

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!isMobile && open) {
        const isInsideMenu = menuRef.current?.contains(event.target as Node)
        const isInsideButton = buttonRef.current?.contains(event.target as Node)


        if (!isInsideMenu && !isInsideButton) {
          setOpen(false)
        }
      }
    }
    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [open, isMobile])

  const handleLanguageSelect = (code: LanguageCode) => {
    setLanguege(code);
    setLanguegeMenuOpen(false);
    console.log(`Kiválasztott nyelv: ${code}`);
  };

  return (
    <div className="relative h-full">
      {/* Menü gomb */}
      <button
        ref={buttonRef}
        onClick={() => {
          if (isMobile) {
            setOpen(!open)
          }
        }}
        onMouseEnter={() => {
          if (!isMobile) {
            setOpen(true)
          }
        }}
        className="relative h-full flex items-center justify-center focus:outline-none px-4 sm:px-4 hover:text-gray_combination-button_col_hover"
      >
        {!isMobile ? "Menü" : <BarsThree className="items-center w-6 h-6" />}
      </button>

      {/* Oldalsó menü BALRÓL */}
      <div
        ref={menuRef}
        style={{ height: isMobile ? "" : `${menuHeight}px` }}
        className={clx(
          "fixed top-16 left-0 bg-gray_combination-head_foot text-text1 p-6 shadow-lg flex flex-col",
          "transform transition-transform duration-300",
          open ? "translate-x-0" : "-translate-x-full", // Menü megjelenik/eltűnik
          isMobile ? "w-full h-content" : "w-[300px]"
        )}
      >
        {/* Menü tartalma (kitölti a rendelkezésre álló helyet) */}
        <div className="flex-1">
          <ul className="flex flex-col gap-6 items-start mt-8">
            {Object.entries(menuData.SideMenuItems).map(([name, href]) => (
              <li key={name}>
                <LocalizedClientLink
                  href={href}
                  className="text-2xl leading-10 hover:text-gray_combination-button_col_hover"
                >
                  {name}
                </LocalizedClientLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Nyelvi választó és copyright (a menü alján) */}
        <div className="mt-auto">
          <div className="mb-4 relative">
            {/* Label és gomb elcsúsztatása */}
            <div
              className={clx(
                "transition-transform duration-300",
                !isMobile ? (languegeMenuOpen ? "-translate-y-[110px]" : "translate-y-0") : ""// Elcsúszás felfelé, ha a menü nyitva
              )}
            >
              <label className="pr-8">Nyelv</label>
              {/* Nyelvi választó gomb */}
              <div>
                <button
                  onClick={() => setLanguegeMenuOpen(!languegeMenuOpen)}
                  className="bg-gray_combination-alma pr-6 pl-6 w-full text-left flex items-center justify-between"
                >
                  <span>
                    {menuData.flags[languege]} {/* Zászló megjelenítése */}
                    {Object.entries(menuData.LanguegeMenuItems).find(([_, code]) => code === languege)?.[0]}
                  </span>
                  <ChevronDown className="w-4 h-4" /> {/* Lefele nyílacska */}
                </button>
              </div>

              {/* Nyelvi menü */}
              {languegeMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-gray_combination-alma shadow-lg"
                  onMouseLeave={() => setLanguegeMenuOpen(false)}>
                  {Object.entries(menuData.LanguegeMenuItems).map(([name, code]) => (
                    <div
                      key={code}
                      onClick={() => handleLanguageSelect(code as LanguageCode)} // Típusbiztos kiválasztás
                      className="p-2 hover:bg-gray_combination-button_col_hover cursor-pointer"
                    >
                      {menuData.flags[code as LanguageCode]} {name} {/* Zászló megjelenítése */}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Copyright */}
          <Text className="flex justify-between txt-compact-small text-gray-400">
            © 2025 Ovi Store. High Quality reserved.
          </Text>
        </div>
      </div>
    </div>
  )
}

export default SideMenu