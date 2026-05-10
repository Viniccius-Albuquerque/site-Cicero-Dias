// CONTEÚDO APENAS COM LOREM IPSUM (GRANDE QUANTIDADE PARA SCROLL)
const topicsData = {

    historiaEscada: {
        title: "Origem do Município",
        content: `
            <h1 class="page-title">Origem do Município</h1>

            <section id="preColonial">
                <h2>Período Pré-Colonial (1500)</h2>
                <p>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Himenaeos cubilia duis consequat rhoncus vel consectetur facilisis cras.
                </p>
            </section>

            <section id="colonizacao">
                <h2>Início da Colonização (Século XVI)</h2>
                <p>
                    Nunc augue donec dictumst varius quisque consectetur elit fames. Metus condimentum orci habitant integer torquent erat convallis suspendisse.
                </p>
            </section>

            <section id="marcoLegal">
                <h2>Marco Legal de Escada</h2>
                <p>
                    Dui gravida leo fames maximus cubilia vestibulum vulputate. Scelerisque mi vivamus faucibus suspendisse adipiscing ex sodales ornare.
                </p>
            </section>

            <section id="evolucao">
                <h2>Evolução Administrativa e Marco Legal</h2>
                <p>
                    Ut ante consectetur integer cras odio, habitant amet vulputate. Efficitur himenaeos praesent sed tempor quis fringilla nascetur.
                </p>
            </section>

            <section id="heranca">
                <h2>Herança Indígena</h2>
                <p>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Himenaeos cubilia duis consequat rhoncus vel consectetur facilisis cras.
                </p>
            </section>

            <section id="consolidacao">
                <h2>Consolidação Institucional e Urbana</h2>
                <p>
                    Nunc augue donec dictumst varius quisque consectetur elit fames. Metus condimentum orci habitant integer torquent erat convallis suspendisse.
                </p>
            </section>
        `
    },

    ciceroDias: {
        title: "Cícero Dias",
        content: `
            <h1 class="page-title">Cícero Dias</h1>

            <section id="inicioVida">
                <h2>Início de Vida e Formação</h2>
                <p>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Himenaeos cubilia duis consequat rhoncus vel consectetur facilisis cras.
                </p>
            </section>

            <section id="modernismo">
                <h2>Primeira Fase e Modernismo</h2>
                <p>
                    Nunc augue donec dictumst varius quisque consectetur elit fames. Metus condimentum orci habitant integer torquent erat convallis suspendisse.
                </p>
            </section>

            <section id="internacional">
                <h2>Carreira Internacional</h2>
                <p>
                    Dui gravida leo fames maximus cubilia vestibulum vulputate. Scelerisque mi vivamus faucibus suspendisse adipiscing ex sodales ornare.
                </p>
            </section>

            <section id="murais">
                <h2>Abstracionismo e Murais</h2>
                <p>
                    Ut ante consectetur integer cras odio, habitant amet vulputate. Efficitur himenaeos praesent sed tempor quis fringilla nascetur.
                </p>
            </section>

            <section id="legado">
                <h2>Reconhecimento e Legado</h2>
                <p>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Himenaeos cubilia duis consequat rhoncus vel consectetur facilisis cras.
                </p>
            </section>
        `
    },

    baronatos: {
        title: "Baronatos",
        content: `
            <h1 class="page-title">Baronatos</h1>

            <section>
                <h2>Baronatos</h2>
                <p>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Himenaeos cubilia duis consequat rhoncus vel consectetur facilisis cras.
                </p>

                <p>
                    Nunc augue donec dictumst varius quisque consectetur elit fames. Metus condimentum orci habitant integer torquent erat convallis suspendisse.
                </p>

                <p>
                    Dui gravida leo fames maximus cubilia vestibulum vulputate. Scelerisque mi vivamus faucibus suspendisse adipiscing ex sodales ornare.
                </p>
            </section>
        `
    },

    sobreMuseu: {
        title: "O Museu",
        content: `
            <h1 class="page-title">O Museu</h1>

            <section id="diretrizes">
                <h2>Diretrizes de Visitação</h2>
                <p>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Himenaeos cubilia duis consequat rhoncus vel consectetur facilisis cras.
                </p>
            </section>

            <section id="acessibilidade">
                <h2>Acessibilidade</h2>
                <p>
                    Nunc augue donec dictumst varius quisque consectetur elit fames. Metus condimentum orci habitant integer torquent erat convallis suspendisse.
                </p>
            </section>

            <section id="horario">
                <h2>Horário de Funcionamento</h2>
                <p>
                    Dui gravida leo fames maximus cubilia vestibulum vulputate. Scelerisque mi vivamus faucibus suspendisse adipiscing ex sodales ornare.
                </p>
            </section>

            <section id="festividades">
                <h2>Festividades</h2>
                <p>
                    Ut ante consectetur integer cras odio, habitant amet vulputate. Efficitur himenaeos praesent sed tempor quis fringilla nascetur.
                </p>
            </section>
        `
    },

    contato: {
        title: "Contato",
        content: `
            <h1 class="page-title">Contato</h1>

            <section>
                <h2>Informações de Contato</h2>

                <p>
                    Endereço: Lorem ipsum dolor sit amet.
                </p>

                <p>
                    Telefone: (00) 0000-0000
                </p>

                <p>
                    E-mail: contato@museu.com
                </p>
            </section>
        `
    }

};

// CARREGAR TÓPICO
function loadTopic(topicId) {
    if (!topicsData[topicId]) return;
    
    const topic = topicsData[topicId];
    document.getElementById('contentBody').innerHTML = topic.content;
    
    // Voltar ao topo ao trocar de página
    document.getElementById('mainContent').scrollTop = 0;
}

// MARCAR BOTÃO ATIVO
function setActiveNavItem(selectedButton) {
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.classList.remove('active');
    });
    selectedButton.classList.add('active');
}

// ABRIR E FECHAR SUBTÓPICOS
document.querySelectorAll('.nav-item').forEach(button => {

    button.addEventListener('click', () => {

        const topicAttr = button.getAttribute('data-topic');

        loadTopic(topicAttr);

        setActiveNavItem(button);

        // fecha todos
        document.querySelectorAll('.subtopics').forEach(sub => {
            sub.classList.remove('open');
        });

        // abre apenas o atual
        const subtopics = button.parentElement.querySelector('.subtopics');

        if (subtopics) {
            subtopics.classList.add('open');
        }
    });
});

// CLIQUE NOS SUBTÓPICOS
document.addEventListener('click', (e) => {

    if (e.target.classList.contains('subtopic-item')) {

        const targetId = e.target.getAttribute('data-target');

        const element = document.getElementById(targetId);

        if (element) {

            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// INICIAR COM "SOBRE O MUSEU"
loadTopic('sobreMuseu');

let tempoInatividade;

// tempo em milissegundos (1 minuto = 60000)
const TEMPO_LIMITE = 60000;

function resetarTimer() {
    clearTimeout(tempoInatividade);

    tempoInatividade = setTimeout(() => {
        voltarParaDescanso();
    }, TEMPO_LIMITE);
}

function voltarParaDescanso() {
    window.location.href = "/index.html";
}

// eventos que contam como atividade
['click', 'touchstart', 'mousemove', 'scroll'].forEach(evento => {
    document.addEventListener(evento, resetarTimer);
});

// inicia o timer quando entra na página
resetarTimer();

