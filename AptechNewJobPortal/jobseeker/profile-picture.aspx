<%@ Page Title="" Language="C#" MasterPageFile="~/jobseeker/Jobseeker.Master" AutoEventWireup="true" CodeBehind="profile-picture.aspx.cs" Inherits="AptechNewJobPortal.jobseeker.profile_picture" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>Profile</h1>
        <ol class="breadcrumb">
            <li><a href="profile.aspx">Profile</a></li>
            <li class="active">Edit profile picture</li>
        </ol>
    </section>

    <!-- Main content -->
    <section class="content container-fluid">
        <div class="container">
            <div id="UserImage" class="row">
                <div class="col-sm-6 col-sm-offset-3 text-center">
                    <img id="userimage" runat="server" class="profile-user-img img-responsive img-circle" src="" alt="User profile picture" />
                    <div class="browse-wrap">
                        <div class="title">Choose image to upload</div>
                        <asp:FileUpload ID="FileUploadProfile" runat="server" CssClass="form-control upload" title="Choose image to upload"/>
                    </div>
                    <span class="upload-path"></span>
                </div>
            </div>

            <div id="UploadedImage" class="row">
                <div class="col-sm-8">
                    <img id="previewImage" src="" />

                    <input type="hidden" name="imgX1" id="imgX1" />
                    <input type="hidden" name="imgY1" id="imgY1" />
                    <input type="hidden" name="imgWidth" id="imgWidth" />
                    <input type="hidden" name="imgHeight" id="imgHeight" />
                    <input type="hidden" name="imgCropped" id="imgCropped" />
                </div>
                <div class="col-sm-4">
                    <canvas id="canvas" height="50" width="50" style="display: none;"></canvas>
                    <br />
                    <input type="button" id="btnCrop" value="Crop" style="display: none" class="same-button" />
                    <asp:Button ID="btn_UpdatePicture" runat="server" Text="Save" CssClass="same-button" OnClick="btn_UpdatePicture_Click" Style="display: none" />
                    <asp:Button ID="btn_CancelPicture" runat="server" Text="Cancel" CssClass="same-button" OnClick="btn_CancelPicture_Click" />

                </div>
            </div>
        </div>

    </section>
    <!-- /.content -->
</asp:Content>
