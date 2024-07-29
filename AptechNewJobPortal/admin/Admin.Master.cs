using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace AptechNewJobPortal.admin
{
    public partial class Admin : System.Web.UI.MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["UserId"] == null)
            {
                Response.Redirect("/admin/login.aspx");
            }
        }
        protected void lb_jobseeker_Click(object sender, EventArgs e)
        {
            Response.Redirect("/admin/jobseeker.aspx");
        }

        protected void lb_employer_Click(object sender, EventArgs e)
        {
            Response.Redirect("/admin/employer.aspx");
        }
        protected void lb_dashboard_Click(object sender, EventArgs e)
        {
            Response.Redirect("/admin/index.aspx");
        }

        //protected void lb_city_Click(object sender, EventArgs e)
        //{
        //    Response.Redirect("/admin/city.aspx");
        //}

        //protected void lb_area_Click(object sender, EventArgs e)
        //{
        //    Response.Redirect("/admin/area.aspx");
        //}

        //protected void lb_skill_Click(object sender, EventArgs e)
        //{
        //    Response.Redirect("/admin/skill.aspx");
        //}

        //protected void lb_industry_Click(object sender, EventArgs e)
        //{
        //    Response.Redirect("/admin/industries.aspx");
        //}

        //protected void ln_degree_Click(object sender, EventArgs e)
        //{
        //    Response.Redirect("/admin/degree.aspx");
        //}

        //protected void lb_degreetype_Click(object sender, EventArgs e)
        //{
        //    Response.Redirect("/admin/degreetype.aspx");
        //}

        //protected void lb_careerlevel_Click(object sender, EventArgs e)
        //{
        //    Response.Redirect("/admin/careerlevel.aspx");
        //}

        //protected void lb_jobtype_Click(object sender, EventArgs e)
        //{
        //    Response.Redirect("/admin/jobtype.aspx");
        //}

        //protected void lb_jobshift_Click(object sender, EventArgs e)
        //{
        //    Response.Redirect("/admin/jobshift.aspx");
        //}

        //protected void lb_experince_Click(object sender, EventArgs e)
        //{
        //    Response.Redirect("/admin/experince.aspx");
        //}
        
        protected void lb_testimonial_Click(object sender, EventArgs e)
        {
            Response.Redirect("/admin/testimonial.aspx");
        }

        protected void lb_other_Click(object sender, EventArgs e)
        {
            Response.Redirect("/admin/other.aspx");
        }

        protected void lb_approved_Click(object sender, EventArgs e)
        {
            Response.Redirect("/admin/job-approved.aspx");
        }

        protected void lb_pending_Click(object sender, EventArgs e)
        {
            Response.Redirect("/admin/job-pending.aspx");
        }

        protected void lb_advertise_Click(object sender, EventArgs e)
        {
            Response.Redirect("/admin/advertising.aspx");
        }

        protected void lb_companies_Click(object sender, EventArgs e)
        {
            Response.Redirect("/admin/companies.aspx");
        }

        protected void lb_post_job_Click(object sender, EventArgs e)
        {
            Response.Redirect("/admin/post-a-job.aspx");
        }
    }
}