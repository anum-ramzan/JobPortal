<%@ Page Title="" Language="C#" MasterPageFile="~/employer/Employer.Master" AutoEventWireup="true" CodeBehind="applicant-details.aspx.cs" Inherits="AptechNewJobPortal.employer.applicant_details" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:ScriptManager ID="ScriptManager1" runat="server"></asp:ScriptManager>
    <section class="content-header">
        <h1 id="TitleHeading" runat="server"></h1>
        <ol class="breadcrumb">
            <li><a href="index.aspx">Dashboard</a></li>
            <li id="SubTitle" runat="server" class="active"></li>
        </ol>
    </section>
    <!-- Main content -->
    <section class="content container-fluid">
        <div class="container">
            <div class="row">
                <div class="col-sm-3">
                    <img id="CandidateImage" runat="server" src="" class="img-circle img-responsive resume-detail-img" />
                    <input type="hidden" id="HiddenResume" runat="server" />
                </div>
                <div class="col-sm-9">
                    <div class="row">
                        <div class="col-sm-8">
                            <h3 id="CandidateName" runat="server"></h3>
                            <h5 id="CandidateMobile" runat="server"><i class="fa fa-mobile-phone"></i></h5>
                            <p id="CandidateAddress" runat="server"></p>
                            <p id="CandidateAge" runat="server"></p>
                            <p id="CandidateSkill" runat="server"></p>
                        </div>
                        <div class="col-sm-4">
                            <asp:UpdatePanel ID="UpdatePanel1" runat="server">
                                <ContentTemplate>
                                    <asp:LinkButton ID="lnkDownload" runat="server" CausesValidation="False" Text="Download Resume" OnClick="lnkDownload_Click" CssClass="download-button employer-resume" />
                                </ContentTemplate>
                                <Triggers>
                                    <asp:PostBackTrigger ControlID="lnkDownload" />
                                </Triggers>
                            </asp:UpdatePanel>
                            <a id="CandidateEmail" runat="server" href="" class="download-button employer-resume"><i class="fa fa-envelope-o"></i>Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h3>Summary</h3>
                    <div id="CandidateSummary"></div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h3>Qualification</h3>
                    <div id="CandidateQualification"></div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h3>Work Experience</h3>
                    <div id="CandidateWorkExperience"></div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h3>Certification</h3>
                    <div id="CandidateCertification"></div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h3>Portfolio</h3>
                    <div id="CandidatePortfolio"></div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h3>Skills</h3>
                    <div id="CandidateSkills">
                        <div class="row"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</asp:Content>
