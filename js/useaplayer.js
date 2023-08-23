const ap = new APlayer({
    container: document.getElementById('aplayer'),
    // theme: '#e9e9e9',
    fixed: true,
    autoplay: false,
    lrcType: 3,
    audio: [
        {
            name: 'ドリームレス·ドリームス.',
            artist: '初音未来',
            url: 'https://blog-source.moechun.fun/music/mp3/%E5%88%9D%E9%9F%B3%E6%9C%AA%E6%9D%A5%20-%20%E3%83%89%E3%83%AA%E3%83%BC%E3%83%A0%E3%83%AC%E3%82%B9%C2%B7%E3%83%89%E3%83%AA%E3%83%BC%E3%83%A0%E3%82%B9.mp3',
            cover: 'https://blog-source.moechun.fun/music/cover/%E5%88%9D%E9%9F%B3%E6%9C%AA%E6%9D%A5%20-%20%E3%83%89%E3%83%AA%E3%83%BC%E3%83%A0%E3%83%AC%E3%82%B9%C2%B7%E3%83%89%E3%83%AA%E3%83%BC%E3%83%A0%E3%82%B9.jpg',
            lrc: 'https://blog-source.moechun.fun/music/lrc/%E5%88%9D%E9%9F%B3%E6%9C%AA%E6%9D%A5%20-%20%E3%83%89%E3%83%AA%E3%83%BC%E3%83%A0%E3%83%AC%E3%82%B9%C2%B7%E3%83%89%E3%83%AA%E3%83%BC%E3%83%A0%E3%82%B9.lrc'
        },
        {
            name: 'おもかげ',
            artist: 'milet、Aimer、幾田りら',
            url: 'https://blog-source.moechun.fun/music/mp3/milet%E3%80%81Aimer%E3%80%81%E5%B9%BE%E7%94%B0%E3%82%8A%E3%82%89%20-%20%E3%81%8A%E3%82%82%E3%81%8B%E3%81%92%28produced%20by%20Vaundy%29%20%28%E9%9D%A2%E5%BD%B1%29.mp3',
            cover: 'https://p1.music.126.net/EMbaidax3NdEnnfWuD8qFg==/109951166682360582.jpg?param=130y130',
            lrc: 'https://blog-source.moechun.fun/music/lrc/milet%E3%80%81Aimer%E3%80%81%E5%B9%BE%E7%94%B0%E3%82%8A%E3%82%89%20-%20%E3%81%8A%E3%82%82%E3%81%8B%E3%81%92%28produced%20by%20Vaundy%29%20%28%E9%9D%A2%E5%BD%B1%29.lrc'
        },
        {
            name: '海のまにまに',
            artist: 'YOASOBI',
            url: 'https://blog-source.moechun.fun/music/mp3/YOASOBI%20-%20%E6%B5%B7%E3%81%AE%E3%81%BE%E3%81%AB%E3%81%BE%E3%81%AB%20%28%E4%BB%BB%E7%94%B1%E6%B5%B7%E6%B3%A2%E8%8D%A1%E6%BC%BE%29.mp3',
            cover: 'https://p2.music.126.net/IViHFIjIJb6BdlCamNb4Yw==/109951168025317111.jpg?param=130y130',
            lrc: 'https://blog-source.moechun.fun/music/lrc/YOASOBI%20-%20%E6%B5%B7%E3%81%AE%E3%81%BE%E3%81%AB%E3%81%BE%E3%81%AB%20%28%E4%BB%BB%E7%94%B1%E6%B5%B7%E6%B3%A2%E8%8D%A1%E6%BC%BE%29.lrc'
        },
        {
            name: '花の塔',
            artist: 'さユり',
            url: 'http://music.163.com/song/media/outer/url?id=1956534872.mp3',
            cover: 'https://p2.music.126.net/fS_5RbP_4qg-RYreqp2tGg==/109951167558017839.jpg?param=130y130',
            lrc: 'https://moechun.fun/music/lrc/さユり - 花の塔.lrc'
        },
        {
            name: 'マイペースにマーメイド',
            artist: 'harmoe',
            url: 'https://img.moechun.fun/music/mp3/harmoe%20-%20%E3%83%9E%E3%82%A4%E3%83%9A%E3%83%BC%E3%82%B9%E3%81%AB%E3%83%9E%E3%83%BC%E3%83%A1%E3%82%A4%E3%83%89_SQ.flac',
            cover: 'https://p2.music.126.net/_y00UVDoLsW2SMyjzj9L_Q==/109951167697579269.jpg?param=130y130',
            lrc: 'https://img.moechun.fun/music/lrc/harmoe%20-%20%E3%83%9E%E3%82%A4%E3%83%9A%E3%83%BC%E3%82%B9%E3%81%AB%E3%83%9E%E3%83%BC%E3%83%A1%E3%82%A4%E3%83%89.lrc'
        },
        {
            name: 'きまぐれチクタック',
            artist: 'harmoe',
            url: 'https://img.moechun.fun/music/mp3/harmoe%20-%20%E3%81%8D%E3%81%BE%E3%81%90%E3%82%8C%E3%83%81%E3%82%AF%E3%82%BF%E3%83%83%E3%82%AF_SQ.flac',
            cover: 'https://p1.music.126.net/OUFTP8ZoISU1Ih1x5e0E5w==/109951165814174281.jpg?param=130y130',
            lrc: 'https://img.moechun.fun/music/lrc/harmoe%20-%20%E3%81%8D%E3%81%BE%E3%81%90%E3%82%8C%E3%83%81%E3%82%AF%E3%82%BF%E3%83%83%E3%82%AF.lrc'
        },
        {
            name: 'ふたりピノキオ',
            artist: 'harmoe',
            url: 'https://img.moechun.fun/music/mp3/harmoe%20-%20%E3%81%B5%E3%81%9F%E3%82%8A%E3%83%94%E3%83%8E%E3%82%AD%E3%82%AA.mp3',
            cover: 'https://p2.music.126.net/LtvCokNH5RsW6Ogc46rRYg==/109951167669797794.jpg?param=130y130',
            lrc: 'https://img.moechun.fun/music/lrc/harmoe%20-%20%E3%81%B5%E3%81%9F%E3%82%8A%E3%83%94%E3%83%8E%E3%82%AD%E3%82%AA.lrc'
        },
        {
            name: '異世界混合大舞踏会',
            artist: '星野源',
            url: 'https://img.moechun.fun/music/mp3/%E6%98%9F%E9%87%8E%E6%BA%90%20-%20%E7%95%B0%E4%B8%96%E7%95%8C%E6%B7%B7%E5%90%88%E5%A4%A7%E8%88%9E%E8%B8%8F%E4%BC%9A.mp3',
            cover: 'https://p2.music.126.net/NXHj1IsHcH1veMJEOEJafQ==/109951167677716941.jpg?param=130y130',
            lrc: 'https://img.moechun.fun/music/lrc/%E6%98%9F%E9%87%8E%E6%BA%90%20-%20%E7%95%B0%E4%B8%96%E7%95%8C%E6%B7%B7%E5%90%88%E5%A4%A7%E8%88%9E%E8%B8%8F%E4%BC%9A.lrc'
        },

    ]
});