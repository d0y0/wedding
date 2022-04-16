var mapOptions_seoul = {
    center: new naver.maps.LatLng(37.5095182,127.0593863),
    zoom: 16,
    zoomControl : true,
    zoomControlOptions : {
		    position : naver.maps.Position.TOP_RIGHT
	  },
};
var map_seoul = new naver.maps.Map('map_seoul', mapOptions_seoul);

var marker_seoul = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.5095182,127.0593863),
    title: '소노펠리체 컨벤션\n3층 Diamond홀',
    map: map_seoul
});

var contentString_seoul = [
        '<div style="padding:4px 4px;">',
        '   <div style="font-weight:bold;padding-bottom:3px;">소노펠리체 컨벤션</div>',
        '</div>'
    ].join('');

var infowindow_seoul = new naver.maps.InfoWindow({
    content: contentString_seoul
});

naver.maps.Event.addListener(marker_seoul, "click", function(e) {
    if (infowindow_seoul.getMap()) {
        infowindow_seoul.close();
    } else {
        infowindow_seoul.open(map_seoul, marker_seoul);
    }
});

infowindow_seoul.open(map_seoul, marker_seoul);




var mapOptions_daegu = {
    center: new naver.maps.LatLng(35.886182, 128.648687),
    zoom: 16,
    zoomControl : true,
    zoomControlOptions : {
		    position : naver.maps.Position.TOP_RIGHT
	  },
};
var map_daegu = new naver.maps.Map('map_daegu', mapOptions_daegu);

var marker_daegu = new naver.maps.Marker({
    position: new naver.maps.LatLng(35.886182, 128.650687),
    title: '동촌역 4번출구',
    map: map_daegu
});



var mapOptions_daejeon = {
    center: new naver.maps.LatLng(36.4300005,127.3938977),
    zoom: 15,
    zoomControl : true,
    zoomControlOptions : {
		    position : naver.maps.Position.TOP_RIGHT
	  },
};
var map_daejeon = new naver.maps.Map('map_daejeon', mapOptions_daejeon);

var marker_daejeon = new naver.maps.Marker({
    position: new naver.maps.LatLng(36.4300005,127.3938977),
    title: '(주)코메스타',
    map: map_daejeon
});
