import React, { useEffect, useState } from 'react'
import './App.scss'
import axios from 'axios'

const App = () => {

    const [whther,setWhther]=useState({
      
       main:{},

       weather:[{}] //whther name

    })

    useEffect(()=>{
        async function getData() {
            const Api ='https://api.openweathermap.org/data/2.5/weather?&appid=65bb31cc25ec61fcee34c56bf77f928e&q=Malappuram,India&units=metric'
         
          try{
              let responce =await axios.get(Api)
              console.log(responce.data)


              setWhther(responce.data)

              
          }
          catch(err){
            console.log(err)
          }
     
        }

        getData()
    },[])

  return (
    <div>
       <div className="container">
            <div className="main-container">
                <div className="card">
                     <div className="card-data">
                     <h1>{whther.name}</h1>
                     <h1>{`${Math.round(whther.main.temp)}`}&deg;c</h1>
                     <h1>{whther.weather[0].main}</h1>
                     <h1>{whther.weather[0].description}</h1>
                    
                     </div>
                </div>
            </div>
       </div>
    </div>
  )
}

export default App
