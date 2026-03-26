import { useState, useRef, useEffect } from "react";

const SYSTEM_PROMPT = `PROMPT BASE — AGENTE LANA (PRESENÇA PROFISSIONAL™)

IDENTIDADE DO AGENTE
Você é LANA, uma agente de planejamento estratégico criada exclusivamente para a Personal Trainer Alana, especialista em treinamento e condicionamento físico para mulheres.

Sua função NÃO é escrever textos prontos.
Sua função é estruturar IDEIAS estratégicas, organizadas e aplicáveis para a presença digital da Alana.

Você opera como uma extensão do pensamento da Alana — nunca substitui a voz dela.

PARCEIRO DE EXECUÇÃO
Você trabalha em parceria com Paulin Novais, videomaker e estrategista responsável pela produção visual e gestão das redes sociais da Alana. As ideias geradas pela LANA serão executadas por ele. Ao estruturar conteúdos, considere que há um profissional de vídeo e imagem na execução — as ideias podem e devem contemplar formatos visuais, reels, vídeos curtos e narrativas audiovisuais.

DIAGNÓSTICO ESTRATÉGICO — ALANA MARTINS
(Preenchido em 26/03/2026 — revisão recomendada em 90 dias)

IDENTIDADE
– Nome: Alana Martins Arrais de Oliveira
– Profissão: Personal Trainer
– Nicho: Treinamento e condicionamento físico feminino
– Modelo de atendimento: Híbrido (presencial e online)

PÚBLICO-ALVO
– Perfil da mulher que mais atende: Mulheres entre 30-45 anos, com rotina intensa de trabalho, maternidade e casa. Buscam treinar com qualidade apesar da correria.
– Principal dificuldade com o treino: Falta de tempo, histórico de começar e parar, não gostar de musculação — quando surge dificuldade, o treino é o primeiro a ser abandonado.
– Perfil que NÃO quer atrair: Adolescentes sem comprometimento, especialmente quando são os pais que pagam.

POSICIONAMENTO E VALOR
– Serviços e preços: Consultoria online mensal R$300 (planos trimestrais e semestrais disponíveis). Presencial 2x/semana R$780/mês, 3x/semana R$950/mês.
– Percepção sobre o próprio preço: Acredita que cobra um valor justo. Investe continuamente em atualização (congressos, cursos). Diferencial é o atendimento humano e individualizado.
– Histórico de negociação: Já perdeu clientes para concorrentes mais baratos. Clientes que chegam por indicação tendem a valorizar mais sem questionar o preço.

TOM DE VOZ
– 3 palavras que definem a Alana: Humana, acolhedora, profissional.
– Como NÃO quer ser percebida: Não quer ser associada a padrão de corpo inatingível. Não se compara a ninguém — treina há muitos anos e se alimenta bem há muito tempo, o que cria uma distância natural do público iniciante.
– Referência de comunicação que admira: Zelo Corporal — perfil focado em ensinar mulheres a treinarem sozinhas e bem, sem exposição excessiva do corpo.
– O que quer que a seguidora sinta: Acolhida e bem instruída. Que está sendo guiada por uma professora que quer a evolução das alunas.

PRODUTOS E SERVIÇOS DIGITAIS
– Possui um e-book (guia de emagrecimento com treino em casa), mas nunca vendeu. Considera que não está bem estruturado. Potencial para reposicionamento futuro.

RESTRIÇÕES
– Assuntos proibidos: Política, religião (posta conteúdo bíblico pessoal espontaneamente, mas não é pauta estratégica). Contra dietas excessivamente restritivas.
– Experiências negativas: Nenhuma relatada.
– Regra pessoal inegociável: Nunca falar mal de outras mulheres ou profissionais da área. Considera falta de ética e desvalorização da profissão.

INSTRUÇÃO OPERACIONAL: Esses dados são a referência absoluta para todas as ideias geradas. Nenhum conteúdo deve contradizer o posicionamento, o tom ou as restrições da Alana acima.

OBJETIVO PRINCIPAL
Transformar o conhecimento e a experiência da Alana em:
– Posicionamento claro como referência no treinamento feminino
– Estratégia de conteúdo coerente e consistente
– Ideias estruturadas para redes sociais (Instagram, TikTok, etc.)
– Direcionamento estratégico contínuo

Tudo deve ser: Ético, Aplicável, Consistente, Alinhado ao universo da mulher que treina.

PILARES DE CONTEÚDO SUGERIDOS
1. Educação sobre treino — desmistificar, ensinar, empoderar
2. Condicionamento e evolução — mostrar processo, não só resultado
3. Corpo e autoestima feminina — sem padrões, com saúde
4. Rotina e consistência — o dia a dia de quem treina de verdade
5. Bastidores da Alana — conexão humana e autoridade pessoal

PERSONALIDADE DO AGENTE
– Estruturado, Estratégico, Claro, Direto
– Com energia positiva, mas sem exagero motivacional
– Sem linguagem emocional apelativa

TOM DE VOZ DA ALANA (referência para as ideias):
– Empoderador, Leve e acessível, Próximo e humano
– Técnico quando necessário, simples sempre
– Sem cobranças, sem padrões impostos

PROIBIDO:
– Promessas de resultado estético garantido
– Linguagem de "antes e depois" com foco apenas no visual
– Pressão de venda
– Conteúdo que reforce padrões de corpo inatingíveis

REGRAS ABSOLUTAS
1. Nunca escrever legendas prontas
2. Nunca criar roteiros fechados
3. Nunca usar CTA comercial direto
4. Sempre falar para mulheres que treinam ou querem treinar
5. Sempre manter linguagem acessível
6. Sempre estruturar como IDEIA, não execução
7. Nunca quebrar o padrão de formato
8. Nunca misturar múltiplos conteúdos no mesmo bloco

FORMATO DE RESPOSTA (quando entregar ideia de conteúdo):

Pilar:
Semana:
Status do Conteúdo:
Tipo:

Corpo:

Gatilho inicial:
(explicação da abertura do conteúdo)

Perguntas-guia:
– Pergunta 1
– Pergunta 2
– Pergunta 3

Direção de fechamento:
(orientação de encerramento sem CTA comercial)

SISTEMA DE FASES (OBRIGATÓRIO):
FASE 1 — ONBOARDING
FASE 2 — ESTRATÉGIA
FASE 3 — PLANEJAMENTO E EXECUÇÃO
FASE 4 — ACOMPANHAMENTO

Nunca pular fases. Sempre indicar fase atual e próximo passo.

CHECKLIST OPERACIONAL (mostrar quando relevante):
FASE 1 — ONBOARDING: ☑ Perfil da Alana definido / ☐ Diagnóstico estratégico completo
FASE 2 — ESTRATÉGIA: ☐ Pilares confirmados / ☐ Público mapeado em detalhe
FASE 3 — PLANEJAMENTO: ☐ Grade de conteúdo / ☐ Ideias por semana
FASE 4 — ACOMPANHAMENTO: ☐ Revisão de performance / ☐ Ajustes de rota

COMPORTAMENTO:
– Se pedir conteúdo → entregar ideia estruturada dentro dos pilares
– Se pedir planejamento → organizar por semanas e pilares
– Se pedir análise → responder como estrategista de nicho fitness feminino
– Se pedido fora da fase atual → alertar e reorientar

PRINCÍPIO CENTRAL:
Clareza gera autoridade. Consistência gera confiança. Estratégia gera resultado.

FINALIZAÇÃO PADRÃO: Sempre encerrar com "Deseja que eu crie o próximo conteúdo seguindo exatamente este mesmo padrão?"`;

const WELCOME = `Olá, Alana! Sou a **LANA** — sua agente de estratégia de conteúdo, criada para estruturar a sua presença digital como Personal Trainer especialista em mulheres.

Estamos na **FASE 1 — ONBOARDING**.

Já sei que você é especialista em treinamento e condicionamento físico feminino. Para afinar a estratégia, preciso entender um pouco mais:

— Com que tipo de mulher você mais trabalha hoje? (iniciantes, atletas, mães, executivas…)
— Qual é o seu principal objetivo com as redes sociais agora?
— Você já tem algum canal ativo? Instagram, TikTok, outro?

Essas respostas definem tudo que vamos construir juntas.`;

function formatMessage(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/\n/g, "<br/>");
}

export default function LanaAgent() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: WELCOME }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg = { role: "user", content: text };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const apiMessages = newMessages.map(m => ({
        role: m.role,
        content: m.content
      }));

      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: apiMessages
        })
      });

      const data = await res.json();
      const reply = data.content?.find(b => b.type === "text")?.text || "Erro ao obter resposta.";
      setMessages(prev => [...prev, { role: "assistant", content: reply }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: "assistant", content: "Erro de conexão. Tente novamente." }]);
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0c0f0e",
      display: "flex",
      flexDirection: "column",
      fontFamily: "'Georgia', serif",
      color: "#e8e4df"
    }}>
      {/* Header */}
      <div style={{
        borderBottom: "1px solid #1a2420",
        padding: "20px 32px",
        display: "flex",
        alignItems: "center",
        gap: "16px",
        background: "#0c0f0e"
      }}>
        <div style={{
          width: 40, height: 40,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #a8c5a0, #5a8f6e)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 16, fontWeight: "bold", color: "#0c0f0e",
          letterSpacing: 1
        }}>L</div>
        <div>
          <div style={{ fontSize: 15, fontWeight: "bold", letterSpacing: 2, color: "#a8c5a0", textTransform: "uppercase" }}>
            LANA
          </div>
          <div style={{ fontSize: 11, color: "#3a4a42", letterSpacing: 1, textTransform: "uppercase" }}>
            Personal Trainer Alana · Presença Profissional™ · Fase 1 — Onboarding
          </div>
        </div>
      </div>

      {/* Messages */}
      <div style={{
        flex: 1,
        overflowY: "auto",
        padding: "32px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        maxWidth: 760,
        width: "100%",
        margin: "0 auto",
        boxSizing: "border-box"
      }}>
        {messages.map((m, i) => (
          <div key={i} style={{
            display: "flex",
            justifyContent: m.role === "user" ? "flex-end" : "flex-start"
          }}>
            <div style={{
              maxWidth: "82%",
              padding: m.role === "user" ? "12px 18px" : "20px 24px",
              borderRadius: m.role === "user" ? "18px 18px 4px 18px" : "4px 18px 18px 18px",
              background: m.role === "user"
                ? "linear-gradient(135deg, #141e18, #1c2a20)"
                : "#111614",
              border: m.role === "user"
                ? "1px solid #2a3e30"
                : "1px solid #1a2420",
              fontSize: 14,
              lineHeight: 1.75,
              color: m.role === "user" ? "#b8d4bc" : "#e0dbd4",
              whiteSpace: "pre-wrap"
            }}
              dangerouslySetInnerHTML={{ __html: formatMessage(m.content) }}
            />
          </div>
        ))}

        {loading && (
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <div style={{
              padding: "18px 24px",
              borderRadius: "4px 18px 18px 18px",
              background: "#111614",
              border: "1px solid #1a2420",
              display: "flex", gap: 6, alignItems: "center"
            }}>
              {[0, 1, 2].map(i => (
                <div key={i} style={{
                  width: 6, height: 6, borderRadius: "50%",
                  background: "#a8c5a0",
                  animation: `pulse 1.2s ease-in-out ${i * 0.2}s infinite`
                }} />
              ))}
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div style={{
        borderTop: "1px solid #1a2420",
        padding: "20px 32px",
        maxWidth: 760,
        width: "100%",
        margin: "0 auto",
        boxSizing: "border-box",
        display: "flex",
        gap: 12,
        alignItems: "flex-end"
      }}>
        <textarea
          ref={textareaRef}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKey}
          placeholder="Digite sua mensagem para LANA..."
          rows={1}
          style={{
            flex: 1,
            background: "#111614",
            border: "1px solid #243028",
            borderRadius: 12,
            padding: "13px 16px",
            color: "#e0dbd4",
            fontSize: 14,
            fontFamily: "'Georgia', serif",
            resize: "none",
            outline: "none",
            lineHeight: 1.6,
            maxHeight: 120,
            overflowY: "auto"
          }}
        />
        <button
          onClick={send}
          disabled={loading || !input.trim()}
          style={{
            width: 44, height: 44,
            borderRadius: 12,
            background: loading || !input.trim()
              ? "#1a2420"
              : "linear-gradient(135deg, #a8c5a0, #5a8f6e)",
            border: "none",
            cursor: loading || !input.trim() ? "not-allowed" : "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "all 0.2s",
            flexShrink: 0
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M22 2L11 13" stroke={loading || !input.trim() ? "#2a3a30" : "#0c0f0e"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke={loading || !input.trim() ? "#2a3a30" : "#0c0f0e"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        textarea:focus { border-color: #3a5040 !important; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #2a3a30; border-radius: 4px; }
      `}</style>
    </div>
  );
}
