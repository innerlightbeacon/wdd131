const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Accra Ghana",
      location: "Accra, Ghana",
      dedicated: "2004, January, 11",
      area: 17500,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Johannesburg South Africa",
      location: "Johannesburg, South Africa",
      dedicated: "1985, August, 24",
      area: 19500,
      imageUrl:
       "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Kinshasa DR Congo",
      location: "Kinshasa, DR Congo",
      dedicated: "2019, April, 14",
      area: 12000,
      imageUrl:
         "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    }
  ];
  
  // Render temple cards
  function renderTemples(templeList) {
    const container = document.getElementById("temple-cards");
    container.innerHTML = "";
  
    templeList.forEach((temple) => {
      const card = document.createElement("div");
      card.className = "card";
  
      card.innerHTML = `
        <h2>${temple.templeName}</h2>
        <img src="${temple.imageUrl}" loading="lazy" alt="${temple.templeName}">
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      `;
  
      container.appendChild(card);
    });
  }
  
  // Filtering logic
  function filterTemples(criteria) {
    let filtered = temples;
  
    if (criteria === "old") {
      filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
    } else if (criteria === "new") {
      filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
    } else if (criteria === "large") {
      filtered = temples.filter(t => t.area > 90000);
    } else if (criteria === "small") {
      filtered = temples.filter(t => t.area < 10000);
    }
  
    renderTemples(filtered);
  }
  
  // Button Event Listeners
  document.getElementById("home").addEventListener("click", () => renderTemples(temples));
  document.getElementById("old").addEventListener("click", () => filterTemples("old"));
  document.getElementById("new").addEventListener("click", () => filterTemples("new"));
  document.getElementById("large").addEventListener("click", () => filterTemples("large"));
  document.getElementById("small").addEventListener("click", () => filterTemples("small"));
  
  // Footer Year and Last Modified
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
  
  // Initial render
  renderTemples(temples);
  