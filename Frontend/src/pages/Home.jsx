import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPannel from "../components/LocationSearchPannel";
import { VehiclePanal } from "../components/VehiclePanal";
import Confirmride from "../components/Confirmride";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

function Home() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const vehiclePanelRef = useRef(null)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const vehicleFoundRef = useRef(null)
  const waitingForDriverRef = useRef(null)
  const [waitingForDriver, setWaitingForDriver] = useState(false);
  
  const confirmRidePanelRef = useRef(null)

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "75%",
        opacity: 1,
        padding: 24,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(panelRef.current, {
        height:'0%',
        opacity: 0,
        padding: 0,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
      });
    }
  }, [panelOpen]);

  useGSAP(function(){
    if(vehiclePanelOpen){
      gsap.to(vehiclePanelRef.current, {
        transform:'translateY(0)' // fixed typo
      });
    }else {
      gsap.to(vehiclePanelRef.current, {
        transform:'translateY(100%)' // fixed typo
      });
    }
  }, [vehiclePanelOpen])

  useGSAP(function(){
    if(confirmRidePanel){
      gsap.to(confirmRidePanelRef.current, {
        transform:'translateY(0)' // fixed typo
      });
    }else {
      gsap.to(confirmRidePanelRef.current, {
        transform:'translateY(100%)' // fixed typo
      });
    }
  }, [confirmRidePanel])

  useGSAP(function(){
    if(vehicleFound){
      gsap.to(vehicleFoundRef.current, {
        transform:'translateY(0)' // fixed typo
      });
    }else {
      gsap.to(vehicleFoundRef.current, {
        transform:'translateY(100%)' // fixed typo
      });
    }
  }, [vehicleFound])

  useGSAP(function(){
    if(waitingForDriver){
      gsap.to(waitingForDriverRef.current, {
        transform:'translateY(0)' // fixed typo
      });
    }else {
      gsap.to(waitingForDriverRef.current, {
        transform:'translateY(100%)' // fixed typo
      });
    }
  }, [waitingForDriver])

  return (
    <div className="h-screen overflow-hidden relative">
      <img
        className="w-17 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="uberimage"
        srcSet=""
      />
      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png"
          alt=""
          srcSet=""
        />
      </div>

      <div className=" flex flex-col justify-end h-screen absolute top-0 w-full ">
        <div className="h-[25%] p-5 bg-white relative">
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="absolute opacity-0 top-6 right-6 text-2xl"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold select-none">Find a Trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 top-[43%] left-10 bg-gray-900 rounded-full"></div>
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pick-up Location "
            />
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              className="bg-[#ffffff] px-12 py-2 text-base rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your destination "
            />
          </form>
        </div>

        <div ref={panelRef} className=" bg-white h-0  ">
          <LocationSearchPannel  setPanelOpen= {setPanelOpen}   setVehiclePanelOpen = {setVehiclePanelOpen} />
        </div>
      </div>

      <div ref={vehiclePanelRef} className="fixed z-10 bottom-0 px-3 py-6 bg-white w-full translate-y-full select-none">
        <VehiclePanal setConfirmRidePanel= {setConfirmRidePanel} setVehiclePanelOpen={setVehiclePanelOpen} />
        
      </div>
      <div ref={confirmRidePanelRef} className="fixed z-10 bottom-0 px-3 py-6 bg-white w-full translate-y-full select-none">
          <Confirmride setConfirmRidePanel= {setConfirmRidePanel} setVehicleFound={setVehicleFound} />
      </div>
      <div ref={vehicleFoundRef} className="fixed z-10 bottom-0 px-3 py-6 bg-white w-full translate-y-full select-none">
            <LookingForDriver setVehicleFound={setVehicleFound}/>
      </div>
      <div ref={waitingForDriverRef} className="fixed z-10 bottom-0 px-3 py-6 bg-white w-full  select-none">
          <WaitingForDriver waitingForDriver={waitingForDriver} setWaitingForDriver={setWaitingForDriver}/>
      </div>
    </div>
  );
}

export default Home;
