<%@ Page Title="" Language="C#" MasterPageFile="~/Index.Master" AutoEventWireup="true" CodeBehind="login.aspx.cs" Inherits="AptechNewJobPortal.admin.login" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="login-body-div">
        <div class="container">
            <div class="row">
                <div class="col-sm-4 col-sm-offset-4 login">
                    <h3 class="text-center text-bold login-h3">Member Login</h3>
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="input-group group-margin">
                                <div class="input-group-addon">
                                    <i class="fa fa-user"></i>
                                </div>
                                <asp:TextBox ID="txt_mail" runat="server" CssClass="form-control" placeholder="Enter email address"></asp:TextBox>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="input-group group-margin">
                                <div class="input-group-addon">
                                    <i class="fa fa-lock"></i>
                                </div>
                                <asp:TextBox ID="txt_pass" runat="server" CssClass="form-control" TextMode="Password" placeholder="Enter Password"></asp:TextBox>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12">
                            <asp:Label ID="LoginMsg" runat="server" Style="color: rgb(204, 0, 0); font-weight: 700;"></asp:Label>
                            <asp:Button ID="btn_login" runat="server" Text="Login" CssClass="btn btn-block same-button btn-login" OnClick="btn_login_Click" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</asp:Content>
