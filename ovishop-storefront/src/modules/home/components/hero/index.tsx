import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

import "./hero.css"
import { url } from "inspector"



const Hero = () => {
  return (


    <div className="flex flex-col flex-grow justify-center items-center w-full h-full">
      <div id="product_search" className="relative w-full h-[300px]">
        <img src="/Image/hero_banner-300logo.png"
          alt="Hero First"
          className="w-full
           h-full object-cover"
        />
      </div>
      <div className="text-center p-4 sm:p-8">
        <h3 className="text-2xl  font-bold text-gray_combination-text1">Fizikai Bolt</h3>
        <p className="text-base  mt-2">
          Helyszín: 1234 Budapest, Példa utca 12.
        </p>

        <table className="table-auto border-collapse w-full max-w-md mx-auto text-left mt-4 nyt" >
          <thead>
            <tr>
              <td colSpan={2} className="border-b p-2 text-center text ">
                Ebédszünet minden nap 12:00–12:30 között
              </td>
            </tr>
            <tr className="text-gray_combination-text1">
              <th>Nap</th>
              <th>Nyitvatartás</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Hétfő</td><td>09:00 – 18:00</td></tr>
            <tr><td>Kedd</td><td>09:00 – 18:00</td></tr>
            <tr><td>Szerda</td><td>09:00 – 18:00</td></tr>
            <tr><td>Csütörtök</td><td>09:00 – 18:00</td></tr>
            <tr><td>Péntek</td><td>09:00 – 18:00</td></tr>
            <tr><td>Szombat</td><td>Zárva</td></tr>
            <tr><td>Vasárnap</td><td>Zárva</td></tr>
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default Hero;

