<%@ Page Title="" Language="C#" MasterPageFile="~/jobseeker/Jobseeker.Master" AutoEventWireup="true" CodeBehind="resume.aspx.cs" Inherits="AptechNewJobPortal.jobseeker.resume" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>Profile</h1>
        <ol class="breadcrumb">
            <li><a href="index.aspx">Dashboard</a></li>
            <li class="active">Profile</li>
        </ol>
    </section>

    <!-- Main content -->
    <section id="PersonalDetails" class="content container-fluid">
        <div class="container">
            <div class="box box-widget widget-user-2">
                <div class="widget-user-header bg-ace-green">
                    <div class="row">
                        <div class="col-sm-4 text-center">
                            <img id="userimage" runat="server" class="profile-user-img img-responsive img-circle" src="" alt="User profile picture" />
                        </div>
                        <div class="col-sm-8">
                            <span id="Span8" runat="server">Name:</span><span id="name" runat="server" class="text-bold"></span><br />
                            <span id="Span10" runat="server">Email</span><span id="email" runat="server" class="text-bold"></span><br />
                            <span id="Span11" runat="server">Date of Birth</span><span id="datebirth" runat="server" class="text-bold"></span><br />
                            <span id="Span12" runat="server">Age</span><span id="age" runat="server" class="text-bold"></span><br />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3"><span id="Span1" runat="server">Address</span></div>
                    <div class="col-sm-3"><span id="address" runat="server" class="text-bold"></span></div>
                    <div class="col-sm-3"><span id="Span2" runat="server">Area/City</span></div>
                    <div class="col-sm-3"><span id="areacity" runat="server" class="text-bold"></span></div>
                </div>
                <div class="row">
                    <div class="col-sm-3"><span id="Span3" runat="server">Gender</span></div>
                    <div class="col-sm-3"><span id="gender" runat="server" class="text-bold"></span></div>
                    <div class="col-sm-3"><span id="Span5" runat="server">Marital Status</span></div>
                    <div class="col-sm-3"><span id="mn" runat="server" class="text-bold"></span></div>
                </div>
                <div class="row">
                    <div class="col-sm-3"><span id="Span4" runat="server">Mobile Number</span></div>
                    <div class="col-sm-3"><span id="pn" runat="server" class="text-bold"></span></div>
                    <div class="col-sm-3"><span id="Span7" runat="server">Phone Number</span></div>
                    <div class="col-sm-3"><span id="experience" runat="server" class="text-bold"></span></div>
                </div>
                <div class="row">
                    <div class="col-sm-3"><span id="Span6" runat="server">Experience</span></div>
                    <div class="col-sm-3"><span id="cl" runat="server" class="text-bold"></span></div>
                    <div class="col-sm-3"><span id="Span9" runat="server">Career Level</span></div>
                    <div class="col-sm-3"><span id="newlevel" runat="server" class="text-bold"></span></div>
                </div>
                <div class="row">
                    <div class="col-sm-3"></div>
                    <div class="col-sm-3"><span id="Span13" runat="server">CNIC</span></div>
                    <div class="col-sm-3"><span id="ms" runat="server" class="text-bold"></span></div>
                </div>
                <div class="row">
                    <div class="col-sm-12 text-center">
                        <a href="edit-profile.aspx" class="btn btn-flat same-button text-bold"><i class="fa fa-edit"></i>Edit </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- /.content -->
</asp:Content>
