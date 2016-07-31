import {NavigateSections} from './parallex';

let shortcutMap = {'visiting-cards-nav': '#visiting-cards', 'stationary-nav': '#stationary', 'brouchers-nav': '#brouchers'};

let stickyNavigation = new NavigateSections('#service-item', shortcutMap);

stickyNavigation.activate();
