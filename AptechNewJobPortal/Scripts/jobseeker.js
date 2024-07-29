function ScrollToTop() {
    $('html , body').animate({ scrollTop: 0 }, 700);
}

function ValidationFunction() {
    $('#error').remove();
    $('html , body').animate({ scrollTop: 0 }, 700);
    $('.content-header').after('<p id="error" class="bg-danger text-danger">All fields are required</p>');
    setTimeout(function () { $("#error").hide('blind', {}, 500); }, 5000);
}

function ErrorFunction() {
    $('html , body').animate({ scrollTop: 0 }, 700);
    $('.content-header').after('<p id="error" class="bg-danger text-danger">Something went wrong</p>');
    setTimeout(function () { $("#error").hide('blind', {}, 500); }, 5000);
}

function SuccessMessageForUpdate() {
    $('html , body').animate({ scrollTop: 0 }, 700);
    $('.content-header').after('<p id="success" class="bg-info text-info">Changes saved</p>');
    setTimeout(function () { $("#success").hide('blind', {}, 500); }, 3000);
}

function SuccessMessageForInsert() {
    $('html , body').animate({ scrollTop: 0 }, 700);
    $('.content-header').after('<p id="success" class="bg-danger text-success">Record added to your resume</p>');
    setTimeout(function () { $("#success").hide('blind', {}, 500); }, 3000);
}

function SuccessMessageForDelete() {
    $('html , body').animate({ scrollTop: 0 }, 700);
    $('.content-header').after('<p id="error" class="bg-danger text-danger">Record removed from your resume</p>');
    setTimeout(function () { $("#error").hide('blind', {}, 500); }, 3000);
}


//resume list  POST
function GetJobseekerList(url, successFunction) {
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: url,
        contentType: "application/json",
        success: function (response) {
            successFunction(response);
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

//Education Success Function
function EducationListSuccess(response) {
    var list = eval(response.d);
    if (list.length === 0) {
        var attach = "<div class='row'><div class='col-sm-12'><h1 class='no-job-h1 text-center'>No record found !</h1></div></div>";
        $('#EducationDiv').append(attach);
    } else {
        var items = "";
        $.each(list, function (i, item) {
            var rows =
                "<li class='time-label'><span class='bg-black'>" + item.EducationCompletion + "</span> </li>" +
                "<!-- /.timeline-label --><!-- timeline item -->" +
                "<li><i class='fa fa-university bg-blue'></i>" +
                "<div class='timeline-item'>" +
                "<h3 class='timeline-header'>" + item.EducationDegreeLevel + "" + item.EducationOther + "</h3>" +
                "<div class='timeline-body'><p>Education: <b>" + item.EducationDegree + "</b></p><p>Institution: <b>" + item.EducationInsitute + "</b></p><p> Result: <b>" + item.EducationResult + " </b></p></div>" +
                "<div class='timeline-footer'>" +
                "<button id='EduEditButton' type='button' name='" + item.EducationId + "' class='btn btn-success btn-xs disabled'><i class='fa fa-edit'></i>Edit</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
                "<button id='EduRemoveButton' type='button' name='" + item.EducationId + "' class='btn btn-danger btn-xs'><i class='fa fa-trash'></i>Delete</button>" +
                "</div></div>" +
                "</li><!-- END timeline item -->";
            $('#EducationDiv').append("<div class='row'><div class='col-sm-12'><ul class='timeline'>" + rows + "</ul></div></div>");
        });
    }
    $('#addEdu').remove();
    $('#EducationDiv').after('<button id="addEdu" class="add-new"><i class="fa fa-plus"></i>Add New</button>');
}

//Experience success function
function ExperienceListSuccess(response) {
    var list = eval(response.d);
    if (list.length === 0) {
        var attach = "<div class='row'><div class='col-sm-12'><h1 class='no-job-h1 text-center'>No record found !</h1></div></div>";
        $('#ExperienceDiv').append(attach);
    } else {
        var items = '';
        $.each(list, function (i, item) {
            var telly = '';
            if (item.ExperienceEnd === 'Jan 1900') {
                telly = item.ExperienceStart + ' - Working';
            }
            else {
                telly = item.ExperienceStart + ' - ' + item.ExperienceEnd;
            }
            var rows =
                "<li class='time-label'><span class='bg-black'>" + telly + "</span> </li>" +
                "<!-- /.timeline-label --><!-- timeline item -->" +
                "<li><i class='fa fa-briefcase bg-green-gradient' style='color: #fff;'></i>" +
                "<div class='timeline-item'>" +
                "<h3 class='timeline-header'>" + item.ExperienceJobTitle + "</h3>" +
                "<div class='timeline-body'><p><b>" + item.ExperienceCompany + "</b></p><p><b>" + item.ExperienceDescription + "</b></p></div>" +
                "<div class='timeline-footer'>" +
                "<button id='ExpEditButton' type='button' name='" + item.ExperienceId + "' class='btn btn-success btn-xs'><i class='fa fa-edit'></i>Edit</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
                "<button id='ExpRemoveButton' type='button' name='" + item.ExperienceId + "' class='btn btn-danger btn-xs'><i class='fa fa-trash'></i>Delete</button>" +
                "</div></div>" +
                "</li><!-- END timeline item -->";
            $('#ExperienceDiv').append("<div class='row'><div class='col-sm-12'><ul class='timeline'>" + rows + "</ul></div></div>");
        });
    }
    $('#addExp').remove();
    $('#ExperienceDiv').after('<button id="addExp" class="add-new"><i class="fa fa-plus"></i>Add New</button>');
}

//Portfolio success function
function PortfolioListSuccess(response) {
    var list = eval(response.d);
    if (list.length === 0) {
        var attach = "<div class='row'><div class='col-sm-12'><h1 class='no-job-h1 text-center'>No record found !</h1></div></div>";
        $('#PortfolioDiv').append(attach);
    } else {
        var items = '';
        $.each(list, function (i, item) {
            var rows =
                "<div class='row'><div class='col-sm-12'><div class='port-list'><div class='row'>" +
                "<div class='col-sm-10'><h5 class='text-bold'><i class='fa fa-suitcase'></i>&nbsp;&nbsp; " + item.PortfolioTitle + " - <small><a href='//" + item.PortfolioUrl + "' target='_blank'>" + item.PortfolioUrl + "</a></small></h5><p>'" + item.PortfolioDescription + "'</p></div>" +
                "<div class='col-sm-2'>" +
                "<button id='PortEditButton' type='button' name='" + item.PortfolioId + "' class='btn btn-success btn-xs'><i class='fa fa-edit'></i>Edit</button>" +
                "<button id='PortRemoveButton' type='button' name='" + item.PortfolioId + "' class='btn btn-danger btn-xs'><i class='fa fa-trash'></i>Delete</button>" +
                "</div></div></div></div></div>";
            $('#PortfolioDiv').append(rows);
        });
    }
    $('#addPort').remove();
    $('#PortfolioDiv').after('<button id="addPort" class="add-new"><i class="fa fa-plus"></i>Add New</button>');
}

//Skill success function
function SkillListSuccess(response) {
    var list = eval(response.d);
    if (list.length === 0) {
        var attach = "<div class='col-sm-12'><h1 class='no-job-h1 text-center'>No record found !</h1></div>";
        $('#SkillDiv').append(attach);
    } else {
        var items = '';
        $("#SkillDiv #row-id").before("<div class='row'><div class='col-md-3'><div class='indicator-box'><span class='level B'></span><p class='level-text'>Beginner</p></div></div><div class='col-md-3'><div class='indicator-box'><span class='level I'></span><p class='level-text'>Intermediate</p></div></div><div class='col-md-3'><div class='indicator-box'><span class='level A'></span><p class='level-text'>Advanced</p></div></div><div class='col-md-3'><div class='indicator-box'><span class='level E'></span><p class='level-text'>Expert</p></div></div></div>");
        $.each(list, function (i, item) {
            var percent = 0;
            var color = "";
            if (item.SkillLevel === "Beginner") {
                percent = 25;
                color = "#c4ce31";
            }
            else if (item.SkillLevel === "Intermediate") {
                percent = 50;
                color = "#273c7d";
            }
            else if (item.SkillLevel === "Advanced") {
                percent = 75;
                color = "#b50005";
            }
            else if (item.SkillLevel === "Expert") {
                percent = 100;
                color = "#ffb900";
            }
            else {
                percent = 0;
            }
            var rows =
                "<input type='text' id='" + item.SkillId + "' class='knob' value='" + percent + "' data-width='90' data-height='90' data-fgcolor='" + color + "'  data-readonly='true' readonly='readonly' style='width: 49px;height: 30px;position: absolute;vertical-align: middle;margin-top: 30px;margin-left: -69px;border: 0px;background: none;font-style: normal;font-variant: normal;font-weight: bold;font-stretch: normal;font-size: 18px;line-height: normal;font-family: Arial;text-align: center;color: #b50005 !important;padding: 0px;-webkit-appearance: none;'><div class='knob-label'>" + item.SkillName + "</div>" +
                "<button id='SkillEditButton' runat='server' type='button' name='" + item.SkillId + "' class='btn btn-success btn-xs'><i class='fa fa-edit'></i></button>" +
                "<button id='SkillRemoveButton' type='button' name='" + item.SkillId + "' class='btn btn-danger btn-xs'><i class='fa fa-trash'></i></button>";
            $("#SkillDiv #row-id").append("<div class='col-xs-6 col-md-3 text-center top-bottom-margin'>" + rows + "</div>");
            $(".knob").knob();
        });
    }
    $('#addSkill').remove();
    $('#SkillDiv').after('<button id="addSkill" class="add-new"><i class="fa fa-plus"></i>Add New</button>');

}

//Certification success function
function CertificateListSuccess(response) {
    var list = eval(response.d);
    if (list.length === 0) {
        var attach = "<div class='col-sm-12'><h1 class='no-job-h1 text-center'>No record found !</h1></div>";
        $('#CertificateDiv').append(attach);
    } else {
        var items = '';
        $.each(list, function (i, item) {
            var rows =
                            "<div class='row'><div class='col-sm-12'><div class='port-list'><div class='row'>" +
                            "<div class='col-sm-4'><h5 class='text-bold'><i class='fa fa-certificate'></i>&nbsp;&nbsp; " + item.CertificateTitle + "</h5><p class='text-bold'>" + item.CertificateDate + "</p></div>" +
                            "<div class='col-sm-6'><p style='margin: 10px 0 0 0;'>" + item.CertificateDescription + "</p></div>" +
                            "<div class='col-sm-2'>" +
                            "<button id='CertificateEditButton' type='button' name='" + item.CertificateId + "' class='btn btn-success btn-xs'><i class='fa fa-edit'></i>Edit</button>" +
                            "<button id='CertificateRemoveButton' type='button' name='" + item.CertificateId + "' class='btn btn-danger btn-xs'><i class='fa fa-trash'></i>Delete</button>" +
                            "</div></div></div></div></div>";
            $('#CertificateDiv').append(rows);
        });
    }
    $('#addCertificate').remove();
    $('#CertificateDiv').after('<button id="addCert" class="add-new"><i class="fa fa-plus"></i>Add New</button>');

}

////// Dropdown for skills
function FillSkills(skillid) {
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Model/AjaxEnabledService.svc/SkillList',
        contentType: "application/json",
        success: function (response) {
            var list = eval(response.d);
            if (list.length === 0) {
                $(skillid).append("<option value='0'>Select your skill</option>");
                console.log(list);
            }
            else {
                var items = '';
                $(skillid).append("<option value='0'>Select your skill</option>");
                $.each(list, function (i, item) {
                    $(skillid).append("<option value='" + item.SkillName + "'>" + item.SkillName + "</option>");
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


var gender1 = '';


jQuery(document).ready(function () {

    // Three div in each section so insert update and select
    $("#EducationAddDiv").hide();
    $("#EducationUpdateDiv").hide();

    $("#ExperienceAddDiv").hide();
    $("#ExperienceUpdateDiv").hide();

    $("#PortfolioAddDiv").hide();
    $("#PortfolioUpdateDiv").hide();

    //$("#SkillAddDiv").hide();
    $("#SkillAddDiv").hide();
    $("#SkillUpdateDiv").hide();

    $("#CertificateAddDiv").hide();
    $("#CertificateUpdateDiv").hide();

    //cv
    $("#CvUploadDiv").hide();
    $("#CvDiv").show();

    //Education
    GetJobseekerList('/Model/AjaxEnabledService.svc/JSEducation', EducationListSuccess);
    //Experience
    GetJobseekerList('/Model/AjaxEnabledService.svc/JSExperience', ExperienceListSuccess);
    //Portfolio
    GetJobseekerList('/Model/AjaxEnabledService.svc/JSPortfolio', PortfolioListSuccess);
    //Skill
    GetJobseekerList('/Model/AjaxEnabledService.svc/JSSkill', SkillListSuccess);
    //Certificate
    GetJobseekerList('/Model/AjaxEnabledService.svc/JSCertificate', CertificateListSuccess);

    //////// DEGREE DROPDOWNS in Education INSERT 
    $(function () {
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: '/Model/AjaxEnabledService.svc/DegreeList',
            contentType: "application/json",
            success: function (response) {
                var list = eval(response.d);
                if (list.length === 0) {
                    console.log(list);
                }
                else {
                    var items = '';
                    $('#ddl_degree').append("<option value='0'>Select Degree</option>");
                    $('#ddl_degree_level').append("<option value='0'>Select Degree Level</option>");
                    $.each(list, function (i, item) {
                        $('#ddl_degree').append("<option value='" + item.DegreeId + "'>" + item.DegreeName + "</option>");
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
    $('#ddl_degree').on('change', function () {
        var id = $(this).val();
        $('#ddl_degree_level option').remove();
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: '/Model/AjaxEnabledService.svc/DegreeLevelList',
            data: JSON.parse(JSON.stringify({ id: id })),
            contentType: "application/json",
            success: function (response) {
                var list = eval(response.d);
                if (list.length === 0) {
                    console.log(list);
                }
                else {
                    var items = '';
                    $('#ddl_degree_level').append("<option value='0'>Select Degree Level</option>");
                    $.each(list, function (i, item) {
                        $('#ddl_degree_level').append("<option value='" + item.DegreeLevelId + "'>" + item.DegreeLevelName + "</option>");
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

    /////// UPDATE DEGREE DROPDOWNs 
    function UpdateDregreeDropDown() {
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: '/Model/AjaxEnabledService.svc/DegreeList',
            contentType: "application/json",
            success: function (response) {
                var list = eval(response.d);
                if (list.length === 0) {
                    console.log(list);
                }
                else {
                    var items = '';
                    $('#ddl_update_degree').append("<option value='0'>Select Degree</option>");
                    $('#ddl_update_degree_level').append("<option value='0'>Select Degree Level</option>");
                    $.each(list, function (i, item) {
                        $('#ddl_update_degree').append("<option value='" + item.DegreeId + "'>" + item.DegreeName + "</option>");
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
    $('#ddl_update_degree').on('change', function () {
        var id = $(this).val();
        $('#ddl_update_degree_level option').remove();
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: '/Model/AjaxEnabledService.svc/DegreeLevelList',
            data: JSON.parse(JSON.stringify({ id: id })),
            contentType: "application/json",
            success: function (response) {
                var list = eval(response.d);
                if (list.length === 0) {
                    console.log(list);
                }
                else {
                    var items = '';
                    $('#ddl_update_degree_level').append("<option value='0'>Select Degree Level</option>");
                    $.each(list, function (i, item) {
                        $('#ddl_update_degree_level').append("<option value='" + item.DegreeLevelId + "'>" + item.DegreeLevelName + "</option>");
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


    $('#ContentPlaceHolder1_ddl_cityname').on('change', function () {
        var id = $(this).val();
        $('#ContentPlaceHolder1_ddl_areaname option').remove();
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: '/Model/AjaxEnabledService.svc/Area',
            data: JSON.parse(JSON.stringify({ id: id })),
            contentType: "application/json",
            success: function (response) {
                var list = eval(response.d);
                if (list.length === 0) {
                    $('#ContentPlaceHolder1_ddl_areaname').append("<option value='0'>No area found</option>");
                }
                else {
                    var items = '';
                    $('#ContentPlaceHolder1_ddl_areaname').append("<option value='0'>Select area</option>");
                    $.each(list, function (i, item) {
                        $('#ContentPlaceHolder1_ddl_areaname').append("<option value='" + item.AreaId + "'>" + item.AreaName + "</option>");
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


    ////// Insert delete for Education 
    //education insert
    $('#EducationAddDivInsert').on('click', function (e) {
        $('#error').remove();
        $('#success').remove();

        var degree = document.getElementById('ddl_degree').value;
        var degreelevel = document.getElementById('ddl_degree_level').value;
        var other = document.getElementById('txt_other').value;
        var institute = document.getElementById('txt_institute').value;
        var date = document.getElementById('completiondate').value;
        var result = document.getElementById('txtresult').value;
        if (degree === "Select Degree" || degreelevel === "Select Degree Level" || institute === "" || date === "" || result === "") {
            ValidationFunction();
        }
        else {
            $.ajax({
                type: 'POST',
                url: '/Model/AjaxEnabledService.svc/EducationInsert',
                dataType: 'json',
                data: JSON.stringify({ degree: degreelevel, institute: institute, date: date, result: result, other: other }),
                contentType: "application/json",
                success: function (response) {
                    if (response.d > 0) {
                        SuccessMessageForInsert();
                        $('#EducationDiv').empty();
                        GetJobseekerList('/Model/AjaxEnabledService.svc/JSEducation', EducationListSuccess);
                        $("#EducationDiv").show();
                        $("#EducationAddDiv").hide();
                        $("#EducationUpdateDiv").hide();
                    }
                    else {
                        ErrorFunction();
                        $('#EducationDiv').empty();
                        GetJobseekerList('/Model/AjaxEnabledService.svc/JSEducation', EducationListSuccess);
                        $("#EducationDiv").show();
                        $("#EducationAddDiv").hide();
                        $("#EducationUpdateDiv").hide();
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
    //education delete
    $('#Educationdetelebutton').on('click', function (e) {
        $('#error').remove();
        $('#success').remove();
        var x = $('#RecordId').attr("value");
        $.ajax({
            type: 'POST',
            url: '/Model/AjaxEnabledService.svc/EducationDelete',
            dataType: 'json',
            data: JSON.stringify({ id: $('#RecordId').attr("value") }),
            contentType: "application/json",
            success: function (response) {
                if (response.d > 0) {
                    SuccessMessageForDelete();
                    $('#EducationDiv').empty();
                    GetJobseekerList('/Model/AjaxEnabledService.svc/JSEducation', EducationListSuccess);
                    $("#EducationDiv").show();
                    $("#EducationAddDiv").hide();
                    $("#EducationUpdateDiv").hide();
                    $("#EducationModel").modal("hide");
                }
                else {
                    ErrorFunction();
                    $('#EducationDiv').empty();
                    GetJobseekerList('/Model/AjaxEnabledService.svc/JSEducation', EducationListSuccess);
                    $("#EducationDiv").show();
                    $("#EducationAddDiv").hide();
                    $("#EducationUpdateDiv").hide();
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
        e.preventDefault();
    });

    //////insert delete for experience 
    //experience insert
    $('#ExperienceAddDivInsert').on('click', function (e) {
        var title = document.getElementById('txtjobtitle').value;
        var company = document.getElementById('txtcompany').value;
        var start = document.getElementById('txtstart').value;
        var end = document.getElementById('txtend').value;
        var description = document.getElementById('txtdescription').value;

        if (title === "" || company === "" || start === "" || description === "") {
            ValidationFunction();
        }
        else {
            $.ajax({
                type: 'POST',
                url: '/Model/AjaxEnabledService.svc/ExperienceInsert',
                dataType: 'json',
                data: JSON.stringify({ title: title, company: company, start: start, end: end, description: description }),
                contentType: "application/json",
                success: function (response) {
                    if (response.d > 0) {
                        SuccessMessageForInsert();
                        $('#ExperienceDiv').empty();
                        GetJobseekerList('/Model/AjaxEnabledService.svc/JSExperience', ExperienceListSuccess);
                        $("#ExperienceDiv").show();
                        $("#ExperienceAddDiv").hide();
                        $("#ExperienceUpdateDiv").hide();
                    }
                    else {
                        ErrorFunction();
                        $('#ExperienceDiv').empty();
                        GetJobseekerList('/Model/AjaxEnabledService.svc/JSExperience', ExperienceListSuccess);
                        $("#ExperienceDiv").show();
                        $("#ExperienceAddDiv").hide();
                        $("#ExperienceUpdateDiv").hide();
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
    //experience delete
    $('#Experiencedetelebutton').on('click', function (e) {
        $('#error').remove();
        $('#success').remove();
        var x = $('#RecordId').attr("value");
        $.ajax({
            type: 'POST',
            url: '/Model/AjaxEnabledService.svc/ExperienceDelete',
            dataType: 'json',
            data: JSON.stringify({ id: $('#RecordId').attr("value") }),
            contentType: "application/json",
            success: function (response) {
                if (response.d > 0) {
                    SuccessMessageForDelete();
                    $("#ExperienceDiv").empty();
                    GetJobseekerList('/Model/AjaxEnabledService.svc/JSExperience', ExperienceListSuccess);
                    $("#ExperienceDiv").show();
                    $("#ExperienceAddDiv").hide();
                    $("#ExperienceUpdateDiv").hide();
                    $("#experienceModel").modal("hide");
                }
                else {
                    ErrorFunction();
                    $("#ExperienceDiv").empty();
                    GetJobseekerList('/Model/AjaxEnabledService.svc/JSExperience', ExperienceListSuccess);
                    $("#ExperienceDiv").show();
                    $("#ExperienceAddDiv").hide();
                    $("#ExperienceUpdateDiv").hide();
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
        e.preventDefault();
    });

    //insert delete for portfolio
    $('#PortfolioAddDivInsert').on('click', function (e) {
        var title = document.getElementById('txttitle').value;
        var url = document.getElementById('txturl').value;
        var description = document.getElementById('txt_portfolio_description').value;

        if (title === "" || url === "" || description === "") {
            ValidationFunction();
        }
        else {
            $.ajax({
                type: 'POST',
                url: '/Model/AjaxEnabledService.svc/PortfolioInsert',
                dataType: 'json',
                data: JSON.stringify({ title: title, url: url, description: description }),
                contentType: "application/json",
                success: function (response) {
                    if (response.d > 0) {
                        SuccessMessageForInsert();
                        $('#PortfolioDiv').empty();
                        GetJobseekerList('/Model/AjaxEnabledService.svc/JSPortfolio', PortfolioListSuccess);
                        $("#PortfolioDiv").show();
                        $("#PortfolioAddDiv").hide();
                        $("#PortfolioUpdateDiv").hide();
                    }
                    else {
                        ErrorFunction();
                        $('#PortfolioDiv').empty();
                        GetJobseekerList('/Model/AjaxEnabledService.svc/JSPortfolio', PortfolioListSuccess);
                        $("#PortfolioDiv").show();
                        $("#PortfolioAddDiv").hide();
                        $("#PortfolioUpdateDiv").hide();
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
    //portfolio delete
    $('#Portfoliodetelebutton').on('click', function (e) {
        $('#error').remove();
        $('#success').remove();
        var x = $('#RecordId').attr("value");
        $.ajax({
            type: 'POST',
            url: '/Model/AjaxEnabledService.svc/PortfolioDelete',
            dataType: 'json',
            data: JSON.stringify({ id: $('#RecordId').attr("value") }),
            contentType: "application/json",
            success: function (response) {
                if (response.d > 0) {
                    SuccessMessageForDelete();
                    $("#PortfolioDiv").empty();
                    GetJobseekerList('/Model/AjaxEnabledService.svc/JSPortfolio', PortfolioListSuccess);
                    $("#PortfolioDiv").show();
                    $("#PortfolioAddDiv").hide();
                    $("#PortfolioUpdateDiv").hide();
                    $("#PortfolioModel").modal("hide");
                }
                else {
                    ErrorFunction();
                    $("#PortfolioDiv").empty();
                    GetJobseekerList('/Model/AjaxEnabledService.svc/JSPortfolio', PortfolioListSuccess);
                    $("#PortfolioDiv").show();
                    $("#PortfolioAddDiv").hide();
                    $("#PortfolioUpdateDiv").hide();
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
        e.preventDefault();
    });

    //insert delete for Certificate
    $('#CertificateAddDivInsert').on('click', function (e) {
        var certificate = document.getElementById('txt_title').value;
        var date = document.getElementById('txt_certificate').value;
        var description = document.getElementById('txt_certificate_description').value;

        if (certificate === "" || date === "" || description === "") {
            ValidationFunction();
        }
        else {
            $.ajax({
                type: 'POST',
                url: '/Model/AjaxEnabledService.svc/CertificateInsert',
                dataType: 'json',
                data: JSON.stringify({ certificate: certificate, date: date, description: description }),
                contentType: "application/json",
                success: function (response) {
                    if (response.d > 0) {
                        SuccessMessageForInsert();
                        $('#CertificateDiv').empty();
                        GetJobseekerList('/Model/AjaxEnabledService.svc/JSCertificate', CertificateListSuccess);
                        $("#CertificateDiv").show();
                        $("#CertificateAddDiv").hide();
                        $("#CertificateUpdateDiv").hide();
                    }
                    else {
                        ErrorFunction();
                        $('#CertificateDiv').empty();
                        GetJobseekerList('/Model/AjaxEnabledService.svc/JSCertificate', CertificateListSuccess);
                        $("#CertificateDiv").show();
                        $("#CertificateAddDiv").hide();
                        $("#CertificateUpdateDiv").hide();
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
    //Certificate delete
    $('#Certificatedetelebutton').on('click', function (e) {
        $('#error').remove();
        $('#success').remove();
        var x = $('#RecordId').attr("value");
        $.ajax({
            type: 'POST',
            url: '/Model/AjaxEnabledService.svc/CertificateDelete',
            dataType: 'json',
            data: JSON.stringify({ id: $('#RecordId').attr("value") }),
            contentType: "application/json",
            success: function (response) {
                if (response.d > 0) {
                    SuccessMessageForDelete();
                    $('#CertificateDiv').empty();
                    GetJobseekerList('/Model/AjaxEnabledService.svc/JSCertificate', CertificateListSuccess);
                    $("#CertificateDiv").show();
                    $("#CertificateAddDiv").hide();
                    $("#CertificateUpdateDiv").hide();
                    $("#CertificateModel").modal("hide");
                }
                else {
                    ErrorFunction();
                    $('#CertificateDiv').empty();
                    GetJobseekerList('/Model/AjaxEnabledService.svc/JSCertificate', CertificateListSuccess);
                    $("#CertificateDiv").show();
                    $("#CertificateAddDiv").hide();
                    $("#CertificateUpdateDiv").hide();
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
        e.preventDefault();
    });



    City('#ContentPlaceHolder1_ddl_cityname');

    ExperienceYears('#ContentPlaceHolder1_ddl_experiencex');

    CareerLevel('#ContentPlaceHolder1_ddl_careerr');

    //datpicker in education insert
    $('#completiondate').datepicker({
        changeMonth: true,
        changeYear: true
    });
    //update
    $('#udpatecompletiondate').datepicker({
        changeMonth: true,
        changeYear: true
    });
    //start
    $('#txtstart').datepicker({
        changeMonth: true,
        changeYear: true
    });
    //end
    $('#txtend').datepicker({
        changeMonth: true,
        changeYear: true
    });
    //certificate dated
    $('#txt_certificate').datepicker({
        changeMonth: true,
        changeYear: true
    });
    //
    $('#ContentPlaceHolder1_txtbd').datepicker({
        changeMonth: true,
        changeYear: true
    });
    //validation
    $('#form1').validate({// validation rules for registration form
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
            /*education validation*/
            txt_institute: { required: true, minlength: 3, maxlength: 100 },
            txt_completion: { required: true },

            /*profile*/
            ctl00$ContentPlaceHolder1$txtmobile: { required: true, minlength: 11, maxlength: 13 },
            ctl00$ContentPlaceHolder1$txtmobile2: { minlength: 11, maxlength: 13 },
            ctl00$ContentPlaceHolder1$txtcnic: { required: true, minlength: 14, maxlength: 14 },

            /* certification*/
            txt_title: { required: true },
            txt_certificate: { required: true },
            txt_certificate_description: { required: true },
            txt_Updatetitle: { required: true },
            txt_Updatecertificate: { required: true },
            txt_update_certificate_description: { required: true }

        },
        messages: {
            ctl00$ContentPlaceHolder1$txtmobile: {
                required: "Mobile number is required",
                minlength: "Your mobile number must be of 11 digits.",
                maxlength: "Your mobile number have invalid figures.(Start your number with either 92 or 0)"
            },
            ctl00$ContentPlaceHolder1$txtmobile2: {
                minlength: "Your mobile number must be of 11 digits.",
                maxlength: "Your mobile number have invalid figures.(Start your number with either 92 or 0)"
            },
            ctl00$ContentPlaceHolder1$txtcnic: {
                required: "CNIC is required",
                minlength: "Enter 14 digits of your CNIC",
                maxlength: "Enter 14 digits of your CNIC"
            }

        }
    });



    $('#ProfileCancel').on('click', function (e) {
        window.location.href = "http://jobs-ace.com/jobseeker/resume.aspx";
        e.preventDefault();
    });

    $(document).on('change', '#ContentPlaceHolder1_ddl_maritalstatus', function () {
        var area = document.getElementById("ContentPlaceHolder1_ddl_maritalstatus").value;
        $('#hidden1').val(area);
    });


    $(document).on('change', '#ContentPlaceHolder1_ddl_experiencex', function () {
        var area = document.getElementById("ContentPlaceHolder1_ddl_experiencex").value;
        $('#hidden2').val(area);
    });


    $(document).on('change', '#ContentPlaceHolder1_ddl_careerr', function () {
        var area = document.getElementById("ContentPlaceHolder1_ddl_careerr").value;
        $('#hidden3').val(area);
    });


    $(document).on('change', '#ContentPlaceHolder1_ddl_areaname', function () {
        var area = document.getElementById("ContentPlaceHolder1_ddl_areaname").value;
        $('#hidden4').val(area);
    });


    /** Profile Image Cropping **/

    $('#UserImage').show();
    $('#UploadedImage').hide();

    // Span
    var span = document.getElementsByClassName('upload-path');
    // Button
    var uploader = document.getElementsByName('ctl00$ContentPlaceHolder1$FileUploadProfile');
    // On change
    for (item in uploader) {
        // Detect changes
        uploader[item].onchange = function () {
            // Echo filename in span
            span[0].innerHTML = this.files[0].name;
        }
    }


    $(function () {
        $('#ContentPlaceHolder1_FileUploadProfile').change(function () {

            $('#UserImage').hide();
            $('#UploadedImage').show();

            $('#previewImage').hide();
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#previewImage').show();
                $('#previewImage').attr("src", e.target.result);
                $('#previewImage').Jcrop({
                    boxWidth: 710,
                    setSelect: [100, 100, 200, 200],
                    aspectRatio: 1,
                    canResize: false,
                    maxSize: [200, 200],
                    minSize: [200, 200],
                    onChange: SetCoordinates,
                    onSelect: SetCoordinates
                });
            }
            reader.readAsDataURL($(this)[0].files[0]);
        });

        $('#btnCrop').click(function () {
            var x1 = $('#imgX1').val();
            var y1 = $('#imgY1').val();
            var width = $('#imgWidth').val();
            var height = $('#imgHeight').val();
            var canvas = $("#canvas")[0];
            var context = canvas.getContext('2d');
            var img = new Image();
            img.onload = function () {
                canvas.height = height;
                canvas.width = width;
                context.drawImage(img, x1, y1, width, height, 0, 0, width, height);
                $('#imgCropped').val(canvas.toDataURL());
                $('[id*=ContentPlaceHolder1_btn_UpdatePicture]').show();
            };
            img.src = $('#previewImage').attr("src");
        });
    });
    function SetCoordinates(c) {
        $('#imgX1').val(c.x);
        $('#imgY1').val(c.y);
        $('#imgWidth').val(c.w);
        $('#imgHeight').val(c.h);
        $('#btnCrop').show();
    };


    if (window.location.pathname == "/jobseeker/job-application.aspx") {
        $.ajax({
            type: 'GET',
            url: '/Model/AjaxEnabledService.svc/JobseekerJobApplicants',
            dataType: 'json',
            data: JSON.parse(JSON.stringify({ email: $('#ContentPlaceHolder1_email').text() })),
            contentType: "application/json",
            success: function (response) {
                var list = eval(response.d);
                if (list.length === 0) {
                    $('#jobApplication').append('<h2 style="color: #ccc; text-align: center">No application found</h2>');
                }
                else {
                    $('#JobApplicationTable').DataTable({
                        "data": response.d,
                        "responsive": true,
                        "processing": true,
                        dom: 'Bfrtip',
                        "columns": [
                            {
                                "data": "ApplicationCompanyLogo",
                                render: function (data) {
                                    return '<img src="../'+data+'"/>';

                                }
                            },
                            { "data": "ApplicationTitle" },
                            { "data": "ApplicationCompanyName" },
                            { "data": "ApplicationCVTitle" },
                            { "data": "ApplicationApplyDate" },
                            {
                                "data": "ApplicationLink",
                                render: function (data) {
                                    return '<a href="' + data + '" target="_blank">View Job Details</a>';

                                }

                            }
                        ]
                    });
                }
            },
            failure: function (response) {
                OnError();
                console.log(response.responseText);
            },
            error: function (response) {
                OnError();
                console.log(response.responseText);
            }
        });
    }

});

$(".btn-level-group .btn-level").click(function (event) {
    $(".btn-level-group .btn-level").removeClass('active');
    $(event.target).addClass('active');
    $("#skillData_updatelevel").val($(event.target).val());
});

$(".btn-gender-group .btn-gender").click(function (event) {
    $(".btn-gender-group .btn-gender").removeClass('active');
    $(event.target).addClass('active');
    $("#ContentPlaceHolder1_personalData_gender").val($(event.target).val());
});

jQuery(function ($) {
    FillSkills('#ddl_Updateskill');

    //INSERT delete for skill
    $(document).on('click', '#SkillAddDivInsert', function (e) {
        var skill = document.getElementById('ddl_skill').value;
        var level = document.getElementById('skillData_level').value;

        if (skill === "0") {
            ValidationFunction();
        }
        else {
            $.ajax({
                type: 'POST',
                url: '/Model/AjaxEnabledService.svc/SkillInsert',
                dataType: 'json',
                data: JSON.stringify({ skill: skill, level: level }),
                contentType: "application/json",
                success: function (response) {
                    if (response.d > 0) {
                        SuccessMessageForInsert();
                        $('#SkillDiv').empty();
                        $('#SkillDiv').append('<div id="row-id" class="row"></div>');
                        GetJobseekerList('/Model/AjaxEnabledService.svc/JSSkill', SkillListSuccess);
                        $("#SkillDiv").show();
                        $('#SkillAddDiv').hide();
                        $("#SkillUpdateDiv").hide();
                    }
                    else {
                        ErrorFunction();
                        $('#SkillDiv').empty();
                        GetJobseekerList('/Model/AjaxEnabledService.svc/JSSkill', SkillListSuccess);
                        $("#SkillDiv").show();
                        $('#SkillAddDiv').hide();
                        $("#SkillUpdateDiv").hide();
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
    //delete for skill
    $(document).on('click', '#Skilldetelebutton', function (e) {
        $('#error').remove();
        $('#success').remove();
        var x = $('#RecordId').attr("value");
        $.ajax({
            type: 'POST',
            url: '/Model/AjaxEnabledService.svc/SkillDelete',
            dataType: 'json',
            data: JSON.stringify({ id: $('#RecordId').attr("value") }),
            contentType: "application/json",
            success: function (response) {
                if (response.d > 0) {
                    SuccessMessageForDelete();
                    $('#SkillDiv').empty();
                    GetJobseekerList('/Model/AjaxEnabledService.svc/JSSkill', SkillListSuccess);
                    $("#SkillDiv").show();
                    $('#SkillAddDiv').hide();
                    $("#SkillUpdateDiv").hide();
                    $("#PortfolioModel").modal("hide");
                }
                else {
                    ErrorFunction();
                    $('#SkillDiv').empty();
                    GetJobseekerList('/Model/AjaxEnabledService.svc/JSSkill', SkillListSuccess);
                    $("#SkillDiv").show();
                    $('#SkillAddDiv').hide();
                    $("#SkillUpdateDiv").hide();
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
        e.preventDefault();
    });


    /*GEtting Education ID for updating GET*/
    $(document).on('click', '#EduEditButton[type=button]', function (e) {
        var id = $(this).attr("name");
        $('#currentItem').val(id);
        $("#EducationDiv").hide();
        $("#EducationAddDiv").hide();
        $("#EducationUpdateDiv").show();
        $.ajax({
            type: 'GET',
            url: '/Model/AjaxEnabledService.svc/EducationUpdateDetail',
            dataType: 'json',
            data: JSON.parse(JSON.stringify({ id: id })),
            contentType: "application/json",
            success: function (response) {
                $('#ddl_update_degree').val(response.d.EducationDegree);
                $('#ddl_update_degree_level').val(response.d.EducationDegreeLevel);
                $('#txt_update_institute').val(response.d.EducationInsitute);
                $('#txt_update_completion').val(response.d.EducationCompletion);
                $('#txt_update_result').val(response.d.EducationResult);
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

        e.preventDefault();
    });

    /*GEtting Experience ID for updating GET*/
    $(document).on('click', '#ExpEditButton[type=button]', function (e) {
        var id = $(this).attr("name");
        $('#currentItem').val(id);
        $("#ExperienceDiv").hide();
        $("#ExperienceAddDiv").hide();
        $("#ExperienceUpdateDiv").show();
        $.ajax({
            type: 'GET',
            url: '/Model/AjaxEnabledService.svc/ExperienceUpdateDetail',
            dataType: 'json',
            data: JSON.parse(JSON.stringify({ id: id })),
            contentType: "application/json",
            success: function (response) {
                $('#txtupdatejobtitle').val(response.d.ExperienceJobTitle);
                $('#txtupdatecompany').val(response.d.ExperienceCompany);
                $('#txtupdatestart').val(response.d.ExperienceStart);
                $('#txtupdateend').val(response.d.ExperienceEnd);
                $('#txtupdatedescription').val(response.d.ExperienceDescription);
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

        e.preventDefault();
    });

    /*GEtting portfolio ID for updating GET*/
    $(document).on('click', '#PortEditButton[type=button]', function (e) {
        var id = $(this).attr("name");
        $('#currentItem').val(id);
        $("#PortfolioDiv").hide();
        $("#PortfolioAddDiv").hide();
        $("#PortfolioUpdateDiv").show();
        $.ajax({
            type: 'GET',
            url: '/Model/AjaxEnabledService.svc/PortfolioUpdateDetail',
            dataType: 'json',
            data: JSON.parse(JSON.stringify({ id: id })),
            contentType: "application/json",
            success: function (response) {
                $('#txtupdatetitle').val(response.d.PortfolioTitle);
                $('#txtupdateurl').val(response.d.PortfolioUrl);
                $('#txtupdateportfoliodescription').val(response.d.PortfolioDescription);
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

        e.preventDefault();
    });

    /*GEtting skill ID for updating GET*/
    $(document).on('click', '#SkillEditButton[type=button]', function (e) {
        var id = $(this).attr("name");
        $('#currentItem').val(id);
        $("#SkillDiv").hide();
        $("#SkillUpdateDiv").show();
        $.ajax({
            type: 'GET',
            url: '/Model/AjaxEnabledService.svc/SkillUpdateDetail',
            dataType: 'json',
            data: JSON.parse(JSON.stringify({ id: id })),
            contentType: "application/json",
            success: function (response) {
                var name = response.d.SkillName;
                $('#ddl_Updateskill').val(name);
                $('#skillData_updatelevel').val(response.d.SkillLevel);

                var level = document.getElementById('skillData_updatelevel').value;
                if (level === 'Beginner') {
                    $('.btn-level').removeClass('active');
                    $('.btn-level:nth-child(1)').addClass('active');
                }
                else if (level === 'Intermediate') {
                    $('.btn-level').removeClass('active');
                    $('.btn-level:nth-child(2)').addClass('active');
                }
                else if (level === 'Advanced') {
                    $('.btn-level').removeClass('active');
                    $('.btn-level:nth-child(3)').addClass('active');
                }
                else if (level === 'Expert') {
                    $('.btn-level').removeClass('active');
                    $('.btn-level:nth-child(4)').addClass('active');
                }

                $(".btn-level-group .btn-level").click(function (event) {
                    $(".btn-level-group .btn-level").removeClass('active');
                    $(event.target).addClass('active');
                    $("#skillData_updatelevel").val($(event.target).val());
                });

                ScrollToTop();



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

        e.preventDefault();
    });

    /*GEtting skill ID for updating GET*/
    $(document).on('click', '#CertificateEditButton[type=button]', function (e) {
        var id = $(this).attr("name");
        $('#currentItem').val(id);
        $("#CertificateDiv").hide();
        $("#CertificateAddDiv").hide();
        $("#CertificateUpdateDiv").show();
        $.ajax({
            type: 'GET',
            url: '/Model/AjaxEnabledService.svc/CertificateUpdateDetail',
            dataType: 'json',
            data: JSON.parse(JSON.stringify({ id: id })),
            contentType: "application/json",
            success: function (response) {
                $('#txt_Updatetitle').val(response.d.CertificateTitle);
                $('#txt_Updatecertificate').val(response.d.CertificateDate);
                $('#txt_update_certificate_description').val(response.d.CertificateDescription);

                ScrollToTop();
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

        e.preventDefault();
    });


    //experience update
    $(document).on('click', '#ExperienceUpdateDivUpdate[type=button]', function (e) {
        $('#error').remove();
        $('#success').remove();
        var title = document.getElementById('txtupdatejobtitle').value;
        var company = document.getElementById('txtupdatecompany').value;
        var start = document.getElementById('txtupdatestart').value;
        var end = document.getElementById('txtupdateend').value;
        var description = document.getElementById('txtupdatedescription').value;
        if (title === "" || company === "" || start === "" || description === "") {
            ValidationFunction();
        }
        else {
            $.ajax({
                type: 'POST',
                url: '/Model/AjaxEnabledService.svc/ExperienceUpdate',
                dataType: 'json',
                data: JSON.stringify({ id: JSON.parse(document.getElementById('currentItem').value), title: title, company: company, start: start, end: end, description: description }),
                contentType: "application/json",
                success: function (response) {
                    if (response.d > 0) {
                        $("#ExperienceDiv").empty();
                        SuccessMessageForUpdate();
                        GetJobseekerList('/Model/AjaxEnabledService.svc/JSExperience', ExperienceListSuccess);
                        $("#ExperienceDiv").show();
                        $("#ExperienceAddDiv").hide();
                        $("#ExperienceUpdateDiv").hide();
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

    //portfolio update
    $(document).on('click', '#PortfolioUpdateDivUpdate[type=button]', function (e) {
        $('#error').remove();
        $('#success').remove();
        var title = document.getElementById('txtupdatetitle').value;
        var url = document.getElementById('txtupdateurl').value;
        var description = document.getElementById('txtupdateportfoliodescription').value;
        if (title === "" || url === "" || description === "") {
            ValidationFunction();
        }
        else {
            $.ajax({
                type: 'POST',
                url: '/Model/AjaxEnabledService.svc/PortfolioUpdate',
                dataType: 'json',
                data: JSON.stringify({ id: JSON.parse(document.getElementById('currentItem').value), title: title, url: url, description: description }),
                contentType: "application/json",
                success: function (response) {
                    if (response.d > 0) {
                        $("#PortfolioDiv").empty();
                        SuccessMessageForUpdate();
                        GetJobseekerList('/Model/AjaxEnabledService.svc/JSPortfolio', PortfolioListSuccess);
                        $("#PortfolioDiv").show();
                        $("#PortfolioAddDiv").hide();
                        $("#PortfolioUpdateDiv").hide();
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

    //skill update
    $(document).on('click', '#SkillUpdateDivUpdate[type=button]', function (e) {
        $('#error').remove();
        $('#success').remove();
        var skill = document.getElementById('ddl_Updateskill').value;
        var level = document.getElementById('skillData_updatelevel').value;
        if (skill === "Select your skill") {
            ValidationFunction();
        }
        else {
            $.ajax({
                type: 'POST',
                url: '/Model/AjaxEnabledService.svc/SkillUpdate',
                dataType: 'json',
                data: JSON.stringify({ id: JSON.parse(document.getElementById('currentItem').value), skill: skill, level: level }),
                contentType: "application/json",
                success: function (response) {
                    if (response.d > 0) {
                        $('#SkillDiv').empty();
                        $('#SkillDiv').append('<div id="row-id" class="row"></div>');
                        SuccessMessageForUpdate();
                        GetJobseekerList('/Model/AjaxEnabledService.svc/JSSkill', SkillListSuccess);
                        $("#SkillDiv").show();
                        $('#SkillAddDiv').hide();
                        $("#SkillUpdateDiv").hide();
                    }
                    else {
                        ErrorFunction();
                        $('#SkillDiv').empty();
                        GetJobseekerList('/Model/AjaxEnabledService.svc/JSSkill', SkillListSuccess);
                        $("#SkillDiv").show();
                        $('#SkillAddDiv').hide();
                        $("#SkillUpdateDiv").hide();
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

    //certificate
    $(document).on('click', '#CertificateUpdateDivUpdate[type=button]', function (e) {
        $('#error').remove();
        $('#success').remove();
        var certificate = document.getElementById('txt_Updatetitle').value;
        var date = document.getElementById('txt_Updatecertificate').value;
        var description = document.getElementById('txt_update_certificate_description').value;
        if (certificate === "" || date === "" || description === "") {
            ValidationFunction();
        }
        else {
            $.ajax({
                type: 'POST',
                url: '/Model/AjaxEnabledService.svc/CertificateUpdate',
                dataType: 'json',
                data: JSON.stringify({ id: JSON.parse(document.getElementById('currentItem').value), certificate: certificate, date: date, description: description }),
                contentType: "application/json",
                success: function (response) {
                    if (response.d > 0) {
                        SuccessMessageForUpdate();
                        $('#CertificateDiv').empty();
                        GetJobseekerList('/Model/AjaxEnabledService.svc/JSCertificate', CertificateListSuccess);
                        $("#CertificateDiv").show();
                        $("#CertificateAddDiv").hide();
                        $("#CertificateUpdateDiv").hide();
                    }
                    else {
                        ErrorFunction();
                        $('#CertificateDiv').empty();
                        GetJobseekerList('/Model/AjaxEnabledService.svc/JSCertificate', CertificateListSuccess);
                        $("#CertificateDiv").show();
                        $("#CertificateAddDiv").hide();
                        $("#CertificateUpdateDiv").hide();
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


    //Cancel Buttons
    $(document).on('click', '#EducationAddDivCancel', function (e) {
        ScrollToTop();
        $("#EducationDiv").show();
        $("#EducationAddDiv").hide();
        $("#EducationUpdateDiv").hide();
        e.preventDefault();
    });

    $(document).on('click', '#EducationUpdateDivCancel', function (e) {
        ScrollToTop();
        $("#EducationDiv").show();
        $("#EducationAddDiv").hide();
        $("#EducationUpdateDiv").hide();
        e.preventDefault();
    });

    $(document).on('click', '#EdxperienceAddDivCancel', function (e) {
        ScrollToTop();
        $("#ExperienceDiv").show();
        $("#ExperienceAddDiv").hide();
        $("#ExperienceUpdateDiv").hide();
        e.preventDefault();
    });

    $(document).on('click', '#ExperienceUpdateDivCancel', function (e) {
        ScrollToTop();
        $("#ExperienceDiv").show();
        $("#ExperienceAddDiv").hide();
        $("#ExperienceUpdateDiv").hide();
        e.preventDefault();
    });

    $(document).on('click', '#PortfolioAddDivCancel', function (e) {
        ScrollToTop();
        $("#PortfolioDiv").show();
        $("#PortfolioAddDiv").hide();
        $("#PortfolioUpdateDiv").hide();
        e.preventDefault();
    });

    $(document).on('click', '#PortfolioUpdateDivCancel', function (e) {
        ScrollToTop();
        $("#PortfolioDiv").show();
        $("#PortfolioAddDiv").hide();
        $("#PortfolioUpdateDiv").hide();
        e.preventDefault();
    });

    $(document).on('click', '#SkillAddDivCancel', function (e) {
        ScrollToTop();
        $("#SkillDiv").show();
        $("#SkillAddDiv").hide();
        $("#SkillUpdateDiv").hide();
        e.preventDefault();
    });

    $(document).on('click', '#SkillUpdateDivCancel', function (e) {
        ScrollToTop();
        $("#SkillDiv").show();
        $("#SkillAddDiv").hide();
        $("#SkillUpdateDiv").hide();
        e.preventDefault();
    });

    $(document).on('click', '#CertificateAddDivCancel', function (e) {
        ScrollToTop();
        $("#CertificateDiv").show();
        $("#CertificateAddDiv").hide();
        $("#CertificateUpdateDiv").hide();
        e.preventDefault();
    });

    $(document).on('click', '#CertificateUpdateDivCancel', function (e) {
        ScrollToTop();
        $("#CertificateDiv").show();
        $("#CertificateAddDiv").hide();
        $("#CertificateUpdateDiv").hide();
        e.preventDefault();
    });

    $(document).on('click', '#CVAddCanecl', function (e) {
        ScrollToTop();
        $("#CvDiv").show();
        $("#CvUploadDiv").hide();
        e.preventDefault();

    });


    //opening jquery modal and getting id frim button name attribute
    $(document).on('click', '#ExpRemoveButton', function (e) {
        var id = $(this).attr("name");
        $('#RecordId').val(id);
        $("#experienceModel").modal({ backdrop: false });
        e.preventDefault();
    });

    $(document).on('click', '#EduRemoveButton', function (e) {
        var id = $(this).attr("name");
        $('#RecordId').val(id);
        $("#EducationModel").modal({ backdrop: false });
        e.preventDefault();
    });

    $(document).on('click', '#PortRemoveButton', function (e) {
        var id = $(this).attr("name");
        $('#RecordId').val(id);
        $("#PortfolioModel").modal({ backdrop: false });
        e.preventDefault();
    });

    $(document).on('click', '#SkillRemoveButton', function (e) {
        var id = $(this).attr("name");
        $('#RecordId').val(id);
        $("#SkillModel").modal({ backdrop: false });
        e.preventDefault();
    });

    $(document).on('click', '#CertificateRemoveButton', function (e) {
        var id = $(this).attr("name");
        $('#RecordId').val(id);
        $("#CertificateModel").modal({ backdrop: false });
        e.preventDefault();
    });



    //profile update 
    $(document).on('click', '#ProfileUpdate[type=button]', function (e) {
        var fname = document.getElementById("ContentPlaceHolder1_txtfname").value;
        var lname = document.getElementById("ContentPlaceHolder1_txt_lname").value;
        var date = document.getElementById("ContentPlaceHolder1_txtbd").value;
        var cnic = document.getElementById("ContentPlaceHolder1_txtcnic").value;
        var marital = document.getElementById("ContentPlaceHolder1_ddl_maritalstatus").value;
        var mobile = document.getElementById("ContentPlaceHolder1_txtmobile").value;
        var mobile2 = document.getElementById("ContentPlaceHolder1_txtmobile2").value;
        var address = document.getElementById("ContentPlaceHolder1_txt_address").value;
        var area = document.getElementById("ContentPlaceHolder1_ddl_areaname").value;
        var experience = document.getElementById("ContentPlaceHolder1_ddl_experiencex").value;
        var career = document.getElementById("ContentPlaceHolder1_ddl_careerr").value;
        var gender2 = document.getElementById("ContentPlaceHolder1_personalData_gender").value;
        if (fname === "" || lname === "" || gender2 === "" || date === "" || cnic === "" || marital === "Select marital status" || mobile === "" || mobile2 === "" || address === "" || area === "Select area" || area === "No area found" || experience === "Select experience" || career === "Select career level") {
            ValidationFunction();
        }
        else {
            console.log(gender1);
            $.ajax({
                type: 'POST',
                url: '/Model/AjaxEnabledService.svc/UpdateProfile',
                dataType: 'json',
                data: JSON.stringify({ fname: fname, lname: lname, gender: gender2, date: date, cnic: cnic, marital: marital, mobile: mobile, mobile2: mobile2, address: address, area: area, experience: experience, career: career }),
                contentType: "application/json",
                success: function (response) {
                    if (response.d > 0) {
                        SuccessMessageForUpdate();
                        window.setTimeout(function () { window.location.href = "http://jobs-ace.com/jobseeker/resume.aspx"; }, 4000);

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
        }
        e.preventDefault();
    });



    //hide/show divs Education, Experience, portfolio, Skill, Cv, Certificate
    $(document).on('click', '#addEdu', function (e) {
        $('#txt_other').val('');
        $('#txt_institute').val('');
        $('#completiondate').val('');
        $('#txtresult').val('');

        $("#EducationDiv").hide();
        $("#EducationAddDiv").show();
        $("#EducationUpdateDiv").hide();
        e.preventDefault();
    });
    $(document).on('click', '#addExp', function (e) {
        $('#txtjobtitle').val('');
        $('#txtcompany').val('');
        $('#txtstart').val('');
        $('#txtend').val('');
        $('#txtdescription').val('');

        $("#ExperienceDiv").hide();
        $("#ExperienceAddDiv").show();
        $("#ExperienceUpdateDiv").hide();
        e.preventDefault();
    });
    $(document).on('click', '#addPort', function (e) {
        $('#txttitletxturl').val('');
        $('#txturl').val('');
        $('#txt_portfolio_description').val('');

        $("#PortfolioDiv").hide();
        $("#PortfolioAddDiv").show();
        $("#PortfolioUpdateDiv").hide();
        e.preventDefault();
    });
    $(document).on('click', '#addSkill', function (e) {
        $('#SkillAddDiv').show();
        $('#SkillUpdateDiv').hide();
        $('#SkillDiv').hide();
        FillSkills('#ddl_skill');
        e.preventDefault();
    });
    $(document).on('click', '#addCert', function (e) {
        $('#txt_title').val('');
        $('#txt_Certificate').val('');
        $('#txt_certificate_description').val('');
        $("#CertificateDiv").hide();
        $("#CertificateAddDiv").show();
        $("#CertificateUpdateDiv").hide();
        e.preventDefault();
    });
    $(document).on('click', '#addCV', function (e) {
        $("#CvUploadDiv").show();
        $("#CvDiv").hide();
        e.preventDefault();
    });
});



$(window).on('load', function () {

    $('.loader').fadeOut();

    $('#txtupdatestart').datepicker({
        changeMonth: true,
        changeYear: true
    });
    $('#txtupdateend').datepicker({
        changeMonth: true,
        changeYear: true
    });
    //certificate dated
    $('#txt_Updatecertificate').datepicker({
        changeMonth: true,
        changeYear: true
    });




    $(".btn-level-group .btn-level").click(function (event) {
        $(".btn-level-group .btn-level").removeClass('active');
        $(event.target).addClass('active');
        $("#skillData_level").val($(event.target).val());
    });

    //if (window.location.pathname === "/jobseeker/cv.aspx") {
    //    var result = document.getElementById('ContentPlaceHolder1_HiddenResult').value();

    //}

});