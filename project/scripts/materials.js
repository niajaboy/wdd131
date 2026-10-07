const materials = [
  {
    type: "plastic",
    name: "Plastic Bottles",
    description: "Many drink and water bottles can be collected for recycling.",
    examples: ["Water bottles", "Soft drink bottles", "Clean plastic containers"]
  },
  {
    type: "plastic",
    name: "Plastic Containers",
    description: "Clean household plastic containers may be useful recyclable materials.",
    examples: ["Food containers", "Shampoo bottles", "Cleaning product bottles"]
  },
  {
    type: "paper",
    name: "Paper",
    description: "Clean and dry paper can often be collected for recycling.",
    examples: ["Office paper", "Newspapers", "School paper"]
  },
  {
    type: "paper",
    name: "Cardboard",
    description: "Flattened cardboard can take up less storage space before collection.",
    examples: ["Delivery boxes", "Cereal boxes", "Packaging cardboard"]
  },
  {
    type: "glass",
    name: "Glass Bottles",
    description: "Glass bottles can be separated from other household waste.",
    examples: ["Drink bottles", "Food jars", "Accepted glass containers"]
  },
  {
    type: "glass",
    name: "Glass Jars",
    description: "Empty glass jars may be suitable for reuse or recycling.",
    examples: ["Food jars", "Storage jars", "Clean glass jars"]
  },
  {
    type: "metal",
    name: "Aluminium Cans",
    description: "Metal drink cans can be collected and separated for recycling.",
    examples: ["Soft drink cans", "Food cans", "Aluminium cans"]
  },
  {
    type: "metal",
    name: "Metal Containers",
    description: "Some clean metal containers can be recovered instead of discarded.",
    examples: ["Tin containers", "Metal food cans", "Metal packaging"]
  }
];


function createMaterialCard(material) {
  const card = document.createElement("article");
  card.className = "material-card";

  const type = document.createElement("p");
  type.className = "material-type";
  type.textContent = material.type;

  const name = document.createElement("h2");
  name.textContent = material.name;

  const description = document.createElement("p");
  description.textContent = material.description;

  const list = document.createElement("ul");

  material.examples.forEach((example) => {
    const item = document.createElement("li");
    item.textContent = example;
    list.appendChild(item);
  });

  card.appendChild(type);
  card.appendChild(name);
  card.appendChild(description);
  card.appendChild(list);

  return card;
}


function displayMaterials(selectedType) {
  const materialGrid = document.querySelector("#material-grid");

  if (!materialGrid) {
    return;
  }

  materialGrid.innerHTML = "";

  let filteredMaterials = materials;

  if (selectedType !== "all") {
    filteredMaterials = materials.filter(
      (material) => material.type === selectedType
    );
  }

  filteredMaterials.forEach((material) => {
    materialGrid.appendChild(createMaterialCard(material));
  });
}

const filterButtons = document.querySelectorAll(".filter-button");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => {
      item.classList.remove("active");
    });
    button.classList.add("active");
    displayMaterials(button.dataset.filter);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  displayMaterials("all");
});