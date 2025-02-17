using Ocelot.DependencyInjection;
using Ocelot.Middleware;

var builder = WebApplication.CreateBuilder(args);
builder.Configuration.AddJsonFile("ocelot.json");
builder.Services.AddOcelot(builder.Configuration);
builder.WebHost.UseUrls("http://localhost:5042");

var app = builder.Build();
await app.UseOcelot();

app.Run();
