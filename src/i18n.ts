import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "gallery": "Gallery",
          "services": "Services",
          "contact": "Contact",
          "about": "About Me",
          "lightMode": "Light Mode",
          "darkMode": "Dark Mode",
          "capturingSpecialMoments": "Capturing Special Moments",
          "specializedIn": "Specialized in professional photography for events, portraits, and special occasions. Transforming moments into eternal memories.",
          "bookSession": "Request a Quote",
          "workGallery": "Work Gallery",
          "bestMoments": "A selection of our best moments captured through the lens.",
          "ourServices": "Our Services",
          "servicesDescription": "We offer a variety of professional photography services to meet your needs.",
          "weddings": "Weddings",
          "weddingsDesc": "Capturing unique and exciting moments of your special day.",
          "portraits": "Portraits",
          "portraitsDesc": "Professional photos that highlight your personality and style.",
          "events": "Events",
          "eventsDesc": "Complete coverage of social and corporate events.",
          "family": "Family",
          "familyDesc": "Eternizing special moments with your loved ones.",
          "corporate": "Corporate",
          "corporateDesc": "Professional photography for your company or business.",
          "outdoor": "Outdoor Sessions",
          "outdoorDesc": "Photo sessions in special locations and outdoors.",
          "contactUs": "Contact Us",
          "letsCreate": "Let's create memories together! Get in touch to schedule your session.",
          "name": "Name",
          "message": "Message",
          "sendMessage": "Send Message",
          "contactInfo": "Contact Information",
          "businessHours": "Business Hours",
          "weekdays": "Monday to Friday: 9am to 6pm",
          "saturday": "Saturday: 10am to 3pm",
          "sunday": "Sunday: Closed",
          "aboutMeText": "I'm Edson Felix Marques, a professional passionate about capturing unique moments through photography, combining technique, creativity, and sensitivity to tell authentic stories. With a consolidated trajectory in technology, innovation, and user-centered design, I bring to photography the same strategic and detail-oriented approach that marked my career of over 17 years in high-impact projects.\n\nI hold a degree in Business Administration and am currently studying Information Systems to transition my career to the technology field. In addition to photography, I also offer IT services, ensuring efficient and innovative solutions for my clients.\n\nMy international experience, traveling through various countries and experiencing different cultures, is reflected in my visual work, resulting in images that translate emotion, beauty, and originality.\n\nEach project I undertake is conducted with professionalism, commitment, and a personal touch, providing my clients not just photos, but memories eternalized with excellence.\n\nCount on me to record your most special moments and offer IT solutions, with the assurance of high-quality service, empathy, and dedication."
        }
      },
      pt: {
        translation: {
          "gallery": "Galeria",
          "services": "Serviços",
          "contact": "Contato",
          "about": "Quem Sou",
          "lightMode": "Modo Claro",
          "darkMode": "Modo Escuro",
          "capturingSpecialMoments": "Capturando Momentos Especiais",
          "specializedIn": "Especializado em fotografia profissional para eventos, retratos e ocasiões especiais. Transformando momentos em memórias eternas.",
          "bookSession": "Solicite um Orçamento",
          "workGallery": "Galeria de Trabalhos",
          "bestMoments": "Uma seleção dos nossos melhores momentos capturados através das lentes.",
          "ourServices": "Nossos Serviços",
          "servicesDescription": "Oferecemos uma variedade de serviços fotográficos profissionais para atender suas necessidades.",
          "weddings": "Casamentos",
          "weddingsDesc": "Capturando momentos únicos e emocionantes do seu dia especial.",
          "portraits": "Retratos",
          "portraitsDesc": "Fotos profissionais que destacam sua personalidade e estilo.",
          "events": "Eventos",
          "eventsDesc": "Cobertura completa de eventos sociais e corporativos.",
          "family": "Família",
          "familyDesc": "Eternizando momentos especiais com seus entes queridos.",
          "corporate": "Corporativo",
          "corporateDesc": "Fotografia profissional para sua empresa ou negócio.",
          "outdoor": "Ensaios Externos",
          "outdoorDesc": "Sessões fotográficas em locações especiais e ao ar livre.",
          "contactUs": "Entre em Contato",
          "letsCreate": "Vamos criar memórias juntos! Entre em contato para agendar sua sessão.",
          "name": "Nome",
          "message": "Mensagem",
          "sendMessage": "Enviar Mensagem",
          "contactInfo": "Informações de Contato",
          "businessHours": "Horário de Atendimento",
          "weekdays": "Segunda a Sexta: 9h às 18h",
          "saturday": "Sábado: 10h às 15h",
          "sunday": "Domingo: Fechado",
          "aboutMeText": "Sou Edson Felix Marques, um profissional apaixonado por capturar momentos únicos através da fotografia, unindo técnica, criatividade e sensibilidade para contar histórias autênticas. Com uma trajetória consolidada em tecnologia, inovação e design centrado no usuário, trago para a fotografia o mesmo olhar estratégico e atento aos detalhes que marcaram minha carreira de mais de 17 anos em projetos de alto impacto.\n\nSou formado em Administração de Empresas e atualmente estou cursando Sistemas de Informação para realizar minha transição de carreira para a área de tecnologia. Além da fotografia, também ofereço serviços de TI, garantindo soluções eficientes e inovadoras para meus clientes.\n\nMinha experiência internacional, viajando por diversos países e vivenciando diferentes culturas, reflete-se no meu trabalho visual, resultando em imagens que traduzem emoção, beleza e originalidade.\n\nCada projeto que realizo é conduzido com profissionalismo, comprometimento e um toque pessoal, proporcionando aos meus clientes não apenas fotos, mas memórias eternizadas com excelência.\n\nConte comigo para registrar seus momentos mais especiais e oferecer soluções de TI, com a certeza de um serviço de alta qualidade, empatia e dedicação."
        }
      }
    },
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;