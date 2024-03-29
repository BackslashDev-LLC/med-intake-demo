using MedIntakeDemo.Api.Models;
using MedIntakeDemo.Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace MedIntakeDemo.Api.Controllers
{
    public class MedicationsController : Controller
    {
        private readonly IStorageService _storageService;

        public MedicationsController(IStorageService storageService)
        {
            _storageService = storageService;
        }

        [HttpGet("api/medications")]
        public async Task<IActionResult> GetMedications()
        {
            var medications = await _storageService.GetMedications();
            return Ok(medications);
        }

        [HttpPost("api/medications")]
        public async Task<IActionResult> AddMedication([FromBody] RxModel model)
        {
            await _storageService.AddMedication(model);
            return Ok();
        }
    }
}
