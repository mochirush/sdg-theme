$().ready(function(){

    // Center align nav bar

    var width = $('.navbar-nav.left.center').width();
    $('.navbar-nav.left.center').css('margin-left', '-' + (width / 2)+'px');

    // Mobile Menu

    $('.mobileNav').click(function(){
        $('.mobileNavigation').slideToggle();
    });

    // SDG Google Map
    var sdgMap="";
    sdgMap += "<iframe width=\"570\" height=\"450\" frameborder=\"0\" style=\"border:0\" src=\"https:\/\/www.google.com\/maps\/embed\/v1\/place?q=7500%20Olson%20Memorial%20Highway%2C%20Golden%20Valley%2C%20MN%2C%20United%20States&key=AIzaSyDX6dRmtmFkUTPsGbiCB2X5ZYkfVjgWni4\"><\/iframe>";
    $('.sdg-google-map').click(function(e){
        e.preventDefault();
        bootbox.dialog({
            message: sdgMap,
            buttons: {
                success: {
                    label: "Ok",
                    className: "btn btn-form pull-right ajaxSubmit",
                    callback: function() {
                    }
                }
            }
        });
    });

    // Home Logo Link

    $('.sdg-logo, .navbar-brand').click(function(){
        window.location.href = 'home-bs2.html';
    });

    // Home Page Slider

    $('.flexslider').flexslider({
        animation: "fade",
        slideshow: false,
        pauseOnHover: true
    });

    // Case Study Modals

    $('.lifeRayModal').click(function(){
        var lifeRayModal="";
        lifeRayModal += "<iframe class='pdfModals' src='..\/documents\/Portal_Framework.pdf' frameBorder='0'\/>";
        bootbox.dialog({
            title: 'Liferay Portal Framework',
            className: 'pdfModals',
            message: lifeRayModal
        });
    });

    $('.windowsMobility').click(function(){
        var windowsMobility="";
        windowsMobility += "<iframe class='pdfModals' src='..\/documents\/Windows_Mobility_for_Schools.pdf' frameBorder='0'\/>";
        bootbox.dialog({
            title: 'Windows Mobility',
            className: 'pdfModals',
            message: windowsMobility
        });
    });

    $('.healthFitness').click(function(){
        var healthFitness="";
        healthFitness += "<iframe class='pdfModals' src='..\/documents\/BI_Health_and_Fitness.pdf' frameBorder='0'\/>";
        bootbox.dialog({
            title: 'BI Strategy for Health & Fitness Industry',
            className: 'pdfModals',
            message: healthFitness
        });
    });

    // Case Study Modals - Solutions Page

    $('.microsoft').click(function(){
        var microsoft="";
        microsoft += "<iframe class='pdfModals' src='..\/documents\/MicrosoftTeam.pdf' frameBorder='0'\/>";
        bootbox.dialog({
            title: 'Microsoft Team',
            className: 'pdfModals',
            message: microsoft
        });
    });

    $('.projectDelivery').click(function(){
        var projectDelivery="";
        projectDelivery += "<iframe class='pdfModals' src='..\/documents\/PDTeam.pdf' frameBorder='0'\/>";
        bootbox.dialog({
            title: 'Project Delivery Team',
            className: 'pdfModals',
            message: projectDelivery
        });
    });

    $('.openSource').click(function(){
        var openSource="";
        openSource += "<iframe class='pdfModals' src='..\/documents\/OpenSourceTeam.pdf' frameBorder='0'\/>";
        bootbox.dialog({
            title: 'Open Source Team',
            className: 'pdfModals',
            message: openSource
        });
    });

    $('.cms').click(function(){
        var cms="";
        cms += "<iframe class='pdfModals' src='..\/documents\/CMS_for_Financial_Industry.pdf' frameBorder='0'\/>";
        bootbox.dialog({
            title: 'CMS For Financial Industry',
            className: 'pdfModals',
            message: cms
        });
    });

    $('.dataWareHouse').click(function(){
        var dataWareHouse="";
        dataWareHouse += "<iframe class='pdfModals' src='..\/documents\/DW_for_Dental_Industry.pdf' frameBorder='0'\/>";
        bootbox.dialog({
            title: 'Data Warehouse for Dental Industry',
            className: 'pdfModals',
            message: dataWareHouse
        });
    });

    $('.socialNetwork').click(function(){
        var socialNetwork="";
        socialNetwork += "<iframe class='pdfModals' src='..\/documents\/Social_Network_for_Schools.pdf' frameBorder='0'\/>";
        bootbox.dialog({
            title: 'Social Network For Schools',
            className: 'pdfModals',
            message: socialNetwork
        });
    });

    // RSS Feed

    $('.sdg-home #divRss').FeedEk({
        FeedUrl : 'https://sdg.solutiondesign.com/blog/-/blogs/rss',
        MaxCount : 3,
        ShowDesc : true,
        ShowPubDate:true,
        DescCharacterLimit:100,
        TitleLinkTarget:'_blank',
        DateFormat:'MM/DD/YYYY',
        DateFormatLang:'en'
    });

    $('.sdg-blog #divRss').FeedEk({
        FeedUrl : 'https://sdg.solutiondesign.com/blog/-/blogs/rss',
        MaxCount : 10,
        ShowDesc : true,
        ShowPubDate:true,
        DescCharacterLimit:900,
        TitleLinkTarget:'_blank',
        DateFormat:'MM/DD/YYYY',
        DateFormatLang:'en'
    });

    // Contact Us Form
    
    $('.contact-sdg').click(function(e){
        e.preventDefault();
        var contactUs="";
        contactUs += "<div id='contact-us-form'>";
        contactUs += "                     <form action='https:\/\/sdg.solutiondesign.com\/home?p_auth=YgEqdnlM&amp;p_p_id=1_WAR_webformportlet_INSTANCE_x21w&amp;p_p_lifecycle=1&amp;p_p_state=normal&amp;p_p_mode=view&amp;_1_WAR_webformportlet_INSTANCE_x21w_javax.portlet.action=saveData' class='form ' id='_1_WAR_webformportlet_INSTANCE_x21w_fm' method='post' name='_1_WAR_webformportlet_INSTANCE_x21w_fm'>";
        contactUs += "                        <input name='_1_WAR_webformportlet_INSTANCE_x21w_formDate' type='hidden' value='1409494725109'> ";
        contactUs += "                        <fieldset class='fieldset ' id='yui_patched_v3_11_0_1_1409494725758_246'>";
        contactUs += "                           <div class='' id='yui_patched_v3_11_0_1_1409494725758_245'>";
        contactUs += "                              <div class='control-group form-group' id='yui_patched_v3_11_0_1_1409494725758_244'>";
        contactUs += "                                 <label class='control-label' for='_1_WAR_webformportlet_INSTANCE_x21w_field1'> Name <\/label>";
        contactUs += "                                 <input class='field form-control required' id='_1_WAR_webformportlet_INSTANCE_x21w_field1' name='_1_WAR_webformportlet_INSTANCE_x21w_field1' type='text' value=''\/>";
        contactUs += "                              <\/div>";
        contactUs += "                              <div class='control-group form-group'>";
        contactUs += "                                 <label class='control-label' for='_1_WAR_webformportlet_INSTANCE_x21w_field2'> Email Address <\/label>";
        contactUs += "                                 <input class='field form-control required' id='_1_WAR_webformportlet_INSTANCE_x21w_field2' name='_1_WAR_webformportlet_INSTANCE_x21w_field2' type='text' value=''\/>";
        contactUs += "                              <\/div>";
        contactUs += "                              <div class='control-group form-group'> ";
        contactUs += "                                 <label class='control-label' for='_1_WAR_webformportlet_INSTANCE_x21w_field3'> Message <\/label> ";
        contactUs += "                                 <textarea class='field lfr-textarea-container form-control required' id='_1_WAR_webformportlet_INSTANCE_x21w_field3' name='_1_WAR_webformportlet_INSTANCE_x21w_field3' wrap='soft'><\/textarea>  ";
        contactUs += "                              <\/div>";
        contactUs += "                              <div class='control-group form-group'> ";
        contactUs += "                                 <button type=\"submit\" class=\"btn btn-default pull-right\">Submit<\/button>";                       
        contactUs += "                              <\/div>";
        contactUs += "                           <\/div>";
        bootbox.dialog({
            title: 'Contact Us',
            className: 'contact-us-form',
            message: contactUs
        });

        // Home Page Form Validation
        var homePageForm = '#_1_WAR_webformportlet_INSTANCE_x21w_fm';
        $('#_1_WAR_webformportlet_INSTANCE_x21w_fm').validate({
            ignore: [],
            rules: {
                _1_WAR_webformportlet_INSTANCE_x21w_field1: 'required',
                _1_WAR_webformportlet_INSTANCE_x21w_field2: {
                    required: true,
                    email: true
                },
                _1_WAR_webformportlet_INSTANCE_x21w_field3: 'required'
            },
            messages: {
                _1_WAR_webformportlet_INSTANCE_x21w_field1: 'Please enter your first name',
                _1_WAR_webformportlet_INSTANCE_x21w_field2: 'Please enter a valid email address',
                _1_WAR_webformportlet_INSTANCE_x21w_field3: 'Please enter a brief description'

            },
            // The errorPlacement has to take the table layout into account
            errorPlacement: function (error, element) {
                if (element.is(':radio'))
                    error.appendTo(element.parent().next().next());
                else if(element.is(':checkbox'))
                    error.appendTo(element.next());
                else
                    error.appendTo(element.parent());
            },
            // Specifying a submitHandler
            submitHandler: function () {
                var formAction = $(homePageForm).attr('action');
                var formType = $(homePageForm).attr('method');
                var formSerialize = $(homePageForm).serialize();
                $('.loading-spinner-page-overlay').show();
                 $.ajax({
                    type: formType,
                    url: formAction,
                    data: formSerialize,
                    crossDomain: true,
                    success: function(data) {
                        $('.contact-us-form, .loading-spinner-page-overlay').hide();
                        bootbox.dialog({
                            message: "Thank you for contacting SDG! No one is calling you back",
                            buttons: {
                                success: {
                                    label: "Ok",
                                    className: "btn btn-form pull-right",
                                    callback: function() {
                                        location.reload();
                                    }
                                }
                            }
                        });
                    },
                    error: function(data){
                        $('.contact-us-form, .loading-spinner-page-overlay').hide();
                        bootbox.dialog({
                            message: "An error has occured (CORS - make sure this form is on sdg.com)",
                            buttons: {
                                success: {
                                    label: "Ok",
                                    className: "btn btn-default pull-right",
                                    callback: function() {
                                        location.reload();
                                    }
                                }
                            }
                        });                
                    }
                });
            },
            // Set this class to error-labels to indicate valid fields
            success: function (label) {
                // set &nbsp; as text for IE
                //label.html('&nbsp;').addClass('checked');
            },
            // Add in class of error to field and error label
            highlight: function (element, errorClass) {
                $(element).addClass("error " + element.id);

            },
            // Remove class of error to field and error label
            unhighlight: function (element, errorClass) {
                $(element).removeClass('error');
            }
        }); // end of validation

    });

    $('.joinOurTeam').click(function(e){
        e.preventDefault();
        var joinOurTeam="";
        joinOurTeam += "<form method=\"post\" id=\"cntctfrm_contact_form\" action=\"http:\/\/solutiondesign.com\/apply-now\/\" enctype=\"multipart\/form-data\">";
        joinOurTeam += "   <div class='form-group'>";
        joinOurTeam += "      <label for='name'>Name<\/label>";
        joinOurTeam += "      <input type='text' name='name' class='form-control'\/>";
        joinOurTeam += "   <\/div>";
        joinOurTeam += "   <div class='form-group'>";
        joinOurTeam += "      <label for='email'>Email Address<\/label>";
        joinOurTeam += "      <input type='text' name='email' class='form-control'\/>";
        joinOurTeam += "   <\/div>";
        joinOurTeam += "   <div class='form-group'>";
        joinOurTeam += "      <label for='subject'>Subject<\/label>";
        joinOurTeam += "      <input type='text' name='subject' class='form-control'\/>";
        joinOurTeam += "   <\/div>";
        joinOurTeam += "   <div class='form-group'>";
        joinOurTeam += "      <label for='message'>Message<\/label>";
        joinOurTeam += "      <textarea name='message' class='form-control'\/><\/textarea>";
        joinOurTeam += "   <\/div>";
        joinOurTeam += "   <div class='form-group'>";
        joinOurTeam += "      <input type=\"file\" title=\"Attach resume\">";
        joinOurTeam += "   <\/div>";
        joinOurTeam += "   <div class='form-group'>";
        joinOurTeam += "      <button type=\"submit\" class=\"btn btn-default pull-right\">Submit<\/button>";
        joinOurTeam += "   <\/div> ";
        joinOurTeam += "<\/form>";
        bootbox.dialog({
            title: 'Join The sdg Team',
            className: 'pdfModals',
            message: joinOurTeam
        });

        // Join Our Team Validation

        $('#cntctfrm_contact_form').validate({
            ignore: [],
            rules: {
                name: 'required',
                email: {
                    required: true,
                    email: true
                },
                message: 'required',
                subject: 'required'
            },
            messages: {
                name: 'Please enter your first name',
                email: 'Please enter a valid email address',
                message: 'Please enter a brief description',
                subject: 'Please enter a subject line'

            },
            // The errorPlacement has to take the table layout into account
            errorPlacement: function (error, element) {
                if (element.is(':radio'))
                    error.appendTo(element.parent().next().next());
                else if(element.is(':checkbox'))
                    error.appendTo(element.next());
                else
                    error.appendTo(element.parent());
            },
            // Specifying a submitHandler
            submitHandler: function () {
                var formAction = $('#cntctfrm_contact_form').attr('action');
                var formType = $('#cntctfrm_contact_form').attr('method');
                var formSerialize = $('#cntctfrm_contact_form').serialize();
                 $.ajax({
                    type: formType,
                    url: formAction,
                    data: formSerialize,
                    crossDomain: true,
                    success: function(data) {
                        bootbox.dialog({
                            message: "Thank you for contacting SDG! No one is calling you back",
                            buttons: {
                                success: {
                                    label: "Ok",
                                    className: "btn btn-form pull-right ajaxSubmit",
                                    callback: function() {
                                        location.reload();
                                    }
                                }
                            }
                        });
                    },
                    error: function(data){
                        bootbox.dialog({
                            message: "Thank you for contacting SDG! No one is calling you back",
                            buttons: {
                                success: {
                                    label: "Ok",
                                    className: "btn btn-default pull-right",
                                    callback: function() {
                                        location.reload();
                                    }
                                }
                            }
                        });                
                    }
                });
            },
            // Set this class to error-labels to indicate valid fields
            success: function (label) {
                // set &nbsp; as text for IE
                //label.html('&nbsp;').addClass('checked');
            },
            // Add in class of error to field and error label
            highlight: function (element, errorClass) {
                $(element).addClass("error " + element.id);

            },
            // Remove class of error to field and error label
            unhighlight: function (element, errorClass) {
                $(element).removeClass('error');
            }
        }); // end of validation

        // File Input Styling

        $('input[type=file]').bootstrapFileInput();


    }); // end of joinOurTeam

});

$(window).bind('load', function(){

    // SDG Blog Page
        // Bootstrap 3
    var sdgBlogHeight = $('.bs-3 .inner-content.sdg-blog-left-column.col-md-8').height();
    $('.bs-3 .sdg-blog-right-column.col-md-4').css('height', sdgBlogHeight);

        // Bootstrap 2
    var sdgBlogHeight = $('.bs-2 .inner-content.sdg-blog-right-column.span8').height();
    $('.bs-2 .sdg-blog-right-column.span4').css('height', sdgBlogHeight);
    // Format Blog (Every 5th item)

    $('.sdg-blog .feedEkList li').eq(3).addClass('here');

});


// Inject Custom CSS into Twitter Feed

/*$(window).bind('load', function(){
    var $head = $('iframe').contents().find('head');
    $('<link rel="stylesheet" href="../css/custom-twitter.css" type="text/css"/>').appendTo($head);
});*/

// Word Cloud for Blog

var test = $('#p_p_id_148_INSTANCE_tIC0hCcm3t0x_ > div > div > ul > li:nth-child(1) > span > a').each(function(){
    console.log(this.text());
});
