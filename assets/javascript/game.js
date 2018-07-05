        $(document).ready(function () {

            //Computer random number variable

            var pCNumber = "";

            for (var i = 0; i < 120; i++) {
                var randomNumber = Math.floor((Math.random() * 120)) + 19;

        pCNumber = randomNumber;

        $(".randomNumber").text(pCNumber);


        // Crystal Values that range from 1 - 12
        var crystalNumOne = Math.floor(Math.random() * 11) + 1;
        var crystalNumTwo = Math.floor(Math.random() * 11) + 1;
        var crystalNumThree = Math.floor(Math.random() * 11) + 1;
        var crystalNumFour = Math.floor(Math.random() * 11) + 1;


        //Keep Score
        var userTotal = 0;
        var w = 0;
        var losses = 0;

        //Write the score on the page
        $(".wns").text(w);
        $(".lss").text(losses);
        $(".rockClicks").text(userTotal);


        //Start the game over after user loses

                function reset() {
            pCNumber = Math.floor(Math.random() * 120) + 19;
        console.log(pCNumber)
        $("randomNumber").text(pCNumber);

        crystalNumOne = Math.floor(Math.random() * 11) + 1;
        crystalNumTwo = Math.floor(Math.random() * 11) + 1;
        crystalNumThree = Math.floor(Math.random() * 11) + 1;
        crystalNumFour = Math.floor(Math.random() * 11) + 1;

        userTotal = 0;
        $(".rockClicks").text(userTotal);
    }


    //Tally user wins

                function goodJob() {
            w++;
        $(".wns").text(w);
        reset();
    }

    ///Tally losses

                function lostGame() {
            losses++;
        $(".lss").text(losses);
        reset()
    }

    ///On click for Crystal 1
                $(".pic").on("click", function () {
            userTotal = userTotal + crystalNumOne;
        $(".rockClicks").text(userTotal);

        //If else statements for Crystal 1
                    if (userTotal == pCNumber) {
            goodJob();
        }
                    else if (userTotal > pCNumber) {
            lostGame();
        }
    });


    //on click for Crystal 2
                $(".pic2").on("click", function () {
            userTotal = userTotal + crystalNumTwo;
        $(".rockClicks").text(userTotal);

        //If else statements for Crystal 2
                    if (userTotal == pCNumber) {
            goodJob();
        }
                    else if (userTotal > pCNumber) {
            lostGame();
        }
    });


$(".pic3").on("click", function () {
            userTotal = userTotal + crystalNumThree;
        $(".rockClicks").text(userTotal);

        //If else statements for Crystal 3
                    if (userTotal == pCNumber) {
            goodJob();
        }
                    else if (userTotal > pCNumber) {
            lostGame();
        }
    });

$(".pic4").on("click", function () {
            userTotal = userTotal + crystalNumFour;
        $(".rockClicks").text(userTotal);

        //If else statements for Crystal 4
                    if (userTotal == pCNumber) {
            goodJob();
        }
                    else if (userTotal > pCNumber) {
            lostGame();
        }
    });
}
        });

