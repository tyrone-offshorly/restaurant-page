const aboutPage = () => {
  const content = document.querySelector("#content");

  const div = document.createElement('div');
  div.textContent = "About";

  content.append(div);
}

export default aboutPage;