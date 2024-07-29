<%@ Page Title="Resumes - Jobs ACE" Language="C#" MasterPageFile="~/employer/Employer.Master" AutoEventWireup="true" CodeBehind="resumes.aspx.cs" Inherits="AptechNewJobPortal.employer.resumes" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>Resumes</h1>
        <ol class="breadcrumb">
            <li><a href="index.aspx">Dashboard</a></li>
            <li class="active">Resumes</li>
        </ol>
    </section>

    <!-- Main content -->
    <section class="content container-fluid">
        <table id="ResumeGridView" class="table table-responsive">
            <!-- AJAX DATA FROM DATABASE-->
            <thead>
                <tr>
                    <td>Image</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Contact</td>
                    <td>City</td>
                    <td>Age</td>
                    <td>Skill</td>
                    <td>View Details</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td colspan="2" class="text-center">
                        <div class="datatable-loader"></div>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td>Image</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Contact</td>
                    <td>City</td>
                    <td>Age</td>
                    <td>Skill</td>
                    <td>View Details</td>
                </tr>
            </tfoot>
        </table>
    </section>
    <!-- /.content -->
</asp:Content>
