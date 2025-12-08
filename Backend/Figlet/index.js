import figlet from "figlet";

async function doStuff() {
  const text = await figlet.text("Dora");
  console.log(text);
}

doStuff();