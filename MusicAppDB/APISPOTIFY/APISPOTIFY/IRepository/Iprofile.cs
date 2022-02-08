using APISPOTIFY.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APISPOTIFY.IRepository
{
    public interface Iprofile
    {
        List<Profile> GetProfiles();
        Profile GetProfile(int id);
        Profile AddProfile(Profile song);
        void DeleteProfile(Profile song);
        Profile EditProfile(Profile song);
    }
}
