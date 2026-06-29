---
title: Composição de Cena v2
desc: Versão aprimorada com bloqueio absoluto de identidade. Nenhum traço da modelo da Imagem 1 (etnia, tom de pele, proporções) pode transferir para o avatar. HARD LOCK de distância e escala.
type: img
tags: img
inputs: Img 1 — Ambiente + Pose | Img 2 — Avatar | Img 3 — Roupa
order: 2
---
Use the first image ONLY as an environment + pose reference.
Use the second image as the ONLY avatar identity reference.
Use the third image as the ONLY clothing reference (if provided).

---

## IDENTITY ISOLATION RULE (ABSOLUTE)

The first image is used ONLY for:
- Camera angle
- Camera height
- Camera tilt
- Body orientation
- Pose
- EXACT distance to camera (CRITICAL LOCK)
- EXACT subject size in frame (CRITICAL LOCK)
- Framing
- Perspective

The first image MUST NOT influence:
- Skin tone
- Face structure
- Body type
- Ethnicity
- Hair color
- Hair texture
- Facial features
- Makeup
- Body proportions
- Weight
- Age appearance

**ZERO IDENTITY TRANSFER FROM IMAGE 1.**

---

## ENVIRONMENT EXTRACTION (STRICT)

- Extract ONLY the background from Image 1
- Completely remove the original model
- Remove any remaining silhouette traces
- The environment must look originally empty
- Preserve exact camera framing and perspective
- Preserve exact camera-to-subject distance reference

---

## AVATAR IDENTITY LOCK (CRITICAL)

The avatar from Image 2 is the ONLY identity source.

ABSOLUTE LOCK:
- Preserve exact face
- Preserve exact skin tone
- Preserve exact body proportions
- Preserve exact body weight
- Preserve exact ethnicity
- Preserve exact hair color
- Preserve exact hair texture
- Preserve realism level

DO NOT reinterpret.
DO NOT blend identities.
DO NOT adapt to Image 1 body type.

---

## POSE + DISTANCE MATCHING (CRITICAL)

- Match the body angle exactly
- Match arm positioning exactly
- Match shoulder alignment
- Match hip orientation

### DISTANCE RULE (HARD LOCK)

- The avatar MUST be placed at the EXACT same distance from the camera as the original model in Image 1
- The avatar MUST occupy the SAME scale in the frame (same height proportion)
- The avatar MUST NOT appear closer or further than the original reference
- DO NOT zoom in or out to fit
- DO NOT reposition forward or backward
- DO NOT resize subject artificially

The placement must be a 1:1 spatial replacement.

---

## CLOTHING

- Apply clothing from Image 3 exactly
- No redesign
- No reinterpretation

---

## LIGHTING

- Match environment lighting direction only
- Do NOT recolor skin tone
- Do NOT change complexion
- Do NOT adapt tone to background

---

## STRICT PROHIBITIONS

- No identity blending
- No skin tone adaptation
- No body reshaping
- No face morphing
- No ethnicity shift
- No hair recoloring
- No structural facial changes
- No distance variation
- No subject scaling differences

---

## FINAL RESULT

A realistic scene where:
- The environment and pose come from Image 1
- The identity comes 100% from Image 2
- The clothing comes from Image 3
- The avatar replaces the original model EXACTLY in position, scale, and distance
- The avatar's identity remains completely unchanged
