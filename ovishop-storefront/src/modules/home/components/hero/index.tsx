import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="relative h-[75vh] w-full border-b border-ui-border-base bg-blue-60 ">
      
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center p-4 sm:p-8 md: gap-6">
        <h3 className="text_fontFamily-sans text-2xl  text-orange-70">Fizikai Bolt</h3>
        <p className="text-base text-orange-70">
          
          Helyszín: 1234 Budapest, Példa utca 12.<br />{/* atirni normalis adatokra */}
        </p>
        <div className="overflow-x-auto w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl ">
          <table className="table-auto border-collapse w-full text-left text-orange-70">
            <thead>
              <tr><td colSpan={2} className="border-b p-2 text-center text">Ebédszünet minden nap 12:00–12:30 között</td></tr>
              <tr>
                <th className="border-b p-2 ">Nap</th>
                <th className="border-b p-2">Nyitvatartás</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b p-2">Hétfő</td>
                <td className="border-b p-2">09:00 – 18:00</td>
              </tr>
              <tr>
                <td className="border-b p-2">Kedd</td>
                <td className="border-b p-2">09:00 – 18:00</td>
              </tr>
              <tr>
                <td className="border-b p-2">Szerda</td>
                <td className="border-b p-2">09:00 – 18:00</td>
              </tr>
              <tr>
                <td className="border-b p-2">Csütörtök</td>
                <td className="border-b p-2">09:00 – 18:00</td>
              </tr>
              <tr>
                <td className="border-b p-2">Péntek</td>
                <td className="border-b p-2">09:00 – 18:00</td>
              </tr>
              <tr>
                <td className="border-b p-2">Szombat</td>
                <td className="border-b p-2">Zárva</td>
              </tr>
              <tr>
                <td className="border-b p-2">Vasárnap</td>
                <td className="border-b p-2">Zárva</td>   
              </tr>
               {/* className="border-b p-2" itt miert kell mindenhova beirni? */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Hero

