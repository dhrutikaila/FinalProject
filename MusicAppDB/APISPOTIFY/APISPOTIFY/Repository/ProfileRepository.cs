using APISPOTIFY.IRepository;
using APISPOTIFY.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APISPOTIFY.Repository
{
    public class ProfileRepository : Iprofile
    {
        private MusicAppDBContext _dB_MUSICContext;
        public ProfileRepository(MusicAppDBContext dB_MUSICContext)
        {
            _dB_MUSICContext = dB_MUSICContext;
        }

        public Profile AddProfile(Profile song)
        {
            _dB_MUSICContext.Profiles.Add(song);
            _dB_MUSICContext.SaveChanges();
            return song;
        }

        public void DeleteProfile(Profile song)
        {

            _dB_MUSICContext.Profiles.Remove(song);
            _dB_MUSICContext.SaveChanges();
        }

        public Profile EditProfile(Profile song)
        {
            var existingSong = _dB_MUSICContext.Profiles.Find(song.ProfileId);

            if (existingSong != null)
            {
                existingSong.User = song.User;
                _dB_MUSICContext.Profiles.Update(song);
                _dB_MUSICContext.SaveChanges();

            }
            return song;
        }

        public Profile GetProfile(int id)
        {
            var album = _dB_MUSICContext.Profiles.Find(id);
            return album;
        }

        public List<Profile> GetProfiles()
        {
            return _dB_MUSICContext.Profiles.ToList();
        }
    }
}
