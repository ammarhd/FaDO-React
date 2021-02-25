const printOutput = (token, containerId) => {
  let newTokenDiv = document.createElement("div");
  var tx = token.join();
  //console.log(tx);
  let nodeToken = document.createTextNode(tx);
  newTokenDiv.classList.add("one_line");
  newTokenDiv.appendChild(nodeToken);
  let tokenContianer = document.getElementById(containerId);
  tokenContianer.insertBefore(newTokenDiv, tokenContianer.childNodes[0]);
  if (tokenContianer.childNodes.length > 35) {
    tokenContianer.removeChild(tokenContianer.childNodes[35]);
  }
};

export default printOutput;
