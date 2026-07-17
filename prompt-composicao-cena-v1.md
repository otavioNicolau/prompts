---
title: Composição de Cena
desc: Mantém a pessoa da Imagem 1 100% intacta (rosto, corpo, pose, roupa) e troca apenas o cenário/fundo pelo ambiente da Imagem 2.
type: img
tags: img
inputs: Img 1 — Pessoa (mantém intacta) | Img 2 — Cenário/Ambiente (referência)
family: 001
order: 1
---
## TASK TYPE: BACKGROUND REPLACEMENT ONLY (NOT A SUBJECT SWAP)

This is a background/scenario replacement task, nothing else.
The person in Image 1 must remain 100% unchanged — same face, same body, same pose, same clothing, same expression, same skin, same hair.
Only the environment behind her changes, replaced by the environment from Image 2.

Use the first image as the ONLY source for the person — face, body, pose, clothing, expression, everything.
Use the second image ONLY as an environment/background reference — extract the location, lighting, and depth, nothing else.

This must behave like a CUTOUT-AND-PASTE compositing operation, NOT a full re-render.
Preserve the pixels of the person from Image 1 as close to unchanged as physically possible — do not regenerate, redraw, re-light, or reinterpret her face, skin, or body.
Only the pixels OUTSIDE her silhouette (the background) should be newly generated.
If forced to choose between a more "realistic" relighting of the person and preserving her exact features, ALWAYS choose preserving her exact features.

---

## PERSON LOCK (ABSOLUTE — IMAGE 1)

Do NOT change, in any way:
- Face
- Facial expression
- Skin tone
- Hair
- Body shape and proportions
- Pose
- Clothing
- Framing/crop of the person

BODY PROPORTIONS (CRITICAL LOCK):
- Preserve the exact bust, waist, and thigh proportions from Image 1
- Do NOT slim, enlarge, reshape, or "idealize" any body part
- Do NOT make her thinner, curvier, taller, or otherwise different from the source photo
- Her silhouette must measure the same as in Image 1

The person must look like the exact same photo, just placed in a different environment.

---

## ENVIRONMENT EXTRACTION (IMAGE 2)

Extract ONLY:
- Location/setting
- Background elements
- Lighting direction and color temperature
- Depth and spatial layout

If a person is visible in Image 2, she is IRRELEVANT — ignore her face, body, and pose completely.
Treat the space she occupies as open background and remove her entirely from the reference.
Do NOT let any trace of her (face, hair, body, skin tone) transfer into the final image.

---

## COMPOSITING RULES

- Place the person from Image 1 into the environment from Image 2 like a cutout layer, not a repaint
- Keep the person's original pose, angle, and framing exactly as in Image 1 — do NOT reangle or reposition her to match anyone in Image 2
- Do NOT redraw her face, skin, or body to "match" the new lighting — only add a subtle, thin rim of ambient color/shadow at the edges where she meets the new background
- Add natural contact shadows where she meets the new floor/background
- No warping, no resizing, no reshaping, no distortion of the person
- Her facial features, proportions, and skin texture must be pixel-for-pixel the same person as Image 1 — not just "similar" or "inspired by"

---

## STRICT RULES

- Do NOT change anything about the person from Image 1 — this is the most important rule
- Do NOT re-render, re-light, retouch, or "improve" the person's face, skin, or body — treat her as a locked layer
- Do NOT use the face, body, or pose of anyone shown in Image 2
- Do NOT blend identities
- Do NOT add tattoos, piercings, or ink anywhere on the skin
- Do NOT stylize
- Do NOT add text, UI, logos, or watermarks

---

## RENDER QUALITY (BACKGROUND + SEAM ONLY — NOT THE PERSON)

These rules apply to the newly generated background and the seam where it meets the person — they do NOT authorize any change to the person herself:
- Ultra realistic photographic lighting on the environment
- Directional light source matching the new environment
- Soft natural shadow falloff on the ground/background
- Natural depth separation between subject and background
- Subtle depth of field (very light, realistic)
- True camera dynamic range
- No flat lighting
- No overexposure
- No CGI look on the background
- Real camera realism
- Mild natural contrast

---

## FINAL RESULT

A realistic photo where:
- The person is 100% identical to Image 1, pixel-for-pixel where possible — face, body, pose, clothing, expression, and exact bust/waist/thigh proportions unchanged
- The background/environment comes from Image 2
- Only the background and the thin seam around the person show new lighting — the person herself is untouched
- No trace of any other person from Image 2 appears anywhere in the final image
- The result looks attractive and professional purely through photographic quality — lighting, framing, environment, and sharpness — never by altering her body proportions
