import { ClassManager } from "./events.ts";
import { tools, components } from "./data/constants.ts";

const toolsContainer = document.querySelector<HTMLDivElement>(
	"[data-tools-container]"
);

tools.map(tool => {
	toolsContainer.innerHTML += `
  <li
    key="${tool.id}"
    tabindex="0"
		class="ml-4 dark:text-slate-50 flex items-center gap-2 rounded-lg pl-4	py-[0.45em] transition-all duration-200 text-sm hover:bg-gray-100	dark:hover:bg-slate-800">
		<img src="${tool.iconSrc}" class="w-5 h-5 dark:brightness-0 dark:invert"/>
		${tool.name}			
	</li>
  `;
});

// Toggling the tool container
new ClassManager({
	element: document.querySelector<HTMLDivElement>(
		"[data-tools-dropdown-toggler]"
	),
	classes: "active",
	target: toolsContainer,
	targetClasses: "scale-100"
}).toggle();

const compsContainer = document.querySelector<HTMLDivElement>(
	"[data-comps-container]"
);
const allComps =
	compsContainer.querySelector<HTMLDivElement>("[data-all-comps]");

// AddBtn
new ClassManager({
	element: document.querySelector<HTMLButtonElement>("[data-add-btn]"),
	classes: null,
	target: compsContainer,
	targetClasses: "scale-100"
}).add();

new ClassManager({
	element: document.querySelector<HTMLButtonElement>(
		"[data-close-comps-container]"
	),
	classes: null,
	target: compsContainer,
	targetClasses: "scale-100"
}).remove();

components.forEach(comp => {
	allComps.innerHTML += `
  <li
    key="${comp.id}"
    tabindex="0"
    data-name="${comp.name}"
		class="comp ml-4 dark:hover:bg-slate-700 dark:text-slate-50 flex items-center justify-between rounded-lg px-4 py-2 transition-all duration-200 text-sm hover:bg-gray-100">
		${comp.name}			
		<img src="/plus.svg" class="transition-all duration-300 w-5 h-5 brightness-100 invert dark:brightness-0"/>
	</li>
  `;
});

const searchInput = document.querySelector<HTMLInputElement>("#search");
const comps = [...allComps.querySelectorAll<HTMLLIElement>(".comp")];

searchInput?.addEventListener("input", () => {
	const searchValue: string = searchInput.value.toLowerCase() as string;
	comps.forEach(comp => {
		const name: string =
			(comp.getAttribute("data-name")?.toLowerCase() as string) || "";
		const display: string = Array.from(searchValue).every(letter =>
			name.includes(letter)
		)
			? "flex"
			: "none";
		comp.style.display = display;
	});
});

// toggle theme
const themeToggler = document.querySelector<HTMLButtonElement>(
	"[data-theme-toggler]"
);

themeToggler.addEventListener("click", () => {
	document.documentElement.classList.toggle("dark");
	const icon = themeToggler.querySelector("img");
	const iconSrc = icon.getAttribute("src");
	icon.src = iconSrc === "/sun.svg" ? "/moon.svg" : "/sun.svg";
});
