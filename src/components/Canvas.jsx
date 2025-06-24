import React, { useEffect, useRef, useState } from "react";
import canvasImages from "../canvasImages";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Canvas = ({ details }) => {
	const { startIndex, numImages, duration, size, top, left, zIndex } = details;

	const [index, setIndex] = useState({ value: startIndex });
	const canvasRef = useRef(null);

	useGSAP(() => {
		gsap.to(index, {
			value: startIndex + numImages - 1,
			duration: duration,
			ease: "linear",
			repeat: -1,
			onUpdate: () => {
				setIndex({ value: Math.floor(index.value) });
			},
		});
	});

	// Load the image and draw it on the canvas
	useEffect(() => {
		const scale = window.devicePixelRatio;
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		const img = new Image();
		img.src = canvasImages[index.value];
		img.onload = () => {
			canvas.width = canvas.offsetWidth * scale;
			canvas.height = canvas.offsetHeight * scale;
			canvas.style.width = canvas.offsetWidth + "px";
			canvas.style.height = canvas.offsetHeight + "px";
			ctx.scale(scale, scale);
			ctx.drawImage(img, 0, 0, canvas.offsetWidth, canvas.offsetHeight);
		};
	}, [index]);
	return (
		<canvas
        data-scroll data-scroll-speed={Math.random().toFixed(1)}
			ref={canvasRef}
			style={{
				width: `${size * 1.4}px`,
				height: `${size * 1.4}px`,
				position: "absolute",
				top: `${top}%`,
				left: `${left}%`,
				zIndex: `${zIndex}`,
			}}
			id="canvas"></canvas>
	);
};

export default Canvas;
