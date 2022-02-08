using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace APISPOTIFY.Models
{
    public partial class User
    {
       
        [Key]
        public int UserID { get; set; }
       
        public string Contactno { get; set; }
  
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int Otp { get; set; }
     
       // public DateTime CreatedOn { get; set; }
     
      
       
     
       
    }
}
