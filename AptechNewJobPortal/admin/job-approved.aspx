<%@ Page Title="" Language="C#" MasterPageFile="~/admin/Admin.Master" AutoEventWireup="true" CodeBehind="job-approved.aspx.cs" Inherits="AptechNewJobPortal.admin.job_approved" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>Approved Job
       
            <small></small>
        </h1>
        <ol class="breadcrumb">
            <li><a href="index.aspx"><i class="fa fa-dashboard"></i>Dashboard</a></li>
            <li class="active">Approved Job</li>
        </ol>
    </section>

    <!-- Main content -->
    <section class="content">
        <div class="row">
            <div class="col-xs-12">
                <div class="box">
                    <div class="box-header">
                        <h3 class="box-title">Approved Job List</h3>
                    </div>
                    <!-- /.box-header -->
                    <div class="box-body">
                        <table id="approvedJobTable" class="ui celled table" cellspacing="0" width="100%">
                            <thead>
                                <tr>
                                    <th>Logo</th>
                                    <th>Job Title</th>
                                    <th>Company Name</th>
                                    <th>User Name</th>
                                    <th>Email</th>
                                    <th>Status</th>
                                    <th>Added Date</th>
                                    <th>Apply Date</th>
                                    <th>View Detail</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Logo</th>
                                    <th>Job Title</th>
                                    <th>Company Name</th>
                                    <th>User Name</th>
                                    <th>Email</th>
                                    <th>Status</th>
                                    <th>Added Date</th>
                                    <th>Apply Date</th>
                                    <th>View Detail</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <!-- /.box-body -->
                </div>
                <!-- /.box -->
            </div>
            <!-- /.col -->
        </div>
        <!-- /.row -->
    </section>
    <!-- /.content -->

</asp:Content>
