using APISPOTIFY.IRepository;
using APISPOTIFY.Models;
using Microsoft.EntityFrameworkCore;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APISPOTIFY.Repository
{

    public class GenericRepository<T> : IGenericInterface<T> where T : class
    {
        protected readonly MusicAppDBContext _MusicAppDBContext;
        

        public GenericRepository(MusicAppDBContext _context)
        {
            _MusicAppDBContext = _context;
        }

       
        public virtual void Create(T entity)
        {
            _MusicAppDBContext.Add(entity);
            _MusicAppDBContext.SaveChanges();
        }

        public virtual void Delete(int id)
        {
            _MusicAppDBContext.Remove(id);
            _MusicAppDBContext.SaveChanges();
        }

        public T GetById(int id)
        {
            return _MusicAppDBContext.Set<T>().Find(id);
        }

        public virtual IEnumerable<T> GetAll()
        {
            return _MusicAppDBContext.Set<T>();
        }

        public virtual void Update(int id, T entity)
        {
            _MusicAppDBContext.Entry(entity).State = EntityState.Modified;
            _MusicAppDBContext.SaveChanges();
        }

        public IEnumerable<T> Find(Func<T, bool> predicate)
        {
            return _MusicAppDBContext.Set<T>().Where(predicate);
        }

        public bool Any(Func<T, bool> predicate)
        {
            return _MusicAppDBContext.Set<T>().Any(predicate);
        }

        public bool Any()
        {
            return _MusicAppDBContext.Set<T>().Any();
        }

        public int Count(Func<T, bool> predicate)
        {
            throw new NotImplementedException();
        }
    }
}