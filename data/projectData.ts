export const projectsData = {
  "calculadora-rust": {
    title: "Calculadora Rust",
    description: "Uma calculadora avançada desenvolvida em Rust com foco em performance e segurança de tipos.",
    longDescription: `Esta calculadora foi desenvolvida como um projeto de aprendizado para explorar as capacidades da linguagem Rust. 
O projeto implementa operações matemáticas básicas e avançadas, incluindo funções trigonométricas, logarítmicas e exponenciais.

A aplicação foi construída com foco em:
• Performance otimizada através do sistema de ownership do Rust
• Segurança de tipos para evitar erros em tempo de execução  
• Interface de linha de comando intuitiva
• Tratamento robusto de erros
• Testes unitários abrangentes

O código foi estruturado seguindo as melhores práticas da linguagem, utilizando módulos para organizar diferentes tipos de operações matemáticas.`,
    technologies: [
      { name: "Rust", color: "from-orange-600 to-red-700", level: "Expert" },
      { name: "CLI", color: "from-gray-600 to-gray-800", level: "Advanced" },
      { name: "Mathematics", color: "from-blue-600 to-purple-700", level: "Intermediate" },
      { name: "Testing", color: "from-green-600 to-green-800", level: "Advanced" },
    ],
    github: "https://github.com/x-blum-x/Calculadora-Rust",
    demo: null,
    status: "In Development",
    date: "2024",
    category: "Desktop Application",
    features: [
      "Operações matemáticas básicas (+, -, *, /)",
      "Funções trigonométricas (sin, cos, tan)",
      "Operações logarítmicas e exponenciais",
      "Interface de linha de comando",
      "Tratamento de erros robusto",
      "Testes unitários completos",
    ],
    challenges: [
      "Implementação de parsing de expressões matemáticas",
      "Otimização de performance para cálculos complexos",
      "Design de interface CLI intuitiva",
    ],
  },
  "hand-tracking": {
    title: "Hand Tracking",
    description: "Sistema de rastreamento de mãos em tempo real usando IA e visão computacional.",
    longDescription: `Um sistema avançado de detecção e rastreamento de mãos em tempo real, desenvolvido utilizando OpenCV e MediaPipe.
O projeto implementa algoritmos de machine learning para reconhecer gestos e movimentos das mãos com alta precisão.

Principais funcionalidades:
• Detecção de mãos em tempo real através da webcam
• Rastreamento de 21 pontos de referência por mão
• Reconhecimento de gestos básicos
• Interface gráfica para visualização dos resultados
• Calibração automática para diferentes condições de iluminação
• Suporte para múltiplas mãos simultaneamente

O sistema foi otimizado para funcionar em tempo real, mantendo alta precisão mesmo em condições adversas.`,
    technologies: [
      { name: "Python", color: "from-yellow-500 to-yellow-700", level: "Expert" },
      { name: "OpenCV", color: "from-blue-500 to-blue-700", level: "Advanced" },
      { name: "MediaPipe", color: "from-green-500 to-green-700", level: "Advanced" },
      { name: "Machine Learning", color: "from-purple-500 to-purple-700", level: "Intermediate" },
      { name: "Computer Vision", color: "from-red-500 to-red-700", level: "Advanced" },
    ],
    github: "https://github.com/x-blum-x/Hand-Trancking",
    demo: null,
    status: "Completed",
    date: "2024",
    category: "AI/Computer Vision",
    features: [
      "Detecção de mãos em tempo real",
      "Rastreamento de 21 landmarks por mão",
      "Reconhecimento de gestos básicos",
      "Interface gráfica interativa",
      "Suporte para múltiplas mãos",
      "Calibração automática",
    ],
    challenges: [
      "Otimização para processamento em tempo real",
      "Precisão em diferentes condições de iluminação",
      "Redução de falsos positivos",
    ],
  },
  "portfolio-website": {
    title: "Portfolio Website",
    description: "Site de portfólio pessoal moderno e responsivo com animações avançadas e tema Matrix.",
    longDescription: `Um portfólio pessoal desenvolvido com as mais modernas tecnologias web, apresentando um design único inspirado no filme Matrix.
O site foi construído com foco em performance, acessibilidade e experiência do usuário.

Características técnicas:
• Desenvolvido com Next.js 15 e TypeScript para máxima performance
• Animações fluidas utilizando Framer Motion
• Background animado estilo Matrix com Canvas API
• Design responsivo que funciona em todos os dispositivos
• Otimizado para SEO e acessibilidade
• Slider interativo com suporte a drag/swipe
• Tema dark com paleta de cores cyberpunk

O projeto demonstra habilidades avançadas em desenvolvimento frontend moderno e design de interfaces.`,
    technologies: [
      { name: "Next.js", color: "from-black to-gray-700", level: "Expert" },
      { name: "TypeScript", color: "from-blue-600 to-blue-800", level: "Expert" },
      { name: "Tailwind CSS", color: "from-cyan-500 to-blue-600", level: "Expert" },
      { name: "Framer Motion", color: "from-pink-500 to-purple-600", level: "Advanced" },
      { name: "Canvas API", color: "from-green-500 to-green-700", level: "Intermediate" },
      { name: "Responsive Design", color: "from-orange-500 to-red-600", level: "Expert" },
    ],
    github: "https://github.com/x-blum-x/portifolio",
    demo: "https://portifolio-orpin-eight.vercel.app/",
    status: "In Development",
    date: "2024",
    category: "Web Development",
    features: [
      "Design responsivo moderno",
      "Animações com Framer Motion",
      "Background Matrix animado",
      "Slider interativo com drag/swipe",
      "Otimização SEO",
      "Tema cyberpunk/Matrix",
    ],
    challenges: [
      "Otimização de performance das animações",
      "Implementação do background Matrix",
      "Design responsivo complexo",
    ],
  },
  "banco-cpp": {
    title: "Banco C++",
    description: "Sistema bancário em C++ com persistência via SQLite, operações seguras e dashboard administrativo.",
    longDescription: `Sistema bancário modular em linha de comando desenvolvido em C++. Funcionalidades completas para cadastro, login, movimentações bancárias, persistência via SQLite e painel administrativo.

Funcionalidades principais:
• Criação de conta com dados obrigatórios e validação de CPF
• Login via número da conta ou CPF com senha
• Operações bancárias: depósito, saque, saldo
• Histórico detalhado de transações
• Painel administrativo com métricas
• Logs com níveis e timestamps`,
    technologies: [
      { name: "C++", color: "from-indigo-600 to-indigo-900", level: "Advanced" },
      { name: "SQLite", color: "from-gray-500 to-gray-800", level: "Intermediate" },
      { name: "CLI", color: "from-blue-500 to-blue-700", level: "Advanced" },
      { name: "Modular C++", color: "from-red-500 to-red-700", level: "Intermediate" },
    ],
    github: "https://github.com/x-blum-x/Banco-C-",
    demo: null,
    status: "In Development",
    date: "2024",
    category: "Desktop CLI",
    features: [
      "Cadastro e login de usuários com validação",
      "Operações de depósito, saque e consulta de saldo",
      "Dashboard administrativo com estatísticas globais",
      "Persistência de dados via SQLite",
      "Histórico completo de transações",
      "Logs técnicos com timestamp",
    ],
    challenges: [
      "Gerenciamento de concorrência em operações bancárias",
      "Validação de dados de entrada (CPF, valores monetários)",
      "Monitoramento de performance e logs",
      "Implementação de painel administrativo",
      "Gerenciamento seguro de autenticação e permissões",
      "Integração robusta com banco SQLite via C++",
    ],
  },
  "identify-person": {
    title: "Identify Person",
    description: "Rastreamento de pessoas em tempo real com YOLOv5 e Filtro de Kalman em Python.",
    longDescription: `Sistema de rastreamento com YOLOv5 + Kalman Filter, atribuindo identificadores únicos a pessoas em tempo real via webcam.

• YOLOv5 para detecção rápida e precisa
• Kalman para suavização de movimento
• Cálculo de tempo na tela por ID
• Otimizado para múltiplas pessoas
• Funciona em Windows e Linux`,
    technologies: [
      { name: "Python", color: "from-yellow-400 to-yellow-600", level: "Expert" },
      { name: "YOLOv5", color: "from-pink-500 to-pink-700", level: "Advanced" },
      { name: "OpenCV", color: "from-blue-500 to-blue-700", level: "Advanced" },
      { name: "Kalman Filter", color: "from-green-500 to-green-700", level: "Intermediate" },
      { name: "Real-Time Tracking", color: "from-purple-600 to-purple-800", level: "Intermediate" },
    ],
    github: "https://github.com/x-blum-x/Identify-Person",
    demo: null,
    status: "Completed",
    date: "2024",
    category: "AI/Computer Vision",
    features: [
      "Detecção de pessoas em tempo real via webcam",
      "Atribuição de IDs únicos e rastreamento contínuo",
      "Suavização de movimento com Kalman Filter",
      "Cálculo de tempo de permanência por ID",
      "Scripts separados por responsabilidade (tracker, filtro, utilitários)",
      "Configuração flexível via config.py",
    ],
    challenges: [
      "Manter desempenho em tempo real",
      "Reduzir falsos positivos com múltiplas pessoas",
      "Evitar conflito de bibliotecas e nomes de arquivos",
    ],
  }
}
