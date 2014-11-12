(function ($, root, undefined) {
$(function () {
'use strict';
//Hide the field initially
        $('.child-opt').hide();

        //Show the item only when related option is chosen
        $('.parent-opt').change(function() {
            var select = $(this).val();
            $( ".child-opt" ).hide(800);

            $( ".child-opt" ).each( function( index, element ){
                if ($(this).data('hide-opt') == select) {
                    $(this).show(800);
                }
            });
        });
});
})(jQuery, this);