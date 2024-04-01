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
        private readonly List<RxModel> _data;

        public InMemoryStorageService() 
        {
            _data = new List<RxModel>
            {
             new RxModel
            {
                DrugName = "Amoxicillin",
                Strength = "500mg",
                Quantity = 15,
                Directions = "Take one capsule three times a day for 10 days",
                Refills = 1,
                Prescriber = "Dr. John Smith",
                RxNumber = "RX123456"
            },
            new RxModel
            {
                DrugName = "Lisinopril",
                Strength = "10mg",
                Quantity = 20,
                Directions = "Take one tablet daily",
                Refills = 2,
                Prescriber = "Dr. Emily Davis",
                RxNumber = "RX234567"
            },
            new RxModel
            {
                DrugName = "Metformin",
                Strength = "500mg",
                Quantity = 6,
                Directions = "Take one tablet twice a day with meals",
                Refills = 3,
                Prescriber = "Dr. Alan Grant",
                RxNumber = "RX345678"
            },
            new RxModel
            {
                DrugName = "Simvastatin",
                Strength = "20mg",
                Quantity = 50,
                Directions = "Take one tablet at night",
                Refills = 0,
                Prescriber = "Dr. Jane Doe",
                RxNumber = "RX456789"
            },
            new RxModel
            {
                DrugName = "Levothyroxine",
                Strength = "50mcg",
                Quantity = 75,
                Directions = "Take one tablet daily in the morning on an empty stomach",
                Refills = 2,
                Prescriber = "Dr. Chris Taylor",
                RxNumber = "RX567890"
            },
            new RxModel
            {
                DrugName = "Amlodipine",
                Strength = "5mg",
                Quantity = 30,
                Directions = "Take one tablet daily",
                Refills = 1,
                Prescriber = "Dr. Laura Palmer",
                RxNumber = "RX678901"
            }
            };
        }

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
