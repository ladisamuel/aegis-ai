const es = {
  translation: {
    nav: {
      features: 'Características',
      howItWorks: 'Cómo funciona',
      pricing: 'Precios',
      company: 'Empresa',
      login: 'Iniciar sesión',
      getStarted: 'Comenzar',
    },
    hero: {
      badge: 'Acceso anticipado disponible',
      title: 'Detección de intrusiones con IA para la nube moderna',
      subtitle: 'Protege tus aplicaciones web, APIs y sistemas backend con detección de anomalías en tiempo real y análisis de comportamiento, creado para equipos de desarrollo.',
      cta: 'Ver demo',
      ctaSecondary: 'Empezar gratis',
      trustedBy: 'Con la confianza de equipos de desarrolladores de grandes empresas',
    },
    features: {
      sectionTitle: 'Protección Cloud Integral',
      sectionSubtitle: 'Aegis AI combina coincidencia de firmas en tiempo real, detección de anomalías con IA y análisis de comportamiento para mantenerte protegido.',
      realTime: { title: 'Detección en tiempo real', desc: 'Latencia de detección inferior a 50ms. Cada solicitud analizada en tiempo real mediante reglas de firma y modelos de ML.' },
      aiAnomaly: { title: 'Detección de anomalías con IA', desc: 'Nuestra IA aprende qué es "normal" para tus apps, detectando desviaciones en cientos de señales de comportamiento.' },
      behavioral: { title: 'Análisis de comportamiento', desc: 'Perfilado de usuarios, análisis de sesiones y detección de viajes imposibles para detectar atacantes sofisticados.' },
      apiFirst: { title: 'Integración API-First', desc: 'SDKs listos para usar en Python, Node.js, Java y Go. Compatible con tus frameworks e infraestructura existentes.' },
    },
    howItWorks: {
      sectionTitle: 'Cómo funciona Aegis AI',
      sectionSubtitle: 'Integración perfecta, detección inteligente y respuesta automatizada — sin ralentizar tu stack.',
      step1: { label: 'PASO 1', title: 'Envía eventos desde cualquier lugar', desc: 'Instrumenta tus apps con nuestro SDK o envía eventos HTTP. Sin infraestructura necesaria.', points: ['Soporte nativo Python, Node, Java, Go', 'Middleware para frameworks', 'Envía desde cualquier plataforma'] },
      step2: { label: 'PASO 2', title: 'Analiza en tiempo real', desc: 'Cada evento pasa por coincidencia de firmas, bosques de aislamiento y perfilado de comportamiento simultáneamente.', points: ['Puntuación IA al instante', 'Procesamiento de flujo en pipeline'] },
      step3: { label: 'PASO 3', title: 'Detecta y responde', desc: 'Alertas enviadas a tu equipo al instante. Bloqueo automático, integraciones SOAR y gestión de casos incluidos.', points: ['Playbooks de respuesta automatizados', 'Alertas por Slack, webhook y email', 'Líneas de tiempo de investigación'] },
    },
    pricing: {
      sectionTitle: 'Precios transparentes',
      sectionSubtitle: 'Comienza gratis. Escala a medida que creces. Sin cargos sorpresa.',
      monthly: 'Mensual', annual: 'Anual', save: 'Ahorra 20%',
      tiers: {
        developer: { name: 'Desarrollador', price: '$0', period: '/mes', desc: 'Para desarrolladores individuales explorando la plataforma.', cta: 'Comenzar', features: ['10K eventos/día', 'Detección básica', 'Acceso al panel', 'Soporte comunitario'] },
        growth: { name: 'Crecimiento', price: '$499', period: '/mes', desc: 'Para equipos en crecimiento que necesitan seguridad de producción.', cta: 'Prueba gratis', features: ['1M eventos/día', 'Detección de anomalías IA', 'Alertas webhook', 'Integración Slack', 'Soporte email'], badge: 'Más popular' },
        business: { name: 'Negocio', price: '$2.499', period: '/mes', desc: 'Para empresas con necesidades de seguridad avanzadas.', cta: 'Contactar ventas', features: ['10M eventos/día', 'Motor de reglas personalizado', 'Inteligencia de amenazas', 'RBAC multiusuario', 'Retención 90 días', 'Soporte prioritario'] },
        enterprise: { name: 'Empresa', price: 'Personalizado', period: '', desc: 'Escala ilimitada con nube privada y cumplimiento.', cta: 'Contactar ventas', features: ['Eventos ilimitados', 'Opción nube privada', 'Modelos IA personalizados', 'Informes SOC2/GDPR', 'SLA dedicado', 'Soporte 24/7'] },
      },
    },
    footer: {
      tagline: 'Seguridad impulsada por IA para la nube moderna. Confiada por equipos de ingeniería en todo el mundo.',
      product: 'Producto', company: 'Empresa', resources: 'Recursos', legal: 'Legal',
      links: { features: 'Características', pricing: 'Precios', changelog: 'Registro de cambios', status: 'Estado', about: 'Acerca de', blog: 'Blog', careers: 'Carreras', contact: 'Contacto', docs: 'Documentación', apiRef: 'Referencia API', githubActions: 'GitHub Actions', security: 'Seguridad', privacy: 'Política de privacidad', terms: 'Términos de servicio', dpa: 'DPA', cookies: 'Política de cookies' },
      copy: '© {{year}} Aegis AI. Todos los derechos reservados.',
    },
    theme: { light: 'Modo claro', dark: 'Modo oscuro' },
  },
}

export default es
