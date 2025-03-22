import { Suspense } from "react"

import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group bg-gray_combination-head_foot">
      <header className="relative h-16  mx-auto  duration-200  ">
        <nav className="content-container  flex items-center justify-between w-full h-full text-large-regular" >
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              <SideMenu />
            </div>
          </div>

          <div className="flex items-center h-full">
            <h1>
              <LocalizedClientLink
                href="/"
                className="text-3xl  hover:text-gray_combination-button_col_hover uppercase font-bold"
                data-testid="nav-store-link"
              >
                Ovi Shop
              </LocalizedClientLink>
            </h1>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end text-large-regular sm:text-small-regular">
            <div className="hidden small:flex items-center gap-x-6 h-full  ">
              <LocalizedClientLink
                className="hover:text-gray_combination-button_col_hover"
                href="/account"
                data-testid="nav-account-link"
              >
                Fiók
              </LocalizedClientLink>
            </div>
            <div className="pr-8">

              <Suspense
                fallback={
                  <LocalizedClientLink
                    className="hover:text-gray_combination-button_col_hover flex gap-2 "
                    href="/cart"
                    data-testid="nav-cart-link"
                  >
                    Kosár (0)
                  </LocalizedClientLink>
                }
              >
                <CartButton />
              </Suspense>
            </div>

          </div>
        </nav>
      </header>
    </div>
  )
}
