<%@ Page Title="" Language="C#" MasterPageFile="~/employer/Employer.Master" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="AptechNewJobPortal.employer.index" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>Dashboard</h1>
        <ol class="breadcrumb">
            <li><a href="../default.aspx">Jobs ACE</a></li>
            <li class="active">Dashboard</li>
        </ol>
    </section>

    <!-- Main content -->
    <section class="content container-fluid">
        <div class="row">
            <div class="col-sm-7">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="small-box text-center gradient1">
                            <i class="fa fa-3x fa-plus-square"></i>
                            <a href="post-a-job.aspx" class="small-box-footer">Post a Job <i class="fa fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="small-box text-center gradient2">
                            <i class="fa fa-3x fa-file"></i>
                            <a href="job-posted.aspx" class="small-box-footer">Job Applications <i class="fa fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-4">
                        <div class="small-box text-center gradient3">
                            <i class="fa fa-3x fa-hourglass"></i>
                            <a href="job-posted.aspx" class="small-box-footer">Job Approved <i class="fa fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="small-box text-center xs-small gradient4">
                            <i class="fa fa-3x fa-hourglass-start"></i>
                            <a href="job-posted.aspx" class="small-box-footer">Opened Job <i class="fa fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="small-box text-center xs-small gradient5">
                            <i class="fa fa-3x fa-hourglass-end"></i>
                            <a href="job-posted.aspx" class="small-box-footer">Job Expired <i class="fa fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-5">
                <div id="company-profile" class="box"></div>
            </div>
        </div>
    </section>
    <!-- /.content -->
</asp:Content>
