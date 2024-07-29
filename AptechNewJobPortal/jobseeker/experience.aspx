<%@ Page Title="" Language="C#" MasterPageFile="~/jobseeker/Jobseeker.Master" AutoEventWireup="true" CodeBehind="experience.aspx.cs" Inherits="AptechNewJobPortal.jobseeker.experience" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>Experience</h1>
        <ol class="breadcrumb">
            <li><a href="index.aspx">Dashboard</a></li>
            <li class="active">Experience</li>
        </ol>
    </section>

    <!-- Main content -->
    <section class="content container-fluid">
        <section class="" id="ExperienceDiv">
            <button id="addExp" class="add-new"><i class="fa fa-plus"></i>Add New</button>
        </section>
        <!-- /.section -->
        <section class="" id="ExperienceAddDiv">
            <div class="row">
                <div class="col-sm-12">
                    <h5 class="text-bold">Add New Experience</h5>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-sm-offset-3">
                    <div class="form-group">
                        <label>Job Title </label>
                        <div class="input-group">
                            <div class="input-group-addon"><i class="fa fa-file"></i></div>
                            <input type="text" id="txtjobtitle" name="txtjobtitle" class="form-control" autocomplete="off" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-sm-offset-3">
                    <div class="form-group">
                        <label>Company </label>
                        <div class="input-group">
                            <div class="input-group-addon"><i class="fa fa-industry"></i></div>
                            <input type="text" id="txtcompany" name="txtcompany" class="form-control" autocomplete="off" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-sm-offset-3">
                    <div class="form-group">
                        <label>Start Date </label>
                        <div class="input-group">
                            <div class="input-group-addon"><i class="fa fa-calendar-plus-o"></i></div>
                            <input type="text" id="txtstart" name="txtstart" class="form-control" autocomplete="off" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-sm-offset-3">
                    <div class="form-group">
                        <label>End Date </label>
                        <div class="input-group">
                            <div class="input-group-addon"><i class="fa fa-calendar-plus-o"></i></div>
                            <input type="text" id="txtend" name="txtend" class="form-control" autocomplete="off" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-sm-offset-3">
                    <div class="form-group">
                        <label>Description </label>
                        <div class="input-group">
                            <div class="input-group-addon"><i class="fa fa-info"></i></div>
                            <textarea id='txtdescription' name='txtdescription' class='form-control'></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-sm-offset-3">
                    <button id="ExperienceAddDivInsert" class="btn btn-flat same-button text-bold"><i class="fa fa-plus"></i>Add</button>
                    <button id="EdxperienceAddDivCancel" class="btn btn-flat same-button text-bold"><i class="fa fa-remove"></i>Cancel</button>
                </div>
            </div>
        </section>
        <!-- /.section -->
        <section class="" id="ExperienceUpdateDiv">
            <div class="row">
                <div class="col-sm-12">
                    <h5 class="text-bold">Update Existing Experience</h5>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-sm-offset-3">
                    <input type="hidden" id="currentItem" name="current" />
                    <div class="form-group">
                        <label>Job Title </label>
                        <div class="input-group">
                            <div class="input-group-addon"><i class="fa fa-file"></i></div>
                            <input type="text" id="txtupdatejobtitle" name="txtupdatejobtitle" class="form-control" autocomplete="off" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-sm-offset-3">
                    <div class="form-group">
                        <label>Company </label>
                        <div class="input-group">
                            <div class="input-group-addon"><i class="fa fa-industry"></i></div>
                            <input type="text" id="txtupdatecompany" name="txtupdatecompany" class="form-control" autocomplete="off" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-sm-offset-3">
                    <div class="form-group">
                        <label>Start Date </label>
                        <div class="input-group">
                            <div class="input-group-addon"><i class="fa fa-calendar-plus-o"></i></div>
                            <input type="text" id="txtupdatestart" name="txtupdatestart" class="form-control" autocomplete="off" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-sm-offset-3">
                    <div class="form-group">
                        <label>End Date </label>
                        <div class="input-group">
                            <div class="input-group-addon"><i class="fa fa-calendar-plus-o"></i></div>
                            <input type="text" id="txtupdateend" name="txtupdateend" class="form-control" autocomplete="off" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-sm-offset-3">
                    <div class="form-group">
                        <label>Description </label>
                        <div class="input-group">
                            <div class="input-group-addon"><i class="fa fa-info"></i></div>
                            <textarea id="txtupdatedescription" name="txtupdatedescription" class="form-control"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-sm-offset-3">
                    <button id="ExperienceUpdateDivUpdate" type="button" class="btn btn-flat same-button text-bold"><i class="fa fa-edit"></i>&nbsp;Save</button>
                    <button id="ExperienceUpdateDivCancel" type="button" class="btn btn-flat same-button text-bold"><i class="fa fa-remove"></i>&nbsp;Cancel</button>
                </div>
            </div>
        </section>
        <!-- /.section -->
    </section>
    <!-- /.content -->
    <!-- Modal -->
    <div class="modal fade" id="experienceModel" role="dialog">
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
                    <button type="button" id="Experiencedetelebutton" class="btn btn-default same-button" data-dismiss="modal">Delete</button>
                    <button type="button" class="btn btn-default same-button" data-dismiss="modal">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</asp:Content>
