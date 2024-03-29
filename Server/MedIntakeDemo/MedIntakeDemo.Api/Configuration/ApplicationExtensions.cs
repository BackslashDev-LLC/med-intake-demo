using MedIntakeDemo.Api.Models;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.Extensions.Options;

namespace MedIntakeDemo.Api.Configuration
{
    public static class ApplicationExtensions
    {
        public static void ConfigureMiddleware(this IApplicationBuilder app)
        {
            var settings = app.ApplicationServices.GetRequiredService<IOptions<EnvironmentSettings>>();

            app.ApplySwaggerMiddleware(settings.Value);

            app.Use(async (ctx, next) =>
            {
                ctx.Request.EnableBuffering();
                await next();
                if (ctx.Response.StatusCode == 204)
                {
                    ctx.Response.ContentLength = 0;
                }
            });

            app.UseMiddleware<ErrorHandlerMiddleware>();

            app.UseForwardedHeaders(new ForwardedHeadersOptions { ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto });
            app.UseCors("AllOrigins");
        }

        public static void ConfigureEndpoints(this IEndpointRouteBuilder app)
        {
            app.MapControllers();
        }
    }
}
