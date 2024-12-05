import pizzaImage from "../assets/pizza.jpg"; 

const placeContent = () => {
  const content = document.querySelector("#content");
  const home = document.createElement('div');
  home.classList.add('home');
  const heading = document.createElement('h1');
  const description = document.createElement('p');
  const btn = document.createElement('button');
  const image = document.createElement('img');
  
  image.src = pizzaImage; 
  image.alt = "Pizza Image"
  image.height = 320; 
  image.width = 320; 
  heading.textContent = "Simple and Tasty Recipes";
  description.textContent = "Curabitur venenatis, justo vitae porta sollicitudin, nisl tellus ultrices augue, id dictum massa dui sed mauris. Quisque ornare dui nec ante ullamcorper, nec gravida ipsum efficitur. Cras consectetur blandit nulla, non mattis velit mattis vel. Sed tincidunt tristique vulputate. Donec nisl ante, rhoncus a arcu sed, rhoncus scelerisque enim. Nullam vestibulum vulputate est nec accumsan. Vivamus suscipit mi vestibulum elementum pulvinar. Curabitur sit amet neque consectetur, accumsan sapien a, malesuada ligula. Nulla at varius nibh, at sollicitudin tellus."
  btn.textContent = "Get Started";
  
  home.append(heading);
  home.append(description);
  home.append(btn);
  home.append(image);
  content.append(home);
};

export default placeContent;