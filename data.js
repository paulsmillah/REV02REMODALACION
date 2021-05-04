var APP_DATA = {
  "scenes": [
    {
      "id": "0-bienvenidos",
      "name": "BIENVENIDOS",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -0.09519630659951872,
          "pitch": 0.45798919414475847,
          "rotation": 0,
          "target": "1-accesoestar"
        },
        {
          "yaw": -1.1800354529209969,
          "pitch": -1.4353131142416338,
          "rotation": 0,
          "target": "1-accesoestar"
        },
        {
          "yaw": -2.8272371317586398,
          "pitch": 1.3823852535575831,
          "rotation": 0,
          "target": "1-accesoestar"
        },
        {
          "yaw": -1.9855773359316782,
          "pitch": -0.3353402938603587,
          "rotation": 0,
          "target": "1-accesoestar"
        },
        {
          "yaw": 2.69876128816035,
          "pitch": -0.3491961721134267,
          "rotation": 0,
          "target": "1-accesoestar"
        },
        {
          "yaw": 1.3755379589154,
          "pitch": 0.06287657200699392,
          "rotation": 0,
          "target": "1-accesoestar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-accesoestar",
      "name": "ACCESOESTAR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4618995147748102,
          "pitch": 0.36667788239451937,
          "rotation": 0,
          "target": "2-cocinacomedor"
        },
        {
          "yaw": -1.4877085348285597,
          "pitch": 0.19922388613315078,
          "rotation": 0,
          "target": "3-pasolavadero"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5782987657577259,
          "pitch": 0.20312733307842024,
          "title": "Acceso desde hall",
          "text": "Text"
        }
      ]
    },
    {
      "id": "2-cocinacomedor",
      "name": "COCINACOMEDOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3350915728245916,
          "pitch": 0.5024494326997644,
          "rotation": 0,
          "target": "3-pasolavadero"
        },
        {
          "yaw": -1.4099863725670474,
          "pitch": 0.3215598156411694,
          "rotation": 0,
          "target": "4-pasobao"
        },
        {
          "yaw": -1.5119581409276996,
          "pitch": 0.07784249173788105,
          "rotation": 0,
          "target": "5-dormitorioprincipal"
        },
        {
          "yaw": 1.3567239002820912,
          "pitch": 0.3543610932209198,
          "rotation": 0,
          "target": "1-accesoestar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-pasolavadero",
      "name": "PASOLAVADERO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.237504265895671,
          "pitch": 0.5438241452430148,
          "rotation": 0,
          "target": "2-cocinacomedor"
        },
        {
          "yaw": 2.2898080790631408,
          "pitch": 0.2077315911491997,
          "rotation": 0,
          "target": "1-accesoestar"
        },
        {
          "yaw": -0.40069629116534955,
          "pitch": 0.5775355667185469,
          "rotation": 0,
          "target": "4-pasobao"
        },
        {
          "yaw": -0.7071968302019833,
          "pitch": 0.2976265020453859,
          "rotation": 0,
          "target": "5-dormitorioprincipal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-pasobao",
      "name": "PASOBAÑO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1204863289515146,
          "pitch": 0.30329703739467817,
          "rotation": 0,
          "target": "2-cocinacomedor"
        },
        {
          "yaw": 1.022831904805244,
          "pitch": 0.5586741174851468,
          "rotation": 0,
          "target": "3-pasolavadero"
        },
        {
          "yaw": -2.474170104642159,
          "pitch": 0.529948550749566,
          "rotation": 0,
          "target": "5-dormitorioprincipal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-dormitorioprincipal",
      "name": "DORMITORIOPRINCIPAL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8653764289498884,
          "pitch": 0.5115403968144587,
          "rotation": 0,
          "target": "4-pasobao"
        },
        {
          "yaw": -1.6791514753311052,
          "pitch": 0.3217743598264313,
          "rotation": 0,
          "target": "3-pasolavadero"
        },
        {
          "yaw": -1.6175363442582569,
          "pitch": 0.19580254956480303,
          "rotation": 0,
          "target": "2-cocinacomedor"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.304370139058568,
          "pitch": 0.1917948203524169,
          "title": "Vestidor y Baño Suite&nbsp;",
          "text": "Vestidor&nbsp;<div>Baño&nbsp;</div>"
        }
      ]
    }
  ],
  "name": "PROY-REMODEL.byPabloM",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
