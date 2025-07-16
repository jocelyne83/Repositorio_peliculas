function toggleDescription(button) {
  const desc = button.nextElementSibling;
  desc.style.display = desc.style.display === "none" ? "block" : "none";
}

function toggleAllDescriptions() {
  const descriptions = document.querySelectorAll(".description");
  const allVisible = Array.from(descriptions).every(p => p.style.display === "block");

  descriptions.forEach(p => {
    p.style.display = allVisible ? "none" : "block";
  });
}
