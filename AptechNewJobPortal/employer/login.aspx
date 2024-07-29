<%@ Page Title="" Language="C#" MasterPageFile="~/Index.Master" AutoEventWireup="true" CodeBehind="login.aspx.cs" Inherits="AptechNewJobPortal.employer.login" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <!--Employer-->
    <div class="employer-account">
        <div class="container">
            <div class="row">
                <div class="col-sm-4 col-sm-offset-4 login">
                    <h3 class="text-center text-bold login-h3">
                        <img src="/Images/employer.png" class="login-image" />Employer Login</h3>
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="input-group group-margin">
                                <div class="input-group-addon">
                                    <i class="fa fa-user"></i>
                                </div>
                                <asp:TextBox ID="txt_mail" runat="server" CssClass="form-control" placeholder="Enter email address"></asp:TextBox>
                            </div>
                            <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ErrorMessage="Email address is required" Font-Bold="True" ForeColor="#CC0000" ControlToValidate="txt_mail" ValidationGroup="LoginGroup" CssClass="validationclass1"></asp:RequiredFieldValidator>
                            <asp:RegularExpressionValidator ID="RegularExpressionValidator1" runat="server" ErrorMessage="Invalid email address" Font-Bold="True" ForeColor="#CC0000" ControlToValidate="txt_mail" ValidationExpression="\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*" ValidationGroup="LoginGroup" CssClass="validationclass2"></asp:RegularExpressionValidator>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="input-group custom-group-margin">
                                <div class="input-group-addon">
                                    <i class="fa fa-lock"></i>
                                </div>
                                <asp:TextBox ID="txt_pass" runat="server" CssClass="form-control" TextMode="Password" placeholder="Enter Password"></asp:TextBox>
                            </div>
                            <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ErrorMessage="Password is required" Font-Bold="True" ForeColor="#CC0000" ControlToValidate="txt_pass" ValidationGroup="LoginGroup" CssClass="validationclass1"></asp:RequiredFieldValidator>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12">
                            <asp:Label ID="LoginMsg" runat="server" Style="color: rgb(204, 0, 0); font-weight: 700;"></asp:Label>
                            <a href="../forgot-password.aspx" class="text-bold forgot-link">Forgot Password ?</a>
                            <asp:Button ID="btn_login" runat="server" Text="Login" CssClass="btn btn-block same-button btn-login" OnClick="btn_login_Click" ValidationGroup="LoginGroup" />
                        </div>
                    </div>

                    <hr />

                    <div class="row">
                        <div class="col-sm-12">
                            <h5 class="text-center text-bold">New to Jobs ACE</h5>
                            <asp:Button ID="btn_register_redirect" runat="server" Text="Register Now" CssClass="btn btn-block same-button btn-login login-in-register btn-yellow cancel" OnClick="btn_register_redirect_Click" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</asp:Content>
