$(document).ready(function () {
    $('#myNavBtn').on('click', function () {
        $('.animated-icon3').toggleClass('open');
    });

    var breakCount = parseInt($('#breakTime').html());
    var sessionCount = parseInt($('#sessionTime').html());
    var buzzer = $('#buzzer')[0];

    $('#playPause').hide();
    $('#reset').hide();

    $('#subSession').click(function () {
        sessionCount -= 5;
        $('#sessionTime').html(sessionCount)
    })
    $('#subBreak').click(function () {
        breakCount -= 5;
        $('#breakTime').html(breakCount)
    })
    $('#addSession').click(function () {
        sessionCount += 5;
        $('#sessionTime').html(sessionCount)
    })
    $('#addBreak').click(function () {
        breakCount += 5;
        $('#breakTime').html(breakCount)
    })

});