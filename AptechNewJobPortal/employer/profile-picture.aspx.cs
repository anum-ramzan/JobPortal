using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using AptechNewJobPortal.Model;

namespace AptechNewJobPortal.employer
{
    public partial class profile_picture : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["UserId"] == null)
            {
                string OriginalUrl = HttpContext.Current.Request.RawUrl;
                string LoginPageUrl = "~/employer/login.aspx";
                HttpContext.Current.Response.Redirect(String.Format("{0}?ReturnUrl={1}", LoginPageUrl, OriginalUrl));
            }

            userimage.Src = MethodReusability.ReturnSingleValue("sp_select_prrofike_image", "@id", Session["userId"].ToString());
        }

        protected void btn_UpdatePicture_Click(object sender, EventArgs e)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    if (FileUploadProfile.HasFile)
                    {
                        string extension = Path.GetExtension(this.FileUploadProfile.FileName);
                        string str = Guid.NewGuid() + extension;

                        string base64 = Request.Form["imgCropped"];
                        byte[] bytes = Convert.FromBase64String(base64.Split(',')[1]);
                        using (FileStream stream = new FileStream("C:\\Websites\\jobs-ace.com\\jobs-ace.com\\wwwroot\\upload\\" + str, FileMode.Create))
                        {
                            stream.Write(bytes, 0, bytes.Length);
                            stream.Flush();
                        }

                        //FileUploadProfile.PostedFile.SaveAs("C:\\Websites\\jobs-ace.com\\jobs-ace.com\\wwwroot\\upload\\" + str);
                        string picture = "../upload/" + str;
                        SqlCommand command = new SqlCommand("sp_update_profile_picture", connection);
                        command.CommandType = CommandType.StoredProcedure;
                        command.Parameters.AddWithValue("@id", Session["UserId"].ToString());
                        command.Parameters.AddWithValue("@picture", picture);
                        connection.Open();
                        command.ExecuteNonQuery();
                        Response.Redirect(Request.RawUrl);
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
        }

        protected void btn_CancelPicture_Click(object sender, EventArgs e)
        {
            Response.Redirect(Request.RawUrl);
        }
    }
}