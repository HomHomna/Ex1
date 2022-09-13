export default function cardContent(prop){
  const img = prop.img
  return(
    <div className="flex text-white mx-auto my-12 justify-end">
      <img src={img} className="w-64"/>
      <div className="flex flex-col	ml-10 my-6">
        <h2 className="font-bold text-xl my-2">Example project</h2>
        <p className="w-2/4 text-xs	mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum purus velit, gravida fusce elit at et arcu. Non arcu nisi dui morbi at in in praesent posuere. Vitae tellus massa odio facilisi aliquet semper sit nisi ornare.</p>
        <button className="text-black bg-white w-28 h-9 rounded-2xl text-sm">Let's talk</button>
      </div>
    </div>
  )
}