<%@ Page Title="" Language="C#" MasterPageFile="~/admin/Admin.Master" AutoEventWireup="true" CodeBehind="post-a-job.aspx.cs" Inherits="AptechNewJobPortal.admin.post_a_job" EnableEventValidation="false" ValidateRequest="false" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>Post A Job</h1>
        <ol class="breadcrumb">
            <li><a href="index.aspx">Dashboard</a></li>
            <li class="active">Post A Job</li>
        </ol>
    </section>
    <section id="PostContent" runat="server" class="content container-fluid">
        <input type="hidden" id="Affected" name="Affected" runat="server" />
        <div class="container">
            <div class="row">
                <div class="form-group col-md-6">
                    <label>Company Name</label><span class="required-span">(*)</span>
                    <select id="ddl_companylist" class="form-control"></select>
                    <input type="hidden" name="txt_companylist" id="txt_companylist" runat="server" />

                </div>
                <div class="form-group col-md-6">
                    <label for="job_title">Job Title</label><span class="required-span">(*)</span>
                    <input type="text" name="txtTitle" id="txtTitle" class="form-control" />
                </div>
            </div>
            <div class="row">
                <div class="form-group col-md-6">
                    <label>Job Description</label><span class="required-span">(*)</span>
                    <textarea id="txt_jobdescriptions" class="form-control"></textarea>
                </div>
                <div class="form-group col-md-6">
                    <label>Skill</label><span class="required-span">(*)</span>
                    <textarea id="txt_jobskill" class="form-control"></textarea>
                </div>
            </div>
            <div class="row">
                <div class="form-group col-md-6">
                    <label>City</label><span class="required-span">(*)</span>
                    <select id="ddl_jobCity" class="form-control"></select>
                    <input type="hidden" name="txt_city" id="txt_city" runat="server" />
                </div>
                <div class="form-group col-md-6">
                    <label>Area</label><span class="required-span">(*)</span>
                    <select id="ddl_jobArea" class="form-control"></select>
                    <input type="hidden" name="txt_area" id="txt_area" runat="server" />
                </div>
            </div>
            <div class="row">
                <div class="form-group col-md-6">
                    <label>Career Level</label><span class="required-span">(*)</span>
                    <select id="ddl_Jobcareer" class="form-control"></select>
                    <input type="hidden" name="txt_career" id="txt_career" runat="server" />
                </div>
                <div class="form-group col-md-6">
                    <label>Job Type</label><span class="required-span">(*)</span>
                    <select id="ddl_jobType" class="form-control"></select>
                    <input type="hidden" name="txt_type" id="txt_type" runat="server" />
                </div>
            </div>
            <div class="row">
                <div class="form-group col-md-6">
                    <label>Experience</label><span class="required-span">(*)</span>
                    <select id="ddl_jobExperience" class="form-control"></select>
                    <input type="hidden" name="txt_experience" id="txt_experience" runat="server" />
                </div>
                <div class="form-group col-md-6">
                    <label>Qualification</label><span class="required-span">(*)</span>
                    <select id="ddl_jobQualification" class="form-control"></select>
                    <input type="hidden" name="txt_qualification" id="txt_qualification" runat="server" />
                </div>
            </div>
            <div class="row">
                <div class="form-group col-md-6">
                    <label>Job Category</label><span class="required-span">(*)</span>
                    <select id="ddl_jobCategory" class="form-control"></select>
                    <input type="hidden" name="txt_jobCategory" id="txt_jobCategory" runat="server" />
                </div>
                <div class="form-group col-md-6">
                    <label>Job Sub-Category</label><span class="required-span">(*)</span>
                    <select id="ddl_jobSubCategory" class="form-control"></select>
                    <input type="hidden" name="txt_jobSubCategory" id="txt_jobSubCategory" runat="server" />
                </div>
            </div>
            <div class="row">
                <div class="form-group col-md-6">
                    <label>Job Shift</label><span class="required-span">(*)</span>
                    <select id="ddl_jobShift" class="form-control">
                        <option value="0">Select job shift</option>
                        <option value="First Shift (Day)">First Shift (Day)</option>
                        <option value="Second Shift (Afternoon)">Second Shift (Afternoon)</option>
                        <option value="Third Shift (Night)">Third Shift (Night)</option>
                    </select>
                </div>
                <div class="form-group col-md-6">
                    <label>Gender</label><span class="required-span">(*)</span>
                    <select id="ddl_jobgender" class="form-control">
                        <option value="0">Select gender</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="No Preference">No Preference</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="form-group col-md-6">
                    <label style="padding-bottom: 5px;">Minimum Salary</label><span class="required-span">(*)</span>
                    <input type="text" name="txt_startsalary" id="txt_startsalary" class="form-control" />
                </div>
                <div class="form-group col-md-6">
                    <label style="padding-bottom: 5px;">Maximum Salary</label><span class="required-span">(*)</span>
                    <input type="text" name="txt_endsalary" id="txt_endsalary" class="form-control" />
                </div>
            </div>
            <div class="row">
                <div class="form-group col-md-6">
                    <label for="total_positions">Total Positions</label><span class="required-span">(*)</span>
                    <input type="text" name="txt_ttlposition" id="txt_ttlposition" class="form-control" />
                </div>
                <div class="form-group col-md-6">
                    <label>Apply Before</label><span class="required-span">(*)</span>
                    <input type="text" name="txt_duedate" id="txt_duedate" class="form-control" />
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 text-center">
                    <button type="button" id="btnAddJob" class="btn btn-default same-button">Post</button>
                    <button type="button" id="btnCancelJob" class="btn btn-default same-button">Cancel</button>
                </div>
            </div>
        </div>
    </section>

<%--    <section id="CompanyContentMessage" runat="server" class="content container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <h1 class="no-job-h1 text-center">Please first complete company profile and then post a job.
                    <br />
                    Inorder to complete company porfile <a href="company.aspx">Click Here</a>.</h1>
            </div>
        </div>
    </section>--%>

    <!-- /.content -->
    <div class="modal fade" id="modal-default">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Jobs ACE</h4>
                </div>
                <div class="modal-body">
                    <p id="message" class="text-success box-success text-bold bg-success"></p>
                </div>
                <div class="modal-footer text-center">
                    <button type="button" id="CloseModal" class="btn btn-default pull-left">Close</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
</asp:Content>
