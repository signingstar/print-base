import {NavigateSections} from './parallex';

let shortcutMap = {'printed-tshirts-nav': '#printed-tshirts', 'printed-mugs-nav': '#printed-mugs', 'posters-nav': '#posters'};

let stickyNavigation = new NavigateSections('#service-item', shortcutMap);

stickyNavigation.activate();
