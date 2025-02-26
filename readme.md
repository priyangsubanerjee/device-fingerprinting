---
Project: "Device Fingerprint Generator"
Author: "Priyangsu"
Published: "25 Feb 2025"
---

## Device Fingerprint Generator

The **Device Fingerprint Generator** is a web-based tool that uniquely identifies devices based on various browser and system attributes. By leveraging JavaScript and web APIs, it creates a consistent fingerprint that can be used for analytics, fraud prevention, and security purposes.

### Features

- Collects non-intrusive browser and device metadata.
- Generates a unique fingerprint without storing personal data.
- Lightweight and efficient for real-time identification.

### Parameters Used

The fingerprint is generated based on the following parameters:

```js
{
  userAgent: navigator.userAgent,
  language: navigator.language,
  screenResolution: `${screen.width}x${screen.height}`,
  colorDepth: screen.colorDepth,
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  platform: navigator.platform,
  hardwareConcurrency: navigator.hardwareConcurrency,
  deviceMemory: navigator.deviceMemory || "unknown",
  touchSupport: "ontouchstart" in window || navigator.maxTouchPoints > 0,
  webGLGPU: getWebGLFingerprint(),
  canvasHash: getCanvasFingerprint(),
}
```

### Fair Usage Policy

This tool is designed for ethical and legal use cases only. Users are expected to:

- **Respect privacy** – Do not use the generator for unauthorized tracking.
- **Ensure compliance** – Follow local regulations (e.g., GDPR, CCPA) when collecting and using fingerprints.
- **Avoid malicious intent** – Any misuse for fingerprinting users without consent is strictly discouraged.

### Live Demo

You can try the **Device Fingerprint Generator** live at:  
[View Live](https://priyangsubanerjee.github.io/device-fingerprinting/)

### Author

Developed by **[@priyangsubanerjee](https://github.com/priyangsubanerjee)**, this project aims to provide an open-source, privacy-conscious way to generate device fingerprints without relying on third-party services.

For contributions, discussions, or concerns, feel free to open an issue or contribute to the repository.
