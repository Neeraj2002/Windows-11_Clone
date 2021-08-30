import React from "react";

import PinnedItem from "../PinnedItem/PinnedItem";
import RecommendedItem from "../RecommendedItem/RecommendedItem";

// Images
import Edge from "../../images/edge.png";
import Calender from "../../images/calendar.svg";
import Word from "../../images/word.jpg";
import FileExplorer from "../../images/FilesExplorer.png";
import Mail from "../../images/mail.png";
import Movies from "../../images/movies.png";
import Notepad from "../../images/notepad.png";
import Onenote from "../../images/oneNote.png";
import Paint from "../../images/paint.png";
import Photos from "../../images/photos.png";
import Powerpointer from "../../images/powerpoint.svg";
import Settings from "../../images/settings.png";

import Journal from "../../images/journal.png";
import Netflix from "../../images/netflix.png";
import Spotify from "../../images/spotify.png";
import Pinterest from "../../images/pinterest.jpg";

//Icons
import { FaPowerOff } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";

//CSS
import "./WindowsBox.css";

const WindowsBox = ({ active }) => {
  return (
    <div className={`windows-box ${active ? "active" : ""}`}>
      <div className="tools-box row">
        {/* 1st row  */}
        <p className="primary-heading heading">Pinned</p>
        <p className="primary-heading heading">All Apps <FaAngleRight/></p>
      </div>
      <div className="tools-box">
        <div className="pinned-box mt-30">
          <PinnedItem icon={Edge} title="Microsoft Edge" />
          <PinnedItem icon={Calender} title="Calender" />
          <PinnedItem icon={Word} title="Word" />
          <PinnedItem icon={Powerpointer} title="Powerpointer" />
          <PinnedItem icon={FileExplorer} title="File Explorer" />
          <PinnedItem icon={Mail} title="Mail" />

          <PinnedItem icon={Movies} title="Movies" classList="mt-30" />
          <PinnedItem icon={Notepad} title="Notepad" classList="mt-30" />
          <PinnedItem icon={Onenote} title="Onenote" classList="mt-30" />
          <PinnedItem icon={Paint} title="Paint" classList="mt-30" />
          <PinnedItem icon={Photos} title="Photos" classList="mt-30" />
          <PinnedItem icon={Settings} title="Settings" classList="mt-30" />
        </div>

        {/* 2nd row  */}
        <p className="primary-heading heading mt-60">Recommended</p>
        <div className="recommended-box mt-30">
          <RecommendedItem
            icon={Journal}
            text="Recently Added"
            heading="Journal"
          />
          <RecommendedItem
            icon={Netflix}
            text="Recently Added"
            heading="Netflix"
          />
          <RecommendedItem
            icon={Spotify}
            text="Recently Added"
            heading="Spotify"
            classList="mt-30"
          />
          <RecommendedItem
            icon={Pinterest}
            text="Recently Added"
            heading="Pinterest"
            classList="mt-30"
          />
        </div>
      </div>

      {/* profile  */}
      <div className="profile-box">
        <div className="profile">
        <i className="user-icon">
          <AiOutlineUser />
        </i>
          <img className="" src={AiOutlineUser} />
          <p className="secondary-heading">Neeraj Rathod</p>
        </div>
        <i className="poweroff-icon">
          <FaPowerOff />
        </i>
      </div>
    </div>
  );
};

export default WindowsBox;