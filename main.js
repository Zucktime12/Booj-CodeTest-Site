$('#tab_selector').on('change', function (e) {
    $('.form-tabs li a').eq($(this).val()).tab('show');
});