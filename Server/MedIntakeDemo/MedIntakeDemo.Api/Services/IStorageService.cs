using MedIntakeDemo.Api.Models;

namespace MedIntakeDemo.Api.Services
{
    public interface IStorageService
    {
        Task<List<RxModel>> GetMedications();
        Task AddMedication(RxModel model);
    }

    public class InMemoryStorageService : IStorageService
    {
        private readonly List<RxModel> _data = new();

        public Task AddMedication(RxModel model)
        {
            _data.Add(model);
            return Task.CompletedTask;
        }

        public Task<List<RxModel>> GetMedications()
        {
            return Task.FromResult(_data);
        }
    }
}
