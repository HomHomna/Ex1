export default function Tail(){
  const img = [require('../assets/twitter.png'), require('../assets/linkin.png'), require('../assets/gobal.png')]
  return(
    <div className="bg-blue-700 w-full px-24">
      <div className="flex items-center justify-between">
          <div className="my-16 text-4xl text-white	underline underline-offset-8  decoration-black font-bold">Pav</div>
            <div className="flex">
              <ul className="flex mx-12 gap-20 text-white">
                <li><a href="#client">About</a></li>
                <li><a href="#works">Works</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
              <div className="flex gap-4 ml-5">
                <img src={img[0]} alt="twitter" className="w-5"/>
                <img src={img[1]} alt="twitter" className="w-5"/>
                <img src={img[2]} alt="twitter" className="w-5"/>
              </div>
          </div>
      </div>
    </div>
  )
}