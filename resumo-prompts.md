# Resumo dos Prompts

## Imagem — Composição de Cena

### [prompt-composicao-cena-v1.md](prompt-composicao-cena-v1.md) — #001
**3 imagens de entrada → 1 imagem composta**

Extrai pose, câmera e ambiente da Imagem 1, substitui a modelo original pela avatar da Imagem 2 e aplica a roupa da Imagem 3. Regras de renderização ultra-realista (50mm, skin texture, sem filtros).

---

### [prompt-composicao-cena-v2.md](prompt-composicao-cena-v2.md) — #001
**Versão aprimorada do v1 com isolamento de identidade mais rígido**

Igual ao v1, mas com bloqueio explícito de transferência de identidade da Imagem 1 (tom de pele, etnia, formato do rosto, proporções corporais). Adiciona regra HARD LOCK de distância e escala: o avatar deve ocupar exatamente o mesmo espaço no quadro que a modelo original — sem zoom, sem reposicionamento.

---

### [prompt-troca-de-roupa-v1.md](prompt-troca-de-roupa-v1.md) — #002
**2 imagens → avatar com nova roupa**

Mantém o avatar da Imagem 1 intacto (rosto, corpo, pose, fundo) e aplica a roupa da Imagem 2 com física de tecido realista. Distingue roupas justas de roupas largas e aplica o caimento correto para cada caso.

---

### [prompt-troca-de-roupa-v2.md](prompt-troca-de-roupa-v2.md) — #002
**Versão expandida do troca-de-roupa com bloqueio de identidade mais rígido**

Igual ao v1 (transfere só a roupa da Imagem 2), mas com regras mais detalhadas de fidelidade do tecido (costura, botões, zíperes, bolsos), física de caimento e bloqueio explícito contra invenção de tatuagens, piercings, marcas de nascença ou sardas em pele recém-revelada.

---

## Vídeo — Animações POV

### [prompt-animacao-pov-v1.md](prompt-animacao-pov-v1.md) — #003
**Apresentação de roupa — aproximação + toque no detalhe**

A modelo dá dois passos em direção à câmera, toca suavemente um detalhe da roupa (laço/renda no decote), solta e recua. Expressão facial alterna naturalmente entre neutro e sorriso breve. Câmera em POV com micro-movimentos de mão.

---

### [prompt-animacao-pov-v2-detalhado.md](prompt-animacao-pov-v2-detalhado.md) — #003
**Versão muito mais detalhada do pov-v1 (mesma sequência de aproximação + toque no laço + recuo)**

Mesma sequência do pov-v1, mas com seções muito mais detalhadas de linguagem corporal, olhos e piscar, movimento secundário do cabelo, física de tecido, biomecânica humana (transferência de peso, respiração, correções de equilíbrio) e bloqueio explícito contra invenção de tatuagens/marcas em pele recém-revelada.

---

### [prompt-animacao-pov-v1-gesto-cabelo.md](prompt-animacao-pov-v1-gesto-cabelo.md) — #004
**Versão do pov-v1 com gesto adicional de cabelo**

Idêntico ao pov-v1, mas acrescenta um gesto casual de passar a mão no cabelo (~1 segundo) após a sequência principal de movimentos.

---

### [prompt-animacao-pov-v2-gesto-cabelo-detalhado.md](prompt-animacao-pov-v2-gesto-cabelo-detalhado.md) — #004
**Versão muito mais detalhada do pov-v1-gesto-cabelo (aproxima + toque no laço + recuo + ajeita o cabelo)**

Mesma sequência do pov-v1-gesto-cabelo, mas com seções muito mais detalhadas de linguagem corporal, olhos e piscar, micro-movimentos humanos (respiração, transferência de peso, correções de equilíbrio), física de tecido, iluminação e bloqueio explícito contra invenção de tatuagens/marcas em pele recém-revelada.

---

### [prompt-animacao-pov-v1-giro-lateral.md](prompt-animacao-pov-v1-giro-lateral.md) — #005
**Versão expandida do pov-v1 com giro lateral de tronco**

Igual ao pov-v1 (aproxima + toca detalhe + recua), mas acrescenta giro de tronco de 60–90° para mostrar a silhueta e o caimento da roupa de perfil, seguido de um olhar casual de volta para a câmera antes de retornar à frente. Sem 360°, câmera 100% fixa.

---

### [prompt-animacao-pov-v2-giro-lateral-detalhado.md](prompt-animacao-pov-v2-giro-lateral-detalhado.md) — #005
**Versão muito mais detalhada do pov-v1-giro-lateral (mesma sequência completa)**

Mesma sequência do pov-v1-giro-lateral (aproxima + toca detalhe + recua + gira 60–90° + segura + retorna), mas com fases nomeadas, micro-movimentos humanos (respiração, piscar, correções de equilíbrio), física de tecido/cabelo e bloqueio explícito contra invenção de tatuagens/marcas em pele recém-revelada.

---

### [prompt-animacao-json-cta-v1.md](prompt-animacao-json-cta-v1.md) — #006
**CTA (Call to Action) com dedo apontando para baixo — formato JSON**

Prompt estruturado em JSON (v3.1). A modelo inclina o tronco em direção à câmera, mantém sorriso vendedor e aponta o dedo indicador repetidamente para baixo (indicando link/botão abaixo do vídeo). Sem falar, sem movimento labial. Ambiente interno com luz quente, 8 segundos, 9:16.

---

### [prompt-animacao-json-cta-v2-detalhado.md](prompt-animacao-json-cta-v2-detalhado.md) — #006
**Versão expandida do CTA em JSON, em inglês, com micro-movimentos humanos**

Mesma estrutura JSON (v3.1, 8s, 9:16): aproxima um passo, sorri e aponta o dedo para baixo duas vezes. Acrescenta respiração visível, piscar, transferência de peso entre os pés e bloqueio explícito contra tatuagens, piercings e mudanças de cor/textura do cabelo.

---

### [prompt-animacao-cta-beijo-v1.md](prompt-animacao-cta-beijo-v1.md) — #007
**CTA com beijo soprado para a câmera**

A modelo se aproxima da câmera, sopra um beijo natural e expressivo diretamente para a lente. Gesto caloroso e genuíno com transição de expressão facial em três fases (mão sobe aos lábios → libera o beijo → retorna).

---

### [prompt-animacao-cta-beijo-v2-detalhado.md](prompt-animacao-cta-beijo-v2-detalhado.md) — #007
**Versão muito mais detalhada do cta-beijo-v1 (mesma sequência completa)**

Mesma sequência do cta-beijo-v1 (aproxima + mão sobe aos lábios + libera o beijo + retorna), mas com fases nomeadas, micro-movimentos humanos (respiração, piscar, correções de equilíbrio), física de tecido/cabelo e bloqueio explícito contra invenção de tatuagens/marcas em pele recém-revelada.

---

### [prompt-animacao-composicao-giro-lateral-v1.md](prompt-animacao-composicao-giro-lateral-v1.md) — #008
**Mesmos inputs do Composição de Cena v1 → vídeo com giro lateral**

Entrada única: avatar já com roupa (Img 1). A modelo faz um giro lento e natural de 60–90° para mostrar o perfil e silhueta da roupa, segura a posição por ~1s e retorna à frente. Câmera fixa, movimento casual — não é passarela nem 360°.

---

### [prompt-animacao-composicao-giro-lateral-v2-detalhado.md](prompt-animacao-composicao-giro-lateral-v2-detalhado.md) — #008
**Versão expandida do giro lateral com micro-movimentos humanos**

Mesma entrada única e mesma sequência (giro 60–90° → segura ~1s → retorna), mas com seções muito mais detalhadas de linguagem corporal, expressão facial, física de cabelo e tecido, iluminação e bloqueio explícito contra invenção de tatuagens/marcas em pele recém-revelada durante o giro.

---

## Vídeo — Sem família (avulsos)

### [prompt-animacao-produto-revela-e-recua.md](prompt-animacao-produto-revela-e-recua.md)
**Reveal da roupa vestida + recuo lento**

Fase 1 (0–2.5s): a modelo pinça levemente o tecido da roupa que está vestindo e o levanta em direção à câmera, mostrando material e caimento. Fase 2 (2.5s–fim): solta o tecido e recua lentamente, revelando o look completo de cima a baixo. Câmera fixa, sujeito se move.

---

### [prompt-animacao-roupa-achado-revela-e-recua.md](prompt-animacao-roupa-achado-revela-e-recua.md)
**Apresentação de peça nas mãos ("olha o que eu achei") + recuo lento**

A modelo NÃO está vestindo a peça — ela a segura com as duas mãos e a exibe para a câmera com energia de descoberta genuína. A referência de imagem (onde ela veste a peça) é usada apenas para replicar a peça com fidelidade. Mesma estrutura de dois fases: revelar erguendo a peça → recuar mantendo a peça visível.

---

## Tabela rápida

| # | Arquivo | Tipo | Entradas | Resultado |
|---|---|---|---|---|
| 001 | composicao-cena-v1 | Imagem | 3 imgs | Avatar no cenário com roupa |
| 001 | composicao-cena-v2 | Imagem | 3 imgs | Idem + identidade blindada |
| 002 | troca-de-roupa-v1 | Imagem | 2 imgs | Avatar com nova roupa |
| 002 | troca-de-roupa-v2 | Imagem | 2 imgs | Idem + bloqueio de identidade e pele mais rígido |
| 003 | animacao-pov-v1 | Vídeo | 1 img | Aproximação + toque no detalhe |
| 003 | animacao-pov-v2-detalhado | Vídeo | 1 img | Idem pov-v1, com regras muito mais detalhadas de realismo e biomecânica |
| 004 | animacao-pov-v1-gesto-cabelo | Vídeo | 1 img | Idem pov-v1 + gesto de cabelo |
| 004 | animacao-pov-v2-gesto-cabelo-detalhado | Vídeo | 1 img | Idem pov-v1-gesto-cabelo, com regras muito mais detalhadas de realismo e biomecânica |
| 005 | animacao-pov-v1-giro-lateral | Vídeo | 1 img | Aproxima + detalhe + recua + giro tronco lateral para mostrar roupa de perfil |
| 005 | animacao-pov-v2-giro-lateral-detalhado | Vídeo | 1 img | Idem, com fases nomeadas e micro-movimentos humanos detalhados |
| 006 | animacao-json-cta-v1 | Vídeo (JSON) | 1 img | CTA com dedo apontando para baixo |
| 006 | animacao-json-cta-v2-detalhado | Vídeo (JSON) | 1 img | Idem, em inglês, com micro-movimentos humanos detalhados |
| 007 | animacao-cta-beijo-v1 | Vídeo | 1 img | Aproxima e sopra um beijo para a câmera |
| 007 | animacao-cta-beijo-v2-detalhado | Vídeo | 1 img | Idem, com fases nomeadas e micro-movimentos humanos detalhados |
| 008 | animacao-composicao-giro-lateral-v1 | Vídeo | 1 img | Giro lateral ~60–90° para mostrar roupa de perfil → retorna à frente |
| 008 | animacao-composicao-giro-lateral-v2-detalhado | Vídeo | 1 img | Idem, com micro-movimentos humanos e física de tecido/cabelo detalhados |
| — | animacao-produto-revela-e-recua | Vídeo | 1 img | Pinça roupa vestida → recua |
| — | animacao-roupa-achado-revela-e-recua | Vídeo | 1 img | Segura peça nas mãos → recua |
