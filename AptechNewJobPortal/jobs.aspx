<%@ Page Title="Jobs - Jobs ACE" Language="C#" MasterPageFile="~/Index.Master" AutoEventWireup="true" CodeBehind="jobs.aspx.cs" Inherits="AptechNewJobPortal.jobs" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="container-fluid job-page">

        <div class="row job-search-bg">
            <div class="div-search" style="width: 38%; float: right;">
                <h1 class="text-center job-h1">Search for better - Find job in This Portal</h1>
                <div class="col-md-12 text-center">
                    <input id="txtSearch" type="text" name="txtSearch" placeholder="Search with skill" class="custom-input" />
                    <button id="btnSearch" type="button" name="btnSearch" class="btn btn-green btnSearch">Search</button>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <div class="box box-default box-solid">
                        <div class="box-header with-border">
                            <h3 class="box-title">Filter Jobs</h3>
                        </div>
                        <!-- /.box-header -->
                        <div class="box-body" style="">
                            <h5 class="h5_job_category text-bold text-black">Category</h5>
                            <ul id="job_category">
                                <!-- Category in li through AJAX -->
                            </ul>
                            <!--Sub Category-->
                            <div id="subcategory">
                            </div>
                        </div>
                        <!-- /.box-body -->
                    </div>
                    <!-- /.box -->
                </div>
                <div class="col-sm-9">
                    <div class="box thick-border">
                        <div class="box-body">
                            <h5 id="totalFound" class="text-bold"></h5>
                        </div>
                    </div>
                    <div class="box box-default box-solid">
                        <div class="box-body">
                            <div id="JobsGridView">
                                <!-- AJAX DATA FROM DATABASE-->
                            </div>
                            <div class="text-center">
                                <a href="#" id="loadMore" class="btn btn-flat same-button white">Load More ...</a>
                            </div>
                            <p class="totop">
                                <a href="#top">&#8593;</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</asp:Content>
