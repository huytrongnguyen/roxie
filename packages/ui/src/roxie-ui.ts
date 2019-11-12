import 'jquery';
import 'popper.js';
import 'bootstrap';

import $ from 'jquery';
import toastr from 'toastr';

$(function() {
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();

  toastr.options.closeButton = true;
  toastr.options.preventDuplicates = true;
  toastr.options.positionClass = 'toast-bottom-right';
});