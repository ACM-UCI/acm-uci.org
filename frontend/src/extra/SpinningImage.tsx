// NOT MINE 
// Pulled from a chat suggestion TOT

import { useState } from "react";

function SpinningImage({ src }: { src: string }) {
  const [spin, setSpin] = useState(false);

  const handleMouseEnter = () => {
    // Remove class first to re-trigger animation
    setSpin(false);
    // Use a tiny timeout to ensure class is removed before adding it back
    setTimeout(() => setSpin(true), 10);
  };

  return (
    <img
      src={src}
      className={`top_banner_image ${spin ? "spin-animation" : ""}`}
      onMouseEnter={handleMouseEnter}
      alt=""
    />
  );
}

export default SpinningImage;