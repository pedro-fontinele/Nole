using System.Linq;
using Geneezy.Data.Context;
using System.Threading.Tasks;
using Geneezy.Domain.Entity.Model;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Geneezy.Persistence.Repository
{
    public class SupplierRepository : ISupplierRepository
    {
        private readonly DataContext _dataContext;

        public SupplierRepository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public async Task<List<Supplier>> GetAllSuppliers()
        {
            IQueryable<Supplier> query = _dataContext.Supplier;

            query = query.AsNoTracking()
                         .Include(e => e.Person)
                         .OrderByDescending(e => e.Id);

            return await query.ToListAsync();
        }

        public async Task<Supplier> GetSupplierById(uint id)
        {
            IQueryable<Supplier> query = _dataContext.Supplier;

            query = query.AsNoTracking()
                         .Where(e => e.Id == id)
                         .Include(e => e.Person);

            return await query.FirstOrDefaultAsync();
        }

        public async Task InsertSupplier(Supplier supplier)
        {
            _dataContext.Supplier.Add(supplier);
            await _dataContext.SaveChangesAsync();
        }

        public async Task UpdateSupplier(Supplier supplier)
        {
            _dataContext.Supplier.Update(supplier);
            await _dataContext.SaveChangesAsync();
        }

        public async Task DeleteSupplier(Supplier supplier)
        {
            _dataContext.Supplier.Remove(supplier);
            await _dataContext.SaveChangesAsync();
        }
    }
}
