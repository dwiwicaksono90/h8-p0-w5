function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  var hasil = []
  if (arrPenumpang.length !== 0){
      for (var i = 0; i < arrPenumpang.length; i++){
        var obj = {}
        var count = 0
        obj.penumpang = arrPenumpang[i][0]
        obj.naikDari = arrPenumpang[i][1]
        obj.tujuan  = arrPenumpang[i][2]
        for (var j = 0; j < rute.length; j++){
          if (arrPenumpang[i][1] === rute[j]){
            count += 1
          } else if (arrPenumpang[i][2] === rute[j]) {
            obj.bayar = count * 2000
          } else if (count > 0) {
            count += 1
          }
        }
        hasil.push(obj)
      }
  }
  return hasil
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
