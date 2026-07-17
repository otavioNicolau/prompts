---
title: Animação CTA v2 — Dedo Apontando (Detalhado)
desc: Versão expandida do CTA em JSON — aproxima, sorri e aponta o dedo para baixo duas vezes, com micro-movimentos humanos (respiração, piscar, transferência de peso) e bloqueio explícito contra tatuagens/mudanças de cabelo. 8s · 9:16 · sem fala.
type: vid
tags: json vid beta
inputs: Img 1 — Avatar
family: 006
order: 12
---
```json
{
  "version": "3.1",
  "aspectRatio": "9:16",
  "durationSeconds": 8,
  "seed": 12345,

  "subjectRef": "Use the uploaded image as the absolute identity anchor. Preserve exactly the same facial identity, facial structure, facial proportions, skin tone, skin texture, hairstyle, hair color, hair texture, hair volume, hair length, body proportions, clothing, pose proportions and overall appearance throughout the entire video. Identity preservation has absolute priority. Never redesign, beautify, reinterpret or modify any aspect of the subject.",

  "referenceStyle": "natural cinematic realism, authentic smartphone recording, direct eye contact, realistic human behavior",

  "negativePrompt": "no audio, no music, no ambient sound, no speech, no lip-sync, no mouth articulation, no subtitles, no captions, no text, no logos, no watermarks, no UI, no visual effects, no CGI appearance, no AI artifacts, no body deformation, no facial deformation, no extra fingers, no distorted hands, no distorted limbs, no beauty filters, no skin smoothing, no glamour retouching, no stylization, no tattoos, no piercings, no scars, no body paint, no skin markings, no hair color changes, no hairstyle changes, no hair length changes, no hair texture changes, no lighting changes that alter skin tone or hair color",

  "safety": {
    "allowMinorViolence": false,
    "allowNudity": false
  },

  "shots": [
    {
      "scene": "Warm residential interior with wooden trim, softly blurred background and natural depth.",

      "action": "The subject begins standing comfortably at a natural distance from the camera with a relaxed posture and a neutral facial expression. She calmly takes one natural step forward while maintaining direct eye contact with the camera. As she approaches, her expression gradually transitions into a warm, friendly and inviting smile. Without speaking or articulating any words, she slowly raises her right hand and clearly points her index finger toward the bottom edge of the frame, never toward the camera lens. She performs two small, smooth downward pointing gestures, resembling a subtle visual call-to-action. Her smile remains warm and natural during the gesture. Visible breathing, occasional blinking, tiny eye refocusing, subtle weight transfer between both feet, gentle shoulder relaxation and natural balance corrections occur continuously throughout the animation. Hair moves only slightly as a natural consequence of body movement while remaining visually identical in color, texture, volume and length. Clothing follows realistic fabric physics with natural folds and subtle movement. After completing the pointing gesture, she relaxes her arm naturally while maintaining eye contact and a pleasant smile until the end of the clip.",

      "camera": "POV perspective from a person standing still while holding a smartphone. Camera remains intentionally locked-off and completely stable throughout the shot. Chest-to-face height, 50mm lens equivalent, 24fps, 1/120 shutter, continuous autofocus on the eyes, shallow depth of field, fixed framing, fixed focal length, no zoom, no pan, no tilt, no handheld shake, no micro-jitter and no focus breathing.",

      "lighting": "Soft warm side lighting with gentle frontal fill. Stable exposure, constant white balance, consistent color temperature and realistic skin rendering throughout the entire video without any lighting variation.",

      "environment": "Realistic residential interior with softly blurred background, natural depth separation, accurate perspective, subtle realistic motion blur, authentic photographic rendering, realistic clothing physics, gentle natural hair movement caused only by body motion, no environmental distractions and complete visual consistency from beginning to end."
    }
  ]
}
```
