import React from 'react'

export const VehiclePanal = (props) => {
  return (
    <div>
        <h5 onClick={()=>{
          props.setVehiclePanelOpen(false);
        }} className=" text-center w-[94%] absolute top-0" ><i className="text-3xl text-gray-500 ri-arrow-down-wide-line"></i></h5>
        <h3 className="p-5 text-2xl font-semibold mb-4"> Choose a Vehicle?</h3>

        <div onClick={()=>{
            props.setConfirmRidePanel(true)
        }} className="p-3 flex items-center justify-between  active:border-2 rounded-xl mb-2">
          <img className="h-15" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png" alt="" srcSet="" />
          <div className=" w-1/2">
            <h4 className="font-medium text-base">UberGo <span><i className="ri-user-fill">4</i></span></h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-medium text-xs text-gray-600">Affordable, compact rides.</p>
          </div>
          <h2 className="text2xl font-semibold">$193.80</h2>
        </div>

        <div onClick={()=>{
            props.setConfirmRidePanel(true)
        }} className="p-3 flex items-center justify-between active:border-2 rounded-xl mb-2">
          <img className="h-15" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" srcSet="" />
          <div className=" w-1/2">
            <h4 className="font-medium text-base">Moto <span><i className="ri-user-fill">1</i></span></h4>
            <h5 className="font-medium text-sm">3 mins away</h5>
            <p className="font-medium text-xs text-gray-600">Affordable, motercycle rides.</p>
          </div>
          <h2 className="text2xl font-semibold">$53.80</h2>
        </div>
        <div onClick={()=>{
            props.setConfirmRidePanel(true)
        }} className="p-3 flex items-center justify-between active:border-2 rounded-xl mb-2">
          <img className="h-15" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" srcSet="" />
          <div className=" w-1/2">
            <h4 className="font-medium text-base">UberAuto <span><i className="ri-user-fill">3</i></span></h4>
            <h5 className="font-medium text-sm">3 mins away</h5>
            <p className="font-medium text-xs text-gray-600">Affordable, auto rides.</p>
          </div>
          <h2 className="text2xl font-semibold">$150.80</h2>
        </div>
    </div>
  )
}
