﻿using Microsoft.AspNetCore.Identity;
using APISPOTIFY.Authentication;
using APISPOTIFY.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APISPOTIFY.IRepository
{
    public interface IUser : IGenericInterface<ApplicationUser>
    {
        Task<IdentityResult> RegisterUser(RegisterModel model);
        Task<string> LoginUser(string UserName, string password);
        public User FindName(string name);
        public User FindContact(string contact);

        public IEnumerable GetAllUsers();
    }
}
