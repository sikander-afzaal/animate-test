import { useEffect, useRef } from "react";
import styles from "./index.module.css";

const particleColor = "#474747";
let numOfParicles = 3000;
const particleSize = 1;
let canvas, ctx;

if (window.innerWidth <= 550) {
  numOfParicles = 1500;
}

const generateParticles = (width, height) => {
  const particles = [];
  for (let i = 0; i < numOfParicles; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    particles.push({ x, y });
  }
  return particles;
};

const drawParticles = (particles) => {
  particles.forEach((particle) => {
    const { x, y } = particle;
    ctx.fillStyle = particleColor;
    ctx.fillRect(x, y, particleSize, particleSize);
  });
};

const animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const particles = generateParticles(canvas.width, canvas.height);
  drawParticles(particles);

  requestAnimationFrame(animate);
};

const Noise = () => {
  const canvasRef = useRef();

  useEffect(() => {
    if (canvas && ctx) return;

    canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx = canvas.getContext("2d");
    requestAnimationFrame(animate);
  }, []);
  return <canvas ref={canvasRef} className={styles.canvas}></canvas>;
};

export default Noise;
