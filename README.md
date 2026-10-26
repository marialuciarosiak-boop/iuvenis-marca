# Iuvenis · Manual de Marca e Design System

Fonte oficial da identidade visual da Iuvenis (versão de outubro de 2026, criada no Claude Design). Use este repositório em todo material novo da Iuvenis: site, páginas de venda, quiz, área de membros, posts, carrosséis, e-mails, PDFs e apresentações.

- **Guia completo (88 páginas):** `pdf/Iuvenis Guia de Marca.pdf`. A versão navegável é `Iuvenis Guia de Marca.html`; abra no navegador e use as setas.
- **Tokens prontos para código:** `styles.css`, que importa os arquivos de `tokens/`.
- **Logos, ícones, ilustrações e fotos:** `assets/`.
- **Componentes e kits de interface:** `components/` e `ui_kits/`, com o kit do site e o kit do onboarding/quiz.
- **Documentação técnica do design system:** `DESIGN-SYSTEM.md` e `SKILL.md`, que serve de instrução para agentes de IA.

---

## Resumo das regras

### Logotipo
- O logotipo principal tem **símbolo + nome**. O nome **iuvenis** sempre vai em minúsculas no logo; em texto corrido, escreva "Iuvenis".
- **Símbolo:** o "i", em que o ponto é a pessoa e a curva que sobe é o caminho até o exterior. Use em avatar, ícone, selo e abertura de vídeo.
- **Versões de cor:**
  - **branco** (preferencial);
  - ocean e petrol;
  - **dourado**, só no institucional;
  - navy, para impressos em 1 cor.
- **Área de proteção:** x = altura do ponto do símbolo.
- **Tamanho mínimo:** 100 px (25 mm) para o logo completo e 24 px (6 mm) para o símbolo.
- **Nunca:** distorcer, rotacionar, trocar as cores, aplicar sombra, contorno ou transparência, digitar o nome nem usar sobre fundo sem contraste. Use sempre os arquivos de `assets/`.

### Cores

| Papel | Cor | HEX | Uso |
|---|---|---|---|
| **Principal** | Ocean | `#005F8D` | **A cor da marca.** Capas, divisórias, seções de impacto (cerca de 50%) |
| Principal | Mist | `#D9D9D9` | Organiza: cartões e seções de conteúdo (cerca de 25%) |
| Principal | Areia | `#A89883` | Destaca **um único** elemento por composição |
| Principal | Petrol | `#02324A` | Escreve: texto e seções profundas |
| Apoio | Branco | `#FFFFFF` | Fundos claros |
| Apoio | Sky | `#E9F2FE` | Telas de app, perguntas e jornada do aluno |
| Apoio | Azure | `#2D7FF9` | **Só em produtos digitais** (quiz, app) |
| Apoio | Navy | `#0A1530` | Acento institucional, sobre Petrol |
| Apoio | Gold | `#B48A4A` | Acento institucional, sobre Petrol |

Frase-guia: **"Ocean é a cor da marca. Mist organiza, Areia destaca, Petrol escreve."**

### Tipografia
- **Poppins** (Google Fonts) em tudo.
  - **Títulos:** frase em Light (300) com a palavra-chave em **Bold** (700) no mesmo título. Destaque só produto, número ou promessa, um por título.
  - **Subtítulo:** Medium. **Título de cartão:** SemiBold. **Texto:** Regular, entrelinha 1,5, e a primeira frase em negrito apresenta a ideia.
- **Cormorant Garamond** em itálico, só no fecho de títulos institucionais (fundo Petrol, destaque dourado).
- **Caveat:** notas manuscritas, no máximo uma por peça e nunca em títulos.
- **Nunca:** tudo em caixa alta, outras fontes, Caveat em texto longo ou destaques aleatórios.

### Formas e elementos
- **Mapa-múndi pontilhado:** o elemento que mais identifica a marca. Pontos brancos com 20 a 30% de opacidade sobre Ocean, em uso pontual (a maioria dos slides tem fundo liso). Nunca atrás de textos, colorido, deformado ou sobre fotos.
- **Cartões:**
  - cantos de 16 px, sombra suave azulada, conteúdo centralizado (ícone, título e descrição);
  - **Mist** para conteúdo; **Areia**, um por composição, para destaque; **Ocean** sobre fundos claros.
- **Cartões de vidro:** branco 10% com borda branca 22%, só sobre Ocean ou Petrol lisos.
- **Tríptico:** três colunas, com a central em Areia, mais alta e sobreposta, sombra profunda, mapa ao fundo e a pergunta "O que te espera aqui:".
- **Ilustrações em traço** (símbolo, avião com rota e globo): traço fino azul sobre Sky, só em produtos digitais e jornadas do aluno.

### Fotografia
- **Campus:** arquitetura icônica, céu azul, luz do dia, formato retrato e cantos de 8 px.
- **Alunos:** fotos reais, de celular, em frente à universidade ou cidade. Logo da universidade em branco sobre degradê, e sempre com **autorização de uso de imagem**.
- **Evite:** preto e branco, filtros pesados, banco de imagens genérico, pessoas posadas em escritório e baixa resolução.

### Ícones
- **Phosphor Icons, peso Fill.** Petrol sobre fundo claro; branco sobre Ocean ou Areia.
- Ícone centralizado acima do título, com cerca de 1,5 vez a altura do título do cartão.
- Nunca misturar estilos, usar cores fora da paleta ou usar o símbolo como ícone.
- **Sem emojis em materiais da marca.** Exceção: até um emoji no fim do gancho de posts.

### Tom de voz
- **Próxima:** fala com "você", como um mentor que já fez o caminho.
- **Concreta:** números, nomes e prazos no lugar de promessas vagas.
- **Aspiracional:** o sonho internacional é possível a partir do zero.

| Faça | Evite |
|---|---|
| "Acesse modelos de documentos já aprovados." | "Garantimos a sua aprovação." |
| "As 10 melhores oportunidades da quinzena." | "Oportunidades incríveis que vão mudar sua vida!!!" |
| "Aprovados em Yale e Stanford." | "Aprovados nas melhores universidades do planeta 🚀" |
| "Em que momento você está?" | "Selecione seu nível de escolaridade atual." |

### Apresentações
- **Margens:** 100 px nas laterais, 90 px no topo e 80 px na base.
- **Tamanhos:** título de 64 a 72 px, texto de 28 a 32 px e rótulo de 24 px. Nada abaixo de 24 px.
- **Conteúdo:** uma ideia por slide, com no máximo três linhas de texto corrido ou seis itens curtos. Um único cartão em Areia.
- **Ritmo:**
  - nunca mais de dois slides seguidos com o mesmo fundo; gire entre Ocean, Branco e Mist;
  - repita o mesmo modelo no máximo a cada quatro slides;
  - Ocean abre e fecha os blocos;
  - Sky só para perguntas; Petrol com dourado para o bloco institucional.

### Redes sociais
- **Formatos:** feed 4:5 (1080×1350) e stories/reels 9:16, respeitando a área segura.
- **Tamanhos:** título com no mínimo 48 px e texto com no mínimo 28 px, na arte de 1080 px.
- **Conteúdo:** uma ideia por página, com no máximo 40 palavras. Símbolo ou logo pequeno no canto, mais os pontinhos do carrossel.
- **Capa revista:** é o modelo principal de e-books, guias e capas de carrossel. Uma palavra grande fica atrás da pessoa (foto recortada por cima), o título em Light + Bold vai embaixo e uma linha fina traz a edição e a data.

---

## Pontos para decidir (análise de 25/10/2026)

1. **Contraste da Areia.**
   - **O que o guia aprova:** branco sobre Areia (títulos e cartões de destaque com texto branco).
   - **O problema:** essa combinação dá **2,8:1**, abaixo até do mínimo para títulos grandes (3:1).
   - **Sugestão:**
     - manter a Areia `#A89883` nos fundos e escrever em **Petrol** sobre ela (4,8:1);
     - ou criar uma **"Areia escura" `#7E7262`** só para cartões com texto branco (4,7:1).
2. ~~Domínio~~ **Resolvido em 25/10:** o domínio oficial é **iuvenisoficial.com**, já corrigido no guia.
3. ~~Números~~ **Resolvido em 25/10:** o número oficial é **150h de aulas**, já corrigido no guia e nos componentes.
4. **Manual no site:** desde 25/10, iuvenisoficial.com/manualdamarca mostra este guia. As imagens e os scripts vêm do GitHub Pages.
5. **Emojis.** O guia diz "sem emojis em materiais da marca" e, nas redes, "até um emoji no fim do gancho". Vale a regra: zero em site, PDF, e-mail e apresentações; até um em posts.

## Como usar em código

```html
<link rel="stylesheet" href="styles.css">
<!-- variáveis: --ocean-600, --mist-300, --sand-500, --petrol-900, --sky-100, --azure-500, --navy-950, --gold-500 ... -->
```

Os fontes vêm do Google Fonts (Poppins, Cormorant Garamond e Caveat), e os ícones vêm do Phosphor (`https://unpkg.com/@phosphor-icons/web@2.1.1`).

As fotos de pessoas em `assets/photos/` são de uso exclusivo da Iuvenis.
