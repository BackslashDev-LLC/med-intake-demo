namespace MedIntakeDemo.Api.Models
{
    public class RxModel
    {
        public string DrugName { get; set; } = string.Empty;
        public string Strength { get; set; } = string.Empty;
        public int Quantity { get; set; }
        public string Directions { get; set; } = string.Empty;
        public int Refills { get; set; }
        public string Prescriber { get; set; } = string.Empty;
        public string RxNumber { get; set; } = string.Empty;
    }
}
