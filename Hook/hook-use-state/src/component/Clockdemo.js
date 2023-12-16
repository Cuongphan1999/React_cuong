// import useClock from "./Hook/myClock"



// function MyClock() {
//   //Gọi custom hook để sử dụng
//   const [time, ampm] = useClock();
//   return (
//     <div id="Clock-style">
//       {time}
//       <span> {ampm}</span>
//     </div>
//   );
// }
// export default MyClock;
//cach 2:
import useClock from "./Hook/myClock"
export default function MyClock() {
  const [time, ampm] = useClock();
  return (
    <div className="container">
      <span className="badge bg-danger">{time}</span>
      <span> {ampm}</span>

    </div>
  )
}