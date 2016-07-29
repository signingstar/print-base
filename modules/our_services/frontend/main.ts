import {slidePromotionalHeader} from '../../promotion_header/frontend/main';
import {fixTabHeader, processShortcutSelection, updateShortcutSelection} from './parallex';
import * as _ from "underscore";
import * as $ from 'jquery';

slidePromotionalHeader();

fixTabHeader();

$('.left-panel li').on("click", function(ev) {
  processShortcutSelection($(this), ev);
});

let processShortcutSelection1 = _.throttle(updateShortcutSelection, 10);
$(window).on("resize scroll", processShortcutSelection1);
