// will execute when page is loads and ready
$(document).ready(function () {
// will use on click function on startbutton id which will start the game
    $('#startButton').on('click', function () {
        $("#startButton").hide();
        $('#allQuestions').show();
        $('#timeRemaining').show();
        $('.button3').show();
        results.start()
    })

    var results = {
        correct: 0,
        incorrect: 0,
        fifteenSecs: 15,
// will decrease by 1 until equal 0 then alert time is up and run submit function
        clock: function () {
            results.fifteenSecs--;
            $('#fifteenSecs').html(results.fifteenSecs);
            if (results.fifteenSecs === 0) {
                alert("Time is up");
                results.submit();
                $('#fifteenSecs').hide();
            }
        },
        start: function () {
            timer = setInterval(results.clock, 1000);

        },
// will tally up radio checks and display the amount of correct/incorrect answers
        submit: function () {
            var trueRadios = $("input:radio[value=true]:checked");
            trueRadios = trueRadios.length;
            $("#correctAnswers").html(trueRadios);
            var falseRadios = $("input:radio[value=false]:checked");
            falseRadios = falseRadios.length;
            $("#incorrectAnswers").html(falseRadios);
            //will show answers 
            $('#answers').show();
        }
    }

});