// Import dalipugaCoords from coords.js
import { dalipugaCoords } from './coords.js';

// Function to retrieve dalipugaCoords with a delay
function getDalipugaCoords(callback) {
  setTimeout(() => {
      callback(dalipugaCoords);
  }, 5000); // Adjust the delay as needed
}

// Usage
window.baranggayData = {
  "type": "FeatureCollection",
  "features": []
};

getDalipugaCoords((coords) => {
  console.log(coords);
  coords.forEach((item, index) => {
      // Access the coordinates and barangay name of each object
      console.log(item.coordinates);
      console.log(item.barangay);
      console.log(item.density);
      

      const feature = {
          "type": "Feature",
          "id": (index + 1).toString(),
          "properties": {
              "name": item.barangay,
              "density":item.density
          },
          "geometry": {
              "type": "Polygon",
              "coordinates": [item.coordinates]
          }
      };

      // Push the feature into window.baranggayData.features array
      window.baranggayData.features.push(feature);
  });

  // Log the completed window.baranggayData
  console.log(window.baranggayData);
});

// window.baranggayData = {
//   "type": "FeatureCollection",
//   "features": [
//   {
//       "type": "Feature",
//       "id": "01",
//       "properties": {
//         "name": dalipugaCoords.barangay,
//         "density": 94.65
//       },
//       "geometry": {
//         "type": "Polygon",
//         "coordinates": dalipugaCoords.coordinates
//       }
//   },

//   {
//       "type": "Feature",
//       "id": "02",
//       "properties": {
//         "name": "Kalubihon",
//         "density": 1082
//       },
//       "geometry": {
//           "type": "Polygon",
//           "coordinates": [
//               [
//                   [124.277434, 8.311374], // border dalipuga
//                   [124.267724, 8.305488], // border dalipuga
//                   [124.259586, 8.303171], // border dalipuga
//                   [124.256782, 8.302051], // border dalipuga
//                   [124.256052, 8.302698], // border dalipuga
//                   [124.255404, 8.302937], // border dalipuga
//                   [124.254294, 8.303043], // border sea
//                   [124.254200, 8.302871], // border sea
//                   [124.254270, 8.301929], // border sea
//                   [124.254362, 8.298446], // border sea
//                   [124.255241, 8.299248], // border something
//                   [124.261290, 8.298438], // border something
//                   [124.265637, 8.299896], // border something
//                   [124.267876, 8.301093], // border something
//                   [124.272036, 8.300195], // border something falls
//                   [124.273687, 8.300132], // border something school start
//                   [124.274592, 8.299880], // border something
//                   [124.274506, 8.299444], // border something
//                   [124.275675, 8.299174], // border kiwalan
//                   [124.276226, 8.300830], // border kiwalan-bunawan
//                   [124.279618, 8.300866], // border kiwalan
//                   [124.279881, 8.301965], // border kiwalan
//                   [124.280995, 8.305039], // border bunawan
//                   [124.280995, 8.305039], // border bunawan
//                   [124.281147, 8.305850], // border bunawan
//                   [124.281142, 8.306758], // border bunawan
//                   [124.280904, 8.307460], // border bunawan
//                   [124.279100, 8.309145], // border bunawan
//                   [124.279100, 8.309145], // border bunawan
//                   [124.279659, 8.309742], // border bunawan
//                   [124.279686, 8.310177], // border bunawan
//                   [124.279091, 8.310119], // border bunawan
//                   [124.278641, 8.309822]  // border bunawan
                
                
//               ]
//           ]
//       }
//   }, 
//   {
//       "type": "Feature",
//       "id": "03",
//       "properties": {
//         "name": "Tag-ibo",
//         "density": 15
//       },
//       "geometry": {
//           "type": "Polygon",
//           "coordinates": [
//               [
//                 [124.255241, 8.299248], // border something
//                 [124.261290, 8.298438], // border something
//                 [124.265637, 8.299896], // border something
//                 [124.267876, 8.301093], // border something
//                 [124.272036, 8.300195], // border something falls
//                 [124.273687, 8.300132], // border something school start
//                 [124.274592, 8.299880], // border something
//                 [124.274506, 8.299444], // border something
//                 [124.275675, 8.299174], // border kiwalan
//                 [124.275513, 8.298521], // border kiwalan
//                 [124.274692, 8.297571], // border kiwalan
//                 [124.271169, 8.295490], // border kiwalan
//                 [124.269577, 8.295150], // border kiwalan
//                 [124.269298, 8.295665], // border kiwalan
//                 [124.269100, 8.295840], // border kiwalan
//                 [124.268987, 8.295930], // border kiwalan
//                 [124.268771, 8.295978], // border kiwalan
//                 [124.268503, 8.295792], // border kiwalan
//                 [124.268460, 8.295261], // border kiwalan
//                 [124.268235, 8.294890], // border kiwalan
//                 [124.267110, 8.294646], // border kiwalan
//                 [124.265202, 8.293701], // border kiwalan
//                 [124.265091, 8.293324], // border kiwalan
//                 [124.265300, 8.293138], // border kiwalan
//                 [124.265499, 8.292750], // border kiwalan
//                 [124.265349, 8.292304], // border kiwalan
//                 [124.265059, 8.292070], // border kiwalan
//                 [124.264480, 8.292129], // border kiwalan
//                 [124.264078, 8.292304], // border kiwalan
//                 [124.264078, 8.292304], // border kiwalan
//                 [124.263761, 8.292155], // border kiwalan
//                 [124.263375, 8.291125], // border kiwalan
//                 [124.262774, 8.290685], // border kiwalan
//                 [124.262608, 8.290382], // border kiwalan
//                 [124.262500, 8.289082], // border kiwalan
//                 [124.261819, 8.288652], // border kiwalan
//                 [124.261272, 8.288153], // border kiwalan
//                 [124.261191, 8.287531], // border sea
//                 [124.261095, 8.287569], // border sea
//                 [124.259094, 8.287723], // border sea
//                 [124.258064, 8.287776], // border sea
//                 [124.257152, 8.288068], // border sea
//                 [124.257018, 8.290106], // border sea
//                 [124.257168, 8.291354], // border sea
//                 [124.256337, 8.293779], // border sea
//                 [124.255806, 8.294825], // border sea
//                 [124.254518, 8.296980], // border sea
//                 [124.254422, 8.297426], // border sea
//                 [124.254422, 8.297426], // border sea
//                 [124.254422, 8.297697], // border sea
//                 [124.254363, 8.297702], // border sea
//                 [124.254389, 8.298504]  // border sea
                  
//               ]
//           ]
//       }
//   },
//   {
//     "type": "Feature",
//     "id": "04",
//     "properties": {
//       "name": "Kiwalan",
//       "density": 24
//     },
//     "geometry": {
//         "type": "Polygon",
//         "coordinates": [
//             [
//               [124.275675, 8.299174], // border kiwalan
//               [124.275513, 8.298521], // border kiwalan
//               [124.274692, 8.297571], // border kiwalan
//               [124.271169, 8.295490], // border kiwalan
//               [124.269577, 8.295150], // border kiwalan
//               [124.269298, 8.295665], // border kiwalan
//               [124.269100, 8.295840], // border kiwalan
//               [124.268987, 8.295930], // border kiwalan
//               [124.268771, 8.295978], // border kiwalan
//               [124.268503, 8.295792], // border kiwalan
//               [124.268460, 8.295261], // border kiwalan
//               [124.268235, 8.294890], // border kiwalan
//               [124.267110, 8.294646], // border kiwalan
//               [124.265202, 8.293701], // border kiwalan
//               [124.265091, 8.293324], // border kiwalan
//               [124.265300, 8.293138], // border kiwalan
//               [124.265499, 8.292750], // border kiwalan
//               [124.265349, 8.292304], // border kiwalan
//               [124.265059, 8.292070], // border kiwalan
//               [124.264480, 8.292129], // border kiwalan
//               [124.264078, 8.292304], // border kiwalan
//               [124.263761, 8.292155], // border kiwalan
//               [124.263375, 8.291125], // border kiwalan
//               [124.262774, 8.290685], // border kiwalan
//               [124.262608, 8.290382], // border kiwalan
//               [124.262500, 8.289082], // border kiwalan
//               [124.261819, 8.288652], // border kiwalan
//               [124.261272, 8.288153], // border kiwalan
//               [124.261428, 8.287218], // border sea
//               [124.261218, 8.286783], // border sea
//               [124.261959, 8.286082], // border sea
//               [124.262441, 8.286173], // border sea
//               [124.263557, 8.284203], // border sea
//               [124.263922, 8.283603], // border sea
//               [124.264051, 8.283555], // border sea
//               [124.264142, 8.283571], // border sea
//               [124.264281, 8.283083], // border sea
//               [124.264378, 8.282972], // border sea
//               [124.264421, 8.282738], // border sea
//               [124.264426, 8.282059], // border sea
//               [124.264303, 8.281729], // border sea
//               [124.264002, 8.280551], // border sea
//               [124.264163, 8.279250], // border sea-acmac
//               [124.264555, 8.278820], // border acmac
//               [124.264834, 8.278327], // border acmac
//               [124.265124, 8.278173], // border acmac
//               [124.265499, 8.278311], // border acmac
//               [124.265703, 8.278337], // border acmac
//               [124.265966, 8.278231], // border acmac
//               [124.267607, 8.278650], // border acmac
//               [124.267886, 8.278884], // border acmac
//               [124.267881, 8.279059], // border acmac
//               [124.267983, 8.279686], // border acmac
//               [124.268240, 8.279845], // border acmac
//               [124.268584, 8.279824], // border acmac
//               [124.268970, 8.279611], // border acmac
//               [124.269276, 8.279696], // border acmac
//               [124.269565, 8.279930], // border acmac
//               [124.270445, 8.279946], // border acmac
//               [124.271105, 8.280206], // border acmac
//               [124.271668, 8.280737], // border acmac
//               [124.271845, 8.280800], // border acmac
//               [124.272280, 8.280657], // border acmac
//               [124.273406, 8.280041], // border acmac
//               [124.274173, 8.279192], // border acmac
//               [124.275804, 8.278343], // border acmac
//               [124.277242, 8.278688], // border bonbon
//               [124.278181, 8.278714], // border bonbon
//               [124.278781, 8.278316], // border bonbon
//               [124.278840, 8.277806], // border bonbon
//               [124.278502, 8.276633], // border bonbon
//               [124.278851, 8.276224], // border bonbon
//               [124.279634, 8.275943], // border bonbon
//               [124.280498, 8.276166], // border bonbon
//               [124.281067, 8.276665], // border bonbon
//               [124.281287, 8.277456], // border bonbon
//               [124.281464, 8.277706], // border bonbon
//               [124.281743, 8.277727], // border bonbon
//               [124.281979, 8.277573], // border bonbon
//               [124.282477, 8.277467], // border bonbon
//               [124.285766, 8.279024], // border bonbon
//               [124.287257, 8.279013], // border bonbon
//               [124.287944, 8.279077], // border bonbon
//               [124.288974, 8.279850], // border bonbon
//               [124.289650, 8.280158], // border bonbon
//               [124.290503, 8.280036], // border bonbon
//               [124.291517, 8.279319], // border bonbon
//               [124.292021, 8.278539], // border bonbon-filomena-kabacsanan
//               [124.292423, 8.277111], // border bonbon
//               [124.292627, 8.276734], // border bonbon
//               [124.293185, 8.276692], // border bonbon
//               [124.293796, 8.277053], // border bonbon
//               [124.295872, 8.277042], // border bonbon
//               [124.296430, 8.276745], // border bonbon
//               [124.298147, 8.276851], // border bonbon
//               [124.299681, 8.279495], // border bonbon-kabacsanan
//               [124.302101, 8.284405], // border kabacsanan
//               [124.302127, 8.284638], // border kabacsanan
//               [124.302090, 8.285801], // border kabacsanan
//               [124.301441, 8.285689], // border kabacsanan
//               [124.301049, 8.286273], // border kabacsanan
//               [124.300985, 8.286788], // border kabacsanan
//               [124.300877, 8.287091], // border kabacsanan
//               [124.300250, 8.287685], // border kabacsanan
//               [124.300191, 8.288046], // border kabacsanan
//               [124.300776, 8.288349], // border kabacsanan
//               [124.301012, 8.288445], // border kabacsanan
//               [124.301135, 8.288630], // border kabacsanan
//               [124.301135, 8.289023], // border kabacsanan
//               [124.300818, 8.289405], // border kabacsanan
//               [124.300480, 8.289591], // border kabacsanan
//               [124.300191, 8.289586], // border kabacsanan
//               [124.299982, 8.289899], // border kabacsanan
//               [124.299821, 8.290345], // border kabacsanan
//               [124.299944, 8.290759], // border kabacsanan
//               [124.300545, 8.290780], // border kabacsanan
//               [124.301398, 8.290764], // border kabacsanan
//               [124.301682, 8.295276], // border kabacsanan
//               [124.301671, 8.295260], // border kabacsanan
//               [124.301677, 8.295372], // border kabacsanan
//               [124.301655, 8.295494], // border kabacsanan
//               [124.301478, 8.295717], // border kabacsanan
//               [124.301371, 8.295887], // border kabacsanan
//               [124.301323, 8.296025], // border kabacsanan
//               [124.301392, 8.296396], // border kabacsanan
//               [124.301409, 8.296577], // border kabacsanan
//               [124.301510, 8.296736], // border kabacsanan
//               [124.301521, 8.296879], // border kabacsanan
//               [124.301435, 8.297161], // border kabacsana
//               [124.301269, 8.297511], // border kabacsanan-bunawan
//               [124.298136, 8.299088], // border bunawan
//               [124.297686, 8.299311], // border bunawan
//               [124.297310, 8.299459], // border bunawan
//               [124.297128, 8.299560], // border bunawan
//               [124.295298, 8.299098], // border bunawan
//               [124.294848, 8.299077], // border bunawan
//               [124.292766, 8.300845], // border bunawan
//               [124.292359, 8.300887], // border bunawan
//               [124.290701, 8.299762], // border bunawan
//               [124.290047, 8.299693], // border bunawan
//               [124.288781, 8.300176], // border bunawan
//               [124.288175, 8.300277], // border bunawan
//               [124.286211, 8.299077], // border bunawan
//               [124.284623, 8.300829], // border bunawan
//               [124.279886, 8.301959], // border bunawan
//               [124.279892, 8.301965], // border kalubihon-bunawan
//               [124.279618, 8.300866], // border Kalubihon
//               //[8.301959,124.279886], // border Kalubihon
//               [124.276196, 8.300834], // border Kalubihon
//               [124.275498, 8.298504]  // border Kalubihon         
//             ]
//         ]
//     }
//   }, 
//   {
//     "type": "Feature",
//     "id": "05",
//     "properties": {
//       "name": "Acmac",
//       "density": 52
//     },
//     "geometry": {
//       "type": "Polygon",
//       "coordinates": [
//         [
  
//               [124.264163, 8.279250], // border sea-acmac
//               [124.264555, 8.278820], // border acmac
//               [124.264834, 8.278327], // border acmac
//               [124.265124, 8.278173], // border acmac
//               [124.265499, 8.278311], // border acmac
//               [124.265703, 8.278337], // border acmac
//               [124.265966, 8.278231], // border acmac
//               [124.267607, 8.278650], // border acmac
//               [124.267886, 8.278884], // border acmac
//               [124.267881, 8.279059], // border acmac
//               [124.267983, 8.279686], // border acmac
//               [124.268240, 8.279845], // border acmac
//               [124.268584, 8.279824], // border acmac
//               [124.268970, 8.279611], // border acmac
//               [124.269276, 8.279696], // border acmac
//               [124.269565, 8.279930], // border acmac
//               [124.270445, 8.279946], // border acmac
//               [124.271105, 8.280206], // border acmac
//               [124.271668, 8.280737], // border acmac
//               [124.271845, 8.280800], // border acmac
//               [124.272280, 8.280657], // border acmac
//               [124.273406, 8.280041], // border acmac
//               [124.274173, 8.279192], // border kiwalan-kabacsanan 
//               [124.275804, 8.278343], // border kabacsanan  
//               [124.274833, 8.276888], // border kabacsanan  14
//               [124.274281, 8.275471], // border kabacsanan  
//               [124.274270, 8.274117], // border kabacsanan 
//               [124.274007, 8.273347], // border kabacsanan 
//               [124.273707, 8.272917], // border kabacsanan  
//               [124.273733, 8.272700], // border kabacsanan 
//               [124.273916, 8.272248], // border kabacsanan 
//               [124.274093, 8.271946], // border kabacsanan 
//               [124.273793, 8.271627], // border kabacsanan 
//               [124.273138, 8.271256], // border kabacsanan 
//               [124.272215, 8.271510], // border kabacsanan 
//               [124.271480, 8.271638], // border kabacsanan 
//               [124.270853, 8.271240], // border kabacsanan 
//               [124.268868, 8.269679], // border acmac-filomena - kabacsanan 
//               [124.268117, 8.269790], // border acmac-filomena        
//               [124.265901, 8.271420], // border acmac-filomena 
//               [124.265386, 8.271128], // border acmac-filomena
//               [124.264898, 8.271027], // border acmac-filomena
//               [124.264898, 8.271027], // border acmac-filomena
//               [124.264475, 8.271277], // border acmac-filomena
//               [124.263670, 8.271394], // border acmac-filomena
//               [124.261798, 8.273039], // border acmac-filomena
//               [124.261406, 8.272864], // border acmac-filomena
//               [124.261132, 8.272928], // border acmac-filomena
//               [124.260891, 8.273209], // border acmac-sea
//               [124.262935, 8.275879], // border acmac-sea
//               [124.263423, 8.276819], // border acmac-sea
//               [124.263573, 8.277222], // border acmac-sea
//         ]
//       ]
//     }
//   },
//   {
//     "type": "Feature",
//     "id": "06",
//     "properties": {
//       "name": "Santa Filomena",
//       "density": 110
//     },
//     "geometry": {
//       "type": "Polygon",
//       "coordinates": [
//         [
//               [124.268868, 8.269679], // border acmac 
//               [124.268117, 8.269790], // border acmac         
//               [124.265901, 8.271420], // border acmac 
//               [124.265386, 8.271128], // border acmac 
//               [124.264898, 8.271027], // border acmac
//               [124.264898, 8.271027], // border acmac
//               [124.264475, 8.271277], // border acmac
//               [124.263670, 8.271394], // border acmac
//               [124.261798, 8.273039], // border acmac
//               [124.261406, 8.272864], // border acmac
//               [124.261132, 8.272928], // border acmac
//               [124.260891, 8.273209], // border acmac-sea
//               [124.260800, 8.273083], // border filomena-sea
//               [124.259893, 8.272265], // border filomena-sea
//               [124.260199, 8.271952], // border filomena-sea
//               [124.259668, 8.271442], // border filomena-sea
//               [124.257769, 8.270933], // border filomena-sea
//               [124.256685, 8.268740], // border filomena-sea
//               [124.254009, 8.267158], // border filomena-sea
//               [124.253327, 8.266696], // border filomena-sea
//               [124.252137, 8.265974], // border filomena-sea-river
//               [124.252635, 8.264775], // border filomena-river
//               [124.252876, 8.264403], // border filomena-river
//               [124.253606, 8.262895], // border filomena-river
//               [124.253606, 8.262895], // border filomena-river
//               [124.253847, 8.262216], // border filomena-river
//               [124.254035, 8.260522], // border filomena-river
//               [124.254035, 8.260522], // border filomena-river
//               [124.254100, 8.259716], // border filomena-river
//               [124.253831, 8.258855], // border filomena-river (bridge)
//               [124.254411, 8.258425], // border hinaplanon
//               [124.254411, 8.258425], // border hinaplanon
//               [124.254749, 8.258441], // border hinaplanon
//               [124.254749, 8.258441], // border hinaplanon
//               [124.254979, 8.258203], // border hinaplanon
//               [124.256132, 8.255869], // border hinaplanon
//               [124.256605, 8.255468], // border hinaplanon
//               [124.257924, 8.253565], // border hinaplanon
//               [124.258793, 8.254224], // border hinaplanon
//               [124.260252, 8.254853], // border hinaplanon
//               [124.259421, 8.256743], // border hinaplanon
//               [124.259421, 8.256743], // border san roque
//               [124.258804, 8.257608], // border san roque
//               [124.258397, 8.257879], // border san roque
//               [124.257131, 8.258205], // border san roque
//               [124.259427, 8.260140], // border san roque
//               [124.263192, 8.261552], // border san roque
//               [124.265236, 8.262487], // border san roque
//               [124.265735, 8.264095], // border san roque
//               [124.267805, 8.264387], // border san roque (intersection)
//               [124.269012, 8.263745], // border san roque (intersection)
//               [124.269414, 8.263803], // border san roque 
//               [124.269961, 8.264260], // border san roque 
//               [124.270755, 8.264053], // border san roque 
//               [124.271705, 8.264892], // border san roque 
//               [124.272091, 8.265231], // border san roque 
//               [124.272236, 8.265688], // border san roque - kabacsanan
//         ]
//       ]
//     }
//   },
//   {
//     "type": "Feature",
//     "id": "11",
//     "properties": {
//       "name": "San Roque",
//       "density": 1194.65
//     },
//     "geometry": {
//       "type": "Polygon",
//       "coordinates": [
//         [
          
//           [124.260252, 8.254853], // border hinaplanon
//           [124.259421, 8.256743], // border san roque 
//           [124.258804, 8.257608], // border san roque
//           [124.258397, 8.257879], // border san roque
//           [124.257131, 8.258205], // border san roque
//           [124.259427, 8.260140], // border san roque
//           [124.263192, 8.261552], // border san roque
//           [124.265236, 8.262487], // border san roque
//           [124.265735, 8.264095], // border san roque
//           [124.267805, 8.264387], // border san roque (intersection)
//           [124.269012, 8.263745], // border san roque (intersection)
//           [124.269414, 8.263803], // border san roque 
//           [124.269961, 8.264260], // border san roque 
//           [124.270755, 8.264053], // border san roque 
//           [124.271705, 8.264892], // border san roque 
//           [124.272091, 8.265231], // border san roque 
//           [124.272236, 8.265688], // border san roque - kabacsanan
//           [124.274511, 8.266272], // border kabacsanan
//           [124.275885, 8.265710], // border kabacsanan
//           [124.278460, 8.266166], // border kabacsanan
//           [124.278460, 8.266166], // border kabacsanan
//           [124.280251, 8.264117], // border kabacsanan
//           [124.283019, 8.261941], // border upper hinaplanon
//           [124.280423, 8.260518], // border upper hinaplanon
//           [124.278030, 8.259711], // border upper hinaplanon
//           [124.273374, 8.257534], // border upper hinaplanon
//           [124.268095, 8.257205], // border upper hinaplanon
//           [124.263900, 8.255267], // border upper hinaplanon - san roque - hinaplanon
//           [124.262549, 8.255123], // border san roque
//           [124.261454, 8.255118], // border san roque
          
//         ]
//       ]
//     }
//   },
//   {
//     "type": "Feature",
//     "id": "07",
//     "properties": {
//       "name": "Hinaplanon",
//       "density": 254
//     },
//     "geometry": {
//       "type": "Polygon",
//       "coordinates": [
//         [
//               [124.252137, 8.265974], // border filomena-sea-river
//               [124.252635, 8.264775], // border filomena-river
//               [124.252876, 8.264403], // border filomena-river
//               [124.253606, 8.262895], // border filomena-river
//               [124.253606, 8.262895], // border filomena-river
//               [124.253847, 8.262216], // border filomena-river
//               [124.254035, 8.260522], // border filomena-river
//               [124.254035, 8.260522], // border filomena-river
//               [124.254100, 8.259716], // border filomena-river
//               [124.253831, 8.258855], // border filomena-river (bridge)
//               [124.254411, 8.258425], // border hinaplanon
//               [124.254411, 8.258425], // border hinaplanon
//               [124.254749, 8.258441], // border hinaplanon
//               [124.254749, 8.258441], // border hinaplanon
//               [124.254979, 8.258203], // border hinaplanon
//               [124.256132, 8.255869], // border hinaplanon
//               [124.256605, 8.255468], // border hinaplanon
//               [124.257924, 8.253565], // border hinaplanon
//               [124.258793, 8.254224], // border hinaplanon
//               [124.260252, 8.254853], // border hinaplanon          
//               [124.261454, 8.255118], // border san roque
//               [124.262549, 8.255123], // border san roque
//               [124.263900, 8.255267], // border upper hinaplanon - san roque
//               [124.264169, 8.253987], // border upper hinaplanon
//               [124.264287, 8.253703], // border upper hinaplanon
//               [124.267489, 8.251158], // border luinab - upper hinaplanon
//               [124.268240, 8.249384], // border luinab
//               [124.266566, 8.247505], // border luinab
//               [124.264753, 8.247112], // border luinab
//               [124.264538, 8.245116], // border luinab
//               [124.264195, 8.245536], // border luinab
//               [124.262827, 8.245074], // border luinab
//               [124.262838, 8.244670], // border luinab
//               [124.262511, 8.241686], // border del carmen - luinab
//               [124.262087, 8.241272], // border del carmen - luinab
//               [124.259791, 8.241246], // border santo rosario - bagong silang
//               [124.255902, 8.242106], // border santo rosario - bagong silang
//               [124.256283, 8.244091], // border santo rosario
//               [124.255446, 8.244665], // border santo rosario
//               [124.255382, 8.244808], // border santo rosario
//               [124.255022, 8.245100], // border santo rosario
//               [124.255022, 8.245100], // border santo rosario
//               [124.255467, 8.245812], // border santo rosario
//               [124.252726, 8.246459], // border santo rosario
//               [124.250945, 8.247648], // border santiago-santo rosario
//               [124.251835, 8.250441], // border river
//               [124.251835, 8.250462], // border river
//               [124.251320, 8.250637], // border river
//               [124.250484, 8.251205], // border river
//               [124.249738, 8.252023], // border river
//               [124.249277, 8.252819], // border river
//               [124.248794, 8.253610], // border river
//               [124.248129, 8.255776], // border river
//               [124.247228, 8.256018], // border river
//               [124.244620, 8.255843], // border sea
//               [124.244862, 8.257236], // border sea
//               [124.245238, 8.257661], // border sea
//               [124.245485, 8.258160], // border sea
//               [124.247201, 8.259721], // border sea
//               [124.247340, 8.260284], // border sea
//               [124.247357, 8.260634], // border sea
//               [124.247678, 8.261090], // border sea
//               [124.247796, 8.261584], // border sea
//               [124.248129, 8.262136], // border sea
//               [124.248360, 8.262465], // border sea
//               [124.248757, 8.263357], // border sea
//               [124.248644, 8.263755], // border sea
//               [124.248580, 8.264127], // border sea
//               [124.249148, 8.264775], // border sea
//               [124.249497, 8.264934], // border sea
//               [124.250355, 8.265284], // border sea
//               [124.250634, 8.265730], // border sea
//               [124.250768, 8.265794], // border filomena-sea-river
//         ]
//       ]
//     }
//   },
//   {
//     "type": "Feature",
//     "id": "08",
//     "properties": {
//       "name": "Santiago",
//       "density": 594.65
//     },
//     "geometry": {
//       "type": "Polygon",
//       "coordinates": [
//         [
//           [124.250945, 8.247648], // border santiago-santo rosario
//           [124.251835, 8.250441], // border river
//           [124.251835, 8.250462], // border river
//           [124.251320, 8.250637], // border river
//           [124.250484, 8.251205], // border river
//           [124.249738, 8.252023], // border river
//           [124.249277, 8.252819], // border river
//           [124.248794, 8.253610], // border river
//           [124.248129, 8.255776], // border river
//           [124.247228, 8.256018], // border river
//           [124.244620, 8.255843], // border sea
//           [124.245002, 8.253255], // border sea
//           [124.244927, 8.253074], // border sea
//           [124.244487, 8.252357], // border sea
//           [124.244326, 8.252533], // border sea
//           [124.243446, 8.251816], // border sea
//           [124.243156, 8.251455], // border sea
//           [124.243044, 8.251205], // border sea
//           [124.241783, 8.246900], // border sea
//           [124.241826, 8.246804], // border sea
//           [124.242083, 8.246778], // border sea
//           [124.242866, 8.249416], // border sea
//           [124.242979, 8.249523], // border sea
//           [124.243065, 8.249485], // border sea
//           [124.243108, 8.248716], // border sea
//           [124.242824, 8.247781], // border sea
//           [124.242609, 8.246831], // border sea
//           [124.242577, 8.246465], // border sea
//           [124.242266, 8.245610], // border sea
//           [124.242105, 8.245217], // border sea
//           [124.241536, 8.244702], // border tibanga - sea
//           [124.241928, 8.244511], // border tibanga 
//           [124.243140, 8.244007], // border tibanga 
//           [124.243376, 8.243327], // border tibanga
//           [124.243285, 8.242993], // border tibanga
//           [124.243623, 8.242950], // border tibanga
//           [124.244224, 8.243322], // border tibanga
//           [124.244524, 8.243348], // border tibanga
//           [124.248177, 8.241915], // border tibanga - san miguel - bagong silang
//           [124.248537, 8.242403], // border bagong silang
//           [124.248665, 8.242642], // border bagong silang
//           [124.248767, 8.242977], // border bagong silang - santo rosario
//           [124.248837, 8.243279], // border santo rosario
         
//         ]
//       ]
//     }
//   },
  
//   {
//     "type": "Feature",
//     "id": "09",
//     "properties": {
//       "name": "Tibanga",
//       "density": 356
//     },
//     "geometry": {
//       "type": "Polygon",
//       "coordinates": [
//         [
//           [124.246451, 8.241230], // san miguel
//           [124.246048, 8.241007], // san miguel
//           [124.244717, 8.239547], // san miguel
//           [124.244448, 8.239122], // san miguel
//           [124.243857, 8.237317], // san miguel
//           [124.243160, 8.235851], // san miguel
//           [124.242705, 8.234864], // border bridge - san miguel
//           [124.242018, 8.235193], // border river
//           [124.241471, 8.235453], // border river
//           [124.241347, 8.235565], // border river
//           [124.241036, 8.235628], // border river 
//           [124.240891, 8.235613], // border river 
//           [124.240746, 8.235613], // border river 
//           [124.240499, 8.235512], // border river 
//           [124.239447, 8.236186], // border river 
//           [124.239251, 8.236351], // border river 
//           [124.238993, 8.236754], // border river (bridge)
//           [124.238666, 8.237073], // border river
//           [124.238414, 8.237158], // border river
//           [124.238226, 8.237190], // border river
//           [124.238049, 8.237291], // border sea - river
//           [124.238119, 8.237588], // border sea
//           [124.238505, 8.238336], // border sea
//           [124.239154, 8.239218], // border sea
//           [124.239970, 8.240285], // border sea 
//           [124.240383, 8.240800], // border sea
//           [124.240582, 8.241548], // border sea
//           [124.240469, 8.241575], // border sea
//           [124.240485, 8.241782], // border sea
//           [124.240657, 8.242170], // border sea
//           [124.240689, 8.242377], // border sea
//           [124.240651, 8.242536], // border sea
//           [124.240866, 8.243173], // border sea
//           [124.241236, 8.243837], // border sea
//           [124.240962, 8.243996], // border sea
//           [124.241327, 8.244415], // border sea
//           [124.241274, 8.244490], // border sea
//           [124.241536, 8.244702], // border tibanga - sea
//           [124.241928, 8.244511], // border tibanga
//           [124.243140, 8.244007], // border tibanga
//           [124.243376, 8.243327], // border tibanga
//           [124.243285, 8.242993], // border tibanga
//           [124.243623, 8.242950], // border tibanga
//           [124.244224, 8.243322], // border tibanga
//           [124.244524, 8.243348], // border tibanga
//           [124.248177, 8.241915], // border tibanga - san miguel - bagong silang

//         ]
//       ]
//     }
//   },
//   {
//     "type": "Feature",
//     "id": "10",
//     "properties": {
//       "name": "Santo Rosario",
//       "density": 9
//     },
//     "geometry": {
//       "type": "Polygon",
//       "coordinates": [
//         [
//           [124.255902, 8.242106], // border santo rosario - bagong silang
//           [124.256283, 8.244091], // border santo rosario
//           [124.255446, 8.244665], // border santo rosario
//           [124.255382, 8.244808], // border santo rosario
//           [124.255022, 8.245100], // border santo rosario
//           [124.255022, 8.245100], // border santo rosario
//           [124.255467, 8.245812], // border santo rosario
//           [124.252726, 8.246459], // border santo rosario
//           [124.250945, 8.247648], // border santiago - santo rosario
//           [124.248837, 8.243279], // border bagong silang - santo rosario
//           [124.248767, 8.242977], // border bagong silang
//           [124.250044, 8.242626], // border bagong silang
//           [124.252248, 8.243507], // border bagong silang
//           [124.252490, 8.242828], // border bagong silang
//           [124.253166, 8.242451], // border bagong silang
//           [124.253858, 8.241867], // border bagong silang
//           [124.254636, 8.241379], // border bagong silang
//           [124.255457, 8.241559], // border bagong silang
//           [124.255457, 8.241559], // border bagong silang - hinaplanon

//         ]
//       ]
//     }
//   },
  
//   {
//     "type": "Feature",
//     "id": "12",
//     "properties": {
//       "name": "San Miguel",
//       "density": 99
//     },
//     "geometry": {
//       "type": "Polygon",
//       "coordinates": [
//         [
//           [124.244074, 8.234561], // villa verde - saray
//           [124.244143, 8.234689], // villa verde 
//           [124.244299, 8.234747], // villa verde
//           [124.245190, 8.234790], // villa verde
//           [124.245437, 8.234747], // villa verde
//           //[124.247074, 8.233462], // villa verde
//           [124.246623, 8.233781], // palao - villa verde
//           [124.247074, 8.233462], // palao
//           [124.247321, 8.233457], // palao
//           [124.248599, 8.234912], // palao
//           [124.248948, 8.235591], // palao
//           [124.249908, 8.237561], // palao
//           [124.250220, 8.237795], // bagong silang - san miguel - palao
//           [124.249709, 8.238533], // bagong silang
//           [124.251073, 8.239568], // bagong silang
//           [124.250751, 8.239828], // bagong silang
//           [124.250552, 8.240051], // bagong silang
//           [124.250295, 8.240492], // bagong silang
//           [124.249565, 8.242429], // bagong silang
//           [124.248177, 8.241915], // border tibanga - san miguel - bagong silang
//           [124.246451, 8.241230], // san miguel
//           [124.246048, 8.241007], // san miguel
//           [124.244717, 8.239547], // san miguel
//           [124.244448, 8.239122], // san miguel
//           [124.243857, 8.237317], // san miguel
//           [124.243160, 8.235851], // san miguel
//           [124.242705, 8.234864], // border bridge - san miguel
//         ]
//       ]
//     }
//   },

//   {
//     "type": "Feature",
//     "id": "13",
//     "properties": {
//       "name": "Bagong Silang",
//       "density": 11
//     },
//     "geometry": {
//       "type": "Polygon",
//       "coordinates": [
//         [ 
//           [124.259791, 8.241246], // border santo rosario - bagong silang
//           [124.257880, 8.240932], // delcarmen 
//           [124.257040, 8.240433], // delcarmen 
//           [124.256863, 8.240109], // delcarmen 
//           [124.255215, 8.239573], // delcarmen 
//           [124.255151, 8.239196], // delcarmen 
//           [124.254426, 8.239207], // delcarmen 
//           [124.254066, 8.237901], // delcarmen 
//           [124.253814, 8.236876], // delcarmen 
//           [124.252275, 8.235390], // bagong silang - delcarmen - palao
//           [124.250220, 8.237795], // bagong silang - san miguel - palao
//           [124.249709, 8.238533], // bagong silang
//           [124.251073, 8.239568], // bagong silang
//           [124.250751, 8.239828], // bagong silang
//           [124.250552, 8.240051], // bagong silang
//           [124.250295, 8.240492], // bagong silang
//           [124.249565, 8.242429], // bagong silang
//           [124.248177, 8.241915], // border tibanga - san miguel - bagong silang
//           [124.248537, 8.242403], // border bagong silang
//           [124.248665, 8.242642], // border bagong silang
//           [124.248767, 8.242977], // border bagong silang
//           [124.250044, 8.242626], // border bagong silang
//           [124.252248, 8.243507], // border bagong silang
//           [124.252490, 8.242828], // border bagong silang
//           [124.253166, 8.242451], // border bagong silang
//           [124.253858, 8.241867], // border bagong silang
//           [124.254636, 8.241379], // border bagong silang
//           [124.255457, 8.241559], // border bagong silang
//           [124.255902, 8.242106], // border santo rosario - bagong silang
//         ]
//       ]
//     }
//   },
//   {
//     "type": "Feature",
//     "id": "14",
//     "properties": {
//       "name": "Saray",
//       "density": 1009
//     },
//     "geometry": {
//       "type": "Polygon",
//       "coordinates": [
//         [
//           [124.244074, 8.234561], // villa verde - saray
//           [124.242705, 8.234864], // border bridge - san miguel
//           [124.242018, 8.235193], // border river
//           [124.241471, 8.235453], // border river
//           [124.241347, 8.235565], // border river
//           [124.241036, 8.235628], // border river 
//           [124.240891, 8.235613], // border river 
//           [124.240746, 8.235613], // border river 
//           [124.240499, 8.235512], // border river 
//           [124.239447, 8.236186], // border river 
//           [124.239251, 8.236351], // border river 
//           [124.238993, 8.236754], // border river (bridge)
//           [124.238666, 8.237073], // border river
//           [124.238414, 8.237158], // border river
//           [124.238226, 8.237190], // border river
//           [124.238049, 8.237291], // border sea - river
//           [124.237442, 8.237529], // border sea       
//           [124.237114, 8.237142], // border sea
//           [124.237393, 8.236860], // border sea
//           [124.237130, 8.236473], // border sea
//           [124.236921, 8.236573], // border sea
//           [124.236642, 8.236340], // border sea
//           [124.234130, 8.234917], // border sea
//           [124.233663, 8.235140], // border sea
//           [124.232190, 8.232236], // border sea
//           [124.234646, 8.231222], // border circle 
//           [124.238392, 8.230909], // border poblacion
//           [124.238532, 8.230824], // border poblacion
//           [124.238682, 8.230611], // border poblacion
//           [124.238306, 8.230378], // border bridge
//           [124.238451, 8.230277], // border river
//           [124.238719, 8.230229], // border river
//           [124.239235, 8.230346], // border river
//           [124.240913, 8.231275], // border poblacion-saray-villa verde
//           [124.241283, 8.231471], // border villa verde
//           [124.242550, 8.232852], // border villa verde
//           [124.243371, 8.233452], // border villa verde
      

//         ]
//       ]
//     }
//   },
//   {
//     "type": "Feature",
//     "id": "15",
//     "properties": {
//       "name": "Poblacion",
//       "density": 201
//     },
//     "geometry": {
//       "type": "Polygon",
//       "coordinates": [
//         [
//           [124.232190, 8.232236], // border sea
//           [124.234646, 8.231222], // border circle 
//           [124.238392, 8.230909], // border poblacion
//           [124.238532, 8.230824], // border poblacion
//           [124.238682, 8.230611], // border poblacion
//           [124.238306, 8.230378], // border bridge
//           [124.238451, 8.230277], // border river
//           [124.238719, 8.230229], // border river
//           [124.239235, 8.230346], // border river
//           [124.240913, 8.231275], // border poblacion-saray-villa verde
//           [124.240473, 8.228620], // border palao
//           [124.240226, 8.227022], // border palao - mahayahay
//           [124.237818, 8.226295], // border mahayahay - tambacan
//           [124.237158, 8.227097], // border bridge tambacan
//           [124.235542, 8.228015], // border river tambacan
//           [124.234425, 8.227782], // border sea
//           [124.234436, 8.228058], // border sea
//           [124.232703, 8.228177], // border sea
//           [124.232809, 8.229921], // border sea
//           [124.231749, 8.231381], // border sea
//         ]
//       ]
//     }
//   },
//   {
//     "type": "Feature",
//     "id": "16",
//     "properties": {
//       "name": "Villa Verde",
//       "density": 11
//     },
//     "geometry": {
//       "type": "Polygon",
//       "coordinates": [
//         [  
          
//           [124.240913, 8.231275], // border poblacion-saray-villa verde
//           [124.241283, 8.231471], // border villa verde
//           [124.242550, 8.232852], // border villa verde
//           [124.243371, 8.233452], // border villa verde
//           [124.244074, 8.234561], // villa verde - saray
//           [124.244143, 8.234689], // villa verde 
//           [124.244299, 8.234747], // villa verde
//           [124.245190, 8.234790], // villa verde
//           [124.245437, 8.234747], // villa verde
//           [124.246623, 8.233781], // palao - villa verde
//           [124.246144, 8.229804], // palao - villa verde
//           [124.245243, 8.227964], // palao - villa verde
//           [124.240473, 8.228620], // border palao
         
        
      
//         ]
//       ]
//     }
//   },
//   {
//     "type": "Feature",
//     "id": "72",
//     "properties": {
//       "name": "Puerto Rico",
//       "density": 1082
//     },
//     "geometry": {
//       "type": "Polygon",
//       "coordinates": [
//         [
//           [-66.448338, 17.984326],
//           [-66.771478, 18.006234],
//           [-66.924832, 17.929556],
//           [-66.985078, 17.973372],
//           [-67.209633, 17.956941],
//           [-67.154863, 18.19245],
//           [-67.269879, 18.362235],
//           [-65.626797, 18.203403],
//           [-65.730859, 18.186973],
//           [-66.234737, 17.929556],
//           [-66.448338, 17.984326]
//         ]
//       ]
//     }
//   }
// ]
// };

window.baranggayLayer = L.geoJson(baranggayData).addTo(map);