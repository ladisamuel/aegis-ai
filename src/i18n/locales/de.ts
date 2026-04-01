const de = {
  translation: {
    nav: {
      features: 'Funktionen',
      howItWorks: 'So funktioniert es',
      pricing: 'Preise',
      company: 'Unternehmen',
      login: 'Anmelden',
      getStarted: 'Loslegen',
    },
    hero: {
      badge: 'Jetzt im Early Access',
      title: 'KI-gestützte Angriffserkennung für die moderne Cloud',
      subtitle: 'Schützen Sie Ihre Web-Apps, APIs und Backend-Systeme mit Echtzeit-Anomalieerkennung und Verhaltensanalyse.',
      cta: 'Demo ansehen',
      ctaSecondary: 'Kostenlos starten',
      trustedBy: 'Von Entwicklerteams führender Unternehmen genutzt',
    },
    features: {
      sectionTitle: 'Umfassender Cloud-Schutz',
      sectionSubtitle: 'Aegis AI kombiniert Echtzeit-Signaturabgleich, KI-Anomalieerkennung und Verhaltensanalyse für vollständigen Schutz.',
      realTime: { title: 'Echtzeit-Erkennung', desc: 'Erkennungslatenz unter 50ms. Jede Anfrage wird in Echtzeit mit Signaturregeln und ML-Modellen analysiert.' },
      aiAnomaly: { title: 'KI-Anomalieerkennung', desc: 'Unsere KI lernt, was für Ihre Apps "normal" ist, und erkennt Abweichungen über Hunderte von Verhaltenssignalen.' },
      behavioral: { title: 'Verhaltensanalyse', desc: 'Benutzerprofilierung, Sitzungsanalyse und unmögliche Reiseerkennung zum Aufspüren raffinierter Angreifer.' },
      apiFirst: { title: 'API-First-Integration', desc: 'Sofort einsatzbereite SDKs für Python, Node.js, Java und Go. Kompatibel mit bestehender Infrastruktur.' },
    },
    howItWorks: {
      sectionTitle: 'Wie Aegis AI funktioniert',
      sectionSubtitle: 'Nahtlose Integration, intelligente Erkennung und automatisierte Reaktion — ohne Verlangsamung Ihres Stacks.',
      step1: { label: 'SCHRITT 1', title: 'Events von überall senden', desc: 'Instrumentieren Sie Ihre Apps mit unserem SDK oder senden Sie HTTP-Events. Keine Infrastruktur erforderlich.', points: ['Native Unterstützung für Python, Node, Java, Go', 'Framework-Middleware Drop-in', 'Events von jeder Plattform senden'] },
      step2: { label: 'SCHRITT 2', title: 'In Echtzeit analysieren', desc: 'Jedes Event durchläuft gleichzeitig Signaturabgleich, Isolation Forests und Verhaltensprofilierung.', points: ['KI-Bewertung on-the-fly', 'Pipeline-Stream-Verarbeitung'] },
      step3: { label: 'SCHRITT 3', title: 'Erkennen & Reagieren', desc: 'Sofortige Alarmweiterleitung an Ihr Team. Automatisches Blockieren, SOAR-Integrationen und Fallverwaltung.', points: ['Automatisierte Reaktions-Playbooks', 'Slack-, Webhook- und E-Mail-Warnungen', 'Untersuchungs-Timelines im Dashboard'] },
    },
    pricing: {
      sectionTitle: 'Transparente Preisgestaltung',
      sectionSubtitle: 'Kostenlos starten. Mit Ihrem Wachstum skalieren. Keine versteckten Gebühren.',
      monthly: 'Monatlich', annual: 'Jährlich', save: '20% sparen',
      tiers: {
        developer: { name: 'Entwickler', price: '0€', period: '/Mo.', desc: 'Für einzelne Entwickler, die die Plattform erkunden.', cta: 'Loslegen', features: ['10K Events/Tag', 'Basis-Erkennung', 'Dashboard-Zugang', 'Community-Support'] },
        growth: { name: 'Wachstum', price: '499€', period: '/Mo.', desc: 'Für wachsende Teams, die produktionsreife Sicherheit benötigen.', cta: 'Kostenlos testen', features: ['1M Events/Tag', 'KI-Anomalieerkennung', 'Webhook-Warnungen', 'Slack-Integration', 'E-Mail-Support'], badge: 'Beliebteste Wahl' },
        business: { name: 'Business', price: '2.499€', period: '/Mo.', desc: 'Für Unternehmen mit erweiterten Sicherheitsanforderungen.', cta: 'Vertrieb kontaktieren', features: ['10M Events/Tag', 'Benutzerdefinierte Regel-Engine', 'Bedrohungsintelligenz', 'Multi-User-RBAC', '90 Tage Aufbewahrung', 'Priorisierter Support'] },
        enterprise: { name: 'Enterprise', price: 'Individuell', period: '', desc: 'Unbegrenzte Skalierung mit Private Cloud und Compliance.', cta: 'Vertrieb kontaktieren', features: ['Unbegrenzte Events', 'Private Cloud Option', 'Benutzerdefinierte KI-Modelle', 'SOC2/DSGVO-Berichte', 'Dediziertes SLA', '24/7-Support'] },
      },
    },
    footer: {
      tagline: 'KI-gestützte Sicherheit für die moderne Cloud. Vertraut von sicherheitsorientierten Engineering-Teams weltweit.',
      product: 'Produkt', company: 'Unternehmen', resources: 'Ressourcen', legal: 'Rechtliches',
      links: { features: 'Funktionen', pricing: 'Preise', changelog: 'Änderungsprotokoll', status: 'Status', about: 'Über uns', blog: 'Blog', careers: 'Karriere', contact: 'Kontakt', docs: 'Dokumentation', apiRef: 'API-Referenz', githubActions: 'GitHub Actions', security: 'Sicherheit', privacy: 'Datenschutzrichtlinie', terms: 'Nutzungsbedingungen', dpa: 'DPA', cookies: 'Cookie-Richtlinie' },
      copy: '© {{year}} Aegis AI. Alle Rechte vorbehalten.',
    },
    theme: { light: 'Helles Design', dark: 'Dunkles Design' },
  },
}

export default de
