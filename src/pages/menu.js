const menuPage = () => {
  const content = document.querySelector("#content");
  class MenuItem {
    constructor(item, price, description) {
      this._item = item;
      this._price = price;
      this._description = description;
    }

    get item() {
      return this._item;
    }
    get price() {
      return this._price;
    }
    get description() {
      return this._description;
    }
  } 
  const menu = [];
  // Add 10 items to the menu
  menu.push(new MenuItem("Burger", 5.99, "A juicy grilled beef burger with fresh lettuce and tomato."));
  menu.push(new MenuItem("Pizza", 8.99, "Wood-fired pizza with a choice of toppings."));
  menu.push(new MenuItem("Pasta", 7.99, "Creamy Alfredo pasta with a touch of garlic."));
  menu.push(new MenuItem("Salad", 4.99, "Fresh garden salad with a variety of vegetables."));
  menu.push(new MenuItem("Soup", 3.99, "Hot and comforting soup of the day."));
  menu.push(new MenuItem("Fries", 2.99, "Crispy golden french fries."));
  menu.push(new MenuItem("Sandwich", 6.99, "Turkey and cheese sandwich with a side of chips."));
  menu.push(new MenuItem("Taco", 4.99, "Spicy chicken tacos with fresh salsa."));
  menu.push(new MenuItem("Ice Cream", 3.49, "Creamy vanilla ice cream with chocolate syrup."));
  menu.push(new MenuItem("Milkshake", 4.49, "Thick milkshake with a choice of flavors."));

  const div = document.createElement('div');
  div.classList.add('menu');

  menu.forEach((menuItem) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardTitle = document.createElement('p');
    const cardPrice = document.createElement('p');
    const cardDescription = document.createElement('p');

    cardTitle.textContent = menuItem.item;
    cardPrice.textContent = menuItem.price;
    cardDescription.textContent = menuItem.description;

    card.append(cardTitle);
    card.append(cardPrice);
    card.append(cardDescription);

    div.append(card);
  })
  content.append(div);
}

export default menuPage;