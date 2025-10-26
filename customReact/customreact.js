// We don’t need React import here; it's a custom renderer
function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);

  // Set all props except children
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  // Set the inner text (children)
  domElement.textContent = reactElement.props.children;

  // Append to container
  container.appendChild(domElement);
}

// Define a custom "React element" object
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
    children: "Click to visit Google",
  },
};

// Select the container
const mainContainer = document.querySelector("#root");

// Render element
customRender(reactElement, mainContainer);
