<%@ Page Title="" Language="C#" MasterPageFile="~/jobseeker/Jobseeker.Master" AutoEventWireup="true" CodeBehind="skills.aspx.cs" Inherits="AptechNewJobPortal.jobseeker.skills" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>Skills</h1>
        <ol class="breadcrumb">
            <li><a href="index.aspx">Dashboard</a></li>
            <li class="active">Skills</li>
        </ol>
    </section>

    <!-- Main content -->
    <section class="content container-fluid">
        <section class="" id="SkillDiv">
            <button id="addSkill" class="add-new"><i class="fa fa-plus"></i>Add New</button>
            <div id="row-id" class="row"></div>
        </section>
        <!-- /.list section -->

        <section class="" id="SkillAddDiv">
            <div class="row">
                <div class="col-sm-12">
                    <h5 class="text-bold">Add New Skill</h5>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <div class="form-group">
                        <label>Skill Name</label>
                        <div class="input-group">
                            <div class="input-group-addon"><i class="fa fa-wrench"></i></div>
                            <select id="ddl_skill" name="ddl_skill" class="form-control"></select>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="form-group">
                        <label>Skill Name</label>
                        <input type="hidden" id="skillData_level" name="skillData[level]" value="Beginner">
                        <div class="btn-group btn-level-group" id="">
                            <button value="Beginner" type="button" class="btn-level btn btn-default active">Beginner</button>
                            <button value="Intermediate" type="button" class="btn-level btn btn-default">Intermediate</button>
                            <button value="Advanced" type="button" class="btn-level btn btn-default">Advanced</button>
                            <button value="Expert" type="button" class="btn-level btn btn-default">Expert</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 text-center">
                    <button id="SkillAddDivInsert" class="btn btn-flat same-button text-bold"><i class="fa fa-plus"></i>Add</button>
                    <button id="SkillAddDivCancel" class="btn btn-flat same-button text-bold"><i class="fa fa-remove"></i>Cancel</button>
                </div>
            </div>
        </section>
        <!--Add Skill-->
        <section class="" id="SkillUpdateDiv">
            <div class="row">
                <div class="col-sm-12">
                    <input type="hidden" id="currentItem" name="current" />
                    <h5 class="text-bold text-center">Update Skill</h5>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-sm-offset-3">
                    <div class="form-group">
                        <label>Skill Name</label>
                        <div class="input-group">
                            <div class="input-group-addon"><i class="fa fa-wrench"></i></div>
                            <select id="ddl_Updateskill" name="ddl_Updateskill" class="form-control"></select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-sm-offset-3">
                    <div class="form-group">
                        <label>Skill Name</label>
                        <input type="hidden" id="skillData_updatelevel" name="skillData[level]" value="" />
                        <div class="btn-group btn-level-group" id="">
                            <button value="Beginner" type="button" class="btn-level btn btn-default">Beginner</button>
                            <button value="Intermediate" type="button" class="btn-level btn btn-default">Intermediate</button>
                            <button value="Advanced" type="button" class="btn-level btn btn-default">Advanced</button>
                            <button value="Expert" type="button" class="btn-level btn btn-default">Expert</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 text-center">
                    <button id="SkillUpdateDivUpdate" class="btn btn-flat same-button text-bold" type="button"><i class="fa fa-edit"></i>Save</button>
                    <button id="SkillUpdateDivCancel" class="btn btn-flat same-button text-bold"><i class="fa fa-remove"></i>Cancel</button>
                </div>
            </div>
        </section>
    </section>
    <!-- /.content -->
    <!-- Modal -->
    <div class="modal fade" id="SkillModel" role="dialog">
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
                    <button type="button" id="Skilldetelebutton" class="btn btn-default same-button" data-dismiss="modal">Delete</button>
                    <button type="button" class="btn btn-default same-button" data-dismiss="modal">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</asp:Content>
