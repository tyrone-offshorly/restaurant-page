const menuPage = () => {
  const content = document.querySelector("#content");

  const div = document.createElement('div');
  div.textContent = "Menu";

  content.append(div);
}

export default menuPage;