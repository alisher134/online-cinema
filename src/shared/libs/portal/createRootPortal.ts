export const createRootPortal = (
  tagName: keyof HTMLElementTagNameMap,
  attributes: Record<string, string>,
): HTMLElement => {
  const element = document.createElement(tagName);

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  return element;
};
