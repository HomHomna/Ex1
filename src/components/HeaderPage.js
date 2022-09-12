export default function HeaderPage() {
  const img = [require('../assets/twitter.png'), require('../assets/linkin.png'), require('../assets/gobal.png')]
  const bgimg = new URL('../assets/bg.png', import.meta.url) 
  return(
    <div style={{ backgroundImage: `url(${bgimg})` }} className="bg-upset bg-cover bg-no-repeat w-screen h-full bg-blue-900 opacity-90">
      <section className="mx-32">
        <div className="flex items-center justify-between">
          <div className="my-16 text-4xl text-white	underline underline-offset-8  decoration-sky-500 font-bold">Pav</div>
            <div className="flex">
              <ul className="flex mx-12 gap-20 text-white">
                <li><a href="#client">About</a></li>
                <li><a href="#">Works</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
              <div className="flex gap-4 ml-5">
                <img src={img[0]} alt="twitter" className="w-5"/>
                <img src={img[1]} alt="twitter" className="w-5"/>
                <img src={img[2]} alt="twitter" className="w-5"/>
              </div>
          </div>
          
        </div>
      
      </section>
      <section className=" ml-32 text-white">
        <div className="text-6xl w-6/12 mt-16">
          <span>Lorem ipsum dolor sit</span><span className="underline underline-offset-8 decoration-sky-500	 font-bold"> amet,</span> <h1>consectetur.</h1> 
        </div>
        <div className="w-4/12 text-sm mt-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id tortor, id consequat. Ipsum mauris duis turpis egestas nulla cursus aliquet pretium.</div>
        <button className="bg-white rounded-full w-32 h-10 text-black mt-8 mb-96">Let's talk</button>
      </section>
    </div>
    
  )
}