export default function Clients(){
  const imgUber = new URL("../assets/uber.png",import.meta.url)
  const imgDeli = new URL("../assets/deliveroo.png",import.meta.url)
  const imgMicro = new URL("../assets/microsoft.png",import.meta.url)
  const imgStar = new URL("../assets/starbuck.png",import.meta.url)
  return(
    <div className="w-full bg-blue-700">
      <div className="text-center text-white pt-11">
        <h2 className="underline decoration-4 underline-offset-8 decoration-sky-500  text-lg	font-bold" id="client">Clients</h2>
        <div className="mt-6">Check out some of my previous clients</div>
      </div>
      <div className="flex gap-14 justify-center	mt-8 pb-11">
        <img src={imgUber} alt="Uber" className="w-32 h-14 my-auto" />
        <img src={imgDeli} alt="Deliveroo" className="w-40 h-14 my-auto"/>
        <img src={imgMicro} alt="Microsoft" className="w-44 h-12 my-auto"/>
        <img src={imgStar} alt="Starbuck" className="w-20 h-20 my-auto"/>
      </div>
    </div>
  )
}