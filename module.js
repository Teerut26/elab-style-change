const create_link = (element) => {
    var favicon = element.createElement("link");
    favicon.rel = "stylesheet";
    favicon.href = "https://pro.fontawesome.com/releases/v5.15.3/css/all.css";
    element.head.appendChild(favicon);
  };
  
const create_link_css = (element) => {
    var css = element.createElement("link");
    css.rel = "stylesheet";
    css.href =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css";
    element.head.appendChild(css);
  };
  