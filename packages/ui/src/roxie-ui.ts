import 'jquery/dist/jquery.slim';
import 'popper.js';
import 'bootstrap';

import $ from 'jquery/dist/jquery.slim';

$(function() {
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();
});