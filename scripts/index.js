const createCard = function (initialCards, handleDelete) {
  const cardTemplate = document.querySelector("#card-template");
  const cardElement = document
    .querySelector("#card-template")
    .content.querySelector(".card")
    .cloneNode(true);

  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const deleteButton = cardElement.querySelector(".card__delete-button");

  cardImage.src = initialCards.link;
  cardImage.alt = initialCards.name;
  cardTitle.textContent = initialCards.name;

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
  cards.forEach((initialCards) => {
    const card = createCard(initialCards, deleteCard);
    cardsContainer.append(card);
  });
}
renderCards(initialCards);
