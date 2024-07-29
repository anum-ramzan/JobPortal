<%@ Page Title="" Language="C#" MasterPageFile="~/Index.Master" AutoEventWireup="true" CodeBehind="default.aspx.cs" Inherits="AptechNewJobPortal._default" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <!--Index Slider-->
    <div class="main-slider">
        <div class="container">
            <div class="headings text-center">

                <h1 class="white">Find your Future</h1>

                <h3 class="aptech-green">Its time to do the best work of your life</h3>
                <div class="search-box">
                    <input id="txt_search" type="text" name="txtSearch" placeholder="Search Your Dream Job" autocomplete="off" class="search-job" />
                    <button id="btn_search" class="same-button search-button" type="button">Search</button>
                </div>
            </div>
        </div>
    </div>
    <div class="clearfix"></div>
    <div class="resume-bar pull-left">
        <h1 class="pull-left">Create Your Resume Today &amp; Find Your Dream Jobs !</h1>
        <a href="jobseeker/login.aspx" class="same-button pull-right">Let's Start</a>
    </div>
    <!--Recent Jobs through AJAX-->
    <div class="container">
        <div class="row">
            <!--jobs-->
            <div class="col-sm-8">
                <h2 class='recent-job-h'>Recent jobs</h2>
                <div class="job-box" id="recents">
                    <!--Recent job AJAX CALL-->
                </div>
            </div>
            <!--jobs-->
            <!--advertisement-->
            <div class="col-sm-4">
                <%--<h2 class="headingn hdn">Advertise Now</h2>--%>
                <img src="Images/ad1.jpg" class="img-responsive advert-css" />
                <img src="Images/ad2.png" class="img-responsive advert-css" />
            </div>
            <!--END advertisement-->
        </div>
    </div>
    <!--END latestjob-->

    <!--Counter-->
    <div class="container-fluid counter-bg">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">


                    <div class="thumb-size">
                        <i class="fa fa-thumbs-o-up thumb-style"></i>
                    </div>
                    <h4 class="counter-h4">Doing the right thing,
                        <br />
                        <span class="blue">at the right time.</span>
                    </h4>
                </div>
            </div>
            <div class="row counter-row">
                <div class="col-md-3 col-sm-6 col-xs-12 text-center">
                    <div class="counter-box">

                        <asp:Label ID="Label1" runat="server" CssClass="hidden"></asp:Label>
                        <span id="seeker" class="timer" data-from="0" data-to="" data-speed="1000"></span>
                        <br />
                        <p class="counter-title text-bold"><i class="fa fa-address-book"></i>Job Seeker</p>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-12 text-center">
                    <div class="counter-box">

                        <asp:Label ID="Label2" runat="server" CssClass="hidden"></asp:Label>
                        <span id="employer" class="timer" data-from="0" data-to="" data-speed="1000"></span>
                        <br />
                        <p class="counter-title text-bold"><i class="ion ion-person-stalker"></i>Employers</p>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-12 text-center">
                    <div class="counter-box">

                        <asp:Label ID="Label3" runat="server" CssClass="hidden"></asp:Label>
                        <span id="post" class="timer" data-from="0" data-to="" data-speed="1000"></span>
                        <br />
                        <p class="counter-title text-bold"><i class="ion ion-ios-list"></i>Job Post</p>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-12 text-center">
                    <div class="counter-box">

                        <asp:Label ID="Label4" runat="server" CssClass="hidden"></asp:Label>
                        <span id="apply" class="timer" data-from="0" data-to="" data-speed="1000"></span>
                        <br />
                        <p class="counter-title text-bold"><i class="ion ion-ios-compose"></i>Job Apply</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--END Counter ./-->
    <div class="clearfix"></div>


    <!--Testimonial-->
    <%--<div class="container-fluid">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h2 class="headingnt" style="font-size: 40px !important; text-align: center;">TESTIMONIAL</h2>
                    <p class="text-center">What people are saying about us</p>
                </div>
            </div>
        </div>
    </div>--%>

    <!--END Testimonial ./-->

    <!--company-->

    <div class="container-fluid company-logo">

        <div class="container">
            <div class="col-md-6 col-sm-4 col-xs-12">
                <img src="Images/logo_aptech.png" class="img-responsive img-style" />
            </div>
            <div class="col-md-6 col-sm-4 col-xs-12">
                <img src="Images/logo_placement.png" class="img-responsive img-style" />
            </div>
        </div>

    </div>
    <p class="totop">
        <a href="#top">&#8593;</a>
    </p>
    <!--company-->

    <!--counter script-->
    <script src="/Scripts/counter.js" type="text/javascript"></script>
</asp:Content>
