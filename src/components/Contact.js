export default function Contact(){
  return(
    <div id="contact">
      <h2 className="underline decoration-4 underline-offset-8 decoration-sky-500  text-lg	font-bold text-center">Contact me</h2>
      <div className="flex justify-center	my-20">
        <div className="flex flex-col w-1/3 item-start mx-32">
          <input type="text" name="Name" id="Name" placeholder="Name..." className="my-2 h-10 pb-4 bg-transparent border-b-2 border-slate-400"/>
          <input type="email" name="Email" id="Email" placeholder="Email Address..." className="my-2 h-10 pb-4 bg-transparent border-b-2 border-slate-400"/>
          <input type="text" name="Company" id="Company" placeholder="Company..." className="my-2 h-10 pb-4 bg-transparent border-b-2 border-slate-400"/>
          <input type="text" name="Desc" id="Desc" placeholder="Start typing here..." className="my-2 h-48 pb-44 bg-transparent border-b-2 border-slate-400"/>
          <button className="bg-sky-600 w-40 h-14 rounded-full mt-10">Let's talk</button>
        </div>
        <div className="w-1/3 text-sm">
          <h2 className="font-bold text-xl">If you want to contact me</h2>
          <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum purus velit, gravida fusce elit at et arcu. Non arcu nisi dui morbi at in in praesent posuere. Vitae tellus massa odio facilisi aliquet semper sit nisi ornare.</p>
          <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum purus velit, gravida fusce elit at et arcu. Non arcu nisi dui morbi at in in praesent posuere. Vitae tellus massa odio facilisi aliquet semper sit nisi ornare.</p>
        </div>
      </div>
    </div>
  )
}