using AptechNewJobPortal.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace AptechNewJobPortal
{
    public partial class Index : System.Web.UI.MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["UserId"] == null)
            {
                WithOutUserMenu.Visible = true;
                WithUserMenu.Visible = false;
            }
            else
            {
                WithOutUserMenu.Visible = false;
                WithUserMenu.Visible = true;
                string usertype = MethodReusability.ReturnSingleValue("sp_select_user_type", "@id", Session["UserId"].ToString());
                if (usertype.Equals("Job Seeker"))
                {
                    string name = MethodReusability.ReturnSingleValue("sp_select_username", "@id", Session["UserId"].ToString());
                    UsernameHyperLink.Text = name;
                    UsernameHyperLink.NavigateUrl = "~/jobseeker/index.aspx";
                }
                else if (usertype.Equals("Employer"))
                {
                    string name = MethodReusability.ReturnSingleValue("sp_select_username", "@id", Session["UserId"].ToString());
                    UsernameHyperLink.Text = name;
                    UsernameHyperLink.NavigateUrl = "~/employer/index.aspx";
                }
                else
                {

                }
            }
        }
    }
}