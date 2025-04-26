"use strick";
const createCard = function (initialCards, handleDelete) {
  const cardTemplate = document.querySelector("#card-template");
  const cardElement = cardTemplate.content.cloneNode(true);

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
function renderCards(cards) {
  const placesList = document.querySelector(".places");

  cards.forEach((initialCards) => {
    const card = createCard(initialCards, deleteCard);
    placesList.append(card);
  });
}
