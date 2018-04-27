export class YT{
    Player(): Player{
        let myPlayer = new Player('player', {height:'390', width:'640', videoId:'M7lc1UVf-VE', events:{'onReady': 'onPlayerReady','onStateChange': 'onPlayerStateChange'}})
        return myPlayer;
    }
}
class Player{
    height: string;
    width: string;
    videoId: string;
    events: object;
    constructor(title: string, obj: Player){

    }
}