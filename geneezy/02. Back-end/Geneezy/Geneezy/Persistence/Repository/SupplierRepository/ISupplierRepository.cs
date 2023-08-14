using System.Threading.Tasks;
using Geneezy.Domain.Entity.Model;
using System.Collections.Generic;

namespace Geneezy.Persistence.Repository
{
    public interface ISupplierRepository
    {
        // Consult
        Task<List<Supplier>> GetAllSuppliers();
        Task<Supplier> GetSupplierById(uint id);

        // Action
        Task InsertSupplier(Supplier supplier);
        Task UpdateSupplier(Supplier supplier);
        Task DeleteSupplier(Supplier supplier);
    }
}
