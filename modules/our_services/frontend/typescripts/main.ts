import ServicesAndProducts from "./our_services";

const shortcutMap = {'visiting-cards-nav': '#visiting-card', 'stationary-nav': '#stationary', 'brouchers-nav': '#broucher'};
let ourServices = new ServicesAndProducts(shortcutMap, '#service-item', 'nav#move-to-top');

ourServices.activate();
