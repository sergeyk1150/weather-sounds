export class Dom {
  static create(tag, options = {}) {
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

  static text(text) {
    return document.createTextNode(text);
  }

  static mount(parent, child) {
    parent.appendChild(child);
  }
}
