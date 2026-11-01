/* Filtros do catálogo integrado.
   Funciona sem dependências. Sem JavaScript, todas as fichas continuam visíveis.
   Links de outras páginas chegam com o filtro no endereço, por exemplo:
   #mvp-sim, #sprint-7, #release-r1, #cp-cp2, #situacao-a-refinar, #valor-4-esforco-3 */
(function () {
  "use strict";

  function iniciar() {
    var barra = document.getElementById("filtros");
    if (!barra) {
      return;
    }
    var selects = Array.prototype.slice.call(barra.querySelectorAll("select[data-campo]"));
    var texto = document.getElementById("f-texto");
    var limpar = document.getElementById("f-limpar");
    var status = document.getElementById("f-status");
    var linhas = Array.prototype.slice.call(document.querySelectorAll(".resumo__tabela tbody tr"));
    var fichas = Array.prototype.slice.call(document.querySelectorAll("details.ficha"));
    var extra = null; // filtro de valor x esforço vindo da priorização

    function ativos() {
      var f = {};
      selects.forEach(function (s) {
        if (s.value) {
          f[s.getAttribute("data-campo")] = s.value;
        }
      });
      if (extra) {
        f.valor = extra.valor;
        f.esforco = extra.esforco;
      }
      return f;
    }

    function passa(el, f, termo) {
      for (var campo in f) {
        if (el.getAttribute("data-" + campo) !== f[campo]) {
          return false;
        }
      }
      if (termo) {
        return (el.textContent || "").toLowerCase().indexOf(termo) !== -1;
      }
      return true;
    }

    function aplicar() {
      var f = ativos();
      var termo = (texto.value || "").trim().toLowerCase();
      var filtrando = Object.keys(f).length > 0 || termo.length > 0;
      var visiveis = 0;
      linhas.forEach(function (tr) {
        var ok = passa(tr, f, termo);
        tr.classList.toggle("oculto", !ok);
        if (ok && tr.getAttribute("data-cp") !== "tec") {
          visiveis += 1;
        }
      });
      fichas.forEach(function (d) {
        var ok = passa(d, f, termo);
        d.classList.toggle("oculto", !ok);
      });
      var total = linhas.filter(function (tr) { return tr.getAttribute("data-cp") !== "tec"; }).length;
      var desc = "";
      if (extra) {
        desc = " · valor " + extra.valor + " × esforço " + extra.esforco;
      }
      status.textContent = filtrando
        ? visiveis + " de " + total + " requisitos" + desc + "."
        : "Mostrando os " + total + " requisitos.";
    }

    function zerar() {
      selects.forEach(function (s) { s.value = ""; });
      texto.value = "";
      extra = null;
    }

    function lerEndereco() {
      var h = decodeURIComponent((window.location.hash || "").slice(1));
      if (!h) {
        return;
      }
      var m = /^valor-(\d)-esforco-(\d)$/.exec(h);
      if (m) {
        zerar();
        extra = { valor: m[1], esforco: m[2] };
        aplicar();
        barra.scrollIntoView();
        return;
      }
      var campos = ["cp", "mvp", "release", "sprint", "situacao"];
      for (var i = 0; i < campos.length; i += 1) {
        var prefixo = campos[i] + "-";
        if (h.indexOf(prefixo) === 0) {
          var sel = document.getElementById("f-" + campos[i]);
          var valor = h.slice(prefixo.length);
          if (sel && sel.querySelector('option[value="' + valor + '"]')) {
            zerar();
            sel.value = valor;
            aplicar();
            barra.scrollIntoView();
          }
          return;
        }
      }
      var alvo = document.getElementById(h);
      if (alvo && alvo.tagName === "DETAILS" && alvo.classList.contains("ficha")) {
        if (alvo.classList.contains("oculto")) {
          zerar();
          aplicar();
        }
        alvo.open = true;
        fichas.forEach(function (d) { d.classList.remove("ficha--alvo"); });
        alvo.classList.add("ficha--alvo");
        alvo.scrollIntoView();
      }
    }

    selects.forEach(function (s) {
      s.addEventListener("change", function () { extra = null; aplicar(); });
    });
    texto.addEventListener("input", aplicar);
    limpar.addEventListener("click", function () {
      zerar();
      aplicar();
      if (window.location.hash && window.history && window.history.replaceState) {
        try {
          window.history.replaceState(null, "", window.location.pathname + window.location.search);
        } catch (e) { /* ambiente sem history: ignora */ }
      }
    });
    window.addEventListener("hashchange", lerEndereco);
    aplicar();
    lerEndereco();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar);
  } else {
    iniciar();
  }
})();
