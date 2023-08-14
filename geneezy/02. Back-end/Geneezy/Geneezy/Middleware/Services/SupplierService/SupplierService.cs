using AutoMapper;
using Geneezy.Domain.Entity.Dto;
using System.Threading.Tasks;
using Geneezy.Domain.Entity.Model;
using System.Collections.Generic;
using Geneezy.Persistence.Repository;

namespace Geneezy.Middleware.Services
{
    public class SupplierService : ISupplierService
    {
        private readonly IMapper _imapper;
        private readonly ISupplierRepository _isupplierRepository;

        public SupplierService(IMapper mapper, ISupplierRepository isupplierRepository)
        {
            _imapper = mapper;
            _isupplierRepository = isupplierRepository;
        }

        public async Task<List<SupplierDto>> GetAllSuppliers()
        {
            var supplier = await _isupplierRepository.GetAllSuppliers();
            return _imapper.Map<List<SupplierDto>>(supplier);
        }

        public async Task<SupplierDto> GetSupplierById(uint id)
        {
            var supplier = await _isupplierRepository.GetSupplierById(id);
            return _imapper.Map<SupplierDto>(supplier);
        }

        public async Task<SupplierDto> InsertSupplier(SupplierDto supplierDto)
        {
            if (supplierDto == null)
            {
                return null;
            }

            var supplier = _imapper.Map<Supplier>(supplierDto);
            await _isupplierRepository.InsertSupplier(supplier);
            return _imapper.Map<SupplierDto>(supplier);
        }

        public async Task<SupplierDto> UpdateSupplier(uint id, SupplierDto supplierDto)
        {
            if (supplierDto == null)
            {
                return null;
            }

            var supplier = await _isupplierRepository.GetSupplierById(id);
            if (supplier == null)
            {
                return null;
            }

            supplier = _imapper.Map<Supplier>(supplierDto);
            await _isupplierRepository.UpdateSupplier(supplier);
            return _imapper.Map<SupplierDto>(supplier);
        }

        public async Task DeleteSupplier(uint id)
        {
            var supplier = await _isupplierRepository.GetSupplierById(id);
            if (supplier != null)
            {
                await _isupplierRepository.DeleteSupplier(supplier);
            }
        }
    }
}