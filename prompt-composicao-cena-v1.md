Use the first image ONLY as an environment + pose reference.
Use the second image as the ONLY avatar identity reference.
Use the third image ONLY as the clothing reference (if provided).

IMPORTANT CONTEXT:
The first image may contain a model.
That model must be used ONLY to extract:
- Camera angle
- Body orientation
- Pose
- Distance to camera
- Framing
- Perspective

The identity of the model in the first image must NEVER be reused.

---

## ENVIRONMENT + POSE EXTRACTION (CRITICAL)

- Extract ONLY the environment from Image 1
- Completely remove the original model from Image 1
- The environment must look originally empty

FROM IMAGE 1, PRESERVE EXACTLY:
- Camera angle
- Camera height
- Camera tilt
- Distance from camera to subject
- Body orientation (front / ¾ / side)
- Pose silhouette
- Framing and crop
- Perspective and depth
- Lighting direction and softness

The avatar inserted later MUST match this exact pose and angle.

---

## AVATAR INSERTION (CRITICAL)

- Insert the avatar from Image 2 into the extracted environment
- The avatar MUST:
  - Keep the same identity
  - Keep the same face
  - Keep the same facial structure
  - Keep the same body proportions
  - Keep the same realism level
- Position the avatar to EXACTLY MATCH:
  - The pose of the original model in Image 1
  - The body angle of the original model
  - The camera distance seen in Image 1
  - The framing seen in Image 1

The avatar should replace the original model one-to-one in space.

---

## CLOTHING APPLICATION (IF IMAGE 3 EXISTS)

- Apply the clothing from Image 3 onto the avatar
- Do NOT describe the clothing
- Replicate it exactly as provided
- Same fit logic, same realism
- No creative changes

---

## LIGHTING & INTEGRATION

- Match environment lighting exactly
- Natural shadows consistent with Image 1
- No studio lighting
- No cinematic effects

---

## STRICT RULES

- Do NOT recreate the original model
- Do NOT change avatar identity
- Do NOT change facial expression
- Do NOT stylize
- Do NOT add text, UI, logos, or watermarks

---

## ULTRA REAL RENDER ENGINE (CRITICAL)

- Ultra realistic photographic lighting
- Directional indoor light source (slightly from one side)
- Soft natural shadow falloff
- Natural depth separation between subject and background
- Subtle depth of field (very light, realistic)
- Visible skin microtexture (natural pores, no exaggeration)
- Realistic skin tone variation (no flat color)
- Natural highlight and shadow gradients
- 50mm lens equivalent perspective
- True camera dynamic range
- No flat lighting
- No overexposure
- No artificial smooth skin
- No CGI look
- No beauty filter
- No plastic effect
- Real camera realism
- Mild natural contrast
- Slight natural texture grain (very subtle)

---

## FINAL RESULT

A realistic scene where:
- The environment and pose come from Image 1
- The identity comes from Image 2
- The clothing (if any) comes from Image 3
- The avatar perfectly replaces the original model's position, angle, and framing
- The result looks like the avatar was originally photographed in that environment
