using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ToDo_CS.Models;

namespace ToDo_CS.Controllers
{
    [Authorize]
    public class ToDoController : ApiController
    {
        private ApplicationDbContext _context;

        //Use Dependency Injection instead
        public ToDoController()
        {
            _context = new ApplicationDbContext();
        }

        [Route("api/todo/{id}")]
        public ToDo GetOne(int id)
        {
            return _context.ToDos.Find(id);
        }

        [Route("api/todo")]
        public List<ToDo> GetAll()
        {
            return _context.ToDos.ToList();
        }

        [Route("api/todo")]
        [HttpPost]
        public void Add(ToDo newToDo)
        {
            _context.ToDos.Add(newToDo);
            _context.SaveChanges();
        }

        [Route("api/delete/{id}")]
        [HttpPost]
        public void Delete(int id)
        {
            ToDo x = _context.ToDos.Find(id);
            _context.ToDos.Remove(x);
            _context.SaveChanges();
        }

        [Route("api/editstatus/{id}")]
        [HttpPut]
        public void Edit(int id)
        {
            ToDo x = _context.ToDos.Find(id);
            x.IsCompleted = !x.IsCompleted;
            _context.Entry(x).State = EntityState.Modified;
            _context.SaveChanges();
        }

        [Route("api/editcontent")]
        [HttpPut]
        public void EditContent(ToDo item)
        {
            ToDo x = _context.ToDos.Find(item.Id);
            x.Task = item.Task;
            x.AssignedTo = item.AssignedTo;
            _context.Entry(x).State = EntityState.Modified;
            _context.SaveChanges();
        }
    }
}
