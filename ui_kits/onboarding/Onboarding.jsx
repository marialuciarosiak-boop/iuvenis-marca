const DS = window.IuvenisDS || {};
const { OptionCard, ProgressSteps, Button, Badge, Icon, SectionHeading, TextInput } = DS;

const STEPS = [
  { title: 'Em que momento', em: 'você está?', sub: 'Seu nível acadêmico define quais programas abrem as portas para você.', opts: [
    ['graduation-cap', 'Ensino médio', 'Quero graduação fora ou intercâmbio'], ['book', 'Na faculdade', 'Quero intercâmbio, estágio ou pesquisa'],
    ['medal', 'Já me formei', 'Quero fazer mestrado fora'], ['flask', 'Mestrado ou doutorado', 'Quero pesquisa ou doutorado fora'], ['briefcase', 'Trabalho há alguns anos', 'Mestrado ou fellowship de liderança']] },
  { title: 'Para onde você', em: 'quer ir?', sub: 'Escolha a região que mais te chama. Dá para mudar depois.', opts: [
    ['flag', 'Estados Unidos', 'Graduação, bolsas e fellowships'], ['globe-hemisphere-east', 'Europa', 'Mestrado, Erasmus e programas de verão'], ['globe-hemisphere-west', 'Ásia', 'Bolsas governamentais e pesquisa'], ['compass', 'Ainda não sei', 'Quero conhecer as opções']] },
  { title: 'Como podemos', em: 'te chamar?', sub: 'Vamos montar seu plano com o seu nome.', input: true },
];
const TOTAL = 6;

function Note({ children, style }) { return <div style={{ position: 'absolute', fontFamily: 'var(--font-hand)', color: 'var(--navy-800)', fontSize: 26, lineHeight: 1.1, ...style }}>{children}</div>; }

function Onboarding() {
  const [step, setStep] = React.useState(0);
  const [ans, setAns] = React.useState({});
  const [xp, setXp] = React.useState(0);
  const [name, setName] = React.useState('');
  const done = step >= STEPS.length;
  const s = STEPS[step];
  const can = done ? false : s.input ? name.trim().length > 1 : ans[step] != null;
  const next = () => { if (!can) return; setXp(x => x + 10); setStep(n => n + 1); };
  return <div style={{ minHeight: '100vh', background: 'linear-gradient(180deg, var(--sky-100), var(--sky-50))', position: 'relative', overflow: 'hidden', padding: '28px 24px 48px' }}>
    <Note style={{ top: 36, left: 44 }}>“Eis que faço<br />uma coisa nova.”<div style={{ fontSize: 20, color: 'var(--slate-500)' }}>Isaías 43:19</div></Note>
    <Note style={{ bottom: 60, right: 48 }}>Seu futuro tem<br />as fronteiras que<br />você delimita</Note>
    <img src="../../assets/logo-symbol-gray.png" alt="" style={{ position: 'absolute', right: '12%', top: 70, height: 140, opacity: .35 }} />
    <div style={{ position: 'absolute', top: 18, right: 28 }}><Badge icon={<Icon name="trophy" size={14} color="var(--gold-500)" />}>{xp} XP</Badge></div>
    <div style={{ maxWidth: 'var(--container-quiz)', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18, position: 'relative' }}>
      <img src="../../assets/logo-wordmark-navy.png" alt="Iuvenis" style={{ height: 22 }} />
      <ProgressSteps total={TOTAL} current={Math.min(step + 1, TOTAL)} />
      {done ? <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center', marginTop: 24 }}>
          <SectionHeading variant="app" title={'Prontinho, ' + name + '!'} emphasis="Seu plano está a caminho." />
          <Button variant="app" block onClick={() => { setStep(0); setAns({}); setXp(0); setName(''); }}>Recomeçar</Button>
        </div>
      : <>
        <SectionHeading variant="app" title={s.title} emphasis={s.em} subtitle={s.sub} style={{ width: 440, maxWidth: '100%' }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%' }}>
          {s.input ? <TextInput placeholder="Seu primeiro nome" value={name} onChange={setName} />
            : s.opts.map(([i, t, d], k) => <OptionCard key={k} icon={i} title={t} description={d} selected={ans[step] === k} onClick={() => setAns(a => ({ ...a, [step]: k }))} />)}
        </div>
        <Button variant="app" block disabled={!can} iconRight="→" onClick={next}>Continuar</Button>
        {step > 0 ? <button onClick={() => setStep(n => n - 1)} style={{ background: 'none', border: 'none', color: 'var(--slate-500)', fontFamily: 'inherit', fontSize: 12, cursor: 'pointer' }}>Voltar</button> : null}
      </>}
    </div>
  </div>;
}
ReactDOM.createRoot(document.getElementById('root')).render(<Onboarding />);
