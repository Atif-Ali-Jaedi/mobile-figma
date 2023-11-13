import {
	select,
	move,
	resize,
	zoomin,
	zoomout,
	fill,
	eyedropper,
	undo,
	redo,
	save
} from "../../public/tools";

export const tools = [
	{ id: 1, name: "Select", iconSrc: select },
	{ id: 2, name: "Move", iconSrc: move },
	{ id: 3, name: "Resize", iconSrc: resize },
	{ id: 4, name: "Zoom In", iconSrc: zoomin },
	{ id: 5, name: "Zoom Out", iconSrc: zoomout },
	{ id: 6, name: "Fill", iconSrc: fill },
	{ id: 7, name: "Select Color", iconSrc: eyedropper },
	{ id: 8, name: "Undo", iconSrc: undo },
	{ id: 9, name: "Redo", iconSrc: redo },
	{ id: 10, name: "Save", iconSrc: save }
];

export const components = [
	{
		id: 1,
		name: "Button",
		tagName: "button",
		style: {
			background: "#5755FF",
			padding: "8px 24px",
			borderRadius: "6px",
			color: "#fff"
		},
		onClick: () => {
			console.log("Added");
		}
	},
	{
		id: 2,
		name: "Text Input",
		tagName: "input",
		type: "text",
		style: {
			background: "white",
			padding: "8px",
			borderRadius: "6px",
			color: "#000",
			border: "solid 2px gray"
		},
		onClick: () => {
			console.log("Added");
		}
	}
];
