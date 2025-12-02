import figlet from "figlet";

async function doStuff() {
  const text = await figlet.text("Sorry");
  console.log(text);
}

doStuff();