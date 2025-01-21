using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Caching.Memory;

public class CacheResponseFilter : IResourceFilter
{
    private readonly IMemoryCache _cache;

    public CacheResponseFilter(IMemoryCache cache)
    {
        _cache = cache;
    }

    public void OnResourceExecuting(ResourceExecutingContext context)
    {
        if (context.HttpContext.Request.Method == "GET")
        {
            var key = context.HttpContext.Request.Path;
            if (_cache.TryGetValue(key, out var json))
            {
                context.Result = new OkObjectResult(json);
            }
        }
    }

    public void OnResourceExecuted(ResourceExecutedContext context)
    {
        if (context.HttpContext.Request.Method == "GET")
        {
            var key = context.HttpContext.Request.Path;
            if (!_cache.TryGetValue(key, out var json))
            {
                var okResult = context.Result as OkObjectResult;
                if (okResult != null)
                {
                    _cache.Set(
                        key,
                        okResult.Value,
                        new MemoryCacheEntryOptions().SetAbsoluteExpiration(TimeSpan.FromMinutes(5))
                    );
                }
            }
        }
    }

}
