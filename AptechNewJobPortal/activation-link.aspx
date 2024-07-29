<%@ Page Title="" Language="C#" MasterPageFile="~/Index.Master" AutoEventWireup="true" CodeBehind="activation-link.aspx.cs" Inherits="AptechNewJobPortal.activation_link" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="resend-account">
        <div class="container">
            <div class="row">
                <div class="col-sm-4 col-sm-offset-4 resend">
                    <h3 class="text-center text-bold resend-h3">Resend Activation Link</h3>
                    <div class="row">
                        <div class="col-sm-12">
                            <p class="text-bold resend-p">
                                Enter the email address you use to sign in to Jobs ACE.
                                <br />
                                We will send you an email that will allow you to reset activate your account.
                            </p>
                            <input id="txtAcctivationLink" name="txtAcctivationLink" placeholder="Enter Email Address" class="form-control resend-input" />

                            <input type="button" name="ResendButton" value="Send email" id="ResendButton" class="btn btn-block same-button resend-button" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</asp:Content>
