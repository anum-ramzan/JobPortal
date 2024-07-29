<%@ Page Title="" Language="C#" MasterPageFile="~/jobseeker/Jobseeker.Master" AutoEventWireup="true" CodeBehind="cv.aspx.cs" Inherits="AptechNewJobPortal.jobseeker.cv" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="ajaxToolkit" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:ScriptManager ID="ScriptManager1" runat="server"></asp:ScriptManager>

    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>CV</h1>
        <ol class="breadcrumb">
            <li><a href="index.aspx">Dashboard</a></li>
            <li class="active">CV</li>
        </ol>
    </section>
    <!-- Main content -->
    <section class="content container-fluid" id="CvDiv">
        <input type="hidden" id="HiddenResult" runat="server" value="x" />
        <button id="addCV" class="add-new"><i class="fa fa-upload"></i>Upload</button>
        <asp:DataList ID="DataList1" runat="server" DataKeyField="attach_id" DataSourceID="SqlDataSource1" CssClass="table-responsive">
            <ItemTemplate>
                <div class="row">
                    <div class="col-sm-3">
                        <asp:Label ID="attach_titleLabel" runat="server" Text='<%# Eval("attach_title") %>' />
                    </div>
                    <div class="col-sm-2">
                        <asp:Label ID="attach_dateLabel" runat="server" Text='<%# Eval("attach_date") %>' />
                    </div>
                    <div class="col-sm-2">
                        <asp:LinkButton ID="lnkDefault" runat="server" CausesValidation="False" CommandArgument='<%# Eval("attach_id") %>' Text='<%# Eval("default_status") %>' OnClick="lnkDefault_Click" CssClass="default-button btn-success" />
                    </div>
                    <div class="col-sm-2">
                        <asp:UpdatePanel ID="UpdatePanel1" runat="server">
                            <ContentTemplate>
                                <asp:LinkButton ID="lnkDownload" runat="server" CausesValidation="False" CommandArgument='<%# Eval("attach_location") %>' Text="Download" OnClick="lnkDownload_Click" CssClass="download-button" />
                            </ContentTemplate>
                            <Triggers>
                                <asp:PostBackTrigger ControlID="lnkDownload" />
                            </Triggers>
                        </asp:UpdatePanel>
                    </div>
                    <div class="col-sm-2">
                        <asp:LinkButton ID="lnkDelete" runat="server" CausesValidation="False" CommandArgument='<%# Eval("attach_id") %>' Text="Delete" OnClick="lnkDelete_Click" CssClass="delete-button btn-danger" />
                    </div>
                </div>
                <hr />
            </ItemTemplate>
        </asp:DataList>
        <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="Data Source=sv38.dbsqlserver.com,8888;Initial Catalog=JobPortal;User ID=saaptech;Password=jobs123@aptech" ProviderName="System.Data.SqlClient" SelectCommand="sp_select_attachment" SelectCommandType="StoredProcedure">
            <SelectParameters>
                <asp:SessionParameter DefaultValue="" Name="id" SessionField="UserId" Type="Int32" />
            </SelectParameters>
        </asp:SqlDataSource>
    </section>
    <!-- /.list section -->
    <section class="content container-fluid" id="CvUploadDiv" style="min-height: auto; height: auto;">
        <div class="row">
            <div class="col-sm-12">
                <h5 class="text-bold text-center">Uploading CV</h5>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12 text-center">
                <asp:FileUpload ID="FileUpload1" runat="server" CssClass="form-control" />
                <br />
                <asp:Button Text="Upload" runat="server" ID="btnUpload" OnClick="btnUpload_Click" CssClass="btn btn-flat same-button text-bold" />
                <button id="CVAddCanecl" class="btn btn-flat same-button text-bold"><i class="fa fa-remove"></i>Cancel</button>
            </div>
        </div>
    </section>
</asp:Content>
