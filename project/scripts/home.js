const features = [
  {
    image: "images/sort-waste-image-gaurav-ranjitkar.webp",
    alt: "Person sorting waste",
    title: "Sort your waste",
    description:
      "Keep recyclable materials separate from food waste and other rubbish. Start with plastic, paper, glass, and metal."
  },
  {
    image: "images/reuse-items-image-pexels-ron-lach.webp",
    alt: "Reusable household containers",
    title: "Reuse when possible",
    description:
      "Before throwing something away, ask whether it can be used again. Reusing an item can reduce the waste we create."
  },
  {
    image: "images/clean-community-image-pexels-shvetsa.webp",
    alt: "Volunteer wearing gloves picks up litter in park, promoting environmental awareness.",
    title: "Keep communities clean",
    description:
      "Responsible waste habits help keep streets, drains, homes, schools, and public spaces cleaner."
  }
];

const featureContainer = document.querySelector("#features");

if (featureContainer) {
  features.forEach((feature) => {
    const article = document.createElement("article");
    article.classList.add("feature-card");

    const image = document.createElement("img");
    image.src = feature.image;
    image.width = 400;
    image.height = 260;
    image.alt = feature.alt;
    image.loading = "lazy";

    const heading = document.createElement("h2");
    heading.textContent = feature.title;

    const paragraph = document.createElement("p");
    paragraph.textContent = feature.description;

    article.appendChild(image);
    article.appendChild(heading);
    article.appendChild(paragraph);

    featureContainer.appendChild(article);
  });
}


// Recycling habits

const habits = document.querySelectorAll(".habit");
const habitMessage = document.querySelector("#habit-message");

function saveHabits() {
  const habitValues = [];

  habits.forEach((habit) => {
    habitValues.push(habit.checked);
  });

  localStorage.setItem("recycleHabits", JSON.stringify(habitValues));
}

function loadHabits() {
  const savedHabits = JSON.parse(localStorage.getItem("recycleHabits"));

  if (savedHabits) {
    habits.forEach((habit, index) => {
      habit.checked = savedHabits[index];
    });
  }

  updateHabitMessage();
}

function updateHabitMessage() {
  if (!habitMessage) {
    return;
  }

  let completed = 0;

  habits.forEach((habit) => {
    if (habit.checked) {
      completed += 1;
    }
  });

  if (completed === habits.length) {
    habitMessage.textContent =
      `Great work! You completed all ${habits.length} habits.`;
  } else {
    habitMessage.textContent =
      `You have completed ${completed} of ${habits.length} habits.`;
  }
}

habits.forEach((habit) => {
  habit.addEventListener("change", () => {
    saveHabits();
    updateHabitMessage();
  });
});

if (habits.length > 0) {
  loadHabits();
}




const contactForm = document.querySelector("#contact-form");
const formMessage = document.querySelector("#form-message");

