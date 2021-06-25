import { Benefints } from "./component/benefits.js";
import { Footer } from "./component/footer.js";
import { data } from "./data/benefits.js"
import { footerData } from "./data/footerData.js";

new Benefints(".benefits> .row", data);

new Footer(".footer .gallery", footerData)