const aboutPage = () => {
  const content = document.querySelector("#content");

  const div = document.createElement('div');
  div.classList.add('about');
  const articleTitle = document.createElement('h1');
  articleTitle.textContent = "About the Resto"
  
  const aboutTheResto = document.createElement('p');
  aboutTheResto.textContent = "Nunc vestibulum efficitur nisl ut dapibus. Vivamus in ipsum felis. Quisque non elit est. Donec venenatis lectus a pellentesque vehicula. Integer aliquam felis eget urna dapibus, id pulvinar diam mattis. Suspendisse at mi scelerisque, congue ipsum vel, mollis velit. Aliquam erat volutpat. Sed non condimentum felis. Duis eu enim tempus, egestas tellus vitae, pulvinar arcu. Fusce at venenatis leo, sit amet tincidunt sem. Sed tempus massa eget enim ornare, quis egestas nibh tempus."

  const contact = document.createElement('h2');
  contact.textContent = "Contact Us"

  const contactPerson = document.createElement('p');
  contactPerson.textContent = "The Chef"

  const email = document.createElement('p');
  email.textContent = "Email: thechef@theresto.com"

  const contactNumber = document.createElement('p');
  contactNumber.textContent = "Contact number: (+63) 9772-341-234"

  div.append(articleTitle);
  div.append(aboutTheResto);
  div.append(contact);
  div.append(contactPerson);
  div.append(email);
  div.append(contactNumber);
  content.append(div);
}

export default aboutPage;