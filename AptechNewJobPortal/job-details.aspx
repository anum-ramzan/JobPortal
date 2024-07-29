<%@ Page Title="" Language="C#" MasterPageFile="~/Index.Master" AutoEventWireup="true" CodeBehind="job-details.aspx.cs" Inherits="AptechNewJobPortal.job_details" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:ScriptManager ID="ScriptManager1" runat="server"></asp:ScriptManager>
    <input type="hidden" id="RightUser" runat="server" />
    <div id="job_detail">
        <div class="container">
            <div class="row">
                <div id="job_message" class="col-sm-12">
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <h1 class="text-bold pull-left" runat="server" id="JobTitle">JobTitle  </h1>
                    <div class="img-div pull-right">
                        <img runat="server" id="JobImage" class="img-responsive" />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <h4 class="job-details-title">Job Summary</h4>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-1"></div>
                            <div class="col-sm-2">
                                <p class="text-bold">Location</p>
                            </div>
                            <div class="col-sm-3">
                                <p class="" runat="server" id="JobLocation">Location  </p>
                            </div>
                            <div class="col-sm-2">
                                <p class="text-bold">Total Vacanies</p>
                            </div>
                            <div class="col-sm-3">
                                <p class="" runat="server" id="JobVacanies">Vacanies  </p>
                            </div>
                        </div>
                        <hr />
                        <div class="row">
                            <div class="col-sm-1"></div>
                            <div class="col-sm-2">
                                <p class="text-bold">Category </p>
                            </div>
                            <div class="col-sm-3">
                                <p class="" runat="server" id="JobCategory">Category  </p>
                            </div>
                            <div class="col-sm-2">
                                <p class="text-bold">Apply Date</p>
                            </div>
                            <div class="col-sm-3">
                                <p class="" runat="server" id="JobApply">JobApplyDate  </p>
                            </div>
                        </div>
                        <hr />
                        <div class="row">
                            <div class="col-sm-1"></div>
                            <div class="col-sm-2">
                                <p class="text-bold">Experience </p>
                            </div>
                            <div class="col-sm-3">
                                <p class="" runat="server" id="JobExperience">Experience  </p>
                            </div>
                            <div class="col-sm-2">
                                <p class="text-bold">Career Level</p>
                            </div>
                            <div class="col-sm-3">
                                <p class="" runat="server" id="JobCareer">CareerLevel  </p>
                            </div>
                        </div>
                        <hr />
                        <div class="row">
                            <div class="col-sm-1"></div>
                            <div class="col-sm-2">
                                <p class="text-bold">Job Type </p>
                            </div>
                            <div class="col-sm-3">
                                <p class="" runat="server" id="JobType">JobType  </p>
                            </div>
                            <div class="col-sm-2">
                                <p class="text-bold">Job Shift</p>
                            </div>
                            <div class="col-sm-3">
                                <p class="" runat="server" id="JobShift">JobShift  </p>
                            </div>
                        </div>
                        <hr />
                        <div class="row">
                            <div class="col-sm-1"></div>
                            <div class="col-sm-2">
                                <p class="text-bold">Salary </p>
                            </div>
                            <div class="col-sm-3">
                                <p class="" runat="server" id="JobSalary">Salary  </p>
                            </div>
                            <div class="col-sm-2">
                                <p class="text-bold">Gender </p>
                            </div>
                            <div class="col-sm-3">
                                <p class="" runat="server" id="JobGender">Gender  </p>
                            </div>
                        </div>
                        <hr />
                        <div class="row">
                            <div class="col-sm-1"></div>
                            <div class="col-sm-2">
                                <p class="text-bold">Education </p>
                            </div>
                            <div class="col-sm-3">
                                <p class="" runat="server" id="JobEducation">Education  </p>
                            </div>
                            <div class="col-sm-2">
                                <p class="text-bold">Industry </p>
                            </div>
                            <div class="col-sm-3">
                                <p class="" runat="server" id="JobIndustry">Industry  </p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <h4 class="job-details-title">Job Description</h4>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12">
                                <p class="" runat="server" id="JobDescription">Description  </p>
                            </div>
                        </div>
                    </div>
                    <h4 class="job-details-title">Skills Required</h4>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12">
                                <p class="" runat="server" id="JobSkill">Skills  </p>
                            </div>
                        </div>
                    </div>
                    <h4 class="job-details-title">Company Information</h4>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-2">
                                <p class="text-bold">Company Name</p>
                            </div>
                            <div class="col-sm-10">
                                <p class="" runat="server" id="JobCompany">CompanyName  </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-2">
                                <p class="text-bold">Company Description</p>
                            </div>
                            <div class="col-sm-10">
                                <p class="" runat="server" id="JobCompanyDescription">CompanyDescription  </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <asp:Button ID="btn_apply_job" runat="server" Text="Apply Now" CssClass="btn btn-block same-button btn-login login-in-register" OnClick="btn_apply_job_Click" />
                </div>
            </div>
        </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="JobModel" role="dialog">
        <div class="modal-dialog">
            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header modal-header-blue">
                    <h4 class="modal-title">Jobs ACE</h4>
                </div>
                <div class="modal-body">
                    <p>Your CV</p>
                    <div id="SavedResume" runat="server">
                        <input type="hidden" id="CVID" runat="server" />
                        <asp:UpdatePanel ID="UpdatePanel1" runat="server">
                            <ContentTemplate>
                                <asp:Button ID="CVButton" runat="server" CssClass="cv-button-style" OnClick="CVButton_Click" />
                            </ContentTemplate>
                            <Triggers>
                                <asp:PostBackTrigger ControlID="CVButton" />
                            </Triggers>
                        </asp:UpdatePanel>
                        <button type="button" class="btn btn-default" id="GetDropdown">Change CV</button>
                    </div>
                    <div id="UploadResume" runat="server">
                        <asp:FileUpload ID="FileUpload1" runat="server" CssClass="form-control" />
                    </div>
                    <select id="ChangeResume" class="form-control">
                    </select>

                </div>
                <div class="modal-footer modal-footer-blue">
                    <asp:Button ID="ApplyForJob" runat="server" CssClass="btn btn-default" OnClick="ApplyForJob_Click" Text="Apply" />
                    <button id="ButtonCancel" type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</asp:Content>
