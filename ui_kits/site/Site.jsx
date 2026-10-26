const DS = window.IuvenisDS || {};
const { FeatureCard, PhotoCard, SectionHeading, Button, Icon } = DS;

function Hero() {
  return <section style={{ background: 'var(--ocean-600)', backgroundImage: 'radial-gradient(rgba(255,255,255,.22) 1.4px, transparent 1.6px)', backgroundSize: '9px 9px', padding: '56px 24px 88px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28 }}>
    <img src="../../assets/logo-symbol-white.png" alt="Iuvenis" style={{ height: 26 }} />
    <div style={{ color: '#fff', fontSize: 18, fontWeight: 500 }}>O que te espera aqui:</div>
    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.05fr) minmax(0,1fr)', maxWidth: 820, width: '100%', alignItems: 'center', filter: 'drop-shadow(0 24px 40px rgba(2,50,74,.35))' }}>
      <div style={{ background: 'var(--mist-300)', borderRadius: '16px 0 0 16px', padding: '28px 20px', display: 'flex', flexDirection: 'column', gap: 28 }}>
        <FeatureCard icon="play" title="200+ Horas de Aulas" description="Todo o conteúdo de documentação, cartas e estratégia organizado do zero ao avançado" style={{ boxShadow: 'none', padding: 0, background: 'transparent' }} />
        <FeatureCard icon="path" title="Histórias Reais" description="Aprenda com mentores e alunos aprovados nas melhores universidades do mundo, como Yale e Stanford" style={{ boxShadow: 'none', padding: 0, background: 'transparent' }} />
      </div>
      <div style={{ background: 'var(--sand-500)', borderRadius: 16, padding: '44px 24px', display: 'flex', flexDirection: 'column', gap: 28, alignItems: 'center', position: 'relative', zIndex: 1 }}>
        <FeatureCard tone="warm" icon="users-three" title="Banco de Oportunidades" description="Acesse listas de programas que recomendamos e sites que usamos para encontrar essas bolsas." style={{ boxShadow: 'none', padding: 0 }} />
        <div style={{ width: 70, height: 1, background: 'rgba(255,255,255,.7)' }}></div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, textAlign: 'center', color: '#fff' }}>
          <img src="../../assets/logo-symbol-white.png" alt="" style={{ height: 28 }} />
          <div style={{ fontWeight: 600, fontSize: 18, lineHeight: 1.25 }}>Aulas Exclusivas IuNews</div>
          <div style={{ fontSize: 12, lineHeight: 1.6 }}>A cada nova edição da nossa news, uma aula prática explicando as 10 melhores oportunidades da quinzena</div>
        </div>
      </div>
      <div style={{ background: 'var(--mist-300)', borderRadius: '0 16px 16px 0', padding: '28px 20px', display: 'flex', flexDirection: 'column', gap: 28 }}>
        <FeatureCard icon="video-camera" title="Modelos de Documentos" description="Acesse modelos de documentos já usados e aprovados para se inspirar e construir sua versão" style={{ boxShadow: 'none', padding: 0, background: 'transparent' }} />
        <FeatureCard icon="briefcase" title="Aulas Práticas" description="Aprenda como encontrar e se inscrever para mais de 40 tipos de intercâmbio e bolsas" style={{ boxShadow: 'none', padding: 0, background: 'transparent' }} />
      </div>
    </div>
  </section>;
}

const UNIS = ['Harvard', 'Sydney', 'Pomona', 'Wake Forest', 'Oxford', 'Dartmouth', 'Stanford'];
function Banco() {
  return <section style={{ background: 'var(--mist-300)', padding: '56px 0 72px', overflow: 'hidden' }}>
    <SectionHeading title="Um" emphasis="Banco de Oportunidades" inline subtitle={<><b style={{ color: 'var(--text-strong)' }}>O mundo está cheio de bolsas que ninguém te conta.</b> Na Iuvenis, nós garimpamos o que existe de melhor e entregamos mastigado para você.</>} style={{ padding: '0 24px' }} />
    <div style={{ marginTop: 28, overflow: 'hidden' }}>
      <div style={{ display: 'flex', gap: 10, width: 'max-content', animation: 'marquee 40s linear infinite' }}>
        {[...UNIS, ...UNIS].map((u, i) => <PhotoCard key={i} label={u} height={230} style={{ width: 184 }} />)}
      </div>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, maxWidth: 960, margin: '-40px auto 0', padding: '0 24px', position: 'relative' }}>
      <FeatureCard tone="brand" icon="chat-centered-text" title="Novas Aulas" description="A cada nova edição acesse uma nova mentoria prática explicando os pré-requisitos e como se destacar em cada uma dessas vagas." />
      <FeatureCard tone="brand" icon="file-text" title="Modelos de Documentos" description="Acesse guias completos e modelos de documentos já testamos e aprovados para se inspirar e construir sua versão." />
      <FeatureCard tone="brand" icon="target" title="Aulas Práticas" description="Tenha acesso a aulas práticas de como encontrar as melhores oportunidades e navegar pelos sites oficiais das universidades e empresas" />
    </div>
  </section>;
}

const ALUNOS = [['St. John’s', 'College'], ['Minerva', 'University'], ['Berkeley', 'University of California'], ['NYU Shanghai', ''], ['Coimbra', 'Universidade'], ['Siena', 'Università Stranieri']];
function Alunos() {
  return <section style={{ background: 'var(--petrol-900)', padding: '56px 0 0', overflow: 'hidden', position: 'relative' }}>
    <div style={{ maxWidth: 840, margin: '0 auto', padding: '0 24px 24px', display: 'flex', gap: 28, alignItems: 'flex-end', flexWrap: 'wrap', borderBottom: '1px solid rgba(255,255,255,.8)' }}>
      <div style={{ color: '#fff', fontSize: 22, fontWeight: 300, lineHeight: 1.2 }}>Onde <b style={{ color: 'var(--sand-400)', fontWeight: 700 }}>nossos alunos</b> estão hoje</div>
      <div style={{ color: 'var(--text-on-dark-muted)', fontSize: 12, maxWidth: 380, lineHeight: 1.5 }}>Conheça alguns dos nossos membros que saíram do <b style={{ color: '#fff' }}>absoluto zero</b> e hoje vivem o sonho internacional.</div>
    </div>
    <div style={{ display: 'flex', gap: 8, padding: '28px 0', justifyContent: 'center', maskImage: 'linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent)' }}>
      {ALUNOS.map(([n, s], i) => <PhotoCard key={i} label={n} sublabel={s} height={226} style={{ width: 184 }} />)}
    </div>
    <div aria-hidden="true" style={{ fontSize: 'clamp(140px, 24vw, 300px)', fontWeight: 700, color: '#063f5e', textAlign: 'center', lineHeight: .9, letterSpacing: '-.03em', userSelect: 'none' }}>iuvenis</div>
  </section>;
}

const MEMB = [['play', '200h+ de conteúdo', 'Vídeo-aulas, módulos estratégicos e masterclasses gravadas. Acesse quando e quantas vezes quiser.'],
  ['diamond', 'Área de membros exclusiva', 'Plataforma dedicada com todo o material organizado por trilha, nível e tipo de programa.'],
  ['target', 'Comunidade ativa', 'Interação com outros candidatos e alunos aprovados. Troca real de experiências e suporte entre pares.'],
  ['square', 'Modelos de documentos', 'Templates de essays, cartas de motivação, CVs americanos e formulários financeiros prontos para adaptar.'],
  ['record', 'Guias e e-books completos', 'Guias aprofundados sobre cada etapa do processo, do resume ao visto, do TOEFL ao financial aid.'],
  ['sparkle', 'IuNews · curadoria quinzenal', 'As 10 melhores oportunidades abertas, organizadas por nível e área, direto no seu WhatsApp.']];
function Membros() {
  return <section style={{ background: 'var(--navy-950)', padding: '72px 24px' }}>
    <SectionHeading variant="serif" tone="dark" title="Tudo o que você precisa." emphasis="Em um único lugar." subtitle="A área de membros da Iuvenis foi construída para que você não precise buscar informação em outro lugar." />
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', maxWidth: 900, margin: '48px auto 0', borderTop: '1px solid var(--border-on-dark)' }}>
      {MEMB.map(([i, t, d], k) => <FeatureCard key={k} tone="premium" icon={i} title={t} description={d} style={{ borderBottom: '1px solid var(--border-on-dark)', borderRight: '1px solid var(--border-on-dark)' }} />)}
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}><Button variant="premium" size="lg">Quero fazer parte</Button></div>
  </section>;
}

function Site() { return <main><Hero /><Banco /><Alunos /><Membros /></main>; }
ReactDOM.createRoot(document.getElementById('root')).render(<Site />);
