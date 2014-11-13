(function ($, root, undefined) {
    $(function () {
    'use strict';
    //Hide the field initially
        $('.child-opt').hide();
        console.log('test1');

    //Selects the dropdown when it it changes
        $(".parent-opt").change(function() {
            console.log('test2');

    //Get the value of the opt selected
            var select = $(this).val();
            console.log(select);

    //Hides all children on change 
            $(this).siblings(".child-opt" ).hide(600);

    //Shows the child opt that matches parent opt selected        
            $(this).siblings(".child-opt" ).each( function( index, element ){
                if ($(this).data('hide-opt') == select) {
                    $(this).show(600);
                }
            });
        });
    });
})(jQuery, this);