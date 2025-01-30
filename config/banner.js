import figlet from "figlet";
import { ColorTheme } from "./colors.js";

const colors = new ColorTheme();

function displayBanner() {
  const banner = figlet.textSync("Hanafuda BOT", {
    font: "ANSI Shadow",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 100,
  });

  console.log(colors.style(banner, "header"));
  console.log(
    colors.style("===============================================", "border")
  );
  console.log(colors.style("======== RECODEAN BANG BY HOLMESAIRS ========", "link"));
  console.log(colors.style("======== https://t.me/AirdropHoka ========", "link"));
  console.log(
    colors.style("===============================================\n", "border")
  );
}

export default displayBanner;
