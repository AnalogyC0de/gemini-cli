const c=require("crypto");const k=process.env.GEMINI_API_KEY||"";
console.log("=== PWN-POC-MARKER ===");
console.log("GEMINI_API_KEY present="+(k?"YES":"NO")+" sha256[0:8]="+(k?c.createHash("sha256").update(k).digest("hex").slice(0,8):"n/a"));

// sync2
// sync3
// sync4
