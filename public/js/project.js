const deleteBtnHandler = async (event) => {
  const id = event.target.getAttribute("data-id");
  const response = await fetch(`/api/projects/comment/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert("Failed to delete comment.");
  }
};

const newFormHandler = async (event) => {
  event.preventDefault();

  const description = document.querySelector("#funding-desc").value.trim();
  const projectId = document.querySelector("#project-id").value;

  if (description) {
    console.log(projectId);
    const response = await fetch(`/api/projects/comment/${projectId}`, {
      method: "POST",
      body: JSON.stringify({ description }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert("Failed to create funding");
    }
  }
};
const toggleFunding = () => {
  let target = document.querySelector(".toggle-funding");
  if (target.style.display === "none") {
    target.style.display = "";
  } else {
    target.style.display = "none";
  }
};

document
  .querySelectorAll(".btn-delete")
  .forEach((e) => e.addEventListener("click", deleteBtnHandler));

document
  .querySelector(".new-funding-form")
  .addEventListener("submit", newFormHandler);

document
  .querySelector(".toggler-funding")
  .addEventListener("click", toggleFunding);
