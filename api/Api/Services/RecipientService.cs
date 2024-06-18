using Api.Models;
using Microsoft.EntityFrameworkCore;

namespace Api.Services;

public class RecipientService(ProjectContext db) : IRecipientService
{
    public async Task<List<Recipient>> GetRecipientsAsync(CancellationToken cancellationToken) => await db.Recipients.ToListAsync(cancellationToken);
}