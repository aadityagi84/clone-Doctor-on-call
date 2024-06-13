import React, { useState } from "react";
import "./gallery.css";
import gall1 from "../images/doc/doc1.jpg";
import gall2 from "../images/doc/doc4.jpg";
import gall3 from "../images/doc/doctor 3.jpg";
import gall4 from "../images/doc/doctor 5.jpg";
import gall5 from "../images/doc/doctor chair 2.jpg";
import gall6 from "../images/features/baby.png";
import gall7 from "../images/features/feature-01.jpg";
import gall8 from "../images/features/feature-02.jpg";
import gall9 from "../images/features/feature-03.jpg";
import gall10 from "../images/features/feature-05.jpg";

export const Modal = ({ src, alt, caption, onClose }) => {
  return (
    <div className="modal">
      <span className="close" onClick={onClose}>
        &times;
      </span>
      <img className="modal-content" src={src} alt={alt} />
      {caption.length > 0 && <div className="caption">{caption}</div>}
    </div>
  );
};

const gallery = [
  { img: gall1 },
  { img: gall2 },
  { img: gall3 },
  { img: gall4 },
  { img: gall5 },
  { img: gall6 },
  { img: gall7 },
  { img: gall8 },
  { img: gall9 },
  { img: gall10 },
];
export const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const showModal = (index) => {
    setSelectedImageIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImageIndex(null);
  };

  return (
    <>
      <div className="App">
        <div className="my-10">
          <h1 className="text-[#2c4964] text-[32px] font-bold"> Gallery </h1>
          <hr className="w-[100px] mx-auto border-blue-800" />
          <p className="my-2">Lorem ipsum dolor sit amet</p>
        </div>
        <div className=" flex w-[90%] min-h-[30vh] mx-auto  flex-wrap  my-10">
          {gallery.map((gall, i) => (
            <div
              className="w-[300px] h-[280px] my-4 mx-auto overflow-hidden"
              key={i}
            >
              <img
                className="image w-[100%] h-full duration-700 hover:scale-[1.1]"
                // key={i}
                onClick={() => showModal(i)}
                src={gall.img}
                alt="Snow"
              />
            </div>
          ))}
        </div>
      </div>
      {isOpen && (
        <Modal
          src={gallery[selectedImageIndex].img}
          alt="snow"
          caption=""
          onClose={closeModal}
        />
      )}
    </>
  );
};
export default Gallery;
