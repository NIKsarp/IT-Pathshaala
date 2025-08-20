// --------------------------------------------
// createElement() Function Start

const createElement = (tagName, textContent) => {
  const element = document.createElement(tagName);

  if (textContent) {
    element.appendChild(document.createTextNode(textContent));
  }

  return element;
};

// createElement() Function End
// --------------------------------------------
// container2() Function Start

const container_2 = (...items) => {
  const section = document.getElementById(`container-2`);

  items.forEach(([title]) => {
    // ELEMENTS
    const div = createElement(`div`, title);

    // CLASSNAME
    div.className = `container-item`;

    // APPEND ELEMENTS
    section.appendChild(div);
  });

  return section;
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
  const section = document.getElementById(containerId);

  attribute.forEach(([src, href, title]) => {
    // ELEMENTS
    const figure = createElement(`figure`);
    const a = createElement(`a`);
    const img = createElement(`img`);
    const figCaption = createElement(`figcaption`, title);

    // ATTRIBUTES
    a.href = href;
    img.src = src;
    img.alt = title;
    img.title = title;
    img.loading = `lazy`;

    // CLASSNAME
    figure.className = `figure`;
    a.className = `anchor`;
    img.className = `figure-img`;
    figCaption.className = `figure-caption`;

    // APPEND ELEMENTS
    a.append(img, figCaption);
    figure.appendChild(a);
    section.appendChild(figure);
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
// container-6 Start

const maxValue = 6718;
let startValue = maxValue - 2000;
const val = document.getElementById(`val`);

const loading = () => {
  if (startValue < maxValue) {
    startValue += 4;
    val.innerText = startValue;
  } else {
    clearInterval(this);
  }
};

const CallLoader = setInterval(loading, 1);

// container-6 End
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
  const section = document.getElementById(`container-8`);

  items.forEach(([title, href]) => {
    // ELEMENTS
    const li = createElement(`li`);
    const a = createElement(`a`, title);

    // ATTRIBUTES
    a.href = `https://q3schools.com/python-project-${href}/`;

    // CLASSNAME
    li.className = `item`;
    a.className = `item-link`;

    // APPEND ELEMENTS
    li.appendChild(a);
    section.appendChild(li);
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
  const section = document.getElementById(`contaiener-9`);

  items.forEach(([src, alt]) => {
    // ELEMENTS
    const figure = createElement(`figure`);
    const img = createElement(`img`);

    // ATTRIBUTES
    img.src = src;
    img.alt = alt;
    img.title = alt;
    img.loading = `lazy`;

    // CLASSNAME
    figure.className = `figure`;
    img.className = `figure-img`;

    // APPEND ELEMENTS
    figure.appendChild(img);
    section.appendChild(figure);
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
// Observer Start

const observeElements = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
};

const observer = new IntersectionObserver(observeElements, {});

const todo = Array.from(document.getElementsByClassName(`figure-img`));

todo.forEach((el) => observer.observe(el));

// Observer End
// --------------------------------------------
// currentYear Start
// Display the Current Year

const currentYear = new Date().getFullYear();
const yearElement = document.getElementById(`currentYear`);
yearElement.appendChild(document.createTextNode(currentYear));

// currentYear End
// --------------------------------------------
