<%@ Page Title="" Language="C#" MasterPageFile="~/admin/Admin.Master" AutoEventWireup="true" CodeBehind="showjobdetails.aspx.cs" Inherits="AptechNewJobPortal.admin.showjobdetails" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>Job Details       
            <small></small>
        </h1>
        <ol class="breadcrumb">
            <li><a href="index.aspx"><i class="fa fa-dashboard"></i>Dashboard</a></li>
            <li class="active">Pending Job</li>
        </ol>
    </section>

    <!-- Main content -->
    <section class="content">
        <div class="box">
            <div class="box-header">
                <h3 class="box-title">Change Job Status</h3>
                <div class="pull-right">
                    <input id="BtnApprove" type="button" value="Approve" class="btn btn-success" />
                    <input id="BtnReject" type="button" value="Reject" class="btn btn-danger" />
                </div>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
                <div class="row">
                    <div class="col-sm-3">Job Title</div>
                    <div class="col-sm-9">
                        <p class="text-bold" runat="server" id="JobTitle">JobTitle  </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3">Location</div>
                    <div class="col-sm-9">
                        <p class="" runat="server" id="JobLocation">Location  </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3">Total Vacanies</div>
                    <div class="col-sm-9">
                        <p class="" runat="server" id="JobVacanies">Vacanies  </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3">Category</div>
                    <div class="col-sm-9">
                        <p class="" runat="server" id="JobCategory">Category  </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3">Apply Date</div>
                    <div class="col-sm-9">
                        <p class="" runat="server" id="JobApply">JobApplyDate  </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3">Experience</div>
                    <div class="col-sm-9">
                        <p class="" runat="server" id="JobExperience">Experience  </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3">Career Level</div>
                    <div class="col-sm-9">
                        <p class="" runat="server" id="JobCareer">CareerLevel  </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3">Job Type</div>
                    <div class="col-sm-9">
                        <p class="" runat="server" id="JobType">JobType  </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3">Job Shift</div>
                    <div class="col-sm-9">
                        <p class="" runat="server" id="JobShift">JobShift  </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3">Salary</div>
                    <div class="col-sm-9">
                        <p class="" runat="server" id="JobSalary">Salary  </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3">Gender</div>
                    <div class="col-sm-9">
                        <p class="" runat="server" id="JobGender">Gender  </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3">Education</div>
                    <div class="col-sm-9">
                        <p class="" runat="server" id="JobEducation">Education  </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3">Industry</div>
                    <div class="col-sm-9">
                        <p class="" runat="server" id="JobIndustry">Industry  </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3">Job Description</div>
                    <div class="col-sm-9">
                        <p class="" runat="server" id="JobDescription">Description  </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3">Skills Required</div>
                    <div class="col-sm-9">
                        <p class="" runat="server" id="JobSkill">Skills  </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3">Company Name</div>
                    <div class="col-sm-9">
                        <p class="" runat="server" id="JobCompany">CompanyName  </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3">Company Description</div>
                    <div class="col-sm-9">
                        <p class="" runat="server" id="JobCompanyDescription">CompanyDescription  </p>
                    </div>
                </div>
            </div>
        </div>
    </section>



</asp:Content>
