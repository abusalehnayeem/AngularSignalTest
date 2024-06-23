using Api.Models;
using Api.Services;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Api.Controllers;

[Route("api/rest")]
[ApiController]
public class RestController(IRecipientService recipientService) : ControllerBase
{
    // GET: api/<RestController>
    [HttpGet("recipient")]
    public async Task<ActionResult<List<Recipient>>> Get()
    {
        var result = await recipientService.GetRecipientsAsync(cancellationToken: default);
        return Ok(result);
    }
}