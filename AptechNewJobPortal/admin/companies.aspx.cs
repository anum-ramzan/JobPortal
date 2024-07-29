using AptechNewJobPortal.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using System.IO;

namespace AptechNewJobPortal.admin
{
    public partial class companies : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["UserId"] == null)
            {
                string OriginalUrl = HttpContext.Current.Request.RawUrl;
                string LoginPageUrl = "~/admin/login.aspx";
                HttpContext.Current.Response.Redirect(String.Format("{0}?ReturnUrl={1}", LoginPageUrl, OriginalUrl));
            }
            MethodReusability.DropDown(ddl_cindustry, "tbl_industry", "industry_id", "industry_name", "Industry");
        }

        protected void btn_CompanyAdd_Click(object sender, EventArgs e)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {

                    if (FileUpload1.HasFile)
                    {
                        string extension = Path.GetExtension(this.FileUpload1.FileName);
                        string str = Guid.NewGuid() + extension;
                        //string base64 = imgCropped.Value;

                        //byte[] bytes = Convert.FromBase64String(base64.Split(',')[1]);
                        //using (FileStream stream = new FileStream("C:\\Websites\\jobs-ace.com\\jobs-ace.com\\wwwroot\\upload\\" + str, FileMode.Create))
                        //{
                        //    stream.Write(bytes, 0, bytes.Length);
                        //    stream.Flush();
                        //}
                        FileUpload1.PostedFile.SaveAs("C:\\Websites\\jobs-ace.com\\jobs-ace.com\\wwwroot\\upload\\" + str);
                        //FileUpload1.PostedFile.SaveAs("e:\\documents\\visual studio 2015\\Projects\\AptechNewJobPortal\\AptechNewJobPortal\\upload\\" + str);
                        string logo = "upload/" + str;

                        int id = MethodReusability.AutoId("auto_company");

                        SqlCommand command = new SqlCommand("sp_company", connection);
                        command.CommandType = CommandType.StoredProcedure;
                        command.Parameters.AddWithValue("@id", id);
                        command.Parameters.AddWithValue("@userid", Session["UserId"].ToString());
                        command.Parameters.AddWithValue("@companyname", txt_company.Text);
                        command.Parameters.AddWithValue("@headname", txt_chead.Text);
                        command.Parameters.AddWithValue("@website", txt_cwebsite.Text);
                        command.Parameters.AddWithValue("@phone", txt_cmobile.Text);
                        command.Parameters.AddWithValue("@industry_id", txt_cindustry.Value);
                        command.Parameters.AddWithValue("@details", txt_cdescription.Text);
                        command.Parameters.AddWithValue("@area", txt_carea.Value);
                        command.Parameters.AddWithValue("@address", txt_caddress.Text);
                        command.Parameters.AddWithValue("@email", txt_cmail.Text);
                        command.Parameters.AddWithValue("@logo", logo);

                        connection.Open();
                        command.ExecuteNonQuery();
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
        }

    }
}