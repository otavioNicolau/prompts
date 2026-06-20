# Resumo dos Prompts

## Imagem — Composição de Cena

### [prompt-composicao-cena-v1.md](prompt-composicao-cena-v1.md)
**3 imagens de entrada → 1 imagem composta**

Extrai pose, câmera e ambiente da Imagem 1, substitui a modelo original pela avatar da Imagem 2 e aplica a roupa da Imagem 3. Regras de renderização ultra-realista (50mm, skin texture, sem filtros).

---

### [prompt-composicao-cena-v2.md](prompt-composicao-cena-v2.md)
**Versão aprimorada do v1 com isolamento de identidade mais rígido**

Igual ao v1, mas com bloqueio explícito de transferência de identidade da Imagem 1 (tom de pele, etnia, formato do rosto, proporções corporais). Adiciona regra HARD LOCK de distância e escala: o avatar deve ocupar exatamente o mesmo espaço no quadro que a modelo original — sem zoom, sem reposicionamento.

---

### [prompt-troca-de-roupa.md](prompt-troca-de-roupa.md)
**2 imagens → avatar com nova roupa**

Mantém o avatar da Imagem 1 intacto (rosto, corpo, pose, fundo) e aplica a roupa da Imagem 2 com física de tecido realista. Distingue roupas justas de roupas largas e aplica o caimento correto para cada caso.

---

## Vídeo — Animações POV

### [prompt-animacao-pov-v1.md](prompt-animacao-pov-v1.md)
**Apresentação de roupa — aproximação + toque no detalhe**

A modelo dá dois passos em direção à câmera, toca suavemente um detalhe da roupa (laço/renda no decote), solta e recua. Expressão facial alterna naturalmente entre neutro e sorriso breve. Câmera em POV com micro-movimentos de mão.

---

### [prompt-animacao-pov-v2-gesto-cabelo.md](prompt-animacao-pov-v2-gesto-cabelo.md)
**Versão do v1 com gesto adicional de cabelo**

Idêntico ao v1, mas acrescenta um gesto casual de passar a mão no cabelo (~1 segundo) após a sequência principal de movimentos.

---

### [prompt-animacao-json-cta.md](prompt-animacao-json-cta.md)
**CTA (Call to Action) com dedo apontando para baixo — formato JSON**

Prompt estruturado em JSON (v3.1). A modelo inclina o tronco em direção à câmera, mantém sorriso vendedor e aponta o dedo indicador repetidamente para baixo (indicando link/botão abaixo do vídeo). Sem falar, sem movimento labial. Ambiente interno com luz quente, 8 segundos, 9:16.

---

### [prompt-animacao-produto-revela-e-recua.md](prompt-animacao-produto-revela-e-recua.md)
**Reveal da roupa vestida + recuo lento**

Fase 1 (0–2.5s): a modelo pinça levemente o tecido da roupa que está vestindo e o levanta em direção à câmera, mostrando material e caimento. Fase 2 (2.5s–fim): solta o tecido e recua lentamente, revelando o look completo de cima a baixo. Câmera fixa, sujeito se move.

---

### [prompt-animacao-roupa-achado-revela-e-recua.md](prompt-animacao-roupa-achado-revela-e-recua.md)
**Apresentação de peça nas mãos ("olha o que eu achei") + recuo lento**

A modelo NÃO está vestindo a peça — ela a segura com as duas mãos e a exibe para a câmera com energia de descoberta genuína. A referência de imagem (onde ela veste a peça) é usada apenas para replicar a peça com fidelidade. Mesma estrutura de dois fases: revelar erguendo a peça → recuar mantendo a peça visível.

---

## Tabela rápida

| Arquivo | Tipo | Entradas | Resultado |
|---|---|---|---|
| composicao-cena-v1 | Imagem | 3 imgs | Avatar no cenário com roupa |
| composicao-cena-v2 | Imagem | 3 imgs | Idem + identidade blindada |
| troca-de-roupa | Imagem | 2 imgs | Avatar com nova roupa |
| animacao-pov-v1 | Vídeo | 1 img | Aproximação + toque no detalhe |
| animacao-pov-v2-gesto-cabelo | Vídeo | 1 img | Idem + gesto de cabelo |
| animacao-json-cta | Vídeo (JSON) | 1 img | CTA com dedo apontando para baixo |
| animacao-produto-revela-e-recua | Vídeo | 1 img | Pinça roupa vestida → recua |
| animacao-roupa-achado-revela-e-recua | Vídeo | 1 img | Segura peça nas mãos → recua |
