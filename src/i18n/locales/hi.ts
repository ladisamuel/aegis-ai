export const hi = {
  translation: {
    nav: {
      features: 'विशेषताएं',
      howItWorks: 'यह कैसे काम करता है',
      pricing: 'मूल्य निर्धारण',
      company: 'कंपनी',
      login: 'लॉग इन',
      getStarted: 'शुरू करें',
    },
    hero: {
      badge: 'अर्ली एक्सेस उपलब्ध',
      title: 'आधुनिक क्लाउड के लिए AI-संचालित घुसपैठ पहचान',
      subtitle: 'रियल-टाइम विसंगति पहचान और व्यवहार विश्लेषण के साथ अपने वेब ऐप्स, API और बैकएंड सिस्टम को सुरक्षित करें।',
      cta: 'डेमो देखें',
      ctaSecondary: 'मुफ्त शुरू करें',
      trustedBy: 'बड़ी कंपनियों के डेवलपर टीमों द्वारा विश्वसनीय',
    },
    features: {
      sectionTitle: 'व्यापक क्लाउड सुरक्षा',
      sectionSubtitle: 'Aegis AI रियल-टाइम सिग्नेचर मिलान, AI विसंगति पहचान और व्यवहार विश्लेषण को एक साथ लाता है।',
      realTime: { title: 'रियल-टाइम पहचान', desc: '50ms से कम पहचान विलंबता। प्रत्येक अनुरोध सिग्नेचर नियमों और ML मॉडल का उपयोग करके रियल-टाइम में विश्लेषित।' },
      aiAnomaly: { title: 'AI विसंगति पहचान', desc: 'हमारा AI आपके ऐप्स के लिए "सामान्य" क्या है यह सीखता है और सैकड़ों व्यवहार संकेतों में विचलन को चिह्नित करता है।' },
      behavioral: { title: 'व्यवहार विश्लेषण', desc: 'उपयोगकर्ता प्रोफाइलिंग, सत्र विश्लेषण और असंभव यात्रा पहचान।' },
      apiFirst: { title: 'API-First एकीकरण', desc: 'Python, Node.js, Java और Go के लिए ड्रॉप-इन SDK। आपके मौजूदा फ्रेमवर्क के साथ काम करता है।' },
    },
    howItWorks: {
      sectionTitle: 'Aegis AI कैसे काम करता है',
      sectionSubtitle: 'निर्बाध एकीकरण, बुद्धिमान पहचान और स्वचालित प्रतिक्रिया।',
      step1: { label: 'चरण 1', title: 'कहीं से भी इवेंट भेजें', desc: 'हमारे SDK से ऐप्स को इंस्ट्रूमेंट करें। कोई इन्फ्रास्ट्रक्चर आवश्यक नहीं।', points: ['Python, Node, Java, Go के लिए मूल समर्थन', 'फ्रेमवर्क मिडलवेयर', 'किसी भी प्लेटफॉर्म से भेजें'] },
      step2: { label: 'चरण 2', title: 'रियल-टाइम में विश्लेषण करें', desc: 'प्रत्येक इवेंट सिग्नेचर मिलान, आइसोलेशन फॉरेस्ट और व्यवहार प्रोफाइलिंग से गुजरता है।', points: ['ऑन-द-फ्लाई AI स्कोरिंग', 'पाइपलाइन स्ट्रीम प्रोसेसिंग'] },
      step3: { label: 'चरण 3', title: 'पहचानें और प्रतिक्रिया दें', desc: 'आपकी टीम को तुरंत अलर्ट। ऑटो-ब्लॉकिंग, SOAR एकीकरण और केस प्रबंधन।', points: ['स्वचालित प्रतिक्रिया प्लेबुक', 'Slack, webhook और ईमेल अलर्ट', 'जांच टाइमलाइन'] },
    },
    pricing: {
      sectionTitle: 'पारदर्शी मूल्य निर्धारण',
      sectionSubtitle: 'मुफ्त शुरू करें। बढ़ते हुए स्केल करें। कोई आश्चर्यजनक शुल्क नहीं।',
      monthly: 'मासिक', annual: 'वार्षिक', save: '20% बचाएं',
      tiers: {
        developer: { name: 'डेवलपर', price: '$0', period: '/माह', desc: 'प्लेटफॉर्म का पता लगाने वाले व्यक्तिगत डेवलपर्स के लिए।', cta: 'शुरू करें', features: ['10K इवेंट/दिन', 'बेसिक रूल पहचान', 'डैशबोर्ड एक्सेस', 'समुदाय समर्थन'] },
        growth: { name: 'विकास', price: '$499', period: '/माह', desc: 'उत्पादन-ग्रेड सुरक्षा की जरूरत वाली बढ़ती टीमों के लिए।', cta: 'मुफ्त ट्रायल', features: ['1M इवेंट/दिन', 'AI विसंगति पहचान', 'Webhook अलर्ट', 'Slack एकीकरण', 'ईमेल समर्थन'], badge: 'सबसे लोकप्रिय' },
        business: { name: 'बिजनेस', price: '$2,499', period: '/माह', desc: 'उन्नत सुरक्षा आवश्यकताओं वाली कंपनियों के लिए।', cta: 'बिक्री से संपर्क करें', features: ['10M इवेंट/दिन', 'कस्टम रूल इंजन', 'खतरा खुफिया', 'मल्टी-यूजर RBAC', '90-दिन अवधारण', 'प्राथमिकता समर्थन'] },
        enterprise: { name: 'एंटरप्राइज', price: 'कस्टम', period: '', desc: 'निजी क्लाउड और अनुपालन के साथ असीमित स्केल।', cta: 'बिक्री से संपर्क करें', features: ['असीमित इवेंट', 'निजी क्लाउड विकल्प', 'कस्टम AI मॉडल', 'SOC2/GDPR रिपोर्ट', 'समर्पित SLA', '24/7 समर्थन'] },
      },
    },
    footer: {
      tagline: 'आधुनिक क्लाउड के लिए AI-संचालित सुरक्षा। दुनिया भर में सुरक्षा-प्रथम इंजीनियरिंग टीमों द्वारा विश्वसनीय।',
      product: 'उत्पाद', company: 'कंपनी', resources: 'संसाधन', legal: 'कानूनी',
      links: { features: 'विशेषताएं', pricing: 'मूल्य निर्धारण', changelog: 'परिवर्तन लॉग', status: 'स्थिति', about: 'हमारे बारे में', blog: 'ब्लॉग', careers: 'करियर', contact: 'संपर्क', docs: 'दस्तावेज़ीकरण', apiRef: 'API संदर्भ', githubActions: 'GitHub Actions', security: 'सुरक्षा', privacy: 'गोपनीयता नीति', terms: 'सेवा की शर्तें', dpa: 'DPA', cookies: 'कुकी नीति' },
      copy: '© {{year}} Aegis AI. सर्वाधिकार सुरक्षित।',
    },
    theme: { light: 'लाइट मोड', dark: 'डार्क मोड' },
  },
}

export const ko = {
  translation: {
    nav: {
      features: '기능',
      howItWorks: '작동 방식',
      pricing: '요금제',
      company: '회사',
      login: '로그인',
      getStarted: '시작하기',
    },
    hero: {
      badge: '얼리 액세스 이용 가능',
      title: '현대 클라우드를 위한 AI 기반 침입 탐지',
      subtitle: '실시간 이상 탐지와 행동 분석으로 웹 앱, API, 백엔드 시스템을 보호하세요.',
      cta: '데모 보기',
      ctaSecondary: '무료로 시작',
      trustedBy: '주요 기업의 개발자 팀이 신뢰합니다',
    },
    features: {
      sectionTitle: '포괄적인 클라우드 보호',
      sectionSubtitle: 'Aegis AI는 실시간 서명 매칭, AI 이상 탐지, 행동 분석을 결합하여 모든 위협으로부터 보호합니다.',
      realTime: { title: '실시간 탐지', desc: '50ms 미만의 탐지 지연 시간. 서명 규칙과 ML 모델을 사용하여 모든 요청을 실시간으로 분석합니다.' },
      aiAnomaly: { title: 'AI 이상 탐지', desc: 'AI가 앱의 "정상" 상태를 학습하여 수백 가지 행동 신호에서 이탈을 감지합니다.' },
      behavioral: { title: '행동 분석', desc: '사용자 프로파일링, 세션 분석, 불가능한 이동 탐지로 정교한 공격자를 식별합니다.' },
      apiFirst: { title: 'API-First 통합', desc: 'Python, Node.js, Java, Go용 드롭인 SDK. 기존 프레임워크 및 인프라와 호환됩니다.' },
    },
    howItWorks: {
      sectionTitle: 'Aegis AI 작동 방식',
      sectionSubtitle: '원활한 통합, 지능형 탐지, 자동화된 대응 — 스택을 느리게 하지 않고.',
      step1: { label: '1단계', title: '어디서든 이벤트 전송', desc: 'SDK로 앱을 계측하거나 HTTP 이벤트를 전송하세요. 인프라 불필요.', points: ['Python, Node, Java, Go 기본 지원', '프레임워크 미들웨어 드롭인', '모든 플랫폼에서 이벤트 전송'] },
      step2: { label: '2단계', title: '실시간 분석', desc: '모든 이벤트가 서명 매칭, 격리 포레스트, 행동 프로파일링을 동시에 통과합니다.', points: ['즉석 AI 스코어링', '파이프라인 스트림 처리'] },
      step3: { label: '3단계', title: '탐지 및 대응', desc: '팀에 즉시 경보 전송. 자동 차단, SOAR 통합, 케이스 관리 내장.', points: ['자동화된 대응 플레이북', 'Slack, 웹훅, 이메일 알림', '대시보드 조사 타임라인'] },
    },
    pricing: {
      sectionTitle: '투명한 요금제',
      sectionSubtitle: '무료로 시작하세요. 성장에 맞게 확장하세요. 예상치 못한 요금 없음.',
      monthly: '월간', annual: '연간', save: '20% 절약',
      tiers: {
        developer: { name: '개발자', price: '$0', period: '/월', desc: '플랫폼을 탐색하는 개인 개발자를 위한 플랜.', cta: '시작하기', features: ['하루 10K 이벤트', '기본 규칙 탐지', '대시보드 액세스', '커뮤니티 지원'] },
        growth: { name: '성장', price: '$499', period: '/월', desc: '프로덕션급 보안이 필요한 성장하는 팀을 위한 플랜.', cta: '무료 체험', features: ['하루 1M 이벤트', 'AI 이상 탐지', '웹훅 알림', 'Slack 통합', '이메일 지원'], badge: '가장 인기 있음' },
        business: { name: '비즈니스', price: '$2,499', period: '/월', desc: '고급 보안 요구사항이 있는 기업을 위한 플랜.', cta: '영업팀 문의', features: ['하루 10M 이벤트', '커스텀 규칙 엔진', '위협 인텔리전스', '멀티 사용자 RBAC', '90일 보존', '우선 지원'] },
        enterprise: { name: '엔터프라이즈', price: '맞춤형', period: '', desc: '프라이빗 클라우드와 컴플라이언스를 갖춘 무제한 확장.', cta: '영업팀 문의', features: ['무제한 이벤트', '프라이빗 클라우드 옵션', '커스텀 AI 모델', 'SOC2/GDPR 보고서', '전용 SLA', '24/7 지원'] },
      },
    },
    footer: {
      tagline: '현대 클라우드를 위한 AI 기반 보안. 전 세계 보안 중심 엔지니어링 팀이 신뢰합니다.',
      product: '제품', company: '회사', resources: '리소스', legal: '법적 고지',
      links: { features: '기능', pricing: '요금제', changelog: '변경 로그', status: '상태', about: '소개', blog: '블로그', careers: '채용', contact: '문의', docs: '문서', apiRef: 'API 참조', githubActions: 'GitHub Actions', security: '보안', privacy: '개인정보 보호정책', terms: '서비스 약관', dpa: 'DPA', cookies: '쿠키 정책' },
      copy: '© {{year}} Aegis AI. 모든 권리 보유.',
    },
    theme: { light: '라이트 모드', dark: '다크 모드' },
  },
}

export default hi
