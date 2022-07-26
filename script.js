// api url
const api_url = "http://127.0.0.1:8000/api/projects/";

fetch(api_url)
  .then(function (response) {
    return response.json();
  })
  .then(function (projects) {
    let placeholder = document.querySelector(".band");
    let out = "";
    for (let project of projects) {
      out += `
      <div class="item featured_${project.featured}">
      <a href="${project.link_github}" class="card">
        <div class="thumb" style="background-image: url(${project.image_link});"></div>
        <article>
          <h1>${project.title}</h1>
          <p>${project.description}</p>
          <span>${project.date_published}</span>
        </article>
      </a>
    </div>
    `;
    }
    placeholder.innerHTML = out;
  });
