using Microsoft.AspNetCore.Identity;
using APISPOTIFY.Authentication;
using APISPOTIFY.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APISPOTIFY.IRepository
{
   public interface IAdmin
    {

        Task<IdentityResult> RegisterAdmin(RegisterModel model);
        public void CreateAdmin(RegisterModel model);
        public Admin FindName(string UserName);
       public Admin FindContact(string ContactNo);
       
    }
}
