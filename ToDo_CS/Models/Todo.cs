using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ToDo_CS.Models
{
    public class ToDo
    {
        [Key]
        public int Id { get; set; }
        public string Task { get; set; }
        public string AssignedTo { get; set; }
        public bool IsCompleted { get; set; }
    }
}