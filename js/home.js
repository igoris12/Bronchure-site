import { Benefints } from "./component/benefits.js";
import { Footer } from "./component/footer.js";
import { data } from "./data/benefits.js"
import { footerData } from "./data/footerData.js";
import { disctioptionAnimatoin } from "./component/workProcess.js";
import { CaruselInterfase } from "./component/caruselInterfase.js";
import { Carusel1 } from "./data/carusel.js";

new Benefints(".benefits> .row", data);

new Footer(".footer .gallery", footerData)

disctioptionAnimatoin()

CaruselInterfase(Carusel1);