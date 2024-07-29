<%@ Page Title="Forgot Password - Jobs ACE" Language="C#" MasterPageFile="~/Index.Master" AutoEventWireup="true" CodeBehind="forgot-password.aspx.cs" Inherits="AptechNewJobPortal.forgot_password" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="forgot-account">
        <div class="container">
            <div class="row">
                <div class="col-sm-4 col-sm-offset-4 forgot">
                    <h3 class="text-center text-bold forgot-h3">Forgot Password</h3>
                    <div class="row">
                        <div class="col-sm-12">
                            <p class="text-bold forgot-p">
                                Enter the email address you use to sign in to Jobs ACE.
                                <br />
                                We will send you an email that will allow you to reset your password.
                            </p>
                            <input id="txtForgotPassword" name="txtForgotPassword" placeholder="Enter Email Address" class="form-control forgot-input" />

                            <input type="button" name="ForgotButton" value="Send email" id="ForgotButton" class="btn btn-block same-button forgot-button" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</asp:Content>
