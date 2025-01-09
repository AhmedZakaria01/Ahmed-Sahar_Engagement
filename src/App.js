import React, { useRef, useState } from "react";
import { Fireworks } from "@fireworks-js/react";
import Home from "./Home";
import FormModal from "./components/FormModal"; // Make sure this is the correct path

export default function App() {
  const ref = useRef(null);

  const fireworkSound = new Audio("path_to_sound_file.mp3"); // Path to your sound file

  const toggle = () => {
    if (!ref.current) return;
    if (ref.current.isRunning) {
      ref.current.stop();
    } else {
      ref.current.start();
      fireworkSound.play(); // Play the sound when fireworks start
    }
  };

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true); // Open the modal
  const handleCloseModal = () => setShowModal(false); // Close the modal

  return (
    <>
      <div className="App">
        {/* Button to trigger form */}
        <button
          onClick={handleOpenModal}
          className="fixed top-12 left z-10 px-3 py-1 text-sm text-white rounded-r-lg shadow-lg hover:opacity-90 transition-all flex items-center gap-2 bg-gradient-to-r from-[#252720] via-[#3C3C3C] to-[#5F5F5F]"
        >
          Leave Us a Comment / Celebrate with Us
        </button>

        {/* Show modal if showModal is true */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-30">
            <FormModal onClose={handleCloseModal} />
          </div>
        )}
      </div>

      <Home />
 

      <Fireworks
        ref={ref}
        options={{
          opacity: 1,
          particleCount: 20,
          life: 6,
          explosionRadius: 200,
          gravity: 0.1,
          acceleration: 1,
          colors: ["#ff0000", "#00ff00", "#0000ff", "#ff9900"],
          explosion: 1,
          intensity: 20,
          particles: 200,
          traceLength: 1,
        }}
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          position: "fixed",
          background: "transparent",
          zIndex: 1,
        }}
      />
    </>
  );
}
