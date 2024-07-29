<%@ Page Title="" Language="C#" MasterPageFile="~/employer/Employer.Master" AutoEventWireup="true" CodeBehind="edit-profile.aspx.cs" Inherits="AptechNewJobPortal.employer.edit_profile" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>Edit Profile</h1>
        <ol class="breadcrumb">
            <li><a href="profile.aspx">Profile</a></li>
            <li class="active">Edit Profile</li>
        </ol>
    </section>

    <!-- Main content -->
    <section class="content container-fluid">
        <input type="hidden" id="experienceId" runat="server" name="experience" />
        <input type="hidden" id="maritalId" runat="server" name="marital" />
        <input type="hidden" id="careerId" runat="server" name="career" />
        <input type="hidden" id="cityId" runat="server" name="area" />
        <input type="hidden" id="areaId" runat="server" name="city" />
        <div class="container">
            <div class="row">
                <div class="form-group col-md-6">
                    <label for="txt_fname">First Name</label>
                    <div class="input-group">
                        <div class="input-group-addon">
                            <i class="fa fa-user"></i>
                        </div>
                        <input type="text" name="txtfname" id="txtfname" class="form-control" runat="server" />
                    </div>
                </div>
                <div class="form-group col-md-6">
                    <label for="txt_lname">Last Name</label>
                    <div class="input-group">
                        <div class="input-group-addon">
                            <i class="fa fa-user"></i>
                        </div>
                        <input type="text" name="txtlname" id="txt_lname" class="form-control" runat="server" />
                    </div>
                </div>

            </div>
            <div class="row">
                <div class="form-group col-md-6">
                    <label for="nic">NIC Number</label>

                    <div class="input-group">
                        <div class="input-group-addon">
                            <i class="fa fa-id-card"></i>
                        </div>
                        <input type="text" name="txtcnic" id="txtcnic" class="form-control" runat="server" />
                    </div>
                </div>
                <div class="form-group col-md-6">
                    <label>Date of Birth</label>
                    <div class="input-group date">
                        <div class="input-group-addon">
                            <i class="fa fa-calendar"></i>
                        </div>
                        <input type="text" name="txtbd" id="txtbd" class="form-control" runat="server" />
                    </div>
                    <!-- /.input group -->
                </div>
            </div>
            <div class="row">
                <div class="form-group col-md-6">
                    <label for="mbl">Mobile Number</label>
                    <div class="input-group">
                        <div class="input-group-addon">
                            <i class="glyphicon glyphicon-phone"></i>
                        </div>
                        <input type="text" name="txtmobile" id="txtmobile" class="form-control" runat="server" />
                    </div>
                </div>
                <div class="form-group col-md-6">
                    <label for="txt_phn">Mobile Number 2</label>
                    <div class="input-group">
                        <div class="input-group-addon">
                            <i class="glyphicon glyphicon-phone"></i>
                        </div>
                        <input type="text" name="txtmobile2" id="txtmobile2" class="form-control" runat="server" />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="form-group col-md-6">
                    <label>Marital Status</label>
                    <div class="input-group">
                        <div class="input-group-addon">
                            <i class="fa fa-arrow-down"></i>
                        </div>
                        <asp:DropDownList ID="ddl_maritalstatus" runat="server" CssClass="form-control">
                            <asp:ListItem Text="Select marital status" Value="Select marital status" />
                            <asp:ListItem Text="Single" Value="Single" />
                            <asp:ListItem Text="Married" Value="Married" />
                            <asp:ListItem Text="Divorced" Value="Divorced" />
                            <asp:ListItem Text="Separated" Value="Separated" />
                            <asp:ListItem Text="Widowed" Value="Widowed" />
                        </asp:DropDownList>
                        <input type="hidden" name="hidden1" id="hidden1" />
                    </div>
                </div>
                <div class="col-md-6">
                    <label>Gender</label>
                    <!-- radio -->
                    <div class="form-group">
                        <input type="hidden" id="personalData_gender" runat="server" name="personalData[gender]" value="" />
                        <div class="btn-group btn-gender-group" id="">
                            <button value="Male" type="button" class="btn-gender-M btn-gender btn btn-defaults">Male</button>
                            <button value="Female" type="button" class="btn-gender-F btn-gender btn btn-defaults">Female</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="form-group col-md-6">
                    <label>Experience</label>
                    <div class="input-group">
                        <div class="input-group-addon">
                            <i class="fa fa-university"></i>
                        </div>
                        <asp:DropDownList ID="ddl_experiencex" runat="server" CssClass="form-control">
                        </asp:DropDownList>
                        <input type="hidden" name="hidden2" id="hidden2" />
                    </div>
                </div>
                <div class="form-group col-md-6">
                    <label>Career Level</label>
                    <div class="input-group">
                        <div class="input-group-addon">
                            <i class="fa fa-calendar"></i>
                        </div>
                        <asp:DropDownList ID="ddl_careerr" runat="server" CssClass="form-control">
                        </asp:DropDownList>
                        <input type="hidden" name="hidden3" id="hidden3" />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="form-group col-md-6">
                    <label>City</label>
                    <div class="input-group">
                        <div class="input-group-addon">
                            <i class="fa fa-map"></i>
                        </div>
                        <asp:DropDownList ID="ddl_cityname" runat="server" CssClass="form-control">
                        </asp:DropDownList>
                    </div>
                </div>
                <div class="form-group col-md-6">
                    <label>Area</label>
                    <div class="input-group">
                        <div class="input-group-addon">
                            <i class="fa fa-map-marker"></i>
                        </div>
                        <asp:DropDownList ID="ddl_areaname" runat="server" CssClass="form-control">
                        </asp:DropDownList>
                        <input type="hidden" name="hidden4" id="hidden4" />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="form-group col-md-12">
                    <label>Address</label>
                    <div class="input-group">
                        <div class="input-group-addon">
                            <i class="fa fa-location-arrow"></i>
                        </div>
                        <textarea id="txt_address" runat="server" class="form-control"></textarea>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-12 text-center">
                    <button type="button" id="ProfileUpdate" class="btn btn-flat same-button text-bold"><i class="fa fa-edit"></i> Save Changes</button>
                    <button id="ProfileCancel" class="btn btn-flat same-button text-bold"><i class="fa fa-remove"></i> Cancel</button>
                </div>
            </div>
        </div>
    </section>
    <!-- /.content -->
</asp:Content>
