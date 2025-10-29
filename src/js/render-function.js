const spriteUrl = `${import.meta.env.BASE_URL}img/svg/sprite.svg`;
export const createObjectsCard = objects =>
  objects.map(objectInfo => `
    <li class="objects-item">
    <div class="icon-container">
    <svg class="icon-prev" width="34" height="34">
    <use xlink:href="${spriteUrl}#icon-pin"></use>
    </svg>
    </div>
    <div class="container-year-type">
    <p class="year">${objectInfo.year}p.</p>
    <p class="type">${objectInfo.type}</p>
    </div>
    <div class="img-title-container">
    <img class="card-img" src="${objectInfo.img}" alt="${objectInfo.name}" >
    <h3 class="title-card">${objectInfo.name}</h3>
    </div>
    <p class="adress">${objectInfo.adress}</p>
    <p class="types-work">Теги:</p>
    <ul class="list-tags">
    ${objectInfo.tags.map(tag => `<li class="item-tags">${tag}</li>`).join("")}
    </ul>
    </li>
    `).join("");