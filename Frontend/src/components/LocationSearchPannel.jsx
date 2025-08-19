import React from 'react'

function LocationSearchPannel(props) {
    console.log(props);
    
    const locations = [
        "Sharma & Vishnu, Bhopal, Madhya Pradesh",
        "La Pinos, Bhopal, Madhya Pradesh",
        "Sagar Gaire, Bhopal, Madhya Pradesh",
        "Dominos, Bhopal, Madhya Pradesh",
    ]
  return (
      <div>
        {/*  Sample data */}
        {
            locations.map(function(elem , ind){
                return <div key={ind} onClick={()=>{
                    props.setVehiclePanelOpen(true);
                    props.setPanelOpen(false)
                }} className='flex items-center justify-start gap-3 my-2 border-2 border-gray-100 active:border-black rounded-xl  p-2 select-none'>
                        <h2 className='bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full'><i className="ri-school-fill "></i></h2>
                        <h4 className='font-medium'>{elem}</h4>
                    </div>
            })
        }

        
    </div>
  )
}

export default LocationSearchPannel