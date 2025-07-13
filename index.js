// --------------------------------------------
// createElement() Function Start

const createElement = (tagName, [...attribute], textContent) => {
  const element = document.createElement(tagName);

  // Set each attribute as [name, value]
  attribute.forEach(([name, value]) => {
    element.setAttribute(name, value);
  });

  if (textContent) {
    element.appendChild(document.createTextNode(textContent));
  }

  return element;
};

// createElement() Function End
// --------------------------------------------
// container2() Function Start

const container_2 = (...items) => {
  const container2 = document.getElementById(`container-2`);

  items.forEach(([title]) => {
    const containerItem = createElement(
      `div`,
      [[`class`, `container-item`]],
      title
    );

    // --------------------------------------------
    // Append elements
    container2.appendChild(containerItem);
  });

  return container2;
};
container_2(
  [`Autodesk Academic Partner`],
  [`Certiport Testing Centre`],
  [`ISO 9001:2015 Certified`]
);

// container2() Function End
// --------------------------------------------
// imageContainer() Function Start

const imageContainer = (containerId, [...attribute]) => {
  const container3 = document.getElementById(containerId);

  attribute.forEach(([src, href, title]) => {
    const figure = createElement(`figure`, [[`class`, `figure`]]);
    const anchor = createElement(`a`, [
      [`class`, `anchor`],
      [`href`, href],
    ]);
    const figureImg = createElement(`img`, [
      [`class`, `figure-img`],
      [`src`, src],
      [`alt`, title],
      [`title`, title],
    ]);
    const figCaption = createElement(
      `figcaption`,
      [[`class`, `figure-caption`]],
      title
    );

    // --------------------------------------------
    // Append elements
    anchor.appendChild(figureImg);
    anchor.appendChild(figCaption);
    figure.appendChild(anchor);
    container3.appendChild(figure);
  });

  return containerId;
};

// imageContainer() Function End
// --------------------------------------------
// container-3 Start

imageContainer(`container-3`, [
  [
    `src/image-container-1/pexels-kevin-ku-92347-577585.jpg`,
    `https://itpathshaala.in/product-category/cs-course/`,
    `Computer Science & IT`,
  ],
  [
    `src/image-container-1/pexels-pixabay-53621.jpg`,
    `https://itpathshaala.in/product-category/accounts-finance/`,
    `Accounts & Finance`,
  ],
  [
    `src/image-container-1/digital-marketing-4111002_1280.jpg`,
    `https://itpathshaala.in/product-category/digital-marketing/`,
    `Digital Marketing`,
  ],
  [
    `src/image-container-1/web-design.jpg`,
    `https://itpathshaala.in/product-category/graphic-web-design/`,
    `Graphic / Web Design`,
  ],
]);

// container-3 End
// --------------------------------------------
// container-5 Start

imageContainer(`container-5`, [
  [
    `src/image-container-2/pexels-grovebrands-15764116.jpg`,
    `https://cadtabs.com/product-category/cadd-course/`,
    `CADD Course`,
  ],
  [
    `src/image-container-2/pexels-fauxels-3183153.jpg`,
    `https://cadtabs.com/product-category/quantity-surverying/`,
    `Quantity Surveying`,
  ],
  [
    `src/image-container-2/home-decoration-property-living-room-room-apartment-945407-pxhere.com.jpg`,
    `https://cadtabs.com/product-category/interior-design/`,
    `Interior Design`,
  ],
  [
    `src/image-container-2/sea-4106040_1280.jpg`,
    `https://cadtabs.com/product-category/import-export/`,
    `Import Export`,
  ],
]);

// container-5 End
// --------------------------------------------
// container_8() Function Start

const container_8 = (...items) => {
  const container8 = document.getElementById(`container-8`);

  items.forEach(([title, href]) => {
    const item = createElement(`li`, `item`);
    const itemLink = createElement(
      `a`,
      [
        [`class`, `item-link`],
        [`href`, `https://q3schools.com/python-project-${href}/`],
      ],
      title
    );

    // --------------------------------------------
    // Append elements
    item.appendChild(itemLink);
    container8.appendChild(item);
  });

  return items;
};

container_8(
  [`Candy Crush`, `candy-crush`],
  [`Calculator`, `calculator`],
  [`Color Game`, `color-game`],
  [`Code Decode`, `code-decode`],
  [`Guess No.`, `guess-number`],
  [`Paint`, `paint`],
  [`Note Pad`, `note-pad`]
);

// container_8() Function End
// --------------------------------------------
// container_9() Function Start

const container_9 = (...items) => {
  const container9 = document.getElementById(`contaiener-9`);

  items.forEach(([src, alt]) => {
    const figure = createElement(`figure`, `figure`);
    const figureImg = createElement(`img`, `figure-img`);

    // --------------------------------------------
    // Set attributes
    figureImg.src = src;
    figureImg.alt = alt;
    figureImg.title = alt;

    // --------------------------------------------
    // Append elements
    figure.appendChild(figureImg);
    container9.appendChild(figure);
  });

  return container_9;
};

container_9(
  [
    `https://itpathshaala.in/wp-content/uploads/2023/02/03ab57ae-2835-4e42-96e7-7cb5285e15ff-300x225.jpg`,
    `it pathshaala students`,
  ],
  [
    `https://itpathshaala.in/wp-content/uploads/2023/02/17b73dab-f013-4619-8024-2c9722a12ae9-300x225.jpg`,
    `it pathshaala students`,
  ],
  [
    `https://itpathshaala.in/wp-content/uploads/2023/02/929f263a-f9f3-45ff-9835-b82cf143f5b8-300x225.jpg`,
    `it pathshaala students`,
  ],
  [
    `https://itpathshaala.in/wp-content/uploads/2023/02/b3acece4-95d9-44aa-aef7-61cc9e1ff59c-300x225.jpg`,
    `it pathshaala students`,
  ],
  [
    `https://itpathshaala.in/wp-content/uploads/2023/02/c0ee9306-16c3-415d-9a2c-6ddaaeeeeda5-300x225.jpg`,
    `it pathshaala students`,
  ],
  [
    `https://itpathshaala.in/wp-content/uploads/2023/02/c3b63e6f-b793-4f80-b20f-d306eb409e39-300x225.jpg`,
    `it pathshaala students`,
  ],
  [
    `https://itpathshaala.in/wp-content/uploads/2023/02/c669700e-72f7-44bf-b834-4fe1ca1607e8-300x225.jpg`,
    `it pathshaala students`,
  ]
);

// container_9() Function End
// --------------------------------------------
// currentYear Start
// Display the Current Year

const currentYear = new Date().getFullYear();
const yearElement = document.getElementById(`currentYear`);
yearElement.appendChild(document.createTextNode(currentYear));

// currentYear End
// --------------------------------------------
