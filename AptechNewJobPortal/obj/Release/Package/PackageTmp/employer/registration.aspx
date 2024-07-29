<%@ Page Title="" Language="C#" MasterPageFile="~/Index.Master" AutoEventWireup="true" CodeBehind="registration.aspx.cs" Inherits="AptechNewJobPortal.employer.registration" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <!--Employer-->
    <div class="success-div" id="success_div">
        <p></p>
    </div>
    <div class="employer-account" id="registration">
        <div class="container">
            <div class="row">
                <div class="col-sm-8 col-sm-offset-2 login">
                    <h3 class="text-center text-bold login-h3">
                        <img src="/Images/employer.png" class="login-image" />Employer Registration</h3>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="input-group group-margin">
                                <div class="input-group-addon">
                                    <i class="fa fa-user"></i>
                                </div>
                                <input type="text" name="txt_fname" id="txt_fname" class="form-control input-width" placeholder="Enter your first name" autocomplete="off" />
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="input-group group-margin">
                                <div class="input-group-addon">
                                    <i class="fa fa-user"></i>
                                </div>
                                <input type="text" name="txt_lname" id="txt_lname" class="form-control input-width" placeholder="Enter your last name" autocomplete="off" />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="input-group group-margin">
                                <div class="input-group-addon">
                                    <i class="fa fa-address-book"></i>
                                </div>
                                <input type="text" name="txt_mail" id="txt_mail" class="form-control input-width" placeholder="Enter your email address" autocomplete="off" />
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="input-group group-margin">
                                <div class="input-group-addon">
                                    <i class="fa fa-phone"></i>
                                </div>
                                <input type="text" name="txt_mobile" id="txt_mobile" class="form-control input-width" placeholder="Enter your mobile number" autocomplete="off" />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="input-group group-margin">
                                <div class="input-group-addon">
                                    <i class="fa fa-lock"></i>
                                </div>
                                <input type="password" name="txt_pass" id="txt_pass" class="form-control input-width" placeholder="Enter your password" autocomplete="off" />
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="input-group group-margin">
                                <div class="input-group-addon">
                                    <i class="fa fa-lock"></i>
                                </div>
                                <input type="password" name="txt_retype" id="txt_retype" class="form-control input-width" placeholder="Re-enter password" autocomplete="off" />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12">
                            <%--<asp:ValidationSummary ID="ValidationSummary1" runat="server" ForeColor="#CC0000" Font-Bold="True" DisplayMode="BulletList" HeaderText="Errors found in the form" BackColor="#FFA8A8" ValidationGroup="RegisterValidation" />--%>
                            <asp:Button ID="btn_emp_register" runat="server" Text="Register" CssClass="btn btn-block same-button btn-login" ValidationGroup="RegisterValidation"/>
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
