namespace BodyPumpWorkouts.Web.Areas.Administration.Controllers
{
    using BodyPumpWorkouts.Common;
    using BodyPumpWorkouts.Web.Controllers;

    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;

    [Authorize(Roles = GlobalConstants.AdministratorRoleName)]
    [Area("Administration")]
    public class AdministrationController : BaseController
    {
    }
}
