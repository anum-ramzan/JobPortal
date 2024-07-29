<%@ Page Title="Jobs ACE - Jobseeker" Language="C#" MasterPageFile="~/jobseeker/Jobseeker.Master" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="AptechNewJobPortal.jobseeker.index" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>Dashboard</h1>
        <ol class="breadcrumb">
            <li><a href="../default.aspx">Job ACE</a></li>
            <li class="active">Dashboard</li>
        </ol>
    </section>

    <!-- Main content -->
    <section class="content container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="small-box text-center gradient1">
                            <i class="fa fa-4x fa-plus-square"></i>
                            <a href="../jobs.aspx" class="small-box-footer">Find a Job <i class="fa fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="small-box text-center gradient2">
                            <i class="fa fa-4x fa-file"></i>
                            <a href="job-application.aspx" class="small-box-footer">My Job Applications <i class="fa fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-4">
                        <div class="small-box xs-small text-center gradient3">
                            <i class="fa fa-4x fa-university"></i>
                            <a href="cv.aspx" class="small-box-footer">Resume <i class="fa fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="small-box xs-small text-center gradient4">
                            <i class="fa fa-4x fa-id-card"></i>
                            <a href="resume.aspx" class="small-box-footer">Profile <i class="fa fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="small-box xs-small text-center gradient5">
                            <i class="fa fa-4x fa-address-card"></i>
                            <a href="profile-picture.aspx" class="small-box-footer">Profile Picture <i class="fa fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- /.content -->
</asp:Content>
