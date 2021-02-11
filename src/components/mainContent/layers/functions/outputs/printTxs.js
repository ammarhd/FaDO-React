const printOutput = (token, containerId) => {
  let newTokenDiv = document.createElement("div");
  let nodeToken = document.createTextNode(token);
  newTokenDiv.appendChild(nodeToken);
  let tokenContianer = document.getElementById(containerId);
  tokenContianer.insertBefore(newTokenDiv, tokenContianer.childNodes[0]);
  if (tokenContianer.childNodes.length > 35) {
    tokenContianer.removeChild(tokenContianer.childNodes[35]);
  }
};

export default printOutput;
