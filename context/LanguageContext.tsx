"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type LangCode = "pt-BR" | "pt-PT" | "es" | "fr" | "en-US" | "en-GB" | "zh" | "ru"

export interface Translations {
  nav: {
    home: string
    about: string
    skills: string
    projects: string
    contact: string
  }
  hero: {
    tagline: string
    description: string
  }
  about: {
    title: string
    description: string
    education: string
    graduated: string
    location: string
    features: {
      cleanCode: string
      problemSolver: string
      teamPlayer: string
      fastLearner: string
    }
  }
  skills: {
    title: string
    subtitle: string
    toolsCategory: string
  }
  projects: {
    title: string
    subtitle: string
    viewMore: string
  }
  contact: {
    title: string
    subtitle: string
    infoTitle: string
    location: string
    nameLabel: string
    emailLabel: string
    messageLabel: string
    namePlaceholder: string
    messagePlaceholder: string
    send: string
    devMessage: string
  }
}

const translations: Record<LangCode, Translations> = {
  "pt-BR": {
    nav: { home: "Home", about: "Sobre", skills: "Habilidades", projects: "Projetos", contact: "Contato" },
    hero: {
      tagline: "Posso construir tudo que você quiser, é só me pedir!",
      description:
        "Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e experiências digitais excepcionais. Formado pela UNEMAT em 2024, especializado em tecnologias modernas como React, React Native, TypeScript, Python, NextJS, C++.",
    },
    about: {
      title: "Sobre Mim",
      description:
        "Sou um desenvolvedor apaixonado por tecnologia com experiência em desenvolvimento full-stack. Especializo-me em criar aplicações web modernas, eficientes e escaláveis usando as mais recentes tecnologias do mercado.",
      education: "Formação Acadêmica",
      graduated: "Graduado em 2024",
      location: "Mato Grosso, Brasil",
      features: {
        cleanCode: "Escrevo código limpo, maintível e bem documentado seguindo as melhores práticas.",
        problemSolver: "Adoro resolver problemas complexos com soluções criativas e eficientes.",
        teamPlayer: "Trabalho bem em equipe e acredito na colaboração para alcançar os melhores resultados.",
        fastLearner: "Sempre disposto a aprender novas tecnologias e me adaptar rapidamente às mudanças.",
      },
    },
    skills: {
      title: "Habilidades",
      subtitle: "Tecnologias e ferramentas que domino para criar soluções completas",
      toolsCategory: "Ferramentas & Outros",
    },
    projects: {
      title: "Projetos em Destaque",
      subtitle: "Alguns dos projetos que desenvolvi para demonstrar minhas habilidades",
      viewMore: "Ver mais",
    },
    contact: {
      title: "Entre em Contato",
      subtitle: "Vamos conversar sobre seu próximo projeto ou oportunidade de trabalho",
      infoTitle: "Informações de Contato",
      location: "Localização",
      nameLabel: "Nome",
      emailLabel: "Email",
      messageLabel: "Mensagem",
      namePlaceholder: "Seu nome",
      messagePlaceholder: "Sua mensagem...",
      send: "Enviar Mensagem",
      devMessage: "Funcionalidade de envio de e-mail em desenvolvimento. 🚧",
    },
  },

  "pt-PT": {
    nav: { home: "Início", about: "Sobre", skills: "Competências", projects: "Projetos", contact: "Contacto" },
    hero: {
      tagline: "Posso construir tudo o que quiser, é só pedir!",
      description:
        "Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e experiências digitais excecionais. Licenciado pela UNEMAT em 2024, especializado em tecnologias modernas como React, React Native, TypeScript, Python, NextJS, C++.",
    },
    about: {
      title: "Sobre Mim",
      description:
        "Sou um desenvolvedor apaixonado por tecnologia com experiência em desenvolvimento full-stack. Especializo-me em criar aplicações web modernas, eficientes e escaláveis usando as mais recentes tecnologias do mercado.",
      education: "Formação Académica",
      graduated: "Licenciado em 2024",
      location: "Mato Grosso, Brasil",
      features: {
        cleanCode: "Escrevo código limpo, de fácil manutenção e bem documentado, seguindo as melhores práticas.",
        problemSolver: "Adoro resolver problemas complexos com soluções criativas e eficientes.",
        teamPlayer: "Trabalho bem em equipa e acredito na colaboração para alcançar os melhores resultados.",
        fastLearner: "Sempre disponível para aprender novas tecnologias e adaptar-me rapidamente às mudanças.",
      },
    },
    skills: {
      title: "Competências",
      subtitle: "Tecnologias e ferramentas que domino para criar soluções completas",
      toolsCategory: "Ferramentas & Outros",
    },
    projects: {
      title: "Projetos em Destaque",
      subtitle: "Alguns dos projetos que desenvolvi para demonstrar as minhas competências",
      viewMore: "Ver mais",
    },
    contact: {
      title: "Entre em Contacto",
      subtitle: "Vamos conversar sobre o seu próximo projeto ou oportunidade de trabalho",
      infoTitle: "Informações de Contacto",
      location: "Localização",
      nameLabel: "Nome",
      emailLabel: "E-mail",
      messageLabel: "Mensagem",
      namePlaceholder: "O seu nome",
      messagePlaceholder: "A sua mensagem...",
      send: "Enviar Mensagem",
      devMessage: "Funcionalidade de envio de e-mail em desenvolvimento. 🚧",
    },
  },

  es: {
    nav: { home: "Inicio", about: "Sobre mí", skills: "Habilidades", projects: "Proyectos", contact: "Contacto" },
    hero: {
      tagline: "¡Puedo construir todo lo que quieras, solo pídelo!",
      description:
        "Desarrollador Full Stack apasionado por crear soluciones innovadoras y experiencias digitales excepcionales. Graduado en la UNEMAT en 2024, especializado en tecnologías modernas como React, React Native, TypeScript, Python, NextJS, C++.",
    },
    about: {
      title: "Sobre Mí",
      description:
        "Soy un desarrollador apasionado por la tecnología con experiencia en desarrollo full-stack. Me especializo en crear aplicaciones web modernas, eficientes y escalables usando las últimas tecnologías del mercado.",
      education: "Formación Académica",
      graduated: "Graduado en 2024",
      location: "Mato Grosso, Brasil",
      features: {
        cleanCode: "Escribo código limpio, mantenible y bien documentado siguiendo las mejores prácticas.",
        problemSolver: "Me encanta resolver problemas complejos con soluciones creativas y eficientes.",
        teamPlayer: "Trabajo bien en equipo y creo en la colaboración para lograr los mejores resultados.",
        fastLearner: "Siempre dispuesto a aprender nuevas tecnologías y adaptarme rápidamente a los cambios.",
      },
    },
    skills: {
      title: "Habilidades",
      subtitle: "Tecnologías y herramientas que domino para crear soluciones completas",
      toolsCategory: "Herramientas & Otros",
    },
    projects: {
      title: "Proyectos Destacados",
      subtitle: "Algunos de los proyectos que he desarrollado para demostrar mis habilidades",
      viewMore: "Ver más",
    },
    contact: {
      title: "Contáctame",
      subtitle: "Hablemos sobre tu próximo proyecto u oportunidad laboral",
      infoTitle: "Información de Contacto",
      location: "Ubicación",
      nameLabel: "Nombre",
      emailLabel: "Correo electrónico",
      messageLabel: "Mensaje",
      namePlaceholder: "Tu nombre",
      messagePlaceholder: "Tu mensaje...",
      send: "Enviar Mensaje",
      devMessage: "Funcionalidad de envío de correo en desarrollo. 🚧",
    },
  },

  fr: {
    nav: { home: "Accueil", about: "À propos", skills: "Compétences", projects: "Projets", contact: "Contact" },
    hero: {
      tagline: "Je peux créer tout ce que vous voulez, demandez-moi !",
      description:
        "Développeur Full Stack passionné par la création de solutions innovantes et d'expériences numériques exceptionnelles. Diplômé de l'UNEMAT en 2024, spécialisé dans les technologies modernes telles que React, React Native, TypeScript, Python, NextJS, C++.",
    },
    about: {
      title: "À propos de moi",
      description:
        "Je suis un développeur passionné par la technologie avec une expérience en développement full-stack. Je me spécialise dans la création d'applications web modernes, efficaces et évolutives avec les dernières technologies du marché.",
      education: "Formation Académique",
      graduated: "Diplômé en 2024",
      location: "Mato Grosso, Brésil",
      features: {
        cleanCode: "J'écris du code propre, maintenable et bien documenté en suivant les meilleures pratiques.",
        problemSolver: "J'adore résoudre des problèmes complexes avec des solutions créatives et efficaces.",
        teamPlayer: "Je travaille bien en équipe et crois en la collaboration pour obtenir les meilleurs résultats.",
        fastLearner: "Toujours prêt à apprendre de nouvelles technologies et à m'adapter rapidement aux changements.",
      },
    },
    skills: {
      title: "Compétences",
      subtitle: "Technologies et outils que je maîtrise pour créer des solutions complètes",
      toolsCategory: "Outils & Autres",
    },
    projects: {
      title: "Projets en Vedette",
      subtitle: "Quelques-uns des projets que j'ai développés pour démontrer mes compétences",
      viewMore: "Voir plus",
    },
    contact: {
      title: "Contactez-moi",
      subtitle: "Parlons de votre prochain projet ou opportunité de travail",
      infoTitle: "Informations de Contact",
      location: "Localisation",
      nameLabel: "Nom",
      emailLabel: "E-mail",
      messageLabel: "Message",
      namePlaceholder: "Votre nom",
      messagePlaceholder: "Votre message...",
      send: "Envoyer le message",
      devMessage: "Fonctionnalité d'envoi d'e-mail en cours de développement. 🚧",
    },
  },

  "en-US": {
    nav: { home: "Home", about: "About", skills: "Skills", projects: "Projects", contact: "Contact" },
    hero: {
      tagline: "I can build everything you want, just ask me!",
      description:
        "Full Stack Developer passionate about creating innovative solutions and exceptional digital experiences. Graduated from UNEMAT in 2024, specialized in modern technologies such as React, React Native, TypeScript, Python, NextJS, C++.",
    },
    about: {
      title: "About Me",
      description:
        "I'm a developer passionate about technology with experience in full-stack development. I specialize in building modern, efficient, and scalable web applications using the latest technologies.",
      education: "Academic Background",
      graduated: "Graduated in 2024",
      location: "Mato Grosso, Brazil",
      features: {
        cleanCode: "I write clean, maintainable, and well-documented code following best practices.",
        problemSolver: "I love solving complex problems with creative and efficient solutions.",
        teamPlayer: "I work well in a team and believe in collaboration to achieve the best results.",
        fastLearner: "Always eager to learn new technologies and adapt quickly to changes.",
      },
    },
    skills: {
      title: "Skills",
      subtitle: "Technologies and tools I master to build complete solutions",
      toolsCategory: "Tools & Others",
    },
    projects: {
      title: "Featured Projects",
      subtitle: "Some of the projects I've built to showcase my skills",
      viewMore: "See more",
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Let's talk about your next project or work opportunity",
      infoTitle: "Contact Information",
      location: "Location",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      namePlaceholder: "Your name",
      messagePlaceholder: "Your message...",
      send: "Send Message",
      devMessage: "Email sending functionality under development. 🚧",
    },
  },

  "en-GB": {
    nav: { home: "Home", about: "About", skills: "Skills", projects: "Projects", contact: "Contact" },
    hero: {
      tagline: "I can build everything you want, just ask me!",
      description:
        "Full Stack Developer passionate about creating innovative solutions and exceptional digital experiences. Graduated from UNEMAT in 2024, specialised in modern technologies such as React, React Native, TypeScript, Python, NextJS, C++.",
    },
    about: {
      title: "About Me",
      description:
        "I'm a developer passionate about technology with experience in full-stack development. I specialise in building modern, efficient, and scalable web applications using the latest technologies.",
      education: "Academic Background",
      graduated: "Graduated in 2024",
      location: "Mato Grosso, Brazil",
      features: {
        cleanCode: "I write clean, maintainable, and well-documented code following best practices.",
        problemSolver: "I love solving complex problems with creative and efficient solutions.",
        teamPlayer: "I work well in a team and believe in collaboration to achieve the best results.",
        fastLearner: "Always eager to learn new technologies and adapt quickly to changes.",
      },
    },
    skills: {
      title: "Skills",
      subtitle: "Technologies and tools I master to build complete solutions",
      toolsCategory: "Tools & Others",
    },
    projects: {
      title: "Featured Projects",
      subtitle: "Some of the projects I've built to showcase my skills",
      viewMore: "See more",
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Let's discuss your next project or work opportunity",
      infoTitle: "Contact Information",
      location: "Location",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      namePlaceholder: "Your name",
      messagePlaceholder: "Your message...",
      send: "Send Message",
      devMessage: "Email sending functionality under development. 🚧",
    },
  },

  zh: {
    nav: { home: "主页", about: "关于", skills: "技能", projects: "项目", contact: "联系" },
    hero: {
      tagline: "我能构建您想要的一切，尽管开口！",
      description:
        "热爱创新解决方案和卓越数字体验的全栈开发者。2024年毕业于UNEMAT，专注于React、React Native、TypeScript、Python、NextJS、C++等现代技术。",
    },
    about: {
      title: "关于我",
      description:
        "我是一名热爱技术的全栈开发者，专注于构建现代、高效、可扩展的Web应用程序，采用市场上最新的技术。",
      education: "教育背景",
      graduated: "2024年毕业",
      location: "巴西马托格罗索州",
      features: {
        cleanCode: "遵循最佳实践，编写干净、可维护、文档完善的代码。",
        problemSolver: "热衷于用创造性和高效的解决方案解决复杂问题。",
        teamPlayer: "善于团队协作，相信合作能取得最佳成果。",
        fastLearner: "随时准备学习新技术，快速适应变化。",
      },
    },
    skills: {
      title: "技能",
      subtitle: "我掌握的用于构建完整解决方案的技术和工具",
      toolsCategory: "工具 & 其他",
    },
    projects: {
      title: "精选项目",
      subtitle: "我开发的一些展示我技能的项目",
      viewMore: "查看更多",
    },
    contact: {
      title: "联系我",
      subtitle: "让我们谈谈您的下一个项目或工作机会",
      infoTitle: "联系信息",
      location: "位置",
      nameLabel: "姓名",
      emailLabel: "邮箱",
      messageLabel: "留言",
      namePlaceholder: "您的姓名",
      messagePlaceholder: "您的留言...",
      send: "发送消息",
      devMessage: "邮件发送功能正在开发中。🚧",
    },
  },

  ru: {
    nav: { home: "Главная", about: "Обо мне", skills: "Навыки", projects: "Проекты", contact: "Контакт" },
    hero: {
      tagline: "Я могу создать всё, что вы хотите, просто спросите!",
      description:
        "Full Stack разработчик, увлечённый созданием инновационных решений и выдающихся цифровых продуктов. Окончил UNEMAT в 2024 году, специализируюсь на современных технологиях: React, React Native, TypeScript, Python, NextJS, C++.",
    },
    about: {
      title: "Обо мне",
      description:
        "Я разработчик, увлечённый технологиями, с опытом в full-stack разработке. Специализируюсь на создании современных, эффективных и масштабируемых веб-приложений с использованием новейших технологий.",
      education: "Образование",
      graduated: "Выпускник 2024 года",
      location: "Мату-Гросу, Бразилия",
      features: {
        cleanCode: "Пишу чистый, поддерживаемый и хорошо документированный код, следуя лучшим практикам.",
        problemSolver: "Люблю решать сложные задачи творческими и эффективными методами.",
        teamPlayer: "Умею работать в команде и верю в сотрудничество для достижения лучших результатов.",
        fastLearner: "Всегда готов изучать новые технологии и быстро адаптироваться к изменениям.",
      },
    },
    skills: {
      title: "Навыки",
      subtitle: "Технологии и инструменты, которыми я владею для создания комплексных решений",
      toolsCategory: "Инструменты & Прочее",
    },
    projects: {
      title: "Избранные проекты",
      subtitle: "Некоторые из проектов, которые я разработал для демонстрации своих навыков",
      viewMore: "Подробнее",
    },
    contact: {
      title: "Связаться со мной",
      subtitle: "Давайте обсудим ваш следующий проект или рабочую возможность",
      infoTitle: "Контактная информация",
      location: "Местоположение",
      nameLabel: "Имя",
      emailLabel: "E-mail",
      messageLabel: "Сообщение",
      namePlaceholder: "Ваше имя",
      messagePlaceholder: "Ваше сообщение...",
      send: "Отправить сообщение",
      devMessage: "Функция отправки электронной почты в разработке. 🚧",
    },
  },
}

export const languages: { code: LangCode; label: string; flag: string }[] = [
  { code: "pt-BR", label: "Português (Brasil)", flag: "🇧🇷" },
  { code: "pt-PT", label: "Português (Portugal)", flag: "🇵🇹" },
  { code: "es",    label: "Español",             flag: "🇪🇸" },
  { code: "fr",    label: "Français",             flag: "🇫🇷" },
  { code: "en-US", label: "English (US)",         flag: "🇺🇸" },
  { code: "en-GB", label: "English (UK)",         flag: "🇬🇧" },
  { code: "zh",    label: "中文",                 flag: "🇨🇳" },
  { code: "ru",    label: "Русский",              flag: "🇷🇺" },
]

interface LanguageContextValue {
  lang: LangCode
  setLang: (code: LangCode) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LangCode>("pt-BR")

  useEffect(() => {
    const saved = localStorage.getItem("lang") as LangCode | null
    if (saved && translations[saved]) setLangState(saved)
  }, [])

  const setLang = (code: LangCode) => {
    setLangState(code)
    localStorage.setItem("lang", code)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider")
  return ctx
}
