
export interface ISong {

    SongId: number;
    AlbumId: number;
    Name: string;
    Picture: string;
    LanguageId: number;
    SongFile: string;
    Duration: number;
    PublishedOn: number;
    Active: boolean;
    CreatedOn: string;
    UpdatedOn: string;
    DeletedOn: string;
    ViewCount: number;
    Downloads: number
}
export class song implements ISong {
    SongId: number;
    AlbumId: number;
    Name: string;
    Picture: string;
    LanguageId: number;
    SongFile: string;
    Duration: number;
    PublishedOn: number;
    Active: boolean;
    CreatedOn: string;
    UpdatedOn: string;
    DeletedOn: string;
    ViewCount: number;
    Downloads: number;

}