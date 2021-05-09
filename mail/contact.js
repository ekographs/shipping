$(function () {

    $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
        },
        submitSuccess: function ($form, event) {
            var trackinginput = $("#tracking").val();
            if (trackinginput !="156XE57CHI72GLD4"){
                event.preventDefault();
                $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                     .append("</button>");
                    $('#success > .alert-danger').append($("<strong>").text(" Tracking number not in our system"));
                    $('#success > .alert-danger').append('</div>');
                    $('#contactForm').trigger("reset");
            }        
                },
        filter: function () {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

$('#name').focus(function () {
    $('#success').html('');
});
