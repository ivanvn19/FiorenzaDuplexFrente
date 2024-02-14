var APP_DATA = {
  "scenes": [
    {
      "id": "0-fachada-exterior",
      "name": "Fachada exterior",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.06945028821868249,
        "pitch": -0.3953381152861759,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 0.01441367902404167,
          "pitch": -0.15809762796828153,
          "rotation": 0,
          "target": "1-acceso-escaleras"
        },
        {
          "yaw": 0.6518504303838828,
          "pitch": -0.06184641522475687,
          "rotation": 0,
          "target": "5-acceso-veichulos-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-acceso-escaleras",
      "name": "acceso escaleras",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.008610877732699862,
        "pitch": -0.02902832315039916,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -0.012099552648399126,
          "pitch": -0.16945357335626277,
          "rotation": 0,
          "target": "2-hall-central"
        },
        {
          "yaw": -3.0601814326784886,
          "pitch": 0.09586227119463686,
          "rotation": 0,
          "target": "0-fachada-exterior"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-hall-central",
      "name": "hall central",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.27831394325616365,
          "pitch": 0.04245919801726927,
          "rotation": 0,
          "target": "3-ascensor-cocheras"
        },
        {
          "yaw": 3.109535585696018,
          "pitch": 0.17576032834269384,
          "rotation": 0,
          "target": "1-acceso-escaleras"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-ascensor-cocheras",
      "name": "ascensor/ cocheras",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.22584227995422523,
          "pitch": 0.01435332716065929,
          "rotation": 0,
          "target": "4-cocheras-descubiertas"
        },
        {
          "yaw": -1.7579937114292221,
          "pitch": 0.1406825478637188,
          "rotation": 0,
          "target": "7-palier"
        },
        {
          "yaw": 2.7850346360287705,
          "pitch": 0.05707424563486363,
          "rotation": 0,
          "target": "2-hall-central"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-cocheras-descubiertas",
      "name": "cocheras descubiertas",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.041424322996356,
          "pitch": 0.03477807256583887,
          "rotation": 0,
          "target": "3-ascensor-cocheras"
        },
        {
          "yaw": -1.3036400850034333,
          "pitch": 0.0761486571711707,
          "rotation": 0,
          "target": "6-vista-cocheras-descubiretas"
        },
        {
          "yaw": 1.7148332249058438,
          "pitch": 0.10616743668712303,
          "rotation": 1.5707963267948966,
          "target": "5-acceso-veichulos-"
        },
        {
          "yaw": 0.21763311214365189,
          "pitch": 0.1264377793531004,
          "rotation": 0,
          "target": "8-cocheras-descubiertas"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-acceso-veichulos-",
      "name": "acceso veichulos ",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.5218178273819731,
        "pitch": -0.10390296619701012,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 3.1357048354911274,
          "pitch": 0.12758164747296696,
          "rotation": 0,
          "target": "0-fachada-exterior"
        },
        {
          "yaw": -0.4280717638308609,
          "pitch": -0.027344446397515654,
          "rotation": 0,
          "target": "8-cocheras-descubiertas"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-vista-cocheras-descubiretas",
      "name": "vista cocheras descubiretas",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.14772171900281,
        "pitch": 0.07858989373579917,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -1.1995322799090147,
          "pitch": 0.03727523261241927,
          "rotation": 1.5707963267948966,
          "target": "3-ascensor-cocheras"
        },
        {
          "yaw": -2.470461997551748,
          "pitch": 0.09411547896680794,
          "rotation": 0,
          "target": "8-cocheras-descubiertas"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-palier",
      "name": "palier",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.8726709068927345,
        "pitch": 0.05322752990768187,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -0.042707282455634044,
          "pitch": 0.019990333866150678,
          "rotation": 3.141592653589793,
          "target": "3-ascensor-cocheras"
        },
        {
          "yaw": -1.7501712453341156,
          "pitch": 0.05728787058713891,
          "rotation": 0,
          "target": "9-living-comedor-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-cocheras-descubiertas",
      "name": "cocheras descubiertas",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.7172309959700858,
        "pitch": 0.40851148319419117,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -2.7140849278089156,
          "pitch": 0.013314623479281806,
          "rotation": 0,
          "target": "4-cocheras-descubiertas"
        },
        {
          "yaw": 2.6030445202446195,
          "pitch": 0.051570673129575084,
          "rotation": 0,
          "target": "5-acceso-veichulos-"
        },
        {
          "yaw": -2.2340370626360393,
          "pitch": 0.027637799012593334,
          "rotation": 0,
          "target": "6-vista-cocheras-descubiretas"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-living-comedor-",
      "name": "living comedor ",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.06333669643841233,
          "pitch": 0.14031065232714468,
          "rotation": 0,
          "target": "13-acceso-pa--bao-pb--cocina"
        },
        {
          "yaw": 1.4745823647400353,
          "pitch": 0.13938202782525622,
          "rotation": 0,
          "target": "10-balcn-c-parrilla-"
        },
        {
          "yaw": -2.575294994221977,
          "pitch": 0.1171491350793108,
          "rotation": 0,
          "target": "7-palier"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-balcn-c-parrilla-",
      "name": "Balcón c/ parrilla ",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 2.6088592684358938,
          "pitch": 0.04491399206589364,
          "rotation": 0,
          "target": "9-living-comedor-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-bao-pb",
      "name": "Baño PB",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.35263566564085025,
        "pitch": 0.20276003132191533,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 2.714741968951291,
          "pitch": 0.14741274812352145,
          "rotation": 0,
          "target": "13-acceso-pa--bao-pb--cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-ingreso-bao-y-cocina",
      "name": "Ingreso baño y cocina",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.03818880088433829,
        "pitch": -0.022727193651155275,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -1.4293953361862677,
          "pitch": 0.15810745282850824,
          "rotation": 0,
          "target": "11-bao-pb"
        },
        {
          "yaw": 2.886814874050536,
          "pitch": 0.11188834358711652,
          "rotation": 0,
          "target": "9-living-comedor-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-acceso-pa--bao-pb--cocina",
      "name": "acceso PA / Baño PB / Cocina",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6769982273223896,
          "pitch": 0.08136004493163895,
          "rotation": 0,
          "target": "11-bao-pb"
        },
        {
          "yaw": 0.8717165061994514,
          "pitch": -0.12444836204635479,
          "rotation": 5.497787143782138,
          "target": "14-descanso-escalera-"
        },
        {
          "yaw": 2.192341051092324,
          "pitch": 0.10949707084332161,
          "rotation": 13.351768777756625,
          "target": "10-balcn-c-parrilla-"
        },
        {
          "yaw": 2.972843594607795,
          "pitch": 0.11523766659062495,
          "rotation": 0,
          "target": "9-living-comedor-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-descanso-escalera-",
      "name": "Descanso escalera ",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.6792538888593,
        "pitch": -0.2805119899345119,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -1.6602836236076346,
          "pitch": -0.386098338697634,
          "rotation": 0,
          "target": "15-acceso-pa"
        },
        {
          "yaw": -2.0774983393306776,
          "pitch": 0.35417892915245197,
          "rotation": 3.9269908169872414,
          "target": "13-acceso-pa--bao-pb--cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-acceso-pa",
      "name": "Acceso PA",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.1542024713664922,
        "pitch": 0.46671094788392153,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 3.0954637332176143,
          "pitch": 0.35712743999760477,
          "rotation": 3.141592653589793,
          "target": "14-descanso-escalera-"
        },
        {
          "yaw": -1.9601705670859708,
          "pitch": 0.2114883265644334,
          "rotation": 0,
          "target": "16-star"
        },
        {
          "yaw": 1.0213810537038377,
          "pitch": 0.08004914535511354,
          "rotation": 5.497787143782138,
          "target": "17-bao-pa"
        },
        {
          "yaw": 1.8551230929209765,
          "pitch": 0.07693147330854622,
          "rotation": 0.7853981633974483,
          "target": "18-habitacin"
        },
        {
          "yaw": -2.417592866804444,
          "pitch": 0.024763338065003637,
          "rotation": 0.7853981633974483,
          "target": "20-balcn-habitacin-principal"
        },
        {
          "yaw": -1.612440192481003,
          "pitch": 0.04248905527358815,
          "rotation": 0,
          "target": "19-habitacin-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-star",
      "name": "Star",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.4998525218751784,
          "pitch": 0.17939995145365017,
          "rotation": 0,
          "target": "15-acceso-pa"
        },
        {
          "yaw": -0.5485423470322015,
          "pitch": 0.040741655456681514,
          "rotation": 0,
          "target": "20-balcn-habitacin-principal"
        },
        {
          "yaw": 0.6062603244726645,
          "pitch": 0.15360506052084233,
          "rotation": 0,
          "target": "19-habitacin-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-bao-pa",
      "name": "Baño PA",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.4523608469454672,
        "pitch": 0.19766905764308973,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 2.6504985159547356,
          "pitch": 0.1075299346100671,
          "rotation": 0.7853981633974483,
          "target": "15-acceso-pa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-habitacin",
      "name": "Habitación",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.5839145594718467,
          "pitch": 0.1552836170938896,
          "rotation": 0,
          "target": "15-acceso-pa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-habitacin-principal",
      "name": "Habitación principal",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.06430905612469395,
        "pitch": 0.16947366210199277,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -0.4534069982769555,
          "pitch": 0.1445576274647049,
          "rotation": 0,
          "target": "20-balcn-habitacin-principal"
        },
        {
          "yaw": -2.3701404494747607,
          "pitch": 0.09408339906932639,
          "rotation": 0,
          "target": "16-star"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-balcn-habitacin-principal",
      "name": "Balcón habitación principal",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.600998251561947,
        "pitch": 0.10264675924992517,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -3.0884088381149954,
          "pitch": 0.12333074959349233,
          "rotation": 0,
          "target": "19-habitacin-principal"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "FiorenzaDuplexFrente",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
