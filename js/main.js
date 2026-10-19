(function () {
  var KEY = "site-arq-lang";
  var root = document.documentElement;
  var ptTitle = null;
  function load() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function save(l) { try { localStorage.setItem(KEY, l); } catch (e) {} }
  function apply(lang) {
    if (lang !== "pt" && lang !== "en") lang = "pt";
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang === "en" ? "en" : "pt-BR");
    var t = document.querySelector("title");
    if (t) {
      if (ptTitle === null) ptTitle = document.title;
      document.title = lang === "en" ? (t.getAttribute("data-en") || ptTitle) : ptTitle;
    }
    var b = document.querySelectorAll("[data-set-lang]");
    for (var i = 0; i < b.length; i++)
      b[i].setAttribute("aria-pressed", b[i].getAttribute("data-set-lang") === lang ? "true" : "false");
  }
  // Roda já no <head> para a página não piscar no idioma errado.
  apply(load() || root.getAttribute("data-lang") || "pt");
  document.addEventListener("DOMContentLoaded", function () {
    var b = document.querySelectorAll("[data-set-lang]");
    for (var i = 0; i < b.length; i++)
      b[i].addEventListener("click", function () {
        var l = this.getAttribute("data-set-lang"); apply(l); save(l);
      });
    apply(root.getAttribute("data-lang"));
  });
})();
