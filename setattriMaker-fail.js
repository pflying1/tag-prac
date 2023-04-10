function makeCall(parent, tagName, attriName, attriValue, callback) {
  const element = document.createElement(tagName);
  parent.appendChild(element);
  element.setAttribute(attriName, attriValue);
  if (callback) {
    callback(element);
  }
  return element;
}
module.exports = makeCall;
