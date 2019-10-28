import 'jquery/dist/jquery.slim';
import 'popper.js';
import 'bootstrap';

import $ from 'jquery';

$(function() {
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();
});