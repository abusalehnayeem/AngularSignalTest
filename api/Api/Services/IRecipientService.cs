using Api.Models;

namespace Api.Services
{
    public interface IRecipientService
    {
        Task<List<Recipient>> GetRecipientsAsync(CancellationToken cancellationToken);
    }
}
