class Taiyaki {
    constructor(nakami) {
        this.nakami = nakami;
    }
    functionNakami() {
        console.log("中身は" + this.nakami + "です");
    }
}

let taiyaki_1 = new Taiyaki("あんこ");
let taiyaki_2 = new Taiyaki("クリーム");
let taiyaki_3 = new Taiyaki("チーズ");
functionNakami();