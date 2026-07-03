const fs = require("fs");
let data = fs.readFileSync("src/data/products.ts", "utf8");
data = "import { solarImages } from \"@/data/solarImages\";\n" + data;
data = data.replace(/images: \[[\s\S]*?\],\s*/g, "images: solarImages.product,\n    ");
fs.writeFileSync("src/data/products.ts", data);
