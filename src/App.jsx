import React, { use, useEffect } from "react";
import Canvas from "./components/Canvas";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
	useEffect(() => {
		const locomotiveScroll = new LocomotiveScroll();
	}, []);
	return (
		<>
			<div className="w-full relative min-h-screen bg-zinc-900 text-white">
				{data[0].map((canvasdets, index) => (
					<Canvas details={canvasdets} />
				))}
			</div>
			<div className="w-full relative min-h-screen bg-zinc-900 text-white">
				{data[1].map((canvasdets, index) => (
					<Canvas details={canvasdets} />
				))}
			</div>
			<div className="w-full relative min-h-screen bg-zinc-900 text-white">
				{data[2].map((canvasdets, index) => (
					<Canvas details={canvasdets} />
				))}
			</div>
			<div className="w-full relative min-h-screen bg-zinc-900 text-white">
				{data[3].map((canvasdets, index) => (
					<Canvas details={canvasdets} />
				))}
			</div>
		</>
	);
};

export default App;
