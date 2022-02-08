﻿
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.Extensions.Configuration;


using APISPOTIFY.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IdentityModel.Tokens.Jwt;

using APISPOTIFY.Repository;
using APISPOTIFY.Authentication;
using APISPOTIFY.IRepository;

namespace APISPOTIFY.Repository
{
    public class AdminRepository : GenericRepository<ApplicationUser>, IAdmin
    {
        private readonly UserManager<ApplicationUser> userManager;
        private readonly RoleManager<IdentityRole> roleManager;
        private readonly IConfiguration _configuration;
       // private readonly MusicAppDBContext musicAppDBContext;

        public AdminRepository(MusicAppDBContext context, UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager, IConfiguration configuration) : base(context)
        {
            this.userManager = userManager;
            this.roleManager = roleManager;
            _configuration = configuration;
           // musicAppDBContext = context;
        }

        public void CreateAdmin(RegisterModel model)
        {
            _MusicAppDBContext.Admins.Add(new Admin()
            {
              //  PhoneNumber = model.PhoneNumber,
                Email = model.Email, 
                UserName = model.UserName
            });

            _MusicAppDBContext.SaveChanges();
        }
        public Admin FindContact(string ContactNo)
        {
            var registeredAdmin = _MusicAppDBContext.Admins.FirstOrDefault(x => x.ContactNo == ContactNo);
            return registeredAdmin;
        }
        public Admin FindName(string UserName)
        {
            var registeredAdmin = _MusicAppDBContext.Admins.FirstOrDefault(x => x.UserName == UserName);
            return registeredAdmin;
        }
        // To Register admin
        public async Task<IdentityResult> RegisterAdmin(RegisterModel model)
        {
            ApplicationUser admin = new ApplicationUser()
            {
               Email = model.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = model.UserName,
               PhoneNumber = model.ContactNo
            };
            var result = await userManager.CreateAsync(admin, model.Password);

            if (!await roleManager.RoleExistsAsync(UserRoles.Admin))
                await roleManager.CreateAsync(new IdentityRole(UserRoles.Admin));

            if (await roleManager.RoleExistsAsync(UserRoles.Admin))
            {
                await userManager.AddToRoleAsync(admin, UserRoles.Admin);
            }
            if (result.Succeeded)
            {
                _MusicAppDBContext.Admins.Add(new Admin()
                {
                    ContactNo = model.ContactNo,
                    Email = model.Email,
                    Password = admin.PasswordHash,
                    UserName = model.UserName
                });
                _MusicAppDBContext.SaveChanges();
            }

            return result;
        }

    
    }
}
