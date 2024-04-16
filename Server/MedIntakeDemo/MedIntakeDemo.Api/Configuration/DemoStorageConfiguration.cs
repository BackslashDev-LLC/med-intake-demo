using MedIntakeDemo.Api.Services;

namespace MedIntakeDemo.Api.Configuration
{
    public static class DemoStorageConfiguration
    {
        public static IServiceCollection AddDemoStorage(this IServiceCollection services) 
        {
            services.AddSingleton<IStorageService, InMemoryStorageService>();

            return services;
        }
    }
}
