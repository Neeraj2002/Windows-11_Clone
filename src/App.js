import { useState, useEffect } from "react";
import { FaAngleUp, FaWifi, FaVolumeUp } from "react-icons/fa";

// COMPONENTS
import ImagesIcon from "./components/ImagesIcon/ImagesIcon";
import WindowsBox from "./components/WindowsBox/WindowsBox";

// IMAGES
import FileExplorer from "./images/FilesExplorer.png";
import Windows11 from "./images/windows-11.svg";
import Mail from "./images/mail.png";
import Edge from "./images/edge.png";
import Store from "./images/store.png";

// CSS
import "./App.css";
import "./global.css";

function App() {
  // STATE
  // const [images, setImage] = useState([
  //   { image: Windows11 },
  //   { image: FileExplorer },
  //   { image: Mail },
  //   { image: Edge },
  //   { image: Store },
  // ]);
  const [time, setTime] = useState();
  const [date, setDate] = useState();

  const [active, setActive] = useState(false);

  // USE EFFECT
  useEffect(() => {
    const today = new Date();

    const time = `${today.getHours()}:${today.getMinutes()} `;
    const date = `${
      today.getDate()
    }-${today.getMonth() + 1}-${today.getFullYear()}`;

    setTime(time);
    setDate(date);
  });


  // METHODS
  const activeHandler = () => {
    setActive(!active);
  };
  return (
    <section className="wallpaper">
      <div className="task-bar">
        {/* middle */}
        <ImagesIcon icon={Windows11} handleClick={activeHandler} />
        <ImagesIcon icon={FileExplorer} />
        <ImagesIcon icon={Mail} />
        <ImagesIcon icon={Edge} />
        <ImagesIcon icon={Store} />

        {/* right */}
        <div className="right-tools">
          <i className="icons">
            <FaAngleUp />
          </i>
          <i className="icons">
            <FaWifi />
          </i>
          <i className="icons">
            <FaVolumeUp />
          </i>
          <div className="time-date">
            <p className="time">{time}</p>
            <p className="date">{date}</p>
          </div>
        </div>
      </div>

      {/*WINDOWS BOX*/}
      {
        active ? <WindowsBox active /> : <WindowsBox/>
      }
    </section>
  );
}
export default App;
