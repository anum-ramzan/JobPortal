<%@ Page Title="" Language="C#" MasterPageFile="~/employer/Employer.Master" AutoEventWireup="true" CodeBehind="applicants.aspx.cs" Inherits="AptechNewJobPortal.employer.applicants" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>Applicants</h1>
        <ol class="breadcrumb">
            <li><a href="job-posted.aspx">Job Applications</a></li>
            <li class="active">Applicants</li>
        </ol>
    </section>

    <!-- Main content -->
    <section class="content container-fluid">
        <table id="JobPostedList" class="table table-responsive">
            <thead>
                <tr>
                    <td>Applicant Picture</td>
                    <td>Applicant Name</td>
                    <td>Applicant Email</td>
                    <td>Applicant Mobile</td>
                    <td>Applied On</td>
                    <td>Applicant Skill</td>
                    <td>View Details</td>
                </tr>
            </thead>
        </table>
    </section>
    <!-- /.content -->

</asp:Content>
