
var gender1 = '';


function ScrollToTop() {
    $('html , body').animate({ scrollTop: 0 }, 700);
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

function ErrorFunction() {
    $('html , body').animate({ scrollTop: 0 }, 700);
    $('.content-header').after('<p id="error" class="bg-danger text-danger">Something went wrong</p>');
    setTimeout(function () { $("#error").hide('blind', {}, 500); }, 5000);
}

function ValidationFunction() {
    $('html , body').animate({ scrollTop: 0 }, 700);
    $('.content-header').after('<p id="error" class="bg-danger text-danger">All fields are required</p>');
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

function GetListFunction(url, successFunction) {
    $.ajax({
        type: 'GET',
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

function GetListFunctionResume(url, successFunction, paramter) {
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: url,
        data: JSON.parse(JSON.stringify({ email: decodeURIComponent(paramter) })),
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

function CompanySuccess(response) {
    var list = eval(response.d);
    if (list.length === 0) {
        var attach = "<div class='row'><div class='col-sm-12'><h1 class='no-job-h1 text-center'>No record found !</h1></div></div>";
        $('#CompanyAddDiv').show();
        $('#CompanyDetailsDiv').remove();
    } else {
        var items = "";
        $.each(list, function (i, item) {
            var rows =
                '<div class="row"> <div class="col-sm-3 text-center"> <img src="../' + item.CompanyLogo + '" class="company-logo" /> </div> <div class="col-sm-9"> <h2>' + item.CompanyName + '</h2> <p>' + item.CompanyIndustry + '</p> <p>' + item.CompanyAddress + '</p> </div> </div> <hr /> <div class="row"> <div class="col-sm-12"> <h3>About Us</h3> <p>' + item.CompanyDetails + '</p> </div> </div><hr/> <div class="row"> <div class="col-sm-3 text-bold">Head/CEO/Manager Name</div> <div class="col-sm-3">' + item.CompanyHeadName + '</div> <div class="col-sm-3  text-bold">Website</div> <div class="col-sm-3"><a href="//' + item.CompanyWebsite + '" target="_blank">' + item.CompanyWebsite + '</a></div></div><hr/>  <div class="row"> <div class="col-sm-3 text-bold">Email</div> <div class="col-sm-3">' + item.CompanyEmail + '</div> <div class="col-sm-3 text-bold">Phone</div> <div class="col-sm-3">' + item.CompanyPhone + '</div> </div> <hr/>';
            $('#CompanyDetailsDiv .box-body').append(rows);
            $('#CompanyDetailsDiv').show();
            $('#CompanyAddDiv').hide();
            $('#CompanyAddDiv').remove();

        });
    }
}

function JobListSuccess(response) {
    var list = eval(response.d);
    if (list.length === 0) {
        var attach = "<div class='row'><div class='col-sm-12'><h1 class='no-job-h1 text-center'>No record found !</h1></div></div>";
        $('#job_list_id').append(attach);
    } else {
        var items = "";
        $.each(list, function (i, item) {
            var rows =
               '<div class="row"> <div class="col-sm-9"> <div class="row"> <div class="col-sm-12"> <h4>' + item.JobTitle + '</h4> </div> </div> <div class="row"> <div class="col-sm-4"> <dl> <dt>Job Status</dt> <dd>' + item.JobStatus + '</dd> </dl> </div> <div class="col-sm-4"> <dl> <dt>Last Date</dt> <dd>' + item.JobApplyDate + '</dd> </dl> </div> <div class="col-sm-4"> <dl> <dt>Positions</dt> <dd>' + item.JobPosition + '</dd> </dl> </div> </div> </div> <div class="col-sm-3"> <br /><input type="button" name="' + item.JobId + '" value="View Applicant" class="btn btn-default same-button" /> <br /><br /> <a class="btn btn-default same-button" href="/job-details.aspx?JobId=' + item.JobId + '&JobName=' + item.JobTitle + '">View Details</a> </div> </div> <hr />';
            $('#job_list_id').append(rows);

        });
    }
}

function SummarySuccess(response) {
    var list = eval(response.d);
    if (list.SummaryDetails === null) {
        var data = "<div class='row'><div class='col-sm-12'><h1 class='no-job-h1 text-center'>No Summary found!</h1></div></div>";
        $('#CandidateSummary').append(data);
    } else {
        var rows = '<div class="row"> <div class="col-sm-12"><p>' + response.d.SummaryDetails + '</p></div> </div>';
        $('#CandidateSummary').append(rows);
    }
}

function QualificationSuccess(response) {
    var list = eval(response.d);
    if (list.length === 0) {
        var data = "<div class='row'><div class='col-sm-12'><h1 class='no-job-h1 text-center'>No Education found!</h1></div></div>";
        $('#CandidateQualification').append(data);
    } else {
        $.each(list, function (i, item) {
            var rows = '<div class="row"> <div class="col-sm-12"><h5 class="text-bold capitalize">' + item.EducationDegreeLevel + "" + item.EducationOther + '<small class="capitalize"> - ' + item.EducationInsitute + '</small></h5><p>' + item.EducationCompletion + '</p></div> </div>';
            $('#CandidateQualification').append(rows);
        });
    }
}

function ExperienceSuccess(response) {
    var list = eval(response.d);
    if (list.length === 0) {
        var data = "<div class='row'><div class='col-sm-12'><h1 class='no-job-h1 text-center'>No Experience found!</h1></div></div>";
        $('#CandidateWorkExperience').append(data);
    } else {
        $.each(list, function (i, item) {
            var telly = '';
            if (item.ExperienceEnd === 'Jan 1900') {
                telly = item.ExperienceStart + ' - Working';
            }
            else {
                telly = item.ExperienceStart + ' - ' + item.ExperienceEnd;
            }
            var rows = '<div class="row"> <div class="col-sm-12"><h5 class="text-bold capitalize">' + item.ExperienceJobTitle + '</h5><h6 class="capitalize">' + item.ExperienceCompany + '</h6><p>' + telly + '</p><p>Responsibilities :<br/>' + item.ExperienceDescription + '</p></div> </div>';
            $('#CandidateWorkExperience').append(rows);
        });
    }
}

function CertificationSuccess(response) {
    var list = eval(response.d);
    if (list.length === 0) {
        var data = "<div class='row'><div class='col-sm-12'><h1 class='no-job-h1 text-center'>No Certification found!</h1></div></div>";
        $('#CandidateCertification').append(data);
    } else {
        $.each(list, function (i, item) {
            var rows = '<div class="row"> <div class="col-sm-12"><ul><li><h5 class="capitalize">' + item.CertificateTitle + ' - <small class="text-transform-unset">' + item.CertificateDate + '</small></h5><p>' + item.CertificateDescription + '</p></li></ul></div></div>';
            $('#CandidateCertification').append(rows);
        });
    }
}

function PortfolioSuccess(response) {
    var list = eval(response.d);
    if (list.length === 0) {
        var data = "<div class='row'><div class='col-sm-12'><h1 class='no-job-h1 text-center'>No Portfolio found!</h1></div></div>";
        $('#CandidatePortfolio').append(data);
    } else {
        $.each(list, function (i, item) {
            var rows = '<div class="row"> <div class="col-sm-12"><ul><li><h5 class="capitalize">' + item.PortfolioTitle + ' - <small class="text-transform-unset"><a href="//' + item.PortfolioUrl + '" target="_blank">' + item.PortfolioUrl + '</a></small></h5><p>' + item.PortfolioDescription + '</p></li></ul></div></div>';
            $('#CandidatePortfolio').append(rows);
        });
    }


}

function SkillSuccess(response) {
    var list = eval(response.d);
    if (list.length === 0) {
        var data = "<div class='row'><div class='col-sm-12'><h1 class='no-job-h1 text-center'>No Skill found!</h1></div></div>";
        $('#CandidateSkills').append(data);
    } else {
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
            var rows =
                "<input type='text' class='knob' value='" + percent + "%' data-width='90' data-height='90' data-fgcolor='" + color + "'  data-readonly='true' readonly='readonly' style='width: 49px;height: 30px;position: absolute;vertical-align: middle;margin-top: 30px;margin-left: -69px;border: 0px;background: none;font-style: normal;font-variant: normal;font-weight: bold;font-stretch: normal;font-size: 18px;line-height: normal;font-family: Arial;text-align: center;color: #b50005 !important;padding: 0px;-webkit-appearance: none;'><div class='knob-label'>" + item.SkillName + "</div></div>";
            $('#CandidateSkills .row').append("<div class='col-sm-2 text-center'>" + rows + "</div>");
            $(".knob").knob();
        });
    }
}


jQuery(document).ready(function () {

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

    var _URL = window.URL || window.webkitURL;


    $('#CompanyAddDiv').hide();
    $('#CompanyDetailsDiv').hide();

    //text editor
    $('#ContentPlaceHolder1_txt_cdescription').summernote();
    $('#txt_jobdescriptions').summernote();
    $('#txt_jobskill').summernote();
    $('.note-table').remove();
    $('.note-insert').remove();
    $('.note-table').remove();
    $('.note-insert').remove();

    //post job elements
    $('#txt_duedate').datepicker();
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
        };
    }

    //preview image and cropping
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
            };
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
    }

    //
    $('#ContentPlaceHolder1_txtbd').datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: "-100:+0"
    });

    $(".btn-gender-group .btn-gender").click(function (event) {
        $(".btn-gender-group .btn-gender").removeClass('active');
        $(event.target).addClass('active');
        $("#personalData_gender").val($(event.target).val());
    });


    //area dd
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

    $(document).on('change', '#ContentPlaceHolder1_ddl_carea', function () {
        var area = document.getElementById("ContentPlaceHolder1_ddl_carea").value;
        $('#ContentPlaceHolder1_txt_carea').val(area);
    });

    $(document).on('change', '#ContentPlaceHolder1_ddl_cindustry', function () {
        var area = document.getElementById("ContentPlaceHolder1_ddl_cindustry").value;
        $('#ContentPlaceHolder1_txt_cindustry').val(area);
    });

    City('#ContentPlaceHolder1_ddl_ccity');
    City('#ddl_jobCity');
    Qualification('#ddl_jobQualification');
    ExperienceYears('#ddl_jobExperience');
    CareerLevel('#ddl_Jobcareer');
    JobType('#ddl_jobType');
    JobCategory('#ddl_jobCategory');
    City('#ContentPlaceHolder1_ddl_cityname');
    ExperienceYears('#ContentPlaceHolder1_ddl_experiencex');
    CareerLevel('#ContentPlaceHolder1_ddl_careerr');



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


    $('#ProfileCancel').on('click', function (e) {
        window.location.href = "http://jobs-ace.com/employer/profile.aspx";
        e.preventDefault();
    });

    $('#CloseModal').click(function () {
        window.location.href = "/employer/job-posted.aspx";
    });

    $('#btnCancelJob').click(function () {
        window.location.href = "/employer/index.aspx";
    });


    GetListFunction('/Model/AjaxEnabledService.svc/EmployerComapanyDetails', CompanySuccess);


    $("input[name='ctl00$ContentPlaceHolder1$rd_gender']:radio").change(function () {
        if ($(this).val() === 'Female') {
            gender1 = 'Female';
        }
        else if ($(this).val() === 'Male') {
            gender1 = 'Male';
        }
        else {
            gender1 = '';
        }
        console.log(gender1);
    });

    // resumes list
    $(function () {
        $.ajax({
            type: 'GET',
            url: '/Model/AjaxEnabledService.svc/Resumes',
            dataType: 'json',
            data: {},
            contentType: "application/json",
            success: function (response) {
                var list = eval(response.d);
                $('#totalResumeFound').html('About  - ' + list.length + ' results');
                if (list.length === 0) {
                    $('#ResumeGridView').append('<h1 class="zero-record text-center">No Resume Found</h1>');
                }
                else {
                    $('#ResumeGridView').DataTable({
                        "data": response.d,
                        "responsive": true,
                        "processing": true,
                        dom: 'Bfrtip',
                        buttons: [
                            {
                                extend: 'copyHtml5',
                                text: '<i class="fa fa-files-o"></i>',
                                titleAttr: 'Copy'
                            },
                            {
                                extend: 'csvHtml5',
                                text: '<i class="fa fa-file-text-o"></i>',
                                titleAttr: 'CSV'
                            },
                            {
                                extend: 'excelHtml5',
                                text: '<i class="fa fa-file-excel-o"></i>',
                                titleAttr: 'Excel'
                            },
                            {
                                extend: 'pdfHtml5',
                                text: '<i class="fa fa-file-pdf-o"></i>',
                                titleAttr: 'PDF'
                            }
                        ],
                        "columns": [
                            {
                                "data": "UserImage",
                                render: function (data) {
                                    return '<img src="' + data + '">';
                                }
                            },
                            { "data": "UserName" },
                            { "data": "UserEmail" },
                            { "data": "UserMobile" },
                            { "data": "UserLocation" },
                            { "data": "UserAge" },
                            { "data": "UserSkill" },
                            {
                                "data": "UserEmail",
                                "render": function (data) {
                                    return '<a href="/employer/resume-details.aspx?email=' + data + '" target="_blank">View Detail</a>';

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
    });

    //job listing
    $(function () {
        $.ajax({
            type: 'GET',
            url: '/Model/AjaxEnabledService.svc/EmployerJob',
            dataType: 'json',
            data: {},
            contentType: "application/json",
            success: function (response) {
                var list = eval(response.d);
                if (list.length === 0) {
                    $('#job_list_id').append('<h1 class="zero-record text-center">No Job Posted</h1>');
                }
                else {
                    $('#job_list_id').DataTable({
                        "data": response.d,
                        "responsive": true,
                        "processing": true,
                        dom: 'Bfrtip',
                        buttons: [
                            {
                                extend: 'copyHtml5',
                                text: '<i class="fa fa-files-o"></i>',
                                titleAttr: 'Copy'
                            },
                            {
                                extend: 'csvHtml5',
                                text: '<i class="fa fa-file-text-o"></i>',
                                titleAttr: 'CSV'
                            },
                            {
                                extend: 'excelHtml5',
                                text: '<i class="fa fa-file-excel-o"></i>',
                                titleAttr: 'Excel'
                            },
                            {
                                extend: 'pdfHtml5',
                                text: '<i class="fa fa-file-pdf-o"></i>',
                                titleAttr: 'PDF'
                            }
                        ],
                        "columns": [

                            { "data": "JobTitle" },
                            { "data": "JobStatus" },
                            { "data": "JobPosition" },
                            { "data": "JobApplyDate" },
                            {
                                "data": "JobURL",
                                "render": function (data) {
                                    return '<a href="/job-details.aspx?' + data + '" target="_blank">View Detail</a>';

                                }
                            },
                            {
                                "data": "JobURL",
                                "render": function (data) {
                                    return '<a href="/employer/applicants.aspx?' + data + '" target="_blank">View Applicants</a>';

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
    });

    //job applicant list
    $(function () {
        $.ajax({
            type: 'GET',
            url: '/Model/AjaxEnabledService.svc/EmployerJobApplicants',
            dataType: 'json',
            data: JSON.parse(JSON.stringify({ id: GetParameterValues('JobId') })),
            contentType: "application/json",
            success: function (response) {
                var list = eval(response.d);
                if (list.length === 0) {
                    $('#JobPostedList').append('<h1 class="zero-record text-center">No Resume Found</h1>');
                }
                else {
                    $('#JobPostedList').DataTable({
                        "data": response.d,
                        "responsive": true,
                        "processing": true,
                        dom: 'Bfrtip',
                        buttons: [
                            {
                                extend: 'copyHtml5',
                                text: '<i class="fa fa-files-o"></i>',
                                titleAttr: 'Copy'
                            },
                            {
                                extend: 'csvHtml5',
                                text: '<i class="fa fa-file-text-o"></i>',
                                titleAttr: 'CSV'
                            },
                            {
                                extend: 'excelHtml5',
                                text: '<i class="fa fa-file-excel-o"></i>',
                                titleAttr: 'Excel'
                            },
                            {
                                extend: 'pdfHtml5',
                                text: '<i class="fa fa-file-pdf-o"></i>',
                                titleAttr: 'PDF'
                            }
                        ],
                        "columns": [
                            {
                                "data": "UserImage",
                                render: function (data) {
                                    return '<img src="' + data + '">';
                                }
                            },
                            { "data": "UserName" },
                            { "data": "UserEmail" },
                            { "data": "UserMobile" },
                            { "data": "DateApplying" },
                            { "data": "UserSkill" },
                            {
                                "data": "UserEmail",
                                "render": function (data) {
                                    return '<a href="/employer/resume-details.aspx?email=' + data + '" target="_blank">View Detail</a>';

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
    });


    //value checking
    if (window.location.pathname === "/employer/resume-details.aspx") {
        var x = $('#ContentPlaceHolder1_HiddenResume').val();
        if (x === "001") {
            $('#ContentPlaceHolder1_lnkDownload').remove();
        }

        var email = GetParameterValues('email');
        GetListFunctionResume('/Model/AjaxEnabledService.svc/SummaryDetail', SummarySuccess, email);
        GetListFunctionResume('/Model/AjaxEnabledService.svc/ResumeEducation', QualificationSuccess, email);
        GetListFunctionResume('/Model/AjaxEnabledService.svc/ResumeExperience', ExperienceSuccess, email);
        GetListFunctionResume('/Model/AjaxEnabledService.svc/ResumeCertificate', CertificationSuccess, email);
        GetListFunctionResume('/Model/AjaxEnabledService.svc/ResumePortfolio', PortfolioSuccess, email);
        GetListFunctionResume('/Model/AjaxEnabledService.svc/ResumeSkill', SkillSuccess, email);
    }
});


jQuery(function ($) {

    //inserting job
    $(document).on('click', '#btnAddJob[type=button]', function (e) {
        var cid = document.getElementById('ContentPlaceHolder1_HiddenCompany').value;
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
                        $("#modal-default").modal({
                            backdrop: false
                        });
                        $('#message').html('Right now, your job post is pending. A confirmation email will be sent to you as soon your job is approved.');
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
            $.ajax({
                type: 'POST',
                url: '/Model/AjaxEnabledService.svc/UpdateProfile',
                dataType: 'json',
                data: JSON.stringify({ fname: fname, lname: lname, gender: gender2, date: date, cnic: cnic, marital: marital, mobile: mobile, mobile2: mobile2, address: address, area: area, experience: experience, career: career }),
                contentType: "application/json",
                success: function (response) {
                    if (response.d > 0) {
                        SuccessMessageForUpdate();
                        window.setTimeout(function () { window.location.href = "http://jobs-ace.com/employer/profile.aspx"; }, 4000);

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
});


$(window).on('load', function () {

    if (window.location.pathname === "/edit-profile.aspx") {
        var hidden1 = document.getElementById('ContentPlaceHolder1_experienceId').value;
        $('#ContentPlaceHolder1_ddl_experiencex').val(hidden1);

    }


});