<%@ Page Title="" Language="C#" MasterPageFile="~/admin/Admin.Master" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="AptechNewJobPortal.admin.index" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>Dashboard
       
            <small></small>
        </h1>
        <ol class="breadcrumb">
            <li><a href="index.aspx"><i class="fa fa-dashboard"></i>Dashboard</a></li>
            <li class="active"></li>
        </ol>
    </section>

    <!-- Main content -->
    <section class="content">
        <div class="row">
            <div class="col-xs-12">
                <div class="box">
                    <div class="box-header">
                        <h3 class="box-title">Pending Job List</h3>
                    </div>
                    <!-- /.box-header -->
                    <div class="box-body">
                        <div class="row">
                            <div class="col-lg-4 col-xs-6">
                                <!-- small box -->
                                <div class="small-box bg-aqua">
                                    <div class="inner text-center">
                                        <h3 id="jobseeker"></h3>

                                        <p>Jobseeker</p>
                                    </div>
                                    <div class="icon">
                                        <i class="fa fa-user-circle-o"></i>
                                    </div>
                                </div>
                                <!-- small box -->
                                <div class="small-box bg-green">
                                    <div class="inner text-center">
                                        <h3 id="employer">Employer</h3>

                                        <p>Employer</p>
                                    </div>
                                    <div class="icon">
                                        <i class="ion ion-stats-bars"></i>
                                    </div>
                                </div>
                                <!-- small box -->
                                <div class="small-box bg-yellow">
                                    <div class="inner text-center">
                                        <h3 id="jobApproved"></h3>

                                        <p>Job Approved</p>
                                    </div>
                                    <div class="icon">
                                        <i class="fa fa-check"></i>
                                    </div>
                                </div>
                                <!-- small box -->
                                <div class="small-box bg-yellow">
                                    <div class="inner text-center">
                                        <h3 id="jobPending"></h3>

                                        <p>Job Pending</p>
                                    </div>
                                    <div class="icon">
                                        <i class="fa fa-square-o"></i>
                                    </div>
                                </div>
                            </div>
                            <!-- ./col -->

                            <div class="col-lg-8 col-xs-6">
                                <div class="box box-warning">
                                    <div class="box-body">
                                        <!-- THE CALENDAR -->
                                        <div id="calendar"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
