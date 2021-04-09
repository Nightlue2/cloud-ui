let { baseParse } = require("@vue/compiler-core");
let fs = require("fs");
const file = fs
  .readFileSync("./src/components/Dialog/Dialog.demo4.vue")
  .toString();
const parsed = baseParse(file).children.find((n) => n.tag === "demo");
// console.log(
// );
// console.log(parsed.loc.source);
