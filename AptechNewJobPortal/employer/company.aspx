﻿<%@ Page Title="" Language="C#" MasterPageFile="~/employer/Employer.Master" AutoEventWireup="true" CodeBehind="company.aspx.cs" Inherits="AptechNewJobPortal.employer.company" EnableEventValidation="false" ValidateRequest="false" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>Company Profile</h1>
        <ol class="breadcrumb">
            <li><a href="index.aspx">Dashboard</a></li>
            <li class="active">Company Profile</li>
        </ol>
    </section>

    <!-- Main content -->
    <section class="content container-fluid">
        <!-- Company Details-->
        <div id="CompanyDetailsDiv">
            <div class="box-body">
            </div>
        </div>
        <!-- ./company details-->

        <!-- Add Company-->
        <div id="CompanyAddDiv">
            <div class="box-body">
                <br />
                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label>Company Name</label>
                            <div class="input-group">
                                <div class="input-group-addon">
                                    <i class="fa fa-building"></i>
                                </div>
                                <asp:TextBox ID="txt_company" runat="server" CssClass="form-control"></asp:TextBox>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label>Head Name</label>
                            <div class="input-group">
                                <div class="input-group-addon">
                                    <i class="fa fa-user-circle"></i>
                                </div>
                                <asp:TextBox ID="txt_chead" runat="server" CssClass="form-control"></asp:TextBox>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 form-group">
                        <label>Website</label>
                        <div class="input-group">
                            <div class="input-group-addon">
                                <i class="fa fa-globe"></i>
                            </div>
                            <asp:TextBox ID="txt_cwebsite" runat="server" CssClass="form-control"></asp:TextBox>
                        </div>
                    </div>
                    <div class="col-sm-6 form-group">
                        <label>Industry Type</label>
                        <div class="input-group">
                            <div class="input-group-addon">
                                <i class="fa fa-tumblr"></i>
                            </div>
                            <asp:DropDownList ID="ddl_cindustry" runat="server" CssClass="form-control"></asp:DropDownList>
                            <input type="hidden" name="txt_cindustry" id="txt_cindustry" runat="server" />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 form-group">
                        <label>Mobile Number</label>
                        <div class="input-group">
                            <div class="input-group-addon">
                                <i class="fa fa-mobile"></i>
                            </div>
                            <asp:TextBox ID="txt_cmobile" runat="server" CssClass="form-control"></asp:TextBox>
                        </div>
                    </div>
                    <div class="col-sm-6 form-group">
                        <label>Email Address</label>
                        <div class="input-group">
                            <div class="input-group-addon">
                                <i class="fa fa-envelope"></i>
                            </div>
                            <asp:TextBox ID="txt_cmail" runat="server" CssClass="form-control"></asp:TextBox>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 form-group">
                        <label>City</label>
                        <div class="input-group">
                            <div class="input-group-addon">
                                <i class="fa fa-map"></i>
                            </div>
                            <asp:DropDownList ID="ddl_ccity" runat="server" CssClass="form-control select2 select2-hidden-accessible">
                            </asp:DropDownList>
                        </div>
                    </div>
                    <div class="col-sm-6 form-group">
                        <label>Area</label>
                        <div class="input-group">
                            <div class="input-group-addon">
                                <i class="fa fa-map-marker"></i>
                            </div>
                            <asp:DropDownList ID="ddl_carea" runat="server" CssClass="form-control select2 select2-hidden-accessible"></asp:DropDownList>
                            <input type="hidden" name="txt_carea" id="txt_carea" runat="server" />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 form-group">
                        <label>Address</label>
                        <div class="input-group">
                            <div class="input-group-addon">
                                <i class="fa fa-address-book"></i>
                            </div>
                            <asp:TextBox runat="server" ID="txt_caddress" CssClass="form-control company-textarea" TextMode="MultiLine"></asp:TextBox>
                        </div>
                    </div>
                    <div class="col-sm-6 form-group">
                        <label>Company Logo</label>
                        <asp:FileUpload ID="FileUpload1" runat="server" CssClass="form-control" />
                        <%-- <label id="msg"></label>
                    <div class="row">
                        <div class="col-sm-6">
                            <img id="Image1" src="" alt="" style="display: none" />
                            <input type="button" id="btnCrop" value="Crop" class="btn btn-warning" style="display: none" />
                            <input type="button" id="btnRemove" value="Remove" class="btn btn-danger" style="display: none" />
                        </div>
                        <div class="col-sm-6">
                            <canvas id="canvas" height="5" width="5"></canvas>
                        </div>
                    </div>
                    <input type="hidden" name="imgX1" id="imgX1" />
                    <input type="hidden" name="imgY1" id="imgY1" />
                    <input type="hidden" name="imgWidth" id="imgWidth" />
                    <input type="hidden" name="imgHeight" id="imgHeight" />
                    <input type="hidden" name="imgCropped" id="imgCropped" runat="server" />--%>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 form-group">
                        <label>Company Description</label>
                        <asp:TextBox runat="server" ID="txt_cdescription" CssClass="form-control" TextMode="MultiLine"></asp:TextBox>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 text-center">
                        <asp:Button ID="btn_UpdateCompanyAdd" runat="server" Text="Save" CssClass="same-button" OnClick="btn_UpdateCompanyAdd_Click" />
                        <asp:Button ID="btn_UpdateCompanyClose" runat="server" Text="Cancel" CssClass="same-button" OnClick="btn_UpdateCompanyClose_Click" />
                    </div>
                </div>
            </div>
        </div>
        <!-- ./add company-->
    </section>
    <!-- /.content -->
</asp:Content>
