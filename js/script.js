// =============================================
// MENU MOBILE
// =============================================

const menuMobile = document.querySelector('.menu-mobile');
menuMobile.addEventListener('click', () => {
    toggleMenu();
});

function toggleMenu() {
    const nav = document.querySelector('.nav-responsive');
    menuMobile.classList.toggle('change');

    if (menuMobile.classList.contains('change')) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}

// =============================================
// /MENU MOBILE
// =============================================


// =============================================
// BILINGUAL CONTENT — EN / PT-BR
// =============================================
const translations = {
    en: {
        'nav-home':             'Home',
        'nav-education':        'Education',
        'nav-experience':       'Experience',
        'nav-services':         'Services',
        'nav-portfolio':        'Portfolio',

        'gallery-title':        'Design Gallery',
        'gallery-subtitle':     'Selected pieces from my work in UX/UI and visual identity.',

        'piece1-tag':           '01 — Landing Page',
        'piece1-name':          'Classic Car Restorer',
        'piece1-desc':          'A landing page for an automotive brand focused on restoring classic cars. I went with black and red to keep it bold and mechanical, paired with a heavy, condensed typeface that gives the layout some weight. The abandoned car in the showcase section ties it all together — restoring is also a way of caring.',
        'piece-meta-type':      'Type',
        'piece-meta-tool':      'Tool',
        'piece-meta-focus':     'Focus',
        'piece1-type':          'Web Design Landing Page',
        'piece1-tool':          'Figma',
        'piece1-focus':         'UI Design · Visual Identity',
        'piece1-status':        'Personal project — still in development',
        'piece-link-instagram': 'See more on Instagram',

        'piece2-tag':           '02 — Social Media',
        'piece2-name':          'Identidade Visual para Redes Sociais',
        'piece2-desc':          'Social media content built around keeping the brand\'s visual identity consistent across posts. I worked through composition, type hierarchy, and color palette to create pieces that are instantly recognizable.',
        'piece2-type':          'Social Media',
        'piece2-tool':          'Canva',
        'piece2-focus':         'Visual Identity · Social Media',
        'piece3-tag':           '03 — Catalog',
        'piece3-name':          'Globe Catalog 2026',
        'piece3-desc':          'Product catalog for Libreria Editora, covering its line of globes. It has 13 pages: a cover, a table of contents, and a dedicated page for each globe model, all built on the same grid so the products are easy to compare. A navy blue and white palette keeps the whole catalog clean and consistent. Created as part of my work in the company\'s marketing team.',
        'piece3-type':          'Product Catalog',
        'piece3-tool':          'Canva',
        'piece3-focus':         'Editorial Design · Layout',
        'piece3-status':        'Professional project — Libreria Editora',
        'piece4-tag':           '04 — Social Media Post',
        'piece4-name':          'Sell Without Stock',
        'piece4-desc':          'A social media post for Libreria Editora promoting its sell-without-stock model: the company stores, packs, and ships the products, so the reseller only has to focus on selling. The layout pairs a bold gold headline with a clear three-point checklist on the company\'s navy blue, and combines a globe with a phone mockup of the company profile to tie the message to the product.',
        'piece4-type':          'Social Media Post',
        'piece4-tool':          'Canva',
        'piece4-focus':         'Visual Identity · Product Promotion',

        'footer-services':      'Services',
        'footer-about':         'About Me',
        'footer-experience':    'Experience',
        'footer-projects':      'Projects',
        'footer-copy':          'Copyright \u00A9 2026 by </Gustavo Strada Silva>. All Right Reserved.',
        'tooltip-cv':           'Download CV',
    },

    pt: {
        'nav-home':             'Início',
        'nav-education':        'Educação',
        'nav-experience':       'Experiência',
        'nav-services':         'Serviços',
        'nav-portfolio':        'Portfólio',

        'gallery-title':        'Galeria de Design',
        'gallery-subtitle':     'Peças selecionadas do meu trabalho em UX/UI e identidade visual.',

        'piece1-tag':           '01 — Landing Page',
        'piece1-name':          'Restauradora de Clássicos',
        'piece1-desc':          'Landing page para uma marca automotiva especializada em restauração de carros clássicos. Usei preto e vermelho pra passar robustez e tradição mecânica, com uma tipografia condensada e pesada que dá peso ao layout. O carro abandonado na seção de showcase fecha a ideia: cuidar também é restaurar.',
        'piece-meta-type':      'Tipo',
        'piece-meta-tool':      'Ferramenta',
        'piece-meta-focus':     'Foco',
        'piece1-type':          'Web Design Landing Page',
        'piece1-tool':          'Figma',
        'piece1-focus':         'UI Design · Identidade Visual',
        'piece1-status':        'Projeto próprio — ainda em desenvolvimento',
        'piece-link-instagram': 'Ver mais no Instagram',

        'piece2-tag':           '02 — Social Media',
        'piece2-name':          'Identidade Visual para Redes Sociais',
        'piece2-desc':          'Conteúdo para redes sociais com foco em manter a identidade visual da marca consistente em cada post. Trabalhei composição, hierarquia tipográfica e paleta de cores pra criar peças que ficam reconhecíveis de cara.',
        'piece2-type':          'Social Media',
        'piece2-tool':          'Canva',
        'piece2-focus':         'Identidade Visual · Mídias Sociais',
        'piece3-tag':           '03 — Catálogo',
        'piece3-name':          'Catálogo de Globos 2026',
        'piece3-desc':          'Catálogo de produtos da Libreria Editora, apresentando sua linha de globos. São 13 páginas: capa, sumário e uma página dedicada a cada modelo de globo, todas na mesma grade para facilitar a comparação entre os produtos. A paleta azul-marinho e branco mantém o catálogo limpo e consistente. Criado como parte do meu trabalho no time de marketing da empresa.',
        'piece3-type':          'Catálogo de Produtos',
        'piece3-tool':          'Canva',
        'piece3-focus':         'Design Editorial · Diagramação',
        'piece3-status':        'Projeto profissional — Libreria Editora',
        'piece4-tag':           '04 — Post para Redes Sociais',
        'piece4-name':          'Venda Sem Estoque',
        'piece4-desc':          'Post para redes sociais da Libreria Editora divulgando o modelo de venda sem estoque: a empresa armazena, embala e envia os produtos, e o revendedor só precisa focar em vender. O layout combina um título dourado em destaque e uma lista de três pontos sobre o azul-marinho da marca, com um globo e um mockup de celular do perfil da empresa para ligar a mensagem ao produto.',
        'piece4-type':          'Post para Redes Sociais',
        'piece4-tool':          'Canva',
        'piece4-focus':         'Identidade Visual · Divulgação de Produto',

        'footer-services':      'Serviços',
        'footer-about':         'Sobre Mim',
        'footer-experience':    'Experiência',
        'footer-projects':      'Projetos',
        'footer-copy':          'Copyright \u00A9 2026 por </Gustavo Strada Silva>. Todos os Direitos Reservados.',
        'tooltip-cv':           'Baixar CV',
    }
};

function setLang(lang) {
    const t = translations[lang];
    if (!t) return;

    // Active button state
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.lang-btn[onclick="setLang('${lang}')"]`).classList.add('active');

    // Translate text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) {
            el.textContent = t[key];
        }
    });

    // Translate tooltips
    document.querySelectorAll('[data-i18n-tooltip]').forEach(el => {
        const key = el.getAttribute('data-i18n-tooltip');
        if (t[key] !== undefined) el.setAttribute('data-tooltip', t[key]);
    });

    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    localStorage.setItem('lang', lang);
}

// Apply saved language preference on load
(function () {
    const saved = localStorage.getItem('lang') || 'en';
    if (saved !== 'en') setLang(saved);
})();

// =============================================
// /BILINGUAL CONTENT
// =============================================


// =============================================
// SCROLL REVEAL
// =============================================
(function () {
    const revealMap = {
        '.g-intro':    'reveal',
        '.piece':      'reveal',
    };

    Object.entries(revealMap).forEach(([selector, cls]) => {
        document.querySelectorAll(selector).forEach((el, i) => {
            el.classList.add(cls);
            el.style.transitionDelay = (i * 0.1) + 's';
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
        observer.observe(el);
    });
})();
// =============================================
// /SCROLL REVEAL
// =============================================


// =============================================
// CAROUSEL (Social Media piece)
// =============================================
(function () {
    document.querySelectorAll('.piece-carousel').forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');
        const slides = carousel.querySelectorAll('.carousel-slide');
        const dots = carousel.querySelectorAll('.carousel-dot');
        const prevBtn = carousel.querySelector('.carousel-prev');
        const nextBtn = carousel.querySelector('.carousel-next');
        let index = 0;

        function goTo(i) {
            index = (i + slides.length) % slides.length;
            track.style.transform = `translateX(-${index * 100}%)`;
            dots.forEach((dot, di) => dot.classList.toggle('active', di === index));
        }

        if (prevBtn) prevBtn.addEventListener('click', () => goTo(index - 1));
        if (nextBtn) nextBtn.addEventListener('click', () => goTo(index + 1));
        dots.forEach((dot, di) => dot.addEventListener('click', () => goTo(di)));

        goTo(0);
    });
})();
// =============================================
// /CAROUSEL
// =============================================