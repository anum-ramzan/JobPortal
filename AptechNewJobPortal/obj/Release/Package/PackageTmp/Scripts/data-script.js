
//Smooth scroll function
function slowscroll() {
    $('html , body').animate({ scrollTop: 0 }, 700);
}


//Error message div function
function OnError() {
    slowscroll();
    document.getElementById('error_div').style.display = "block";
}

//get value from query string
function GetParameterValues(param) {
    var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < url.length; i++) {
        var urlparam = url[i].split('=');
        if (urlparam[0] === param) {
            return urlparam[1];
        }
    }
}

jQuery(document).ready(function () {

    $('#ChangeResume').hide();
    $('#ContentPlaceHolder1_PasswordPanel').hide();

    $('#form1').validate({
        // validation rules for registration form
        errorClass: "error-class",
        validClass: "valid-class",
        errorElement: 'div',
        errorPlacement: function (error, element) {
            if (element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        },
        onError: function () {
            $('.input-group.error-class').find('.help-block.form-error').each(function () {
                $(this).closest('.form-group').addClass('error-class').append($(this));
            });
        },
        rules: {
            txt_fname: { required: true },
            txt_lname: { required: true },
            txt_mail: { required: true, email: true },
            txt_mobile: { required: true },
            txt_pass: { required: true },
            txt_retype: { required: true, equalTo: "#txt_pass" },
            ctl00$ContentPlaceHolder1$txtChangePassword: { required: true },
            txtCompareChangePassword: { required: true, equalTo: "#ContentPlaceHolder1_txtChangePassword" },
            txtAcctivationLink: { required: true, email: true },
            ctl00$ContentPlaceHolder1$txt_fname: { required: true },
            ctl00$ContentPlaceHolder1$txt_lname: { required: true },
            ctl00$ContentPlaceHolder1$txt_mail: { required: true, email: true },
            ctl00$ContentPlaceHolder1$txt_mobile: { required: true },
            ctl00$ContentPlaceHolder1$txt_pass: { required: true },
            ctl00$ContentPlaceHolder1$txt_retype: { required: true, equalTo: "#ContentPlaceHolder1_txt_pass" }
        }
    });

    JobCategory();


    //AJAX call for index page recent 5 jobs
    $(function () {
        $.ajax({
            type: 'GET',
            url: '/Model/AjaxEnabledService.svc/RecentJobs',
            dataType: 'json',
            data: {},
            contentType: "application/json",
            success: function (response) {
                var jobs = eval(response.d);
                if (jobs.length === 0) {
                    $('#recents').append('<div class="" style="color: #ddd; font-size: 25px; font-weight: 700; margin: auto 25px; text-align: center; ">No Job Found</div>');
                }
                else {
                    var items = '';
                    $.each(jobs, function (i, item) {
                        var rows = "<div class='single-job-box'>" +
                                " <div class='row'>" +
                                "<div class='col-md-3 text-center'>" +
                                "<img src='" + item.JobLogo + "' class='img-responsive job-logo' />" +
                                "</div>" +
                                " <div class='col-md-9'>" +
                                "<h2 class='job-title'>" + item.JobTitle + "</h2>" +
                                "<h4 class='job-company'>" + item.CompanyName + "</h4>" +
                                "<div class='row'>" +
                                "<div class='col-md-9'>" +
                                "<p class='job-detail'>" +
                                "<i class='fa fa-map-marker aptech'></i><span>" +
                                " &nbsp;&nbsp;&nbsp;" + item.CityName +
                                "</span>" +
                                "<p class='job-detail'>" +
                                "<i class='fa fa-clock-o aptech'></i><span>" +
                                " &nbsp; Apply Date : " + item.JobApplyDate +
                                "</span>" +
                                "</p>" +
                                "</div>" +
                                "<div class='col-md-3 text-center'>" +
                                "<a class='same-button btn-detail' href='/job-details.aspx?JobId=" + item.JobId + "&JobName=" + item.JobTitle + "'>View Details</a>" +
                                "</div>" +
                                "</div>" +
                                "</div>" +
                                "</div>" +
                                "</div>";
                        $('#recents').append(rows);
                    });
                }
            },
            failure: function (response) {

                console.log(response.responseText);
            },
            error: function (response) {

                console.log(response.responseText);
            }
        });
        return false;
    });

    //executing jquery function on specific page
    if (top.location.pathname === '/jobs.aspx') {
        //AJAX call for jobs page all jobs With search in if else condition for getting query string
        if ($(location).attr("href") === 'http://jobs-ace.com/jobs.aspx') {
            $.ajax({
                type: 'GET',
                url: '/Model/AjaxEnabledService.svc/Jobs',
                dataType: 'json',
                data: {},
                contentType: "application/json",
                success: function (response) {
                    var jobs = eval(response.d);
                    $('#totalFound').html('About  - ' + jobs.length + ' results');
                    if (jobs.length === 0) {
                        $('#JobsGridView').append('<h1 class="zero-record text-center">No Job Found</h1>');
                        $('#loadMore').hide();
                    }
                    else {
                        if (jobs.length <= 9) {
                            $('#loadMore').hide();
                        }
                        else {
                            $('#loadMore').show();
                        }
                        var items = '';
                        $.each(jobs, function (i, item) {
                            var rows =
                                "<a class='job-hover' href='/job-details.aspx?JobId=" + item.JobId + "&JobName=" + item.JobTitle + "'><div class='container'>" +
                                            " <div class='row'>" +
                                            "<div class='col-md-3'>" +
                                            "<img src='" + item.JobLogo + "' class='img-responsive job-logo' />" +
                                            "</div>" +
                                            " <div class='col-md-9'>" +
                                            "<h2 class='job-title'>" + item.JobTitle + "</h2>" +
                                            "<h4 class='job-company'>" + item.CompanyName + "</h4>" +
                                            "<p class='job-detail'>" +
                                            "<i class='fa fa-map-marker'></i><span>" +
                                            " &nbsp;&nbsp;&nbsp;" + item.CityName +
                                            "</span>" +
                                            "<p class='job-detail'>" +
                                            "<i class='fa fa-clock-o'></i><span>" +
                                            " &nbsp; Apply Date : " + item.JobApplyDate +
                                            "</span>" +
                                            "</p>" +
                                            "</div>" +
                                            "</div></div><hr/>" +
                                            "</a>";

                            $('#JobsGridView').append(rows);

                            $("#JobsGridView a").slice(0, 10).show();
                        });
                    }
                },
                failure: function (response) {

                    console.log(response.responseText);
                },
                error: function (response) {

                    console.log(response.responseText);
                }
            });
        }
        else if ($(location).attr("href") === 'http://jobs-ace.com/jobs.aspx?search=') {
            var key3 = '';
            $('#JobsGridView').empty();
            $.ajax({
                type: 'GET',
                url: '/Model/AjaxEnabledService.svc/SearchJob',
                dataType: 'json',
                data: JSON.parse(JSON.stringify({ keyword: key3 })),
                contentType: "application/json",
                success: function (response) {
                    var jobs = eval(response.d);
                    $('#totalFound').html('Jobs - ' + jobs.length + ' found');
                    if (jobs.length === 0) {
                        $('#JobsGridView').append('<h1 class="zero-record text-center">No Job Found</h1>');
                        $('#loadMore').hide();
                    }
                    else {
                        if (jobs.length <= 9) {
                            $('#loadMore').hide();
                        }
                        else {
                            $('#loadMore').show();
                        }
                        var items = '';
                        $.each(jobs, function (i, item) {
                            var rows =
                                "<a class='job-hover' href='/job-details.aspx?JobId=" + item.JobId + "&JobName=" + item.JobTitle + "'><div class='container'>" +
                                            " <div class='row'>" +
                                            "<div class='col-md-3'>" +
                                            "<img src='" + item.JobLogo + "' class='img-responsive job-logo' />" +
                                            "</div>" +
                                            " <div class='col-md-9'>" +
                                            "<h2 class='job-title'>" + item.JobTitle + "</h2>" +
                                            "<h4 class='job-company'>" + item.CompanyName + "</h4>" +
                                            "<p class='job-detail'>" +
                                            "<i class='fa fa-map-marker'></i><span>" +
                                            " &nbsp;&nbsp;&nbsp;" + item.CityName +
                                            "</span>" +
                                            "<p class='job-detail'>" +
                                            "<i class='fa fa-clock-o'></i><span>" +
                                            " &nbsp; Apply Date : " + item.JobApplyDate +
                                            "</span>" +
                                            "</p>" +
                                            "</div>" +
                                            "</div></div><hr/>" +
                                            "</a>";
                            $('#JobsGridView').append(rows);
                            $("#JobsGridView a").slice(0, 10).show();
                        });
                    }
                },
                failure: function (response) {

                    console.log(response.responseText);
                },
                error: function (response) {

                    console.log(response.responseText);
                }
            });
        }
        else {
            var key1 = GetParameterValues('search');
            $('#JobsGridView').empty();
            $.ajax({
                type: 'GET',
                url: '/Model/AjaxEnabledService.svc/SearchJob',
                dataType: 'json',
                data: JSON.parse(JSON.stringify({ keyword: key1 })),
                contentType: "application/json",
                success: function (response) {
                    var jobs = eval(response.d);
                    $('#totalFound').html('Jobs - ' + jobs.length + ' found');
                    if (jobs.length === 0) {
                        $('#JobsGridView').append('<h1 class="zero-record text-center">No Job Found</h1>');
                        $('#loadMore').hide();
                    }
                    else {
                        if (jobs.length <= 9) {
                            $('#loadMore').hide();
                        }
                        else {
                            $('#loadMore').show();
                        }
                        var items = '';
                        $.each(jobs, function (i, item) {
                            var rows =
                                "<a class='job-hover' href='/job-details.aspx?JobId=" + item.JobId + "&JobName=" + item.JobTitle + "'><div class='container'>" +
                                            " <div class='row'>" +
                                            "<div class='col-md-3'>" +
                                            "<img src='" + item.JobLogo + "' class='img-responsive job-logo' />" +
                                            "</div>" +
                                            " <div class='col-md-9'>" +
                                            "<h2 class='job-title'>" + item.JobTitle + "</h2>" +
                                            "<h4 class='job-company'>" + item.CompanyName + "</h4>" +
                                            "<p class='job-detail'>" +
                                            "<i class='fa fa-map-marker'></i><span>" +
                                            " &nbsp;&nbsp;&nbsp;" + item.CityName +
                                            "</span>" +
                                            "<p class='job-detail'>" +
                                            "<i class='fa fa-clock-o'></i><span>" +
                                            " &nbsp; Apply Date : " + item.JobApplyDate +
                                            "</span>" +
                                            "</p>" +
                                            "</div>" +
                                            "</div></div><hr/>" +
                                            "</a>";
                            $('#JobsGridView').append(rows);
                            $("#JobsGridView a").slice(0, 10).show();
                        });
                    }
                },
                failure: function (response) {

                    console.log(response.responseText);
                },
                error: function (response) {

                    console.log(response.responseText);
                }
            });
        }
    }

    // for job category list
    function JobCategory() {
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: '/Model/AjaxEnabledService.svc/Category',
            data: {},
            contentType: "application/json",
            success: function (response) {
                var jobs = eval(response.d);
                if (jobs.length === 0) {
                    $('#job_category').append('<div class="" style="color: #ddd; font-size: 15px; font-weight: 700; margin: auto 25px; text-align: center; ">No Category Found</div>');
                }
                else {
                    var items = '';
                    $.each(jobs, function (i, item) {
                        $('#job_category').append('<li>' + item.CategoryName + '<span class="pull-right badge bg-aptech">' + item.TotalCategoryJob + '</span></li>');
                    });
                }
            },
            failure: function (jqXHR, textStatus) {

                console.log("Request failed: " + textStatus);
            },
            error: function (jqXHR, textStatus) {

                console.log("Request failed: " + textStatus);
            }
        });
        return false;
    }

    //job details getting value form querystring
    //$(function () {
    //    function GetParameterValues(param) {
    //        var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    //        for (var i = 0; i < url.length; i++) {
    //            var urlparam = url[i].split('=');
    //            if (urlparam[0] === param) {
    //                return urlparam[1];
    //            }
    //        }
    //    }
    //    var id = GetParameterValues('JobId');
    //    $.ajax({
    //        type: 'GET',
    //        url: '/Model/AjaxEnabledService.svc/JobDetail',
    //        dataType: 'json',
    //        data: JSON.parse(JSON.stringify({ jobid: id })),
    //        contentType: "application/json",
    //        success: function (response) {
    //            var jobs = eval(response.d);
    //            if (jobs.length === 0) {
    //                
    //            }
    //            else {
    //                var rows =
    //                    " <div class='container'>" +
    //                    "<div class='row'>" +
    //                    "<div class='col-sm-12'>" +
    //                    "<h1 class='text-bold pull-left'>" + response.d.JobTitle + "</h1>" +
    //                    "<div class='img-div pull-right'><img src='" + response.d.JobLogo + "' class='img-responsive'/></div>" +
    //                    "</div>" +
    //                    "</div>" +
    //                    "<div class='row'>" +
    //                    "<div class='col-md-12'>" +
    //                    "<h4 class='job-details-title'>Job Summary</h4>" +
    //                    "<div class='container'>" +
    //                    "<div class='row'>" +
    //                        "<div class='col-sm-1'></div>" +
    //                        "<div class='col-sm-2'>" +
    //                            "<p class='text-bold'>Location</p>" +
    //                        "</div>" +
    //                        "<div class='col-sm-3'>" +
    //                            "<p class=''>" + response.d.Location + "</p>" +
    //                        "</div>" +
    //                        "<div class='col-sm-2'>" +
    //                            "<p class='text-bold'>Total Vacanies</p>" +
    //                        "</div>" +
    //                        "<div class='col-sm-3'>" +
    //                            "<p class=''>" + response.d.Vacanies + "</p>" +
    //                        "</div>" +
    //                    "</div>" +
    //                    "<hr />" +
    //                    "<div class='row'>" +
    //                    "<div class='col-sm-1'></div>" +
    //                    "<div class='col-sm-2'>" +
    //                    "<p class='text-bold'>Category </p>" +
    //                    "</div>" +
    //                    "<div class='col-sm-3'>" +
    //                    "<p class=''>" + response.d.Category + "</p>" +
    //                    "</div>" +
    //                    "<div class='col-sm-2'>" +
    //                    "<p class='text-bold'>Apply Date</p>" +
    //                    "</div>" +
    //                    "<div class='col-sm-3'>" +
    //                    "<p class=''>" + response.d.JobApplyDate + "</p>" +
    //                    "</div>" +
    //                    "</div>" +
    //                    "<hr />" +
    //                    "<div class='row'>" +
    //                    "<div class='col-sm-1'></div>" +
    //                    "<div class='col-sm-2'>" +
    //                    "<p class='text-bold'>Experience </p>" +
    //                    "</div>" +
    //                    "<div class='col-sm-3'>" +
    //                    "<p class=''>" + response.d.Experience + "</p>" +
    //                    "</div>" +
    //                    "<div class='col-sm-2'>" +
    //                    "<p class='text-bold'>Career Level</p>" +
    //                    "</div>" +
    //                    "<div class='col-sm-3'>" +
    //                    "<p class=''>" + response.d.CareerLevel + "</p>" +
    //                    "</div>" +
    //                    "</div>" +
    //                    "<hr />" +
    //                    "<div class='row'>" +
    //                    "<div class='col-sm-1'></div>" +
    //                    "<div class='col-sm-2'>" +
    //                    "<p class='text-bold'>Job Type </p>" +
    //                    "</div>" +
    //                    "<div class='col-sm-3'>" +
    //                    "<p class=''>" + response.d.JobType + "</p>" +
    //                    "</div>" +
    //                    "<div class='col-sm-2'>" +
    //                    "<p class='text-bold'>Job Shift</p>" +
    //                    "</div>" +
    //                    "<div class='col-sm-3'>" +
    //                    "<p class=''>" + response.d.JobShift + "</p>" +
    //                    "</div>" +
    //                    "</div>" +
    //                    "<hr />" +
    //                    "<div class='row'>" +
    //                    "<div class='col-sm-1'></div>" +
    //                    "<div class='col-sm-2'>" +
    //                    "<p class='text-bold'>Salary </p>" +
    //                    "</div>" +
    //                    "<div class='col-sm-3'>" +
    //                    "<p class=''>" + response.d.Salary + "</p>" +
    //                    "</div>" +
    //                    "<div class='col-sm-2'>" +
    //                    "<p class='text-bold'>Gender </p>" +
    //                    "</div>" +
    //                    "<div class='col-sm-3'>" +
    //                    "<p class=''>" + response.d.Gender + "</p>" +
    //                    "</div>" +
    //                    "</div>" +
    //                    "<hr />" +
    //                    "<div class='row'>" +
    //                    "<div class='col-sm-1'></div>" +
    //                    "<div class='col-sm-2'>" +
    //                    "<p class='text-bold'>Education </p>" +
    //                    "</div>" +
    //                    "<div class='col-sm-3'>" +
    //                    "<p class=''>" + response.d.Education + "</p>" +
    //                    "</div>" +
    //                    "<div class='col-sm-2'>" +
    //                    "<p class='text-bold'>Industry </p>" +
    //                    "</div>" +
    //                    "<div class='col-sm-3'>" +
    //                    "<p class=''>" + response.d.Industry + "</p>" +
    //                    "</div>" +
    //                    "</div>" +
    //                    "</div>" +
    //                    "<hr />" +
    //                    "<h4 class='job-details-title'>Job Description</h4>" +
    //                    "<div class='container'>" +
    //                    "<div class='row'>" +
    //                    "<div class='col-sm-12'>" +
    //                    "<p class=''>" + response.d.Description + "</p>" +
    //                    "</div>" +
    //                    "</div>" +
    //                    "</div>" +
    //                    "<h4 class='job-details-title'>Skills Required</h4>" +
    //                    "<div class='container'>" +
    //                    "<div class='row'>" +
    //                    "<div class='col-sm-12'>" +
    //                    "<p class=''>" + response.d.Skills + "</p>" +
    //                    "</div>" +
    //                    "</div>" +
    //                    "</div>" +
    //                    "<h4 class='job-details-title'>Company Information</h4>" +
    //                    "<div class='container'>" +
    //                    "<div class='row'>" +
    //                    "<div class='col-sm-2'>" +
    //                    "<p class='text-bold'>Company Name</p>" +
    //                    "</div>" +
    //                    "<div class='col-sm-10'>" +
    //                    "<p class=''>" + response.d.CompanyName + "</p>" +
    //                    "</div>" +
    //                    "</div>" +
    //                    "<div class='row'>" +
    //                    "<div class='col-sm-2'>" +
    //                    "<p class='text-bold'>Company Description</p>" +
    //                    "</div>" +
    //                    "<div class='col-sm-10'>" +
    //                    "<p class=''>" + response.d.CompanyDescription + "</p>" +
    //                    "</div>" +
    //                    "</div>" +
    //                    "<div class='row'><div class='col-sm-12'><input type='button' name='btn-apply' value='Apply Now' class='btn btn-block same-button btn-login login-in-register' runat='server' id='btn_apply' OnClick='btn_apply_Click' /></div></div>" +
    //                    "</div>" +
    //                    "</div>" +
    //                    "</div>" +
    //                    "</div>";
    //                $('#job_detail').append(rows);
    //            }
    //        },
    //        failure: function (response) {
    //            
    //            console.log(response.responseText);
    //        },
    //        error: function (response) {
    //            
    //            console.log(response.responseText);
    //        }
    //    });
    //    return false;
    //});

    function ValidationFunction(selector, removableSelector) {
        $('html , body').animate({ scrollTop: 0 }, 700);
        $(removableSelector).remove();
        $(selector).after('<div class="alert alert-danger alert-dismissible"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button> <p><i class="icon fa fa-ban"></i> All fields are required</p>  </div>');
        setTimeout(function () { $(".alert").hide('blind', {}, 500); }, 5000);
    }


    //registration for jobseeker
    if (window.location.href === "http://jobs-ace.com/admin/login.aspx") {
        $('#ContentPlaceHolder1_btn_login').on('click', function () {
            var mail = document.getElementById('ContentPlaceHolder1_txt_mail').value;
            var pass = document.getElementById('ContentPlaceHolder1_txt_pass').value;
            if (mail === "" || mail === "" || mobile === "") {
                $('html , body').animate({ scrollTop: 0 }, 700);
                $('.login-h3').after('<p id="error" class="bg-danger text-danger">All fields are required</p>');
                setTimeout(function () { $("#error").hide('blind', {}, 500); }, 5000);
            }
        });
    }

    //registration for jobseeker
    $('#ContentPlaceHolder1_btn_js_register').on('click', function (e) {
        var fname = document.getElementById('ContentPlaceHolder1_txt_fname').value;
        var lname = document.getElementById('ContentPlaceHolder1_txt_lname').value;
        var mail = document.getElementById('ContentPlaceHolder1_txt_mail').value;
        var mobile = document.getElementById('ContentPlaceHolder1_txt_mobile').value;
        var pass = document.getElementById('ContentPlaceHolder1_txt_pass').value;
        var repass = document.getElementById('ContentPlaceHolder1_txt_retype').value;
        if (fname === "" || lname === "" || mail === "" || mobile === "" || pass === "" || repass === "")
        { ValidationFunction('.login-h3', '.login-h3 .alert.alert-danger.alert-dismissibl'); }
        else { RegisterJS(); }
        e.preventDefault();
    });

    //registration for employer
    $('#ContentPlaceHolder1_btn_emp_register').on('click', function (e) {

        var fname = document.getElementById('txt_fname').value;
        var lname = document.getElementById('txt_lname').value;
        var mail = document.getElementById('txt_mail').value;
        var mobile = document.getElementById('txt_mobile').value;
        var pass = document.getElementById('txt_pass').value;
        var repass = document.getElementById('txt_retype').value;
        if (fname === "" || lname === "" || mail === "" || mobile === "" || pass === "" || repass === "") { ValidationFunction('.login-h3'); }
        else { EmployerJS(); }
        e.preventDefault();
    });

    //database js
    function RegisterJS() {
        var fname = document.getElementById('ContentPlaceHolder1_txt_fname').value;
        var lname = document.getElementById('ContentPlaceHolder1_txt_lname').value;
        var mail = document.getElementById('ContentPlaceHolder1_txt_mail').value;
        var mobile = document.getElementById('ContentPlaceHolder1_txt_mobile').value;
        var pass = document.getElementById('ContentPlaceHolder1_txt_pass').value;
        $.ajax({
            type: 'POST',
            url: '/Model/AjaxEnabledService.svc/RegisterJobseeker',
            dataType: 'json',
            data: JSON.stringify({ fname: fname, lname: lname, mail: mail, pass: pass, mobile: mobile }),
            contentType: "application/json",
            success: function (response) {
                $('html , body').animate({ scrollTop: 0 }, 700);
                if (response.d.search('Try another email')) {
                    $("#error_div p").text(response.d);
                    document.getElementById('error_div').style.display = "block";
                }
                else {
                    $("#success_div p").text(response.d);
                    document.getElementById('success_div').style.display = "block";
                    $('#ContentPlaceHolder1_txt_fname').val('');
                    $('#ContentPlaceHolder1_txt_lname').val('');
                    $('#ContentPlaceHolder1_txt_mail').val('');
                    $('#ContentPlaceHolder1_txt_mobile').val('');
                    $('#ContentPlaceHolder1_txt_pass').val('');
                }
            },
            failure: function (jqXHR, textStatus) {

                console.log("Request failed: " + textStatus);
            },
            error: function (jqXHR, textStatus) {

                console.log("Request failed: " + textStatus);
            }
        });
    }

    //database emp
    function EmployerJS() {
        var fname = document.getElementById('txt_fname').value;
        var lname = document.getElementById('txt_lname').value;
        var mail = document.getElementById('txt_mail').value;
        var mobile = document.getElementById('txt_mobile').value;
        var pass = document.getElementById('txt_pass').value;
        $.ajax({
            type: 'POST',
            url: '/Model/AjaxEnabledService.svc/RegisterEmployer',
            dataType: 'json',
            data: JSON.stringify({ fname: fname, lname: lname, mail: mail, pass: pass, mobile: mobile }),
            contentType: "application/json",
            success: function (response) {
                if (response.d.search('Try another email')) {
                    $("#error_div p").text(response.d);
                    document.getElementById('error_div').style.display = "block";
                }
                else {
                    $("#success_div p").text(response.d);
                    document.getElementById('success_div').style.display = "block";
                    $('#txt_fname').val('');
                    $('#txt_lname').val('');
                    $('#txt_mail').val('');
                    $('#txt_mobile').val('');
                    $('#txt_pass').val('');
                }
            },
            failure: function (jqXHR, textStatus) {

                console.log("Request failed: " + textStatus);
            },
            error: function (jqXHR, textStatus) {

                console.log("Request failed: " + textStatus);
            }
        });
    }

    //jobs page search
    $('#btnSearch').on('click', function () {
        if (history.pushState) {
            var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?search=' + document.getElementById('txtSearch').value + '';
            window.history.pushState({ path: newurl }, '', newurl);
        }

        var key2 = GetParameterValues('search');
        $('#JobsGridView').empty();
        $.ajax({
            type: 'GET',
            url: '/Model/AjaxEnabledService.svc/SearchJob',
            dataType: 'json',
            data: JSON.parse(JSON.stringify({ keyword: key2 })),
            contentType: "application/json",
            success: function (response) {
                var jobs = eval(response.d);
                $('#totalFound').html('Jobs - ' + jobs.length + ' found');
                if (jobs.length === 0) {
                    $('#JobsGridView').append('<h1 class="zero-record text-center">No Job Found</h1>');
                    $('#loadMore').hide();
                }
                else {
                    if (jobs.length <= 9) {
                        $('#loadMore').hide();
                    }
                    else {
                        $('#loadMore').show();
                    }
                    var items = '';
                    $.each(jobs, function (i, item) {
                        var rows =
                            "<a class='job-hover' href='/job-details.aspx?JobId=" + item.JobId + "&JobName=" + item.JobTitle + "'><div class='container'>" +
                                        " <div class='row'>" +
                                        "<div class='col-md-3'>" +
                                        "<img src='" + item.JobLogo + "' class='img-responsive job-logo' />" +
                                        "</div>" +
                                        " <div class='col-md-9'>" +
                                        "<h2 class='job-title'>" + item.JobTitle + "</h2>" +
                                        "<h4 class='job-company'>" + item.CompanyName + "</h4>" +
                                        "<p class='job-detail'>" +
                                        "<i class='fa fa-map-marker'></i><span>" +
                                        " &nbsp;&nbsp;&nbsp;" + item.CityName +
                                        "</span>" +
                                        "<p class='job-detail'>" +
                                        "<i class='fa fa-clock-o'></i><span>" +
                                        " &nbsp; Apply Date : " + item.JobApplyDate +
                                        "</span>" +
                                        "</p>" +
                                        "</div>" +
                                        "</div></div><hr/>" +
                                        "</a>";

                        $('#JobsGridView').append(rows);

                        $("#JobsGridView a").slice(0, 10).show();
                    });
                }
            },
            failure: function (response) {

                console.log(response.responseText);
            },
            error: function (response) {

                console.log(response.responseText);
            }
        });
        return false;
    });


    $('#txtSearch').keypress(function (e) {
        if (e.which === 13) {
            e.preventDefault();
        } $('#btnSearch').click();
    });

    //redirecting form default to jobs page with querystring parameter
    $('#btn_search').on('click', function () {
        window.location.href = '/jobs.aspx?search=' + document.getElementById('txt_search').value + '';
    });


    //Jobs with category
    $(document).on('click', '#job_category li', function () {
        $('#subcategory h5').remove();
        $('#subcategory li').remove();
        var $this = $(this);
        var liValue1 = $this.text();
        var liValue = liValue1.replace(/\d+/g, '');
        //this ajax call is for listing subcategories
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: '/Model/AjaxEnabledService.svc/SubCategory',
            data: JSON.parse(JSON.stringify({ category: liValue })),
            contentType: "application/json",
            success: function (response) {
                var subcat = eval(response.d);
                if (subcat.length === 0) {
                    console.log(subcat);
                }
                else {
                    var items = '';
                    $('#subcategory').append("<h5 class='text-bold text-black'>SubCategory</h5>");
                    $.each(subcat, function (i, item) {
                        $('#subcategory').append('<li>' + item.SubCategoryName + '<span class="pull-right badge bg-ace-green">' + item.SubCategoryTotal + '</span></li>');
                    });
                }
            },
            failure: function (jqXHR, textStatus) {
                console.log("Request failed: " + textStatus);
            },
            error: function (jqXHR, textStatus) {
                console.log("Request failed: " + textStatus);
            }
        });
        $('#JobsGridView').empty();
        //this if for retriving specific category jobs list
        $.ajax({
            type: 'GET',
            url: '/Model/AjaxEnabledService.svc/GetJobWithCategory',
            dataType: 'json',
            data: JSON.parse(JSON.stringify({ keyword: liValue })),
            contentType: "application/json",
            success: function (response) {
                var jobs = eval(response.d);
                $('#totalFound').html('Job Category: ' + liValue + ' About  - ' + jobs.length + ' results');
                if (jobs.length === 0) {
                    $('#JobsGridView').append('<h1 class="zero-record text-center">No Job Found</h1>');
                    $('#loadMore').hide();
                }
                else {
                    if (jobs.length <= 9) {
                        $('#loadMore').hide();
                    }
                    else {
                        $('#loadMore').show();
                    }
                    var items = '';
                    $.each(jobs, function (i, item) {
                        var rows =
                            "<a class='job-hover' href='/job-details.aspx?JobId=" + item.JobId + "&JobName=" + item.JobTitle + "'><div class='container'>" +
                                        " <div class='row'>" +
                                        "<div class='col-md-3'>" +
                                        "<img src='" + item.JobLogo + "' class='img-responsive job-logo' />" +
                                        "</div>" +
                                        " <div class='col-md-9'>" +
                                        "<h2 class='job-title'>" + item.JobTitle + "</h2>" +
                                        "<h4 class='job-company'>" + item.CompanyName + "</h4>" +
                                        "<p class='job-detail'>" +
                                        "<i class='fa fa-map-marker'></i><span>" +
                                        " &nbsp;&nbsp;&nbsp;" + item.CityName +
                                        "</span>" +
                                        "<p class='job-detail'>" +
                                        "<i class='fa fa-clock-o'></i><span>" +
                                        " &nbsp; Apply Date : " + item.JobApplyDate +
                                        "</span>" +
                                        "</p>" +
                                        "</div>" +
                                        "</div></div><hr/>" +
                                        "</a>";

                        $('#JobsGridView').append(rows);

                        $("#JobsGridView a").slice(0, 10).show();
                    });
                }
            },
            failure: function (response) {

                console.log(response.responseText);
            },
            error: function (response) {

                console.log(response.responseText);
            }
        });
        return false;
    });

    //Jobs with sub category
    $(document).on('click', '#subcategory li', function () {
        var $this = $(this);
        var liValue1 = $this.text();
        var liValue = liValue1.replace(/\d+/g, '');
        $('#JobsGridView').empty();
        $.ajax({
            type: 'GET',
            url: '/Model/AjaxEnabledService.svc/GetJobWithSubCategory',
            dataType: 'json',
            data: JSON.parse(JSON.stringify({ keyword: liValue })),
            contentType: "application/json",
            success: function (response) {
                var jobs = eval(response.d);
                $('#totalFound').html('Job Category: ' + liValue + ' - About  - ' + jobs.length + ' results');
                if (jobs.length === 0) {
                    $('#JobsGridView').append('<h1 class="zero-record text-center">No Job Found</h1>');
                    $('#loadMore').hide();
                }
                else {
                    if (jobs.length <= 9) {
                        $('#loadMore').hide();
                    }
                    else {
                        $('#loadMore').show();
                    }
                    var items = '';
                    $.each(jobs, function (i, item) {
                        var rows =
                            "<a class='job-hover' href='/job-details.aspx?JobId=" + item.JobId + "&JobName=" + item.JobTitle + "'><div class='container'>" +
                                        " <div class='row'>" +
                                        "<div class='col-md-3'>" +
                                        "<img src='" + item.JobLogo + "' class='img-responsive job-logo' />" +
                                        "</div>" +
                                        " <div class='col-md-9'>" +
                                        "<h2 class='job-title'>" + item.JobTitle + "</h2>" +
                                        "<h4 class='job-company'>" + item.CompanyName + "</h4>" +
                                        "<p class='job-detail'>" +
                                        "<i class='fa fa-map-marker'></i><span>" +
                                        " &nbsp;&nbsp;&nbsp;" + item.CityName +
                                        "</span>" +
                                        "<p class='job-detail'>" +
                                        "<i class='fa fa-clock-o'></i><span>" +
                                        " &nbsp; Apply Date : " + item.JobApplyDate +
                                        "</span>" +
                                        "</p>" +
                                        "</div>" +
                                        "</div></div><hr/>" +
                                        "</a>";

                        $('#JobsGridView').append(rows);

                        $("#JobsGridView a").slice(0, 10).show();
                    });
                }
            },
            failure: function (response) {

                console.log(response.responseText);
            },
            error: function (response) {

                console.log(response.responseText);
            }
        });
        return false;
    });


    //email validating
    $('#ForgotButton').on('click', function () {
        var email = document.getElementById('txtForgotPassword').value;
        $.ajax({
            type: 'POST',
            url: '/Model/AjaxEnabledService.svc/EmailValidation',
            dataType: 'json',
            data: JSON.stringify({ email: email }),
            contentType: "application/json",
            success: function (response) {
                if (response.d === "Please check your email for a message with recovery link.") {
                    $('p.text-bold.custom-success.text-success.alert-success').remove();
                    $('<p class="text-bold custom-success text-success alert-success" role="alert">' + response.d + '</p>').insertAfter('#txtForgotPassword');
                }
                else if (response.d === "Invalid Email.") {
                    $('p.text-bold.custom-danger.text-danger.alert-danger').remove();
                    $('<p class="text-bold custom-danger text-danger alert-danger" role="alert">' + response.d + '</p>').insertAfter('#txtForgotPassword');
                }
            },
            failure: function (jqXHR, textStatus) {
                console.log("Request failed: " + textStatus);
            },
            error: function (jqXHR, textStatus) {
                console.log("Request failed: " + textStatus);
            }
        });
    });

    $('#txtForgotPassword').keypress(function (e) {
        if (e.which === 13) {
            e.preventDefault();
        } $('#ForgotButton').click();
    });

    //code match
    $('#MatchCode').on('click', function () {
        var code = document.getElementById('txtMatchCodePassword').value;
        $.ajax({
            type: 'POST',
            url: '/Model/AjaxEnabledService.svc/PasswordCode',
            dataType: 'json',
            data: JSON.stringify({ code: code }),
            contentType: "application/json",
            success: function (response) {
                if (response.d > 0) {
                    $('p.text-bold.custom-success.text-success.alert-success').remove();
                    $('p.text-bold.custom-danger.text-danger.alert-danger').remove();
                    $('<p class="text-bold custom-success text-success alert-success" role="alert">Please now change the password.</p>').insertAfter('#txtMatchCodePassword');
                    $('#txtMatchCodePassword').prop('disabled', 'true');
                    $('#MatchCode').remove();
                    $('#ContentPlaceHolder1_PasswordPanel').show();
                }
                else if (response.d === "-1") {
                    $('p.text-bold.custom-success.text-success.alert-success').remove();
                    $('p.text-bold.custom-danger.text-danger.alert-danger').remove();
                    $('<p class="text-bold custom-danger text-danger alert-danger" role="alert">Code either does not exist or is invalid.</p>').insertAfter('#txtMatchCodePassword');
                    $('#ContentPlaceHolder1_PasswordPanel').hide();
                }
            },
            failure: function (jqXHR, textStatus) {
                console.log("Request failed: " + textStatus);
            },
            error: function (jqXHR, textStatus) {
                console.log("Request failed: " + textStatus);
            }
        });
    });

    $('#txtMatchCodePassword').keypress(function (e) {
        if (e.which === 13) {
            $('#MatchCode').click();
            return false;
        }
    });

    //activation link mail
    $('#ResendButton').click(function () {
        var email = document.getElementById('txtAcctivationLink').value;
        $.ajax({
            type: 'POST',
            url: '/Model/AjaxEnabledService.svc/ActivationLink',
            dataType: 'json',
            data: JSON.stringify({ email: email }),
            contentType: "application/json",
            success: function (response) {
                $('p.text-bold.custom-success.text-success.alert-success').remove();
                $('p.text-bold.custom-danger.text-danger.alert-danger').remove();
                $('<p class="text-bold custom-success text-success alert-success" role="alert">Please check your email. If you do not receive an email, please check your junks or spam folder. </p>').insertAfter('#txtAcctivationLink');
                //  $('p.text-bold.custom-success.text-success.alert-success').remove();
                //  $('p.text-bold.custom-danger.text-danger.alert-danger').remove();
                //  $('<p class="text-bold custom-danger text-danger alert-danger" role="alert">Invalid email address</p>').insertAfter('#txtAcctivationLink');

            },
            failure: function (jqXHR, textStatus) {
                console.log("Request failed: " + textStatus);
            },
            error: function (jqXHR, textStatus) {
                console.log("Request failed: " + textStatus);
            }
        });
    });

    if (window.location.pathname === "/accountrecovery.aspx") {
        if ($('#ContentPlaceHolder1_PasswordStatus').val() == "1") {
            $('p.text-bold.custom-success.text-success.alert-success').remove();
            $('p.text-bold.custom-danger.text-danger.alert-danger').remove();
            $('<p class="text-bold custom-success text-success alert-success" role="alert">Password changed successfully.</p>').insertAfter('.change-h3');
        }
        else {
            $('p.text-bold.custom-success.text-success.alert-success').remove();
            $('p.text-bold.custom-danger.text-danger.alert-danger').remove();
            $('<p class="text-bold custom-danger text-danger alert-danger" role="alert">Something went wrong. Unable to save change.</p>').insertAfter('.change-h3');
        }
    }

});

$(window).on('load', function () {


    $('.loader').fadeOut();

    $("#JobsGridView a").slice(0, 5).show();

    //job load more
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $("#JobsGridView a:hidden").slice(0, 5).slideDown();
        if ($("#JobsGridView a:hidden").length === 0) {
            $("#load").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });

    $('a[href=#top]').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.totop a').fadeIn();
        } else {
            $('.totop a').fadeOut();
        }
    });

    if (window.location.pathname === "/job-details.aspx") {

        var content = document.getElementById('ContentPlaceHolder1_JobDescription');
        var replaceContent = content.innerHTML.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
        $('#ContentPlaceHolder1_JobDescription').after(replaceContent);
        $('#ContentPlaceHolder1_JobDescription').hide();

        var content1 = document.getElementById('ContentPlaceHolder1_JobSkill');
        var replaceContent1 = content1.innerHTML.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
        $('#ContentPlaceHolder1_JobSkill').after(replaceContent1);
        $('#ContentPlaceHolder1_JobSkill').hide();

        var content2 = document.getElementById('ContentPlaceHolder1_JobCompanyDescription');
        var replaceContent2 = content2.innerHTML.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
        $('#ContentPlaceHolder1_JobCompanyDescription').after(replaceContent2);
        $('#ContentPlaceHolder1_JobCompanyDescription').hide();


        var getCount = document.getElementById('ContentPlaceHolder1_RightUser').value;
        if (getCount === '4') {
            $('#job_message').append('<div class="alert alert-warning" role="alert"> <p>You cannot apply since your are an employer. Please Login as Jobseeker to apply for this job. </p></div>');
            $('#ContentPlaceHolder1_btn_apply_job').hide();
        }
        else if (getCount === '2') {
            $('#job_message').append('<div class="alert alert-danger" role="alert"><p>You have already applied for this job. </p></div>');
            $('#ContentPlaceHolder1_btn_apply_job').hide();
        }

        else if (getCount === '1') {
            slowscroll();
            $("#JobModel").modal({ backdrop: false });
            $('#ContentPlaceHolder1_btn_apply_job').hide();
        }
        else if (getCount === '5') {
            slowscroll();
            $("#JobModel").modal("hide");
            $('#job_message').append('<div class="alert alert-success" role="alert"><p>You have successfully applied for this job. </p></div>');
            $('#ContentPlaceHolder1_btn_apply_job').hide();
        }
        else if (getCount === '6') {
            slowscroll();
            $("#JobModel").modal("hide");
            $('#job_message').append('<div class="alert alert-danger" role="alert"><p>Something went wrong. Try later. </p></div>');
            $('#ContentPlaceHolder1_btn_apply_job').hide();
        }
    }


    $('#GetDropdown').click(function () {
        $('#ChangeResume').show();
        $('#ContentPlaceHolder1_SavedResume').hide();
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: '/Model/AjaxEnabledService.svc/JobseekerAttachment',
            contentType: "application/json",
            success: function (response) {
                var list = eval(response.d);
                var items = '';
                $('#ChangeResume').append("<option value='0'>Select CV</option>");
                $.each(list, function (i, item) {
                    $('#ChangeResume').append("<option value='" + item.AttachmentId + "'>" + item.AttachmentName + "</option>");
                });
            },
            failure: function (jqXHR, textStatus) {
                console.log("Request failed: " + textStatus);
            },
            error: function (jqXHR, textStatus) {
                console.log("Request failed: " + textStatus);
            }
        });
        return false;

    });

    $('#ButtonCancel').click(function () {
        $('#ContentPlaceHolder1_btn_apply_job').show();
    });

    $('#ChangeResume').change(function () {
        var id = document.getElementById('ChangeResume').value;
        $('#ContentPlaceHolder1_CVID').val(id);
        console.log(id);

    });

    //on enter event
    $('#txt_search').keyup(function (event) {
        var keycode = event.keyCode || event.which;
        if (keycode === '13') {
            window.location.href = '/jobs.aspx?search=' + document.getElementById('txt_search').value + '';

        }
    });



});
