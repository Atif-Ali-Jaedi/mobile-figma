type Class = {
	element: HTMLElement;
	classes?: string | string[] | null;
	target?: HTMLElement | null;
	targetClasses?: string | string[] | null;
	event: string;
};

export class ClassManager {
	constructor({
		element,
		classes = null,
		target = null,
		targetClasses = null,
		event
	}: Class) {
		this.element = element;
		this.classes = Array.isArray(classes) ? classes : classes ? [classes] : [];
		this.target = target || element;
		this.targetClasses = Array.isArray(targetClasses)
			? targetClasses
			: targetClasses
			? [targetClasses]
			: [];
		this.event = event;
	}

	toggle = () =>
		this.element.addEventListener(this.event || "click", () => {
			this.classes.forEach(className =>
				this.element.classList.toggle(className)
			);
			this.targetClasses.forEach(className =>
				this.target.classList.toggle(className)
			);
		});

	add = () =>
		this.element.addEventListener(this.event || "click", () => {
			this.classes.forEach(className => this.element.classList.add(className));
			this.targetClasses.forEach(className =>
				this.target.classList.add(className)
			);
		});

	remove = () =>
		this.element.addEventListener(this.event || "click", () => {
			this.classes.forEach(className =>
				this.element.classList.remove(className)
			);
			this.targetClasses.forEach(className =>
				this.target.classList.remove(className)
			);
		});
}
