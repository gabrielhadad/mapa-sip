const DATA = {
    "Painel de atividades": [
        {
            image: "assets/painel-atividades.png",

            tag: "Visão geral",

            title: "Painel de atividades",

            text: "Reúne agenda, prazos e tarefas em uma única tela.",

            hotspots: [
                {
                    x: 2.2,
                    y: 6.5,
                    w: 6.2,
                    h: 4.5,

                    label: "Dia",

                    title: "Agenda do dia",

                    text: "Exibe os compromissos do dia selecionado."
                },

                {
                    x: 9.3,
                    y: 6.5,
                    w: 7.2,
                    h: 4.5,

                    label: "Semana",

                    title: "Agenda da semana",

                    text: "Exibe os compromissos da semana selecionada."
                },

                {
                    x: 17.1,
                    y: 6.5,
                    w: 6.3,
                    h: 4.5,

                    label: "Mês",

                    title: "Agenda do mês",

                    text: "Exibe os compromissos do mês selecionado."
                },

                {
                    x: 1.6,
                    y: 36.0,
                    w: 16.5,
                    h: 11.0,

                    label: "Usuários",

                    title: "Agenda por usuário",

                    text: "Exibe os colaboradores do setor. Ao selecionar outro usuário, a agenda dele também passa a ser exibida."
                }
            ],

            actions: [
                [
                    "Agenda/Calendário",
                    "Consulta compromissos por dia, semana ou mês."
                ],

                [
                    "Prazos",
                    "Exibe prazos vinculados aos processos."
                ],

                [
                    "Tarefas",
                    "Exibe tarefas e demandas vinculadas ao usuário."
                ],

                [
                    "Setores e usuários",
                    "Permite selecionar quais usuários terão suas agendas exibidas."
                ]
            ]
        },

        {
            image: "assets/painel-prazos-menu.png",

            tag: "Prazos",

            title: "Ações do prazo",

            text: "Clique com o botão direito sobre um prazo para acessar as ações disponíveis.",

            hotspots: [],

            actions: [
                [
                    "Altera processo",
                    "Abre o processo relacionado para alteração."
                ],

                [
                    "Copia nº do processo",
                    "Copia o número do processo."
                ],

                [
                    "Repassa",
                    "Permite repassar o prazo."
                ],

                [
                    "Conclui",
                    "Marca o prazo como concluído."
                ],

                [
                    "Atualiza informações",
                    "Atualiza os dados da tela."
                ]
            ]
        },

        {
            image: "assets/painel-tarefas-menu.png",

            tag: "Tarefas",

            title: "Ações da tarefa",

            text: "Clique com o botão direito sobre uma tarefa para acessar suas ações.",

            hotspots: [],

            actions: [
                [
                    "Inclui tarefa",
                    "Abre o cadastro de uma nova tarefa."
                ],

                [
                    "Altera processo",
                    "Abre o processo relacionado."
                ],

                [
                    "Conclui/Encerra",
                    "Finaliza a tarefa."
                ],

                [
                    "Histórico",
                    "Exibe o histórico da tarefa."
                ],

                [
                    "Copia dados",
                    "Copia os dados da tarefa selecionada."
                ],

                [
                    "Atualiza informações",
                    "Atualiza os dados exibidos."
                ]
            ]
        }
    ],


    "Agenda do escritório": [
        {
            image: "assets/agenda-atividades.png",

            tag: "Consulta",

            title: "Agenda de atividades",

            text: "Consulta atividades por período e critérios específicos.",

            hotspots: [],

            actions: [
                [
                    "Calendário",
                    "Seleciona rapidamente o dia da consulta."
                ],

                [
                    "Filtros",
                    "Permitem refinar a pesquisa."
                ],

                [
                    "Procura",
                    "Executa a pesquisa conforme os critérios informados."
                ],

                [
                    "Resultado",
                    "Exibe as atividades encontradas."
                ]
            ]
        }
    ],


    "Atendimento": [
        {
            image: "assets/atendimentos-pendentes.png",

            tag: "Pendências",

            title: "Atendimentos pendentes",

            text: "Consulta atendimentos pendentes dentro do período informado.",

            hotspots: [],

            actions: [
                [
                    "Período",
                    "Define a data inicial e final."
                ],

                [
                    "Procura",
                    "Executa a pesquisa."
                ],

                [
                    "Atualiza",
                    "Atualiza a listagem."
                ]
            ]
        }
    ],


    "Clientes": [
        {
            image: "assets/clientes.png",

            tag: "Pesquisa",

            title: "Consulta de clientes",

            text: "Localiza clientes e permite acessar suas informações relacionadas.",

            hotspots: [
                {
                    x: 39.6,
                    y: 90.0,
                    w: 7.5,
                    h: 5.2,

                    label: "Consulta",

                    title: "Consultar cliente",

                    text: "Abre o cadastro somente para visualização."
                },

                {
                    x: 54.2,
                    y: 90.0,
                    w: 8.3,
                    h: 5.2,

                    label: "Processos",

                    title: "Processos do cliente",

                    text: "Abre os processos vinculados ao cliente selecionado."
                },

                {
                    x: 82.0,
                    y: 90.0,
                    w: 7.5,
                    h: 5.2,

                    label: "Tarefa",

                    title: "Tarefas do cliente",

                    text: "Acessa ou inclui tarefas relacionadas ao cliente."
                }
            ],

            actions: [
                [
                    "Procura",
                    "Executa a pesquisa."
                ],

                [
                    "Consulta",
                    "Abre o cadastro somente para visualização."
                ],

                [
                    "Alterar",
                    "Abre o cadastro permitindo alterações."
                ],

                [
                    "Processos",
                    "Acessa os processos vinculados."
                ],

                [
                    "Tarefa",
                    "Acessa tarefas relacionadas."
                ]
            ]
        },

        {
            image: "assets/cadastro-cliente.png",

            tag: "Cadastro",

            title: "Dados do cliente",

            text: "Exibe os dados cadastrais e demais informações relacionadas ao cliente.",

            hotspots: [],

            actions: [
                [
                    "Consulta",
                    "Permite somente visualizar os dados."
                ],

                [
                    "Alterar",
                    "Libera os campos permitidos para edição."
                ],

                [
                    "Detalhes / Observações",
                    "Acessa informações complementares."
                ],

                [
                    "Atend./Tarefas",
                    "Acessa atendimentos e tarefas vinculados."
                ],

                [
                    "Financeiro / Bancos",
                    "Acessa informações financeiras disponíveis."
                ]
            ]
        }
    ],


    "Consulta pendências": [
        {
            image: "assets/pendencias.png",

            tag: "Pendências",

            title: "Central de pendências",

            text: "Reúne diferentes tipos de pendências em uma única tela.",

            hotspots: [],

            actions: [
                [
                    "Abas",
                    "Separam os tipos de pendência."
                ],

                [
                    "Altera",
                    "Abre o item para alteração."
                ],

                [
                    "Repassa",
                    "Repassa a pendência."
                ],

                [
                    "Conclui",
                    "Finaliza a pendência."
                ],

                [
                    "Processo",
                    "Abre o processo relacionado."
                ]
            ]
        }
    ],


    "Processos": [
        {
            image: "assets/processo-detalhes.png",

            tag: "Processo",

            title: "Tela do processo",

            text: "Concentra as principais informações e áreas relacionadas ao processo.",

            hotspots: [],

            actions: [
                [
                    "Processo",
                    "Exibe os dados principais."
                ],

                [
                    "Atividades/Agenda",
                    "Acessa atividades vinculadas."
                ],

                [
                    "Histórico/Andamento",
                    "Acessa histórico e movimentações."
                ],

                [
                    "Prazos / Tarefas",
                    "Acessa prazos e tarefas."
                ],

                [
                    "Documento / Recurso / Arquivo",
                    "Acessa áreas complementares."
                ],

                [
                    "Libera campos",
                    "Libera os campos permitidos para alteração."
                ]
            ]
        }
    ],


    "Prazos": [
        {
            image: "assets/prazos.png",

            tag: "Pesquisa",

            title: "Consulta de prazos",

            text: "Consulta e gerencia prazos por meio dos filtros disponíveis.",

            hotspots: [],

            actions: [
                [
                    "Filtros",
                    "Permitem refinar a pesquisa."
                ],

                [
                    "Procura",
                    "Executa a pesquisa."
                ],

                [
                    "Altera",
                    "Abre o prazo para alteração."
                ],

                [
                    "Conclui",
                    "Finaliza o prazo."
                ],

                [
                    "Processo",
                    "Abre o processo relacionado."
                ]
            ]
        }
    ],


    "Tarefas": [
        {
            image: "assets/tarefas.png",

            tag: "Pesquisa",

            title: "Tarefas e demandas",

            text: "Consulta retornos, demandas internas e solicitações de documentos.",

            hotspots: [],

            actions: [
                [
                    "Filtros",
                    "Refinam a pesquisa."
                ],

                [
                    "Inclui",
                    "Abre o cadastro de uma nova tarefa."
                ],

                [
                    "Altera",
                    "Abre o registro para edição."
                ],

                [
                    "Encerra",
                    "Finaliza o item selecionado."
                ],

                [
                    "Abre",
                    "Abre o item relacionado."
                ]
            ]
        },

        {
            image: "assets/cadastro-retorno.png",

            tag: "Cadastro",

            title: "Cadastro de retorno/tarefa",

            text: "Permite cadastrar ou editar tarefas e demandas.",

            hotspots: [],

            actions: [
                [
                    "Tipo / Classificação",
                    "Define a natureza do registro."
                ],

                [
                    "Nome / Título / Descrição",
                    "Identifica a tarefa."
                ],

                [
                    "Responsável / Prazo",
                    "Define responsável e data limite."
                ],

                [
                    "Subtarefas",
                    "Permite cadastrar subtarefas."
                ],

                [
                    "Docs. / Checklist / Tag",
                    "Complementam o registro."
                ]
            ]
        }
    ],


    "Registros home office": [
        {
            image: "assets/home-office.png",

            tag: "Consulta",

            title: "Registro de atividades home office",

            text: "Consulta atividades por período, responsável e tipo.",

            hotspots: [],

            actions: [
                [
                    "Período",
                    "Define a faixa de datas."
                ],

                [
                    "Responsável",
                    "Filtra por usuário."
                ],

                [
                    "Tipo",
                    "Filtra o tipo de atividade."
                ],

                [
                    "Somente não concluídos",
                    "Exibe apenas itens pendentes."
                ],

                [
                    "Procura",
                    "Executa a pesquisa."
                ]
            ]
        }
    ]
};



/* =====================================================
   ELEMENTOS DA PÁGINA
   ===================================================== */

const menu =
    document.getElementById("menu");

const screenTitle =
    document.getElementById("screenTitle");

const screenDescription =
    document.getElementById("screenDescription");

const screenImage =
    document.getElementById("screenImage");

const hotspotsLayer =
    document.getElementById("hotspots");

const infoTag =
    document.getElementById("infoTag");

const infoTitle =
    document.getElementById("infoTitle");

const infoText =
    document.getElementById("infoText");

const actionList =
    document.getElementById("actionList");

const dots =
    document.getElementById("dots");

const currentIndex =
    document.getElementById("currentIndex");

const totalItems =
    document.getElementById("totalItems");

const prevBtn =
    document.getElementById("prevBtn");

const nextBtn =
    document.getElementById("nextBtn");

const slide =
    document.getElementById("slide");



/* =====================================================
   ESTADO
   ===================================================== */

let currentSection =
    Object.keys(DATA)[0];

let currentSlide = 0;



/* =====================================================
   MENU
   ===================================================== */

function createMenu() {

    menu.innerHTML = "";

    Object.keys(DATA).forEach(
        (sectionName) => {

            const button =
                document.createElement("button");

            button.type = "button";

            button.className =
                "nav-item";

            button.textContent =
                sectionName;


            button.addEventListener(
                "click",
                () => {

                    currentSection =
                        sectionName;

                    currentSlide = 0;

                    render();

                }
            );


            menu.appendChild(
                button
            );

        }
    );

}



/* =====================================================
   RENDERIZAÇÃO
   ===================================================== */

function render() {

    const sectionData =
        DATA[currentSection];

    const item =
        sectionData[currentSlide];


    /* MENU ATIVO */

    [...menu.children]
        .forEach(
            (button) => {

                button.classList.toggle(
                    "active",
                    button.textContent ===
                    currentSection
                );

            }
        );



    /* TÍTULO */

    screenTitle.textContent =
        currentSection;


    screenDescription.textContent =
        sectionData.length > 1
            ? "Use as setas para navegar pelas informações desta tela."
            : "Resumo da tela e das principais funções.";



    /* PAINEL DIREITO */

    infoTag.textContent =
        item.tag;

    infoTitle.textContent =
        item.title;

    infoText.textContent =
        item.text;



    /* CONTADOR */

    currentIndex.textContent =
        currentSlide + 1;

    totalItems.textContent =
        sectionData.length;



    /* AÇÕES */

    renderActions(
        item.actions || []
    );



    /* BOLINHAS */

    renderDots(
        sectionData
    );



    /* SETAS */

    const hasMultipleSlides =
        sectionData.length > 1;


    prevBtn.style.visibility =
        hasMultipleSlides
            ? "visible"
            : "hidden";


    nextBtn.style.visibility =
        hasMultipleSlides
            ? "visible"
            : "hidden";



    /*
       Limpa qualquer hotspot,
       preview ou janela da imagem anterior.
    */

    hotspotsLayer.innerHTML = "";



    /*
       Remove temporariamente a imagem.

       Isso força o navegador a recalcular
       corretamente as dimensões quando
       mudamos de tela.
    */

    screenImage.removeAttribute(
        "src"
    );



    /*
       Quando a nova imagem terminar
       de carregar, criamos os hotspots.
    */

    screenImage.onload = () => {

        hotspotsLayer.innerHTML =
            "";

        renderHotspots(
            item.hotspots || []
        );

    };



    /*
       Carrega a imagem nova.
    */

    screenImage.alt =
        item.title;

    screenImage.src =
        item.image;

}



/* =====================================================
   AÇÕES
   ===================================================== */

function renderActions(actions) {

    actionList.innerHTML = "";


    actions.forEach(
        ([title, description]) => {

            const action =
                document.createElement(
                    "div"
                );

            action.className =
                "action";


            const strong =
                document.createElement(
                    "strong"
                );

            strong.textContent =
                title;


            const span =
                document.createElement(
                    "span"
                );

            span.textContent =
                description;


            action.appendChild(
                strong
            );

            action.appendChild(
                span
            );


            actionList.appendChild(
                action
            );

        }
    );

}



/* =====================================================
   BOLINHAS
   ===================================================== */

function renderDots(items) {

    dots.innerHTML = "";


    if (items.length <= 1) {

        dots.style.display =
            "none";

        return;

    }


    dots.style.display =
        "flex";


    items.forEach(
        (_, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.className =
                "dot";


            if (
                index ===
                currentSlide
            ) {

                button.classList.add(
                    "active"
                );

            }


            button.setAttribute(
                "aria-label",
                `Ir para etapa ${index + 1}`
            );


            button.addEventListener(
                "click",
                () => {

                    currentSlide =
                        index;

                    render();

                }
            );


            dots.appendChild(
                button
            );

        }
    );

}



/* =====================================================
   HOTSPOTS
   ===================================================== */

function renderHotspots(hotspots) {

    hotspotsLayer.innerHTML =
        "";


    hotspots.forEach(
        (hotspot, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.className =
                "hotspot";


            button.setAttribute(
                "aria-label",
                hotspot.title
            );


            button.style.left =
                `${hotspot.x}%`;

            button.style.top =
                `${hotspot.y}%`;

            button.style.width =
                `${hotspot.w}%`;

            button.style.height =
                `${hotspot.h}%`;



            /* indicador pequeno */

            const number =
                document.createElement(
                    "span"
                );


            number.className =
                "hotspot-number";


            number.textContent =
                index + 1;


            button.appendChild(
                number
            );



            /*
               O label continua existindo,
               mas o próximo CSS vai deixá-lo
               discreto e só mostrar quando
               fizer sentido.
            */

            const label =
                document.createElement(
                    "span"
                );


            label.className =
                "hotspot-label";


            label.textContent =
                hotspot.label;


            button.appendChild(
                label
            );



            /* HOVER */

            button.addEventListener(
                "mouseenter",
                () => {

                    showHotspotPreview(
                        button,
                        hotspot
                    );

                }
            );


            button.addEventListener(
                "mouseleave",
                () => {

                    removePreview();

                }
            );



            /* CLIQUE */

            button.addEventListener(
                "click",
                (event) => {

                    event.stopPropagation();

                    openHotspot(
                        button,
                        hotspot
                    );

                }
            );


            hotspotsLayer.appendChild(
                button
            );

        }
    );

}



/* =====================================================
   PREVIEW NO HOVER
   ===================================================== */

function showHotspotPreview(
    button,
    hotspot
) {

    removePreview();


    const preview =
        document.createElement(
            "div"
        );


    preview.className =
        "hotspot-preview";


    const title =
        document.createElement(
            "strong"
        );


    title.textContent =
        hotspot.title;


    const text =
        document.createElement(
            "span"
        );


    text.textContent =
        hotspot.text;


    preview.appendChild(
        title
    );

    preview.appendChild(
        text
    );



    /*
       tenta abrir ao lado
    */

    let left =
        button.offsetLeft +
        button.offsetWidth +
        8;


    let top =
        button.offsetTop;



    /*
       se não couber à direita,
       abre à esquerda
    */

    const estimatedWidth = 240;


    if (
        left + estimatedWidth >
        hotspotsLayer.clientWidth
    ) {

        left =
            button.offsetLeft -
            estimatedWidth -
            8;

    }



    /*
       evita sair pela esquerda
    */

    if (left < 5) {

        left = 5;

    }



    preview.style.left =
        `${left}px`;

    preview.style.top =
        `${top}px`;


    hotspotsLayer.appendChild(
        preview
    );

}



/* =====================================================
   JANELA AO CLICAR
   ===================================================== */

function openHotspot(
    button,
    hotspot
) {

    removePreview();

    removeHotspotModal();


    const note =
        document.createElement(
            "div"
        );


    note.className =
        "hotspot-note";


    const title =
        document.createElement(
            "strong"
        );


    title.textContent =
        hotspot.title;



    const text =
        document.createElement(
            "p"
        );


    text.textContent =
        hotspot.text;



    const close =
        document.createElement(
            "button"
        );


    close.type =
        "button";


    close.className =
        "hotspot-close";


    close.textContent =
        "Fechar";


    close.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();

            note.remove();

        }
    );



    note.appendChild(
        title
    );

    note.appendChild(
        text
    );

    note.appendChild(
        close
    );



    const stageWidth =
        hotspotsLayer.clientWidth;


    const stageHeight =
        hotspotsLayer.clientHeight;


    const noteWidth =
        Math.min(
            280,
            stageWidth * 0.45
        );


    note.style.width =
        `${noteWidth}px`;



    let left =
        button.offsetLeft +
        button.offsetWidth +
        10;


    let top =
        button.offsetTop;



    if (
        left + noteWidth >
        stageWidth - 10
    ) {

        left =
            button.offsetLeft -
            noteWidth -
            10;

    }



    if (left < 10) {

        left = 10;

    }



    if (
        top > stageHeight - 170
    ) {

        top =
            Math.max(
                10,
                stageHeight - 180
            );

    }



    note.style.left =
        `${left}px`;

    note.style.top =
        `${top}px`;


    hotspotsLayer.appendChild(
        note
    );

}



/* =====================================================
   REMOVE PREVIEW
   ===================================================== */

function removePreview() {

    hotspotsLayer
        .querySelectorAll(
            ".hotspot-preview"
        )
        .forEach(
            (element) => {

                element.remove();

            }
        );

}



/* =====================================================
   REMOVE JANELA
   ===================================================== */

function removeHotspotModal() {

    hotspotsLayer
        .querySelectorAll(
            ".hotspot-note"
        )
        .forEach(
            (element) => {

                element.remove();

            }
        );

}



/* =====================================================
   NAVEGAÇÃO
   ===================================================== */

function move(direction) {

    const items =
        DATA[currentSection];


    if (items.length <= 1) {

        return;

    }


    currentSlide =
        (
            currentSlide +
            direction +
            items.length
        ) %
        items.length;


    render();

}



prevBtn.addEventListener(
    "click",
    () => {

        move(-1);

    }
);



nextBtn.addEventListener(
    "click",
    () => {

        move(1);

    }
);



/* =====================================================
   TECLADO
   ===================================================== */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key ===
            "ArrowLeft"
        ) {

            move(-1);

        }


        if (
            event.key ===
            "ArrowRight"
        ) {

            move(1);

        }

    }
);



/* =====================================================
   DESLIZAR NO CELULAR
   ===================================================== */

let touchStartX =
    null;


slide.addEventListener(
    "touchstart",
    (event) => {

        touchStartX =
            event.touches[0]
                .clientX;

    },

    {
        passive: true
    }
);



slide.addEventListener(
    "touchend",
    (event) => {

        if (
            touchStartX === null
        ) {

            return;

        }


        const touchEndX =
            event.changedTouches[0]
                .clientX;


        const difference =
            touchEndX -
            touchStartX;


        if (
            Math.abs(difference) >
            50
        ) {

            if (
                difference > 0
            ) {

                move(-1);

            } else {

                move(1);

            }

        }


        touchStartX =
            null;

    }
);



/* =====================================================
   FECHA EXPLICAÇÕES AO CLICAR FORA
   ===================================================== */

document.addEventListener(
    "click",
    (event) => {

        if (
            !event.target.closest(
                ".hotspot"
            ) &&
            !event.target.closest(
                ".hotspot-note"
            )
        ) {

            removeHotspotModal();

            removePreview();

        }

    }
);



/* =====================================================
   INICIALIZAÇÃO
   ===================================================== */

createMenu();

render();
