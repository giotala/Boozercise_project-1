const dialog = new 
mdc.dialog.MDCDialog(document.querySelector('#my-mdc-dialog'));
    
dialog.show();

dialog.listen('MDCDialog:accept', function() {
  console.log('accepted');
})

dialog.listen('MDCDialog:cancel', function() {
  console.log('canceled');
})

