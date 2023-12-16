import { useState } from 'react'

export default function CarSelect (){
    const carArry = ["Honda"," Yamaha", "Huyndai", "Kia" ];
    const colorArry = ["red","green","orange","yellow","brown"];
    const [selectedCar, setSelectedCar] = useState({
        car: carArry[0],
       color: colorArry[0]
    })
    const handleChange = (e) => {
        setSelectedCar({...selectedCar,[e.target.name]: [e.target.value]});
    }
    return (
        <div>
            <h2>Select a car</h2>
            <select name='car' onChange={handleChange}>
                {
                    carArry.map((car, index) => (
                        <option value={car} key={index} >{car}</option>
                    ))
                }
            </select>
            <select name='color' onChange={handleChange}>
                {
                    colorArry.map((color, index) =>(
                        <option value={color} key={index}>{color}</option>
                    )
                    )
                }
            </select>


            <p>Car: {selectedCar.car}</p>
            <p> color: {selectedCar.color}</p>
        </div>
    )
    
}
