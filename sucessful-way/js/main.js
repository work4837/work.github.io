$(function() {

    // Window resize
    var replaced = false;
    $(window).on('resize load', function() {
        if ($(this).width() <= 1024 && replaced === false) {
            $('.about__content:eq(0)').append($('#replace_text'));
            replaced = true;
        } else if ($(this).width() > 1024 && replaced === true) {
            $('.about__block').append($('#replace_text'));
            replaced = false;
        }
    });

    // Scroll
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

    // Menu
    $('#menu_btn').on('click', function() {
        $(this).toggleClass('active');
        $('#menu').slideToggle(300);
    });

    // Mask
    $('#phone_mask').mask("+7 (999) 999-99-99");

    // Chart.js
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