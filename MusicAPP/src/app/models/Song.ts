
export interface ISong {

    Name: string;
    Picture: string;

    SongFile: string;

    CreatedOn: Date;
    ViewCount: number;
    Downloads: number
}
export class song implements ISong {


    Name: string;
    Picture: string;

    SongFile: string;

    CreatedOn: Date;
    ViewCount: number;
    Downloads: number;

}