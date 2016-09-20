import ServicesAndProducts from "./our_services"

require('../components')

const shortcutMap = {'visiting-cards-nav': '#visiting-card', 'stationary-nav': '#stationary', 'brouchers-nav': '#broucher'}
let ourServices = new ServicesAndProducts(shortcutMap, '#marketing-item', 'nav#move-to-top')
ourServices.activate()
