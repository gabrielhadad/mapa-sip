const DATA = {
  "Painel de atividades": [
    {
      image: "assets/painel-atividades.png",
      tag: "Visão geral",
      title: "Painel de atividades",
      text: "Reúne agenda, prazos e tarefas em uma única tela.",
      hotspots: [
        {
          x: 0.8,
          y: 5.1,
          w: 6.6,
          h: 4.3,
          label: "Dia",
          title: "Agenda do dia",
          text: "Exibe os compromissos do dia selecionado."
        },
        {
          x: 7.5,
          y: 5.1,
          w: 6.8,
          h: 4.3,
          label: "Semana",
          title: "Agenda da semana",
          text: "Exibe os compromissos da semana selecionada."
        },
        {
          x: 14.5,
          y: 5.1,
          w: 6.7,
          h: 4.3,
          label: "Mês",
          title: "Agenda do mês",
          text: "Exibe os compromissos do mês selecionado."
        },
        {
          x: 0.9,
          y: 35.1,
          w: 15.0,
          h: 10.8,
          label: "Usuários",
          title: "Agenda por usuário",
          text: "Mostra os colaboradores do setor. Marque outro usuário para visualizar também a agenda dele."
        }
      ],
      actions: [
        ["Agenda/Calendário", "Consulta compromissos por dia, semana ou mês."],
        ["Prazos", "Exibe prazos vinculados aos processos."],
        ["Tarefas", "Exibe tarefas e demandas vinculadas ao usuário."],
        ["Setores e usuários", "Define de quem as informações serão exibidas."]
      ]
    },
    {
      image: "assets/painel-prazos-menu.png",
      tag: "Prazos",
      title: "Ações do prazo",
      text: "Clique com o botão direito sobre um prazo para acessar as ações rápidas.",
      actions: [
        ["Altera processo", "Abre o processo relacionado para alteração."],
        ["Copia nº do processo", "Copia o número do processo."],
        ["Repassa", "Permite repassar o prazo."],
        ["Conclui", "Marca o prazo como concluído."],
        ["Atualiza informações", "Atualiza os dados da tela (F5)."]
      ]
    },
    {
      image: "assets/painel-tarefas-menu.png",
      tag: "Tarefas",
      title: "Ações da tarefa",
      text: "O menu de contexto concentra as principais ações sobre a tarefa.",
      actions: [
        ["Inclui tarefa", "Abre o cadastro de nova tarefa."],
        ["Altera processo", "Abre o processo relacionado para alteração."],
        ["Conclui/Encerra", "Finaliza a tarefa."],
        ["Histórico", "Consulta o histórico da tarefa."],
        ["Copia dados", "Copia os dados da tarefa selecionada."],
        ["Atualiza informações", "Atualiza os dados da tela (F5)."]
      ]
    }
  ],

  "Agenda do escritório": [
    {
      image: "assets/agenda-atividades.png",
      tag: "Consulta",
      title: "Agenda de atividades",
      text: "Consulta atividades por período e filtros específicos.",
      actions: [
        ["Calendário", "Seleciona rapidamente o dia da consulta."],
        ["Filtros", "Tipo, cidade, responsável, órgão, execução, cadastro e processo."],
        ["Procura", "Executa a pesquisa conforme os critérios informados."],
        ["Resultado", "Mostra atividades e detalhes do item selecionado."]
      ]
    }
  ],

  "Atendimento": [
    {
      image: "assets/atendimentos-pendentes.png",
      tag: "Pendências",
      title: "Atendimentos pendentes",
      text: "Consulta atendimentos pendentes dentro do período informado.",
      actions: [
        ["Período", "Define a data inicial e final da pesquisa."],
        ["Procura", "Busca os atendimentos."],
        ["Atualiza", "Atualiza a listagem exibida."]
      ]
    }
  ],

  "Clientes": [
    {
      image: "assets/clientes.png",
      tag: "Pesquisa",
      title: "Consulta de clientes",
      text: "Localiza clientes por dados cadastrais e permite acessar informações relacionadas.",
      hotspots: [
        {
          x: 40.5,
          y: 90.3,
          w: 7.1,
          h: 5.0,
          label: "Consulta",
          title: "Consulta",
          text: "Abre o cadastro somente para visualização."
        },
        {
          x: 55.5,
          y: 90.3,
          w: 7.5,
          h: 5.0,
          label: "Processos",
          title: "Processos",
          text: "Abre os processos vinculados ao cliente selecionado."
        },
        {
          x: 83.0,
          y: 90.3,
          w: 7.0,
          h: 5.0,
          label: "Tarefa",
          title: "Tarefa",
          text: "Acessa ou inclui tarefas relacionadas ao cliente."
        }
      ],
      actions: [
        ["Procura", "Executa a pesquisa com os filtros informados."],
        ["Consulta", "Abre o cadastro somente para visualização."],
        ["Altera", "Abre o cadastro permitindo alterações."],
        ["Processos", "Acessa os processos vinculados ao cliente."],
        ["Tarefa", "Acessa ou inclui tarefas relacionadas."]
      ]
    },

    {
      image: "assets/cadastro-cliente.png",
      tag: "Cadastro",
      title: "Dados do cliente",
      text: "Tela com os dados cadastrais e acessos complementares do cliente.",
      actions: [
        ["Consulta", "Permite apenas visualizar as informações."],
        ["Alterar", "Libera os campos permitidos para edição."],
        ["Detalhes / Observações", "Acessos complementares do cadastro."],
        ["Atend./Tarefas", "Acessa atendimentos e tarefas vinculados."],
        ["Financeiro / Bancos", "Acessa informações financeiras quando disponíveis."]
      ]
    }
  ],

  "Consulta pendências": [
    {
      image: "assets/pendencias.png",
      tag: "Pendências",
      title: "Central de pendências",
      text: "Reúne prazos, retornos, demandas internas, documentos e pastas pendentes.",
      actions: [
        ["Abas", "Separa os tipos de pendência."],
        ["Altera", "Abre o item para alteração."],
        ["Repassa", "Repassa a pendência."],
        ["Conclui", "Finaliza a pendência."],
        ["Processo", "Abre o processo relacionado."]
      ]
    }
  ],

  "Processos": [
    {
      image: "assets/processo-detalhes.png",
      tag: "Processo",
      title: "Tela do processo",
      text: "Concentra os dados do processo e suas áreas relacionadas.",
      actions: [
        ["Processo", "Dados principais, partes, responsáveis, ação, justiça e objetos."],
        ["Atividades/Agenda", "Atividades relacionadas ao processo."],
        ["Histórico/Andamento", "Histórico e movimentações."],
        ["Prazos / Tarefas", "Itens vinculados ao processo."],
        ["Documento / Recurso / Arquivo", "Áreas complementares do processo."],
        ["Libera campos", "Quando permitido, libera campos para alteração."]
      ]
    }
  ],

  "Prazos": [
    {
      image: "assets/prazos.png",
      tag: "Pesquisa",
      title: "Consulta de prazos",
      text: "Pesquisa e gerencia prazos utilizando filtros específicos.",
      actions: [
        ["Filtros", "Tipo, situação, responsável, processo, descrição, origem e datas."],
        ["Procura", "Executa a pesquisa."],
        ["Altera", "Abre o prazo selecionado para alteração."],
        ["Conclui", "Conclui o prazo quando disponível."],
        ["Processo", "Abre o processo relacionado."]
      ]
    }
  ],

  "Tarefas": [
    {
      image: "assets/tarefas.png",
      tag: "Pesquisa",
      title: "Tarefas e demandas",
      text: "Consulta retornos, demandas internas e solicitações de documentos.",
      actions: [
        ["Filtros", "Refina a pesquisa por tipo, categoria, responsável, processo e outros campos."],
        ["Inclui", "Abre o cadastro de uma nova tarefa/retorno."],
        ["Altera", "Abre o registro para edição."],
        ["Encerra", "Finaliza o item selecionado."],
        ["Abre", "Abre o item relacionado."]
      ]
    },

    {
      image: "assets/cadastro-retorno.png",
      tag: "Cadastro",
      title: "Cadastro de retorno/tarefa",
      text: "Cadastro e edição de tarefas, retornos e demandas vinculadas ao processo.",
      actions: [
        ["Tipo / Classificação", "Define a natureza do registro."],
        ["Nome / Título / Descrição", "Identifica a tarefa ou demanda."],
        ["Responsável / Prazo", "Define quem executará e a data limite."],
        ["Subtarefas", "Permite vincular itens menores à tarefa principal."],
        ["Docs. / Checklist / Tag", "Complementam o registro."]
      ]
    }
  ],

  "Registros home office": [
    {
      image: "assets/home-office.png",
      tag: "Consulta",
      title: "Registro de atividades home office",
      text: "Consulta registros de atividades por período, responsável e tipo.",
      actions: [
        ["Período", "Define a faixa de datas."],
        ["Responsável", "Filtra por usuário."],
        ["Tipo", "Filtra o tipo de atividade."],
        ["Somente não concluídos", "Exibe apenas itens ainda pendentes."],
        ["Procura", "Executa a pesquisa."]
      ]
    }
  ]
};


const menu = document.getElementById("menu");
const titleEl = document.getElementById("screenTitle");
const descEl = document.getElementById("screenDescription");
const imgEl = document.getElementById("screenImage");
const tagEl = document.getElementById("infoTag");
const infoTitle = document.getElementById("infoTitle");
const infoText = document.getElementById("infoText");
const actions = document.getElementById("actionList");
const dots = document.getElementById("dots");
const currentIndex = document.getElementById("currentIndex");
const totalItems = document.getElementById("totalItems");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const slide = document.getElementById("slide");
const hotspotsEl = document.getElementById("hotspots");

let section = Object.keys(DATA)[0];
let index = 0;


function buildMenu() {
  Object.keys(DATA).forEach((name) => {
    const button = document.createElement("button");

    button.className = "nav-item";
    button.textContent = name;

    button.addEventListener("click", () => {
      section = name;
      index = 0;
      render();
    });

    menu.appendChild(button);
  });
}


function render() {
  [...menu.children].forEach((button) => {
    button.classList.toggle(
      "active",
      button.textContent === section
    );
  });

  const items = DATA[section];
  const item = items[index];

  titleEl.textContent = section;

  descEl.textContent =
    items.length > 1
      ? "Use as setas para navegar pelos detalhes desta tela."
      : "Resumo da tela e das principais ações.";

  imgEl.src = item.image;
  imgEl.alt = item.title;

  tagEl.textContent = item.tag;
  infoTitle.textContent = item.title;
  infoText.textContent = item.text;

  actions.innerHTML = "";

  item.actions.forEach(([name, text]) => {
    const element = document.createElement("div");

    element.className = "action";

    element.innerHTML = `
      <strong>${name}</strong>
      <span>${text}</span>
    `;

    actions.appendChild(element);
  });


  currentIndex.textContent = index + 1;
  totalItems.textContent = items.length;


  dots.innerHTML = "";

  items.forEach((_, i) => {
    const dot = document.createElement("button");

    dot.className = "dot" + (i === index ? " active" : "");

    dot.setAttribute(
      "aria-label",
      `Ir para item ${i + 1}`
    );

    dot.addEventListener("click", () => {
      index = i;
      render();
    });

    dots.appendChild(dot);
  });


  prevBtn.style.visibility =
    items.length > 1 ? "visible" : "hidden";

  nextBtn.style.visibility =
    items.length > 1 ? "visible" : "hidden";


  renderHotspots(item.hotspots || []);
}


function renderHotspots(list) {
  hotspotsEl.innerHTML = "";

  list.forEach((hotspot) => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "hotspot";

    button.dataset.label = hotspot.label;

    button.setAttribute(
      "aria-label",
      hotspot.title
    );

    Object.assign(button.style, {
      left: hotspot.x + "%",
      top: hotspot.y + "%",
      width: hotspot.w + "%",
      height: hotspot.h + "%"
    });

    button.addEventListener("click", (event) => {
      event.stopPropagation();

      showHotspotNote(
        button,
        hotspot
      );
    });

    hotspotsEl.appendChild(button);
  });
}


function showHotspotNote(button, hotspot) {

  hotspotsEl
    .querySelectorAll(".hotspot-note")
    .forEach((note) => {
      note.remove();
    });


  const note = document.createElement("div");

  note.className = "hotspot-note";

  note.innerHTML = `
    <strong>${hotspot.title}</strong>

    ${hotspot.text}

    <br>

    <button type="button">
      Fechar
    </button>
  `;


  const left = Math.min(
    72,
    Math.max(
      2,
      hotspot.x + hotspot.w + 1
    )
  );


  const top = Math.min(
    78,
    Math.max(
      2,
      hotspot.y
    )
  );


  Object.assign(note.style, {
    left: left + "%",
    top: top + "%"
  });


  note
    .querySelector("button")
    .addEventListener("click", () => {
      note.remove();
    });


  hotspotsEl.appendChild(note);
}


function move(delta) {

  const items = DATA[section];

  index =
    (
      index +
      delta +
      items.length
    ) % items.length;

  render();
}


prevBtn.addEventListener(
  "click",
  () => move(-1)
);


nextBtn.addEventListener(
  "click",
  () => move(1)
);


let startX = null;


slide.addEventListener(
  "touchstart",
  (event) => {

    startX =
      event.touches[0].clientX;

  },
  {
    passive: true
  }
);


slide.addEventListener(
  "touchend",
  (event) => {

    if (startX === null) {
      return;
    }


    const diff =
      event.changedTouches[0].clientX -
      startX;


    if (
      Math.abs(diff) > 45
    ) {

      move(
        diff > 0
          ? -1
          : 1
      );

    }


    startX = null;
  }
);


document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key === "ArrowLeft"
    ) {
      move(-1);
    }

    if (
      event.key === "ArrowRight"
    ) {
      move(1);
    }

  }
);


buildMenu();
render();
