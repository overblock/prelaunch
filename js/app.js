$(window).on('load', function () {
    $('#myForm').submit(function (e) {
        e.preventDefault();
        $('.btn').prop('disabled', true);
        $("#formsubmit").text("Joining waitlist");
        VL.options.form_fields.form_firstName = $('#firstname').val(); 
        VL.options.form_fields.form_email = $('#email').val(); 
        VL.options.form_fields.form_lastName = $('#lastname').val(); 
        VL.createLead(function () {
                    VL.openModal();
        });
    });
});







