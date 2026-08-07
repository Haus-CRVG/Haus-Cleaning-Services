/* ==========================================================
   HAUS CLEANING
   Main JavaScript
   PART 1/4
========================================================== */


/* ==========================================================
   CONFIGURATION
========================================================== */

const WHATSAPP_NUMBER = "17747079964";

const FORMSPREE_URL = "https://formspree.io/f/xljrdygg";

let currentLang = "en";


/* ==========================================================
   TRANSLATIONS
========================================================== */

const translations = {

    /* ======================================================
       ENGLISH
    ====================================================== */

    en: {

        "nav.about": "About",
        "nav.services": "Services",
        "nav.gallery": "Gallery",
        "nav.contact": "Contact",

        "hero.title": "Your <em>Home</em>, Our Care",

        "hero.sub":
            "Detail-focused residential & office cleaning for Worcester families and businesses who want their space to feel truly cared for.",

        "hero.loc":
            "Worcester & Surrounding Areas",

        "hero.whatsapp":
            "WhatsApp Us",

        "hero.email":
            "Email Us",


        /* ABOUT */

        "about.eyebrow":
            "Who We Are",

        "about.title":
            "Cleaning that feels like coming home",

        "about.p1":
            "Haus Cleaning was built on one idea: a clean home should feel like relief, not another chore. We treat every house and office like it's our own — careful with your belongings, thorough in the corners people usually skip.",

        "about.p2":
            "Based in Worcester, MA, we work with families, landlords, and small businesses across the surrounding area, on a schedule that fits real life.",

        "about.stat1":
            "Satisfaction Focused",

        "about.stat2":
            "Worcester Based",

        "about.stat3":
            "Core Services",


        /* SERVICES */

        "services.eyebrow":
            "What We Offer",

        "services.title":
            "Services built around your space",

        "services.sub":
            "Pick what you need — we'll take care of the rest.",


        "svc1.title":
            "House Cleaning",

        "svc1.p":
            "Regular or one-time cleaning that keeps every room fresh, dusted, and lived-in — the good way.",


        "svc2.title":
            "Deep Cleaning",

        "svc2.p":
            "A top-to-bottom reset — baseboards, appliances, fixtures, grout — everything a regular clean skips.",


        "svc3.title":
            "Move In / Move Out",

        "svc3.p":
            "A spotless start or a clean handoff — perfect for tenants, landlords, and new homeowners.",


        "svc4.title":
            "Office Cleaning",

        "svc4.p":
            "Reliable, after-hours cleaning that keeps your workplace sharp for clients and staff alike.",


        /* GALLERY */

        "gallery.eyebrow":
            "Real Results",

        "gallery.title":
            "Before &amp; After",

        "gallery.sub":
            "Drag the slider to see the difference for yourself.",

        "tag.before":
            "Before",

        "tag.after":
            "After",


        /* CONTACT */

        "contact.eyebrow":
            "Get In Touch",

        "contact.title":
            "Let's clean something today",

        "contact.sub":
            "Send a message on WhatsApp, email us, or find us on Instagram — we usually reply the same day.",

        "contact.area":
            "Worcester & Surrounding Areas",


        "contact.card.title":
            "Ready for a free quote?",

        "contact.card.sub":
            "Tell us a bit about your space and we'll get back to you with pricing.",

        "contact.card.wa":
            "Message on WhatsApp",

        "contact.card.em":
            "Send an Email",


        /* FOOTER */

        "footer.text":
            "&copy; 2026 Haus Cleaning · Worcester, MA",


        /* WHATSAPP */

        "wa.msg":
            "Hi! I'd like to get a quote for cleaning.",


        /* EMAIL FORM */

        "form.eyebrow":
            "Contact Us",

        "form.title":
            "Send us a message",

        "form.name":
            "Full Name",

        "form.email":
            "Email Address",

        "form.phone":
            "Phone Number",

        "form.subject":
            "Subject",

        "form.subjectPlaceholder":
            "Select a subject",

        "form.subject.house":
            "House Cleaning",

        "form.subject.deep":
            "Deep Cleaning",

        "form.subject.move":
            "Move In / Move Out",

        "form.subject.office":
            "Office Cleaning",

        "form.subject.quote":
            "Free Quote",

        "form.subject.other":
            "Other",

        "form.message":
            "Message",

        "form.image":
            "Attach a photo (optional)",

        "form.chooseFile":
            "Choose an image",

        "form.imageHelp":
            "JPG, PNG, WEBP or GIF. Maximum 10 MB.",

        "form.submit":
            "Send Message",

        "form.sending":
            "Sending...",

        "form.success.title":
            "Message sent!",

        "form.success.text":
            "Thank you! We received your message and will get back to you as soon as possible.",

        "form.error.title":
            "Something went wrong",

        "form.error.text":
            "We couldn't send your message. Please try again or contact us through WhatsApp."
    },


    /* ======================================================
       PORTUGUESE
    ====================================================== */

    pt: {

        "nav.about":
            "Sobre",

        "nav.services":
            "Serviços",

        "nav.gallery":
            "Galeria",

        "nav.contact":
            "Contato",


        "hero.title":
            "Sua <em>Casa</em>, Nosso Cuidado",

        "hero.sub":
            "Limpeza residencial e comercial com atenção aos detalhes, para famílias e empresas de Worcester que querem sentir o espaço realmente cuidado.",

        "hero.loc":
            "Worcester e Região",

        "hero.whatsapp":
            "Fale no WhatsApp",

        "hero.email":
            "Enviar E-mail",


        /* ABOUT */

        "about.eyebrow":
            "Quem Somos",

        "about.title":
            "Uma limpeza que parece chegar em casa",

        "about.p1":
            "A Haus Cleaning nasceu de uma ideia simples: uma casa limpa deveria trazer alívio, não mais uma tarefa. Cuidamos de cada casa e escritório como se fosse nosso — com atenção aos seus pertences e cuidado nos cantos que costumam ser esquecidos.",

        "about.p2":
            "Baseados em Worcester, MA, atendemos famílias, proprietários e pequenos negócios em toda a região, com horários que se encaixam na sua rotina.",

        "about.stat1":
            "Foco na Satisfação",

        "about.stat2":
            "Sediados em Worcester",

        "about.stat3":
            "Serviços Principais",


        /* SERVICES */

        "services.eyebrow":
            "O Que Oferecemos",

        "services.title":
            "Serviços feitos para o seu espaço",

        "services.sub":
            "Escolha o que precisa — nós cuidamos do resto.",


        "svc1.title":
            "Limpeza Residencial",

        "svc1.p":
            "Limpeza recorrente ou avulsa que mantém cada cômodo fresco, sem poeira e com cara de lar cuidado.",


        "svc2.title":
            "Limpeza Profunda",

        "svc2.p":
            "Uma renovação completa — rodapés, eletrodomésticos, luminárias, rejuntes — tudo que a limpeza comum não alcança.",


        "svc3.title":
            "Mudança (Entrada/Saída)",

        "svc3.p":
            "Um começo impecável ou uma entrega bem cuidada — ideal para inquilinos, proprietários e novos moradores.",


        "svc4.title":
            "Limpeza de Escritório",

        "svc4.p":
            "Limpeza confiável, fora do horário comercial, para manter o ambiente impecável para clientes e equipe.",


        /* GALLERY */

        "gallery.eyebrow":
            "Resultados Reais",

        "gallery.title":
            "Antes e Depois",

        "gallery.sub":
            "Arraste o controle para ver a diferença.",

        "tag.before":
            "Antes",

        "tag.after":
            "Depois",


        /* CONTACT */

        "contact.eyebrow":
            "Fale Conosco",

        "contact.title":
            "Vamos limpar algo hoje",

        "contact.sub":
            "Mande uma mensagem no WhatsApp, envie um e-mail ou nos encontre no Instagram — costumamos responder no mesmo dia.",

        "contact.area":
            "Worcester e Região",


        "contact.card.title":
            "Pronto para um orçamento gratuito?",

        "contact.card.sub":
            "Conte um pouco sobre seu espaço e retornaremos com os valores.",

        "contact.card.wa":
            "Chamar no WhatsApp",

        "contact.card.em":
            "Enviar E-mail",


        /* FOOTER */

        "footer.text":
            "&copy; 2026 Haus Cleaning · Worcester, MA",


        /* WHATSAPP */

        "wa.msg":
            "Olá! Gostaria de um orçamento de limpeza.",


        /* EMAIL FORM */

        "form.eyebrow":
            "Entre em Contato",

        "form.title":
            "Envie uma mensagem",

        "form.name":
            "Nome Completo",

        "form.email":
            "Endereço de E-mail",

        "form.phone":
            "Telefone",

        "form.subject":
            "Assunto",

        "form.subjectPlaceholder":
            "Selecione um assunto",

        "form.subject.house":
            "Limpeza Residencial",

        "form.subject.deep":
            "Limpeza Profunda",

        "form.subject.move":
            "Mudança (Entrada/Saída)",

        "form.subject.office":
            "Limpeza de Escritório",

        "form.subject.quote":
            "Orçamento Gratuito",

        "form.subject.other":
            "Outro",

        "form.message":
            "Mensagem",

        "form.image":
            "Anexar uma foto (opcional)",

        "form.chooseFile":
            "Escolher uma imagem",

        "form.imageHelp":
            "JPG, PNG, WEBP ou GIF. Máximo de 10 MB.",

        "form.submit":
            "Enviar Mensagem",

        "form.sending":
            "Enviando...",

        "form.success.title":
            "Mensagem enviada!",

        "form.success.text":
            "Obrigado! Recebemos sua mensagem e entraremos em contato o mais breve possível.",

        "form.error.title":
            "Algo deu errado",

        "form.error.text":
            "Não conseguimos enviar sua mensagem. Tente novamente ou entre em contato pelo WhatsApp."
    },


    /* ======================================================
       SPANISH
    ====================================================== */

    es: {

        "nav.about":
            "Nosotros",

        "nav.services":
            "Servicios",

        "nav.gallery":
            "Galería",

        "nav.contact":
            "Contacto",


        "hero.title":
            "Tu <em>Hogar</em>, Nuestro Cuidado",

        "hero.sub":
            "Limpieza residencial y de oficinas con atención al detalle, para familias y negocios de Worcester que quieren sentir su espacio realmente cuidado.",

        "hero.loc":
            "Worcester y Alrededores",

        "hero.whatsapp":
            "Escríbenos por WhatsApp",

        "hero.email":
            "Enviar Correo",


        /* ABOUT */

        "about.eyebrow":
            "Quiénes Somos",

        "about.title":
            "Una limpieza que se siente como llegar a casa",

        "about.p1":
            "Haus Cleaning nació de una idea simple: un hogar limpio debería sentirse como un alivio, no como otra tarea más. Tratamos cada casa y oficina como si fuera nuestra — cuidando tus pertenencias y siendo minuciosos en los rincones que casi siempre se pasan por alto.",

        "about.p2":
            "Con base en Worcester, MA, trabajamos con familias, propietarios y pequeños negocios en toda la zona, con horarios que se adaptan a tu día a día.",

        "about.stat1":
            "Enfocados en tu Satisfacción",

        "about.stat2":
            "Con Base en Worcester",

        "about.stat3":
            "Servicios Principales",


        /* SERVICES */

        "services.eyebrow":
            "Lo Que Ofrecemos",

        "services.title":
            "Servicios pensados para tu espacio",

        "services.sub":
            "Elige lo que necesitas — nosotros nos encargamos del resto.",


        "svc1.title":
            "Limpieza Residencial",

        "svc1.p":
            "Limpieza regular o única que mantiene cada habitación fresca, sin polvo y con sensación de hogar cuidado.",


        "svc2.title":
            "Limpieza Profunda",

        "svc2.p":
            "Una renovación completa — zócalos, electrodomésticos, luminarias, lechada — todo lo que una limpieza regular deja pasar.",


        "svc3.title":
            "Mudanza (Entrada/Salida)",

        "svc3.p":
            "Un comienzo impecable o una entrega bien cuidada — ideal para inquilinos, propietarios y nuevos residentes.",


        "svc4.title":
            "Limpieza de Oficinas",

        "svc4.p":
            "Limpieza confiable, fuera del horario laboral, que mantiene tu espacio impecable para clientes y empleados.",


        /* GALLERY */

        "gallery.eyebrow":
            "Resultados Reales",

        "gallery.title":
            "Antes y Después",

        "gallery.sub":
            "Arrastra el control para ver la diferencia.",

        "tag.before":
            "Antes",

        "tag.after":
            "Después",


        /* CONTACT */

        "contact.eyebrow":
            "Contáctanos",

        "contact.title":
            "Limpiemos algo hoy",

        "contact.sub":
            "Envíanos un mensaje por WhatsApp, un correo, o encuéntranos en Instagram — normalmente respondemos el mismo día.",

        "contact.area":
            "Worcester y Alrededores",


        "contact.card.title":
            "¿Listo para una cotización gratis?",

        "contact.card.sub":
            "Cuéntanos un poco sobre tu espacio y te responderemos con los precios.",

        "contact.card.wa":
            "Escribir por WhatsApp",

        "contact.card.em":
            "Enviar Correo",


        /* FOOTER */

        "footer.text":
            "&copy; 2026 Haus Cleaning · Worcester, MA",


        /* WHATSAPP */

        "wa.msg":
            "¡Hola! Me gustaría recibir una cotización de limpieza.",


        /* EMAIL FORM */

        "form.eyebrow":
            "Contáctanos",

        "form.title":
            "Envíanos un mensaje",

        "form.name":
            "Nombre Completo",

        "form.email":
            "Correo Electrónico",

        "form.phone":
            "Número de Teléfono",

        "form.subject":
            "Asunto",

        "form.subjectPlaceholder":
            "Selecciona un asunto",

        "form.subject.house":
            "Limpieza Residencial",

        "form.subject.deep":
            "Limpieza Profunda",

        "form.subject.move":
            "Mudanza (Entrada/Salida)",

        "form.subject.office":
            "Limpieza de Oficina",

        "form.subject.quote":
            "Cotización Gratuita",

        "form.subject.other":
            "Otro",

        "form.message":
            "Mensaje",

        "form.image":
            "Adjuntar una foto (opcional)",

        "form.chooseFile":
            "Elegir una imagen",

        "form.imageHelp":
            "JPG, PNG, WEBP o GIF. Máximo 10 MB.",

        "form.submit":
            "Enviar Mensaje",

        "form.sending":
            "Enviando...",

        "form.success.title":
            "¡Mensaje enviado!",

        "form.success.text":
            "¡Gracias! Recibimos tu mensaje y nos pondremos en contacto contigo lo antes posible.",

        "form.error.title":
            "Algo salió mal",

        "form.error.text":
            "No pudimos enviar tu mensaje. Inténtalo nuevamente o contáctanos por WhatsApp."
    }

};


/* ==========================================================
   APPLY LANGUAGE
========================================================== */

function applyLang(lang) {

    /*
        Verifica se o idioma existe.
        Caso contrário, usa inglês.
    */

    if (!translations[lang]) {
        lang = "en";
    }


    currentLang = lang;

    const dict = translations[lang];


    /* ======================================================
       NORMAL TRANSLATION ELEMENTS
    ====================================================== */

    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key = element.getAttribute("data-i18n");

            if (dict[key] !== undefined) {

                element.innerHTML = dict[key];

            }

        });


    /* ======================================================
       HTML LANGUAGE ATTRIBUTE
    ====================================================== */

    document.documentElement.lang = lang;


    /* ======================================================
       LANGUAGE BUTTONS
    ====================================================== */

    document
        .querySelectorAll("#langSwitch button")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.getAttribute("data-lang") === lang
            );

        });


    /* ======================================================
       UPDATE WHATSAPP LINKS
    ====================================================== */

    updateWhatsAppLinks(dict);


    /* ======================================================
       UPDATE FORM LANGUAGE HIDDEN FIELD
    ====================================================== */

    const languageField =
        document.querySelector(
            '#contactForm input[name="_language"]'
        );

    if (languageField) {

        languageField.value = lang;

    }


    /*
        Se a galeria já tiver sido carregada,
        atualizamos as legendas.
    */

    updateGalleryCaptions(lang);
}


/* ==========================================================
   WHATSAPP
========================================================== */

function updateWhatsAppLinks(dict) {

    const message =
        dict["wa.msg"] ||
        "Hi! I'd like to get a quote for cleaning.";


    const waLink =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;


    const whatsappIds = [
        "waHero",
        "waList",
        "waCard"
    ];


    whatsappIds.forEach(id => {

        const element =
            document.getElementById(id);

        if (!element) return;


        element.href = waLink;


        /*
            Mantemos o WhatsApp abrindo
            em uma nova aba.
        */

        element.target = "_blank";

        element.rel = "noopener noreferrer";

    });

}


/* ==========================================================
   GALLERY CAPTIONS
========================================================== */

function updateGalleryCaptions(lang) {

    document
        .querySelectorAll("figcaption[data-caption]")
        .forEach(element => {

            try {

                const caption =
                    JSON.parse(
                        element.getAttribute("data-caption")
                    );


                element.textContent =
                    caption[lang] ||
                    caption.en ||
                    "";

            } catch (error) {

                /*
                    Se houver uma legenda inválida,
                    simplesmente não interrompemos
                    o restante do site.
                */

                console.warn(
                    "Could not read gallery caption.",
                    error
                );

            }

        });

}


/* ==========================================================
   LANGUAGE SWITCH
========================================================== */

function initializeLanguageSwitch() {

    const languageSwitch =
        document.getElementById("langSwitch");


    if (!languageSwitch) return;


    languageSwitch.addEventListener(
        "click",
        event => {

            const button =
                event.target.closest(
                    "button[data-lang]"
                );


            if (!button) return;


            const language =
                button.getAttribute("data-lang");


            applyLang(language);

        }
    );

}

/* ==========================================================
   MOBILE MENU
========================================================== */

function initializeMobileMenu() {

    const menuToggle =
        document.getElementById("menuToggle");

    const navLinks =
        document.getElementById("navLinks");


    if (!menuToggle || !navLinks) return;


    /*
        Abre / fecha o menu mobile.
    */

    menuToggle.addEventListener(
        "click",
        event => {

            event.preventDefault();

            event.stopPropagation();

            navLinks.classList.toggle("open");

        }
    );


    /*
        Fecha o menu quando o usuário
        clica em algum link.
    */

    navLinks
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    navLinks.classList.remove("open");

                }
            );

        });

}


/* ==========================================================
   EMAIL MODAL
========================================================== */

function initializeEmailModal() {

    const modal =
        document.getElementById("emailModal");

    const closeButton =
        document.getElementById("emailModalClose");

    const overlay =
        document.getElementById("emailModalOverlay");


    /*
        Se o modal não existir,
        não interrompemos o restante do site.
    */

    if (!modal) return;


    /* ======================================================
       EMAIL BUTTONS
    ====================================================== */

    const emailButtons = [
        "emailListBtn",
        "emailCardBtn"
    ];


    /*
        Procura também qualquer botão/link
        que tenha a classe específica de e-mail,
        caso adicionemos outro futuramente.
    */

    const additionalEmailButtons =
        document.querySelectorAll(
            '[data-action="email"]'
        );


    emailButtons.forEach(id => {

        const button =
            document.getElementById(id);


        if (!button) return;


        button.addEventListener(
            "click",
            event => {

                /*
                    MUITO IMPORTANTE:

                    Impede o href="#"
                    de alterar a URL ou levar
                    a página para o topo.
                */

                event.preventDefault();


                openEmailModal();

            }
        );

    });


    additionalEmailButtons.forEach(button => {

        button.addEventListener(
            "click",
            event => {

                event.preventDefault();

                openEmailModal();

            }
        );

    });


    /* ======================================================
       CLOSE BUTTON
    ====================================================== */

    if (closeButton) {

        closeButton.addEventListener(
            "click",
            event => {

                event.preventDefault();

                closeEmailModal();

            }
        );

    }


    /* ======================================================
       OVERLAY
    ====================================================== */

    if (overlay) {

        overlay.addEventListener(
            "click",
            event => {

                /*
                    Só fecha quando o clique foi
                    realmente no fundo do modal.
                */

                if (event.target === overlay) {

                    closeEmailModal();

                }

            }
        );

    }


    /* ======================================================
       ESC KEY
    ====================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                closeEmailModal();

            }

        }
    );

}


/* ==========================================================
   OPEN EMAIL MODAL
========================================================== */

function openEmailModal() {

    const modal =
        document.getElementById("emailModal");


    if (!modal) {

        console.error(
            "Haus Cleaning: #emailModal not found."
        );

        return;

    }


    /*
        Mostra o modal.
    */

    modal.classList.add("open");


    /*
        Atualiza acessibilidade.
    */

    modal.setAttribute(
        "aria-hidden",
        "false"
    );


    /*
        Impede a página principal de
        rolar enquanto o modal estiver aberto.
    */

    document.body.classList.add(
        "modal-open"
    );


    /*
        Pequeno atraso para permitir
        que a animação seja aplicada
        antes de colocar o foco.
    */

    setTimeout(
        () => {

            const nameInput =
                document.getElementById("formName");


            if (nameInput) {

                nameInput.focus();

            }

        },
        100
    );

}


/* ==========================================================
   CLOSE EMAIL MODAL
========================================================== */

function closeEmailModal() {

    const modal =
        document.getElementById("emailModal");


    if (!modal) return;


    /*
        Esconde o modal.
    */

    modal.classList.remove("open");


    /*
        Atualiza acessibilidade.
    */

    modal.setAttribute(
        "aria-hidden",
        "true"
    );


    /*
        Libera novamente o scroll
        da página principal.
    */

    document.body.classList.remove(
        "modal-open"
    );

}


/* ==========================================================
   WHATSAPP BUTTONS
========================================================== */

function initializeWhatsAppButtons() {

    const whatsappIds = [
        "waHero",
        "waList",
        "waCard"
    ];


    whatsappIds.forEach(id => {

        const button =
            document.getElementById(id);


        if (!button) return;


        /*
            Remove qualquer comportamento
            antigo que possa ter sido colocado
            no elemento.

            O href será definido por
            updateWhatsAppLinks().
        */

        button.addEventListener(
            "click",
            event => {

                /*
                    Não usamos preventDefault aqui.

                    O navegador deve seguir normalmente
                    o link https://wa.me/...

                    Como o target é "_blank",
                    o WhatsApp abrirá em outra aba.
                */

                const href =
                    button.getAttribute("href");


                /*
                    Se por algum motivo o href ainda
                    estiver vazio ou for "#", não
                    deixamos o navegador simplesmente
                    duplicar/navegar pela página.
                */

                if (
                    !href ||
                    href === "#" ||
                    href.startsWith("#")
                ) {

                    event.preventDefault();


                    const dict =
                        translations[currentLang];


                    const message =
                        dict["wa.msg"] ||
                        "Hi! I'd like to get a quote for cleaning.";


                    const whatsappUrl =
                        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;


                    window.open(
                        whatsappUrl,
                        "_blank",
                        "noopener,noreferrer"
                    );

                }

            }
        );

    });

}


/* ==========================================================
   NAVIGATION LINKS
========================================================== */

function initializeNavigation() {

    /*
        Links internos como:

        #about
        #services
        #gallery
        #contact

        continuam funcionando normalmente.

        Aqui apenas garantimos que o menu mobile
        seja fechado após o clique.
    */

    document
        .querySelectorAll(
            '.nav-links a[href^="#"]'
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    const navLinks =
                        document.getElementById(
                            "navLinks"
                        );


                    if (navLinks) {

                        navLinks.classList.remove(
                            "open"
                        );

                    }

                }
            );

        });

}


/* ==========================================================
   FILE INPUT
========================================================== */

function initializeFileInput() {

    const fileInput =
        document.getElementById("formImage");

    const fileName =
        document.getElementById("fileName");


    if (!fileInput || !fileName) return;


    fileInput.addEventListener(
        "change",
        () => {

            const file =
                fileInput.files &&
                fileInput.files[0];


            /*
                Nenhum arquivo selecionado.
            */

            if (!file) {

                const dict =
                    translations[currentLang];


                fileName.textContent =
                    dict["form.chooseFile"] ||
                    "Choose an image";


                return;

            }


            /*
                Verifica o tipo do arquivo.
            */

            const allowedTypes = [
                "image/jpeg",
                "image/png",
                "image/webp",
                "image/gif"
            ];


            if (
                !allowedTypes.includes(
                    file.type
                )
            ) {

                alert(
                    "Please select a JPG, PNG, WEBP or GIF image."
                );


                fileInput.value = "";


                const dict =
                    translations[currentLang];


                fileName.textContent =
                    dict["form.chooseFile"] ||
                    "Choose an image";


                return;

            }


            /*
                Limite de segurança no navegador.

                10 MB.
            */

            const maxSize =
                10 * 1024 * 1024;


            if (file.size > maxSize) {

                alert(
                    "The selected image is larger than 10 MB."
                );


                fileInput.value = "";


                const dict =
                    translations[currentLang];


                fileName.textContent =
                    dict["form.chooseFile"] ||
                    "Choose an image";


                return;

            }


            /*
                Mostra o nome do arquivo
                escolhido.
            */

            fileName.textContent =
                file.name;

        }
    );

}


/* ==========================================================
   MODAL FORM RESET
========================================================== */

function resetContactForm() {

    const form =
        document.getElementById("contactForm");


    if (!form) return;


    form.reset();


    /*
        Restaura o nome do arquivo
        para o texto padrão.
    */

    const fileName =
        document.getElementById("fileName");


    if (fileName) {

        const dict =
            translations[currentLang];


        fileName.textContent =
            dict["form.chooseFile"] ||
            "Choose an image";

    }


    /*
        Esconde mensagens de status.
    */

    const success =
        document.getElementById("formSuccess");

    const error =
        document.getElementById("formError");


    if (success) {

        success.hidden = true;

    }


    if (error) {

        error.hidden = true;

    }


    /*
        Restaura botão de envio.
    */

    const submitButton =
        document.getElementById(
            "formSubmitBtn"
        );


    if (submitButton) {

        submitButton.disabled = false;

    }


    const submitText =
        submitButton?.querySelector(
            ".submit-text"
        );

    const submitLoading =
        submitButton?.querySelector(
            ".submit-loading"
        );


    if (submitText) {

        submitText.hidden = false;

    }


    if (submitLoading) {

        submitLoading.hidden = true;

    }

}


/* ==========================================================
   FORM STATUS
========================================================== */

function hideFormStatus() {

    const success =
        document.getElementById("formSuccess");

    const error =
        document.getElementById("formError");


    if (success) {

        success.hidden = true;

    }


    if (error) {

        error.hidden = true;

    }

}


/* ==========================================================
   FORM LOADING STATE
========================================================== */

function setFormLoading(isLoading) {

    const submitButton =
        document.getElementById(
            "formSubmitBtn"
        );


    if (!submitButton) return;


    const submitText =
        submitButton.querySelector(
            ".submit-text"
        );


    const submitLoading =
        submitButton.querySelector(
            ".submit-loading"
        );


    submitButton.disabled =
        isLoading;


    if (submitText) {

        submitText.hidden =
            isLoading;

    }


    if (submitLoading) {

        submitLoading.hidden =
            !isLoading;

    }

}

/* ==========================================================
   CONTACT FORM — FORMSPREE
========================================================== */

function initializeContactForm() {

    const form =
        document.getElementById("contactForm");


    if (!form) {

        console.warn(
            "Haus Cleaning: #contactForm not found."
        );

        return;

    }


    /*
        Endpoint do Formspree.

        Este é o formulário criado para
        a Haus Cleaning.
    */

    const FORMSPREE_ENDPOINT =
        "https://formspree.io/f/xljrdygg";


    form.addEventListener(
        "submit",
        async event => {

            /*
                IMPORTANTE:

                Impede o navegador de abrir
                a página padrão do Formspree.
            */

            event.preventDefault();


            /*
                Esconde mensagens antigas.
            */

            hideFormStatus();


            /*
                Referências aos elementos.
            */

            const submitButton =
                document.getElementById(
                    "formSubmitBtn"
                );


            const successMessage =
                document.getElementById(
                    "formSuccess"
                );


            const errorMessage =
                document.getElementById(
                    "formError"
                );


            /*
                Coloca o botão em estado
                de "enviando".
            */

            setFormLoading(true);


            try {

                /*
                    FormData pega automaticamente
                    todos os campos do formulário,
                    inclusive o arquivo selecionado.
                */

                const formData =
                    new FormData(form);


                /*
                    Envia para o Formspree.
                */

                const response =
                    await fetch(
                        FORMSPREE_ENDPOINT,
                        {
                            method: "POST",

                            body: formData,

                            headers: {
                                "Accept":
                                    "application/json"
                            }
                        }
                    );


                /*
                    Verifica a resposta.
                */

                if (response.ok) {

                    /*
                        Formulário enviado.
                    */

                    if (successMessage) {

                        successMessage.hidden =
                            false;

                    }


                    if (errorMessage) {

                        errorMessage.hidden =
                            true;

                    }


                    /*
                        Limpa os campos.
                    */

                    form.reset();


                    /*
                        Restaura o nome do arquivo.
                    */

                    const fileName =
                        document.getElementById(
                            "fileName"
                        );


                    if (fileName) {

                        const dict =
                            translations[currentLang];


                        fileName.textContent =
                            dict["form.chooseFile"] ||
                            "Choose an image";

                    }


                    /*
                        Após o envio, esperamos
                        um pouco e fechamos o modal.

                        Isso deixa o usuário ver
                        a mensagem de sucesso.
                    */

                    setTimeout(
                        () => {

                            closeEmailModal();

                        },
                        2500
                    );


                } else {

                    /*
                        O Formspree retornou erro.
                    */

                    let data = null;


                    try {

                        data =
                            await response.json();

                    } catch (jsonError) {

                        /*
                            Se a resposta não for
                            JSON, simplesmente
                            ignoramos.
                        */

                        data = null;

                    }


                    console.error(
                        "Formspree error:",
                        data
                    );


                    if (errorMessage) {

                        errorMessage.hidden =
                            false;

                    }


                    if (successMessage) {

                        successMessage.hidden =
                            true;

                    }

                }

            } catch (error) {

                /*
                    Erro de conexão,
                    CORS, internet etc.
                */

                console.error(
                    "Contact form error:",
                    error
                );


                if (errorMessage) {

                    errorMessage.hidden =
                        false;

                }


                if (successMessage) {

                    successMessage.hidden =
                        true;

                }

            } finally {

                /*
                    Remove o estado
                    "Enviando..."
                */

                setFormLoading(false);

            }

        }
    );

}


/* ==========================================================
   FORM VALIDATION
========================================================== */

function initializeFormValidation() {

    const form =
        document.getElementById("contactForm");


    if (!form) return;


    /*
        Campos obrigatórios.

        O HTML também terá "required",
        mas fazemos uma validação adicional
        aqui para melhorar a experiência.
    */

    form.addEventListener(
        "submit",
        event => {

            const name =
                document.getElementById(
                    "formName"
                );


            const email =
                document.getElementById(
                    "formEmail"
                );


            const message =
                document.getElementById(
                    "formMessage"
                );


            if (
                !name ||
                !email ||
                !message
            ) {

                return;

            }


            /*
                Nome.
            */

            if (
                name.value.trim().length <
                2
            ) {

                event.preventDefault();

                name.focus();

                return;

            }


            /*
                Mensagem.
            */

            if (
                message.value.trim().length <
                5
            ) {

                event.preventDefault();

                message.focus();

                return;

            }


            /*
                E-mail.

                O navegador já possui
                validação nativa porque
                o campo será type="email".
            */

        }
    );

}


/* ==========================================================
   PHONE MASK
========================================================== */

function initializePhoneMask() {

    const phoneInput =
        document.getElementById(
            "formPhone"
        );


    if (!phoneInput) return;


    phoneInput.addEventListener(
        "input",
        () => {

            let value =
                phoneInput.value.replace(
                    /\D/g,
                    ""
                );


            /*
                Limita a 10 dígitos para
                telefone americano.

                Exemplo:

                7747079964

                vira:

                (774) 707-9964
            */

            if (value.length > 10) {

                value =
                    value.substring(
                        0,
                        10
                    );

            }


            if (value.length > 6) {

                phoneInput.value =
                    `(${value.substring(0, 3)}) ` +
                    `${value.substring(3, 6)}-` +
                    `${value.substring(6)}`;

            } else if (
                value.length > 3
            ) {

                phoneInput.value =
                    `(${value.substring(0, 3)}) ` +
                    value.substring(3);

            } else if (
                value.length > 0
            ) {

                phoneInput.value =
                    `(${value}`;

            } else {

                phoneInput.value =
                    "";

            }

        }
    );

}


/* ==========================================================
   EMAIL FIELD
========================================================== */

function initializeEmailField() {

    const emailInput =
        document.getElementById(
            "formEmail"
        );


    if (!emailInput) return;


    /*
        Remove espaços acidentais
        antes/depois do e-mail.
    */

    emailInput.addEventListener(
        "blur",
        () => {

            emailInput.value =
                emailInput.value.trim();

        }
    );

}


/* ==========================================================
   SUBJECT FIELD
========================================================== */

function initializeSubjectField() {

    const subject =
        document.getElementById(
            "formSubject"
        );


    if (!subject) return;


    /*
        Quando o usuário seleciona
        "Other", podemos habilitar
        um campo adicional caso ele
        exista no HTML.
    */

    const customSubject =
        document.getElementById(
            "customSubject"
        );


    if (!customSubject) return;


    subject.addEventListener(
        "change",
        () => {

            if (
                subject.value ===
                "other"
            ) {

                customSubject.hidden =
                    false;

                customSubject.required =
                    true;

            } else {

                customSubject.hidden =
                    true;

                customSubject.required =
                    false;

                customSubject.value =
                    "";

            }

        }
    );

}


/* ==========================================================
   PREVENT DOUBLE SUBMISSION
========================================================== */

function preventDoubleSubmission() {

    const form =
        document.getElementById(
            "contactForm"
        );


    if (!form) return;


    let submitted = false;


    form.addEventListener(
        "submit",
        event => {

            if (submitted) {

                event.preventDefault();

                return;

            }


            /*
                O estado só será liberado
                quando o envio terminar.
            */

            submitted = true;


            setTimeout(
                () => {

                    submitted = false;

                },
                5000
            );

        }
    );

}


/* ==========================================================
   FORM SUCCESS AUTO HIDE
========================================================== */

function initializeFormMessages() {

    const success =
        document.getElementById(
            "formSuccess"
        );


    const error =
        document.getElementById(
            "formError"
        );


    if (success) {

        success.addEventListener(
            "click",
            () => {

                success.hidden =
                    true;

            }
        );

    }


    if (error) {

        error.addEventListener(
            "click",
            () => {

                error.hidden =
                    true;

            }
        );

    }

}


/* ==========================================================
   INITIALIZE CONTACT FEATURES
========================================================== */

function initializeContactFeatures() {

    initializeEmailModal();

    initializeContactForm();

    initializeFormValidation();

    initializeFileInput();

    initializePhoneMask();

    initializeEmailField();

    initializeSubjectField();

    preventDoubleSubmission();

    initializeFormMessages();

}



