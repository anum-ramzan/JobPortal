<%@ Page Title="" Language="C#" MasterPageFile="~/jobseeker/Jobseeker.Master" AutoEventWireup="true" CodeBehind="certifications.aspx.cs" Inherits="AptechNewJobPortal.jobseeker.certifications" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>Certifications</h1>
        <ol class="breadcrumb">
            <li><a href="index.aspx">Dashboard</a></li>
            <li class="active">Certifications</li>
        </ol>
    </section>

    <!-- Main content -->
    <section class="content container-fluid">
        <section class="" id="CertificateDiv">
            <button id="addCert" class="add-new"><i class="fa fa-plus"></i>Add New</button>
        </section>
        <!-- /.list section -->
        <section class="" id="CertificateAddDiv">
            <div class="row">
                <div class="col-sm-12">
                    <h5 class="text-bold">Add New Certificate</h5>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-sm-offset-3">
                    <div class="form-group">
                        <label>Certificate Title</label>
                        <div class="input-group">
                            <div class="input-group-addon"><i class="fa fa-certificate"></i></div>
                            <input id="txt_title" name="txt_title" class="form-control" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-sm-offset-3">
                    <div class="form-group">
                        <label>Dated</label>
                        <div class="input-group">
                            <div class="input-group-addon"><i class="fa fa-calendar"></i></div>
                            <input id="txt_certificate" name="txt_certificate" class="form-control" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-sm-offset-3">
                    <div class="form-group">
                        <label>Description</label>
                        <div class="input-group">
                            <div class="input-group-addon"><i class="fa fa-align-justify"></i></div>
                            <textarea id="txt_certificate_description" name="txt_certificate_description" class="form-control" ></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 text-center">
                    <button id="CertificateAddDivInsert" class="btn btn-flat same-button text-bold" type="button"><i class="fa fa-edit"></i>Save</button>
                    <button id="CertificateAddDivCancel" class="btn btn-flat same-button text-bold"><i class="fa fa-remove"></i>Cancel</button>
                </div>
            </div>
        </section>
        <!--add section-->
        <section class="" id="CertificateUpdateDiv">
            <div class="row">
                <div class="col-sm-12">
                    <input type="hidden" id="currentItem" name="current" />
                    <h5 class="text-bold text-center">Update CertificateDetails</h5>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-sm-offset-3">
                    <div class="form-group">
                        <label>Certificate Title</label>
                        <div class="input-group">
                            <div class="input-group-addon"><i class="fa fa-certificate"></i></div>
                            <input id="txt_Updatetitle" name="txt_Updatetitle" class="form-control" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-sm-offset-3">
                    <div class="form-group">
                        <label>Dated</label>
                        <div class="input-group">
                            <div class="input-group-addon"><i class="fa fa-calendar"></i></div>
                            <input id="txt_Updatecertificate" name="txt_Updatecertificate" class="form-control" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-sm-offset-3">
                    <div class="form-group">
                        <label>Description</label>
                        <div class="input-group">
                            <div class="input-group-addon"><i class="fa fa-align-justify"></i></div>
                            <textarea id="txt_update_certificate_description" name="txt_update_certificate_description" class="form-control" ></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 text-center">
                    <button id="CertificateUpdateDivUpdate" class="btn btn-flat same-button text-bold" type="button"><i class="fa fa-edit"></i>Save</button>
                    <button id="CertificateUpdateDivCancel" class="btn btn-flat same-button text-bold"><i class="fa fa-remove"></i>Cancel</button>
                </div>
            </div>
        </section>
        <!-- /.update section -->
    </section>
    <!-- /.content -->
    <!-- Modal -->
    <div class="modal fade" id="CertificateModel" role="dialog">
        <div class="modal-dialog">
            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Delete record?</h4>
                </div>
                <div class="modal-body">
                    <p>Are you sure you want to delete this record?</p>
                    <input type="hidden" name="RecordId" id="RecordId" value="" />
                </div>
                <div class="modal-footer text-center">
                    <button type="button" id="Certificatedetelebutton" class="btn btn-default same-button" data-dismiss="modal">Delete</button>
                    <button type="button" class="btn btn-default same-button" data-dismiss="modal">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</asp:Content>
