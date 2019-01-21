export class Episode {
    episodeName: string;

    haveSeen: boolean;

    seriesName: string;

    public constructor(episodeName: string, haveSeen: boolean, seriesName: string) {
        this.episodeName = episodeName;
        this.haveSeen = haveSeen;
        this.seriesName = seriesName;
    }
}
