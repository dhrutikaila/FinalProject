# Musicsite

Aim:
In recent times, the usage of music streaming applications has increased
and hence there arises a need to create and maintain a relational database
and store information of the artists, users, songs, and podcasts. We also
need to account for the storage of subscription and payment details.


 Description:
The proposed database for music streaming application stores details of
music library which includes artists, albums, songs, podcast and genres. It
also stores details of subscription, premium plans and payment. This
database is for a personal collection because it stores the relationships
between songs, artists, albums and podcasts. It also contains information
regarding how many times a song, podcast or an album is being played or
liked. And also, it stores download details for the same.
 Table Description:
1. Countries: It contains country id and country name.
2. Languages: It contains language id and language name.
3. Roles: It contains role id and role name such as user, admin and artist.
4. Gender: It contains gender id and name.
5. User: It contains all basic details of users.
6. Profile: It contains additional details of users such as bio, profile
picture etc.
7. Userlanguages: It contains details regarding which user has which
language preferences. It has user id and language id.
8. Albums: It contains album details.
9. Genres: It contains genre id and genre name.
10. Songs: It contains all details of songs along with count of views and
downloads.
11. Songgenres: It stores details regarding which song belongs to which
genre. It contains song id and genre id.
12. Songartists: It stores details regarding which song is sung by which
artist.
13. Podcasts: It contains details of podcasts along with count of views,
downloads and also the date and time when it was streamed on.
14. Songlike: It contains details of which users liked which songs. It
contains song id and user id.
15. Podcastlike: It contains details of which users liked which podcasts. It
contains podcast id and user id.
16. Albumlike: It contains details of which users liked which albums. It
contains album id and user id.
17. Playlists: It stores the details of playlists created by users which
includes playlist name, created date etc.
18. PlaylistSongs: It stores details of which playlists contains which songs.
It contains song id and playlist id.
19. PlaylistPodcasts: It stores details of which playlists contains which
podcasts. It contains podcast id and playlist id.
20. Plans: It stores plan details which includes plan id, price and plan
name.
21. Subscription: It stores details regarding subscription of plans by users.
It contains subscription id, plan id, user id and duration.
22. PaymentMethod: It stores paymentmethod id and payment type.
23. Payments: It stores the payment details of subscribers.


![imp case](https://user-images.githubusercontent.com/88370858/153806428-9d3a8a8c-fc99-4213-b826-13db1e9f2a63.PNG)
 References:
1. https://open.spotify.com/
2. https://gaana.com/
