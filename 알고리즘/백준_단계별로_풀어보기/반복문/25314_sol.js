const exc = () => {
  let n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
  console.log("long ".repeat(n / 4) + "int");
};

exc();