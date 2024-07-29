<%@ Page Title="" Language="C#" MasterPageFile="~/jobseeker/Jobseeker.Master" AutoEventWireup="true" CodeBehind="portfolio.aspx.cs" Inherits="AptechNewJobPortal.jobseeker.portfolio" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>Portfolio</h1>
        <ol class="breadcrumb">
            <li><a href="index.aspx">Dashboard</a></li>
            <li class="active">Portfolio</li>
        </ol>
    </section>

    <!-- Main content -->
    <section class="content container-fluid">
        <section class="" id="PortfolioDiv">
            <button id="addPort" class="add-new"><i class="fa fa-plus"></i>Add New</button>
        </section>
        <!-- /.section List -->
        <section class="" id="PortfolioAddDiv">
            <div class="row">
                <div class="col-sm-12">
                    <h5 class="text-bold">Add New Portfolio Link</h5>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-sm-offset-3">
                    <div class="form-group">
                        <label>Title </label>
                        <div class="input-group">
                            <div class="input-group-addon">
                                <i class="fa fa-pencil"></i>
                            </div>
                            <input type="text" id="txttitle" name="txttitle" class="form-control" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-sm-offset-3">
                    <div class="form-group">
                        <label>Url </label>
                        <div class="input-group">
                            <div class="input-group-addon">
                                <i class="fa fa-external-link"></i>
                            </div>
                            <input type="text" id="txturl" name="txturl" class="form-control" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-sm-offset-3">
                    <div class="form-group">
                        <label>Description</label>
                        <div class="input-group">
                            <div class="input-group-addon"><i class="fa fa-align-justify"></i></div>
                            <textarea id="txt_portfolio_description" name="txt_portfolio_description" class="form-control" ></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 text-center">
                    <button id="PortfolioAddDivInsert" class="btn btn-flat same-button text-bold"><i class="fa fa-plus"></i>Add</button>
                    <button id="PortfolioAddDivCancel" class="btn btn-flat same-button text-bold"><i class="fa fa-remove"></i>Cancel</button>
                </div>
            </div>
        </section>
        <!-- /.section add -->
        <section class="" id="PortfolioUpdateDiv">
            <div class="row">
                <div class="col-sm-12">
                    <h5 class="text-bold">Update Existing Portfolio Details</h5>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-sm-offset-3">
                    <input type="hidden" id="currentItem" name="current" />
                    <div class="form-group">
                        <label>Title </label>
                        <div class="input-group">
                            <div class="input-group-addon"><i class="fa fa-pencil"></i></div>
                            <input type="text" id="txtupdatetitle" name="txtupdatetitle" class="form-control" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-sm-offset-3">
                    <div class="form-group">
                        <label>Url </label>
                        <div class="input-group">
                            <div class="input-group-addon"><i class="fa fa-external-link"></i></div>
                            <input type="text" id="txtupdateurl" name="txtupdateurl" class="form-control" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-sm-offset-3">
                    <div class="form-group">
                        <label>Description</label>
                        <div class="input-group">
                            <div class="input-group-addon"><i class="fa fa-align-justify"></i></div>
                            <textarea id="txtupdateportfoliodescription" name="txtupdateportfoliodescription" class="form-control" ></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 text-center">
                    <button id="PortfolioUpdateDivUpdate" type="button" class="btn btn-flat same-button text-bold"><i class="fa fa-edit"></i>Edit</button>
                    <button id="PortfolioUpdateDivCancel" class="btn btn-flat same-button text-bold"><i class="fa fa-remove"></i>Cancel</button>
                </div>
            </div>
        </section>
        <!-- /.section edit -->
    </section>
    <!-- /.content -->
    <!-- Modal -->
    <div class="modal fade" id="PortfolioModel" role="dialog">
        <div class="modal-dialog">
            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Delete record?</h4>
                </div>
                <div class="modal-body">
                    <p>Are you sure you want to delete this record?</p>
                    <input type="hidden" name="RecordId" id="RecordId" value="" />
                </div>
                <div class="modal-footer text-center">
                    <button type="button" id="Portfoliodetelebutton" class="btn btn-default same-button" data-dismiss="modal">Delete</button>
                    <button type="button" class="btn btn-default same-button" data-dismiss="modal">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</asp:Content>
