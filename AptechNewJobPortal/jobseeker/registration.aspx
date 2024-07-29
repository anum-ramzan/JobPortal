<%@ Page Title="" Language="C#" MasterPageFile="~/Index.Master" AutoEventWireup="true" CodeBehind="registration.aspx.cs" Async="true" Inherits="AptechNewJobPortal.jobseeker.registration" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
   
    <div class="success-div" id="success_div">
        <p></p>
    </div>
    <!--Error Div-->
    <div class="jobseeker-account" id="registration">
        <div class="container">
            <div class="row">
                <div class="col-sm-8 col-sm-offset-2 login">
                    <h3 class="text-center text-bold login-h3">
                        <img src="/Images/jobseeker.png" class="login-image" />Job Seeker Registration</h3>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="input-group group-margin">
                                <div class="input-group-addon">
                                    <i class="fa fa-user"></i>
                                </div>
                                <asp:TextBox ID="txt_fname" runat="server" CssClass="form-control input-width" placeholder="Enter your first name"></asp:TextBox>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="input-group group-margin">
                                <div class="input-group-addon">
                                    <i class="fa fa-user"></i>
                                </div>
                                <asp:TextBox ID="txt_lname" runat="server" CssClass="form-control input-width" placeholder="Enter your last name"></asp:TextBox>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="input-group group-margin">
                                <div class="input-group-addon">
                                    <i class="fa fa-address-book"></i>
                                </div>
                                <asp:TextBox ID="txt_mail" runat="server" CssClass="form-control input-width" placeholder="Enter your email address"></asp:TextBox>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="input-group group-margin">
                                <div class="input-group-addon">
                                    <i class="fa fa-phone"></i>
                                </div>
                                <asp:TextBox ID="txt_mobile" runat="server" CssClass="form-control input-width" placeholder="Enter your mobile number"></asp:TextBox>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="input-group group-margin">
                                <div class="input-group-addon">
                                    <i class="fa fa-lock"></i>
                                </div>
                                <asp:TextBox ID="txt_pass" runat="server" CssClass="form-control input-width" TextMode="Password" placeholder="Enter password"></asp:TextBox>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="input-group group-margin">
                                <div class="input-group-addon">
                                    <i class="fa fa-lock"></i>
                                </div>
                                <asp:TextBox ID="txt_retype" runat="server" CssClass="form-control input-width" TextMode="Password" placeholder="Re-enter password"></asp:TextBox>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12">
                            <asp:Button ID="btn_js_register" runat="server" Text="Register" CssClass="btn btn-block same-button btn-login" ValidationGroup="RegisterValidation"/>
                        </div>
                    </div>

                    <hr />

                    <div class="row">
                        <div class="col-sm-12">
                            <h5 class="text-center text-bold">Already have an account?</h5>
                            <asp:Button ID="btn_login" runat="server" Text="Login" CssClass="btn btn-block same-button btn-login login-in-register btn-yellow cancel" OnClick="btn_login_Click" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

</asp:Content>
