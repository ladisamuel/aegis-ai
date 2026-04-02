// First, let's create the main project files
// File: src/App.tsx
import React, { useState, useEffect } from 'react';
import { 
  Shield, Code, Terminal, Zap, Database, Lock, 
  ChevronRight, Copy, Check, Moon, Sun, Menu, X,
  Server, Activity, AlertTriangle, FileJson, Settings,
  ArrowRight, ExternalLink, Github, BookOpen, Layers,
  Clock, RefreshCw, Eye, Filter, Globe, Brain
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Types
interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

interface AlertProps {
  type?: 'info' | 'warning' | 'success' | 'error';
  title?: string;
  children: React.ReactNode;
}

// Navigation Data
const navSections: NavSection[] = [
  {
    title: 'Getting Started',
    items: [
      { id: 'introduction', label: 'Introduction', icon: <BookOpen size={16} /> },
      { id: 'installation', label: 'Installation', icon: <Terminal size={16} /> },
      { id: 'quickstart', label: 'Quick Start', icon: <Zap size={16} /> }
    ]
  },
  {
    title: 'SDK Usage',
    items: [
      { id: 'manual-integration', label: 'Manual Integration', icon: <Code size={16} /> },
      { id: 'event-structure', label: 'Event Structure', icon: <FileJson size={16} /> },
      { id: 'custom-events', label: 'Custom Events', icon: <Activity size={16} /> }
    ]
  },
  {
    title: 'Frameworks',
    items: [
      { id: 'django', label: 'Django', icon: <Server size={16} /> },
      { id: 'fastapi', label: 'FastAPI', icon: <Zap size={16} /> },
      { id: 'flask', label: 'Flask', icon: <Layers size={16} /> }
    ]
  },
  {
    title: 'Architecture',
    items: [
      { id: 'system-overview', label: 'System Overview', icon: <Globe size={16} /> },
      { id: 'batching', label: 'Batching & Retry', icon: <Database size={16} /> },
      { id: 'security', label: 'Security', icon: <Lock size={16} /> }
    ]
  },
  {
    title: 'Reference',
    items: [
      { id: 'api-reference', label: 'API Reference', icon: <Code size={16} /> },
      { id: 'configuration', label: 'Configuration', icon: <Settings size={16} /> },
      { id: 'troubleshooting', label: 'Troubleshooting', icon: <AlertTriangle size={16} /> }
    ]
  }
];

// Code Block Component
const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'python', filename = '' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getLanguageColor = () => {
    const colors: Record<string, string> = {
      python: 'text-yellow-400',
      javascript: 'text-yellow-300',
      java: 'text-orange-400',
      go: 'text-cyan-400',
      yaml: 'text-pink-400',
      json: 'text-green-400',
      bash: 'text-gray-300',
      typescript: 'text-blue-400'
    };
    return colors[language] || 'text-blue-400';
  };

  return (
    <div className="code-block my-6 overflow-hidden bg-[#0d1117] border border-[#30363d] rounded-lg relative group">
      <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-[#30363d]">
        <div className="flex items-center gap-2">
          <span className={`text-xs font-medium ${getLanguageColor()}`}>{language}</span>
          {filename && (
            <span className="text-xs text-gray-500 border-l border-gray-700 pl-2">{filename}</span>
          )}
        </div>
        <button 
          onClick={handleCopy}
          className="flex items-center gap-1 px-2 py-1 text-xs text-gray-400 hover:text-white bg-gray-800 rounded transition-all opacity-0 group-hover:opacity-100"
        >
          {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono leading-relaxed">
        <code className="text-gray-300">{code}</code>
      </pre>
    </div>
  );
};

// Alert Component
const Alert: React.FC<AlertProps> = ({ type = 'info', title, children }) => {
  const styles = {
    info: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
    warning: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
    success: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
    error: 'bg-red-500/10 border-red-500/30 text-red-400'
  };

  const icons = {
    info: <BookOpen size={18} />,
    warning: <AlertTriangle size={18} />,
    success: <Check size={18} />,
    error: <X size={18} />
  };

  return (
    <div className={`my-6 p-4 rounded-lg border ${styles[type]}`}>
      <div className="flex items-start gap-3">
        <div className="mt-0.5">{icons[type]}</div>
        <div className="flex-1">
          {title && <h4 className="font-semibold mb-1">{title}</h4>}
          <div className="text-sm opacity-90">{children}</div>
        </div>
      </div>
    </div>
  );
};

// Feature Card Component
const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <motion.div 
    whileHover={{ y: -2, boxShadow: '0 10px 40px -10px rgba(56, 189, 248, 0.3)' }}
    className="p-6 rounded-xl bg-slate-800 border border-slate-700 transition-all"
  >
    <div className="mb-3">{icon}</div>
    <h3 className="font-semibold mb-2 text-white">{title}</h3>
    <p className="text-sm text-slate-400">{desc}</p>
  </motion.div>
);

// Flow Diagram Component
const FlowDiagram: React.FC = () => (
  <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 mb-8">
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
      <div className="flex flex-col items-center p-4 bg-slate-900 rounded-lg border border-slate-700 w-full md:w-40">
        <Code size={24} className="text-sky-400 mb-2" />
        <span className="font-semibold text-white">Your App</span>
        <span className="text-xs text-slate-500 mt-1">Request/Response</span>
      </div>
      
      <ArrowRight className="text-slate-600 hidden md:block animate-pulse" />
      <div className="h-8 w-0.5 bg-slate-700 md:hidden animate-pulse"></div>
      
      <div className="flex flex-col items-center p-4 bg-slate-900 rounded-lg border border-sky-500/30 w-full md:w-40 relative">
        <div className="absolute -top-2 -right-2 w-3 h-3 bg-sky-500 rounded-full animate-ping"></div>
        <Shield size={24} className="text-sky-400 mb-2" />
        <span className="font-semibold text-sky-400">Aegis SDK</span>
        <span className="text-xs text-slate-500 mt-1">Capture & Enrich</span>
      </div>
      
      <ArrowRight className="text-slate-600 hidden md:block animate-pulse" />
      <div className="h-8 w-0.5 bg-slate-700 md:hidden animate-pulse"></div>
      
      <div className="flex flex-col items-center p-4 bg-slate-900 rounded-lg border border-slate-700 w-full md:w-40">
        <Database size={24} className="text-amber-400 mb-2" />
        <span className="font-semibold text-white">Queue</span>
        <span className="text-xs text-slate-500 mt-1">Non-blocking</span>
      </div>
      
      <ArrowRight className="text-slate-600 hidden md:block animate-pulse" />
      <div className="h-8 w-0.5 bg-slate-700 md:hidden animate-pulse"></div>
      
      <div className="flex flex-col items-center p-4 bg-slate-900 rounded-lg border border-slate-700 w-full md:w-40">
        <Layers size={24} className="text-purple-400 mb-2" />
        <span className="font-semibold text-white">Batch</span>
        <span className="text-xs text-slate-500 mt-1">Compress & Optimize</span>
      </div>
      
      <ArrowRight className="text-slate-600 hidden md:block animate-pulse" />
      <div className="h-8 w-0.5 bg-slate-700 md:hidden animate-pulse"></div>
      
      <div className="flex flex-col items-center p-4 bg-slate-900 rounded-lg border border-emerald-500/30 w-full md:w-40">
        <Server size={24} className="text-emerald-400 mb-2" />
        <span className="font-semibold text-emerald-400">Aegis IDS</span>
        <span className="text-xs text-slate-500 mt-1">AI Analysis</span>
      </div>
    </div>
  </div>
);

// Main Documentation Content Component
const DocumentationContent: React.FC = () => (
  <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
    
    {/* Introduction */}
    <section id="introduction" className="scroll-mt-20">
      <div className="mb-8">
        <span className="text-sky-400 text-sm font-semibold tracking-wider uppercase">Getting Started</span>
        <h1 className="text-4xl font-bold mt-2 mb-4 text-white">What is Aegis IDS?</h1>
        <p className="text-xl text-slate-400 leading-relaxed">
          Aegis IDS is an AI-powered Intrusion Detection System that provides real-time security monitoring 
          for modern cloud applications. Our lightweight Agent SDK seamlessly integrates into your backend 
          to capture, analyze, and alert on security events without impacting performance.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 my-8">
        <FeatureCard 
          icon={<Shield className="text-emerald-400" size={24} />}
          title="Real-time Protection"
          desc="Detect threats as they happen with sub-second latency"
        />
        <FeatureCard 
          icon={<Zap className="text-amber-400" size={24} />}
          title="Zero Performance Impact"
          desc="Non-blocking async processing keeps your app fast"
        />
        <FeatureCard 
          icon={<Brain className="text-purple-400" size={24} />}
          title="AI-Powered Analysis"
          desc="Machine learning models identify anomalous patterns"
        />
      </div>

      <Alert type="info" title="Multi-Language Support">
        Aegis IDS Agent SDK supports Python, Node.js, Java, and Go. This documentation focuses on Python SDK (aegis-ids). 
        For other languages, check our GitHub repositories.
      </Alert>
    </section>

    {/* Installation */}
    <section id="installation" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-white">
        <span className="p-2 bg-sky-500/20 rounded-lg text-sky-400"><Terminal size={24} /></span>
        Installation
      </h2>
      
      <p className="text-slate-400 mb-6">
        Install the Aegis IDS SDK using pip. The base package includes core functionality with minimal dependencies.
      </p>

      <CodeBlock code="pip install aegis-ids" language="bash" />

      <h3 className="text-xl font-semibold mt-8 mb-4 text-white">Framework-Specific Installation</h3>
      <p className="text-slate-400 mb-4">
        Install with optional dependencies for your specific web framework:
      </p>

      <CodeBlock 
        language="bash" 
        code={`# Django support
pip install aegis-ids[django]

# FastAPI support  
pip install aegis-ids[fastapi]

# Flask support
pip install aegis-ids[flask]

# All frameworks
pip install aegis-ids[all]`} 
      />

      <h3 className="text-xl font-semibold mt-8 mb-4 text-white">Environment Setup</h3>
      <p className="text-slate-400 mb-4">
        Configure your environment variables before initializing the SDK:
      </p>

      <CodeBlock 
        language="bash" 
        filename=".env"
        code={`# Required
AEGIS_API_KEY=your_api_key_here
AEGIS_ENDPOINT=https://api.aegis-ids.com/v1/events

# Optional
AEGIS_BATCH_SIZE=100
AEGIS_FLUSH_INTERVAL=5
AEGIS_DEBUG=false`} 
      />
    </section>

    {/* Quick Start */}
    <section id="quickstart" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-white">
        <span className="p-2 bg-amber-500/20 rounded-lg text-amber-400"><Zap size={24} /></span>
        Quick Start
      </h2>

      <div className="space-y-6">
        <div className="flex gap-4 items-start">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center font-semibold">1</div>
          <div className="flex-1">
            <h3 className="font-semibold mb-2 text-white">Initialize the Client</h3>
            <CodeBlock 
              language="python" 
              filename="main.py"
              code={`from aegis_ids import AegisClient

# Initialize with environment variables
client = AegisClient()

# Or explicitly
client = AegisClient(
    api_key="your_api_key",
    endpoint="https://api.aegis-ids.com/v1/events",
    batch_size=50,
    flush_interval=5.0
)`} 
            />
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center font-semibold">2</div>
          <div className="flex-1">
            <h3 className="font-semibold mb-2 text-white">Capture Your First Event</h3>
            <CodeBlock 
              language="python" 
              code={`from aegis_ids import capture_event

# Capture a simple event
capture_event({
    "event_type": "user_login",
    "user_id": "user_123",
    "ip_address": "192.168.1.1",
    "metadata": {
        "user_agent": "Mozilla/5.0...",
        "login_method": "password"
    }
})`} 
            />
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center font-semibold">3</div>
          <div className="flex-1">
            <h3 className="font-semibold mb-2 text-white">Verify in Dashboard</h3>
            <p className="text-slate-400">
              Events appear in your Aegis IDS dashboard within seconds. Navigate to 
              <strong> Events → Live Stream</strong> to see real-time event flow.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Manual Integration */}
    <section id="manual-integration" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-white">
        <span className="p-2 bg-purple-500/20 rounded-lg text-purple-400"><Code size={24} /></span>
        Manual Integration
      </h2>

      <p className="text-slate-400 mb-6">
        For frameworks without native middleware support or custom implementations, use the manual integration API.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4 text-white">Basic Event Capture</h3>
      <CodeBlock 
        language="python" 
        code={`from aegis_ids import capture_event, EventPriority

# Simple event
capture_event({
    "event_type": "database_query",
    "query": "SELECT * FROM users",
    "duration_ms": 45
})

# With priority (affects processing queue)
capture_event({
    "event_type": "security_alert",
    "alert_type": "brute_force_attempt",
    "source_ip": "10.0.0.1"
}, priority=EventPriority.HIGH)`} 
      />

      <h3 className="text-xl font-semibold mt-8 mb-4 text-white">Context Managers</h3>
      <p className="text-slate-400 mb-4">
        Use context managers for automatic event tracking with timing:
      </p>
      <CodeBlock 
        language="python" 
        code={`from aegis_ids import track_operation

# Automatically captures duration and success/failure
with track_operation("external_api_call", endpoint="/api/v1/data"):
    response = requests.get("https://api.external.com/data")
    response.raise_for_status()`} 
      />
    </section>

    {/* Event Structure */}
    <section id="event-structure" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-white">
        <span className="p-2 bg-green-500/20 rounded-lg text-green-400"><FileJson size={24} /></span>
        Event Structure
      </h2>

      <p className="text-slate-400 mb-6">
        Events sent to Aegis IDS follow a standardized schema. The SDK automatically enriches events with 
        additional metadata before transmission.
      </p>

      <CodeBlock 
        language="json" 
        filename="Enriched Event Payload"
        code={`{
  "timestamp": "2024-01-15T10:30:00.000Z",
  "event_id": "evt_2vPqN5L8wR3mK9x",
  "tenant_id": "tenant_001",
  "app_id": "production-api",
  "environment": "production",
  "source": "django",
  "event_type": "http_request",
  "priority": "normal",
  "request": {
    "method": "POST",
    "url": "/api/v1/auth/login",
    "headers": {
      "user-agent": "Mozilla/5.0...",
      "content-type": "application/json",
      "x-request-id": "req_abc123"
    },
    "ip_address": "192.168.1.100",
    "geo": {
      "country": "US",
      "city": "San Francisco",
      "latitude": 37.7749,
      "longitude": -122.4194
    }
  },
  "response": {
    "status_code": 200,
    "duration_ms": 145,
    "bytes_out": 2048
  },
  "network": {
    "bytes_in": 512,
    "bytes_out": 2048,
    "protocol": "HTTPS"
  },
  "risk_score": 0.15,
  "ai_analysis": {
    "anomaly_detected": false,
    "threat_indicators": []
  }
}`} 
      />

      <Alert type="warning" title="Automatic Sanitization">
        Sensitive headers (authorization, cookie, x-api-key) are automatically redacted before transmission. 
        Configure additional sanitization rules in your SDK settings.
      </Alert>
    </section>

    {/* Custom Events */}
    <section id="custom-events" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-white">
        <span className="p-2 bg-pink-500/20 rounded-lg text-pink-400"><Activity size={24} /></span>
        Custom Events
      </h2>

      <p className="text-slate-400 mb-6">
        Define custom event types for business-logic specific monitoring beyond HTTP requests.
      </p>

      <CodeBlock 
        language="python" 
        code={`from aegis_ids import capture_event
from datetime import datetime

# Business logic event
capture_event({
    "event_type": "payment_processed",
    "timestamp": datetime.utcnow().isoformat(),
    "data": {
        "order_id": "ord_789",
        "amount": 99.99,
        "currency": "USD",
        "payment_method": "credit_card",
        "gateway": "stripe"
    },
    "user_context": {
        "user_id": "usr_456",
        "account_tier": "premium",
        "registration_date": "2023-06-01"
    }
})`} 
      />
    </section>

    {/* Django */}
    <section id="django" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-white">
        <span className="p-2 bg-green-600/20 rounded-lg text-green-500"><Server size={24} /></span>
        Django Integration
      </h2>

      <p className="text-slate-400 mb-6">
        Aegis IDS provides seamless Django middleware for automatic request/response capture.
      </p>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">1. Add Middleware</h3>
        <CodeBlock 
          language="python" 
          filename="settings.py"
          code={`MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    # ... other middleware
    'aegis_ids.integrations.django.middleware.AegisMiddleware',  # Add at the end
]`} 
        />

        <h3 className="text-lg font-semibold text-white">2. Configure in Settings</h3>
        <CodeBlock 
          language="python" 
          filename="settings.py"
          code={`# Aegis IDS Configuration
AEGIS_IDS = {
    'API_KEY': os.environ.get('AEGIS_API_KEY'),
    'ENDPOINT': 'https://api.aegis-ids.com/v1/events',
    'CAPTURE_BODY': False,  # Set True to capture request/response bodies
    'SENSITIVE_HEADERS': ['authorization', 'cookie', 'x-csrf-token'],
    'IGNORE_PATHS': ['/health', '/static/', '/media/'],
}`} 
        />
      </div>
    </section>

    {/* FastAPI */}
    <section id="fastapi" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-white">
        <span className="p-2 bg-teal-500/20 rounded-lg text-teal-400"><Zap size={24} /></span>
        FastAPI Integration
      </h2>

      <p className="text-slate-400 mb-6">
        FastAPI middleware support with dependency injection compatibility.
      </p>

      <CodeBlock 
        language="python" 
        filename="main.py"
        code={`from fastapi import FastAPI
from aegis_ids.integrations.fastapi import AegisMiddleware

app = FastAPI()

# Add middleware
app.add_middleware(
    AegisMiddleware,
    api_key=os.environ.get('AEGIS_API_KEY'),
    endpoint='https://api.aegis-ids.com/v1/events',
    capture_body=True,
    sensitive_fields=['password', 'token', 'secret']
)

@app.get("/")
async def root():
    return {"message": "Protected by Aegis IDS"}`} 
      />
    </section>

    {/* Flask */}
    <section id="flask" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-white">
        <span className="p-2 bg-gray-500/20 rounded-lg text-gray-400"><Layers size={24} /></span>
        Flask Integration
      </h2>

      <CodeBlock 
        language="python" 
        filename="app.py"
        code={`from flask import Flask
from aegis_ids.integrations.flask import init_app

app = Flask(__name__)

# Initialize Aegis IDS
aegis = init_app(
    app,
    api_key=os.environ.get('AEGIS_API_KEY'),
    endpoint='https://api.aegis-ids.com/v1/events',
    config={
        'capture_template_context': True,
        'ignore_blueprints': ['static']
    }
)

@app.route('/')
def hello():
    return 'Hello, Aegis IDS!'`} 
      />
    </section>

    {/* System Overview */}
    <section id="system-overview" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-white">
        <span className="p-2 bg-blue-500/20 rounded-lg text-blue-400"><Globe size={24} /></span>
        System Architecture
      </h2>

      <p className="text-slate-400 mb-8">
        Understanding how events flow from your application to the Aegis IDS analysis engine.
      </p>

      <FlowDiagram />

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-slate-800 rounded-lg border border-slate-700">
          <h3 className="font-semibold mb-3 flex items-center gap-2 text-white">
            <Clock size={18} className="text-sky-400" />
            Event Lifecycle
          </h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li className="flex items-start gap-2">
              <ChevronRight size={16} className="text-sky-400 mt-0.5" />
              <span>Capture: Middleware intercepts request/response</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight size={16} className="text-sky-400 mt-0.5" />
              <span>Enrich: Add timestamp, geo-location, risk context</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight size={16} className="text-sky-400 mt-0.5" />
              <span>Queue: Place in memory queue (non-blocking)</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight size={16} className="text-sky-400 mt-0.5" />
              <span>Batch: Group events for efficient transmission</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight size={16} className="text-sky-400 mt-0.5" />
              <span>Transmit: Async HTTP/2 to Aegis IDS API</span>
            </li>
          </ul>
        </div>
        
        <div className="p-6 bg-slate-800 rounded-lg border border-slate-700">
          <h3 className="font-semibold mb-3 flex items-center gap-2 text-white">
            <RefreshCw size={18} className="text-amber-400" />
            Reliability Features
          </h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li className="flex items-start gap-2">
              <ChevronRight size={16} className="text-amber-400 mt-0.5" />
              <span>Exponential backoff retry (max 5 attempts)</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight size={16} className="text-amber-400 mt-0.5" />
              <span>Circuit breaker pattern for API failures</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight size={16} className="text-amber-400 mt-0.5" />
              <span>Local disk persistence for critical events</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight size={16} className="text-amber-400 mt-0.5" />
              <span>Automatic failover to secondary endpoints</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    {/* Batching */}
    <section id="batching" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-white">
        <span className="p-2 bg-amber-500/20 rounded-lg text-amber-400"><Database size={24} /></span>
        Batching & Retry Logic
      </h2>

      <p className="text-slate-400 mb-6">
        The SDK implements intelligent batching and retry mechanisms to ensure reliable delivery 
        without impacting application performance.
      </p>

      <CodeBlock 
        language="python" 
        filename="Advanced Configuration"
        code={`from aegis_ids import AegisClient, BatchPolicy, RetryPolicy

client = AegisClient(
    # Batching configuration
    batch_policy=BatchPolicy(
        max_size=100,           # Max events per batch
        max_bytes=1024*1024,    # Max 1MB per batch
        flush_interval=5.0,     # Flush every 5 seconds
        compression=True        # Enable gzip compression
    ),
    
    # Retry configuration
    retry_policy=RetryPolicy(
        max_attempts=5,
        base_delay=1.0,         # Initial retry delay (seconds)
        max_delay=60.0,         # Maximum retry delay
        exponential_base=2.0,   # Exponential backoff multiplier
        retryable_statuses=[429, 500, 502, 503, 504]
    ),
    
    # Queue configuration
    max_queue_size=10000,       # Memory queue limit
    overflow_policy='drop_oldest'  # or 'block', 'drop_latest'
)`} 
      />

      <Alert type="info" title="Performance Tuning">
        For high-throughput applications (&gt;1000 req/s), increase batch_size to 500 and flush_interval to 10s. 
        Monitor queue saturation metrics in your dashboard.
      </Alert>
    </section>

    {/* Security */}
    <section id="security" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-white">
        <span className="p-2 bg-red-500/20 rounded-lg text-red-400"><Lock size={24} /></span>
        Security & Sanitization
      </h2>

      <p className="text-slate-400 mb-6">
        Security-first design ensures sensitive data never leaves your infrastructure.
      </p>

      <div className="space-y-6">
        <div className="p-6 bg-slate-800 rounded-lg border border-slate-700">
          <h3 className="font-semibold mb-4 flex items-center gap-2 text-white">
            <Eye size={18} />
            Automatic Redaction
          </h3>
          <p className="text-sm text-slate-400 mb-4">
            The following headers and fields are automatically redacted:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm font-mono">
            {['authorization', 'cookie', 'x-api-key', 'x-auth-token', 'password', 'secret', 'token', 'credit_card'].map(item => (
              <span key={item} className="px-2 py-1 bg-red-500/10 text-red-400 rounded border border-red-500/20">
                {item}
              </span>
            ))}
          </div>
        </div>

        <CodeBlock 
          language="python" 
          filename="Custom Sanitization"
          code={`from aegis_ids import SanitizationRule

# Add custom sanitization rules
client.add_sanitization_rule(
    SanitizationRule(
        field_pattern=r'.*password.*',
        action='redact',
        replacement='[REDACTED]'
    )
)

# Or use built-in PII detector
client.enable_pii_detection([
    'email', 'phone', 'ssn', 'credit_card'
])`} 
        />
      </div>
    </section>

    {/* API Reference */}
    <section id="api-reference" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-white">
        <span className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400"><Code size={24} /></span>
        API Reference
      </h2>

      <div className="space-y-8">
        <div className="border border-slate-700 rounded-lg overflow-hidden">
          <div className="bg-slate-800 px-4 py-3 border-b border-slate-700 flex items-center justify-between">
            <code className="text-sky-400 font-mono">capture_event(event, priority='normal')</code>
            <span className="text-xs text-slate-500">Function</span>
          </div>
          <div className="p-4">
            <p className="text-sm text-slate-400 mb-4">
              Capture a single event and add it to the processing queue.
            </p>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b border-slate-700">
                  <th className="pb-2 text-slate-300">Parameter</th>
                  <th className="pb-2 text-slate-300">Type</th>
                  <th className="pb-2 text-slate-300">Description</th>
                </tr>
              </thead>
              <tbody className="text-slate-400">
                <tr className="border-b border-slate-800/50">
                  <td className="py-2 font-mono text-sky-400">event</td>
                  <td className="py-2">dict</td>
                  <td className="py-2">Event data dictionary (required)</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sky-400">priority</td>
                  <td className="py-2">EventPriority</td>
                  <td className="py-2">LOW, NORMAL, HIGH, CRITICAL</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="border border-slate-700 rounded-lg overflow-hidden">
          <div className="bg-slate-800 px-4 py-3 border-b border-slate-700 flex items-center justify-between">
            <code className="text-sky-400 font-mono">AegisClient</code>
            <span className="text-xs text-slate-500">Class</span>
          </div>
          <div className="p-4">
            <p className="text-sm text-slate-400 mb-4">
              Main client class for advanced configuration and control.
            </p>
            <CodeBlock 
              language="python" 
              code={`# Methods
client.start()              # Start background threads
client.stop(timeout=30)     # Graceful shutdown
client.flush()              # Force flush queue
client.get_stats()          # Get queue/metrics stats
client.health_check()       # Verify API connectivity`} 
            />
          </div>
        </div>
      </div>
    </section>

    {/* Configuration */}
    <section id="configuration" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-white">
        <span className="p-2 bg-gray-500/20 rounded-lg text-gray-400"><Settings size={24} /></span>
        Configuration Options
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-slate-700 rounded-lg">
          <thead className="bg-slate-800">
            <tr>
              <th className="text-left p-3 border-b border-slate-700 text-slate-300">Option</th>
              <th className="text-left p-3 border-b border-slate-700 text-slate-300">Default</th>
              <th className="text-left p-3 border-b border-slate-700 text-slate-300">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 text-slate-400">
            <tr>
              <td className="p-3 font-mono text-sky-400">api_key</td>
              <td className="p-3">required</td>
              <td className="p-3">Your Aegis IDS API key</td>
            </tr>
            <tr>
              <td className="p-3 font-mono text-sky-400">endpoint</td>
              <td className="p-3">required</td>
              <td className="p-3">Aegis IDS API endpoint URL</td>
            </tr>
            <tr>
              <td className="p-3 font-mono text-sky-400">batch_size</td>
              <td className="p-3">100</td>
              <td className="p-3">Events per batch</td>
            </tr>
            <tr>
              <td className="p-3 font-mono text-sky-400">flush_interval</td>
              <td className="p-3">5.0</td>
              <td className="p-3">Seconds between forced flushes</td>
            </tr>
            <tr>
              <td className="p-3 font-mono text-sky-400">max_queue_size</td>
              <td className="p-3">10000</td>
              <td className="p-3">Maximum in-memory queue size</td>
            </tr>
            <tr>
              <td className="p-3 font-mono text-sky-400">debug</td>
              <td className="p-3">False</td>
              <td className="p-3">Enable debug logging</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    {/* Troubleshooting */}
    <section id="troubleshooting" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-white">
        <span className="p-2 bg-red-500/20 rounded-lg text-red-400"><AlertTriangle size={24} /></span>
        Troubleshooting
      </h2>

      <div className="space-y-4">
        <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
          <h3 className="font-semibold text-red-400 mb-2">Events not appearing in dashboard</h3>
          <ul className="text-sm text-slate-400 space-y-1 list-disc list-inside">
            <li>Verify API key is correct and has write permissions</li>
            <li>Check endpoint URL (should not have trailing slash)</li>
            <li>Enable debug mode: <code className="text-sky-400">AEGIS_DEBUG=true</code></li>
            <li>Check network connectivity: <code className="text-sky-400">client.health_check()</code></li>
          </ul>
        </div>

        <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
          <h3 className="font-semibold text-amber-400 mb-2">High memory usage</h3>
          <ul className="text-sm text-slate-400 space-y-1 list-disc list-inside">
            <li>Reduce max_queue_size in configuration</li>
            <li>Decrease flush_interval to send events faster</li>
            <li>Enable compression to reduce payload size</li>
            <li>Check for event loops creating infinite events</li>
          </ul>
        </div>

        <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
          <h3 className="font-semibold text-sky-400 mb-2">Performance impact</h3>
          <ul className="text-sm text-slate-400 space-y-1 list-disc list-inside">
            <li>Ensure async mode is enabled (default)</li>
            <li>Increase batch_size for high-throughput apps</li>
            <li>Use sampling for high-volume endpoints: <code className="text-sky-400">sample_rate=0.1</code></li>
            <li>Disable body capture for large file uploads</li>
          </ul>
        </div>
      </div>

      <Alert type="success" title="Getting Help">
        Need additional support? Contact our engineering team at 
        <a href="mailto:support@aegis-ids.com" className="text-sky-400 hover:underline ml-1">support@aegis-ids.com</a> 
        or join our <a href="#" className="text-sky-400 hover:underline">Discord community</a>.
      </Alert>
    </section>

    <div className="h-32"></div>
  </div>
);

// Main App Component
const DocPage: React.FC = () => {
  const [isDark, setIsDark] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('introduction');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);

      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  const filteredNav = navSections.map(section => ({
    ...section,
    items: section.items.filter(item => 
      item.label.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.items.length > 0);

  return (
    <div className={`min-h-screen ${isDark ? 'dark' : ''}`}>
      <div className="bg-slate-950 text-slate-100 min-h-screen font-sans">
        {/* Progress Bar */}
        <div 
          className="fixed top-0 left-0 h-0.5 bg-gradient-to-r from-sky-400 to-indigo-400 z-50 transition-all duration-100" 
          style={{ width: `${scrollProgress}%` }}
        />

        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-sky-400 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Shield className="text-white" size={20} />
                </div>
                <span className="font-bold text-xl tracking-tight text-white">
                  Aegis<span className="text-sky-400">IDS</span>
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-xs bg-sky-500/20 text-sky-400 rounded-full ml-2">
                  Docs
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center gap-4 text-sm text-slate-400">
                  <a href="#" className="hover:text-white transition-colors">Features</a>
                  <a href="#" className="hover:text-white transition-colors">Pricing</a>
                  <a href="#" className="hover:text-white transition-colors">Support</a>
                </div>
                
                <button 
                  onClick={() => setIsDark(!isDark)}
                  className="p-2 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                <button 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>

                <a 
                  href="#" 
                  className="hidden md:flex items-center gap-2 px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg transition-colors text-sm font-medium"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </header>

        <div className="flex pt-16">
          {/* Sidebar */}
          <aside className={`
            fixed md:sticky top-16 left-0 z-30 w-64 h-[calc(100vh-4rem)] 
            bg-slate-950/95 backdrop-blur border-r border-slate-800
            transform transition-transform duration-300 ease-in-out
            ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
            overflow-y-auto
          `}>
            <div className="p-4">
              <div className="relative mb-4">
                <input 
                  type="text" 
                  placeholder="Search docs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm focus:outline-none focus:border-sky-500 text-slate-300 placeholder-slate-600"
                />
              </div>

              <nav className="space-y-6">
                {filteredNav.map((section, idx) => (
                  <div key={idx}>
                    <h3 className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                      {section.title}
                    </h3>
                    <ul className="space-y-1">
                      {section.items.map((item) => (
                        <li key={item.id}>
                          <button
                            onClick={() => scrollToSection(item.id)}
                            className={`
                              w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-all
                              ${activeSection === item.id 
                                ? 'bg-sky-500/15 text-sky-400 border-l-2 border-sky-400' 
                                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900 border-l-2 border-transparent'}
                            `}
                          >
                            {item.icon}
                            <span>{item.label}</span>
                            {activeSection === item.id && (
                              <ChevronRight size={14} className="ml-auto" />
                            )}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>

              <div className="mt-8 p-4 bg-gradient-to-br from-sky-900/50 to-indigo-900/50 rounded-lg border border-sky-500/20">
                <p className="text-xs text-slate-400 mb-2">Need help?</p>
                <a href="#" className="text-sm text-sky-400 hover:text-sky-300 font-medium flex items-center gap-1">
                  Contact Support <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0 bg-slate-950">
            <DocumentationContent />
          </main>

          {/* Table of Contents - Right Sidebar */}
          <aside className="hidden xl:block w-64 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto border-l border-slate-800 p-6">
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">On this page</h4>
            <nav className="space-y-2 text-sm">
              {['Introduction', 'Installation', 'Quick Start', 'Manual Integration', 'Event Structure', 'Custom Events', 'Django', 'FastAPI', 'Flask', 'System Overview', 'Batching', 'Security', 'API Reference', 'Configuration', 'Troubleshooting'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '-'))}
                  className="block text-slate-500 hover:text-sky-400 transition-colors text-left"
                >
                  {item}
                </button>
              ))}
            </nav>
          </aside>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-20 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DocPage;