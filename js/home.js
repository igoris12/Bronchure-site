import { Benefints } from "./component/benefits.js";
import { Footer } from "./component/footer.js";
import { data } from "./data/benefits.js"
import { footerData } from "./data/footerData.js";
import { disctioptionAnimatoin } from "./component/workProcess.js";
import { CaruselInterfase } from "./component/caruselInterfase.js";
import { CaruselData } from "./data/carusel.js";
import { Carusel } from "./component/carusel.js";

new Benefints(".benefits> .row", data);

new Footer(".footer .gallery", footerData)

disctioptionAnimatoin()

new CaruselInterfase(CaruselData);

new Carusel('.carousel .caruselContainer', CaruselInterfase, CaruselData)