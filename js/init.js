(function($){
  $(function(){

    $('.button-collapse').sideNav({
        edge: 'right', // Choose the horizontal origin
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
      }
    );
    $('.slider').slider();

  }); // end of document ready
})(jQuery); // end of jQuery name space