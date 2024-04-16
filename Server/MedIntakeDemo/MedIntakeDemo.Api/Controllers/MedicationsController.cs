using BackslashDev.LLMTools.Interfaces;
using MedIntakeDemo.Api.Models;
using MedIntakeDemo.Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace MedIntakeDemo.Api.Controllers
{
    public class MedicationsController : Controller
    {
        private readonly IStorageService _storageService;
        private readonly IVisionService _visionService;

        public MedicationsController(IStorageService storageService, IVisionService visionService)
        {
            _storageService = storageService;
            _visionService = visionService;
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

        [HttpPost("api/medications/upload")]
        public async Task<IActionResult> UploadMedication(IFormFile label)
        {
            byte[] fileBytes;
            using (var ms = new MemoryStream())
            {
                await label.CopyToAsync(ms);
                fileBytes = ms.ToArray();
            }

            var labelResult = await _visionService.ImageToJson<RxModel>(fileBytes, BackslashDev.LLMTools.Interfaces.Enum.ImageFormat.JPEG);
            return Ok(labelResult.ResultObject);

        }
    }
}
