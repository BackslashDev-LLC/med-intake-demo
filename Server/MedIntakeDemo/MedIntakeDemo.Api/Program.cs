using MedIntakeDemo.Api.Configuration;
using NLog;
using NLog.Web;

var logger = LogManager.GetCurrentClassLogger();
logger.Debug("init main");

try
{
    var builder = WebApplication.CreateBuilder(args);

    builder.Logging.ClearProviders();
    builder.Host.UseNLog();

    builder.Configuration.Configure();

    builder.Services.Configure(builder.Configuration);

    var app = builder.Build();

    app.ConfigureMiddleware();

    app.UseHttpsRedirection();

    app.UseAuthentication();

    app.UseAuthorization();

    app.ConfigureEndpoints();

    app.Run();
}
catch (Exception ex)
{
    logger.Error(ex, "Stopped program because of exception");
    throw;
}
finally
{
    LogManager.Shutdown();
}