$(document).ready(function () {
    $('#myNavBtn').on('click', function () {
        $('.animated-icon3').toggleClass('open');
    });

    var breakCount = parseInt($('#breakTime').html());
    var sessionCount = parseInt($('#sessionTime').html());
    var buzzer = $('#buzzer')[0];

    $('#playPause, #reset').hide();

    $('#start').click(function () {
        var counter = setInterval(timer, 1000);

        function timer() {
            $('#playPause') == true;
            $('#start').html(sessionCount);
            $('#playPause, #reset').show();
            sessionCount -= 1;

            if (sessionCount === 0) {
                buzzer.play();
                clearInterval(counter);
            }
            if ($('#playPause').click && $('#playPause') == true) {
                clearInterval(timer);
                $('#playPause') == false;
            } else if ($('#playPause').click && $('#playPause') == false) {
                setInterval(timer, 1000);
                $('#playPause') == true;
            }
        }

    });
    $('#subSession').click(function () {
        if (sessionCount > 5) {
            sessionCount -= 5;
            $('#sessionTime').html(sessionCount)
        }
    });
    $('#subBreak').click(function () {
        if (breakCount > 5) {
            breakCount -= 5;
            $('#breakTime').html(breakCount)
        }
    });
    $('#addSession').click(function () {
        sessionCount += 5;
        $('#sessionTime').html(sessionCount)
    });
    $('#addBreak').click(function () {
        breakCount += 5;
        $('#breakTime').html(breakCount)
    });

});