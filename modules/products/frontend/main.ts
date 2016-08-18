import ServicesAndProducts from "../../our_services/frontend/typescripts/our_services";

const shortcutMap = {'printed-tshirts-nav': '#printed-tshirts', 'printed-mugs-nav': '#printed-mugs', 'posters-nav': '#posters'};

let ourServices = new ServicesAndProducts(shortcutMap, '#service-item');
ourServices.activate();
