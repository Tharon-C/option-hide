(function ($, root, undefined) {
    console.log('testing');
    $(function () {
        'use strict';

        //Hide the field initially
        $('.child-opt').hide();

        //Show the item only when related option is chosen
        $('#parent-opt').change(function () {
            var select = $('#parent-opt').val();
            console.log(select);

            var opt = $('.child-opt').attr('data-hide-opt');
            console.log(opt);

            $(".child-opt").each(function (index, element) {
                console.log($(this).attr('data-hide-opt'));
            });

            if (select == opt) {
                $('.child-opt').attr('data-hide-opt', opt).show('slow');
            } else {
                $('.child-opt').attr('data-hide-opt', opt).hide('slow');
            }
        });
    });

})(jQuery, this);
