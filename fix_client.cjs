const fs = require("fs");

const files = [
  "src/components/sections/Stats.tsx", 
  "src/components/sections/Process.tsx", 
  "src/components/sections/Benefits.tsx", 
  "src/components/sections/FAQ.tsx"
];

files.forEach(file => {
  let data = fs.readFileSync(file, "utf8");
  if (data.includes("use client")) {
    data = data.replace(/(["']use client["'];?\s*)/g, "");
    data = "\"use client\";\n\n" + data;
    fs.writeFileSync(file, data);
  }
});
