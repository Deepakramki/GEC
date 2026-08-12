const fs = require('fs');
let code = fs.readFileSync('src/components/HeroTextSection.tsx', 'utf8');
code = code.replace(/text-sm sm:text-base/g, 'text-lg sm:text-xl');
code = code.replace(/★ SMARTSAVER ★ MONEYSAVER/g, '★ GREENCOIN ★ GREENCOIN');
fs.writeFileSync('src/components/HeroTextSection.tsx', code);
