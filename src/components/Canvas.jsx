import React, { useEffect, useRef, useState } from "react";
import canvasImages from "../canvasImages";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Canvas = ({details}) => {
    const {startIndex, numImages, duration, size, top, left, zIndex} = details;

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
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		const img = new Image();
		img.src = canvasImages[index.value];
		img.onload = () => {
			canvas.width = img.width;
			canvas.height = img.height;
			ctx.drawImage(img, 0, 0);
		};
	}, [index]);
	return <canvas ref={canvasRef} className="size-[{$size}px]" id="canvas"></canvas>;
};

export default Canvas;
