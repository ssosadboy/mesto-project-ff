import "./styles/index.css";
const createCard = function (itemCards, handleDelete) {
  const cardTemplate = document.querySelector("#card-template");
  const cardElement = document
    .querySelector("#card-template")
    .content.querySelector(".card")
    .cloneNode(true);

  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const deleteButton = cardElement.querySelector(".card__delete-button");

  cardImage.src = itemCards.link;
  cardImage.alt = itemCards.name;
  cardTitle.textContent = itemCards.name;

  deleteButton.addEventListener("click", () => {
    handleDelete(cardElement);
  });

  return cardElement;
};

// Функция удаления карточки
const deleteCard = function (cardElement) {
  cardElement.remove();
};

// Функция рендеринга всех карточек

const cardsContainer = document.querySelector(".places__list");

function renderCards(cards) {
  cards.forEach((itemCards) => {
    const card = createCard(itemCards, deleteCard);
    cardsContainer.append(card);
  });
}
renderCards(initialCards);
