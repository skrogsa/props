function addPopularItem(name, price,imgURL) {
    // HENT ELLER LAG
    // Lage en div med variabelnavn itemCard
    const itemCard = document.createElement("div");

   // MODIFISER 
   // Gir en klassenavn til diven
   itemCard.className = "card";
   // Gir innhold til diven
    itemCard.innerHTML = `
    <figure>
    <img src="${imgURL}" alt="destination" />
    <figcaption>
    <h2>${name}</h2>
    <h3>${price}</h3>
    </figcaption>
    <div>
    </figure>
    `;

    // SEND TIL DOM
    // Sender innholdt tilbake til div med klassenavn itemContainter i html-filen
    const itemContainer = document.querySelector(".itemContainer");

    itemContainer.appendChild(itemCard);

    console.log("Work?");
}

// Legger til flere div itemCard med ulike innhold på de forskjellige
addPopularItem("Mars", "300$", "images/mars.png");
addPopularItem("Moon", "100$", "images/moon.png");
addPopularItem("Neptune", "700$", "images/neptune.png");

// <div>
//<a href=#>Hot</a>
//<a href=#>Cold</a>
//</div>

/*  <div>
    <img src="images/shopping.png" alt="Shopping cart icon" />
    </div>*/