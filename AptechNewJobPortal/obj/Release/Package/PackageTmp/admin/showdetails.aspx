<%@ Page Title="" Language="C#" MasterPageFile="~/admin/Admin.Master" AutoEventWireup="true" CodeBehind="showdetails.aspx.cs" Inherits="AptechNewJobPortal.admin.showdetails" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>Job Details
       
            <small></small>
        </h1>
        <ol class="breadcrumb">
            <li><a href="index.aspx"><i class="fa fa-dashboard"></i>Dashboard</a></li>
            <li class="active">Pending Job</li>
        </ol>
    </section>

    <!-- Main content -->
    <section class="content">
        <div class="row">
            <div class="col-xs-12">
                <div class="box">
                    <div class="box-header">
                        <h3 class="box-title">
                            <asp:Label ID="lbl_hname" runat="server" CssClass="text-capitalize"></asp:Label>
                            Details</h3>
                    </div>
                    <!-- /.box-header -->
                    <div class="box-body box-body-margin">
                        <div class="row">
                            <div class="col-sm-2">
                                <asp:Image ID="Image1" runat="server" Width="140" CssClass="post-img" />
                            </div>
                            <div class="col-sm-10">
                                <div class="row">
                                    <div class="col-sm-3">
                                        <b>Employer Id</b>
                                    </div>
                                    <div class="col-sm-9">
                                        <asp:Label ID="Label2" runat="server" Text="Label"></asp:Label>
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3">
                                        <b>Full Name</b>
                                    </div>
                                    <div class="col-sm-9">
                                        <asp:Label ID="Label1" runat="server" Text="fullname"></asp:Label>
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3">
                                        <b>Email</b>
                                    </div>
                                    <div class="col-sm-9">
                                        <asp:Label ID="Label11" runat="server" Text="Label"></asp:Label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div class="row">
                            <div class="col-sm-3">
                                <b>Gender</b>
                            </div>
                            <div class="col-sm-9">
                                <asp:Label ID="Label3" runat="server" Text="Label"></asp:Label>
                            </div>
                        </div>
                        <hr />
                        <div class="row">
                            <div class="col-sm-3">
                                <b>Date of Birth</b>
                            </div>
                            <div class="col-sm-9">
                                <asp:Label ID="Label4" runat="server" Text="Label"></asp:Label>
                            </div>
                        </div>
                        <hr />
                        <div class="row">
                            <div class="col-sm-3">
                                <b>CNIC</b>
                            </div>
                            <div class="col-sm-9">
                                <asp:Label ID="Label5" runat="server" Text="Label"></asp:Label>
                            </div>
                        </div>
                        <hr />
                        <div class="row">
                            <div class="col-sm-3">
                                <b>Marital Status</b>
                            </div>
                            <div class="col-sm-9">
                                <asp:Label ID="Label6" runat="server" Text="Label"></asp:Label>
                            </div>
                        </div>
                        <hr />
                        <div class="row">
                            <div class="col-sm-3">
                                <b>Address</b>
                            </div>
                            <div class="col-sm-9">
                                <asp:Label ID="Label7" runat="server" Text="Label"></asp:Label>
                            </div>
                        </div>
                        <hr />
                        <div class="row">
                            <div class="col-sm-3">
                                <b>Contact Number</b>
                            </div>
                            <div class="col-sm-9">
                                <asp:Label ID="Label8" runat="server" Text="Label"></asp:Label>
                            </div>
                        </div>
                        <hr />
                        <div class="row">
                            <div class="col-sm-3">
                                <b>Date of Registration</b>
                            </div>
                            <div class="col-sm-9">
                                <asp:Label ID="Label9" runat="server" Text="Label"></asp:Label>
                            </div>
                        </div>
                        <hr />
                        <div class="row">
                            <div class="col-sm-3">
                                <b>Status</b>
                            </div>
                            <div class="col-sm-9">
                                <asp:Label ID="Label10" runat="server" Text="Label"></asp:Label>
                            </div>
                        </div>
                    </div>
                    <!-- /.box-body -->
                    <div class="box-footer box-body-margin">
                        <div class="row">
                            <div class="col-sm-3">
                                <h4><b>Change Status:</b></h4>
                            </div>
                            <div class="col-sm-5">
                                <asp:RadioButtonList ID="rd_status" runat="server" RepeatDirection="Vertical" CssClass="no-margin">
                                    <asp:ListItem Value="Active">Active</asp:ListItem>
                                    <asp:ListItem Value="Deactive">Deactive</asp:ListItem>
                                </asp:RadioButtonList>
                                <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ErrorMessage="Select status to change" ControlToValidate="rd_status" Font-Bold="True" ForeColor="#CC0000" InitialValue="" ValidationGroup="js_status"></asp:RequiredFieldValidator>
                            </div>
                            <div class="col-sm-4">
                                <asp:Button ID="btn_changestatus" CssClass="btn" runat="server" Text="Change Status" OnClick="btn_changestatus_Click" ValidationGroup="js_status" />
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /.box -->
            </div>
            <!-- /.col -->
        </div>
        <!-- /.row -->
    </section>
    <!-- /.content -->
</asp:Content>
