var svService = new SinhVienService();

var layThongTinSinhVien = function(){
    var promise = svService.layDanhSachSinhVien();
    promise.then(function(result){
        var content = '';
        for(var i=0; i < result.data.length; i++){
            console.log(result.data.length);
            var sv = result.data[i];
            var sinhVien = new SinhVien();
            sinhVien.maSinhVien = sv.maSinhVien;
            sinhVien.tenSinhVien = sv.tenSinhVien;
            sinhVien.email = sv.email;
            sinhVien.loaiSinhVien = sv.loaiSinhVien;
            sinhVien.diemToan = sv.diemToan;
            sinhVien.diemLy = sv.diemLy;
            sinhVien.diemHoa = sv.diemHoa;
            sinhVien.diemRenLuyen = sv.diemRenLuyen;
            content += `<tr>
                <td>${sinhVien.maSinhVien}</td>
                <td>${sinhVien.tenSinhVien}</td>
                <td>${sinhVien.email}</td>
                <td>${sinhVien.loaiSinhVien}</td>
                <td>${sinhVien.tinhDiemTrungBinh().toFixed(2)}</td>
                <td>${sinhVien.diemRenLuyen}</td>
                <td><button class="btn btn-danger" onclick="xoaSinhVien('${sinhVien.maSinhVien}')">Xóa</button>
                <button class="btn btn-primary mr-1" onclick="chinhSua('${sinhVien.maSinhVien}')">Chỉnh sửa</button>
                </td>
            </tr>`
        }
        document.getElementById('tblSinhVien').innerHTML = content;
    }).catch(function(err){
        console.log(err.response.data);
    })
}
layThongTinSinhVien();
var xoaSinhVien = function(maSinhVien){
    var promise = svService.xoaSinhVien(maSinhVien);
    promise.then(function(result){


    }).catch(function(err){
        console.log(err.response.data);
    });
}
document.getElementById('btnThemSinhVien').onclick = function(){
    var sv = new SinhVien();
    sv.maSinhVien = document.getElementById('maSinhVien').value;
    sv.tenSinhVien = document.getElementById('tenSinhVien').value
    sv.diemToan = document.getElementById('diemToan').value;
    sv.diemLy = document.getElementById('diemLy').value;
    sv.diemHoa = document.getElementById('diemHoa').value;
    sv.diemRenLuyen = document.getElementById('diemRenLuyen').value;
    sv.email = document.getElementById('email').value;
    console.log('sinhVien', sv);
    axios({
        url: 'http://svcy.myclass.vn/api/SinhVienApi/ThemSinhVien',
        method: 'POST',
        data: sv
    }).then(function (result){
        console.log("Kết quả", result.data);
        location.reload();
    }).catch(function (err){
        console.log("Kết quả", err.response.data);
    })
}