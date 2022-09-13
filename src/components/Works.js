import CardContent from './CardContent'
import Contact from './Contact'
export default function Works() {
  const img = [require('../assets/pic1.png'), require('../assets/pic2.png'), require('../assets/pic3.png')]
  const arrow = new URL('../assets/arrow.png', import.meta.url) 

  return(
    <div className="w-full work-bg text-white pb-10" id="works">
      <div className="text-center pt-11">
        <h2 className="underline decoration-4 underline-offset-8 decoration-sky-500  text-lg	font-bold">Works</h2>
        <div className="mt-6">See my recent projects below</div>
      </div>
      <div>
        <CardContent img={img[0]}/>
        <CardContent img={img[1]}/>
        <CardContent img={img[2]}/>
      </div>
      <div className="flex flex-col items-center mb-28 ">
        <div className="mb-2 cursor-pointer	">See more</div>
        <img src={arrow} className="w-10 cursor-pointer	"/>
      </div>
      <Contact />
    </div>
  )
}className="w-10"