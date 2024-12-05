const placeContent = () => {
  const content = document.querySelector("#content");

  const heading = document.createElement('h1');
  const description = document.createElement('p');
  const btn = document.createElement('button');
  
  heading.textContent = "Simple and Tasty Recipes";
  description.textContent = "Curabitur venenatis, justo vitae porta sollicitudin, nisl tellus ultrices augue, id dictum massa dui sed mauris. Quisque ornare dui nec ante ullamcorper, nec gravida ipsum efficitur. Cras consectetur blandit nulla, non mattis velit mattis vel. Sed tincidunt tristique vulputate. Donec nisl ante, rhoncus a arcu sed, rhoncus scelerisque enim. Nullam vestibulum vulputate est nec accumsan. Vivamus suscipit mi vestibulum elementum pulvinar. Curabitur sit amet neque consectetur, accumsan sapien a, malesuada ligula. Nulla at varius nibh, at sollicitudin tellus."
  btn.textContent = "Get Started";

  content.append(heading);
  content.append(description);
  content.append(btn);
};

export default placeContent;