function ErrorFunction() {
    $('#error').remove();
    $('html , body').animate({ scrollTop: 0 }, 700);
    $('.content-header').after('<div class="content-header" id="error"> <div class="alert text-danger alert-danger">Something went wrong.</div> </div>');
    setTimeout(function () { $("#error").hide('blind', {}, 500); }, 5000);
}

function ValidationFunction() {
    $('html , body').animate({ scrollTop: 0 }, 700);
    $('.content-header').after('<p id="error" class="bg-danger text-danger">All fields are required</p>');
    setTimeout(function () { $("#error").hide('blind', {}, 500); }, 5000);
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

function CountFunction(url, tagId) {
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: url,
        contentType: "application/json",
        success: function (response) {
            $(tagId).html(response.d);
        },
        failure: function (jqXHR, textStatus) {
            ErrorFunction();
            console.log("Request failed: " + textStatus);
        },
        error: function (jqXHR, textStatus) {
            ErrorFunction();
            console.log("Request failed: " + textStatus);
        }
    });
}

function GetAdminListFunction(MethodUrl, SuccessFunction) {
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: MethodUrl,
        contentType: "application/json",
        success: function (response) {
            SuccessFunction(response);
        },
        failure: function (jqXHR, textStatus) {
            ErrorFunction();
            console.log("Request failed: " + textStatus);
        },
        error: function (jqXHR, textStatus) {
            ErrorFunction();
            console.log("Request failed: " + textStatus);
        }
    });
}

function JobseekerListForAdmin(response) {
    $('#jobseekerTable').DataTable({
        "data": response.d,
        "columns": [
            { "data": "JSId" },
            { "data": "JSName" },
            { "data": "JSLName" },
            { "data": "JSEmail" },
            { "data": "JSMobile" },
            { "data": "JSStatus" },
            {
                "data": "JSEmail",
                "render": function (data, type, row, meta) {
                    if (type === 'display') {
                        data = '<a href="http://jobs-ace.com/admin/viewdetails.aspx?detail=' + data + '" target="_blank">View Detail</a>';
                    }
                    return data;
                }
            }
        ]
    });
}

function EmployerListForAdmin(response) {
    $('#employerTable').DataTable({
        "data": response.d,
        "columns": [
            { "data": "JSId" },
            { "data": "JSName" },
            { "data": "JSLName" },
            { "data": "JSEmail" },
            { "data": "JSMobile" },
            { "data": "JSStatus" },
            {
                "data": "JSEmail",
                "render": function (data, type, row, meta) {
                    if (type === 'display') {
                        data = '<a href="http://jobs-ace.com/admin/showdetails.aspx?detail=' + data + '" target="_blank">View Detail</a>';
                    }
                    return data;
                }
            }
        ]
    });
}

function ApprovedJobListForAdmin(response) {
    $('#approvedJobTable').DataTable({
        "data": response.d,
        "columns": [
            {
                "data": "JobLogo",
                render: function (data) {
                    return '<img src="../' + data + '">';
                }
            },
            { "data": "JobTitle" },
            { "data": "CompanyName" },
            { "data": "UserName" },
            { "data": "UserEmail" },
            { "data": "JobStatus" },
            { "data": "JobAddedDate" },
            { "data": "JobApplyDate" },
            {
                "data": "JobId",
                "render": function (data, type, row, meta) {
                    if (type === 'display') {
                        data = '<a href="http://jobs-ace.com/admin/showjobdetails.aspx?detail=' + data + '" target="_blank">View Detail</a>';
                    }
                    return data;
                }
            }
        ]
    });
}

function PendingJobListForAdmin(response) {
    $('#pendingJobTable').DataTable({
        "data": response.d,
        "columns": [
            {
                "data": "JobLogo",
                render: function (data) {
                    return '<img src="../' + data + '">';
                }
            },
            { "data": "JobTitle" },
            { "data": "CompanyName" },
            { "data": "UserName" },
            { "data": "UserEmail" },
            { "data": "JobStatus" },
            { "data": "JobAddedDate" },
            { "data": "JobApplyDate" },
            {
                "data": "JobId",
                "render": function (data, type, row, meta) {
                    if (type === 'display') {
                        data = '<a href="http://jobs-ace.com/admin/showjobdetails.aspx?detail=' + data + '" target="_blank">View Detail</a>';
                    }
                    return data;
                }
            }
        ]
    });
}

function CompaniesListForAdmin(response) {
    $('#companyTable').DataTable({
        "data": response.d,
        "columns": [
            {
                "data": "CompanyLogo",
                render: function (data) {
                    return '<img src="../' + data + '">';
                }
            },
            { "data": "CompanyName" },
            {
                "data": "CompanyId",
                "render": function (data, type, row, meta) {
                    if (type === 'display') {
                        data = '<a href="http://jobs-ace.com/admin/showjobdetails.aspx?detail=' + data + '" target="_blank">View Detail</a>';
                    }
                    return data;
                }
            }
        ]
    });
}

function City(dropdown_id) {
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: '/Model/AjaxEnabledService.svc/City',
        data: {},
        contentType: "application/json",
        success: function (response) {
            var jobs = eval(response.d);
            if (jobs.length === 0) {
                OnError();
            }
            else {
                var items = '';
                $(dropdown_id).append("<option value='0'>Select city</option>");
                $.each(jobs, function (i, item) {
                    $(dropdown_id).append('<option value=' + item.CityId + '>' + item.CityName + '</option>');
                });
            }
        },
        failure: function (jqXHR, textStatus) {
            OnError();
            console.log("Request failed: " + textStatus);
        },
        error: function (jqXHR, textStatus) {
            OnError();
            console.log("Request failed: " + textStatus);
        }
    });
    return false;
}

function Qualification(dropdown_id) {
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: '/Model/AjaxEnabledService.svc/GetQualification',
        data: {},
        contentType: "application/json",
        success: function (response) {
            var jobs = eval(response.d);
            if (jobs.length === 0) {
                OnError();
            }
            else {
                var items = '';
                $(dropdown_id).append("<option value='0'>Select qualification</option>");
                $.each(jobs, function (i, item) {
                    $(dropdown_id).append('<option value=' + item.QualificationId + '>' + item.QualificationName + '</option>');
                });
            }
        },
        failure: function (jqXHR, textStatus) {
            OnError();
            console.log("Request failed: " + textStatus);
        },
        error: function (jqXHR, textStatus) {
            OnError();
            console.log("Request failed: " + textStatus);
        }
    });
    return false;
}

function ExperienceYears(dropdown_id) {
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: '/Model/AjaxEnabledService.svc/GetExperience',
        data: {},
        contentType: "application/json",
        success: function (response) {
            var jobs = eval(response.d);
            if (jobs.length === 0) {
                OnError();
            }
            else {
                var items = '';
                $(dropdown_id).append("<option value='0'>Select experience</option>");
                $.each(jobs, function (i, item) {
                    $(dropdown_id).append('<option value=' + item.ExperienceId + '>' + item.ExperienceName + '</option>');
                });
            }
        },
        failure: function (jqXHR, textStatus) {
            OnError();
            console.log("Request failed: " + textStatus);
        },
        error: function (jqXHR, textStatus) {
            OnError();
            console.log("Request failed: " + textStatus);
        }
    });
    return false;
}

function CareerLevel(dropdown_id) {
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: '/Model/AjaxEnabledService.svc/GetCareerLevel',
        data: {},
        contentType: "application/json",
        success: function (response) {
            var jobs = eval(response.d);
            if (jobs.length === 0) {
                OnError();
            }
            else {
                var items = '';
                $(dropdown_id).append("<option value='0'>Select career level</option>");
                $.each(jobs, function (i, item) {
                    $(dropdown_id).append('<option value=' + item.CareerId + '>' + item.CareerName + '</option>');
                });
            }
        },
        failure: function (jqXHR, textStatus) {
            OnError();
            console.log("Request failed: " + textStatus);
        },
        error: function (jqXHR, textStatus) {
            OnError();
            console.log("Request failed: " + textStatus);
        }
    });
    return false;
}

function JobType(dropdown_id) {
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: '/Model/AjaxEnabledService.svc/GetJobType',
        data: {},
        contentType: "application/json",
        success: function (response) {
            var jobs = eval(response.d);
            if (jobs.length === 0) {
                OnError();
            }
            else {
                var items = '';
                $(dropdown_id).append("<option value='0'>Select job type</option>");
                $.each(jobs, function (i, item) {
                    $(dropdown_id).append('<option value=' + item.JobTypeId + '>' + item.JobTypeName + '</option>');
                });
            }
        },
        failure: function (jqXHR, textStatus) {
            OnError();
            console.log("Request failed: " + textStatus);
        },
        error: function (jqXHR, textStatus) {
            OnError();
            console.log("Request failed: " + textStatus);
        }
    });
    return false;
}

function JobCategory(dropdown_id) {
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: '/Model/AjaxEnabledService.svc/GetCategory',
        data: {},
        contentType: "application/json",
        success: function (response) {
            var jobs = eval(response.d);
            if (jobs.length === 0) {
                OnError();
            }
            else {
                var items = '';
                $(dropdown_id).append("<option value='0'>Select job cateogry</option>");
                $.each(jobs, function (i, item) {
                    $(dropdown_id).append('<option value=' + item.CategoryId + '>' + item.CategoryName + '</option>');
                });
            }
        },
        failure: function (jqXHR, textStatus) {
            OnError();
            console.log("Request failed: " + textStatus);
        },
        error: function (jqXHR, textStatus) {
            OnError();
            console.log("Request failed: " + textStatus);
        }
    });
    return false;
}

function CompanyList(dropdown_id) {
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: '/Model/AjaxEnabledService.svc/GetCompanies',
        data: {},
        contentType: "application/json",
        success: function (response) {
            var jobs = eval(response.d);
            if (jobs.length === 0) {
                ErrorFunction();
            }
            else {
                var items = '';
                $(dropdown_id).append("<option value='0'>Select company</option>");
                $.each(jobs, function (i, item) {
                    $(dropdown_id).append('<option value=' + item.CompanyId + '>' + item.CompanyName + '</option>');
                });
            }
        },
        failure: function (jqXHR, textStatus) {
            ErrorFunction();
            console.log("Request failed: " + textStatus);
        },
        error: function (jqXHR, textStatus) {
            ErrorFunction();
            console.log("Request failed: " + textStatus);
        }
    });
    return false;
}



$(document).ready(function () {
    //duedate
    $('#txt_duedate').datepicker();

    //text editor
    $('#ContentPlaceHolder1_txt_cdescription').summernote();
    $('#txt_jobdescriptions').summernote();
    $('#txt_jobskill').summernote();
    $('.note-table').remove();
    $('.note-insert').remove();
    $('.note-table').remove();
    $('.note-insert').remove();


    //jobseeker
    GetAdminListFunction('/Model/AjaxEnabledService.svc/AdminGetJobSeeker', JobseekerListForAdmin);

    //employer
    GetAdminListFunction('/Model/AjaxEnabledService.svc/AdminGetEmployer', EmployerListForAdmin);

    //approved
    GetAdminListFunction('/Model/AjaxEnabledService.svc/AdminGetApprovedJob', ApprovedJobListForAdmin);

    //pending
    GetAdminListFunction('/Model/AjaxEnabledService.svc/AdminGetPendingJob', PendingJobListForAdmin);

    //comapnies
    GetAdminListFunction('/Model/AjaxEnabledService.svc/CompanyList', CompaniesListForAdmin);


    CountFunction('/Model/AjaxEnabledService.svc/CountJ', '#jobseeker');
    CountFunction('/Model/AjaxEnabledService.svc/CountE', '#employer');
    CountFunction('/Model/AjaxEnabledService.svc/CountAJ', '#jobApproved');
    CountFunction('/Model/AjaxEnabledService.svc/CountPJ', '#jobPending');

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    var events_array = [
        {
            title: 'Test1',
            start: new Date(2012, 8, 20)
        },
        {
            title: 'Test2',
            start: new Date(2012, 8, 21)
        }
    ];

    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        editable: true,
        events: events_array,
        dayClick: function (date, allDay, jsEvent, view) {
            //  $(this).parent().siblings().removeClass('fc-cell-overlay');
            $(".fc-cell-overlay").removeClass("fc-cell-overlay");
            $(this).addClass('fc-cell-overlay');
        }
    });

    if (window.location.pathname === "/admin/showjobdetails.aspx") {

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
    }

    $('#BtnApprove').click(function () {
        var jobId = GetParameterValues('detail');
        $.ajax({
            type: 'GET',
            url: '/Model/AjaxEnabledService.svc/ApprovedJob',
            dataType: 'json',
            data: JSON.parse(JSON.stringify({ id: jobId })),
            contentType: "application/json",
            success: function (response) {
                if (response.d === "1") {
                    $('#success').remove();
                    $('html , body').animate({ scrollTop: 0 }, 700);
                    $('.content-header').after('<div class="content-header" id="success"> <div class="alert text-success alert-success">Job have been approved successfully</div> </div>');
                    setTimeout(function () { $("#success").hide('blind', {}, 500); }, 5000);
                }
                else if (response.d === "-1") {
                    $('#error').remove();
                    $('html , body').animate({ scrollTop: 0 }, 700);
                    $('.content-header').after('<div class="content-header" id="error"> <div class="alert text-danger alert-danger">Something went wrong.</div> </div>');
                    setTimeout(function () { $("#error").hide('blind', {}, 500); }, 5000);
                }
            },
            failure: function (jqXHR, textStatus) {
                ErrorFunction();
                console.log("Request failed: " + textStatus);
            },
            error: function (jqXHR, textStatus) {
                ErrorFunction();
                console.log("Request failed: " + textStatus);
            }
        });
    });

    $('#BtnReject').click(function () {
        var jobId = GetParameterValues('detail');
        $.ajax({
            type: 'GET',
            url: '/Model/AjaxEnabledService.svc/RejectJob',
            dataType: 'json',
            data: JSON.parse(JSON.stringify({ id: jobId })),
            contentType: "application/json",
            success: function (response) {
                if (response.d === "1") {
                    $('#success').remove();
                    $('html , body').animate({ scrollTop: 0 }, 700);
                    $('.content-header').after('<div class="content-header" id="success"> <div class="alert text-success alert-success">Job have been rejected successfully</div> </div>');
                    setTimeout(function () { $("#success").hide('blind', {}, 500); }, 5000);
                }
                else if (response.d === "-1") {
                    $('#error').remove();
                    $('html , body').animate({ scrollTop: 0 }, 700);
                    $('.content-header').after('<div class="content-header" id="error"> <div class="alert text-danger alert-danger">Something went wrong.</div> </div>');
                    setTimeout(function () { $("#error").hide('blind', {}, 500); }, 5000);
                }
            },
            failure: function (jqXHR, textStatus) {
                ErrorFunction();
                console.log("Request failed: " + textStatus);
            },
            error: function (jqXHR, textStatus) {
                ErrorFunction();
                console.log("Request failed: " + textStatus);
            }
        });
    });

    //for comapny
    City('#ContentPlaceHolder1_ddl_ccity');
    //for job post
    City('#ddl_jobCity');
    Qualification('#ddl_jobQualification');
    ExperienceYears('#ddl_jobExperience');
    CareerLevel('#ddl_Jobcareer');
    JobType('#ddl_jobType');
    JobCategory('#ddl_jobCategory');
    CompanyList('#ddl_companylist');


    $('#ContentPlaceHolder1_ddl_ccity').on('change', function () {
        var id = $(this).val();
        $('#ContentPlaceHolder1_ddl_carea option').remove();
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: '/Model/AjaxEnabledService.svc/Area',
            data: JSON.parse(JSON.stringify({ id: id })),
            contentType: "application/json",
            success: function (response) {
                var list = eval(response.d);
                if (list.length === 0) {
                    $('#ContentPlaceHolder1_ddl_carea').append("<option value='0'>No area found</option>");
                }
                else {
                    var items = '';
                    $('#ContentPlaceHolder1_ddl_carea').append("<option value='0'>Select area</option>");
                    $.each(list, function (i, item) {
                        $('#ContentPlaceHolder1_ddl_carea').append("<option value='" + item.AreaId + "'>" + item.AreaName + "</option>");
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
    });

    $(document).on('change', '#ContentPlaceHolder1_ddl_carea', function () {
        var area = document.getElementById("ContentPlaceHolder1_ddl_carea").value;
        $('#ContentPlaceHolder1_txt_carea').val(area);
    });

    $(document).on('change', '#ContentPlaceHolder1_ddl_cindustry', function () {
        var area = document.getElementById("ContentPlaceHolder1_ddl_cindustry").value;
        $('#ContentPlaceHolder1_txt_cindustry').val(area);
    });



    $('#ddl_jobCity').on('change', function () {
        var id = $(this).val();
        $('#ddl_jobArea option').remove();
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: '/Model/AjaxEnabledService.svc/Area',
            data: JSON.parse(JSON.stringify({ id: id })),
            contentType: "application/json",
            success: function (response) {
                var list = eval(response.d);
                if (list.length === 0) {
                    $('#ddl_jobArea').append("<option value='0'>No area found</option>");
                }
                else {
                    var items = '';
                    $('#ddl_jobArea').append("<option value='0'>Select area</option>");
                    $.each(list, function (i, item) {
                        $('#ddl_jobArea').append("<option value='" + item.AreaId + "'>" + item.AreaName + "</option>");
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
    });

    //subcatgory dd
    $('#ddl_jobCategory').on('change', function () {
        var id = $(this).val();
        $('#ddl_jobSubCategory option').remove();
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: '/Model/AjaxEnabledService.svc/GetSubCategory',
            data: JSON.parse(JSON.stringify({ id: id })),
            contentType: "application/json",
            success: function (response) {
                var list = eval(response.d);
                if (list.length === 0) {
                    $('#ddl_jobSubCategory').append("<option value='0'>No category found</option>");
                }
                else {
                    var items = '';
                    $('#ddl_jobSubCategory').append("<option value='0'>Select sub-category</option>");
                    $.each(list, function (i, item) {
                        $('#ddl_jobSubCategory').append("<option value='" + item.SubCategoryId + "'>" + item.SubCategoryName + "</option>");
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
    });

    $(document).on('change', '#ddl_jobArea', function () {
        var area = document.getElementById("ddl_jobArea").value;
        $('#ContentPlaceHolder1_txt_area').val(area);
    });

    $(document).on('change', '#ddl_jobType', function () {
        var area = document.getElementById("ddl_jobType").value;
        $('#ContentPlaceHolder1_txt_type').val(area);
    });

    $(document).on('change', '#ddl_jobExperience', function () {
        var area = document.getElementById("ddl_jobExperience").value;
        $('#ContentPlaceHolder1_txt_experience').val(area);
    });

    $(document).on('change', '#ddl_jobQualification', function () {
        var area = document.getElementById("ddl_jobQualification").value;
        $('#ContentPlaceHolder1_txt_qualification').val(area);
    });

    $(document).on('change', '#ddl_jobSubCategory', function () {
        var area = document.getElementById("ddl_jobSubCategory").value;
        $('#ContentPlaceHolder1_txt_jobSubCategory').val(area);
    });

    $(document).on('change', '#ddl_Jobcareer', function () {
        var area = document.getElementById("ddl_Jobcareer").value;
        $('#ContentPlaceHolder1_txt_career').val(area);
    });

    $(document).on('change', '#ddl_companylist', function () {
        var area = document.getElementById("ddl_companylist").value;
        $('#ContentPlaceHolder1_txt_companylist').val(area);
    });

    $('#btnCancelJob').click(function () {
        window.location.href = "/admin/index.aspx";
    });

    
});

jQuery(function ($) {
    //inserting job
    $(document).on('click', '#btnAddJob[type=button]', function (e) {
        var cid = document.getElementById('ContentPlaceHolder1_txt_companylist').value;
        var title = document.getElementById('txtTitle').value;
        var description = document.getElementById('txt_jobdescriptions').value;
        var skill = document.getElementById('txt_jobskill').value;
        var area = document.getElementById('ContentPlaceHolder1_txt_area').value;
        var career = document.getElementById('ContentPlaceHolder1_txt_career').value;
        var type = document.getElementById('ContentPlaceHolder1_txt_type').value;
        var experience = document.getElementById('ContentPlaceHolder1_txt_experience').value;
        var qualification = document.getElementById('ContentPlaceHolder1_txt_qualification').value;
        var category = document.getElementById('ContentPlaceHolder1_txt_jobSubCategory').value;
        var shift = document.getElementById('ddl_jobShift').value;
        var gender = document.getElementById('ddl_jobgender').value;
        var salarystart = document.getElementById('txt_startsalary').value;
        var salaryend = document.getElementById('txt_endsalary').value;
        var position = document.getElementById('txt_ttlposition').value;
        var date = document.getElementById('txt_duedate').value;

        if (title === "" || description === "" || skill === "" || area === "" || career === "" || type === "" || experience === "" || qualification === "" || category === "" || shift === "" || gender === "" || salarystart === "" || salaryend === "" || position === "" || date === "") {
            ValidationFunction();
        }
        else {
            $.ajax({
                type: 'POST',
                url: '/Model/AjaxEnabledService.svc/JobInsert',
                dataType: 'json',
                data: JSON.stringify({ cid: cid, title: title, description: description, skill: skill, area: area, careerlevel: career, salaryfrom: salarystart, salaryto: salaryend, shift: shift, type: type, experience: experience, degree: qualification, gender: gender, position: position, applydate: date, category: category }),
                contentType: "application/json",
                success: function (response) {
                    if (response.d > 0) {
                        $('#success').remove();
                        $('html , body').animate({ scrollTop: 0 }, 700);
                        $('.content-header').after('<div class="content-header" id="success"> <div class="alert text-success alert-success">Please approve your job</div> </div>');
                        setTimeout(function () { $("#success").hide('blind', {}, 500); }, 5000);
                    }
                    else {
                        ErrorFunction();
                    }
                },
                failure: function (jqXHR, textStatus) {
                    ErrorFunction();
                    console.log("Request failed: " + textStatus);
                },
                error: function (jqXHR, textStatus) {
                    ErrorFunction();
                    console.log("Request failed: " + textStatus);
                }
            });
            return false;
        }
        e.preventDefault();
    });
   
});