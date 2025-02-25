function getWebGLFingerprint() {
  const canvas = document.createElement("canvas");
  const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

  if (!gl) return "No WebGL support";

  const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
  return debugInfo
    ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) // Extract GPU model
    : "Unknown GPU";
}

function getCanvasFingerprint() {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  ctx.textBaseline = "top";
  ctx.font = "14px Arial";
  ctx.fillText("Hello, fingerprinting!", 10, 10); // Render text to canvas

  return canvas.toDataURL(); // Convert to Base64 string
}

function generateDeviceFingerprint() {
  const fingerprint = {
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
  };

  return hashFingerprint(fingerprint);
}

// Simple Hash Function
function hashFingerprint(fingerprint) {
  const jsonString = JSON.stringify(fingerprint);
  let hash = 0;
  for (let i = 0; i < jsonString.length; i++) {
    hash = (hash << 5) - hash + jsonString.charCodeAt(i);
    hash |= 0; // Convert to 32-bit integer
  }
  return hash.toString();
}

// Generate Unique Fingerprint
const deviceId = generateDeviceFingerprint();
document.getElementById("fingerprint").textContent = deviceId;
console.log("Device Fingerprint:", deviceId);
