
$(document).ready(function(){

    if ($('.dashboard').hasClass('expand')) {
        console.log("Menu opened");
    }
    else{
        console.log("Menu opened else");
        $('#communication-server-sub-menu').hide(); 
    }
    $("#communication-server").click(function(){
        if($(this).closest('.dashboard').hasClass('expand')){
            $('#communication-server-sub-menu').toggle();
            console.log(" communication-server if ");
        }
        else{
            $(this).closest('.dashboard').toggleClass('expand');   
            $('#communication-server-sub-menu').toggle();  
             console.log(" communication-server else ");   
        }
    });
    $("#communication-server-sub-menu li").click(function(){
        if($(this).closest('.dashboard').hasClass('expand')){
            $('#communication-server-sub-menu').show();
        }
        else{
            $(this).closest('.dashboard').toggleClass('expand');   
            $('#communication-server-sub-menu').hide();     
        }
    }); 

    var serverLink = $("#communication-server")[0]; 
    if(!$($(serverLink).parent()[0]).hasClass('active')){
        $('#communication-server-sub-menu').hide(); 
    }


    $('#warn-popup').height($(".system-check.system-check-2").outerHeight()+$(".date-range").outerHeight()+$(".section").outerHeight()-2);

    $('#watchDropDown').click(function (e) {
        $('#watchDropDown-popup').siblings('.popup').hide();
        $('#watchDropDown-popup').toggle().css({left: $(this).parent().position().left});
        $('.overlay').show();
        e.stopPropagation();
    });


    $(".alertInfo").on("click",function(){ 

        /*
        if(!$(".section").hasClass("shrink")){
            
            $(".section").removeClass("expand");
            $(".system-check.system-check-2").removeClass("expand");
            $(".date-range-box").removeClass("expand"); 


            $(".section").addClass("shrink");
            $(".system-check.system-check-2").addClass("shrink");
            $(".date-range-box").addClass("shrink");    
            if ($('.area-uti-system-check .system-check-slider').length > 0) {
                $('.area-uti-system-check .system-check-slider').slick('unslick');
                $('.area-uti-system-check .system-check-slider').slick({
                    infinite: false,
                    slidesToShow:4,
                    slidesToScroll: 1,
                    arrows: true
                });
            }


        }else{
            $(".section").addClass("expand");
            $(".system-check.system-check-2").addClass("expand");
            $(".date-range-box").addClass("expand");    

            $(".section").removeClass("shrink");
            $(".system-check.system-check-2").removeClass("shrink");
            $(".date-range-box").removeClass("shrink"); 
        }
        */
        
    });

    $('html').click(function () {
        $("header.header").find('.popup').hide();
     });

});

$(document).ready(function () {

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        }
        return "";
    }

    function checkCookie() {
        var user = getCookie("onguardcollapse");
        if (user != "") {
            return user
        }
        return "";
    }

    var cok = checkCookie();
    if(cok == "Yes"){
        $('.dashboard').removeClass('expand');
    }
    else{
        $('.dashboard').addClass('expand');
    }

    /*style select*/
    $('select').selectmenu({
        change: function (event, data) {
            if (data.item.value !== 0) {
                $(this).siblings('.ui-selectmenu-button').addClass('changed');
            } else {
                $(this).siblings('.ui-selectmenu-button').removeClass('changed');
            }
        }
    });

    /*form submit with enter*/
    $('form[name=loginForm] input').keypress(function (e) {
        if (e.which == 13) {
            $('form[name=loginForm]').submit();
        }
    });
    /*form submit with button*/
    $('form[name=loginForm] a.btn').click(function (e) {
        $('form[name=loginForm]').submit();
    });

    /*form submit*/
    var empty = false;
    $('form[name=loginForm]').submit(function () {
        if ($('input[name=username]').hasClass('error')) {
            return;
        }
        $(this).find('input').each(function () {
            if ($(this).val() === '') {
                empty = true;
            }
        });
        if (empty) {
            $('input[name=username], span.error-msg').addClass('error');
            return false;
        }
    });

    /*system check slider*/
    if ($('.system-check-slider').length > 0) {
        $('.system-check-slider').slick({
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1
        })
        $('.system-check-slider .slick-prev').addClass('disb');
    }

    $('.slick-prev').on('click', function(e){
        var currentSlide = $('.system-check-slider').slick('slickCurrentSlide');
        if(currentSlide == 0){
            $('.system-check-slider .slick-prev').addClass('disb');
        }
        $('.system-check-slider .slick-next').removeClass('disb');
        console.log(currentSlide);
    });
    $('.slick-next').on('click', function(e){
        var currentSlide = $('.system-check-slider').slick('slickCurrentSlide');
        if(currentSlide == 3){
            $('.system-check-slider .slick-next').addClass('disb');
        }
        $('.system-check-slider .slick-prev').removeClass('disb');
        console.log(currentSlide);
    });

    if ($('.system-check-slider-2').length > 0) {
        $('.system-check-slider-2').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1
        });
    }

    if ($('.slider-chart').length > 0) {
        setTimeout(function () {
            $('.slider-chart').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1
            });
        }, 1500)
    }

    /*set slider values*/
    setTimeout(function () {
        $('.system-check-slider').find('.item').each(function () {
            var data = $(this).data('details').split('-');
            $(this).find('.count').html(data[0]);
            $(this).find('.percentage').html(data[1]+'%');
            $(this).find('.slide-bar').width(data[2] + '%');
            $(this).find('.slide-ball').css('left', data[2] + '%');
            $(this).addClass(data[3]);
            $(this).find('.name').html(data[4]);
        });

        $('.system-check-slider-2').find('.item').each(function () {
            var data = $(this).data('details').split('-');
            $(this).find('.count').html(data[0]);
            $(this).find('.percentage').html(data[1] + '%');
            $(this).find('.slide-bar').width(data[2] + '%');
            $(this).find('.slide-ball').css('left', data[2] + '%');
            $(this).addClass(data[3]);
            $(this).find('.name').html(data[4]);
        });
        $('.system-check-slider').on('swipe', function(event, slick, direction){
            console.log("swipe");
            console.log(direction);
            // left
        });

        $('.system-check-slider').on('edge', function(event, slick, direction){
            console.log('edge was hit')
        });


        $('.system-check-slider-2').find('.headqua').click(function () {
            window.location = "area-utilization.html#area-link";
        });

        $('.system-check-slider-2').find('.carrie').click(function () {
            window.location = "area-utilization.html#headquarters-chart";
        });

        $('.system-check-slider-2').find('.sec-prin').click(function () {
            window.location = "area-utilization.html#carriers-chart";
        });

        $('.system-check-slider-2').find('.linclin').click(function () {
            window.location = "area-utilization.html#secure-printing-chart";
        });

        /*hardware item slider*/
        $('.scroll-content .item').find('.item-details').each(function () {
            var data = $(this).data('details');
            $(this).find('.slide-bar').width(data + '%');
        });
    }, 100);

    /*show hide sub menu*/
    $('.main-nav ul li a.cs').click(function (e) {
        e.preventDefault();
        $(this).closest('li').siblings().find('.sub-menu').hide();
        $(this).closest('li').find('.sub-menu').toggle();
        return false;
    });

    /*calendar tabs*/
    $(".tabs").tabs({
        activate: function (event, ui) {
            if ($(ui.newTab.context).attr('href') === '#calendar-view') {
                $('#calendar').fullCalendar('render');
            }
        },
        active: 1
    });
    /*tabs-column*/
    $(".tabs-column").tabs({});


    /*init calendar popup*/
    var today = new Date();
    var d = today.getDate();
    var m = today.getMonth();
    var y = today.getFullYear();
    //enter events with complete date plus time.
    var events = [
        {
            title: 'Server 4 Backup Schedule Start',
            start: new Date(y, m, d - 2, 0, 0),
            end: new Date(y, m, d, 23, 0),
            location: "New data center, SF",
            priority: "Urgent"

        },
        {
            title: 'Server 5 Backup Schedule Start',
            start: new Date(y, m, d + 3, 10, 50),
            end: new Date(y, m, d + 3, 11, 30),
            location: "New data center, SF"
        },
        {
            title: 'Maintenance Routines',
            start: new Date(y, m, d + 3, 14, 50),
            end: new Date(y, m, d + 3, 17, 30),
            allDay: false
        },
        {
            title: 'Maintenance Routines',
            start: new Date(y, m, d + 13, 14, 50),
            end: new Date(y, m, d + 13, 17, 30),
            allDay: false
        },
        {
            'title': 'test2',
            'start': '2014-09-17T00:00:00',
            'end': '2014-09-19T01:00:00',
            'backgroundColor': '#ff0000'
        }
    ];

    function initCalendar() {

        if ($('#calendar').fullCalendar('destroy'));
        /*calendar*/
        $('#calendar').fullCalendar({
            header: {
                left: '',
                center: '',
                right: ''
            },
            eventAfterAllRender: function (view) {
                setTimeout(function () {
                    $('.fc-row tr:first-child').find('.fc-event-container').each(function (i, elem) {
                        //console.log(i);
                        //console.log(elem);
                        var tds = $(elem).parent().find('td');
                        var index = $(tds).index($(elem));
                        for (var i = 0; i < elem.colSpan; i++) {

                            var day = $(elem).parent().parent().siblings('thead').find("td:nth-child(" + (index + i + 1) + ")");
                            //console.log($(day).text());
                            $(day).html("<span class='event'>" + $(day).text() + "</span> ")
                        }
                    });
                }, 10)
            },
            viewRender: function (view, element) {
                var vw = view;
                setTimeout(function () {
                    $('.fc-day-grid .fc-content-skeleton').find('.fc-today').html("<span class='today'>" + today.getDate() + "</span> ");
                }, 10)
            },
            events: events
        });




        function setCurrentDateEvent() {
            $('.fc-day-number').removeClass('active');
            $(".fc-view-container").addClass('active');

            var date = moment((new Date()).toDateString()).format('YYYY-MM-DD');
            var dateEvents = [];
            for (var i = 0; i < events.length; i++) {
                //console.log(events[i].end);
                if (moment(events[i].start).format('YYYY-MM-DD') <= date && moment(events[i].end).format('YYYY-MM-DD') >= date) {
                    dateEvents.push(events[i]);
                }
            }
            var eventsHolder = $('.calendar-popup #calendar-view .events');
            eventsHolder.find('h2').html(moment(date).format('dddd MMMM D'));
            eventsHolder.show().find('ul').empty();
            for (i = 0; i < dateEvents.length; i++) {
                var event = '<li><a href="javascript:">' + dateEvents[i].title + '</a><span>' + moment(dateEvents[i].start).format('h:mm A') + ' - ' + moment(dateEvents[i].end).format('h:mm A') + '</span>';
                if (dateEvents[i].location) {
                    event += '<span>' + dateEvents[i].location + '</span>';
                }
                if (dateEvents[i].priority) {
                    event += '<span>' + dateEvents[i].priority + '</span>';
                }
                if (dateEvents[i].reoccurence) {
                    event += '<span>' + dateEvents[i].reoccurence + '</span>';

                }
                event += '</li>';

                eventsHolder.find('ul').append(event);
            }
        }



        /*set date label*/
        $('.calendar-popup .month').find('span').html(moment().format('MMMM YYYY'));

        /*event click function*/
        $(".fc-view-container").on("click", ".fc-day-number", function () {
            $('.fc-day-number').removeClass('active');
            $(this).addClass('active');
            var date = $(this).data('date');
            console.log(date);
            var dateEvents = [];
            for (var i = 0; i < events.length; i++) {
                //console.log(events[i].end);
                if (moment(events[i].start).format('YYYY-MM-DD') <= date && moment(events[i].end).format('YYYY-MM-DD') >= date) {
                    dateEvents.push(events[i]);
                }
            }
            var eventsHolder = $('.calendar-popup #calendar-view .events');
            eventsHolder.find('h2').html(moment(date).format('dddd MMMM D'));
            eventsHolder.show().find('ul').empty();
            for (i = 0; i < dateEvents.length; i++) {
                var event = '<li><a href="javascript:">' + dateEvents[i].title + '</a><span>' + moment(dateEvents[i].start).format('h:mm A') + ' - ' + moment(dateEvents[i].end).format('h:mm A') + '</span>';
                if (dateEvents[i].location) {
                    event += '<span>' + dateEvents[i].location + '</span>';
                }
                if (dateEvents[i].priority) {
                    event += '<span>' + dateEvents[i].priority + '</span>';
                }
                if (dateEvents[i].reoccurence) {
                    event += '<span>' + dateEvents[i].reoccurence + '</span>';
                    
                }
                event += '</li>';
                
                eventsHolder.find('ul').append(event);
            }
            
        });

        setWeeks($('#calendar').fullCalendar('getDate'));
        setCurrentDateEvent();
    }

    /*setWeeks*/
    var currentWeek = 0, monthFirstWeek = 0, activeWeek = 0;

    function setWeeks(currentDate) {
        currentWeek = parseInt(currentDate.format("w"));
        monthFirstWeek = parseInt(currentDate.date(1).format("w"));
        activeWeek = currentWeek;

        $('#list-view .weeks ul').empty();
        for (var i = 0; i < 5; i++) {
            if ((monthFirstWeek + i) === activeWeek) {
                $('#list-view .weeks ul').append('<li><a href="javascript:" data-week="' + (monthFirstWeek + i) + '" class="week active">' + (monthFirstWeek + i) + 'Wk</a></li>');
            } else {
                $('#list-view .weeks ul').append('<li><a href="javascript:" data-week="' + (monthFirstWeek + i) + '" class="week">' + (monthFirstWeek + i) + 'Wk</a></li>');
            }
        }

        $('#list-view .weeks ul').on("click", "li a", function () {
            activeWeek = parseInt($(this).data('week'));
            $(this).addClass('active').parents().siblings().find('a').removeClass('active');
            setWeeksEvent(activeWeek);
        });

        setWeeksEvent(activeWeek);
    }

    /*setWeeksEvent*/
    function setWeeksEvent(activeWeek) {
        var days = [
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ];
        days[0][0] = moment().day("Sunday").week(activeWeek);
        days[1][0] = moment().day("Monday").week(activeWeek);
        days[2][0] = moment().day("Tuesday").week(activeWeek);
        days[3][0] = moment().day("Wednesday").week(activeWeek);
        days[4][0] = moment().day("Thursday").week(activeWeek);
        days[5][0] = moment().day("Friday").week(activeWeek);
        days[6][0] = moment().day("Saturday").week(activeWeek);

        var eventsHolder = $('.calendar-popup #list-view .events');
        eventsHolder.empty();


        var html = "";
        for (var j = 0; j < days.length; j++) {
            days[j][1] = [];
            for (var i = 0; i < events.length; i++) {
                if (moment(events[i].start).format('YYYY-MM-DD') === days[j][0].format('YYYY-MM-DD')) {
                    days[j][1].push(events[i]);
                }
            }
        }

        for (j = 0; j < days.length; j++) {
            if (days[j][1].length > 0) {
                html += '<h2>' + days[j][0].format('dddd. MMMM D') + '</h2>';
                html += '<ul>';
                for (i = 0; i < days[j][1].length; i++) {
                    html += '<li><a href="javascript:">' + days[j][1][i].title + '</a><span>' + moment(days[j][1][i].start).format('h:mm A') + ' - ' + moment(days[j][1][i].end).format('h:mm A') + '</span></li>'
                }
                html += '</ul>'
            }
        }
        eventsHolder.append(html);
    }

    if ($('#calendar').length > 0) {
        initCalendar();
    }

    /*prev month*/
    $('.calendar-popup a.prev').click(function () {
        $('#calendar').fullCalendar('prev');
        $('#calendar').fullCalendar('render');
        $('.calendar-popup .month').find('span').html($('#calendar').fullCalendar('getDate').format('MMMM YYYY'));
        $('.calendar-popup #calendar-view .events').hide();
        setWeeks($('#calendar').fullCalendar('getDate'));
    });

    /*next month*/
    $('.calendar-popup a.next').click(function () {
        $('#calendar').fullCalendar('next');
        $('#calendar').fullCalendar('render');
        $('.calendar-popup .month').find('span').html($('#calendar').fullCalendar('getDate').format('MMMM YYYY'));
        $('.calendar-popup #calendar-view .events').hide();
        setWeeks($('#calendar').fullCalendar('getDate'));
    });

    /*show add events*/
    $('.addEvents').click(function () {
        $('.calendar-popup .add-events').show();
        $('.success-msg').hide();
        $('.add-area').show();
    });

    /*cancel-add-event*/
    $('.cancel-add-event').click(function () {
        $('.calendar-popup .add-events').hide();
    });

    /*date-picker*/
    if ($(".date-picker").length > 0) {
        $(".date-picker").datepicker({
            showOtherMonths: true,
            selectOtherMonths: true,
            dateFormat: 'MM d, yy',
            beforeShow: function () {
                setTimeout(function () {
                    //$('.ui-datepicker').css({'left':'565.5px'});
                }, 0);
            }
        }).datepicker("setDate", new Date());
    }

    /*time-picker*/
    if ($(".time-picker").length > 0) {
        $('.time-picker').timepicker({
            showPeriod: true,
            showLeadingZero: true
        });
    }

    $('a.saveEvent').click(function () {
        var event = {};

        var startDate = $('input[name=eventStartDate]').datepicker("getDate");

        var endDate = $('input[name=eventEndDate]').datepicker("getDate");

        event.title = $('input[name=subject]').val();
        event.location = $("input[name=location]").val();
        event.priority = $("input[name=priority]").val();

        event.reoccurence = $("input[name=reoccurence]").val();

        if (event.title === '') {
            return false;
        }


        event.start = new Date(startDate.getYear() + 1900, startDate.getMonth(), startDate.getDate(), 0, 0);
        event.end = new Date(endDate.getYear() + 1900, endDate.getMonth(), endDate.getDate(), 23, 59);

        events.push(event);


        initCalendar();


        $('input[name=subject]').val('');
        $("input[name=location]").val('');
        $("input[name=priority]").val('');
        $("input[name=reoccurence]").val('');
        //events.push(event);

        $('.success-msg').show();
        $('.add-area').hide();
    });

    $( ".middle-box" ).datepicker( "option", "dayNamesShort", [ "Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam" ] );
    $.datepicker.setDefaults({

    });
    /*show hide calendar popup*/
    $('header .calendar').click(function (e) {
        $('.calendar-popup').siblings('.popup').hide();
        $('.calendar-popup').toggle();
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.overlay').show();
            $('.overlay').height($('.main-section').height());
        } else {
            $('.overlay').hide();
        }
        $('.add-events').hide();
        e.stopPropagation();
        initCalendar();
    });
    
    
    /*upgrade modal window*/
    var currentZindex = 105;
    var modalLoad = function (selector) {
        var modal = $(selector);
        var overlay = '<div class="modal-overlay" data-target="' + modal.attr('id') + '" style="z-index: ' + (++currentZindex) +  '"></div>';
        modal.css('z-index', ++currentZindex);
        $(overlay).insertAfter(modal);
        modalCenter(selector);
        modal.show();
        $(window).resize(function() { modalCenter(selector); });
        $(window).scroll(function() { modalCenter(selector); });
        $('.main-section').height($('#upgrade-modal').height());
        //alert($('.main-section').height());
    };
    
    var modalCenter = function (selector) {
        var $modal = $(selector);
        var top, left;
        top = Math.max($(window).height() - $modal.height(), 0) / 2;
        left = Math.max($(window).width() - $modal.width(), 0) / 2;

        $modal.css({
            top: (top > 0) ? top + $(window).scrollTop(): 0, 
            left: left + $(window).scrollLeft()
        });
    };
    
    $('.upgrade-button').on('click', function() {
        modalLoad('#upgrade-modal');
    });
    $('#upgrade-modal .close-icon').on("click", function() {
        
        var modalHeight = $('#upgrade-modal').height();
        var mainSectionHeight = $('.main-section').height()
        reducedHeight = modalHeight - mainSectionHeight;
        
        $(this).parents('#upgrade-modal').hide();
        $('.modal-overlay[data-target="'+ $(this).parents('#upgrade-modal').attr('id') +'"]').remove(); 
        
         $('.main-section').height(mainSectionHeight - reducedHeight);
    });

    $('.indicators a.date-range').click(function (e) {
        $('.datepicker-popup').siblings('.popup').hide();
        $('.datepicker-popup').toggle().css({left: $(this).parent().position().left});
        e.stopPropagation();
    });

    /*show hide error popup*/
    $('.indicators a.error').click(function (e) {
        $('#error-popup').siblings('.popup').hide();
        $('#error-popup').toggle().css({left: $(this).parent().position().left});
        e.stopPropagation();
    });

    /*show hide warn popup*/
    $('.indicators a.warning').click(function (e) {
        $('#warn-popup').siblings('.popup').hide();
        $('#warn-popup').toggle().css({left: $(this).parent().prev().position().left});
        e.stopPropagation();
    });

    $('.settings').click(function(){
        $('.settings-modal, .modal-overlay').show();
    });
    
     $('.new-badge-button').click(function(){
        $('.new-badge-modal, .new-badge-modal-overlay').show();
    });
    
     $('.close-badge-modal').click(function () {
        $('.new-badge-modal, .new-badge-modal-overlay').hide();
    });
    
     $('.archive-button').click(function(){
        $('.archive-modal, .archive-modal-overlay').show();
    });
    
     $('.close-archive-modal').click(function () {
        $('.archive-modal, .archive-modal-overlay').hide();
    });

    /*show hide warn popup*/
    $('.indicators a.settings').click(function (e) {
        $('#settings-popup').siblings('.popup').hide();
        console.log($(this).parent().position().left);
        $('#settings-popup').toggle().css({left: $(this).parent().position().left - 42});
        e.stopPropagation();
    });

    $('.popup, .ui-datepicker, .ui-timepicker').click(function (e) {
        if ($(e.target).hasClass('label_check')) {
            $(e.target).toggleClass('c_on');
        }
        e.stopPropagation();
    });

    $('html').click(function () {
        $("header.header").find('.popup').hide();
    });

    if ($('input[name=date-range]').length > 0) {
        $('input[name=date-range]:first, input[name=date-range1]:first, input[name=date-range2]:first, input[name=date-range3]:first').prop("checked", true);
        $('select[name=by]').selectmenu("disable");
        $('input[name=fromDate]').datepicker('enable').datepicker("setDate", moment().subtract(14, 'd').toDate());
        $('input[name=toDate]').datepicker('enable');
        $('input[name=date-range], input[name=date-range1], input[name=date-range2], input[name=date-range3]').change(function () {
            if ($(this).val() === 'range') {
                $(this).closest('.date-range').find('input[name=fromDate]').datepicker('enable');
                $(this).closest('.date-range').find('input[name=toDate]').datepicker('enable');
                $(this).closest('.date-range').find('select[name=by]').selectmenu("disable");
            } else {
                $(this).closest('.date-range').find('input[name=fromDate]').datepicker('disable');
                $(this).closest('.date-range').find('input[name=toDate]').datepicker('disable');
                $(this).closest('.date-range').find('select[name=by]').selectmenu("enable");
            }
        });
    }


    if(checkCookie("fromDate") == "" ||  checkCookie("toDate") == ""){
        setCookie("fromDate", moment().subtract(14, 'd').toDate(), 1);
        setCookie("toDate", moment().toDate(), 1);
    }
    //console.log("cookie");
    var fromD = moment(getCookie("fromDate"));
    var toD = moment(getCookie("toDate"));
    //console.log("fromDate - " + fromD.toDate() + " toDate " + toD);
    var from = new Date();
    from.setDate(from.getDate()-8);
    var to = new Date();
    to.setDate(to.getDate()+2);
    $('input[name=fromDate1]').datepicker('enable').datepicker("setDate", from);
    $('input[name=toDate1]').datepicker('enable').datepicker("setDate", to);

//    $('input[name=fromDate1]').datepicker('enable').datepicker("setDate", moment().subtract(7, 'd').toDate());
//    $('input[name=toDate1]').datepicker('enable');

    var minDays = $('input[name=fromDate1]').datepicker('option', 'dayNamesShort');
    $('input[name=fromDate1]').datepicker('option', 'dayNamesMin', minDays);
    var minDays = $('input[name=toDate1]').datepicker('option', 'dayNamesShort');
    $('input[name=toDate1]').datepicker('option', 'dayNamesMin', minDays);

    var minMonths = $('input[name=fromDate1]').datepicker('option', 'monthNamesShort');
    $('input[name=fromDate1]').datepicker('option', 'monthNamesMin', minMonths);

    var emptyData = [
        {
            "key": "CPU Usage     ",
            "values": [
                {
                    "x": "1",
                    "y": "1"
                }
            ]
        }
    ];

    /*initialize all charts*/
    if (typeof nv != 'undefined') {

        var RED_LINE_VAL = 90; // red line value
        var YELLOW_LINE_VAL = 80; // yellow line value

        var myColors = ["#868fb8", "#3da1ca", "#05bbd3", "#92d3e1", "#bcb974"];
            myColors = ['#5e6db2','#92d3e1','#d5df40','#6A9CA6', '#2336be','#00945f'];
        d3.scale.myColors = function () {
            return d3.scale.ordinal().range(myColors);
        };

        var refineDates = function (dataArray) {
            _.each(dataArray, function (value, key) {
                _.each(value.values, function (obj, i) {
                    dataArray[key].values[i][0] = moment().subtract((value.values.length - i), 'd').toDate().getTime();
                    // dataArray[key].values[i][1] = Math.floor(Math.random() * 100);
                });
            });
            return dataArray;
        };

        var refineDatesToHour = function (dataArray) {
            _.each(dataArray, function (value, key) {
                _.each(value.values, function (obj, i) {
                    dataArray[key].values[i][0] = new Date(moment().subtract((value.values.length - i), 'd').toDate().getTime());
                    dataArray[key].values[i][1] = Math.floor(Math.random() * 100);
                });
            });
            return dataArray;
        };
        var refineDatesToHourAndRandomize = function (dataArray) {
            var data = [];
            _.each(dataArray, function (value, key) {
                var item = {key: value["key"], values: []}
                _.each(value.values, function (obj, i) {
                    //dataArray[key].values[i][0] = new Date(moment().subtract((value.values.length - i), 'h').toDate().getTime());
                    //dataArray[key].values[i][1] = Math.floor((Math.random() * 30) + 1);
                    //data[key].values[i][0] = new Date(moment().subtract((value.values.length - i), 'h').toDate().getTime());
                    //data[key].values[i][1] = Math.floor((Math.random() * 30) + 1);
                    if(i % 15 == 0) {
                    item.values.push([new Date(moment().subtract((value.values.length - i), 'h').toDate().getTime()), Math.floor((Math.random() * 30) + 1)]);
                    // dataArray[key].values[i][1] = Math.floor(Math.random() * 100);
                    }
                });
                data.push(item);
            });
            return data;
        };
/*delete 2*/
        var randomize = function (dataArray) {
            _.each(dataArray, function (value, key) {
                _.each(value.values, function (obj, i) {
                    obj["y"] = Math.floor((Math.random() * 100) + 10);
                    // dataArray[key].values[i][1] = Math.floor(Math.random() * 100);
                });
            });
            return dataArray;
        }

        var refineData = function (dataArray) {
            var data = [];
            _.each(dataArray, function (value, key) {
                var temp = {};
                temp["key"] = value.key;
                var temp_val = [];
                _.each(value.values, function (obj, i) {
                    var temp_tuple = [];
                    temp_tuple[0] = obj["x"];
                    temp_tuple[1] = obj["y"];
                    temp_val.push(temp_tuple);
                });
                temp["values"] = temp_val;
                data[key] = temp;
            });
            return data;
        };
        /*system performance chart*/
        var drawSPChart = function (id, from_Date, to_Date, lengthdata, data1, index, file) {
            console.log('in');
            d3.json((file), function (data) {
                data = (data1 == undefined ? refineDatesToHourAndRandomize(data) : data1);
                //var clr = ['#868FB8', '#92D3E1', '#3DA1CA', '#868FB8', '#bcb974'];
                //var clr = ['#868fb8','#3da1ca','#05bbd3','#aa13f1','#12d3e1','#18a611'];
                var clr = ['#5E6DB2', '#92D3E1', '#D5DF40', '#6A9CA6', '#2336be','#00945f'];
                clr = (data1 == undefined ? clr : [clr[index]]);
                nv.addGraph(function () {
                    var chart = nv.models.lineChart()
                        .margin({right: 20, top: 0, bottom: 20, left: 30})
                        .x(function (d) {
                            return d[0]
                        })   //We can modify the data accessor functions...
                        .y(function (d) {
                            return d[1]
                        })   //...in case your data is formatted differently.
                        .useInteractiveGuideline(true)    //Tooltips which show all data points. Very nice!
                        .interactive(false)
                        .rightAlignYAxis(false)      //Let's move the y-axis to the right side.
                        .clipEdge(true)
                        .color(clr)
                        .showLegend(true);
                    //.color(d3.scale.myColors().range());
                    chart.interactiveLayer.tooltip.distance(10);

                    chart.yAxis
                        .tickFormat(d3.format(','));
                    if (from_Date != undefined && to_Date != undefined) {
                        _.each(data, function (value, i) {
                            value.values = _.filter(value.values, function (obj) {
                                return (obj[0] > from_Date && obj[0] < to_Date);
                            });
                        });

                    }
                    else {
                        _.each(data, function (value, i) {
                            value.values = _.filter(value.values, function (obj) {
                                if ($(id).siblings('.date-range')) {
                                    var fromDate = moment($(id).closest('.middle-box').find('.date-picker:first').val()).toDate().getTime();
                                    var toDate = moment($(id).closest('.middle-box').find('.date-picker:last').val()).toDate().getTime();
                                    return (obj[0] > fromDate && obj[0] < toDate);
                                }
                            });
                        });
                    }
                    //Format x-axis labels with custom function.
                    if(lengthdata == 1) {
                        chart.xAxis
                            .ticks(4)
                            //.ticks(data[0].values.length)
                            .tickFormat(function (d) {
                                return d3.time.format('%I%p')(new Date(d))
                            });
                    }
                    else {
                        chart.xAxis
                            .ticks(4)
                            //.ticks(data[0].values.length)
                            .tickFormat(function (d) {
                                //return d3.time.format('%x %I%p')(new Date(d))
                                return d3.time.format('%m/%d, %I%p')(new Date(d))
                            });
                    }
/*delete 1*/
//                    d3.select(".nv-legendWrap")
//                        .attr("transform", "translate(30,-30)");
                    d3.select(id + ' svg')
                        .datum(data)
                        .call(chart);

                    $(id + ' svg .nv-y').find('text').each(function () {
                        if ($(this).text() == RED_LINE_VAL) {
                            $(this).parent().find('line').css('stroke', '#e3c1c3');
                        }
                        if ($(this).text() == YELLOW_LINE_VAL) {
                            $(this).parent().find('line').css('stroke', '#cebf54');
                        }
                    });
                    return chart;
                });

            });

        };

        var fromdate = moment($('.datepicker-popup').find('.date-picker:first').val()).toDate().getTime();
        var todate = moment($('.datepicker-popup').find('.date-picker:last').val()).toDate().getTime();

        fromdate = moment($('header .date-range input[name=fromDate1].date-picker').val()).toDate();
        todate = moment($('header .date-range input[name=toDate1].date-picker').val()).toDate();

        drawSPChart("#performance-chart", fromdate, todate, 7, undefined, undefined, 'data/systemPerformanceChartData.json');
        drawSPChart('#alarm-chart', fromdate, todate, undefined, undefined, undefined, 'data/OnGuardServerAlarmChartData.json');
        drawSPChart('#alarm-chart-status', fromdate, todate, undefined, undefined, undefined, 'data/OnGuardCredByStatus.json');
        drawSPChart('#alarm-chart-type', fromdate, todate, undefined, undefined, undefined, 'data/OnGuardCredByType.json');
        drawSPChart("#performance-chart-onguard", fromdate, todate, 7, undefined, undefined, 'data/systemPerformanceChartData.json');
        drawSPChart("#headquarters-chart", fromdate, todate, 7, undefined, undefined, 'data/headquartersChartData.json');
        drawSPChart("#carriers-chart", fromdate, todate, 7, undefined, undefined, 'data/headquartersChartData.json');
        drawSPChart("#secure-printing-chart", fromdate, todate, 7, undefined, undefined, 'data/securePrintingChartData.json');
        drawSPChart("#lincolnton-chart", fromdate, todate, 7, undefined, undefined, 'data/lincolntonChartChartData.json');


        $('header .date-range input[name=fromDate1].date-picker').change(function(e){
                var frmDate = $(this).datepicker("getDate");
                var toDate = $(this).parent().siblings('.datepicker').find('input').datepicker("getDate");
                if (frmDate > toDate) {
                    $(this).parent().siblings('.datepicker').find('input').datepicker("setDate", frmDate);
                }

                console.log("Date picker popup changed");
                fromdate = moment($('header .date-range input[name=fromDate1].date-picker').val()).toDate();
                todate = moment($('header .date-range input[name=toDate1].date-picker').val()).toDate();
                setCookie("fromDate", fromdate, 1);
                setCookie("toDate", todate, 1);

                console.log("From " + fromdate + " to " + todate);
                drawSPChart("#performance-chart", fromdate, todate, 7, undefined, undefined, 'data/systemPerformanceChartData.json');
                drawSPChart("#performance-chart-onguard", fromdate, todate, 7, undefined, undefined, 'data/systemPerformanceChartData.json');
                drawSPChart("#headquarters-chart", fromdate, todate, 7, undefined, undefined, 'data/headquartersChartData.json');
                drawSPChart("#carriers-chart", fromdate, todate, 7, undefined, undefined, 'data/headquartersChartData.json');
                drawSPChart("#secure-printing-chart", fromdate, todate, 7, undefined, undefined, 'data/securePrintingChartData.json');
                drawSPChart("#lincolnton-chart", fromdate, todate, 7, undefined, undefined, 'data/lincolntonChartChartData.json');
                drawLineChart1('#lock-wait-chart', fromdate, todate);
                drawLineChart2('#error-log-chart-mainpage', fromdate, todate);
                drawLineChart2('#error-log-chart', fromdate, todate);
                drawLineChart2('#data-log-chart', fromdate, todate);
                drawLineChart3('#communication-server-error-chart', fromdate, todate);
                drawSPChart('#alarm-chart', fromdate, todate, undefined, undefined, undefined, 'data/OnGuardServerAlarmChartData.json');
                databaseSizeGrowth(fromdate, todate);
                e.stopPropagation()
            }
        );
        $('header .date-range input[name=toDate1].date-picker').change(function(e){
                var toDate = $(this).datepicker("getDate");
                var frmDate = $(this).parent().siblings('.datepicker').find('input').datepicker("getDate");
                if (frmDate > toDate) {
                    $(this).parent().siblings('.datepicker').find('input').datepicker("setDate", toDate);
                }

                console.log("Date picker popup changed");
                fromdate = moment($('header .date-range input[name=fromDate1].date-picker').val()).toDate();
                todate = moment($('header .date-range input[name=toDate1].date-picker').val()).toDate();
                setCookie("fromDate", fromdate, 1);
                setCookie("toDate", todate, 1);

                console.log("From " + fromdate + " to " + todate);
                drawSPChart("#performance-chart", fromdate, todate, 7, undefined, undefined, 'data/systemPerformanceChartData.json');
                drawSPChart("#performance-chart-onguard", fromdate, todate, 7, undefined, undefined, 'data/systemPerformanceChartData.json');
                drawSPChart("#headquarters-chart", fromdate, todate, 7, undefined, undefined, 'data/headquartersChartData.json');
                drawSPChart("#carriers-chart", fromdate, todate, 7, undefined, undefined, 'data/headquartersChartData.json');
                drawSPChart("#secure-printing-chart", fromdate, todate, 7, undefined, undefined, 'data/securePrintingChartData.json');
                drawSPChart("#lincolnton-chart", fromdate, todate, 7, undefined, undefined, 'data/lincolntonChartChartData.json');
                drawLineChart1('#lock-wait-chart', fromdate, todate);
                drawLineChart2('#error-log-chart-mainpage', fromdate, todate);
                drawLineChart2('#error-log-chart', fromdate, todate);
                drawLineChart2('#data-log-chart', fromdate, todate);
                drawLineChart3('#communication-server-error-chart', fromdate, todate);
                drawSPChart('#alarm-chart', fromdate, todate, undefined, undefined, undefined, 'data/OnGuardServerAlarmChartData.json');
                databaseSizeGrowth(fromdate, todate);

                e.stopPropagation();
            }
        );
        var clr = ['#5e6db2','#92d3e1','#d5df40','#6A9CA6', '#2336be','#00945f'];
        var drawLineChart1 = function (id, from_date, to_date) {
            d3.json('data/lockwait.json', function (data) {
                data = refineDatesToHour(data);

                nv.addGraph(function () {
                    var chart = nv.models.cumulativeLineChart()
                        .x(function (d) {
                            return d[0]
                        })
                        .y(function (d) {
                            return d[1];
                        }) //adjusting, 100% is 1.00, not 100 as it is in the data
                        .useInteractiveGuideline(true).showControls(false)       //Allow user to choose 'Stacked', 'Stream', 'Expanded' mode.
                        .clipEdge(true)
                        .showLegend(false)
                        .color(d3.scale.myColors().range())
                        .showLegend(true);

                    chart.xAxis
                        .tickFormat(function (d) {
                            //return d3.time.format('%b %d')(new Date(d))
                            return d3.time.format('%m/%d, %I%p')(new Date(d))
                        });

                    chart.yAxis
                        .tickFormat(d3.format(',d'));

                    _.each(data, function (value, i) {
                        value.values = _.filter(value.values, function (obj) {
                            return (obj[0] > from_date && obj[0] < to_date);
                        });
                    });

/*
                    _.each(data, function (value, i) {
                        value.values = _.filter(value.values, function (obj) {

                            //var fromDate = moment($(id).siblings('.date-range').find('.date-picker:first').val()).toDate().getTime();
                            //var toDate = moment($(id).siblings('.date-range').find('.date-picker:last').val()).toDate().getTime();
                            var fromDate = moment().subtract(7, 'd').toDate().getTime();
                            var toDate = moment().toDate().getTime();
                            return (obj[0] > fromDate && obj[0] < toDate);
                        });
                    });
*/

//                    d3.select(".nv-legendWrap")
//                        .attr("transform", "translate(40,-30)");

                    d3.select(id + ' svg')
                        .datum(data)
                        .call(chart);

                    //TODO: Figure out a good way to do this automatically
                    nv.utils.windowResize(chart.update);

                    return chart;
                });
            });
        };

        /*draw area utilization chart*/
        var drawLineChart2 = function (id, from_date, to_date) {
            d3.json('data/errorLogMain.json', function (data) {
                data = refineDatesToHour(data);
                nv.addGraph(function () {
                    var chart = nv.models.lineChart()
                        .margin({right: 0, top: 5, bottom: 17, left: 20})
                        .x(function (d) {
                            return d[0]
                        })
                        .y(function (d) {
                            return d[1];
                        }) //adjusting, 100% is 1.00, not 100 as it is in the data
                        .useInteractiveGuideline(true)
                        // .showControls(false)       //Allow user to choose 'Stacked', 'Stream', 'Expanded' mode.
                        .clipEdge(true)
                        .showLegend(false)
                        .color(d3.scale.myColors().range())
                        .showLegend(true);

                    chart.yAxis.ticks(10);

                    chart.xAxis
                        .tickFormat(function (d) {
                            return d3.time.format('%m/%d, %I%p')(new Date(d))
                        });

                    chart.yAxis
                        .tickFormat(d3.format(',d'));

                    _.each(data, function (value, i) {
                        value.values = _.filter(value.values, function (obj) {
                            return (obj[0] > from_date && obj[0] < to_date);
                        });
                    });

/*
                    _.each(data, function (value, i) {
                        value.values = _.filter(value.values, function (obj) {

                            var fromDate = moment($(id).closest('.middle-box').find('.date-picker:first').val()).toDate().getTime();
                            var toDate = moment($(id).closest('.middle-box').find('.date-picker:last').val()).toDate().getTime();
                            return (obj[0] > fromDate && obj[0] < toDate);
                        });
                    });
*/
//                    d3.select(".nv-legendWrap")
//                        .attr("transform", "translate(40,-30)");

                    d3.select(id + ' svg')
                        .datum(data)
                        .call(chart);

                    //TODO: Figure out a good way to do this automatically
                    nv.utils.windowResize(chart.update);

                    return chart;
                });
            });
        };

        var drawLineChart3 = function (id, from_date, to_date) {
            d3.json('data/CommServerErrorMonitor.json', function (data) {
                data = refineDatesToHour(data);
                nv.addGraph(function () {
                    var chart = nv.models.lineChart()
                        .margin({right: 30, top: 5, bottom: 15, left: 30})
                        .x(function (d) {
                            return d[0]
                        })
                        .y(function (d) {
                            return d[1];
                        }) //adjusting, 100% is 1.00, not 100 as it is in the data
                        .useInteractiveGuideline(true)
                        // .showControls(false)       //Allow user to choose 'Stacked', 'Stream', 'Expanded' mode.
                        .clipEdge(true)
                        .showLegend(false)
                        .color(d3.scale.myColors().range())
                        .showLegend(true);

                    chart.yAxis.ticks(10);

                    chart.xAxis
                        .tickFormat(function (d) {
                            return d3.time.format('%m/%d, %I%p')(new Date(d))
                            //return d3.time.format('%x %I%p')(new Date(d))
                        });

                    chart.yAxis
                        .tickFormat(d3.format(',d'));

                    _.each(data, function (value, i) {
                        value.values = _.filter(value.values, function (obj) {
                            return (obj[0] > from_date && obj[0] < to_date);
                        });
                    });

/*
                    _.each(data, function (value, i) {
                        value.values = _.filter(value.values, function (obj) {

                            var fromDate = moment($(id).closest('.middle-box').find('.date-picker:first').val()).toDate().getTime();
                            var toDate = moment($(id).closest('.middle-box').find('.date-picker:last').val()).toDate().getTime();
                            return (obj[0] > fromDate && obj[0] < toDate);
                        });
                    });
*/

//                    d3.select(".nv-legendWrap")
//                        .attr("transform", "translate(40,-30)");

                    d3.select(id + ' svg')
                        .datum(data)
                        .call(chart);

                    //TODO: Figure out a good way to do this automatically
                    nv.utils.windowResize(chart.update);

                    return chart;
                });
            });
        };

        drawLineChart1('#lock-wait-chart', fromdate, todate);
        $('#tabs-33').on('click', function () {
            drawLineChart1('#lock-wait-chart', fromdate, todate);
        });

        /*error-log-chart*/
        drawLineChart2('#error-log-chart', fromdate, todate);
        $('#error-log-chart').siblings('.date-range').find('.date-picker:first').datepicker("setDate", moment().subtract(1, 'M').toDate());
        $('#error-log-chart').siblings('.date-range').find('.date-picker').change(function () {
            drawLineChart2('#error-log-chart');
        });

        drawLineChart2('#error-log-chart-mainpage', fromdate, todate);
        $('#error-log-chart-mainpage').closest('.middle-box').find('.date-picker:first').datepicker("setDate", moment().subtract(1, 'M').toDate());
        $('#error-log-chart-mainpage').closest('.middle-box').find('.date-picker').change(function () {
            drawLineChart2('#error-log-chart-mainpage');
        });

        /*data-log-chart*/
        drawLineChart2('#data-log-chart', fromdate, todate);
        $('#data-log-chart').siblings('.date-range').find('.date-picker:first').datepicker("setDate", moment().subtract(1, 'M').toDate());
        $('#data-log-chart').siblings('.date-range').find('.date-picker').change(function () {
            drawLineChart2('#data-log-chart');
        });

        drawLineChart3('#communication-server-error-chart', fromdate, todate);
        $('#communication-server-error-chart').siblings('.date-range').find('.date-picker:first').datepicker("setDate", moment().subtract(1, 'M').toDate());
        $('#communication-server-error-chart').siblings('.date-range').find('.date-picker').change(function () {
            drawLineChart3('#communication-server-error-chart');
        });

        /*communication server error chart*/
        drawCommunicationServerErrorChart = function () {
            nv.addGraph({
                generate: function () {
                    var chart = nv.models.multiBarChart()
                            .transitionDuration(200)
                            .margin({left: 40, right: 10, bottom: 30})
                            .showControls(false)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
                            .groupSpacing(.2)    //Distance between each group of bars.
                            //.color(['#34cd96', '#ffb400', '#75b5eb', '#329098', '#bcb974'])
                            .color(d3.scale.myColors().range())
                            .showLegend(false)
                        ;

                    var dates = ["Jun 07", "Jun 08", "Jun 09", "Jun 10", "Jun 11", "Jun 12", "Jun 13"];
                    chart.xAxis.tickFormat(function (d) {
                        return dates[d];
                    });

                    chart.yAxis
                        .tickFormat(d3.format(function (d) {
                            return d + '%'
                        }));

                    chart.forceY([0, 100]);

/*
                    for (var property in chart.multibar.dispatch) {
                        chart.multibar.dispatch[property] = function () {
                        };
                    }
                    for (var property in chart.legend.dispatch) {
                        chart.legend.dispatch[property] = function () {
                        };
                    }
*/

                    $.getJSON("data/communicationServerErrorChart.json", function (data) {
                        serverError = randomize(data.data);
                        d3.select('#communication-server-error-chart svg')
                            .datum(serverError)
                            .call(chart);
                    });

                    d3.scale.ordinal().domain([1, 2, 3, 4]).rangePoints([0, 100], 0).range();

                    chart.tooltipContent(function (key, x, y, e, graph) {
                        growth = y;
                        inc = false;
                        if (e.pointIndex != 0) {
                            growth = Math.ceil((Math.abs(y - graph["container"]["__data__"][0]["values"][e.pointIndex - 1]['y']) / graph["container"]["__data__"][0]["values"][e.pointIndex - 1]['y']) * 100);
                            if (y >= graph["container"]["__data__"][0]["values"][e.pointIndex - 1]['y']) {
                                inc = true;
                            }
                        }
                        if (inc || e.pointIndex == 0)
                            return '<label class="tooltp">' + y + '</label><span class="trendup"/><label class="tooltptrendup">' + growth + '%</label>';

                        return '<label class="tooltp">' + y + '</label><span class="trenddown"/><label class="tooltptrenddown">' + growth + '%</label>';
                    });

                    return chart;
                }, callback: function (graph) {
                    setInterval(function () {
                        $("#communication-server-error-chart").find("svg .nv-bar").attr("width", 18).attr("rx", 0);
                        var color = '#34cd96';

                        /*d3.selectAll("#communication-server-error-chart rect.nv-bar")
                         .style("fill", function(d, i){
                         if(d.y < 50){
                         color = '#34cd96'
                         }
                         else if(d.y < 60){
                         color = '#ffb400'
                         }
                         else {
                         color = '#e75f59'
                         }
                         return color;
                         });*/
                    }, 200);
                }
            });
        }

        //drawCommunicationServerErrorChart();

        /*system performance chart*/
    drawSystemPerformanceBarChart= function(){
        nv.addGraph({
            generate: function () {
                var chart = nv.models.multiBarChart()
                        .transitionDuration(200)
                        .margin({left: 40, right: 10, bottom: 30})
                        .showControls(false)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
                        .groupSpacing(.3)    //Distance between each group of bars.
                        .color(['#5e6db2','#92d3e1','#d5df40','#6A9CA6', '#a9a4d0','#00945f'])
                        //.color(['#6b77f3', '#ffc91a', '#77c216', '#f05a92', '#2336be'])
                        .showLegend(true)
                    ;

                chart.yAxis
                    .tickFormat(d3.format(',d'));
                chart.forceY([0, 120]);

                $.getJSON("data/systemPerformanceChartData-bar.json", function (data) {
                    headquartersChartData = data.data;
                    d3.select('#performance-chart-bar svg')
                        .datum(headquartersChartData)
                        .call(chart);
                });

                d3.scale.ordinal().domain([1, 2, 3, 4]).rangePoints([0, 100], 0).range();
                    
                chart.tooltipContent(function (key, x, y, e, graph) {
                    //console.log(graph["container"]["__data__"][0]["values"]);
                    growth = y;
                    inc = false;
                    if (e.pointIndex != 0) {
                        growth = Math.ceil((Math.abs(y - graph["container"]["__data__"][0]["values"][e.pointIndex - 1]['y']) / graph["container"]["__data__"][0]["values"][e.pointIndex - 1]['y']) * 100);
                        if (y >= graph["container"]["__data__"][0]["values"][e.pointIndex - 1]['y']) {
                            inc = true;
                        }
                    }
                    if (inc || e.pointIndex == 0)
                        return '<label class="tooltp">' + y + '</label></br><span class="trendup"/><label class="tooltptrendup">' + growth + '%</label>';

                    return '<label class="tooltp">' + y + '</label></br><span class="trenddown"/><label class="tooltptrenddown">' + growth + '%</label>';
                });

                $("#performance-chart-bar").siblings('.date-range').find('input.date-picker').change(function () {
                    redraw();
                });
                $("#performance-chart-bar").siblings('.date-range').find('select[name=by]').selectmenu({
                    change: function (event, ui) {
                        redraw();
                    }
                });

                chart.multibar.dispatch.on("elementClick", function (e) {
                    console.log(e);
                    if (e.pointIndex == 0)
                        window.location = "onGuard-server.html";
                    else if (e.pointIndex == 1)
                        window.location = "database-servers.html";
                    else if (e.pointIndex == 2)
                        window.location = "west-coast-communication-server.html";
                    else if (e.pointIndex == 3)
                        window.location = "mid-atlantic-communication-server.html";
                    else if (e.pointIndex == 4)
                        window.location = "east-coast-communication-server.html";

                });

                function redraw() {
                    headquartersChartData = emptyChartData(headquartersChartData);
                    d3.select('#performance-chart-bar svg')
                        .datum(headquartersChartData)
                        .transition().duration(0)
                        .call(chart);

                    $.getJSON("data/headquartersChartData.json", function (data) {
                        headquartersChartData = data.data;
                        d3.select('#performance-chart-bar svg')
                            .datum(headquartersChartData)
                            .call(chart);
                    });
                }

                return chart;
            }, callback: function (graph) {
                setInterval(function () {
                    $("#performance-chart-bar").find("svg .nv-bar").attr("width", 17).attr("rx", 0);
                }, 200);
                $("#performance-chart-bar").find("svg .nv-bar").click(function () {
                    console.log("test2");
                });
            }
        });
    }
        drawSystemPerformanceBarChart();

        d3.selectAll(".nv-bar").on("click", function (data) {
            console.log("clickecdd");
        });

        var emptyChartData = function (chartData) {
            $(chartData).each(function (i, elem) {
                $(elem.values).each(function (j, item) {
                    item.y = '0';
                })
            });
            return chartData;
        };


        /*alarm chart*/

        var alarmChart = function (id, url, title) {

            nv.addGraph({
                generate: function () {
                    var chart = nv.models.multiBarChart()
                            .transitionDuration(200)
                            .margin({top: 60, bottom: 40})
                            .showControls(false)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
                            .groupSpacing(0.1)    //Distance between each group of bars.
                            .color(['#6f7d95'])
                            .showLegend(true)
                        ;


                    chart.reduceXTicks(false);

                    chart.yAxis
                        .tickFormat(
                        function (d) {
                            if (d === '110' || d === 110) {
                                return ' ';
                            } else {
                                return d
                            }
                        });
                    chart.forceY([0, 110]);

                    var ticks = ["", "S", "S", "M", "T", "W", "T", "F", "S", "S", "M"];
                    chart.xAxis
                        .ticks(100)
                        .tickFormat(function (d) {
                            return ticks[d];
                        });

/*
                    for (var property in chart.multibar.dispatch) {
                        chart.multibar.dispatch[property] = function () {
                        };
                    }
                    for (var property in chart.legend.dispatch) {
                        chart.legend.dispatch[property] = function () {
                        };
                    }
*/

                    $.getJSON("data/" + url, function (data) {
                        alarmData = data.data;
                        d3.select(id + ' svg')
                            .datum(alarmData)
                            .call(chart);
                    });


                    chart.tooltipContent(function (key, x, y, e, graph) {
                        growth = y;
                        inc = 0;

                        if (e.pointIndex != 0) {
                            growth = Math.ceil((Math.abs(y - graph["container"]["__data__"][0]["values"][e.pointIndex - 1]['y']) / graph["container"]["__data__"][0]["values"][e.pointIndex - 1]['y']) * 100);
                            if (y >= graph["container"]["__data__"][0]["values"][e.pointIndex - 1]['y']) {
                                inc = 1;
                            }
                        }
                        if (inc == 1 || e.pointIndex == 0)
                            return '<label class="tooltp">' + y + '</label><span class="trendup"/><label class="tooltptrendup">' + growth + '%</label>';

                        return '<label class="tooltp">' + y + '</label><span class="trenddown"/><label class="tooltptrenddown">' + growth + '%</label>';
                    });

                    d3.select(id + ' svg')
                        .append("text")
                        .attr("x", 65)
                        .attr("y", 45)
                        .style("font-size", '14px')
                        .style("fill", '#3e4c62')
                        .attr("text-anchor", "left")
                        .text(title);
                    return chart;
                }, callback: function (graph) {
                    setInterval(function () {
                        $('.alarm-chart').find("svg .nv-bar").attr("width", 17).attr("rx", 0);
                        $('.alarm-chart').find("svg .nv-bar:last").css({"fill": '#75b5eb'});
                    }, 200);
                }
            });
        };

        /*
        var alarmChart = function (id,url,title){

            nv.addGraph({
                generate: function() {
                    var chart = nv.models.multiBarChart()
                            .margin({top: 60,bottom:40})
                            .transitionDuration(100)
                            .showControls(false)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
                            .groupSpacing(.2)    //Distance between each group of bars.
                            .color(['#6f7d95'])
                            .showLegend(false)
                        ;


                    chart.reduceXTicks(false);

                    chart.yAxis
                        .tickFormat(
                        function(d) {
                            if (d === '110' || d === 110) {
                                return ' ';
                            } else {
                                return d
                            }
                        });
                    chart.forceY([0, 110]);


                    var ticks = ["","S","S","M","T","W","T","F","S","S","M"];
                    chart.xAxis
                        .ticks(100)
                        .tickFormat(function(d) { return ticks[d]; });


                    $.getJSON( "data/"+url, function( data ) {
                        alarmData = data.data;
                        d3.select(id+' svg')
                            .datum(alarmData)
                            .call(chart);
                    });

                    chart.tooltip(function (key, x, y, e, graph) {
                        growth = y;
                        inc = 0;

                        if(e.pointIndex != 0) {
                            growth = Math.ceil((Math.abs(y - graph["container"]["__data__"][0]["values"][e.pointIndex-1]['y'])/graph["container"]["__data__"][0]["values"][e.pointIndex-1]['y'])*100);
                            if(y >= graph["container"]["__data__"][0]["values"][e.pointIndex-1]['y']){  inc = 1;}
                        }
                        if(inc == 1 || e.pointIndex==0)
                            return '<label class="tooltp">'+ y + '</label><span class="trendup"/><label class="tooltptrendup">'+ growth + '%</label>';

                        return '<label class="tooltp">'+ y + '</label><span class="trenddown"/><label class="tooltptrenddown">'+ growth + '%</label>';
                    });

                    d3.select(id+' svg')
                        .append("text")
                        .attr("x", 65)
                        .attr("y", 45)
                        .style("font-size", '14px')
                        .style("fill", '#3e4c62')
                        .attr("text-anchor", "left")
                        .text(title);
                    return chart;
                },callback: function(graph) {
                    setInterval(function () {
                        $('.alarm-chart').find("svg .nv-bar").attr("width", 17).attr("rx", 2);
                        $('.alarm-chart').find("svg .nv-bar:last").css({"fill": '#75b5eb'});
                    }, 200);
                }
            });
        };
*/
        //alarmChart('#alarm-chart1','alarmChart1Data.json',"Line Error Active");
        alarmChart('#alarm-chart2', 'alarmChart2Data.json', "Access Granted");
        alarmChart('#alarm-chart3', 'alarmChart3Data.json', "Invalid Pin");
        alarmChart('#alarm-chart4', 'alarmChart1Data.json', "Door Forced Open");
        alarmChart('#alarm-chart5', 'alarmChart1Data.json', "Door Held Open");

        alarmChart('#finance-chart', 'alarmChart1Data.json', "Finance");
        alarmChart('#employee-chart', 'alarmChart2Data.json', "Employee");
        alarmChart('#contractor-chart', 'alarmChart3Data.json', "Contractor");
        alarmChart('#test1-chart', 'alarmChart1Data.json', "Engineering");
        alarmChart('#test2-chart', 'alarmChart2Data.json', "IT");
        alarmChart('#test3-chart', 'alarmChart3Data.json', "Temp");
        var total = '<div class="totalHolder"><span class="total">Total<span class="count">1200</span></span></div>';
        var total2 = '<div class="totalHolder"><span class="total">Total<span class="count">935</span></span></div>';
        var total3 = '<div class="totalHolder"><span class="total">Total<span class="count">760</span></span></div>';
        var total4 = '<div class="totalHolder"><span class="total">Total<span class="count">25</span></span></div>';
        var total5 = '<div class="totalHolder"><span class="total">Total<span class="count">11</span></span></div>';

        var employee = '<div class="totalHolder"><span class="total">Total<span class="count">1123</span></span></div>';
        var contractor = '<div class="totalHolder"><span class="total">Total<span class="count">963</span></span></div>';
        var engineering = '<div class="totalHolder"><span class="total">Total<span class="count">650</span></span></div>';
        var it = '<div class="totalHolder"><span class="total">Total<span class="count">35</span></span></div>';
        var temp = '<div class="totalHolder"><span class="total">Total<span class="count">5</span></span></div>';
        //$('#alarm-chart1 svg').before(total);
        $('#alarm-chart2 svg').before(total2);
        $('#alarm-chart3 svg').before(total3);
        $('#alarm-chart4 svg').before(total4);
        $('#alarm-chart5 svg').before(total5);
        $('#finance-chart svg').before(total);
        $('#employee-chart svg').before(employee);
        $('#contractor-chart svg').before(contractor);
        $('#test1-chart svg').before(engineering);
        $('#test2-chart svg').before(it);
        $('#test3-chart svg').before(temp);

        alarmChart('#active-chart','alarmChart4Data.json',"Active");
        alarmChart('#deactivate-chart','alarmChart5Data.json',"Deactivate");
        alarmChart('#lost-chart','alarmChart6Data.json',"Lost");
        alarmChart('#stolen-chart','alarmChart4Data.json',"Stolen");
        alarmChart('#test5-chart','alarmChart5Data.json',"Found");
        alarmChart('#test6-chart','alarmChart6Data.json',"Hidden");

        $('#active-chart svg').before(total);
        $('#deactivate-chart svg').before(total);
        $('#lost-chart svg').before(total);
        $('#stolen-chart svg').before(total);
        $('#test5-chart svg').before(total);
        $('#test6-chart svg').before(total);

        window.onresize = function redraw1() {
            drawSystemPerformanceBarChart();

            var fromdate = moment($('header .date-range input[name=fromDate1].date-picker').val()).toDate();
            var todate = moment($('header .date-range input[name=toDate1].date-picker').val()).toDate();

            drawSPChart("#headquarters-chart", fromdate, todate, 7, undefined, undefined, 'data/headquartersChartData.json');
            drawSPChart("#carriers-chart", fromdate, todate, 7, undefined, undefined, 'data/headquartersChartData.json');
            drawSPChart("#secure-printing-chart", fromdate, todate, 7, undefined, undefined, 'data/securePrintingChartData.json');
            drawSPChart("#lincolnton-chart", fromdate, todate, 7, undefined, undefined, 'data/lincolntonChartChartData.json');

            drawLineChart1('#lock-wait-chart', fromdate, todate);
            drawConnectionsChart();
            databaseSizeGrowth(fromdate, todate);
            serverThroughputChart('#east-server-throughput-chart', "data/eastServerThroughputChart.json");
            drawServerLoadChart();
            //drawCommunicationServerErrorChart();
            generateBadgeChart();
            archive_chart();

            alarmChart('#alarm-chart2', 'alarmChart2Data.json', "Access Granted");
            alarmChart('#alarm-chart3', 'alarmChart3Data.json', "Invalid Pin");
            alarmChart('#alarm-chart4', 'alarmChart1Data.json', "Door Forced Open");
            alarmChart('#alarm-chart5', 'alarmChart1Data.json', "Door Held Open");

            alarmChart('#finance-chart', 'alarmChart1Data.json', "Finance");
            alarmChart('#employee-chart', 'alarmChart2Data.json', "Employee");
            alarmChart('#contractor-chart', 'alarmChart3Data.json', "Contractor");
            alarmChart('#test1-chart', 'alarmChart1Data.json', "Engineering");
            alarmChart('#test2-chart', 'alarmChart2Data.json', "IT");
            alarmChart('#test3-chart', 'alarmChart3Data.json', "Temp");
            var total = '<div class="totalHolder"><span class="total">Total<span class="count">1200</span></span></div>';
            var total2 = '<div class="totalHolder"><span class="total">Total<span class="count">935</span></span></div>';
            var total3 = '<div class="totalHolder"><span class="total">Total<span class="count">760</span></span></div>';
            var total4 = '<div class="totalHolder"><span class="total">Total<span class="count">25</span></span></div>';
            var total5 = '<div class="totalHolder"><span class="total">Total<span class="count">11</span></span></div>';

            var employee = '<div class="totalHolder"><span class="total">Total<span class="count">1123</span></span></div>';
            var contractor = '<div class="totalHolder"><span class="total">Total<span class="count">963</span></span></div>';
            var engineering = '<div class="totalHolder"><span class="total">Total<span class="count">650</span></span></div>';
            var it = '<div class="totalHolder"><span class="total">Total<span class="count">35</span></span></div>';
            var temp = '<div class="totalHolder"><span class="total">Total<span class="count">5</span></span></div>';
            //$('#alarm-chart1 svg').before(total);
            $('#alarm-chart2 svg').before(total2);
            $('#alarm-chart3 svg').before(total3);
            $('#alarm-chart4 svg').before(total4);
            $('#alarm-chart5 svg').before(total5);
            $('#finance-chart svg').before(total);
            $('#employee-chart svg').before(employee);
            $('#contractor-chart svg').before(contractor);
            $('#test1-chart svg').before(engineering);
            $('#test2-chart svg').before(it);
            $('#test3-chart svg').before(temp);

            alarmChart('#active-chart','alarmChart4Data.json',"Active");
            alarmChart('#deactivate-chart','alarmChart5Data.json',"Deactivate");
            alarmChart('#lost-chart','alarmChart6Data.json',"Lost");
            alarmChart('#stolen-chart','alarmChart4Data.json',"Stolen");
            alarmChart('#test5-chart','alarmChart5Data.json',"Found");
            alarmChart('#test6-chart','alarmChart6Data.json',"Hidden");

            $('#active-chart svg').before(total);
            $('#deactivate-chart svg').before(total);
            $('#lost-chart svg').before(total);
            $('#stolen-chart svg').before(total);
            $('#test5-chart svg').before(total);
            $('#test6-chart svg').before(total);
        }

        var databaseSizeGrowth = function (from_date, to_date) {
            d3.json("data/databaseSizeChart.json", function (data) {
                data = refineDates(data);
                //dataTooltip = refineTooltipDataWithTotal(data);
                nv.addGraph(function () {
                    var chart = nv.models.stackedAreaChart()
                        .margin({right: 50, top: 0, left:50})
                        .x(function (d) {
                            return d[0]
                        })   //We can modify the data accessor functions...
                        .y(function (d) {
                            return d[1]
                        })   //...in case your data is formatted differently.
                        .useInteractiveGuideline(true)    //Tooltips which show all data points. Very nice!
                        .rightAlignYAxis(false)      //Let's move the y-axis to the right side.
                
                        .showControls(false)       //Allow user to choose 'Stacked', 'Stream', 'Expanded' mode.
                        .clipEdge(true)
                        .color(d3.scale.myColors().range())
                        .showLegend(true);
                    //chart.interactiveLayer.tooltip.distance(10);
                    //chart.interactiveLayer.tooltip.data(dataTooltip);

                    chart.yAxis
                        .tickFormat(d3.format(','));

                    //Format x-axis labels with custom function.
                    chart.xAxis
                        .ticks(data[0].values.length)
                        .tickFormat(function (d) {
                            return d3.time.format('%m/%d, %I%p')(new Date(d))
                        });

                    _.each(data, function (value, i) {
                        value.values = _.filter(value.values, function (obj) {
                            return (obj[0] > from_date && obj[0] < to_date);
                        });
                    });

                    /*
                     chart.stacked.dispatch.on("areaMouseover", function(e){
                     console.log(e);
                     });
                     */
//                    d3.select(".nv-legendWrap")
//                        .attr("transform", "translate(40,-30)");

                    d3.select('#database-size-chart svg')
                        .datum(data)
                        .call(chart);


                    $('#database-size-chart svg .nv-y').find('text').each(function () {
                        if ($(this).text() == RED_LINE_VAL) {
                            $(this).parent().find('line').css('stroke', '#e3c1c3');
                        }
                        if ($(this).text() == YELLOW_LINE_VAL) {
                            $(this).parent().find('line').css('stroke', '#cebf54');
                        }
                    });
                    return chart;
                });

            });

        };

        databaseSizeGrowth(fromdate, todate);

       var serverThroughputChart = function(id, file){

            nv.addGraph({
                generate: function() {
                    var chart = nv.models.multiBarChart()
                            .transitionDuration(200)
                            .margin({top: 50,bottom:40,left:70, top:0})
                            .showControls(false)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
                            .groupSpacing(.2)    //Distance between each group of bars.
                            .color(['#5e6db2','#92d3e1','#d5df40','#6A9CA6', '#a9a4d0','#00945f'])
                            .showLegend(false)
                        ;


                    chart.reduceXTicks(false);

                    chart.yAxis
                        .tickFormat(
                        function(d) {
                            return d
                        })
                        //.axisLabel('Throughput (response/second)')
                        //.axisLabelDistance(30);
                    chart.forceY([0, 5000]);

                    chart.xAxis
                        .ticks(100)
                        .tickFormat(function(d) { return d });


                    $.getJSON( file, function( data ) {
                        alarmData = data.data;
                        d3.select(id+  ' svg')
                            .datum(alarmData)
                            .call(chart);
                    });

                    chart.tooltipContent(function (key, x, y, e, graph) {
                        return y;
                    });

/*
                    var p1 = $("#east-server-throughput-chart").offset();
                    var w = $("#east-server-throughput-chart").width();
                    var x = Math.floor(w/2+35);

                    console.log(p1);
                    console.log("w is " + w);
                    d3.select(id + ' svg')
                        .append("text")
                        .attr("x", x)
                        .attr("y", 20)
                        .style("font-size", '14px')
                        .style("fill", '#3e4c62')
                        .attr("text-anchor", "middle")
                        .text('Peak Throughput');

                    var x = Math.floor(w/2+35);
                    d3.select(id + ' svg')
                        .append("text")
                        .attr("x", x)
                        .attr("y", 35)
                        .style("font-size", '13px')
                        .style("fill", '#656873')
                        .attr("text-anchor", "middle")
                        .text('(For a single resource, larger is beter)');
*/

                    return chart;

                },callback: function(graph) {
                    setInterval(function () {
                        $(id).find("svg .nv-bar").attr("width", 17).attr("rx", 0).attr("x", 15);
                    }, 200);
                }
            });
        };
        //serverThroughputChart('#server-throughput-chart', "data/serverThroughputChart.json");
        serverThroughputChart('#east-server-throughput-chart', "data/eastServerThroughputChart.json");
        //serverThroughputChart('#west-server-throughput-chart', "data/westServerThroughputChart.json");
        //serverThroughputChart('#atlantic-server-throughput-chart', "data/atlanticServerThroughputChart.json");

        /*badge-chart*/
        var generateBadgeChart = function () {
            nv.addGraph({
                generate: function () {
                    var width = 600, height=300;
                    var chart;
                    chart = nv.models.lineChart()
                        .useInteractiveGuideline(false)
                        .interactive(true)
                        .x(function (d) {
                            return d[0]
                        })
                        .y(function (d) {
                            return d[1]
                        })
                        .color(['#5e6db2','#92d3e1','#d5df40','#6A9CA6', '#a9a4d0','#00945f'])
                         .width(width)
                         .height(height)
                        .showLegend(false);

                    var dates = ["07/07", "07/08", "07/09", "07/10", "07/11", "07/12", "07/13"];
                    chart.xAxis.ticks(9);
                    chart.xAxis
                        .tickFormat(function (d, e, f) {
                            if (d === 1 || d == 7) {
                                return ''
                            }
                            return dates[d - 1];
                        });
                    chart.yAxis
                        .tickFormat(function (d) {
                            if (d > 300) {
                                d = '300++';
                            }
                            return d
                        });

                    chart.tooltipContent(function (key, x, y, e, graph) {
                        //console.log(graph["container"]["__data__"][0]["values"]);
                        if (y === '300++') {
                            y = 300;
                        }
                        growth = y;
                        inc = false;
                        if (e.pointIndex != 0) {
                            growth = Math.ceil((Math.abs(y - graph["container"]["__data__"][0]["values"][e.pointIndex - 1][1]) / graph["container"]["__data__"][0]["values"][e.pointIndex - 1][1]) * 100);
                            if (y >= graph["container"]["__data__"][0]["values"][e.pointIndex - 1][1]) {
                                inc = true;
                            }
                        }
                        if (inc || e.pointIndex == 0)
                            return '<label class="tooltp">' + y + '</label><label class="tooltptrendup">' + growth + '%</label>';

                        return '<label class="tooltp">' + y + '</label><label class="tooltptrenddown">' + growth + '%</label>';
                    });

                    nv.utils.windowResize(chart.update);
                    $.getJSON("data/badgeChartData.json", function (data) {
                        badgeChartData = data.data;
                        d3.select('#badge-chart svg')
                            .datum(badgeChartData)
                            .transition().duration(500)
                            .call(chart);
                    });

                    return chart;
                }, callback: function (graph) {

                    setTimeout(function () {

                        function parseSVG(s) {
                            var div = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
                            div.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg">' + s + '</svg>';
                            var frag = document.createDocumentFragment();
                            while (div.firstChild.firstChild)
                                frag.appendChild(div.firstChild.firstChild);
                            return frag;
                        }

                    }, 50);
                    setTimeout(function () {
                        $("#badge-chart").find("svg .nv-point").attr("r", 4);
                    }, 1000);
                }
            });

            nv.addGraph({
                generate: function () {
                    var chart;
                    chart = nv.models.lineChart()
                        .useInteractiveGuideline(false)
                        //.interactive(true)
                        .x(function (d) {
                            return d[0]
                        })
                        .y(function (d) {
                            return d[1]
                        })
                        .color(['#86d7ed'])
                        .showLegend(false)
                        //.showControls(false)
                    ;
                    var dates = ["07/07", "07/08", "07/09", "07/10", "07/11", "07/12", "07/13"];
                    //chart.reduceXTicks(false);


                    chart.xAxis.ticks(dates, 1);
                    chart.xAxis
                        .tickFormat(function (d, e, f) {
                            if (d === 1 || d == 7) {
                                return ''
                            }
                            return dates[d - 1];
                        });
                    chart.yAxis
                        .tickFormat(function (d) {
                            if (d > 300) {
                                d = '300++';
                            }
                            return d
                        });

                    chart.tooltipContent(function (key, x, y, e, graph) {
                        //console.log(graph["container"]["__data__"][0]["values"]);
                        if (y === '300++') {
                            y = 300;
                        }
                        growth = y;
                        inc = false;
                        if (e.pointIndex != 0) {
                            growth = Math.ceil((Math.abs(y - graph["container"]["__data__"][0]["values"][e.pointIndex - 1][1]) / graph["container"]["__data__"][0]["values"][e.pointIndex - 1][1]) * 100);
                            if (y >= graph["container"]["__data__"][0]["values"][e.pointIndex - 1][1]) {
                                inc = true;
                            }
                        }
                        if (inc || e.pointIndex == 0)
                            return '<label class="tooltp">' + y + '</label><label class="tooltptrendup">' + growth + '%</label>';

                        return '<label class="tooltp">' + y + '</label><label class="tooltptrenddown">' + growth + '%</label>';
                    });
                    nv.utils.windowResize(chart.update);
                    $.getJSON("data/badgeChartData.json", function (data) {
                        badgeChartData = data.data;
                        d3.select('#badge-chart1 svg')
                            .datum(badgeChartData)
                            .transition().duration(500)
                            .call(chart);
                    });

                    return chart;
                }, callback: function (graph) {
                    setTimeout(function () {

                        function parseSVG(s) {
                            var div = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
                            div.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg">' + s + '</svg>';
                            var frag = document.createDocumentFragment();
                            while (div.firstChild.firstChild)
                                frag.appendChild(div.firstChild.firstChild);
                            return frag;
                        }

                    }, 50);
                    setTimeout(function () {
                        $("#badge-chart1").find("svg .nv-point").attr("r", 4);
                    }, 1000);
                }
            });
        }
        generateBadgeChart();
        /*archive-chart*/
        function archive_chart() {
            nv.addGraph({
                generate: function () {
                    var width = 600, height = 300;
                    var data = [
                        {key: "",
                            values: [
                                {x: 0, y: 10},
                                {x: 1, y: 10},
                                {x: 2, y: 10},
                                {x: 3, y: 10},
                                {x: 4, y: 10},
                                {x: 5, y: 10},
                                {x: 6, y: 10},
                                {x: 7, y: 10},
                                {x: 8, y: 10},
                                {x: 9, y: 10},
                                {x: 10, y: 10},
                                {x: 11, y: 10},
                                {x: 12, y: 10},
                                {x: 12, y: 15}
                            ]
                        }
                    ];

                    var chart = nv.models.lineChart()
                            .margin({left: 40, right: 40})  //Adjust chart margins to give the x-axis some breathing room.
                            .useInteractiveGuideline(false)  //We want nice looking tooltips and a guideline!
                                              //how fast do you want the lines to transition?
                            .showLegend(false)       //Show the legend, allowing users to turn on/off line series.
                            .showYAxis(false)        //Show the y-axis
                            .showXAxis(false)        //Show the x-axis
                            .color(['#6b77f3', '#ffc91a', '#77c216', '#f05a92', '#a9a4d0'])
                            .width(width)
                            .height(height)
                        ;

                    chart.xAxis     //Chart x-axis settings
                        .tickFormat(d3.format(',r'));

                    chart.yAxis     //Chart y-axis settings
                        .tickFormat(d3.format('.02f'));

                    chart.forceY([0, 20]);

                    chart.tooltipContent  = function(key, x, y, e, graph) {
                        return '<h3>' +  y + ' at ' + x + '</h3>';
                    }
                    /* Done setting the chart up? Time to render it!*/

                    d3.select('#archive-chart svg')
                        .datum(data)
                        .transition().duration(500)
                        .call(chart);

                    return chart;
                }, callback: function (graph) {
                    setTimeout(function () {
                        $("#archive-chart").find('.nv-lineChart circle.nv-point').attr("r", "4");
                    }, 1000);
                }
            });
        }

        archive_chart();

        /*avg-connection-chart*/
        drawAvgConnectionsChart = function () {
            nv.addGraph({
                generate: function () {
                    var width = 600, height = 300;
                    var data = [
                        {key: "Average",
                            values: [
                                {x: 0, y: 20},
                                {x: 1, y: 25},
                                {x: 2, y: 20},
                                {x: 3, y: 29},
                                {x: 4, y: 24},
                                {x: 5, y: 33},
                                {x: 6, y: 23}
                            ]
                        }
                    ];

                    var chart = nv.models.lineChart()
                            .margin({left: 80, right: 30})  //Adjust chart margins to give the x-axis some breathing room.
                            .useInteractiveGuideline(false)  //We want nice looking tooltips and a guideline!
                            .interactive(false)
                            //how fast do you want the lines to transition?
                            .showLegend(false)       //Show the legend, allowing users to turn on/off line series.
                            .showYAxis(true)        //Show the y-axis
                            .showXAxis(true)        //Show the x-axis
                            .color(['#75b5eb', '#6f7d95', '#a7dccd'])
                            .width(width)
                            .height(height)
                        ;

                    var dates = ["Jun 07", "Jun 08", "Jun 09", "Jun 10", "Jun 11", "Jun 12", "Jun 13"];
                    chart.xAxis     //Chart x-axis settings
                        .tickFormat(function (d) {
                            return dates[d]
                        });

                    chart.yAxis     //Chart y-axis settings
                        .axisLabel('Connection Time (ms)')
                        .margin({right: 100})
                        .tickFormat(function (d) {
                            return d
                        });

                    chart.forceY([0, 60]);

                    /* Done setting the chart up? Time to render it!*/

                    d3.select('#avg-connection-chart svg')
                        .datum(data)
                        .transition().duration(500)
                        .call(chart);

                    d3.select('#avg-connection-chart svg rect')
                        .style("opacity", '1')
                        .attr("fill", '#d9e3e8');

                    $("#avg-connection-chart").siblings('.date-range').find('input.date-picker').change(function () {
                        redraw();
                    });
                    $("#avg-connection-chart").siblings('.date-range').find('select[name=by]').selectmenu({
                        change: function (event, ui) {
                            redraw();
                        }
                    });

                    function redraw() {
                        d3.select('#avg-connection-chart svg')
                            .datum([
                                {key: "empty",
                                    values: [
                                        {x: 0, y: 0}
                                    ]
                                }
                            ])
                            .transition().duration(0)
                            .call(chart);

                        d3.select('#avg-connection-chart svg')
                            .datum(data)
                            .transition().duration(500)
                            .call(chart);
                    }

                    return chart;
                }, callback: function (graph) {
                    setTimeout(function () {
                        $("#avg-connection-chart").find('.nv-lineChart circle.nv-point').attr("r", "5");
                        var yTicks = d3.select('#avg-connection-chart .nv-y.nv-axis > g').selectAll('g');
                        yTicks.selectAll('text:not(.nv-axislabel)').attr('transform', function (d, i, j) {
                            return 'translate (-15, 0)'
                        });
                        yTicks.selectAll('text.nv-axislabel').attr('transform', function (d, i, j) {
                            return 'translate (10, 0) rotate(-90)'
                        });
                        var xTicks = d3.select('#avg-connection-chart .nv-x.nv-axis > g').selectAll('g');
                        xTicks.selectAll('text').attr('transform', function (d, i, j) {
                            return 'translate (0, 10)'
                        });
                    }, 200);
                }
            });
        }
        drawAvgConnectionsChart();
        /*server-load-chart*/
        drawServerLoadChart = function() {
            nv.addGraph({
                generate: function () {
                    var data = [
                        {key: "Average",
                            values: [
                                {x: 0, y: Math.floor(Math.random() * 30 + 1)},
                                {x: 1, y: Math.floor(Math.random() * 30 + 1)},
                                {x: 2, y: Math.floor(Math.random() * 30 + 1)},
                                {x: 3, y: Math.floor(Math.random() * 30 + 1)},
                                {x: 4, y: Math.floor(Math.random() * 30 + 1)},
                                {x: 5, y: Math.floor(Math.random() * 30 + 1)},
                                {x: 6, y: Math.floor(Math.random() * 30 + 1)}
                            ]
                        }
                    ];

                    var chart = nv.models.lineChart()
                            .margin({left: 60, bottom: 30, right: 30, top: 0})  //Adjust chart margins to give the x-axis some breathing room.
                            .useInteractiveGuideline(true)  //We want nice looking tooltips and a guideline!
                            .interactive(false)
                            //how fast do you want the lines to transition?
                            .showLegend(false)       //Show the legend, allowing users to turn on/off line series.
                            .showYAxis(true)        //Show the y-axis
                            .showXAxis(true)        //Show the x-axis
                            .color(['#6b77f3', '#ffc91a', '#77c216', '#f05a92', '#a9a4d0'])
                        ;

                    var dates = ["Jun 07", "Jun 08", "Jun 09", "Jun 10", "Jun 11", "Jun 12", "Jun 13"];
                    chart.xAxis     //Chart x-axis settings
                        .tickFormat(function (d) {
                            //return dates[d]
                            return d3.time.format('%m/%d, %I%p')(new Date(d))
                        });

                    chart.yAxis     //Chart y-axis settings
                        .tickFormat(function (d) {
                            return d + '%'
                        });

                    chart.forceY([0, 60]);

                    /* Done setting the chart up? Time to render it!*/

//                    d3.select(".nv-legendWrap")
//                        .attr("transform", "translate(40,-30)");

                    d3.select('#server-load-chart svg')
                        .datum(data)
                        .transition().duration(500)
                        .call(chart);
                    $("#server-load-chart").siblings('.date-range').find('input.date-picker').change(function () {
                        redraw();
                    });
                    $("#server-load-chart").siblings('.date-range').find('select[name=by]').selectmenu({
                        change: function (event, ui) {
                            redraw();
                        }
                    });

                    function redraw() {
                        d3.select('#server-load-chart svg')
                            .datum([
                                {key: "empty",
                                    values: [
                                        {x: 0, y: 0}
                                    ]
                                }
                            ])
                            .transition().duration(0)
                            .call(chart);

                        d3.select('#server-load-chart svg')
                            .datum(data)
                            .transition().duration(500)
                            .call(chart);
                    }

                    return chart;
                }, callback: function (graph) {
                    setTimeout(function () {
                        $("#server-load-chart").find('.nv-lineChart circle.nv-point').attr("r", "5");
                        $("#server-load-chart").find('.nv-lineChart circle.nv-point:last').attr("r", "10").attr("stroke", "#6ebfe5").attr("fill", "#6ebfe5");
                        var yTicks = d3.select('#server-load-chart .nv-y.nv-axis > g').selectAll('g');
                        yTicks.selectAll('text:not(.nv-axislabel)').attr('transform', function (d, i, j) {
                            return 'translate (-15, 0)'
                        });
                        yTicks.selectAll('text.nv-axislabel').attr('transform', function (d, i, j) {
                            return 'translate (10, 0) rotate(-90)'
                        });
                        var xTicks = d3.select('#server-load-chart .nv-x.nv-axis > g').selectAll('g');
                        xTicks.selectAll('text').attr('transform', function (d, i, j) {
                            return 'translate (0, 10)'
                        });
                    }, 200);
                }
            });
        }
        drawServerLoadChart();

        /*connection-chart*/
        drawConnectionsChart = function() {
            nv.addGraph({
                generate: function () {
                    var data = [
                        {key: "User 1  ",
                            values: [
                                {x: 0, y: 200},
                                {x: 1, y: 250},
                                {x: 2, y: 200},
                                {x: 3, y: 290},
                                {x: 4, y: 240},
                                {x: 5, y: 330},
                                {x: 6, y: 230},
                                {x: 7, y: 290},
                                {x: 8, y: 240},
                                {x: 9, y: 330},
                                {x: 10, y: 230},
                                {x: 11, y: 290},
                                {x: 12, y: 240},
                                {x: 13, y: 330},
                                {x: 14, y: 230},
                                {x: 15, y: 290},
                                {x: 16, y: 240},
                                {x: 17, y: 330}
                            ]
                        },
                        {key: "User 2",
                            values: [
                                {x: 0, y: 450},
                                {x: 1, y: 365},
                                {x: 2, y: 450},
                                {x: 3, y: 479},
                                {x: 4, y: 354},
                                {x: 5, y: 463},
                                {x: 6, y: 373},
                                {x: 7, y: 465},
                                {x: 8, y: 350},
                                {x: 9, y: 479},
                                {x: 10, y: 454},
                                {x: 11, y: 363},
                                {x: 12, y: 473},
                                {x: 13, y: 365},
                                {x: 14, y: 450},
                                {x: 15, y: 479},
                                {x: 16, y: 354},
                                {x: 17, y: 463}
                            ]
                        }
                    ];

                    var chart = nv.models.lineChart()
                            .margin({left: 80, right: 30, bottom: 60})  //Adjust chart margins to give the x-axis some breathing room.
                            .useInteractiveGuideline(true)  //We want nice looking tooltips and a guideline!
                            .interactive(false)
                            //how fast do you want the lines to transition?
                            .showLegend(true)       //Show the legend, allowing users to turn on/off line series.
                            .showYAxis(true)        //Show the y-axis
                            .showXAxis(true)        //Show the x-axis
                            .color(['#6b77f3', '#ffc91a', '#77c216', '#f05a92', '#a9a4d0'])
                        ;

                    var dates = ["Jun 07", "Jun 08", "Jun 09", "Jun 10", "Jun 11", "Jun 12", "Jun 13", "Jun 14", "Jun 15", "Jun 16", "Jun 17", "Jun 18", "Jun 19", "Jun 20", "Jun 21", "Jun 22", "Jun 23", "Jun 24", "Jun 25", "Jun 26", "Jun 27"];
                    chart.xAxis     //Chart x-axis settings
                        .tickFormat(function (d) {
                            //return dates[d]
                            return d3.time.format('%m/%d, %I%p')(new Date(d))
                        });

                    chart.yAxis     //Chart y-axis settings
                        .margin({right: 100})
                        .tickFormat(function (d) {
                            return d
                        });

                    chart.forceY([0, 500]);

                    /* Done setting the chart up? Time to render it!*/

//                    d3.select(".nv-legendWrap")
//                        .attr("transform", "translate(40,-30)");

                    d3.select('#connection-chart svg')
                        .datum(data)
                        .transition().duration(500)
                        .call(chart);

                    return chart;
                }, callback: function (graph) {
                    setTimeout(function () {
                        $("#connection-chart").find('.nv-lineChart circle.nv-point').attr("r", "4");
                        var yTicks = d3.select('#connection-chart .nv-y.nv-axis > g').selectAll('g');
                        yTicks.selectAll('text').attr('transform', function (d, i, j) {
                            return 'translate (-25, 0)'
                        });
                        var xTicks = d3.select('#connection-chart .nv-x.nv-axis > g').selectAll('g');
                        xTicks.selectAll('text').attr('transform', function (d, i, j) {
                            return 'translate (0, 10)'
                        });
                    }, 200);
                }
            });
        }
        drawConnectionsChart();

        /*security KPI tooltip chart*/
        $('td.btn-holder .btn i.chart').mouseenter(function () {
            var offset = $(this).offset();
            $('#chart.kpi-toolTip').show().css({top: offset.top + 40, left: offset.left - 150});
            setTimeout(function () {
                toolTipChart('#area-chart svg')
            }, 100);
        }).mouseleave(function () {
            $('#chart.kpi-toolTip').hide().find('#area-chart').html('<svg></svg>');
        });


        /*toolTipChart*/
        function toolTipChart(id) {
            nv.addGraph({
                generate: function () {
                    var TTChart = nv.models.stackedArea()
                        .width(380)
                        .height(94)
                        .color(['#77C043']);
                    $.getJSON("data/tooltip-data.json", function (data) {
                        toolTipData = data.data;
                        d3.select(id)
                            .attr('width', 380)
                            .attr('height', 104)
                            .datum(toolTipData)
                            .call(TTChart);
                    });
                }
            });
        }
    }

    $('.response-time span').click(function(e){
        var offset = $(this).offset();
        $('#chart.response-toolTip').toggle().css({top:offset.top+45,left:offset.left-400});
        e.stopPropagation();

        //            $('#chart.kpi-toolTip').show().css({top:offset.top+40,left:offset.left-150});
        setTimeout(function(){
            toolTipChart('#area-chart svg')
        },100);

        //$('#u1435').toggle().css({top:offset.top+33,left:offset.left+709-237});
        //e.stopPropagation();

    });

    $('#chart.response-toolTip').click(function(e){
        e.stopPropagation();
    });


    /*info tip*/
    $('td.btn-holder .btn i.info').mouseenter(function () {
        var offset = $(this).offset();
        $('#info.kpi-toolTip').show().css({top: offset.top + 40, left: offset.left - 150});
    }).mouseleave(function () {
        $('#info.kpi-toolTip').hide();
    });

    /*slider function*/
    $('td.slider-holder .slider').each(function () {
        $(this).slider({
            range: "min",
            max: 120,
            value: parseInt($(this).data('val'))
        });
        $(this).slider('disable');
    });
    $('td .area-slider .slider').each(function () {
        $(this).slider({
            range: "min",
            max: 4000,
            value: 0,
            animate: "slow",
            change: function (event, ui) {
                $(event.target).siblings('.value').html(ui.value + '/4000')
            }
        });
        $(this).slider('value', parseInt($(this).parent().data('val'))).slider('disable');
    });

    $('td .service-slider .slider').each(function () {
        $(this).slider({
            range: "min",
            max: 100,
            value: 0,
            animate: "slow"
        });
        $(this).slider('value', parseInt($(this).parent().data('val')));
    });


    /*configuration functions*/
    /*show modal*/
    $('.indicators .settings').click(function () {
        //$('.settings-modal, .modal-overlay').show();
    });

    /*.config-tabs*/
    $(".config-tabs").tabs({active: 0});

    $('.chart-holder.hardware .scroll-content').width($('.chart-holder.hardware .scroll-content').find('.item').length * 188);
    /*custom scrollbar*/
    if(typeof mCustomScrollbar !== "undefined" ){
        setTimeout(function(){
            $(".settings-modal .ui-tabs-panel").mCustomScrollbar({
                scrollInertia:450,
                mouseWheel:{
                    scrollAmount: 300
                },
                callbacks:{
                    onScrollStart:function(){
                        if($(".ui-dialog").is(":visible")){
                            $(".ui-dialog:visible").find(".popup").dialog('close');
                        }
                    }
                }
            });
            $(".chart-holder").mCustomScrollbar({
                advanced:{
                    updateOnContentResize:true,
                    updateOnBrowserResize:true
                },
                axis:"x"
            });
        },100);
    }

/*
    if (typeof mCustomScrollbar !== "undefined") {
        setTimeout(function () {
            $(".settings-modal .ui-tabs-panel").mCustomScrollbar({
                scrollInertia: 450,
                mouseWheel: {
                    scrollAmount: 300
                }
            });

            $(".chart-holder").mCustomScrollbar({

            });

        }, 100);
    }
*/

    /*accordion function*/
/*
    $(".accordion").accordion({
        collapsible: true,
        heightStyle: "content",
        beforeActivate: function (event, ui) {
            // The accordion believes a panel is being opened
            if (ui.newHeader[0]) {
                var currHeader = ui.newHeader;
                var currContent = currHeader.next('.ui-accordion-content');
                // The accordion believes a panel is being closed
            } else {
                var currHeader = ui.oldHeader;
                var currContent = currHeader.next('.ui-accordion-content');
            }
            // Since we've changed the default behavior, this detects the actual status
            var isPanelSelected = currHeader.attr('aria-selected') == 'true';

            // Toggle the panel's header
            currHeader.toggleClass('ui-corner-all', isPanelSelected).toggleClass('accordion-header-active ui-state-active ui-corner-top', !isPanelSelected).attr('aria-selected', ((!isPanelSelected).toString()));

            // Toggle the panel's icon
            //currHeader.children('.ui-icon').toggleClass('ui-icon-triangle-1-e',isPanelSelected).toggleClass('ui-icon-triangle-1-s',!isPanelSelected);

            // Toggle the panel's content
            currContent.toggleClass('accordion-content-active', !isPanelSelected);
            if (isPanelSelected) {
                currContent.slideUp();
            } else {
                currContent.slideDown();
            }

            return false; // Cancels the default action
        }
    });

    $(".accordion h3").find('a').click(function (e) {
        e.stopPropagation();
        if ($(this).hasClass('edit')) {
            $(this).hide().siblings('.save').show();
            $(this).closest('h3').next('.ui-accordion-content').find('.label_check').css('display', 'inline-block');
        } else if ($(this).hasClass('save')) {
            $(this).hide().siblings('.edit').show();
            $(this).closest('h3').next('.ui-accordion-content').find('.label_check').hide();
        }
    });
*/

    /*accordion function*/
    $( ".accordion" ).accordion({
        active: 1,
        collapsible: true,
        heightStyle: "content",
        beforeActivate: function(event, ui) {
            // The accordion believes a panel is being opened
            if (ui.newHeader[0]) {
                var currHeader  = ui.newHeader;
                var currContent = currHeader.next('.ui-accordion-content');
                // The accordion believes a panel is being closed
            } else {
                var currHeader  = ui.oldHeader;
                var currContent = currHeader.next('.ui-accordion-content');
            }
            // Since we've changed the default behavior, this detects the actual status
            var isPanelSelected = currHeader.attr('aria-selected') == 'true';

            // Toggle the panel's header
            currHeader.toggleClass('ui-corner-all',isPanelSelected).toggleClass('accordion-header-active ui-state-active ui-corner-top',!isPanelSelected).attr('aria-selected',((!isPanelSelected).toString()));

            // Toggle the panel's icon
            //currHeader.children('.ui-icon').toggleClass('ui-icon-triangle-1-e',isPanelSelected).toggleClass('ui-icon-triangle-1-s',!isPanelSelected);

            // Toggle the panel's content
            currContent.toggleClass('accordion-content-active',!isPanelSelected);
            if (isPanelSelected) { currContent.slideUp(); }  else { currContent.slideDown(); }

            return false; // Cancels the default action
        }
    });

    $( ".accordion h3").find('a').click(function(e){
        e.stopPropagation();
        if($(this).hasClass('edit')){
            console.log('edit click')
            $(this).hide().siblings('.save').show();
            $(this).closest('h3').next('.ui-accordion-content').find('.label_check').css('display', 'inline-block');
            $(this).closest('h3').next('.ui-accordion-content').find('.close a').css('display', 'block');
        }else if($(this).hasClass('save')){
            $(this).hide().siblings('.edit').show();
            $(this).closest('h3').next('.ui-accordion-content').find('.label_check').hide();
            $(this).closest('h3').next('.ui-accordion-content').find('.close a').hide();
        }
    });

    // when change panel
    $( ".accordion" ).accordion({
        type: 0,
        beforeActivate: function(event, ui) {
            //$("#add-pop-over-area").dialog("close") ;
            if($(".ui-dialog").is(":visible")){
                $(".ui-dialog:visible").find(".popup").dialog('close');
            }
        },activate: function( event, ui ) {
            // se for activado do botao
            console.log("=#= : " + this.type);
            if(this.type > 0){
                //  openPopup($('.btn-add-error'), $('#add-pop-guard-log'));
                getElements(this.type);
            }
            this.type = 0;
        }
    }).on('btnActivation', function( event, val ) {
        this.type = val;
        //console.log("type " + this.type);
    });

    // when change tab
    $(function () {
        $( ".config-tabs" ).tabs({
            activate: function(event, ui) {
                if($(".ui-dialog").is(":visible")){
                    $(".ui-dialog:visible").find(".popup").dialog('close');
                }
                $(".accordion" ).accordion().trigger( "btnActivation", [ 0 ] );
            }
        });
    });

    $(".addbtn").click(function (e) {
        e.stopPropagation();
        console.log("add clicked");
        var x = $(this);
        console.log(x.find('i'));
        $('#add-popup').toggle().css({
            top: x.children('i').position().top
        });
    });

    /*range slider*/
    var tooltip = $('<div class="tooltip" />').css({
        position: 'absolute',
        top: -25,
        left: -15
    }).hide();

    $(".range-slider").each(function () {
        var sym = '%';
        if (this.id == "database-backup" || this.id == "sp-duration" || this.id == "sp-duration-arch" || this.id == "ac-ac" ||
            this.id == "oc-fi" || this.id == "oc-em" || this.id == "oc-co" || this.id == "oc-en" || this.id == "oc-it" || this.id == "oc-te" || this.id == "ls-cr") {
            sym = " days";
        }
        else if (this.id == "sp-memory" || this.id == "sp-hd" || this.id == "sp-db-sz" || this.id == "sp-og-app"
            || this.id == "sp-sql-mem" || this.id == "sp-og-app-err" || this.id == "sp-datacon" || this.id == "sp-dataexch" || this.id == "li-me" || this.id == "er-mo") {
            sym = " MB";
        }
        else if (this.id == "sp-all-events" || this.id == "sp-dfo" || this.id == "sp-dho" || this.id == "sp-alarm-active"
            || this.id == "sp-lea" || this.id == "sp-tbc" || this.id == "sp-lbc" || this.id == "sp-nbc" ||
            this.id == "sp-faildrpc" || this.id == 'sp-lin' || this.id == 'sp-lin' || this.id == 'sp-sp' ||
            this.id == 'sp-carrier' || this.id == "sp-head" ||
            this.id == "au-fl" || this.id == "au-te" || this.id == "au-sd" || this.id == "au-se" ||
            this.id == "ca-fl" || this.id == "ca-te" || this.id == "ca-sd" || this.id == "ca-se" ||
            this.id == "sc-fl" || this.id == "sc-te" || this.id == "sc-sd" || this.id == "sc-se" ||
            this.id == "lc-fl" || this.id == "lc-te" || this.id == "lc-sd" || this.id == "lc-se" ||
            this.id == "hc-ap" || this.id == "hc-re" || this.id == "hc-in" || this.id == "hc-ou") {
            sym = '';
        }
        $(this).slider({
            range: true,
            min: 0,
            max: 100,
            values: [$(this).data('val').split('-')[0], $(this).data('val').split('-')[1]],
            slide: function (event, ui) {
                var tr = $(event.target).closest('tr');
                tr.find('.label span.min').html(ui.values[0] + sym);
                tr.find('.label span.max').html(ui.values[1] + sym);
                $(event.target).find('.color-add').css('width', 100 - ui.values[1] + sym);
                $(this).find('.ui-slider-handle:first').find('.tooltip').text(ui.values[0] + sym);
                $(this).find('.ui-slider-handle:last').find('.tooltip').text(ui.values[1] + sym);
            },
            change: function (event, ui) {
            }
        }).append('<div class="color-add" style="width: 50%"></div>')
            .find(".ui-slider-handle").hover(function () {
                $(this).find('.tooltip').show();
            }, function () {
                $(this).find('.tooltip').hide()
            });

        $(this).closest('tr').find('.label span.min').html($(this).data('val').split('-')[0] + sym);
        $(this).closest('tr').find('.label span.max').html($(this).data('val').split('-')[1] + sym);
        $(this).find('.ui-slider-handle:first').append($(tooltip).text($(this).data('val').split('-')[0] + sym).clone());
        $(this).find('.ui-slider-handle:last').append($(tooltip).text($(this).data('val').split('-')[1] + sym).clone());
    });


    /*close settings modal*/
    $('.close-modal, .saveSettings').click(function () {
        $('.settings-modal, .modal-overlay').hide();
    });

    $('.hardware-counts').find('.access-panel').find('#access-panel').text(Math.floor(Math.random() * 1000 + 10));
    $('.hardware-counts').find('.reader').find('#reader').text(Math.floor(Math.random() * 1000 + 10));
    $('.hardware-counts').find('.input').find('#input').text(Math.floor(Math.random() * 1000 + 10));
    $('.hardware-counts').find('.output').find('#output').text(Math.floor(Math.random() * 1000 + 10));

    if ($(window).width() > $('.dashboard .main-section .section .middle-box #onGuardAlarms1 .scroll-content').width()){
        $('.main-section .section .middle-box #onGuardAlarms1 .scroll-content').width($(window).width());
    }
    if ($(window).width() > $('.dashboard .main-section .section .middle-box #onGuardAlarms2 .scroll-content').width()){
        $('.main-section .section .middle-box #onGuardAlarms2 .scroll-content').width($(window).width());
    }
    if ($(window).width() > $('.dashboard .main-section .section .middle-box #onGuardAlarms .scroll-content').width()){
        $('.main-section .section .middle-box #onGuardAlarms .scroll-content').width($(window).width());
    }

    $(window).resize(function () {

        if($(window).width() < 2000){
            $('.main-section .section .middle-box #onGuardAlarms1 .scroll-content').width(1800);
        }
        else if ($(window).width() > $('.dashboard .main-section .section .middle-box #onGuardAlarms1 .scroll-content').width()){
            $('.main-section .section .middle-box #onGuardAlarms1 .scroll-content').width($(window).width());
        }

        if($(window).width() < 2000){
            $('.main-section .section .middle-box #onGuardAlarms2 .scroll-content').width(1800);
        }
        else if ($(window).width() > $('.dashboard .main-section .section .middle-box #onGuardAlarms2 .scroll-content').width()){
            $('.main-section .section .middle-box #onGuardAlarms2 .scroll-content').width($(window).width());
        }
        if($(window).width() < 2000){
            $('.main-section .section .middle-box #onGuardAlarms .scroll-content').width(1500);
        }
        else if ($(window).width() > $('.dashboard .main-section .section .middle-box #onGuardAlarms .scroll-content').width()){
             $('.main-section .section .middle-box #onGuardAlarms .scroll-content').width($(window).width());
        }


/*
        drawSPChart('#performance-chart', undefined, undefined, undefined, undefined, undefined, 'data/systemPerformanceChartData.json');
        drawSPChart('#alarm-chart', undefined, undefined, undefined, undefined, undefined, 'data/OnGuardServerAlarmChartData.json');
        drawSPChart('#alarm-chart-status', undefined, undefined, undefined, undefined, undefined, 'data/OnGuardCredByStatus.json');
        drawSPChart('#alarm-chart-type', undefined, undefined, undefined, undefined, undefined, 'data/OnGuardCredByType.json');

        drawLineChart2('#error-log-chart-mainpage', fromdate, todate);
        drawLineChart2('#error-log-chart', fromdate, todate);
        drawLineChart3('#communication-server-error-chart', fromdate, todate);
*/
        if ($(window).width() < 1008) {
            if ($('.dashboard').hasClass('expand')) {
                $('.dashboard').removeClass('expand');
                setCookie("onguardcollapse", "Yes", 1);
            }
        } else {
            if (!$('.dashboard').hasClass('expand')) {
                $('.dashboard').addClass('expand');
                setCookie("onguardcollapse", "No", 1);
            }
        }
        $('.overlay').height($('.main-section').height());
    });

    if ($(window).height() > $('.main-section').height()) {
        $('.main-section').height($(window).height());
    }
    $(document).on('click', '.dashboard aside .logo', function () {

        var fromdate = moment($('header .date-range input[name=fromDate1].date-picker').val()).toDate();
        var todate = moment($('header .date-range input[name=toDate1].date-picker').val()).toDate();

        drawSPChart('#performance-chart', fromdate, todate, undefined, undefined, undefined, 'data/systemPerformanceChartData.json');
        drawSPChart('#alarm-chart', fromdate, todate, undefined, undefined, undefined, 'data/OnGuardServerAlarmChartData.json');
        drawSPChart('#alarm-chart-status', fromdate, todate, undefined, undefined, undefined, 'data/OnGuardCredByStatus.json');
        drawSPChart('#alarm-chart-type', fromdate, todate, undefined, undefined, undefined, 'data/OnGuardCredByType.json');
        drawSPChart("#headquarters-chart", fromdate, todate, 7, undefined, undefined, 'data/headquartersChartData.json');
        drawSPChart("#carriers-chart", fromdate, todate, 7, undefined, undefined, 'data/headquartersChartData.json');
        drawSPChart("#secure-printing-chart", fromdate, todate, 7, undefined, undefined, 'data/securePrintingChartData.json');
        drawSPChart("#lincolnton-chart", fromdate, todate, 7, undefined, undefined, 'data/lincolntonChartChartData.json');

        drawLineChart2('#error-log-chart-mainpage', fromdate, todate);
        drawLineChart2('#error-log-chart', fromdate, todate);
        drawLineChart2('#data-log-chart', fromdate, todate);
        drawLineChart3('#communication-server-error-chart', fromdate, todate);

        generateBadgeChart();
        $(this).closest('.dashboard').toggleClass('expand');
        calcWidth();
        if ($('.dashboard').hasClass('expand')) {
            setCookie("onguardcollapse", "No", 1);
             console.log(" aside if ");
            $('#communication-server-sub-menu').show();

        }
        else {
            console.log(" aside else ");
            setCookie("onguardcollapse", "Yes", 1);
            $('#communication-server-sub-menu').hide();
        }

        $(this).parent('aside').find('#communication-server-sub-menu').toggleClass('hide2');
        drawSystemPerformanceBarChart();

        drawLineChart1('#lock-wait-chart', fromdate, todate);
        drawConnectionsChart();
        databaseSizeGrowth(fromdate, todate);
        serverThroughputChart('#east-server-throughput-chart', "data/eastServerThroughputChart.json");
        drawServerLoadChart();
        //drawCommunicationServerErrorChart();
        generateBadgeChart();
        archive_chart();
        alarmChart('#alarm-chart2', 'alarmChart2Data.json', "Access Granted");
        alarmChart('#alarm-chart3', 'alarmChart3Data.json', "Invalid Pin");
        alarmChart('#alarm-chart4', 'alarmChart1Data.json', "Door Forced Open");
        alarmChart('#alarm-chart5', 'alarmChart1Data.json', "Door Held Open");

        alarmChart('#finance-chart', 'alarmChart1Data.json', "Finance");
        alarmChart('#employee-chart', 'alarmChart2Data.json', "Employee");
        alarmChart('#contractor-chart', 'alarmChart3Data.json', "Contractor");
        alarmChart('#test1-chart', 'alarmChart1Data.json', "Engineering");
        alarmChart('#test2-chart', 'alarmChart2Data.json', "IT");
        alarmChart('#test3-chart', 'alarmChart3Data.json', "Temp");

        var total = '<div class="totalHolder"><span class="total">Total<span class="count">1200</span></span></div>';
        var total2 = '<div class="totalHolder"><span class="total">Total<span class="count">935</span></span></div>';
        var total3 = '<div class="totalHolder"><span class="total">Total<span class="count">760</span></span></div>';
        var total4 = '<div class="totalHolder"><span class="total">Total<span class="count">25</span></span></div>';
        var total5 = '<div class="totalHolder"><span class="total">Total<span class="count">11</span></span></div>';

        var employee = '<div class="totalHolder"><span class="total">Total<span class="count">1123</span></span></div>';
        var contractor = '<div class="totalHolder"><span class="total">Total<span class="count">963</span></span></div>';
        var engineering = '<div class="totalHolder"><span class="total">Total<span class="count">650</span></span></div>';
        var it = '<div class="totalHolder"><span class="total">Total<span class="count">35</span></span></div>';
        var temp = '<div class="totalHolder"><span class="total">Total<span class="count">5</span></span></div>';
        //$('#alarm-chart1 svg').before(total);
        $('#alarm-chart2 svg').before(total2);
        $('#alarm-chart3 svg').before(total3);
        $('#alarm-chart4 svg').before(total4);
        $('#alarm-chart5 svg').before(total5);
        $('#finance-chart svg').before(total);
        $('#employee-chart svg').before(employee);
        $('#contractor-chart svg').before(contractor);
        $('#test1-chart svg').before(engineering);
        $('#test2-chart svg').before(it);
        $('#test3-chart svg').before(temp);

        alarmChart('#active-chart','alarmChart4Data.json',"Active");
        alarmChart('#deactivate-chart','alarmChart5Data.json',"Deactivate");
        alarmChart('#lost-chart','alarmChart6Data.json',"Lost");
        alarmChart('#stolen-chart','alarmChart4Data.json',"Stolen");
        alarmChart('#test5-chart','alarmChart5Data.json',"Found");
        alarmChart('#test6-chart','alarmChart6Data.json',"Hidden");

        $('#active-chart svg').before(total);
        $('#deactivate-chart svg').before(total);
        $('#lost-chart svg').before(total);
        $('#stolen-chart svg').before(total);
        $('#test5-chart svg').before(total);
        $('#test6-chart svg').before(total);

    });

    function reinitcharts(){

        var fromdate = moment($('header .date-range input[name=fromDate1].date-picker').val()).toDate();
        var todate = moment($('header .date-range input[name=toDate1].date-picker').val()).toDate();

        drawSPChart('#performance-chart', fromdate, todate, undefined, undefined, undefined, 'data/systemPerformanceChartData.json');
        drawSPChart('#alarm-chart', fromdate, todate, undefined, undefined, undefined, 'data/OnGuardServerAlarmChartData.json');
        drawSPChart('#alarm-chart-status', fromdate, todate, undefined, undefined, undefined, 'data/OnGuardCredByStatus.json');
        drawSPChart('#alarm-chart-type', fromdate, todate, undefined, undefined, undefined, 'data/OnGuardCredByType.json');
        drawSPChart("#headquarters-chart", fromdate, todate, 7, undefined, undefined, 'data/headquartersChartData.json');
        drawSPChart("#carriers-chart", fromdate, todate, 7, undefined, undefined, 'data/headquartersChartData.json');
        drawSPChart("#secure-printing-chart", fromdate, todate, 7, undefined, undefined, 'data/securePrintingChartData.json');
        drawSPChart("#lincolnton-chart", fromdate, todate, 7, undefined, undefined, 'data/lincolntonChartChartData.json');

        drawLineChart2('#error-log-chart-mainpage', fromdate, todate);
        drawLineChart2('#error-log-chart', fromdate, todate);
        drawLineChart2('#data-log-chart', fromdate, todate);
        drawLineChart3('#communication-server-error-chart', fromdate, todate);

        generateBadgeChart();
        $(this).closest('.dashboard').toggleClass('expand');
        calcWidth();
        if ($('.dashboard').hasClass('expand')) {
            setCookie("onguardcollapse", "No", 1);
        }
        else {
            setCookie("onguardcollapse", "Yes", 1);
        }

        $(this).parent('aside').find('#communication-server-sub-menu').toggleClass('hide2');
        drawSystemPerformanceBarChart();

        drawLineChart1('#lock-wait-chart', fromdate, todate);
        drawConnectionsChart();
        databaseSizeGrowth(fromdate, todate);
        serverThroughputChart('#east-server-throughput-chart', "data/eastServerThroughputChart.json");
        drawServerLoadChart();
        //drawCommunicationServerErrorChart();
        generateBadgeChart();
        archive_chart();
        alarmChart('#alarm-chart2', 'alarmChart2Data.json', "Access Granted");
        alarmChart('#alarm-chart3', 'alarmChart3Data.json', "Invalid Pin");
        alarmChart('#alarm-chart4', 'alarmChart1Data.json', "Door Forced Open");
        alarmChart('#alarm-chart5', 'alarmChart1Data.json', "Door Held Open");

        alarmChart('#finance-chart', 'alarmChart1Data.json', "Finance");
        alarmChart('#employee-chart', 'alarmChart2Data.json', "Employee");
        alarmChart('#contractor-chart', 'alarmChart3Data.json', "Contractor");
        alarmChart('#test1-chart', 'alarmChart1Data.json', "Engineering");
        alarmChart('#test2-chart', 'alarmChart2Data.json', "IT");
        alarmChart('#test3-chart', 'alarmChart3Data.json', "Temp");

    }

    $(document).on('click', '.overlay', function () {
        $('header .calendar').trigger('click');
    });

    $('.overlay').click(function (e) {
        $('.calendar-popup').siblings('.popup').hide();
        $('.calendar-popup').hide();
        $('header .calendar').removeClass('active');
        $('.overlay').hide();
        $('.add-events').hide();
        $('.watchDropDown-popup').hide();
        e.stopPropagation();
    });

    var isiPad = navigator.userAgent.match(/iPad/i) != null;
    if (isiPad) {
        $('.dashboard').removeClass('expand');
        setCookie("onguardcollapse", "Yes", 1);

        $('.dashboard').addClass('ipad');
        $('html').addClass('ipad');
    }

    function max(v1, v2) {
        return v1 > v2? v1 :v2;
    }
    /*
    var h1 = $(".dashboard .main-section .section .fluid-height.top-box.mid-left").height();
    var h2 = $(".dashboard .main-section .section .fluid-height.top-box.mid-mid").height();
    var h3 = $(".dashboard .main-section .section .fluid-height.top-box.mid-right").height();
    var m = max(max(h1, h2), h3);

    $(".dashboard .main-section .section .fluid-height.top-box.mid-left").height(m);
    $(".dashboard .main-section .section .fluid-height.top-box.mid-mid").height(m);
    $(".dashboard .main-section .section .fluid-height.top-box.mid-right").height(m);


    var h1 = $(".dashboard .main-section .section #db-server.fluid-height.top-box.left").height();
    var h3 = $(".dashboard .main-section .section #db-server.fluid-height.top-box.right").height();
    var m = max(max(h1, h2), h3);

    $(".dashboard .main-section .section #db-server.fluid-height.top-box.left").height(m);
    $(".dashboard .main-section .section #db-server.fluid-height.top-box.right").height(m);
*/
/*
    var h1 = $(".dashboard .main-section .section .fluid-height.top-box.mid-left-small").height();
    var h2 = $(".dashboard .main-section .section .fluid-height.top-box.mid-mid-big").height();
    var h3 = $(".dashboard .main-section .section .fluid-height.top-box.mid-right-small").height();
    var m = max(max(h1, h2), h3);

    $(".dashboard .main-section .section .fluid-height.top-box.mid-left-small").height(m);
    $(".dashboard .main-section .section .fluid-height.top-box.mid-mid-big").height(m);
    $(".dashboard .main-section .section .fluid-height.top-box.mid-right-small").height(m);
*/

    $(window).resize(function () {
        /*
        var h1 = $(".dashboard .main-section .section .fluid-height.top-box.mid-left").height();
        var h2 = $(".dashboard .main-section .section .fluid-height.top-box.mid-mid").height();
        var h3 = $(".dashboard .main-section .section .fluid-height.top-box.mid-right").height();
        var m = max(max(h1, h2), h3);

        $(".dashboard .main-section .section .fluid-height.top-box.mid-left").height(m);
        $(".dashboard .main-section .section .fluid-height.top-box.mid-mid").height(m);
        $(".dashboard .main-section .section .fluid-height.top-box.mid-right").height(m);
        //$(".dashboard .main-section .section .middle-box-2").height(m);

        var h1 = $(".dashboard .main-section .section #db-server.fluid-height.top-box.left").height();
        var h3 = $(".dashboard .main-section .section #db-server.fluid-height.top-box.right").height();
        var m = max(max(h1, h2), h3);

        $(".dashboard .main-section .section #db-server.fluid-height.top-box.left").height(m);
        $(".dashboard .main-section .section #db-server.fluid-height.top-box.right").height(m);
        */

/*
        var h1 = $(".dashboard .main-section .section .fluid-height.top-box.mid-left-small").height();
        var h2 = $(".dashboard .main-section .section .fluid-height.top-box.mid-mid-big").height();
        var h3 = $(".dashboard .main-section .section .fluid-height.top-box.mid-right-small").height();
        var m = max(max(h1, h2), h3);

        $(".dashboard .main-section .section .fluid-height.top-box.mid-left-small").height(m);
        $(".dashboard .main-section .section .fluid-height.top-box.mid-mid-big").height(m);
        $(".dashboard .main-section .section .fluid-height.top-box.mid-right-small").height(m);
*/

        var fromdate = moment($('header .date-range input[name=fromDate1].date-picker').val()).toDate();
        var todate = moment($('header .date-range input[name=toDate1].date-picker').val()).toDate();

        drawSPChart('#performance-chart', fromdate, todate, undefined, undefined, undefined, 'data/systemPerformanceChartData.json');
        drawSPChart('#alarm-chart', fromdate, todate, undefined, undefined, undefined, 'data/OnGuardServerAlarmChartData.json');
        drawSPChart('#alarm-chart-status', fromdate, todate, undefined, undefined, undefined, 'data/OnGuardCredByStatus.json');
        drawSPChart('#alarm-chart-type', fromdate, todate, undefined, undefined, undefined, 'data/OnGuardCredByType.json');

        drawLineChart2('#error-log-chart', fromdate, todate);
        drawLineChart2('#error-log-chart-mainpage', fromdate, todate);
        drawLineChart2('#data-log-chart', fromdate, todate);
        drawLineChart3('#communication-server-error-chart', fromdate, todate);

        if ($(window).width() < 1008) {
            if ($('.dashboard').hasClass('expand')) {
                $('.dashboard').removeClass('expand');
                setCookie("onguardcollapse", "Yes", 1);
            }
        } else {
            if (!$('.dashboard').hasClass('expand')) {
                $('.dashboard').addClass('expand');
                setCookie("onguardcollapse", "No", 1);
            }
        }
        $('.overlay').height($('.main-section').height());
    });

    if ($(window).height() > $('.main-section').height()) {
        $('.main-section').height($(window).height());
    }

    $('input[name=fromDate1]').datepicker('enable').datepicker("setDate", moment().subtract(7, 'd').toDate());
    $('input[name=toDate1]').datepicker('enable');


    
    function calcWidth(){

        var isNavOpened = $("body").hasClass('expand') ? true : false;
        var isAlertOpened = !$(".section").hasClass('open') ? false : true;

         //console.log(isNavOpened,isAlertOpened);

        var width = 0;

        if(isNavOpened && isAlertOpened){
            width = $(window).width() - 188 - 239;
        }
        if(isNavOpened && !isAlertOpened){
            width = $(window).width() - 188 ;
        }
        if(!isNavOpened && isAlertOpened){
            width = $(window).width() - 239 - 55 ;
        }
        if(!isNavOpened && !isAlertOpened){
            width = $(window).width() - 55;
        }
        
        //Reinitialized all the slickers
        if(width < 900){
                $(".title.clearfix").addClass('small-container');

                $('.area-uti-system-check .system-check-slider').slick('unslick');
                $('.area-uti-system-check .system-check-slider').slick({
                    infinite: false,
                    slidesToShow:3,
                    slidesToScroll: 1,
                    arrows: true
                });

                $('.system-check-slider').slick('unslick');
                $('.system-check-slider').slick({
                    infinite: false,
                    slidesToShow:3,
                    slidesToScroll: 1,
                    arrows: true
                });

                /* sop */
                $('.sop1 .system-check-slider').slick('unslick');
                $('.sop1 .system-check-slider').slick({
                    infinite: false,
                    slidesToShow:2,
                    slidesToScroll: 1,
                    arrows: true
                });
                /* sop */
                $('.au1 .system-check-slider').slick('unslick');
                $('.au1 .system-check-slider').slick({
                    infinite: false,
                    slidesToShow:2,
                    slidesToScroll: 1,
                    arrows: true
                });
                $(".dashboard .main-section .section table tr td.slider-holder .ui-slider").css('width','270px');
        }else{

            $('.area-uti-system-check .system-check-slider').slick('unslick');
                $('.area-uti-system-check .system-check-slider').slick({
                    infinite: false,
                    slidesToShow:4,
                    slidesToScroll: 1,
                    arrows: true
                });

                $('.system-check-slider').slick('unslick');
                $('.system-check-slider').slick({
                    infinite: false,
                    slidesToShow:4,
                    slidesToScroll: 1,
                    arrows: true
                });

                /* sop */
                $('.sop1 .system-check-slider').slick('unslick');
                $('.sop1 .system-check-slider').slick({
                    infinite: false,
                    slidesToShow:4,
                    slidesToScroll: 1,
                    arrows: true
                });
                /* sop */
                $('.au1 .system-check-slider').slick('unslick');
                $('.au1 .system-check-slider').slick({
                    infinite: false,
                    slidesToShow:4,
                    slidesToScroll: 1,
                    arrows: true
                });

            $(".title.clearfix").removeClass('small-container');
            $(".dashboard .main-section .section table tr td.slider-holder .ui-slider").css('width','400px');
        }
        width += "px";
        console.log("w",width);
        $(".section").css('width',width);
        $(".system-check.system-check-2").css('width',width);
        $(".date-range-box").css('width,width'); 

    }
    $(document).on('click', '.dashboard aside .collapse-button', function () {
         
         $(this).closest('.dashboard').toggleClass('expand');
         calcWidth();
         if(!$(this).closest('.dashboard').hasClass('expand')){
            $('#communication-server-sub-menu').hide();
            console.log(" .dashboard aside .collapse-button if ");
        }else{
            console.log(" .dashboard aside .collapse-button else ");
           $('#communication-server-sub-menu').show();
        }
         /*
         setTimeout(function() {

            if ($('.system-check-slider').length > 0) {
                $('.system-check-slider').slick({
                    infinite: false,
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    arrows: true
                });
            }
        },300);
*/
    });
    

    $(window).resize(function () {
        if ($(window).width() < 1008) {
            if ($('.dashboard').hasClass('expand')) {
                $('.dashboard').removeClass('expand');
            }
        } else {
            if (!$('.dashboard').hasClass('expand')) {
                $('.dashboard').addClass('expand');
            }
        }
        $('.overlay').height($('.main-section').height());
    });


    /* Alert Popup */

    $('.alerts-dashboard').hide();
    $('header a.alert').click(function(e){

        if(!$(".section").hasClass("open")){
            
            $(".section").addClass("open");
            if ($('.area-uti-system-check .system-check-slider').length > 0) {
                $('.area-uti-system-check .system-check-slider').slick('unslick');
                $('.area-uti-system-check .system-check-slider').slick({
                    infinite: false,
                    slidesToShow:4,
                    slidesToScroll: 1,
                    arrows: true
                });
            }

        }else{
            $(".section").removeClass("open");
        
        }

        $('.alerts-dashboard').toggle(300,function(){
            calcWidth();
            reinitcharts();
        });
        
        //$(window).trigger('resize');
        e.stopPropagation();
        initCalendar();
        if ($(".time-picker").length > 0) {
            $('.time-picker').timepicker({
                /*showPeriod: true,*/
                showLeadingZero: true
            }).timepicker('setTime', new Date());
        }
        $('.input-cnt .time-picker').timepicker({}).timepicker('setTime', new Date());
        $('.alerts-dashboard .header').removeClass('border-pad');
        $('.alerts-dashboard .events-cnt .header').removeClass('margin-top');
        $('.alerts-dashboard .events-cnt .calendar-header').toggle();
        $('.alerts-dashboard .events-cnt .view #calendar').toggle();
        //$('.alerts-dashboard .events-cnt').toggle();
        //$('.alerts-dashboard .events-cnt').toggle();
        //$('.alerts-dashboard .header .collapse-events').toggleClass('rotate');
        $('.alerts-dashboard .add-events').hide();
        $(this).toggleClass('clicked');
    });

    $('.alerts-dashboard .header .collapse-events').click(function(e){
        $('.alerts-dashboard .events-cnt').toggle();
        $('.alerts-dashboard .events-cnt .calendar-header').hide();
        $('.alerts-dashboard .events-cnt .view #calendar').hide();
        $(this).toggleClass('rotate');
        if($(this).hasClass('rotate')){
            $('.alerts-dashboard .add-events').hide();
            $('.alerts-dashboard .header').removeClass('border-pad');
            $('.alerts-dashboard .events-cnt .header').removeClass('margin-top');
        }
    });

    $('.alerts-dashboard .collapse-warning').click(function(e){
        //alert('test');
        $('.alerts-dashboard .warningSection').toggle();

        $(this).toggleClass('rotate');
        if($(this).hasClass('rotate')){

            $('.alerts-dashboard .header').removeClass('border-pad');
            
        }
    });

    $('.alerts-dashboard .collapse-error').click(function(e){
        //alert('test');
        $('.alerts-dashboard .errorSection').toggle();

        $(this).toggleClass('rotate');
        if($(this).hasClass('rotate')){
            $('.alerts-dashboard .header').removeClass('border-pad');
        }
    });


    $('.alerts-dashboard .header .add-events-btn').click(function(e){
        $('.alerts-dashboard .add-events').show();
        $('.alerts-dashboard .header').addClass('border-pad');
        $('.alerts-dashboard .events-cnt .header').addClass('margin-top');
    });

    $('.alerts-dashboard .add-events .saveEvent').click(function(e){
        $('.alerts-dashboard .add-events').hide();
        $('.alerts-dashboard .header').removeClass('border-pad');
        $('.alerts-dashboard .events-cnt .header').removeClass('margin-top');
    });
    $('.alerts-dashboard .add-events .cancelEvent').click(function(e){
        $('.alerts-dashboard .add-events').hide();
        $('.alerts-dashboard .header').removeClass('border-pad');
        $('.alerts-dashboard .events-cnt .header').removeClass('margin-top');
    });

    $('.alerts-dashboard .events-cnt .header .month .date-icon').click(function(e){
        $('.alerts-dashboard .events-cnt .calendar-header').toggle();
        $('.alerts-dashboard .events-cnt .view #calendar').toggle();
    });

    $('.alerts-dashboard .events-cnt .header .month .btn-cnt span').click(function(e){
        $('.alerts-dashboard .events-cnt .calendar-header').toggle();
        $('.alerts-dashboard .events-cnt .view #calendar').toggle();
    });

    

});




