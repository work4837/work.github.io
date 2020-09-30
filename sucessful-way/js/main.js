$(function() {
    /* *************************************************************************************************************************************
    Scroll 
    ************************************************************************************************************************************* */
    var page = $('html, body');
    var scrollTime = 500;

    $('.scroll-link').on('click', function() {
        var target, scrollPos;
        
        target = $(this).attr('href');
        scrollToPos = $(target).offset().top;

        scrollTo(scrollToPos, scrollTime);
        return false;
    });

    $('#scroll_top').on('click', scrollTo.bind(null, 0, scrollTime));

    function scrollTo(offset, duration) {
        page.animate({
            scrollTop: offset
        }, duration);
    }

    /* *************************************************************************************************************************************
    Menu
    ************************************************************************************************************************************* */
    $('#menu_btn').on('click', function() {
        $(this).toggleClass('active');
        $('#menu').slideToggle();
    });


    /* *************************************************************************************************************************************
    Chart.js
    ************************************************************************************************************************************* */
    var ctx1 = $('#chart1');
    var ctx2 = $('#chart2');
    var chartColors = {
        yellow: '#eaa930',
        orange: '#e37830',
        violet: '#8337ca',
        green: '#77d654'
    }

    var chartOptions = {
        legend: false,
        tooltips: false,
        hover: {mode: null}
    };

    var chart1 = new Chart(ctx1, {
        type: 'doughnut',
        data: {
            // labels: ['1-3 млн.', '3-5', 'Yellow', 'Green'],
            datasets: [{ 
                label: '# of Votes',
                data: [14, 19, 35, 32],
                backgroundColor: [
                    chartColors.yellow,
                    chartColors.orange,
                    chartColors.violet,
                    chartColors.green
                ],
                borderColor: [
                    chartColors.yellow,
                    chartColors.orange,
                    chartColors.violet,
                    chartColors.green
                ],
                borderWidth: 1
            }]
        },
        options: chartOptions
    });

    var chart2 = new Chart(ctx2, {
        type: 'doughnut',
        data: {
            // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{ 
                label: '# of Votes',
                data: [1, 7, 25, 67],
                backgroundColor: [
                    chartColors.yellow,
                    chartColors.orange,
                    chartColors.violet,
                    chartColors.green
                ],
                borderColor: [
                    chartColors.yellow,
                    chartColors.orange,
                    chartColors.violet,
                    chartColors.green
                ],
                borderWidth: 1
            }]
        },
        options: chartOptions
    });
});