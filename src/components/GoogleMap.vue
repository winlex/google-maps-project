<template>
  <div>
    <gmap-map
      ref="googleMap"
      :center="center"
      :zoom="12"
      :style="{
        'width': '100%',
        'height': `${getHeight}px`
      }"
      @click="onMapClick"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
      ></gmap-marker>
      <gmap-polygon :paths="mkad">
      </gmap-polygon>
      <gmap-polygon :paths="newMkad">
      </gmap-polygon>
      <!--<gmap-polyline v-bind:path.sync="path">
      </gmap-polyline>-->
    </gmap-map>
  </div>
</template>

<script>
import {gmapApi} from 'vue2-google-maps'

var to_flo = x => x != '' ? Math.round(x*100)/100 : 0;

export default {
  name: "GoogleMap",
  data() {
    return {
      R: 6371000,
      center: { lat: 55.754631567557425, lng: 37.61853394886384 },
      markers: [],
      distance1: [
      ],
      mkad: [
        [
          {lat: 55.83229439448913, lng: 37.39536504972758},
          {lat: 55.807220244473605, lng: 37.38764028776469},
          {lat: 55.80519431935926, lng: 37.38643865812602},
          {lat: 55.789755237374735, lng: 37.37270574796977},
          {lat: 55.785218843856285, lng: 37.36995916593852},
          {lat: 55.766778276894485, lng: 37.36910085905375},
          {lat: 55.74962177418401, lng: 37.36881373542752},
          {lat: 55.734257313508905, lng: 37.37533686775174},
          {lat: 55.71366525282681, lng: 37.38615153449979},
          {lat: 55.71008712115698, lng: 37.38838313240018},
          {lat: 55.69332317433356, lng: 37.410758776242595},
          {lat: 55.69022698190362, lng: 37.41333369689689},
          {lat: 55.683668443759274, lng: 37.41644037936621},
          {lat: 55.67834539742725, lng: 37.420216929659176},
          {lat: 55.665083022973064, lng: 37.42982996676855},
          {lat: 55.663340187081246, lng: 37.43154658053808},
          {lat: 55.654140600744014, lng: 37.441502940401364},
          {lat: 55.64358262229136, lng: 37.4545492050498},
          {lat: 55.62274890599167, lng: 37.478925120577145},
          {lat: 55.59899465356421, lng: 37.50707758639746},
          {lat: 55.59676392367105, lng: 37.50982416842871},
          {lat: 55.590847025763736, lng: 37.53128184054785},
          {lat: 55.576716074795726, lng: 37.590859383381314},
          {lat: 55.571960799163854, lng: 37.67040571797691},
          {lat: 55.573527137260434, lng: 37.68094886753275},
          {lat: 55.60099612881722, lng: 37.75135460777609},
          {lat: 55.60358991493466, lng: 37.75640094549031},
          {lat: 55.62491842438976, lng: 37.795024755304766},
          {lat: 55.65233441038426, lng: 37.83644924122197},
          {lat: 55.657951516111524, lng: 37.83936748463017},
          {lat: 55.673547072569576, lng: 37.83542368792568},
          {lat: 55.69125766721112, lng: 37.82975886248623},
          {lat: 55.697546385489986, lng: 37.82958720110928},
          {lat: 55.715240722382696, lng: 37.8385843207782},
          {lat: 55.737378273098614, lng: 37.84098758005555},
          {lat: 55.7606441043686, lng: 37.842532532448125},
          {lat: 55.771880467776285, lng: 37.842532532448125},
          {lat: 55.79697737955019, lng: 37.84064425730164},
          {lat: 55.819743658808896, lng: 37.838069336647344},
          {lat: 55.825143872302405, lng: 37.83497943186219},
          {lat: 55.82996485810913, lng: 37.828284638161016},
          {lat: 55.851226187839565, lng: 37.78690485305119},
          {lat: 55.87319029329047, lng: 37.7441253456108},
          {lat: 55.8923157574003, lng: 37.70541468739056},
          {lat: 55.89424089214033, lng: 37.69734660267376},
          {lat: 55.89529967553472, lng: 37.677262221570246},
          {lat: 55.89559241389521, lng: 37.6606422336955},
          {lat: 55.896554911919786, lng: 37.651715842093935},
          {lat: 55.89770987803101, lng: 37.64107283672284},
          {lat: 55.900308426069174, lng: 37.626481619681826},
          {lat: 55.903003032780276, lng: 37.613263693656435},
          {lat: 55.906755923055215, lng: 37.600045767631045},
          {lat: 55.91021980716217, lng: 37.586312857474795},
          {lat: 55.91089330425372, lng: 37.57944640239667},
          {lat: 55.910700877706944, lng: 37.57120665630292},
          {lat: 55.906667032028146, lng: 37.53363651125127},
          {lat: 55.905993461533434, lng: 37.52934497682744},
          {lat: 55.904646285448685, lng: 37.52522510378056},
          {lat: 55.902721667010184, lng: 37.521448553487595},
          {lat: 55.88934293036697, lng: 37.49019474016247},
          {lat: 55.887610094691986, lng: 37.48401493059216},
          {lat: 55.88520325011874, lng: 37.47354358659802},
          {lat: 55.88269997342972, lng: 37.464445533619504},
          {lat: 55.88269997342972, lng: 37.45088428484021},
          {lat: 55.88226388283934, lng: 37.44651708608978},
          {lat: 55.870900701110344, lng: 37.411841487945246},
          {lat: 55.86878177397582, lng: 37.40806493765228},
          {lat: 55.865410515262944, lng: 37.40325841909759},
          {lat: 55.86317568608763, lng: 37.4008797164198},
          {lat: 55.8613453463702, lng: 37.39916310265027},
          {lat: 55.849012389088855, lng: 37.39195332481824},
          {lat: 55.84718138208864, lng: 37.39161000206433},
          {lat: 55.84515753715497, lng: 37.3924683089491},
          {lat: 55.84284444248555, lng: 37.39366993858777},
          {lat: 55.840145658079436, lng: 37.3953865523573},
          {lat: 55.838217840230655, lng: 37.39624485924207},
          {lat: 55.83638632473639, lng: 37.39658818199597}
        ]
      ],
      newMkad: [[]],
      info: {
        address: null,
        LatLNG: null,
        worldCoordinate: null,
        distanceRoad: null,
        distanceAir: null,
        point: null
      }
    };
  },

  computed: {
    google: gmapApi,
    getHeight() {
      const newHeight = window.innerHeight;
      //console.log(newHeight)
      return newHeight ? newHeight : 0;
    }
  },

  mounted() {
  },

  methods: {
    onMapClick(e) {
      //console.log("{lat: " + e.latLng.lat() + ", lng: " + e.latLng.lng() + "}");
      let point1 = {
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
      } //выбранная точка

      this.markers = [];
      let marker = {
        index: 1 + Math.max(0, ...this.markers.map(n => n.id)),
        position: e.latLng
      };
      this.markers.push(marker);

      this.distanceToPolygon(point1, this.mkad[0])
      .then(r => {
        console.log(r);
        this.$notify.info({
          title: 'Info',
          dangerouslyUseHTMLString: true,
          message: 'Адрес: ' + r.address + '<br>' + 'Расстояние до МКАД по воздуху: ' + r.distanceAir + '<br>' + 'Расстояние до МКАД по дороге: ' + r.distanceRoad
        });
        //console.log(r);
      })
    },
    distanceToPolygon(point, polygon) {
      let result = {
        point: null
      }
      let point1 = point;
      let point2 = null; //координаты ближайшей вершины на полигоне до выбранной точки

      let point2_1 = null; //первая соседняя вершина к point2
      let point2_2 = null; //вторая соседняя вершина к point2

      //Находим ближайшую вершину к выбранной точке
      let length = null;
      // eslint-disable-next-line no-unused-vars
      polygon.forEach((item, i, arr) => {
        let temp_length = this.getDistanceAir(point1, item);
        if(!length || length > temp_length) {
          length = temp_length;
          point2 = {
            index: i,
            lat: item.lat,
            lng: item.lng
          }
        }
      });

      //Находим соседние вершины
      if(point2.index == 0) {
        point2_1 = {
          index: polygon.length-1,
          lat: polygon[polygon.length-1].lat,
          lng: polygon[polygon.length-1].lng
        }
        point2_2 = {
          index: point2.index+1,
          lat: polygon[point2.index+1].lat,
          lng: polygon[point2.index+1].lng
        }
      } else if(point2.index == polygon.length-1) {
        point2_1 = {
          index: point2.index-1,
          lat: polygon[point2.index-1].lat,
          lng: polygon[point2.index-1].lng
        }
        point2_2 = {
          index: 0,
          lat: polygon[0].lat,
          lng: polygon[0].lng
        }
      } else {
        point2_1 = {
          index: point2.index - 1,
          lat: polygon[point2.index - 1].lat,
          lng: polygon[point2.index - 1].lng
        }
        point2_2 = {
          index: point2.index+1,
          lat: polygon[point2.index+1].lat,
          lng: polygon[point2.index+1].lng
        }
      }

      //Находим углы между векторами
      let angle1 = this.findAngle(point2_1, point2, point1).C;
      let angle2 = this.findAngle(point2, point2_2, point1).A;
      //console.log(this.findAngle({lat: -5, lng: 2}, {lat: 7, lng: -7}, {lat: 5, lng: 7}))

      console.log(angle1);
      console.log(angle2);
      if(angle1 >= 90 && angle2 >= 90) { //Если оба угла тупые, то вершиина и будет ближайшей точкой 
        result.point = point2;
        console.log(0);
      } else if(angle1 < angle2) { //Ищем меньший острый угол и находим высоту к ребру полигона и точку ближайшую
        //console.log(this.findXY({lat: -5, lng: 2}, {lat: 7, lng: -7}, {lat: 5, lng: 7}))
        result.point = this.findXY(point2_1, point2, point1);
        console.log(1);
      } else if(angle1 >= angle2) {
        result.point = this.findXY(point2, point2_2, point1);
        console.log(2);
      }

      this.markers.push({
        index: 1 + Math.max(0, ...this.markers.map(n => n.id)),
        position: new this.google.maps.LatLng(result.point.lat, result.point.lng)
      });

      //Находим растояние между точками по воздуху
      result.distanceAir = (to_flo(this.getDistanceAir(point1, result.point)) + " км").replace('.', ',');
      //Находим растояние между точками по дорогам
      return this.getDistanceRoad(this.google, point1.lat, point1.lng, result.point.lat, result.point.lng)
      .then(r => {
        result.distanceRoad = r.distance;
        result.address = r.address;

        //console.log(result);
        return result;
      });
    },
    /**
     * Поиск координат точки пересечения высоты и стороны полигона
     * 
     * A - первая вершина отрезка, к которому высота идет
     * B - вторая вершина отрезка, к которому высота идет
     * C - вершина от которой высота будет
     */
    findXY(A, B, C) {
      A = this.latLngToPoint(new this.google.maps.LatLng(A.lat, A.lng), this.google);
      B = this.latLngToPoint(new this.google.maps.LatLng(B.lat, B.lng), this.google);
      C = this.latLngToPoint(new this.google.maps.LatLng(C.lat, C.lng), this.google);

      let k = (A.y - B.y) / (A.x - B.x);
      let b = B.y - k * B.x;
      //console.log(k);
      //console.log(b);

      let k_ = -1 / k;
      let b_ = C.y - k_*C.x;
      //console.log(k_);
      //console.log(b_);

      let x = (b_ - b) / (k - k_);
      let y = k * x + b;

      //console.log(x);
      //console.log(y);
      return this.pointToLatLng(new this.google.maps.Point(x,y), this.google);
    },
    findAngle(A, B, C) {
      A = this.latLngToPoint(new this.google.maps.LatLng(A.lat, A.lng), this.google);
      B = this.latLngToPoint(new this.google.maps.LatLng(B.lat, B.lng), this.google);
      C = this.latLngToPoint(new this.google.maps.LatLng(C.lat, C.lng), this.google);

      //Длины сторон
      let str1 = Math.sqrt((B.x - A.x)*(B.x - A.x) + (B.y - A.y)*(B.y - A.y));
      let str2 = Math.sqrt((C.x - B.x)*(C.x - B.x) + (C.y - B.y)*(C.y - B.y));
      let str3 = Math.sqrt((C.x - A.x)*(C.x - A.x) + (C.y - A.y)*(C.y - A.y));

      let cosa = (str1*str1 + str3*str3 - str2*str2) / (2 * str1*str3);
      let cosb = (str2*str2 + str3*str3 - str1*str1) / (2 * str2*str3);
      let cosc = (str1*str1 + str2*str2 - str3*str3) / (2 * str1*str2);

      let angle1 = Math.acos(cosa) * 180/ Math.PI;
      let angle2 = Math.acos(cosb) * 180/ Math.PI;
      let angle3 = Math.acos(cosc) * 180/ Math.PI;

      return {
        A: angle1,
        B: angle2,
        C: angle3
      }
    },
    getDistanceAir(a, b) {
      return this.google.maps.geometry.spherical.computeDistanceBetween(new this.google.maps.LatLng(a.lat, a.lng), new this.google.maps.LatLng(b.lat, b.lng)) / 1000;
    },
    getDistanceRoad(google, LatOrigin, LngOrigin, LatDest, LngDest) {
      // eslint-disable-next-line no-unused-vars
      return new Promise(function(resolve, reject) {
        var origin = new google.maps.LatLng(LatOrigin,LngOrigin);
        var destination = new google.maps.LatLng(LatDest,LngDest);
        var service = new google.maps.DistanceMatrixService();

        //Создаем матрицу расстояния и по ней расстояние находим
        service.getDistanceMatrix({
            origins: [origin],
            destinations: [destination],
            travelMode: 'DRIVING', //Указываем по чем искать раятосние будем (по дорогам)
            unitSystem: google.maps.UnitSystem.metric,
            avoidHighways: false,
            avoidTolls: false,
        }, function(response, status) {
            if (status == 'OK') {
              //console.log('distance : '+result)
              //console.log('distance : '+origins)
              resolve({
                distance: response.rows[0].elements[0].distance.text,
                address: response.originAddresses[0]
              })
            }
        });

      })

    },
    //Первод координат в декартовую плоскость
    latLngToPoint(latLng, google) {
      let map = this.$refs.googleMap.$mapObject
      var topRight = map.getProjection().fromLatLngToPoint(map.getBounds().getNorthEast());
      var bottomLeft = map.getProjection().fromLatLngToPoint(map.getBounds().getSouthWest());
      var scale = Math.pow(2, map.getZoom());
      var worldPoint = map.getProjection().fromLatLngToPoint(latLng);
      return new google.maps.Point((worldPoint.x - bottomLeft.x) * scale, (worldPoint.y - topRight.y) * scale);
    },
    //Перевод координат с декартовой плоскости
    pointToLatLng(point, google) {
      let map = this.$refs.googleMap.$mapObject
      var topRight = map.getProjection().fromLatLngToPoint(map.getBounds().getNorthEast());
      var bottomLeft = map.getProjection().fromLatLngToPoint(map.getBounds().getSouthWest());
      var scale = Math.pow(2, map.getZoom());
      var worldPoint = new google.maps.Point(point.x / scale + bottomLeft.x, point.y / scale + topRight.y);
      var latlng = map.getProjection().fromPointToLatLng(worldPoint);
      return {
        lat: latlng.lat(),
        lng: latlng.lng()
      }
    },

  }
};
</script>