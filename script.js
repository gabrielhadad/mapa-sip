const DATA = {
  "Painel de atividades": [
    {image:"assets/painel-atividades.png",tag:"Visão geral",title:"Painel de atividades",text:"Reúne agenda, prazos e tarefas em uma única tela.",actions:[["Agenda/Calendário","Consulta compromissos por dia, semana ou mês."],["Prazos","Exibe prazos vinculados aos processos."],["Tarefas","Exibe tarefas e demandas vinculadas ao usuário."],["Setores e usuários","Define de quem as informações serão exibidas."]]},
    {image:"assets/painel-prazos-menu.png",tag:"Prazos",title:"Ações do prazo",text:"Clique com o botão direito sobre um prazo para acessar as ações rápidas.",actions:[["Altera processo","Abre o processo relacionado para alteração."],["Copia nº do processo","Copia o número do processo."],["Repassa","Permite repassar o prazo."],["Conclui","Marca o prazo como concluído."],["Atualiza informações","Atualiza os dados da tela (F5)."]]},
    {image:"assets/painel-tarefas-menu.png",tag:"Tarefas",title:"Ações da tarefa",text:"O menu de contexto concentra as principais ações sobre a tarefa.",actions:[["Inclui tarefa","Abre o cadastro de nova tarefa."],["Altera processo","Abre o processo relacionado para alteração."],["Conclui/Encerra","Finaliza a tarefa."],["Histórico","Consulta o histórico da tarefa."],["Copia dados","Copia os dados da tarefa selecionada."],["Atualiza informações","Atualiza os dados da tela (F5)."]]}
  ],
  "Agenda do escritório": [
    {image:"assets/agenda-atividades.png",tag:"Consulta",title:"Agenda de atividades",text:"Consulta atividades por período e filtros específicos.",actions:[["Calendário","Seleciona rapidamente o dia da consulta."],["Filtros","Tipo, cidade, responsável, órgão, execução, cadastro e processo."],["Procura","Executa a pesquisa conforme os critérios informados."],["Resultado","Mostra atividades e detalhes do item selecionado."]]}
  ],
  "Atendimento": [
    {image:"assets/atendimentos-pendentes.png",tag:"Pendências",title:"Atendimentos pendentes",text:"Consulta atendimentos pendentes dentro do período informado.",actions:[["Período","Define a data inicial e final da pesquisa."],["Procura","Busca os atendimentos."],["Atualiza","Atualiza a listagem exibida."]]}
  ],
  "Clientes": [
    {image:"assets/clientes.png",tag:"Pesquisa",title:"Consulta de clientes",text:"Localiza clientes por dados cadastrais e permite acessar informações relacionadas.",actions:[["Procura","Executa a pesquisa com os filtros informados."],["Consulta","Abre o cadastro somente para visualização."],["Altera","Abre o cadastro permitindo alterações."],["Processos","Acessa os processos vinculados ao cliente."],["Tarefa","Acessa ou inclui tarefas relacionadas."]]},
    {image:"assets/cadastro-cliente.png",tag:"Cadastro",title:"Dados do cliente",text:"Tela com os dados cadastrais e acessos complementares do cliente.",actions:[["Consulta","Permite apenas visualizar as informações."],["Alterar","Libera os campos permitidos para edição."],["Detalhes / Observações","Acessos complementares do cadastro."],["Atend./Tarefas","Acessa atendimentos e tarefas vinculados."],["Financeiro / Bancos","Acessa informações financeiras quando disponíveis."]]}
  ],
  "Consulta pendências": [
    {image:"assets/pendencias.png",tag:"Pendências",title:"Central de pendências",text:"Reúne prazos, retornos, demandas internas, documentos e pastas pendentes.",actions:[["Abas","Separa os tipos de pendência."],["Altera","Abre o item para alteração."],["Repassa","Repassa a pendência."],["Conclui","Finaliza a pendência."],["Processo","Abre o processo relacionado."]]}
  ],
  "Processos": [
    {image:"assets/processo-detalhes.png",tag:"Processo",title:"Tela do processo",text:"Concentra os dados do processo e suas áreas relacionadas.",actions:[["Processo","Dados principais, partes, responsáveis, ação, justiça e objetos."],["Atividades/Agenda","Atividades relacionadas ao processo."],["Histórico/Andamento","Histórico e movimentações."],["Prazos / Tarefas","Itens vinculados ao processo."],["Documento / Recurso / Arquivo","Áreas complementares do processo."],["Libera campos","Quando permitido, libera campos para alteração."]]}
  ],
  "Prazos": [
    {image:"assets/prazos.png",tag:"Pesquisa",title:"Consulta de prazos",text:"Pesquisa e gerencia prazos utilizando filtros específicos.",actions:[["Filtros","Tipo, situação, responsável, processo, descrição, origem e datas."],["Procura","Executa a pesquisa."],["Altera","Abre o prazo selecionado para alteração."],["Conclui","Conclui o prazo quando disponível."],["Processo","Abre o processo relacionado."]]}
  ],
  "Tarefas": [
    {image:"assets/tarefas.png",tag:"Pesquisa",title:"Tarefas e demandas",text:"Consulta retornos, demandas internas e solicitações de documentos.",actions:[["Filtros","Refina a pesquisa por tipo, categoria, responsável, processo e outros campos."],["Inclui","Abre o cadastro de uma nova tarefa/retorno."],["Altera","Abre o registro para edição."],["Encerra","Finaliza o item selecionado."],["Abre","Abre o item relacionado."]]},
    {image:"assets/cadastro-retorno.png",tag:"Cadastro",title:"Cadastro de retorno/tarefa",text:"Cadastro e edição de tarefas, retornos e demandas vinculadas ao processo.",actions:[["Tipo / Classificação","Define a natureza do registro."],["Nome / Título / Descrição","Identifica a tarefa ou demanda."],["Responsável / Prazo","Define quem executará e a data limite."],["Subtarefas","Permite vincular itens menores à tarefa principal."],["Docs. / Checklist / Tag","Complementam o registro."]]}
  ],
  "Registros home office": [
    {image:"assets/home-office.png",tag:"Consulta",title:"Registro de atividades home office",text:"Consulta registros de atividades por período, responsável e tipo.",actions:[["Período","Define a faixa de datas."],["Responsável","Filtra por usuário."],["Tipo","Filtra o tipo de atividade."],["Somente não concluídos","Exibe apenas itens ainda pendentes."],["Procura","Executa a pesquisa."]]}
  ]
};

const menu=document.getElementById('menu'), titleEl=document.getElementById('screenTitle'), descEl=document.getElementById('screenDescription'), imgEl=document.getElementById('screenImage'), tagEl=document.getElementById('infoTag'), infoTitle=document.getElementById('infoTitle'), infoText=document.getElementById('infoText'), actions=document.getElementById('actionList'), dots=document.getElementById('dots'), currentIndex=document.getElementById('currentIndex'), totalItems=document.getElementById('totalItems'), prevBtn=document.getElementById('prevBtn'), nextBtn=document.getElementById('nextBtn'), slide=document.getElementById('slide');
let section=Object.keys(DATA)[0], index=0;
function buildMenu(){Object.keys(DATA).forEach(name=>{const b=document.createElement('button');b.className='nav-item';b.textContent=name;b.addEventListener('click',()=>{section=name;index=0;render()});menu.appendChild(b)})}
function render(){[...menu.children].forEach(b=>b.classList.toggle('active',b.textContent===section));const items=DATA[section],item=items[index];titleEl.textContent=section;descEl.textContent=items.length>1?'Use as setas para navegar pelos detalhes desta tela.':'Resumo da tela e das principais ações.';imgEl.src=item.image;imgEl.alt=item.title;tagEl.textContent=item.tag;infoTitle.textContent=item.title;infoText.textContent=item.text;actions.innerHTML='';item.actions.forEach(([name,text])=>{const el=document.createElement('div');el.className='action';el.innerHTML=`<strong>${name}</strong><span>${text}</span>`;actions.appendChild(el)});currentIndex.textContent=index+1;totalItems.textContent=items.length;dots.innerHTML='';items.forEach((_,i)=>{const d=document.createElement('button');d.className='dot'+(i===index?' active':'');d.setAttribute('aria-label',`Ir para item ${i+1}`);d.addEventListener('click',()=>{index=i;render()});dots.appendChild(d)});prevBtn.style.visibility=items.length>1?'visible':'hidden';nextBtn.style.visibility=items.length>1?'visible':'hidden'}
function move(delta){const items=DATA[section];index=(index+delta+items.length)%items.length;render()}
prevBtn.addEventListener('click',()=>move(-1));nextBtn.addEventListener('click',()=>move(1));
let startX=null;slide.addEventListener('touchstart',e=>startX=e.touches[0].clientX,{passive:true});slide.addEventListener('touchend',e=>{if(startX===null)return;const diff=e.changedTouches[0].clientX-startX;if(Math.abs(diff)>45)move(diff>0?-1:1);startX=null});
document.addEventListener('keydown',e=>{if(e.key==='ArrowLeft')move(-1);if(e.key==='ArrowRight')move(1)});
buildMenu();render();
