import { useEffect, useRef } from "react";
import rightHand from "../../assets/righthand.png";
import styles from "./Hands.module.css";

export default function RightHand() {
  const handRef = useRef(null);

  useEffect(() => {
    let targetX = window.innerWidth * 0.8;
    let targetY = window.innerHeight * 0.85;

    let currentX = targetX;
    let currentY = targetY;

    let animationFrameId;

    const handleMouseMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    const animateHand = () => {
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;

      const offsetX = 130;
      const offsetY = 200;

      if (handRef.current) {
        handRef.current.style.left = `${currentX + offsetX}px`;
        handRef.current.style.top = `${currentY + offsetY}px`;
      }

      animationFrameId = requestAnimationFrame(animateHand);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animationFrameId = requestAnimationFrame(animateHand);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <img
      ref={handRef}
      src={rightHand}
      alt=""
      className={`${styles.handImage} ${styles.right}`}
    />
  );
}
