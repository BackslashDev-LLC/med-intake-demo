using Microsoft.AspNetCore.Mvc.Versioning;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Microsoft.AspNetCore.HttpOverrides;
using MedIntakeDemo.Api.Services;
using BackslashDev.LLMTools.ImgToJson.Config;

namespace MedIntakeDemo.Api.Configuration
{
    public static class ApplicationBuilderExtensions
    {
        public static void Configure(this ConfigurationManager configuration)
        {
            configuration.AddJsonFile("appsettings.local.json", optional: true, reloadOnChange: true);
        }

        public static void Configure(this IServiceCollection services, IConfiguration configuration)
        {
            services
                .AddControllers()
                .ConfigureApiBehaviorOptions(options =>
                {

                })
                .AddNewtonsoftJson(options =>
                {
                    options.SerializerSettings.Converters.Add(new Newtonsoft.Json.Converters.StringEnumConverter());
                    options.SerializerSettings.NullValueHandling = NullValueHandling.Include;
                    options.SerializerSettings.DateFormatHandling = DateFormatHandling.IsoDateFormat;
                    options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
                });

            services.AddApiVersioning(o =>
            {
                o.ReportApiVersions = true;
                o.AssumeDefaultVersionWhenUnspecified = true;
                o.DefaultApiVersion = new ApiVersion(1, 0);
                o.ApiVersionReader = new HeaderApiVersionReader();
            });

            services.AddDemoStorage();
            services.AddImgToJson(configuration);

            services.AddCors(opts =>
            {
                opts.AddPolicy("AllOrigins", builder =>
                {
                    builder.AllowAnyOrigin();
                    builder.AllowAnyMethod();
                    builder.AllowAnyHeader();
                });
            });

            services.Configure<ForwardedHeadersOptions>(options =>
            {
                options.ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto;
            });

            services.AddSwagger();
        }
    }
}
