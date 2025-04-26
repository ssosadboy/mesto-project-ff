"use strick";
const createCard = function (cardData, handleDelete) {
  const cardTemplate = document.querySelector("#card-template");
  const cardElement = cardTemplate.content.cloneNode(true);

  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const deleteButton = cardElement.querySelector(".card__delete-button");

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

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

  cards.forEach((cardData) => {
    const card = createCard(cardData, deleteCard);
    placesList.append(card);
  });
}
