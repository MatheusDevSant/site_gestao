(function () {
  var KEY = "site-arq-lang";
  var root = document.documentElement;
  function save(l) { try { localStorage.setItem(KEY, l); } catch (e) {} }
  function apply(lang) {
    if (lang !== "pt" && lang !== "en") lang = "pt";
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang === "en" ? "en" : "pt-BR");
    var b = document.querySelectorAll("[data-set-lang]");
    for (var i = 0; i < b.length; i++)
      b[i].setAttribute("aria-pressed", b[i].getAttribute("data-set-lang") === lang ? "true" : "false");
  }
  document.addEventListener("DOMContentLoaded", function () {
    var b = document.querySelectorAll("[data-set-lang]");
    for (var i = 0; i < b.length; i++)
      b[i].addEventListener("click", function () {
        var l = this.getAttribute("data-set-lang"); apply(l); save(l);
      });
    apply(root.getAttribute("data-lang") || "pt");
  });
})();