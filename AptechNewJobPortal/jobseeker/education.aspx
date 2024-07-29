<%@ Page Title="" Language="C#" MasterPageFile="~/jobseeker/Jobseeker.Master" AutoEventWireup="true" CodeBehind="education.aspx.cs" Inherits="AptechNewJobPortal.jobseeker.education" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>Education</h1>
        <ol class="breadcrumb">
            <li><a href="index.aspx">Dashboard</a></li>
            <li class="active">Education</li>
        </ol>
    </section>

    <!-- Main content -->
    <section class="content container-fluid">
        <section class="" id="EducationDiv">
        </section>
        <!-- /.section -->
        <!-- INsert Section-->
        <section class="" id="EducationAddDiv">
            <div class="row">
                <div class="col-sm-12">
                    <h5 class="text-bold">Add New Education</h5>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-sm-offset-3">
                    <div class="form-group">
                        <label>Degree </label>
                        <div class="input-group">
                            <div class="input-group-addon">
                                <i class="fa fa-book"></i>
                            </div>
                            <select id="ddl_degree" name="ddl_degree" class="form-control"></select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-sm-offset-3">
                    <div class="form-group">
                        <label>Degree Level</label>
                        <div class="input-group">
                            <div class="input-group-addon">
                                <i class="fa fa-book"></i>
                            </div>
                            <select id="ddl_degree_level" name="ddl_degree_level" class="form-control"></select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-sm-offset-3" style="display: none;">
                    <div class="form-group">
                        <label>Other </label>
                        <div class="input-group">
                            <div class="input-group-addon">
                                <i class="fa fa-book"></i>
                            </div>
                            <input type="text" name="txt_other" id="txt_other" class="form-control" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-sm-offset-3">
                    <div class="form-group">
                        <label>Institution </label>
                        <div class="input-group">
                            <div class="input-group-addon">
                                <i class="fa fa-university"></i>
                            </div>
                            <input type="text" name="txt_institute" id="txt_institute" class="form-control" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-sm-offset-3">
                    <div class="form-group">
                        <label>Completion Date </label>
                        <div class="input-group">
                            <div class="input-group-addon">
                                <i class="fa fa-calendar"></i>
                            </div>
                            <input type="text" name="txt_completion" id="completiondate" class="form-control" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-sm-offset-3">
                    <div class="form-group">
                        <label>Grade/GPA </label>
                        <div class="input-group">
                            <div class="input-group-addon">
                                <i class="fa fa-certificate"></i>
                            </div>
                            <input type="text" name="txt_result" id="txtresult" class="form-control" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 text-center">
                    <button id="EducationAddDivInsert" class="btn btn-flat same-button text-bold"><i class="fa fa-plus"></i>Add</button>
                    <button id="EducationAddDivCancel" class="btn btn-flat same-button text-bold"><i class="fa fa-remove"></i>Cancel</button>
                </div>
            </div>
        </section>
        <!-- /.section -->
        <!-- UPDATE Section-->
        <section class="" id="EducationUpdateDiv">
            <div class="row">
                <div class="col-sm-12">
                    <input type="hidden" id="currentItem" name="currentItem" />
                    <h5 class="text-bold">Update Existing Education</h5>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-sm-offset-3">
                    <div class="form-group">
                        <label>Degree </label>
                        <div class="input-group">
                            <div class="input-group-addon"><i class="fa fa-book"></i></div>
                            <select id="ddl_update_degree" name="ddl_update_degree" class="form-control"></select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-sm-offset-3">
                    <div class="form-group">
                        <label>Degree Level</label>
                        <div class="input-group">
                            <div class="input-group-addon"><i class="fa fa-book"></i></div>
                            <select id="ddl_update_degree_level" name="ddl_update_degree_level" class="form-control"></select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-sm-offset-3" style="display: none;">
                    <div class="form-group">
                        <label>Other </label>
                        <div class="input-group">
                            <div class="input-group-addon"><i class="fa fa-book"></i></div>
                            <input type="text" name="txt_update_other" class="form-control" autocomplete="off" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-sm-offset-3">
                    <div class="form-group">
                        <label>Institution </label>
                        <div class="input-group">
                            <div class="input-group-addon"><i class="fa fa-university"></i></div>
                            <input type="text" name="txt_update_institute" class="form-control" autocomplete="off" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-sm-offset-3">
                    <div class="form-group">
                        <label>Completion Date </label>
                        <div class="input-group">
                            <div class="input-group-addon"><i class="fa fa-calendar"></i></div>
                            <input type="text" name="txt_update_completion" id="udpatecompletiondate" class="form-control" autocomplete="off" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-sm-offset-3">
                    <div class="form-group">
                        <label>Grade/GPA </label>
                        <div class="input-group">
                            <div class="input-group-addon"><i class="fa fa-certificate"></i></div>
                            <input type="text" name="txt_update_result" class="form-control" autocomplete="off" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 text-center">
                    <button id="EducationUpdateDivInsert" class="btn btn-flat same-button text-bold"><i class="fa fa-edit"></i>&nbsp;Save</button>
                    <button id="EducationUpdateDivCancel" class="btn btn-flat same-button text-bold"><i class="fa fa-remove"></i>&nbsp;Cancel</button>
                </div>
            </div>
            ;
        </section>
        <!-- /.section -->
    </section>
    <!-- /.content -->
    <!-- Modal -->
    <div class="modal fade" id="EducationModel" role="dialog">
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
                    <button type="button" id="Educationdetelebutton" class="btn btn-default same-button" data-dismiss="modal">Delete</button>
                    <button type="button" class="btn btn-default same-button" data-dismiss="modal">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</asp:Content>
