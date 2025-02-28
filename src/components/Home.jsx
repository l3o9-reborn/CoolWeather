import React, { useEffect, useState } from 'react'

const api_token='887ed3c65192fa3ad79404986d334219'


export default function Home() {

    const [city, setCity]=useState('Dhaka')
    const[weatherData, setWeatherData]=useState({})
    const [buttonClick, setButtonClick]=useState(true)
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_token}&units=metric`;


    function FetchWeatherData(){
        fetch(url)
        .then(res=>{
            if(!res.ok)
                throw new Error(`HTTP error! Status: ${res.status}`)
            return res.json()
        })
        .then((data)=>{
            setWeatherData(data)
            console.log(data)
        })
        .catch(err => {
            console.error("Fetch error:", err)
        })
    }

    useEffect(()=>{
        FetchWeatherData()
    },[buttonClick])



  return (
    <div className='flex flex-col justify-center align-center'>

        <nav  className=" bg-cyan-800 flex justify-between p-5 text-white ">
            <h1 className='text-3xl bold' >CooLWeaTher</h1>
            {/* <button className=' border-2 px-5 py-2 bg-orange-700 text-white text-2xl bold rounded-md duration-200 ease transform hover:scale-110 hover:bg-orange-600 hover: hover:text-white'>Settings</button> */}
        </nav>
        <main className='bg-[url(C:\Users\Star\Desktop\gameField\CoolWeather\src\components\assets\pexels-creative-vix-9754.jpg)] bg-cover bg-center h-screen w-full text-center bg-white py-100 bg-blue-00 text-[#1c1c1c]'>

            <div>
                <span className='absolute top-30 left-5 text-2xl text-cyan-700'>Current Location: {weatherData.name}[{weatherData.sys?.country}]</span>
            </div>

            <input className='text-2xl bold bg-white px-20 py-2 border-5 border-cyan-700 focus:border-cyan-900 outline-none' type="text" value={city} onChange={(e)=>setCity(e.target.value)} />
            <button className=' text-2xl bold bg-orange-500 border-gray-500 px-8 py-2 border-5 text-white hover:bg-orange-700 hover:border-cyan-700' onClick={()=>setButtonClick((prev)=> !prev)}>SET LOCATION</button>
            <h1 className='text-white text-9xl bold uppercase p-20'> {weatherData.main?.temp} °C</h1>
            <div className="moreData m-10">
                <span className=' text-white text-3xl p-5'>Humidity: {weatherData.main?.humidity} </span>
                <span className=' text-white text-3xl p-5'>Pressure: {weatherData.main?.pressure}</span>
                <span className=' text-white text-3xl p-5'>Feels Like: {weatherData.main?.feels_like}</span>
            </div>
            <h3 className=' text-white text-3xl p-5'>Wind Speed :{ weatherData.wind?.speed} KM/H</h3>
        </main>
    </div>
  )
}
