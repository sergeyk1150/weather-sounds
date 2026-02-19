interface Options {
  className?: string,
  attr?: {
    [key: string]: string,
  },
  style?: {
    [key: string] : string | number
  },
  events?: {
    [key: string] : (event: Event) => void
  },
  children?: Node[]
}

export class Dom {
  static create(tag: "div", options?: Options): HTMLDivElement;
  static create(tag: "input", options?: Options): HTMLInputElement;
  static create(tag: "img", options?: Options): HTMLImageElement;
  static create(tag: "button", options?: Options): HTMLButtonElement;
  static create(tag: "label", options?: Options): HTMLLabelElement;


  static create(tag: string, options?: Options): HTMLElement {
    const el = document.createElement(tag);

    if (options.className) {
      el.className = options.className;
    }

    if (options.attr) {
      Object.entries(options.attr).forEach(([key, value]) => {
        el.setAttribute(key, value);
      });
    }
    if (options.style) {
      Object.assign(el.style, options.style);
    }

    if (options.events) {
      Object.entries(options.events).forEach(([event, handler]) => {
        el.addEventListener(event, handler);
      });
    }

    if (options.children) {
      options.children.forEach((child) => {
        if (child) el.appendChild(child);
      });
    }

    return el;
  }

  static text(text: string): Text {
    return document.createTextNode(text);
  }

  static mount(parent: HTMLElement, child: HTMLElement): void {
    parent.appendChild(child);
  }
}
