<%@ Page Title="" Language="C#" MasterPageFile="~/Index.Master" AutoEventWireup="true" CodeBehind="accountrecovery.aspx.cs" Inherits="AptechNewJobPortal.accountrecovery" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="change-account">
        <div class="container">
            <div class="row">
                <div class="col-sm-4 col-sm-offset-4 change">
                    <h3 class="text-center text-bold change-h3">Change Password</h3>
                    <input type="hidden" id="PasswordStatus" runat="server"/>
                    <div class="row">
                        <div class="col-sm-12">
                            <p class="text-bold change-p">
                                Enter the 6-digit code send to you through email
                            </p>
                            <input id="txtMatchCodePassword" name="txtMatchCodePassword" placeholder="Enter 6-digit Code" class="form-control change-input" maxlength="6" />

                            <input type="button" name="MatchCode" value="Match Code" id="MatchCode" class="btn btn-block same-button change-button" />

                            <asp:Panel ID="PasswordPanel" runat="server">
                                <input id="txtChangePassword" name="txtChangePassword" type="password" placeholder="Enter password" class="form-control change-input" runat="server" />
                                <input id="txtCompareChangePassword" name="txtCompareChangePassword" type="password" placeholder="Re-type password" class="form-control change-input" />
                                
                                <label id="ChangeMessage" runat="server" class="text-info"></label>
                                
                                <asp:Button ID="ChangePasswordButton" runat="server" Text="Change Password" CssClass="btn btn-block same-button change-button" OnClick="ChangePasswordButton_Click" />
                                
                            </asp:Panel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</asp:Content>
