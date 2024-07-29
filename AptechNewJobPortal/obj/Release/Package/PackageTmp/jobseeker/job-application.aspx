<%@ Page Title="" Language="C#" MasterPageFile="~/jobseeker/Jobseeker.Master" AutoEventWireup="true" CodeBehind="job-application.aspx.cs" Inherits="AptechNewJobPortal.jobseeker.job_application" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>Job Application</h1>
        <ol class="breadcrumb">
            <li><a href="index.aspx">Dashboard</a></li>
            <li class="active">Job Application</li>
        </ol>
    </section>

    <!-- Main content -->
    <section id="jobApplication" class="content container-fluid">
        <p class="hidden" id="email" runat="server"></p>
        <table id="JobApplicationTable" class="table">
            <thead>
                <tr>
                    <th>CompanyLogo</th>
                    <th>Job Title</th>
                    <th>Company Name</th>
                    <th>CV Name</th>
                    <th>Apply Date</th>
                    <th>View Job Detail</th>
                </tr>
            </thead>
            <tfoot>
                <tr>
                    <th>CompanyLogo</th>
                    <th>Job Title</th>
                    <th>Company Name</th>
                    <th>CV Name</th>
                    <th>Apply Date</th>
                    <th>View Job Detail</th>
                </tr>
            </tfoot>
        </table>
    </section>
    <!-- /.content -->
</asp:Content>
