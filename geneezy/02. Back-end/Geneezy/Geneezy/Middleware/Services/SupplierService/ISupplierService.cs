using System.Threading.Tasks;
using Geneezy.Domain.Entity.Dto;
using System.Collections.Generic;

namespace Geneezy.Middleware.Services
{
    public interface ISupplierService
    {
        // Consult
        Task<List<SupplierDto>> GetAllSuppliers();
        Task<SupplierDto> GetSupplierById(uint id);

        // Action
        Task<SupplierDto> InsertSupplier(SupplierDto supplierDto);
        Task<SupplierDto> UpdateSupplier(uint id, SupplierDto supplierDto);
        Task DeleteSupplier(uint id);
    }
}
