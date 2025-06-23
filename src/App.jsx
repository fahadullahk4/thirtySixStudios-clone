import React from "react";
import Canvas from "./components/Canvas";
import data from "./data";

const App = () => {
	return (
		<>
			<div className="w-full min-h-screen bg-zinc-900 text-white">
				{data.map((item, index) => (
					<div key={index}>
						{item.map((canvasdets, index) => (
							<Canvas details={canvasdets} />
						))}
					</div>
				))}
			</div>
		</>
	);
};

export default App;
