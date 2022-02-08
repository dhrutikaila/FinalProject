using APISPOTIFY.IRepository;
using APISPOTIFY.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace APISPOTIFY.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProfileControler : ControllerBase
    {
        private Iprofile _profile;
        public ProfileControler(Iprofile songdata)
        {
            _profile = songdata;
        }
        [HttpGet]
        [Route("api/[controller]")]
        public IActionResult GetProfiles()
        {
            return Ok(_profile.GetProfiles());

        }
        [HttpGet]
        [Route("api/[controller]/{id}")]
        public IActionResult GetProfile(int id)
        {
            var song = _profile.GetProfile(id);

            if (song != null)
            {
                return Ok(song);
            }
            return NotFound($"songs with id :{id} was not found");
        }
        [HttpPost]
        [Route("api/[controller]")]

        public IActionResult AddProfile(Profile song)
        {
            _profile.AddProfile(song);
            return Created(HttpContext.Request.Scheme + "://" + HttpContext.Request.Host + HttpContext.Request.Path + "/" + song.ProfileId,
                song);

        }
        [HttpDelete]
        [Route("api/[controller]")]

        public IActionResult DeleteProfile(int id)
        {
            var song = _profile.GetProfile(id);
            if (song != null)
            {
                _profile.DeleteProfile(song);
                return Ok();
            }
            return NotFound($"songs with id :{id} was not found");

        }
        [HttpPatch]
        [Route("api/[controller]")]

        public IActionResult EditProfile(int id, Profile profile)
        {
            var existingSong = _profile.GetProfile(id);
            if (existingSong != null)
            {
                profile.ProfileId = existingSong.ProfileId;
                _profile.EditProfile(profile);

            }
            return Ok(profile);
        }
    }
}
