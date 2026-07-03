const fs = require("fs");

function replaceImg(file) {
  let data = fs.readFileSync(file, "utf8");
  if (!data.includes("SolarImage")) {
    data = `import { solarImages } from "@/data/solarImages";\nimport { SolarImage } from "../ui/SolarImage";\n` + data;
  }
  
  data = data.replace(/<img\s*[\n\s]*src=["']https:\/\/images\.unsplash\.com[^"']*["'][\n\s]*alt=["']([^"']+)["'][\n\s]*className=["']([^"']+)["'][\n\s]*\/>/g, 
    (match, alt, className) => {
      return `<SolarImage \n          src={solarImages.fallback} \n          alt="${alt}"\n          className="${className}"\n        />`;
    }
  );
  
  fs.writeFileSync(file, data);
}

["src/components/sections/Stats.tsx", "src/components/sections/Process.tsx", "src/components/sections/Benefits.tsx", "src/components/sections/FAQ.tsx"].forEach(replaceImg);
