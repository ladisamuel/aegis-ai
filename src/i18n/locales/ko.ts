const ko = {
  translation: {
    nav: { features: '기능', howItWorks: '작동 방식', pricing: '요금제', company: '회사', login: '로그인', getStarted: '시작하기' },
    hero: { badge: '얼리 액세스 이용 가능', title: '현대 클라우드를 위한 AI 기반 침입 탐지', subtitle: '실시간 이상 탐지와 행동 분석으로 웹 앱, API, 백엔드 시스템을 보호하세요.', cta: '데모 보기', ctaSecondary: '무료로 시작', trustedBy: '주요 기업의 개발자 팀이 신뢰합니다' },
    features: {
      sectionTitle: '포괄적인 클라우드 보호',
      sectionSubtitle: 'Aegis AI는 실시간 서명 매칭, AI 이상 탐지, 행동 분석을 결합하여 모든 위협으로부터 보호합니다.',
      realTime: { title: '실시간 탐지', desc: '50ms 미만의 탐지 지연 시간. 모든 요청을 실시간으로 분석합니다.' },
      aiAnomaly: { title: 'AI 이상 탐지', desc: 'AI가 앱의 정상 상태를 학습하여 수백 가지 행동 신호에서 이탈을 감지합니다.' },
      behavioral: { title: '행동 분석', desc: '사용자 프로파일링, 세션 분석, 불가능한 이동 탐지.' },
      apiFirst: { title: 'API-First 통합', desc: 'Python, Node.js, Java, Go용 드롭인 SDK.' },
    },
    howItWorks: {
      sectionTitle: 'Aegis AI 작동 방식',
      sectionSubtitle: '원활한 통합, 지능형 탐지, 자동화된 대응.',
      step1: { label: '1단계', title: '어디서든 이벤트 전송', desc: 'SDK로 앱을 계측하거나 HTTP 이벤트를 전송하세요.', points: ['Python, Node, Java, Go 기본 지원', '프레임워크 미들웨어 드롭인', '모든 플랫폼에서 이벤트 전송'] },
      step2: { label: '2단계', title: '실시간 분석', desc: '모든 이벤트가 서명 매칭, 격리 포레스트, 행동 프로파일링을 동시에 통과합니다.', points: ['즉석 AI 스코어링', '파이프라인 스트림 처리'] },
      step3: { label: '3단계', title: '탐지 및 대응', desc: '팀에 즉시 경보 전송. 자동 차단, SOAR 통합, 케이스 관리 내장.', points: ['자동화된 대응 플레이북', 'Slack, 웹훅, 이메일 알림', '대시보드 조사 타임라인'] },
    },
    pricing: {
      sectionTitle: '투명한 요금제', sectionSubtitle: '무료로 시작하세요. 성장에 맞게 확장하세요.', monthly: '월간', annual: '연간', save: '20% 절약',
      tiers: {
        developer: { name: '개발자', price: '$0', period: '/월', desc: '플랫폼을 탐색하는 개인 개발자를 위한 플랜.', cta: '시작하기', features: ['하루 10K 이벤트', '기본 규칙 탐지', '대시보드 액세스', '커뮤니티 지원'] },
        growth: { name: '성장', price: '$499', period: '/월', desc: '프로덕션급 보안이 필요한 성장하는 팀.', cta: '무료 체험', features: ['하루 1M 이벤트', 'AI 이상 탐지', '웹훅 알림', 'Slack 통합', '이메일 지원'], badge: '가장 인기 있음' },
        business: { name: '비즈니스', price: '$2,499', period: '/월', desc: '고급 보안 요구사항이 있는 기업.', cta: '영업팀 문의', features: ['하루 10M 이벤트', '커스텀 규칙 엔진', '위협 인텔리전스', '멀티 사용자 RBAC', '90일 보존', '우선 지원'] },
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

export default ko
