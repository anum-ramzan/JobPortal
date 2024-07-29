<%@ Page Title="" Language="C#" MasterPageFile="~/admin/Admin.Master" AutoEventWireup="true" CodeBehind="viewdetails.aspx.cs" Inherits="AptechNewJobPortal.admin.viewdetails" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
     <!-- Content Header (Page header) -->
            <section class="content-header">
                <h1>Job Seeker
       
            <small></small>
                </h1>
                <ol class="breadcrumb">
                    <li><a href="index.aspx"><i class="fa fa-dashboard"></i>Dashboard</a></li>
                    <li>
                        <asp:LinkButton ID="link_js" runat="server" OnClick="link_js_Click"><i class="fa fa-address-book-o"></i>Job Seeker</asp:LinkButton></li>
                    <li><i class="active"></i>
                        <asp:Label ID="lbl_name" runat="server" CssClass="text-capitalize"></asp:Label>
                        Details</li>
                </ol>
            </section>

            <!-- Main content -->
            <section class="content">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="box">
                            <div class="box-header" style="border-bottom: 2px solid rgba(204, 204, 204, 0.22);">
                                <h3 class="box-title">
                                    <asp:Label ID="lbl_hname" runat="server" CssClass="text-capitalize"></asp:Label>
                                    Details</h3>
                                <div class="pull-right box-tools left-padding">
                                    <asp:LinkButton ID="link_ViewCv" runat="server" CssClass="admin-button">View CV</asp:LinkButton>
                                </div>
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
                                                <b>Jobseeker Id</b>
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
                                    <div class="col-sm-3 col-sm-offset-2">
                                        <b>Gender</b>
                                    </div>
                                    <div class="col-sm-7">
                                        <asp:Label ID="Label3" runat="server" Text="Label"></asp:Label>
                                    </div>
                                <hr />
                                </div>
                                <div class="row">
                                    <div class="col-sm-3 col-sm-offset-2">
                                        <b>Date of Birth</b>
                                    </div>
                                    <div class="col-sm-7">
                                        <asp:Label ID="Label4" runat="server" Text="Label"></asp:Label>
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3 col-sm-offset-2">
                                        <b>CNIC</b>
                                    </div>
                                    <div class="col-sm-7">
                                        <asp:Label ID="Label5" runat="server" Text="Label"></asp:Label>
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3 col-sm-offset-2">
                                        <b>Marital Status</b>
                                    </div>
                                    <div class="col-sm-7">
                                        <asp:Label ID="Label6" runat="server" Text="Label"></asp:Label>
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3 col-sm-offset-2">
                                        <b>Address</b>
                                    </div>
                                    <div class="col-sm-7">
                                        <asp:Label ID="Label7" runat="server" Text="Label"></asp:Label>
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3 col-sm-offset-2">
                                        <b>Contact Number</b>
                                    </div>
                                    <div class="col-sm-7">
                                        <asp:Label ID="Label8" runat="server" Text="Label"></asp:Label>
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3 col-sm-offset-2">
                                        <b>Date of Registration</b>
                                    </div>
                                    <div class="col-sm-7">
                                        <asp:Label ID="Label9" runat="server" Text="Label"></asp:Label>
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3 col-sm-offset-2">
                                        <b>Status</b>
                                    </div>
                                    <div class="col-sm-7">
                                        <asp:Label ID="Label10" runat="server" Text="Label"></asp:Label>
                                    </div>
                                </div>
                            </div>
                            <!-- /.box-body -->
                            <div class="box-footer box-body-margin">
                                <div class="row">
                                    <div class="col-sm-3 col-sm-offset-2">
                                        <h4><b>Change Status:</b></h4>
                                    </div>
                                    <div class="col-sm-7">
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <asp:RadioButtonList ID="rd_status" runat="server" CssClass="radio" RepeatDirection="Horizontal">
                                                    <asp:ListItem Value="Active">Active</asp:ListItem>
                                                    <asp:ListItem Value="Deactive">Deactive</asp:ListItem>
                                                </asp:RadioButtonList>
                                                <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ErrorMessage="Select status to change" ControlToValidate="rd_status" Font-Bold="True" ForeColor="#CC0000" ValidationGroup="js_status" CssClass="radio-status"></asp:RequiredFieldValidator>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-2">
                                                <asp:Button ID="btn_changestatus" CssClass="btn bg-aptech white" runat="server" Text="Change Status" OnClick="btn_changestatus_Click" ValidationGroup="js_status" />
                                            </div>
                                            <div class="col-sm-2">
                                                <asp:Button ID="btn_cancel" CssClass="btn bg-aptech white" runat="server" Text="Cancel" OnClick="btn_cancel_Click" />
                                            </div>
                                        </div>
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
