using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace AptechNewJobPortal.Model
{
    public class WebMethodClasses
    {
    }

    public class Job
    {
        public int JobId { get; set; }
        public string JobApplyDate { get; set; }
        public string JobLogo { get; set; }
        public string JobTitle { get; set; }
        public string CityName { get; set; }
        public string CompanyName { get; set; }
        public string JobSkill { get; set; }
        public int JobPosition { get; set; }
        public string JobStatus { get; set; }
        public string UserName { get; set; }
        public string UserEmail { get; set; }
        public string JobAddedDate { get; set; }
        public string JobURL { get; set; }
    }

    //login 
    public class Login
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }

    public class JobCategory
    {
        public int CategoryId { get; set; }
        public string CategoryName { get; set; }
        public int TotalCategoryJob { get; set; }
    }

    public class JobSubCategory
    {
        public int SubCategoryId { get; set; }
        public string SubCategoryName { get; set; }
        public int SubCategoryTotal { get; set; }
    }

    public class JobDetails
    {
        public int JobId { get; set; }
        public string JobTitle { get; set; }
        public string JobLogo { get; set; }
        public string Location { get; set; }
        public int Vacanies { get; set; }
        public string Category { get; set; }
        public string JobApplyDate { get; set; }
        public string Experience { get; set; }
        public string CareerLevel { get; set; }
        public string JobType { get; set; }
        public string JobShift { get; set; }
        public string Salary { get; set; }
        public string Gender { get; set; }
        public string Education { get; set; }
        public string Industry { get; set; }
        public string Description { get; set; }
        public string Skills { get; set; }
        public string CompanyName { get; set; }
        public string CompanyDescription { get; set; }
    }

    public class Education
    {
        public int EducationId { get; set; }

        public string EducationDegree { get; set; }

        public string EducationDegreeLevel { get; set; }

        public string EducationOther { get; set; }

        public string EducationResult { get; set; }

        public string EducationCompletion { get; set; }

        public string EducationInsitute { get; set; }
    }

    public class Degree
    {
        public int DegreeId { get; set; }

        public string DegreeName { get; set; }
    }

    public class DegreeLevel
    {
        public int DegreeLevelId { get; set; }

        public string DegreeLevelName { get; set; }

        public int DegreeId { get; set; }
    }

    public class Experience
    {
        public int ExperienceId { get; set; }
        public string ExperienceJobTitle { get; set; }
        public string ExperienceCompany { get; set; }
        public string ExperienceStart { get; set; }
        public string ExperienceEnd { get; set; }
        public string ExperienceDescription { get; set; }
    }

    public class Portfolio
    {
        public int PortfolioId { get; set; }
        public string PortfolioTitle { get; set; }
        public string PortfolioUrl { get; set; }
        public string PortfolioDescription { get; set; }
    }

    public class Skill
    {
        public int SkillId { get; set; }
        public string SkillName { get; set; }
        public string SkillLevel { get; set; }
    }

    public class UsersSkill
    {
        public string SkillName { get; set; }
    }

    public class Certification
    {
        public int CertificateId { get; set; }
        public string CertificateTitle { get; set; }
        public string CertificateDate { get; set; }
        public string CertificateDescription { get; set; }

    }

    public class Jobseeker
    {
        public int JSId { get; set; }
        public string JSName { get; set; }
        public string JSLName { get; set; }
        public string JSEmail { get; set; }
        public string JSMobile { get; set; }
        public string JSStatus { get; set; }
    }

    public class City
    {
        public int CityId { get; set; }
        public string CityName { get; set; }
    }

    public class Area
    {
        public int AreaId { get; set; }
        public string AreaName { get; set; }
        public int CityId { get; set; }
    }

    public class UserProfile
    {
        public int UserId { get; set; }
        public string UserFname { get; set; }
        public string UserLname { get; set; }
        public string UserGender { get; set; }
        public string UserDateBirth { get; set; }
        public string UserCNIC { get; set; }
        public string UserMarital { get; set; }
        public string UserMobile { get; set; }
        public string UserPhone { get; set; }
        public string UserAddress { get; set; }
        public int UserArea { get; set; }
        public int UserExperience { get; set; }
        public int UserCareer { get; set; }
    }

    public class CompanyProfile
    {
        public int CompanyId { get; set; }
        public string CompanyName { get; set; }
        public string CompanyHeadName { get; set; }
        public string CompanyWebsite { get; set; }
        public string CompanyPhone { get; set; }
        public string CompanyIndustry { get; set; }
        public string CompanyDetails { get; set; }
        public string CompanyAddress { get; set; }
        public string CompanyEmail { get; set; }
        public string CompanyLogo { get; set; }
    }

    public class CareerLevel
    {
        public int CareerId { get; set; }
        public string CareerName { get; set; }
    }

    public class ExperienceYears
    {
        public int ExperienceId { get; set; }
        public string ExperienceName { get; set; }
    }

    public class JobType
    {
        public int JobTypeId { get; set; }
        public string JobTypeName { get; set; }
    }

    public class Qualification
    {
        public int QualificationId { get; set; }
        public string QualificationName { get; set; }
    }

    public class Attachment
    {
        public int AttachmentId { get; set; }
        public string AttachmentName { get; set; }
        public string AttachmentLocation { get; set; }
    }

    public class JobseekerResume
    {
        public string UserImage { get; set; }
        public string UserName { get; set; }
        public string UserEmail { get; set; }
        public string UserMobile { get; set; }
        public string UserLocation { get; set; }
        public string UserAge { get; set; }
        public string UserSkill { get; set; }
        public string DateApplying { get; set; }
    }


    public class Summary
    {
        public int SummaryId { get; set; }
        public string SummaryDetails { get; set; }
    }

    public class JobseekerApplication
    {
        public string ApplicationCompanyLogo { get; set; }
        public string ApplicationTitle { get; set; }
        public string ApplicationCompanyName { get; set; }
        public string ApplicationCVTitle { get; set; }
        public string ApplicationApplyDate { get; set; }
        public string ApplicationLink { get; set; }
    }
}