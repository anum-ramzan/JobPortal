<%@ Page Title="" Language="C#" MasterPageFile="~/employer/Employer.Master" AutoEventWireup="true" CodeBehind="job-posted.aspx.cs" Inherits="AptechNewJobPortal.employer.job_posted" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>Jobs</h1>
        <ol class="breadcrumb">
            <li><a href="index.aspx">Dashboard</a></li>
            <li class="active">Jobs</li>
        </ol>
    </section>

    <!-- Main content -->
    <section class="content container-fluid">
        <table id="job_list_id" class="table table-responsive">
            <thead>
                <tr>
                    <td>Job Title</td>
                    <td>Job Status</td>
                    <td>Total Vacanies</td>
                    <td>Last Date to Apply</td>
                    <td>View Details</td>
                    <td>View Applicants</td>
                </tr>
            </thead>
        </table>
    </section>
    <!-- /.content -->
</asp:Content>
