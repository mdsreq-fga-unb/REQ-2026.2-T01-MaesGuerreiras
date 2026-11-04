/* Filtros do catálogo integrado.
   Funciona sem dependências. Sem JavaScript, todas as fichas continuam visíveis, agrupadas por
   característica, e o número antes do ID mostra a posição na ordem do backlog.
   Links de outras páginas chegam com o filtro no endereço, por exemplo:
   #mvp-sim, #sprint-7, #release-r1, #cp-cp2, #situacao-a-refinar, #valor-4-esforco-3.
   #ordem abre as fichas numa lista única, na ordem do backlog. */
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
    var modo = document.getElementById("f-modo");
    var fichas = Array.prototype.slice.call(document.querySelectorAll("details.ficha"));
    var extra = null; // filtro de valor x esforço vindo da priorização

    // Grupos por característica: cada título (h2 com id cp1…cp7 ou itens-tecnicos) e o que vem
    // depois dele até o próximo h2. Guardam onde cada ficha estava, para poder voltar.
    var grupos = [];
    Array.prototype.slice.call(document.querySelectorAll("h2[id]")).forEach(function (h2) {
      if (!/^(cp\d|itens-tecnicos)$/.test(h2.id)) {
        return;
      }
      var grupo = { titulo: h2, itens: [h2], fichas: [] };
      var el = h2.nextElementSibling;
      while (el && el.tagName !== "H2") {
        grupo.itens.push(el);
        if (el.matches("details.ficha")) {
          grupo.fichas.push(el);
        }
        el = el.nextElementSibling;
      }
      grupos.push(grupo);
    });
    var lugar = new Map();
    fichas.forEach(function (d) {
      var marca = document.createComment("lugar " + d.id);
      d.parentNode.insertBefore(marca, d);
      lugar.set(d, marca);
    });

    // Lista única, usada no modo "Na ordem do backlog".
    var lista = document.createElement("div");
    lista.className = "lista-ordem";
    lista.hidden = true;
    var tituloLista = document.createElement("h2");
    tituloLista.className = "lista-ordem__titulo";
    tituloLista.textContent = "Fichas na ordem do backlog";
    lista.appendChild(tituloLista);
    var primeiroGrupo = grupos.length ? grupos[0].titulo : null;
    if (primeiroGrupo) {
      primeiroGrupo.parentNode.insertBefore(lista, primeiroGrupo);
    }

    function posicao(d) {
      var n = parseInt(d.getAttribute("data-ordem"), 10);
      return isNaN(n) ? Infinity : n;
    }

    function aplicarModo() {
      var emOrdem = modo && modo.value === "ordem";
      lista.hidden = !emOrdem;
      if (emOrdem) {
        fichas.slice().sort(function (a, b) {
          return posicao(a) - posicao(b);
        }).forEach(function (d) {
          lista.appendChild(d);
        });
      } else {
        fichas.forEach(function (d) {
          var marca = lugar.get(d);
          marca.parentNode.insertBefore(d, marca.nextSibling);
        });
      }
    }

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
      aplicarModo();
      var emOrdem = modo && modo.value === "ordem";
      var f = ativos();
      var termo = (texto.value || "").trim().toLowerCase();
      var filtrando = Object.keys(f).length > 0 || termo.length > 0;
      var visiveis = 0;
      var total = 0;
      fichas.forEach(function (d) {
        var ok = passa(d, f, termo);
        d.classList.toggle("oculto", !ok);
        if (d.getAttribute("data-cp") !== "tec") {
          total += 1;
          if (ok) {
            visiveis += 1;
          }
        }
      });
      // Título e texto de uma característica somem quando ela fica sem fichas visíveis,
      // e somem todos no modo "Na ordem do backlog", em que as fichas saem dos grupos.
      grupos.forEach(function (g) {
        var algumaVisivel = g.fichas.some(function (d) {
          return !d.classList.contains("oculto");
        });
        var esconder = emOrdem || !algumaVisivel;
        g.itens.forEach(function (el) {
          if (!el.matches("details.ficha")) {
            el.classList.toggle("oculto", esconder);
          }
        });
      });
      var desc = "";
      if (extra) {
        desc = " · valor " + extra.valor + " × esforço " + extra.esforco;
      }
      var vazio = filtrando && visiveis === 0 ? " Nenhuma ficha atende a esses filtros." : "";
      status.textContent = filtrando
        ? visiveis + " de " + total + " requisitos" + desc + "." + vazio
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
      if (h === "ordem") {
        if (modo) {
          modo.value = "ordem";
        }
        aplicar();
        barra.scrollIntoView();
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
    if (modo) {
      modo.addEventListener("change", aplicar);
    }
    texto.addEventListener("input", aplicar);
    limpar.addEventListener("click", function () {
      zerar();
      if (modo) {
        modo.value = "cp";
      }
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
